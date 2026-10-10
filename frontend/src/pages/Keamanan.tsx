import { Link } from "react-router-dom";
import { ArrowRight, Lock, DatabaseBackup, KeyRound, ScrollText, ShieldCheck, Server, EyeOff, Fingerprint } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const PILLARS = [
  { icon: Lock, title: "Akses website melalui HTTPS", desc: "Koneksi website dilindungi HTTPS. Praktik penyimpanan dan enkripsi aplikasi produksi perlu dikonfirmasi terpisah." },
  { icon: DatabaseBackup, title: "Kebijakan pencadangan", desc: "Jadwal backup, retensi, dan prosedur pemulihan data aplikasi produksi belum diverifikasi dalam demo ini." },
  { icon: KeyRound, title: "Hak akses aplikasi", desc: "Aplikasi menampilkan peran pengguna. Cakupan pembatasan akses tiap peran perlu diuji sebelum pemakaian bisnis." },
  { icon: ScrollText, title: "Jejak aktivitas demo", desc: "Perubahan transaksi dicatat dalam sesi browser. Ini contoh alur, bukan jaminan audit aplikasi produksi." },
  { icon: Fingerprint, title: "Demo tanpa kredensial", desc: "Tidak ada kata sandi atau akun admin aplikasi yang ditanamkan dalam demo publik. Anda tidak perlu login." },
  { icon: EyeOff, title: "Pemisahan data", desc: "Data keuangan demo fiktif dan tersimpan di sesi browser; data formulir kontak disimpan privat untuk tindak lanjut." },
];

const PRACTICES = [
  "Pemisahan tegas antara situs pemasaran dan aplikasi dashboard.",
  "Demo publik tidak menggunakan akun admin aplikasi.",
  "Tidak ada dokumen atau data keuangan asli yang diminta dalam demo.",
  "Perubahan demo dapat direset dan tidak memengaruhi aplikasi utama.",
  "Tidak ada klaim sertifikasi keamanan yang belum dibuktikan.",
];

export default function Keamanan() {
  return (
    <div data-testid="page-keamanan">
      <Seo title="Keamanan & Kepercayaan — zafeb" description="Pemisahan data demo, perlindungan website publik, dan hal-hal yang perlu dikonfirmasi sebelum menggunakan aplikasi produksi." />
      <PageHero
        eyebrow="Keamanan & kepercayaan"
        title="Kenali batas demo. Lindungi data bisnis."
        sub="Kami membedakan perlindungan website publik dari keamanan aplikasi produksi yang masih perlu dikonfirmasi."
        testId="keamanan-hero"
        dark
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/legal/privasi" className="btn-mint" data-testid="keamanan-privacy-cta">Baca Kebijakan Privasi <ArrowRight size={16} /></Link>
          <Link to="/kontak" className="btn-ghost-dark" data-testid="keamanan-contact-cta">Tanya tim keamanan</Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="Transparansi" title="Perlindungan website dan batas yang perlu diketahui" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5" data-testid={`keamanan-pillar-${i}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/15 text-brand"><p.icon size={20} /></span>
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-inkMuted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Praktik operasional" title="Keamanan adalah kebiasaan, bukan fitur" sub="Beberapa hal yang kami lakukan rutin di balik layar." />
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <ul className="divide-y divide-line rounded-3xl border border-line bg-paper">
              {PRACTICES.map((p, i) => (
                <li key={i} className="flex items-start gap-3 px-6 py-4 text-sm text-ink" data-testid={`keamanan-practice-${i}`}>
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-6 rounded-3xl bg-brand-deep p-8 text-white lg:grid-cols-3 lg:p-10" data-testid="keamanan-roadmap">
            <div className="lg:col-span-1">
              <span className="eyebrow !text-mint">Dalam peta jalan</span>
              <h3 className="mt-3 font-display text-2xl font-bold">Yang sedang kami siapkan</h3>
              <p className="mt-2 text-sm text-white/60">Kami lebih memilih berjanji sedikit dan menepatinya.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                ["Verifikasi dua langkah (2FA)", "Lapisan tambahan untuk akun dengan hak akses tinggi."],
                ["Ekspor jejak audit", "Unduh riwayat perubahan untuk kebutuhan pemeriksaan."],
                ["Kebijakan retensi data", "Kontrol berapa lama data disimpan setelah akun ditutup."],
                ["Dokumentasi keamanan", "Ringkasan teknis untuk tim TI dan auditor Anda."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-mint"><Server size={14} /><p className="font-bold text-white">{t}</p></div>
                  <p className="mt-1.5 text-xs text-white/60">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner title="Punya pertanyaan keamanan sebelum demo?" sub="Tim kami siap menjelaskan praktik keamanan kami kepada tim TI atau auditor Anda." />
    </div>
  );
}
