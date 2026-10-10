import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, LayoutDashboard, ArrowLeftRight, FileBarChart, Users, Eye, FlaskConical, Store, Landmark, Briefcase, LineChart } from "lucide-react";
import Seo from "@/components/Seo";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DashboardMock from "@/components/DashboardMock";
import ProductPreview, { Workflow } from '@/components/ProductPreview';
import Hero3D from "@/components/hero/Hero3D";
import CtaBanner from "@/components/CtaBanner";
import PricingTable from "@/components/PricingTable";
import { StatsStrip, CompareTeaser, IntegrationsStrip, SecurityStrip, StoriesTeaser, InsightTeaser } from "@/components/HomeSections";
import { FAQ_ITEMS } from "@/content/faq";

const HERO_LINES = ["Keuangan jelas.", "Bisnis bergerak.", "Keputusan tepat."];

const BENEFITS = [
  { icon: LayoutDashboard, title: "Satu sumber kebenaran", desc: "Semua transaksi tercatat dan mudah dicari — posisi bisnis terbaca dari satu dasbor." },
  { icon: FileBarChart, title: "Laporan yang bisa dibaca", desc: "Laba rugi, arus kas, dan neraca disajikan sederhana untuk pembuat keputusan." },
  { icon: Users, title: "Kolaborasi tim", desc: "Peran untuk pemilik, tim keuangan, dan akuntan — semua melihat angka yang sama." },
  { icon: FlaskConical, title: "Coba dulu, tanpa risiko", desc: "Jelajahi demo interaktif dengan data fiktif sebelum memutuskan apa pun." },
];

const PERSONAS = [
  { icon: Store, label: "Pemilik Bisnis", desc: "Tahu posisi kas hari ini" },
  { icon: Landmark, label: "Tim Keuangan", desc: "Rekap lebih cepat" },
  { icon: Briefcase, label: "Akuntan", desc: "Data rapi untuk diperiksa" },
  { icon: LineChart, label: "Pimpinan", desc: "Tren bisnis sekilas" },
];

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div data-testid="page-home">
      <Seo
        title="zafeb — Platform Pembukuan & Keuangan untuk Bisnis Indonesia"
        description="Pantau transaksi, laporan, dan arus kas dalam satu dasbor. Jelajahi demo interaktif dan minta demo zafeb."
      />

      {/* HERO */}
      <section className="home-hero relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-mint/15 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
              data-testid="hero-eyebrow"
            >
              <span className="hero-status">RUANG KERJA KEUANGAN UNTUK BISNIS ANDA</span>
            </motion.p>
            <h1 className="mt-5 hero-headline font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl" data-testid="hero-title">
              {HERO_LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={reduce ? { opacity: 0 } : { y: "112%" }}
                    animate={reduce ? { opacity: 1 } : { y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {i === 2 ? <span className="text-brand">{line}</span> : line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-inkMuted sm:text-lg"
              data-testid="hero-subtitle"
            >
              Dari transaksi harian hingga gambaran besar. Satukan pembukuan, laporan, dan perencanaan keuangan dalam satu ruang kerja yang mudah dipahami.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link to="/coba-demo" className="btn-primary" data-testid="hero-cta-demo">
                Coba Demo Terpandu <ArrowRight size={16} />
              </Link>
              <Link to="/demo" className="btn-light" data-testid="hero-cta-explore">
                Minta Demo Personal
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-inkMuted"
              data-testid="hero-note"
            >
              Demo interaktif memakai data fiktif IDR — tanpa data asli Anda
            </motion.p>
          </div>
          <motion.div
            className="relative lg:col-span-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            data-testid="hero-visual"
          >
            <ProductPreview />
          </motion.div>
        </div>
      </section>

      <Workflow />
      <StatsStrip />

      {/* MANFAAT BENTO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Mengapa zafeb"
          title="Keuangan bisnis yang jelas, bukan sekadar tercatat"
          sub="Empat hal yang langsung terasa saat pembukuan dipindah dari spreadsheet ke satu dasbor."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-6 lg:col-span-6">
            <div className="ledger-bg flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-8" data-testid="benefit-card-0">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-mint"><Eye size={22} /></span>
              <div className="mt-16">
                <h3 className="font-display text-2xl font-bold text-ink">Lihat angka, bukan dugaan</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-inkMuted">
                  Ringkasan kas, pemasukan, dan pengeluaran selalu terbarui — cukup buka, tanpa merakit formula.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 md:col-span-6">
            {BENEFITS.slice(1).map((b, i) => (
              <Reveal key={b.title} delay={0.08 * (i + 1)}>
                <div className="flex h-full items-start gap-5 rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5" data-testid={`benefit-card-${i + 1}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mint/15 text-brand"><b.icon size={20} /></span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-inkMuted">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO TEASER */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <Reveal>
            <span className="eyebrow">Coba sekarang</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Jelajahi platform dengan data demo
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-inkMuted">
              Grafik, transaksi, laporan, dan skenario anggaran — jelajahi ruang demo mandiri dengan tur terpandu. Seluruh data fiktif, tanpa mengakses akun aplikasi asli.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/coba-demo" className="btn-primary" data-testid="demo-teaser-cta">
                Buka Demo Interaktif <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Hero3D />
          </Reveal>
        </div>
      </section>

      <CompareTeaser />
      <IntegrationsStrip />

      {/* PERSONAS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="Untuk siapa" title="Dibangun untuk semua yang menyentuh angka" />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.07}>
              <div className="group flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:border-brand/50 hover:-translate-y-1" data-testid="persona-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-mint transition-transform duration-300 group-hover:scale-110"><p.icon size={20} /></span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{p.label}</h3>
                  <p className="mt-1 text-sm text-inkMuted">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Harga"
            title="Paket yang tumbuh bersama bisnis Anda"
            sub="Harga belum ditetapkan — setiap paket disusun bersama tim kami. Lihat perbandingan lengkap di halaman Harga."
          />
          <div className="mt-12">
            <PricingTable />
          </div>
        </div>
      </section>

      <StoriesTeaser />
      <SecurityStrip />
      <InsightTeaser />

      {/* FAQ TEASER */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="Pertanyaan umum" title="Sebelum Anda bertanya lebih jauh" align="center" />
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.slice(0, 4).map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <details className="group card overflow-hidden p-0" data-testid="faq-teaser-item">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-bold text-ink transition-colors group-hover:text-brand [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="font-mono text-brand transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-inkMuted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link to="/faq" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline" data-testid="faq-teaser-link">
            Lihat semua pertanyaan <ArrowRight size={14} />
          </Link>
        </Reveal>
      </section>

      <CtaBanner />
    </div>
  );
}
