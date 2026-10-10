import { Link } from "react-router-dom";
import { ArrowRight, Store, Landmark, Briefcase, LineChart } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const SOLUTIONS = [
  {
    icon: Store,
    label: "Untuk Pemilik Bisnis",
    title: "Tahu posisi kas tanpa menunggu laporan akhir bulan",
    points: [
      "Ringkasan kas dan arus kas selalu terbuka di layar pertama",
      "Transaksi harian tercatat dengan kategori yang konsisten",
      "Cukup membaca — tidak perlu jadi akuntan",
    ],
  },
  {
    icon: Landmark,
    label: "Untuk Tim Keuangan",
    title: "Rekap lebih cepat, kolaborasi lebih rapi",
    points: [
      "Pencarian dan filter untuk membedah transaksi dengan cepat",
      "Kategori dan catatan yang konsisten antar anggota tim",
      "Ekspor data saat dibutuhkan",
    ],
  },
  {
    icon: Briefcase,
    label: "Untuk Akuntan",
    title: "Data klien yang siap diperiksa",
    points: [
      "Transaksi terstruktur dengan kategori jelas",
      "Riwayat yang mudah dilacak ulang",
      "Contoh berkas ekspor tersedia di demo interaktif",
    ],
  },
  {
    icon: LineChart,
    label: "Untuk Pimpinan Perusahaan",
    title: "Tren bisnis dalam sekali pandang",
    points: [
      "Grafik pemasukan vs pengeluaran antar periode",
      "Laporan inti yang ringkas untuk rapat",
      "Proyeksi tren digambarkan dari pola data",
    ],
  },
];

export default function Solusi() {
  return (
    <div data-testid="page-solusi">
      <Seo
        title="Solusi — zafeb"
        description="zafeb untuk pemilik bisnis, tim keuangan, akuntan, dan pimpinan perusahaan."
      />
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <SectionHeading
          eyebrow="Solusi"
          title="Satu platform, empat cara pandang"
          sub="Peran Anda menentukan yang Anda butuhkan dari pembukuan. zafeb menjaga semuanya tetap dalam satu sumber data."
        />
      </section>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-14 sm:px-6 lg:px-8">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.label} delay={0.05}>
            <div
              className={`grid items-center gap-8 rounded-3xl border border-line bg-white p-8 lg:grid-cols-12 lg:p-10 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              data-testid={`solusi-card-${i}`}
            >
              <div className="lg:col-span-4 lg:[direction:ltr]">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-mint"><s.icon size={22} /></span>
                  <span className="eyebrow">{s.label}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">{s.title}</h2>
              </div>
              <div className="lg:col-span-8 lg:[direction:ltr]">
                <ul className="grid gap-3 sm:grid-cols-1">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 rounded-2xl bg-paper px-4 py-3 text-sm text-ink">
                      <span className="mt-0.5 font-mono text-xs font-bold text-brand">0{j + 1}</span> {p}
                    </li>
                  ))}
                </ul>
                <Link to="/fitur" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline" data-testid={`solusi-cta-${i}`}>
                  Coba di demo interaktif <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <CtaBanner />
    </div>
  );
}
