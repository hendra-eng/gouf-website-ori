import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ClipboardList, Shapes, Clock, ChevronDown } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const GUIDES = [
  {
    icon: ClipboardList,
    title: "Menyiapkan diri untuk demo",
    body: "Tidak perlu menyiapkan data asli. Cukup bayangkan: berapa banyak transaksi per bulan, siapa saja yang akan mengakses, dan laporan apa yang paling sering diminta atasan atau klien Anda. Tiga jawaban itu cukup untuk memulai percakapan.",
  },
  {
    icon: BookOpen,
    title: "Pindah dari spreadsheet",
    body: "Kebiasaan spreadsheet sulit dilepaskan karena semua sudah ada di sana. Mulai dari yang paling sederhana: catat transaksi baru langsung di platform, biarkan riwayat lama tetap di spreadsheet sebagai arsip, lalu bandingkan hasil laporannya.",
  },
  {
    icon: Shapes,
    title: "Glosarium dasar",
    body: "Arus kas adalah uang yang masuk dan keluar. Laba rugi membandingkan pendapatan dan beban pada satu periode. Neraca menunjukkan posisi harta, utang, dan modal pada satu titik waktu. Tiga istilah ini mendasari laporan inti di platform.",
  },
];

export default function SumberDaya() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div data-testid="page-sumber-daya">
      <Seo
        title="Sumber Daya — zafeb"
        description="Panduan singkat menyiapkan demo, pindah dari spreadsheet, dan memahami laporan keuangan dasar."
      />
      <section className="mx-auto max-w-5xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <SectionHeading
          eyebrow="Sumber Daya"
          title="Mulai dari sini, tanpa materi yang menyesatkan"
          sub="Panduan praktis yang bisa Anda baca dalam beberapa menit. Artikel, template, dan webinar lain sedang disusun dan akan muncul di sini saat siap."
        />
        <div className="mt-12 space-y-4">
          {GUIDES.map((g, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={g.title} delay={i * 0.06}>
                <div className="card overflow-hidden" data-testid={`sumberdaya-card-${i}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                    data-testid={`sumberdaya-toggle-${i}`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mint/15 text-brand"><g.icon size={20} /></span>
                    <h3 className="flex-1 font-display text-lg font-bold text-ink">{g.title}</h3>
                    <ChevronDown size={18} className={`text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 pl-[88px] text-sm leading-relaxed text-inkMuted">{g.body}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10">
          <div className="flex items-center gap-3 rounded-2xl border border-dashed border-line bg-white/60 p-5 text-sm text-inkMuted" data-testid="sumberdaya-coming-soon">
            <Clock size={16} className="shrink-0 text-brand" />
            Template unduhan, artikel, dan webinar sedang disusun — bagian ini tidak menampilkan materi yang belum siap.
          </div>
        </Reveal>
      </section>
      <div className="pt-16">
        <CtaBanner />
      </div>
    </div>
  );
}
