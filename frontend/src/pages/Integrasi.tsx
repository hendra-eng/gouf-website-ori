import { Link } from "react-router-dom";
import { ArrowRight, Landmark, ShoppingBag, Receipt, Wallet, FileSpreadsheet, Code2, CreditCard, Users } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatusChip from "@/components/StatusChip";
import CtaBanner from "@/components/CtaBanner";

type Status = "Demo tersedia" | "Perlu konfirmasi" | "Belum terhubung";

const CATEGORIES: { icon: typeof Landmark; title: string; desc: string; status: Status; items: string[] }[] = [
  { icon: FileSpreadsheet, title: "Ekspor CSV demo", desc: "Unduh transaksi dan laporan fiktif dari demo mandiri. Impor produksi belum diverifikasi.", status: "Demo tersedia", items: ["Ekspor transaksi contoh", "Ekspor laporan demo", "CSV berlabel simulasi"] },
  { icon: Landmark, title: "Bank & Mutasi Rekening", desc: "Tarik mutasi rekening untuk rekonsiliasi yang lebih cepat dan akurat.", status: "Perlu konfirmasi", items: ["Unggah mutasi bank", "Pencocokan otomatis", "Koneksi bank langsung"] },
  { icon: CreditCard, title: "Pembayaran Digital", desc: "Catat transaksi dari gerbang pembayaran dan dompet digital populer di Indonesia.", status: "Perlu konfirmasi", items: ["QRIS", "Transfer virtual account", "E-wallet"] },
  { icon: ShoppingBag, title: "Marketplace & E-commerce", desc: "Sinkronkan pesanan dan biaya platform dari toko online Anda.", status: "Belum terhubung", items: ["Tokopedia", "Shopee", "Toko web (WooCommerce, Shopify)"] },
  { icon: Receipt, title: "Kasir / POS", desc: "Penjualan harian dari sistem kasir langsung masuk sebagai pemasukan.", status: "Belum terhubung", items: ["Ringkasan penjualan harian", "Kategori otomatis", "Multi-outlet"] },
  { icon: Users, title: "Payroll & HR", desc: "Beban gaji dan tunjangan tercatat otomatis setiap periode penggajian.", status: "Belum terhubung", items: ["Jurnal gaji otomatis", "Pengelompokan per departemen"] },
  { icon: Wallet, title: "Pajak", desc: "Siapkan data untuk pelaporan pajak bersama konsultan Anda.", status: "Belum terhubung", items: ["Rekap PPN", "Rekap PPh", "Ekspor format konsultan"] },
  { icon: Code2, title: "API & Webhook", desc: "Hubungkan sistem internal Anda langsung ke zafeb.", status: "Belum terhubung", items: ["REST API", "Webhook transaksi", "Kunci API per peran"] },
];

export default function Integrasi() {
  return (
    <div data-testid="page-integrasi">
      <Seo title="Integrasi — zafeb" description="Hubungkan zafeb dengan spreadsheet, bank, pembayaran digital, marketplace, kasir, payroll, pajak, dan API." />
      <PageHero
        eyebrow="Integrasi"
        title="Kenali yang terhubung — dan yang belum."
        sub="Demo website menyediakan ekspor CSV dari data fiktif. Koneksi bank, pembayaran, dan layanan pihak ketiga tidak aktif di demo ini; cakupan produksi harus dikonfirmasi."
        testId="integrasi-hero"
      >
        <div className="flex flex-wrap gap-2">
          <StatusChip status="Demo tersedia" />
          <StatusChip status="Perlu konfirmasi" />
          <StatusChip status="Belum terhubung" />
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50" data-testid={`integrasi-card-${i}`}>
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-mint"><c.icon size={20} /></span>
                  <StatusChip status={c.status} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-inkMuted">{c.desc}</p>
                </div>
                <ul className="mt-auto space-y-1.5 border-t border-line pt-4">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-xs text-ink">
                      <span className="h-1 w-1 rounded-full bg-mint" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Cara kerja integrasi"
            title="Masuk sebagai transaksi, bukan sebagai tumpukan file"
            sub="Apa pun sumbernya, setiap data yang masuk diperlakukan sama: menjadi transaksi berkategori yang bisa dicari, difilter, dan muncul di laporan."
          />
          <Reveal delay={0.1}>
            <ol className="space-y-3">
              {[
                ["Hubungkan sumber", "Unggah berkas atau sambungkan layanan yang didukung."],
                ["Petakan kategori", "Tentukan sekali bagaimana setiap jenis data dikategorikan."],
                ["Tinjau & setujui", "Transaksi baru masuk ke antrean tinjauan sebelum tercatat."],
                ["Laporan terbarui", "Ringkasan, laba rugi, dan arus kas langsung mencerminkan data baru."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-2xl bg-paper p-5" data-testid={`integrasi-step-${i}`}>
                  <span className="font-mono text-sm font-bold text-brand">0{i + 1}</span>
                  <div>
                    <p className="font-bold text-ink">{t}</p>
                    <p className="text-sm text-inkMuted">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-dashed border-brand/30 bg-mint/5 p-8 md:flex-row md:items-center" data-testid="integrasi-request">
            <div>
              <h3 className="font-display text-xl font-bold text-ink">Butuh integrasi yang belum ada di daftar?</h3>
              <p className="mt-1 text-sm text-inkMuted">Beri tahu kami sistem yang Anda pakai. Permintaan integrasi membantu kami menyusun prioritas peta jalan.</p>
            </div>
            <Link to="/kontak" className="btn-primary shrink-0" data-testid="integrasi-request-cta">
              Ajukan integrasi <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBanner title="Lihat alur integrasi dalam demo" sub="Tim kami menunjukkan bagaimana data dari sumber Anda masuk ke laporan — dengan data fiktif." />
    </div>
  );
}
