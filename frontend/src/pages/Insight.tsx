import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { ARTICLES, type Article } from "@/content/insight";

const CATS = ["Semua", "Pembukuan", "Arus Kas", "Laporan", "Operasional", "Pajak"] as const;

export const formatDate = (iso: string) => new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

export function ArticleCard({ a, featured = false }: { a: Article; featured?: boolean }) {
  return (
    <Link
      to={`/insight/${a.slug}`}
      className={`group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5 ${featured ? "ledger-bg-dark !bg-brand-deep !border-white/10 text-white" : ""}`}
      data-testid={`insight-card-${a.slug}`}
    >
      <div className="flex items-center gap-2">
        <span className={`rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${featured ? "bg-mint/15 text-mint" : "bg-mint/15 text-brand"}`}>{a.category}</span>
        <span className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider ${featured ? "text-white/50" : "text-inkMuted"}`}><Clock size={11} /> {a.readMin} mnt</span>
      </div>
      <h3 className={`mt-5 font-display font-bold leading-snug ${featured ? "text-2xl sm:text-3xl" : "text-xl"} ${featured ? "text-white" : "text-ink group-hover:text-brand"}`}>{a.title}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${featured ? "text-white/70" : "text-inkMuted"}`}>{a.excerpt}</p>
      <div className={`mt-auto flex items-center justify-between pt-6 text-xs ${featured ? "text-white/50" : "text-inkMuted"}`}>
        <span>{formatDate(a.date)}</span>
        <span className={`inline-flex items-center gap-1 font-bold ${featured ? "text-mint" : "text-brand"}`}>Baca <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}

export default function Insight() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Semua");
  const list = cat === "Semua" ? ARTICLES : ARTICLES.filter((a) => a.category === cat);
  const [first, ...rest] = list;

  return (
    <div data-testid="page-insight">
      <Seo title="Insight — Artikel Keuangan Bisnis dari zafeb" description="Artikel praktis tentang pembukuan, arus kas, laporan keuangan, operasional, dan persiapan pajak untuk pemilik bisnis dan tim keuangan." />
      <PageHero
        eyebrow="Insight"
        title="Bacaan singkat untuk keputusan keuangan yang lebih tenang."
        sub="Ditulis untuk pemilik bisnis dan tim keuangan — bukan untuk ujian akuntansi. Setiap artikel bisa dibaca dalam satu cangkir kopi."
        testId="insight-hero"
      >
        <div className="flex flex-wrap gap-2" data-testid="insight-filters">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${cat === c ? "bg-brand text-white" : "border border-line bg-white text-inkMuted hover:text-brand"}`} data-testid={`insight-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}>
              {c}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {first && (
          <Reveal>
            <ArticleCard a={first} featured />
          </Reveal>
        )}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05}>
              <ArticleCard a={a} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Panduan", "Mulai cepat: siapkan demo, pindah dari spreadsheet.", "/sumber-daya"],
            ["Glosarium", "Istilah akuntansi dalam bahasa sederhana.", "/glosarium"],
            ["FAQ", "Pertanyaan yang paling sering diajukan.", "/faq"],
          ].map(([t, d, to]) => (
            <Link key={t} to={to} className="group rounded-3xl border border-line bg-paper p-6 transition-colors hover:border-brand/50" data-testid={`insight-more-${t.toLowerCase()}`}>
              <p className="eyebrow">{t}</p>
              <p className="mt-2 text-sm text-inkMuted">{d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">Buka <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
