import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileBarChart, Users, Eye, FlaskConical } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Hero3D from "@/components/hero/Hero3D";
import CtaBanner from "@/components/CtaBanner";
import PricingTable from "@/components/PricingTable";
import { StatsStrip, CompareTeaser, PlanningSection, CustomerRoles, SecurityStrip, InsightTeaser } from "@/components/HomeSections";
import { FAQ_ITEMS } from "@/content/faq";

const HERO_LINES = ["Pahami angkanya.", "Tentukan langkah", "bisnis berikutnya."];

const BENEFITS = [
  { icon: FileBarChart, title: "Catat dengan konteks", desc: "Lengkapi tanggal, deskripsi, kategori, dan status pembayaran agar setiap transaksi bisa dijelaskan kembali." },
  { icon: Users, title: "Telusuri sebelum menyimpulkan", desc: "Cari asal perubahan biaya atau pendapatan berdasarkan periode dan catatan, bukan menebak dari saldo akhir." },
  { icon: FlaskConical, title: "Siapkan bahan pembahasan", desc: "Baca laporan bersama catatan pendukung untuk membahas apa yang berubah dan tindakan apa yang perlu diambil." },
];

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <div data-testid="page-home">
      <Seo
        title="zafeb — Pembukuan, Arus Kas & Anggaran Bisnis"
        description="Pahami laba dan arus kas, rapikan pembukuan serta laporan, dan rencanakan anggaran bersama zafeb. Untuk pemilik usaha, UMKM, dan tim keuangan."
      />

      {/* HERO */}
      <section className="home-hero relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-mint/15 blur-3xl" />
        <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
              data-testid="hero-eyebrow"
            >
              <span className="hero-status">UNTUK PEMILIK USAHA & TIM KEUANGAN</span>
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
              Ketahui laba usaha, pahami ke mana kas bergerak, dan siapkan anggaran berikutnya. zafeb membantu Anda menghubungkan catatan transaksi dengan keputusan bisnis yang perlu diambil.
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
              Tanpa akun untuk mencoba · latihan memakai data contoh
            </motion.p>
          </div>
          <motion.div
            className="relative lg:col-span-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            data-testid="hero-visual"
          >
            <Hero3D />
          </motion.div>
        </div>
      </section>

      <StatsStrip />
      <CompareTeaser />

      {/* MANFAAT BENTO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="PEMBUKUAN YANG BISA DITELUSURI"
          title="Laporan jelas berawal dari catatan yang rapi."
          sub="Ketika setiap transaksi punya konteks, tim punya titik awal yang lebih baik untuk memeriksa angka dan menjelaskan hasil usaha."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-6 lg:col-span-6">
            <div className="ledger-bg flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-8" data-testid="benefit-card-0">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-mint"><Eye size={22} /></span>
              <div className="mt-16">
                <h3 className="font-display text-2xl font-bold text-ink">Bukan hanya “berapa”,<br/>tetapi juga “dari mana”.</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-inkMuted">Biaya bulan ini meningkat. Apakah karena operasional rutin, pembelian sesekali, atau pencatatan yang perlu ditinjau? Telusuri transaksi sebelum menentukan tindakan.</p>
                <Link to="/fitur/pembukuan" data-testid="home-bookkeeping-detail" className="customer-text-link">Kenali alur pembukuan <ArrowRight size={16}/></Link>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 md:col-span-6">
            {BENEFITS.map((b, i) => (
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
              Coba satu transaksi.<br/>Lihat ceritanya di laporan.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-inkMuted">
              Ikuti tur singkat, tambahkan pendapatan atau biaya, lalu lihat dampaknya pada laporan. Setelah itu, ubah asumsi anggaran untuk memahami pilihan Anda. Seluruh latihan memakai data contoh.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/coba-demo" className="btn-primary" data-testid="demo-teaser-cta">
                Buka Demo Interaktif <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="hidden lg:block" aria-hidden="true" data-testid="demo-teaser-empty-visual" />
        </div>
      </section>

      <PlanningSection />
      <CustomerRoles />

      {/* PRICING TEASER */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Harga"
            title="Mulai dari kebutuhan, bukan paket paling besar."
            sub="Petakan volume pencatatan, pengguna, dan laporan yang diperlukan. Diskusikan cakupan serta harga sebelum menentukan pilihan."
          />
          <div className="mt-12">
            <PricingTable />
          </div>
        </div>
      </section>

      <SecurityStrip />
      <InsightTeaser />

      {/* FAQ TEASER */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="Pertanyaan umum" title="Sebelum Anda bertanya lebih jauh" align="center" />
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.slice(0, 4).map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <details className="group card overflow-hidden p-0" data-testid={`faq-teaser-item-${i}`}>
                <summary data-testid={`faq-teaser-toggle-${i}`} className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-bold text-ink transition-colors group-hover:text-brand [&::-webkit-details-marker]:hidden">
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
