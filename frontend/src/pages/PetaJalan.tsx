import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Hammer, CalendarClock } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import StatusChip from "@/components/StatusChip";
import CtaBanner from "@/components/CtaBanner";

const LANES: { status: "Demo tersedia" | "Ilustratif" | "Perlu konfirmasi"; icon: typeof Hammer; title: string; items: { t: string; d: string }[] }[] = [
  {
    status: "Demo tersedia", icon: CheckCircle2, title: "Bisa dicoba di website",
    items: [
      { t: "Ringkasan & perusahaan", d: "Dua perusahaan fiktif dengan data terpisah." },
      { t: "Transaksi & laporan", d: "Tambah/ubah catatan dan lihat empat laporan ikut menghitung." },
      { t: "Skenario anggaran", d: "Coba asumsi pendapatan serta beban." },
      { t: "Tur & ekspor", d: "Panduan lima langkah dan unduh CSV demo." },
    ],
  },
  {
    status: "Ilustratif", icon: Hammer, title: "Pratinjau edukatif",
    items: [
      { t: "AI Financial Analyst", d: "Contoh jawaban berbasis aturan, bukan AI langsung." },
      { t: "Agent AI", d: "Alur berkas contoh tanpa unggah atau posting otomatis." },
      { t: "Persiapan pajak", d: "Checklist contoh, bukan pelaporan resmi." },
      { t: "Dokumen", d: "Contoh fiktif, bukan bukti transaksi sah." },
    ],
  },
  {
    status: "Perlu konfirmasi", icon: CalendarClock, title: "Sebelum penggunaan bisnis",
    items: [
      { t: "Cakupan produksi", d: "Fitur aktif, harga, dan dukungan dibahas bersama tim." },
      { t: "Akses & kebijakan data", d: "Hak peran, pencadangan, retensi, dan keamanan perlu diverifikasi." },
      { t: "Integrasi & migrasi", d: "Konfirmasi format impor, bank, pembayaran, serta perpajakan." },
      { t: "AI produksi", d: "Konfirmasi layanan, batas pemakaian, dan pemrosesan data." },
    ],
  },
];

export default function PetaJalan() {
  return (
    <div data-testid="page-peta-jalan">
      <Seo title="Peta Jalan Produk — zafeb" description="Fitur zafeb yang tersedia sekarang, sedang dikerjakan, dan direncanakan." />
      <PageHero
        eyebrow="Peta jalan produk"
        title="Yang bisa dicoba. Yang perlu dikonfirmasi."
        sub="Bedakan demo mandiri, pratinjau edukatif, dan cakupan aplikasi produksi. Halaman ini bukan janji tanggal rilis fitur."
        testId="peta-jalan-hero"
      >
        <Link to="/kontak" className="btn-light" data-testid="peta-jalan-request-cta">Usulkan fitur <ArrowRight size={16} /></Link>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {LANES.map((lane, i) => (
            <Reveal key={lane.status} delay={i * 0.08}>
              <div className={`flex h-full flex-col rounded-3xl border p-6 ${i === 0 ? "border-emerald-200 bg-emerald-50/40" : i === 1 ? "border-amber-200 bg-amber-50/40" : "border-line bg-white"}`} data-testid={`peta-jalan-lane-${i}`}>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <lane.icon size={18} className="text-brand" />
                    <h2 className="font-display text-lg font-bold text-ink">{lane.title}</h2>
                  </div>
                  <StatusChip status={lane.status} />
                </div>
                <ul className="mt-6 space-y-3">
                  {lane.items.map((it) => (
                    <li key={it.t} className="rounded-2xl border border-line bg-white p-4 transition-transform duration-300 hover:-translate-y-0.5" data-testid={`peta-jalan-item-${i}-${it.t.replaceAll(' ', '-').toLowerCase()}`}>
                      <p className="font-bold text-ink">{it.t}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-inkMuted">{it.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-xs text-inkMuted">Status integrasi lebih rinci tersedia di halaman <Link to="/integrasi" data-testid="roadmap-integration-link" className="font-bold text-brand hover:underline">Integrasi</Link>. Praktik keamanan di halaman <Link to="/keamanan" data-testid="roadmap-security-link" className="font-bold text-brand hover:underline">Keamanan</Link>.</p>
        </Reveal>
      </section>

      <CtaBanner title="Ada kebutuhan yang belum terjawab?" sub="Ceritakan alur kerja Anda. Konfirmasikan cakupan produksi sebelum mengambil keputusan." />
    </div>
  );
}
