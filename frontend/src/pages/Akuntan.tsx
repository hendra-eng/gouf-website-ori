import { Link } from "react-router-dom";
import { ArrowRight, Users, FolderKanban, Download, MessageSquare, Award, Clock, CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const BENEFITS = [
  { icon: FolderKanban, title: "Semua klien, satu akses", desc: "Berpindah antar perusahaan klien tanpa keluar-masuk akun. Setiap klien tetap terpisah datanya." },
  { icon: CheckCircle2, title: "Data yang sudah rapi saat tiba", desc: "Kategori konsisten dan catatan per transaksi — lebih sedikit waktu merapikan, lebih banyak waktu menganalisis." },
  { icon: Download, title: "Ekspor siap periksa", desc: "Keluarkan transaksi dan laporan inti dalam format yang mudah dibuka di alat kerja Anda." },
  { icon: MessageSquare, title: "Kolaborasi dengan klien", desc: "Klien mencatat, Anda meninjau. Pertanyaan soal transaksi tertentu tidak lagi lewat tangkapan layar." },
  { icon: Clock, title: "Tutup buku lebih cepat", desc: "Antrean tinjauan dan filter periode membantu menuntaskan rekap bulanan tepat waktu." },
  { icon: Award, title: "Status mitra", desc: "Mitra terdaftar mendapat dukungan prioritas dan kesempatan direkomendasikan ke pengguna yang mencari akuntan." },
];

const STEPS = [
  ["Daftar sebagai mitra", "Isi formulir dengan peran “Akuntan / Konsultan”. Tim kami menghubungi untuk sesi perkenalan."],
  ["Ikuti orientasi singkat", "Satu sesi daring untuk mengenal alur kerja: peran, tinjauan, dan ekspor."],
  ["Undang klien pertama", "Mulai dari satu klien. Kami bantu memindahkan pencatatan awal bila diperlukan."],
];

export default function Akuntan() {
  return (
    <div data-testid="page-akuntan">
      <Seo title="Untuk Akuntan & Konsultan — Program Mitra zafeb" description="Program Mitra zafeb untuk akuntan dan konsultan keuangan: kelola banyak klien dari satu akses dengan data yang rapi." />
      <PageHero
        eyebrow="Untuk akuntan & konsultan"
        title="Lebih sedikit merapikan data klien. Lebih banyak memberi nasihat."
        sub="Program Mitra zafeb dirancang untuk kantor akuntan, konsultan keuangan, dan pembukuan lepas yang menangani banyak klien sekaligus."
        testId="akuntan-hero"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/demo" className="btn-primary" data-testid="akuntan-join-cta">Gabung Program Mitra <ArrowRight size={16} /></Link>
          <Link to="/fitur" className="btn-light" data-testid="akuntan-demo-cta">Lihat demo interaktif</Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="Manfaat mitra" title="Dibangun untuk hari kerja seorang akuntan" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50" data-testid={`akuntan-benefit-${i}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-mint"><b.icon size={20} /></span>
                <h3 className="font-display text-lg font-bold text-ink">{b.title}</h3>
                <p className="text-sm leading-relaxed text-inkMuted">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <SectionHeading eyebrow="Cara bergabung" title="Tiga langkah, tanpa biaya pendaftaran" sub="Program ini terbuka untuk praktisi perorangan maupun kantor akuntan." />
          <Reveal delay={0.1}>
            <ol className="relative space-y-6 border-l-2 border-mint/40 pl-8">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="relative" data-testid={`akuntan-step-${i}`}>
                  <span className="absolute -left-[41px] flex h-7 w-7 items-center justify-center rounded-full bg-brand font-mono text-xs font-bold text-mint">{i + 1}</span>
                  <p className="font-display text-lg font-bold text-ink">{t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-inkMuted">{d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="ledger-bg-dark grid gap-8 rounded-3xl bg-brand-deep p-8 text-white lg:grid-cols-12 lg:p-12" data-testid="akuntan-quote">
            <div className="lg:col-span-8">
              <Users className="text-mint" size={28} />
              <blockquote className="mt-5 font-display text-2xl font-bold leading-snug sm:text-3xl">
                “Hal pertama yang hilang adalah pertanyaan ‘ini transaksi apa?’ lewat WhatsApp. Catatannya sudah ada di setiap baris.”
              </blockquote>
              <p className="mt-5 text-sm text-white/60">Skenario ilustratif seorang konsultan pembukuan dengan 12 klien UMKM — bukan testimoni pelanggan nyata.</p>
            </div>
            <div className="flex flex-col justify-end gap-3 lg:col-span-4">
              {[["12", "klien dalam satu akses"], ["1 hari", "tutup buku per klien"], ["0", "spreadsheet versi ganda"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <p className="nums font-display text-2xl font-extrabold text-mint">{v}</p>
                  <p className="text-xs uppercase tracking-wider text-white/60">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner title="Siap menjadi mitra?" sub="Isi formulir demo dan pilih peran Akuntan / Konsultan — tim kami mengatur sesi perkenalan program." />
    </div>
  );
}
