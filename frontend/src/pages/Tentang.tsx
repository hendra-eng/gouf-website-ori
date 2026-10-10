import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { Target, Eye, ShieldCheck } from "lucide-react";

const VALUES = [
  { icon: Target, title: "Presisi", desc: "Angka keuangan tidak boleh mendekati — harus tepat. Setiap fitur dimulai dari sini." },
  { icon: Eye, title: "Kejelasan", desc: "Laporan dibuat untuk dibaca manusia, bukan untuk dipahami selama setengah jam." },
  { icon: ShieldCheck, title: "Kejujuran data", desc: "Kami tidak menampilkan statistik, penghargaan, atau klaim yang belum bisa kami verifikasi." },
];

export default function Tentang() {
  return (
    <div data-testid="page-tentang">
      <Seo
        title="Tentang — zafeb"
        description="zafeb membangun zafeb, platform pembukuan dan keuangan untuk bisnis Indonesia."
      />
      <section className="ledger-bg">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
          <span className="eyebrow">Tentang</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl" data-testid="tentang-title">
            Kami merapikan pembukuan, agar pemilik bisnis bebas memutuskan.
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-inkMuted sm:text-lg" data-testid="tentang-story">
            <p>
              <strong className="text-ink">zafeb</strong> membangun perangkat lunak untuk membantu bisnis di Indonesia mengelola keuangannya. zafeb lahir dari masalah yang akrab: data keuangan terpecah di banyak spreadsheet, dan keputusan menunggu karena angkanya tidak pernah siap.
            </p>
            <p>
              Pendekatan kami sederhana — satu dasbor untuk transaksi, laporan, dan arus kas, dengan bahasa yang bisa dipahami pemilik bisnis sekaligus akuntan. Tidak ada klaim yang melampaui kenyataan: apa yang tertulis di situs ini adalah yang dapat Anda lihat pada demo.
            </p>
            <p className="rounded-2xl border border-dashed border-line bg-white/60 p-4 text-sm" data-testid="tentang-placeholder-note">
              Profil lengkap perusahaan (sejarah, tim, dan kantor) akan dilengkapi setelah detail resminya ditetapkan.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading eyebrow="Nilai kami" title="Tiga hal yang kami pegang" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-8" data-testid={`tentang-value-${i}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-mint"><v.icon size={22} /></span>
                <h3 className="font-display text-xl font-bold text-ink">{v.title}</h3>
                <p className="text-sm leading-relaxed text-inkMuted">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
