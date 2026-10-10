import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Minus } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

type Mark = "ya" | "tidak" | "sebagian";

const COLS = ["Spreadsheet", "Software akuntansi umum", "zafeb"];

const ROWS: { kriteria: string; nilai: Mark[]; catatan?: string }[] = [
  { kriteria: "Formula dan pengelompokan dapat disesuaikan", nilai: ["ya", "sebagian", "sebagian"], catatan: "Tergantung alat, paket, dan konfigurasi yang dipilih." },
  { kriteria: "Laporan mengikuti catatan transaksi", nilai: ["sebagian", "sebagian", "ya"], catatan: "zafeb: dapat dicoba pada demo sederhana; produksi perlu dikonfirmasi." },
  { kriteria: "Dapat dicoba tanpa akun aplikasi", nilai: ["sebagian", "sebagian", "ya"], catatan: "zafeb menyediakan simulasi publik dengan data fiktif." },
  { kriteria: "Hak akses untuk kolaborasi tim", nilai: ["sebagian", "sebagian", "sebagian"], catatan: "Perlu verifikasi paket dan konfigurasi, termasuk aplikasi produksi zafeb." },
  { kriteria: "Jejak perubahan data", nilai: ["sebagian", "sebagian", "sebagian"], catatan: "Riwayat versi tergantung alat. zafeb demo mencatat perubahan selama sesi." },
  { kriteria: "Modul lanjutan dan koneksi pihak ketiga", nilai: ["sebagian", "sebagian", "sebagian"], catatan: "Tidak disimpulkan dari kategori produk. Periksa setiap kebutuhan pada penyedia terkait." },
];

function Cell({ v }: { v: Mark }) {
  if (v === "ya") return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check size={15} /></span>;
  if (v === "tidak") return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-500"><X size={15} /></span>;
  return <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-600"><Minus size={15} /></span>;
}

export default function Perbandingan() {
  return (
    <div data-testid="page-perbandingan">
      <Seo title="Perbandingan — zafeb vs Spreadsheet vs Software Akuntansi" description="Bandingkan zafeb dengan spreadsheet dan software akuntansi umum berdasarkan kriteria yang relevan untuk bisnis Anda." />
      <PageHero
        eyebrow="Perbandingan"
        title="Mana yang cocok untuk bisnis Anda saat ini?"
        sub="Gunakan matriks ini sebagai panduan pertanyaan, bukan penilaian semua produk. Kemampuan spreadsheet dan software berbeda menurut paket serta pengaturannya; fitur produksi zafeb perlu dikonfirmasi."
        testId="perbandingan-hero"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <div className="overflow-x-auto rounded-3xl border border-line bg-white" data-testid="perbandingan-table">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-6 py-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-inkMuted">Kriteria</th>
                  {COLS.map((c, i) => (
                    <th key={c} className={`px-6 py-5 text-center font-display text-sm font-bold ${i === 2 ? "bg-mint/10 text-brand" : "text-ink"}`}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.kriteria} className="border-b border-line last:border-0" data-testid={`perbandingan-row-${i}`}>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-ink">{r.kriteria}</p>
                      {r.catatan && <p className="mt-0.5 text-xs text-inkMuted">{r.catatan}</p>}
                    </td>
                    {r.nilai.map((v, j) => (
                      <td key={j} className={`px-6 py-4 text-center ${j === 2 ? "bg-mint/5" : ""}`}><Cell v={v} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal className="mt-4">
          <p className="text-xs text-inkMuted">Tanda centang = ya, strip = sebagian/tergantung paket, silang = tidak. “Software akuntansi umum” merujuk pada kategori produk, bukan merek tertentu.</p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Kejujuran dulu" title="Kapan zafeb cocok — dan kapan belum" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8" data-testid="perbandingan-fit">
                <p className="eyebrow !text-emerald-700">Cocok jika Anda</p>
                <ul className="mt-5 space-y-3 text-sm text-ink">
                  {["Masih mengandalkan spreadsheet dan mulai kewalahan", "Ingin pemilik bisnis bisa membaca laporan sendiri", "Punya tim kecil-menengah dengan beberapa peran", "Bekerja bersama akuntan atau konsultan eksternal", "Lebih suka harga yang dibicarakan daripada paket kaku"].map((t) => (
                    <li key={t} className="flex items-start gap-3"><Check size={16} className="mt-0.5 shrink-0 text-emerald-600" />{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-amber-200 bg-amber-50/50 p-8" data-testid="perbandingan-unfit">
                <p className="eyebrow !text-amber-700">Mungkin belum, jika Anda</p>
                <ul className="mt-5 space-y-3 text-sm text-ink">
                  {["Butuh manajemen inventaris dan produksi yang kompleks hari ini", "Beroperasi dalam banyak mata uang dengan konsolidasi antar entitas", "Memerlukan integrasi bank langsung yang sudah berjalan sekarang", "Butuh ratusan pengguna dengan alur persetujuan berlapis"].map((t) => (
                    <li key={t} className="flex items-start gap-3"><Minus size={16} className="mt-0.5 shrink-0 text-amber-600" />{t}</li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-inkMuted">Beberapa di antaranya ada di <Link to="/peta-jalan" className="font-bold text-brand hover:underline">peta jalan</Link> — tanyakan status terbarunya saat demo.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-white p-8 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-ink">Masih ragu? Bandingkan dengan data Anda sendiri.</h3>
              <p className="mt-1 text-sm text-inkMuted">Bawa contoh laporan bulan lalu ke sesi demo — kami tunjukkan bentuknya di zafeb.</p>
            </div>
            <Link to="/demo" className="btn-primary shrink-0" data-testid="perbandingan-demo-cta">Jadwalkan demo <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </div>
  );
}
