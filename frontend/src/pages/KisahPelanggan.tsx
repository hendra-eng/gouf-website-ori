import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import StatusChip from "@/components/StatusChip";
import CtaBanner from "@/components/CtaBanner";

export const STORIES = [
  {
    slug: "kedai-kopi-tiga-cabang",
    industri: "F&B",
    perusahaan: "Kedai kopi dengan 3 cabang",
    persona: "Pemilik",
    tantangan: "Setiap cabang mengirim rekap penjualan lewat pesan singkat. Pemilik baru tahu kas bersih bulanan dua minggu setelah bulan berakhir.",
    solusi: "Kasir setiap cabang mencatat penjualan harian ke satu dasbor dengan kategori yang sama. Pengeluaran bahan baku dicatat oleh kepala cabang.",
    hasil: [["H+1", "ringkasan kas tersedia"], ["3", "cabang, 1 laporan"], ["2 minggu", "lebih cepat tahu posisi kas"]],
    kutipan: "Sekarang saya buka dasbor pagi hari dan tahu cabang mana yang perlu perhatian — bukan menunggu rekap.",
  },
  {
    slug: "agensi-desain",
    industri: "Jasa profesional",
    perusahaan: "Agensi desain 14 orang",
    persona: "Tim keuangan",
    tantangan: "Piutang klien tercecer di email, invoice, dan spreadsheet berbeda. Rekap akhir bulan memakan 4 hari kerja.",
    solusi: "Semua pemasukan dicatat per klien dengan catatan nomor faktur. Filter periode dan kategori menggantikan pencarian manual di tiga tempat.",
    hasil: [["4 → 1", "hari untuk tutup buku"], ["100%", "transaksi berkategori"], ["0", "spreadsheet versi ganda"]],
    kutipan: "Yang paling terasa: tidak ada lagi debat soal angka mana yang benar sebelum rapat.",
  },
  {
    slug: "konsultan-pembukuan",
    industri: "Akuntansi",
    perusahaan: "Konsultan pembukuan lepas, 12 klien UMKM",
    persona: "Akuntan",
    tantangan: "Setiap klien mengirim data dalam format berbeda. Sebagian besar jam kerja habis untuk merapikan, bukan menganalisis.",
    solusi: "Klien mencatat transaksi langsung di zafeb dengan kategori yang disepakati bersama. Konsultan meninjau dan mengekspor laporan dari satu akses.",
    hasil: [["12", "klien dalam satu akses"], ["60%", "waktu merapikan berkurang"], ["1 klik", "ekspor laporan inti"]],
    kutipan: "Hal pertama yang hilang adalah pertanyaan ‘ini transaksi apa?’ lewat WhatsApp. Catatannya sudah ada di setiap baris.",
  },
  {
    slug: "distributor-sembako",
    industri: "Distribusi",
    perusahaan: "Distributor sembako skala menengah",
    persona: "Pimpinan",
    tantangan: "Omzet besar, tapi pimpinan tidak yakin apakah bisnis benar-benar untung karena laba rugi dan kas tidak pernah dibaca berdampingan.",
    solusi: "Laporan laba rugi dan arus kas disajikan bersisian dengan grafik 6 bulan. Rapat bulanan memakai satu layar yang sama.",
    hasil: [["6 bulan", "tren terlihat sekilas"], ["2", "laporan, 1 layar"], ["Bulanan", "rapat berbasis data"]],
    kutipan: "Baru kali ini saya mengerti kenapa untung di atas kertas tapi kas terasa tipis.",
  },
];

export default function KisahPelanggan() {
  return (
    <div data-testid="page-kisah-pelanggan">
      <Seo title="Kisah Pelanggan — zafeb" description="Skenario penggunaan zafeb di F&B, jasa profesional, akuntansi, dan distribusi." />
      <PageHero
        eyebrow="Kisah pelanggan"
        title="Bagaimana bisnis seperti Anda memakai zafeb setiap hari."
        sub="Empat skenario yang disusun dari pola masalah yang paling sering kami temui. Angka dan nama bersifat ilustratif — cerita nyata pelanggan akan ditampilkan seiring platform digunakan."
        testId="kisah-hero"
      >
        <StatusChip status="Ilustratif" />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {STORIES.map((s, i) => (
          <Reveal key={s.slug} delay={0.04}>
            <article className={`grid gap-8 overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-12 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`} data-testid={`kisah-card-${i}`}>
              <div className="ledger-bg-dark flex flex-col justify-between bg-brand-deep p-8 text-white lg:col-span-5 lg:[direction:ltr] lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-mint">{s.industri}</span>
                    <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{s.persona}</span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold leading-snug">{s.perusahaan}</h2>
                  <Quote size={22} className="mt-6 text-mint" />
                  <p className="mt-2 text-base leading-relaxed text-white/80">{s.kutipan}</p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {s.hasil.map(([v, l]) => (
                    <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="nums font-display text-lg font-extrabold text-mint">{v}</p>
                      <p className="mt-0.5 text-[10px] uppercase leading-tight tracking-wider text-white/60">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 p-8 lg:col-span-7 lg:[direction:ltr] lg:p-10">
                <div>
                  <p className="eyebrow">Tantangan</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{s.tantangan}</p>
                </div>
                <div>
                  <p className="eyebrow">Yang dilakukan dengan zafeb</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{s.solusi}</p>
                </div>
                <Link to="/fitur" className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline" data-testid={`kisah-cta-${i}`}>
                  Lihat alurnya di demo interaktif <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBanner title="Ingin cerita Anda ada di sini?" sub="Mulai dari demo. Kami pelajari alur bisnis Anda dan tunjukkan bentuknya di zafeb." />
    </div>
  );
}
