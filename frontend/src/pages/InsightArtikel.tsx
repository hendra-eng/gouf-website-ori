import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { ARTICLES } from "@/content/insight";
import { ArticleCard, formatDate } from "@/pages/Insight";

export default function InsightArtikel() {
  const { slug } = useParams();
  const idx = ARTICLES.findIndex((a) => a.slug === slug);
  if (idx === -1) return <Navigate to="/insight" replace />;
  const a = ARTICLES[idx];
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <div data-testid="page-insight-artikel">
      <Seo title={`${a.title} — Insight zafeb`} description={a.excerpt} />
      <article className="ledger-bg">
        <div className="mx-auto max-w-3xl px-4 pb-20 pt-14 sm:px-6 lg:pt-20">
          <Link to="/insight" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline" data-testid="artikel-back-link">
            <ArrowLeft size={14} /> Semua artikel
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="rounded-full bg-mint/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand">{a.category}</span>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-inkMuted"><Clock size={11} /> {a.readMin} menit baca</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-inkMuted">{formatDate(a.date)}</span>
          </div>
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl" data-testid="artikel-title">{a.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-inkMuted">{a.excerpt}</p>
          <div className="mt-10 space-y-6 text-base leading-[1.85] text-ink" data-testid="artikel-body">
            {a.body.map((p, i) => (
              <Reveal key={i} y={12}>
                <p className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-extrabold first-letter:leading-[0.85] first-letter:text-brand" : ""}>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-brand-deep p-7 text-white sm:flex-row sm:items-center" data-testid="artikel-inline-cta">
              <div>
                <p className="font-display text-lg font-bold">Lihat konsep ini dalam dasbor nyata</p>
                <p className="mt-1 text-sm text-white/60">Demo interaktif memakai data fiktif — tanpa perlu mendaftar.</p>
              </div>
              <Link to="/fitur" className="btn-mint shrink-0">Buka demo <ArrowRight size={15} /></Link>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Baca juga</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <ArticleCard key={r.slug} a={r} />)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </div>
  );
}
