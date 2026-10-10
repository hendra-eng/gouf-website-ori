import { Link } from "react-router-dom";
import { ArrowRight, Check, X, ShieldCheck, Lock, DatabaseBackup, KeyRound, Quote, FileSpreadsheet, Landmark, CreditCard, ShoppingBag, Receipt, Users, Wallet, Code2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatusChip from "@/components/StatusChip";
import { ARTICLES } from "@/content/insight";
import { ArticleCard } from "@/pages/Insight";
import { STORIES } from "@/pages/KisahPelanggan";

export function StatsStrip() {
  const STATS = [
    ["18", "modul diperkenalkan", "Dari transaksi hingga analisis"],
    ["2", "perusahaan fiktif", "Coba berpindah konteks klien"],
    ["5", "langkah tur", "Kenali alur sebelum menjelajah"],
    ["0", "data asli diminta", "Demo memakai data fiktif IDR"],
  ];
  return (
    <section className="border-b border-line bg-white" data-testid="home-stats">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line lg:grid-cols-4">
        {STATS.map(([v, l, d], i) => (
          <Reveal key={l} delay={i * 0.06} className={i >= 2 ? "border-t border-line lg:border-t-0" : ""}>
            <div className="px-6 py-8 lg:px-8 lg:py-10">
              <p className="nums font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">{v}</p>
              <p className="mt-1 font-bold text-ink">{l}</p>
              <p className="mt-1 text-xs text-inkMuted">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CompareTeaser() {
  const ROWS: [string, boolean, boolean][] = [
    ["Satu sumber data untuk seluruh tim", false, true],
    ["Ringkasan kas terbarui otomatis", false, true],
    ["Laporan yang dibaca pemilik, bukan hanya akuntan", false, true],
    ["Hak akses per peran & jejak perubahan", false, true],
    ["Gratis di awal — mahal di waktu", true, false],
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Spreadsheet vs zafeb" title="Spreadsheet itu hebat — sampai ia mulai menyembunyikan masalah" sub="Kami tidak anti-spreadsheet. Kami hanya tahu kapan ia berhenti cukup." />
          <Reveal className="mt-8">
            <Link to="/perbandingan" className="btn-light" data-testid="home-compare-cta">Lihat perbandingan lengkap <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-line bg-white" data-testid="home-compare-table">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-line bg-paper px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-inkMuted">
              <span>Kriteria</span><span className="w-24 text-center">Spreadsheet</span><span className="w-24 text-center text-brand">zafeb</span>
            </div>
            {ROWS.map(([k, a, b]) => (
              <div key={k} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-line px-6 py-4 text-sm last:border-0">
                <span className="font-semibold text-ink">{k}</span>
                <span className="flex w-24 justify-center">{a ? <Check size={16} className="text-emerald-600" /> : <X size={16} className="text-red-400" />}</span>
                <span className="flex w-24 justify-center">{b ? <Check size={16} className="text-emerald-600" /> : <X size={16} className="text-red-400" />}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function IntegrationsStrip() {
  const ITEMS = [
    { icon: FileSpreadsheet, l: "Spreadsheet", s: "Tersedia" },
    { icon: Landmark, l: "Bank", s: "Dalam pengembangan" },
    { icon: CreditCard, l: "Pembayaran digital", s: "Dalam pengembangan" },
    { icon: ShoppingBag, l: "Marketplace", s: "Direncanakan" },
    { icon: Receipt, l: "Kasir / POS", s: "Direncanakan" },
    { icon: Users, l: "Payroll", s: "Direncanakan" },
    { icon: Wallet, l: "Pajak", s: "Direncanakan" },
    { icon: Code2, l: "API", s: "Direncanakan" },
  ] as const;
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Integrasi" title="Terhubung dengan cara Anda berbisnis" sub="Data datang dari bank, kasir, marketplace, dan penggajian. Semua berakhir sebagai transaksi berkategori di satu dasbor." />
          <Reveal>
            <Link to="/integrasi" className="btn-light" data-testid="home-integrations-cta">Semua integrasi <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4" data-testid="home-integrations-grid">
          {ITEMS.map((it, i) => (
            <Reveal key={it.l} delay={i * 0.04}>
              <Link to="/integrasi" className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm"><it.icon size={18} /></span>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-ink">{it.l}</p>
                  <StatusChip status={it.s} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SecurityStrip() {
  const PILLARS = [
    { icon: Lock, t: "Website melalui HTTPS" },
    { icon: DatabaseBackup, t: "Data demo terpisah" },
    { icon: KeyRound, t: "Tanpa kredensial admin" },
    { icon: ShieldCheck, t: "Simulasi berlabel jelas" },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="ledger-bg-dark mx-auto grid max-w-7xl gap-10 rounded-3xl bg-brand-deep px-8 py-12 text-white lg:grid-cols-12 lg:px-12 lg:py-16" data-testid="home-security">
          <div className="lg:col-span-5">
            <span className="eyebrow !text-mint">Keamanan & kepercayaan</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">Data keuangan adalah data paling sensitif. Kami memperlakukannya begitu.</h2>
            <Link to="/keamanan" className="btn-mint mt-8" data-testid="home-security-cta">Praktik keamanan kami <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {PILLARS.map((p) => (
              <div key={p.t} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-mint"><p.icon size={18} /></span>
                <p className="font-bold">{p.t}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function StoriesTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading eyebrow="Kisah pelanggan" title="Bagaimana bisnis seperti Anda memakainya" sub="Skenario ilustratif dari pola yang paling sering kami temui." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {STORIES.slice(0, 3).map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.07}>
            <Link to="/kisah-pelanggan" className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50" data-testid={`home-story-${i}`}>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-mint/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand">{s.industri}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-inkMuted">{s.persona}</span>
              </div>
              <Quote size={20} className="mt-6 text-mint" />
              <p className="mt-3 font-display text-lg font-bold leading-snug text-ink group-hover:text-brand">{s.kutipan}</p>
              <p className="mt-4 text-sm text-inkMuted">{s.perusahaan}</p>
              <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
                {s.hasil.map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-paper p-2.5">
                    <p className="nums font-display text-sm font-extrabold text-brand">{v}</p>
                    <p className="text-[9px] uppercase leading-tight tracking-wider text-inkMuted">{l}</p>
                  </div>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function InsightTeaser() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Insight" title="Bacaan singkat untuk keputusan yang lebih tenang" />
          <Reveal>
            <Link to="/insight" className="btn-light" data-testid="home-insight-cta">Semua artikel <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.06}><ArticleCard a={a} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
