import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { Search, Download, Play, ArrowDownLeft, ArrowUpRight, Info } from "lucide-react";
import {
  DEMO_SERIES, DEMO_FORECAST, DEMO_CATEGORIES, CATEGORY_COLORS, DEMO_TRANSACTIONS, type DemoTx,
} from "@/content/demoData";
import { formatIDR, formatIDRCompact } from "@/lib/format";
import TxDrawer, { downloadDemoCsv } from "@/components/demo/TxDrawer";
import Tour, { type TourStep } from "@/components/demo/Tour";

const TABS = [
  { id: "ringkasan", label: "Ringkasan" },
  { id: "transaksi", label: "Transaksi" },
  { id: "laporan", label: "Laporan" },
  { id: "proyeksi", label: "Proyeksi" },
] as const;

const TOUR_STEPS: TourStep[] = [
  { target: "demo-tabs", title: "Pindah antar tampilan", desc: "Ringkasan, transaksi, laporan, dan proyeksi — semuanya memakai data fiktif berlabel demo." },
  { target: "demo-search", title: "Cari & filter transaksi", desc: "Coba cari kata seperti \u201csewa\u201d atau pilih kategori untuk memfilter tabel." },
  { target: "demo-chart-area", title: "Grafik interaktif", desc: "Arahkan kursor ke grafik untuk melihat angka rupiah per bulan." },
  { target: "demo-export", title: "Ekspor contoh", desc: "Unduh berkas CSV berisi data demo — contoh nyata hasil ekspor." },
];

const tooltipStyle = {
  backgroundColor: "#071817",
  border: "1px solid #155E5B",
  borderRadius: "12px",
  color: "#fff",
  fontSize: "12px",
  fontFamily: "'JetBrains Mono', monospace",
};

function DemoBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
      <Info size={11} /> Data demo - angka fiktif
    </span>
  );
}

function StatPill({ label, value, positive }: { label: string; value: number; positive?: boolean }) {
  return (
    <div className="card p-4" data-testid="demo-stat-pill">
      <p className="text-[10px] font-bold uppercase tracking-wider text-inkMuted">{label}</p>
      <p className={`nums mt-1 font-mono text-lg font-bold sm:text-xl ${positive === true ? "text-emerald" : positive === false ? "text-amber-600" : "text-ink"}`}>
        {formatIDR(value)}
      </p>
    </div>
  );
}

export default function DemoExplorer() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("ringkasan");
  const [query, setQuery] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [selected, setSelected] = useState<DemoTx | null>(null);
  const [tourOpen, setTourOpen] = useState(false);

  const kategoriList = useMemo(() => ["Semua", ...Array.from(new Set(DEMO_TRANSACTIONS.map((t) => t.kategori)))], []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DEMO_TRANSACTIONS.filter(
      (t) =>
        (kategori === "Semua" || t.kategori === kategori) &&
        (!q || t.deskripsi.toLowerCase().includes(q) || t.kategori.toLowerCase().includes(q) || t.metode.toLowerCase().includes(q))
    );
  }, [query, kategori]);

  const totalMasuk = DEMO_TRANSACTIONS.filter((t) => t.tipe === "masuk").reduce((a, t) => a + t.jumlah, 0);
  const totalKeluar = DEMO_TRANSACTIONS.filter((t) => t.tipe === "keluar").reduce((a, t) => a + t.jumlah, 0);

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-brand/5" data-testid="demo-explorer">
      {/* toolbar */}
      <div className="flex flex-col gap-4 border-b border-line bg-paper px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3" data-tour="demo-tabs" data-testid="demo-tabs">
          <div role="tablist" aria-label="Tampilan demo" className="inline-flex rounded-full border border-line bg-white p-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className="relative rounded-full px-4 py-2 text-xs font-bold transition-colors sm:text-sm"
                data-testid={`demo-tab-${t.id}-button`}
              >
                {tab === t.id && (
                  <motion.span layoutId="demo-tab-pill" className="absolute inset-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                )}
                <span className={`relative z-10 ${tab === t.id ? "text-white" : "text-inkMuted"}`}>{t.label}</span>
              </button>
            ))}
          </div>
          <DemoBadge />
        </div>
        <button onClick={() => setTourOpen(true)} className="btn-primary !px-5 !py-2.5 text-xs" data-testid="demo-tour-start-button">
          <Play size={14} /> Mulai Tur
        </button>
      </div>

      <div className="p-4 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {tab === "ringkasan" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  <StatPill label="Pemasukan (Jun)" value={121450000} positive />
                  <StatPill label="Pengeluaran (Jun)" value={88100000} positive={false} />
                  <StatPill label="Saldo kas" value={143320000} />
                  <StatPill label="Selisih bulan ini" value={121450000 - 88100000} positive />
                </div>
                <div className="card p-4" data-tour="demo-chart-area" data-testid="demo-chart-area">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-inkMuted">Pemasukan vs pengeluaran per bulan</p>
                  <ResponsiveContainer width="100%" height={260}>
                    <AreaChart data={DEMO_SERIES} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="gMasuk" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="gKeluar" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0D4746" stopOpacity={0.25} />
                          <stop offset="100%" stopColor="#0D4746" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8E5" vertical={false} />
                      <XAxis dataKey="bulan" tick={{ fontSize: 11, fill: "#4B6360" }} axisLine={false} tickLine={false} />
                      <YAxis tickFormatter={formatIDRCompact} tick={{ fontSize: 10, fill: "#4B6360" }} axisLine={false} tickLine={false} width={70} />
                      <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => formatIDR(v)} />
                      <Area type="monotone" dataKey="pemasukan" name="Pemasukan" stroke="#10B981" strokeWidth={2.5} fill="url(#gMasuk)" />
                      <Area type="monotone" dataKey="pengeluaran" name="Pengeluaran" stroke="#0D4746" strokeWidth={2} fill="url(#gKeluar)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {tab === "transaksi" && (
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row" data-tour="demo-search" data-testid="demo-search">
                  <div className="relative flex-1">
                    <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-inkMuted" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Cari deskripsi, kategori, atau metode..."
                      aria-label="Cari transaksi"
                      className="input-field !pl-10"
                      data-testid="demo-search-input"
                    />
                  </div>
                  <select value={kategori} onChange={(e) => setKategori(e.target.value)} aria-label="Filter kategori" className="input-field sm:w-52" data-testid="demo-category-select">
                    {kategoriList.map((k) => (
                      <option key={k} value={k}>{k}</option>
                    ))}
                  </select>
                  <button onClick={downloadDemoCsv} className="btn-light !py-3 whitespace-nowrap" data-tour="demo-export" data-testid="demo-export-button">
                    <Download size={15} /> Contoh CSV
                  </button>
                </div>

                <div className="overflow-hidden rounded-xl border border-line">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-line bg-paper font-mono text-[10px] uppercase tracking-widest text-inkMuted">
                          <th className="px-4 py-3 font-bold">Tanggal</th>
                          <th className="px-4 py-3 font-bold">Deskripsi</th>
                          <th className="px-4 py-3 font-bold">Kategori</th>
                          <th className="px-4 py-3 text-right font-bold">Jumlah</th>
                        </tr>
                      </thead>
                      <tbody data-testid="demo-tx-table">
                        {filtered.map((t) => (
                          <tr
                            key={t.id}
                            onClick={() => setSelected(t)}
                            className="cursor-pointer border-b border-line/60 transition-colors last:border-0 hover:bg-mint/5"
                            data-testid={`demo-tx-row-${t.id}`}
                          >
                            <td className="px-4 py-3 text-xs text-inkMuted">{t.tanggal}</td>
                            <td className="px-4 py-3 font-medium text-ink">
                              <span className="mr-2 inline-flex items-center justify-center rounded-full p-1 align-middle" style={{ background: t.tipe === "masuk" ? "rgba(16,185,129,.12)" : "rgba(13,71,70,.08)" }}>
                                {t.tipe === "masuk" ? <ArrowDownLeft size={12} className="text-emerald" /> : <ArrowUpRight size={12} className="text-brand" />}
                              </span>
                              {t.deskripsi}
                            </td>
                            <td className="px-4 py-3">
                              <span className="rounded-full bg-paper border border-line px-2.5 py-0.5 text-[11px] font-medium text-inkMuted">{t.kategori}</span>
                            </td>
                            <td className={`nums px-4 py-3 text-right font-mono font-bold ${t.tipe === "masuk" ? "text-emerald" : "text-ink"}`}>
                              {t.tipe === "masuk" ? "+" : "-"} {formatIDR(t.jumlah)}
                            </td>
                          </tr>
                        ))}
                        {filtered.length === 0 && (
                          <tr>
                            <td colSpan={4} className="px-4 py-10 text-center text-sm text-inkMuted" data-testid="demo-tx-empty">
                              Tidak ada transaksi yang cocok. Coba kata kunci lain.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-xs text-inkMuted" data-testid="demo-tx-count">
                  Menampilkan {filtered.length} dari {DEMO_TRANSACTIONS.length} transaksi demo. Klik baris untuk melihat detail.
                </p>
              </div>
            )}

            {tab === "laporan" && (
              <div className="grid gap-4 lg:grid-cols-5">
                <div className="card p-4 lg:col-span-3" data-testid="demo-chart-cashflow">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-inkMuted">Arus kas bersih per bulan</p>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={DEMO_SERIES.map((d) => ({ bulan: d.bulan, bersih: d.pemasukan - d.pengeluaran }))}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8E5" vertical={false} />
                      <XAxis dataKey="bulan" tick={{ fontSize: 11, fill: "#4B6360" }} axisLine={false} tickLine={false} />
                      <YAxis tickFormatter={formatIDRCompact} tick={{ fontSize: 10, fill: "#4B6360" }} axisLine={false} tickLine={false} width={70} />
                      <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => formatIDR(v)} cursor={{ fill: "rgba(52,211,153,.08)" }} />
                      <Bar dataKey="bersih" name="Kas bersih" fill="#0D4746" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="card p-4 lg:col-span-2" data-testid="demo-chart-categories">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-inkMuted">Pengeluaran per kategori (Jun)</p>
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie data={DEMO_CATEGORIES} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2} stroke="none">
                        {DEMO_CATEGORIES.map((_, i) => (
                          <Cell key={i} fill={CATEGORY_COLORS[i % CATEGORY_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => formatIDR(v)} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {tab === "proyeksi" && (
              <div className="space-y-4">
                <div className="card p-4" data-testid="demo-chart-forecast">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-inkMuted">Proyeksi pemasukan (garis putus-putus)</p>
                  <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-600" data-testid="demo-forecast-label">
                    <Info size={11} /> Simulasi sederhana pada data demo - bukan fitur AI
                  </p>
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={DEMO_FORECAST}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8E5" vertical={false} />
                      <XAxis dataKey="bulan" tick={{ fontSize: 11, fill: "#4B6360" }} axisLine={false} tickLine={false} />
                      <YAxis tickFormatter={formatIDRCompact} tick={{ fontSize: 10, fill: "#4B6360" }} axisLine={false} tickLine={false} width={70} domain={["dataMin - 20000000", "dataMax + 20000000"]} />
                      <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => formatIDR(v)} />
                      <Line type="monotone" dataKey="aktual" name="Aktual" stroke="#0D4746" strokeWidth={2.5} dot={{ r: 3 }} connectNulls={false} />
                      <Line type="monotone" dataKey="proyeksi" name="Proyeksi" stroke="#10B981" strokeWidth={2.5} strokeDasharray="6 6" dot={{ r: 3 }} connectNulls={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs leading-relaxed text-inkMuted">
                  Garis proyeksi dihitung dari pola sederhana pada data demo untuk menggambarkan bagaimana arah tren ditampilkan. Angka ini sepenuhnya fiktif.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-2 border-t border-line bg-paper px-4 py-4 text-xs text-inkMuted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>
          Total demo: pemasukan <span className="nums font-mono font-bold text-emerald">{formatIDR(totalMasuk)}</span> - pengeluaran{" "}
          <span className="nums font-mono font-bold text-ink">{formatIDR(totalKeluar)}</span>
        </span>
        <span className="font-mono uppercase tracking-widest">{DEMO_TRANSACTIONS.length} transaksi fiktif - PT Cahaya Nusantara</span>
      </div>

      <TxDrawer tx={selected} onClose={() => setSelected(null)} />
      <Tour steps={TOUR_STEPS} open={tourOpen} onClose={() => setTourOpen(false)} />
    </div>
  );
}
