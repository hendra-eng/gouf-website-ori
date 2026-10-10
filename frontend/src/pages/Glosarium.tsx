import { useMemo, useState } from "react";
import { Search, BookA } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { GLOSSARY } from "@/content/glosarium";

export default function Glosarium() {
  const [q, setQ] = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const sorted = useMemo(() => [...GLOSSARY].sort((a, b) => a.istilah.localeCompare(b.istilah, "id")), []);
  const letters = useMemo(() => Array.from(new Set(sorted.map((t) => t.istilah[0].toUpperCase()))), [sorted]);
  const filtered = sorted.filter((t) => {
    const matchQ = !q || (t.istilah + " " + t.definisi).toLowerCase().includes(q.toLowerCase());
    const matchL = !letter || t.istilah[0].toUpperCase() === letter;
    return matchQ && matchL;
  });

  return (
    <div data-testid="page-glosarium">
      <Seo title="Glosarium Akuntansi — zafeb" description="Istilah akuntansi dan keuangan bisnis dijelaskan dalam bahasa sederhana: arus kas, neraca, laba rugi, piutang, dan lainnya." />
      <PageHero
        eyebrow="Glosarium"
        title="Istilah akuntansi, dijelaskan seperti ke teman."
        sub={`${GLOSSARY.length} istilah yang paling sering muncul saat membaca laporan keuangan — tanpa asumsi Anda pernah kuliah akuntansi.`}
        testId="glosarium-hero"
      >
        <label className="relative block max-w-xl">
          <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-inkMuted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari istilah, misalnya “arus kas” atau “piutang”"
            className="input-field !rounded-full !py-3.5 !pl-11"
            data-testid="glosarium-search-input"
          />
        </label>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap gap-2" data-testid="glosarium-letters">
          <button onClick={() => setLetter(null)} className={`h-9 rounded-full px-4 font-mono text-xs font-bold transition-colors ${letter === null ? "bg-brand text-white" : "bg-white text-inkMuted border border-line hover:text-brand"}`} data-testid="glosarium-letter-all">Semua</button>
          {letters.map((l) => (
            <button key={l} onClick={() => setLetter(letter === l ? null : l)} className={`h-9 w-9 rounded-full font-mono text-xs font-bold transition-colors ${letter === l ? "bg-brand text-white" : "bg-white text-inkMuted border border-line hover:text-brand"}`} data-testid={`glosarium-letter-${l}`}>{l}</button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2" data-testid="glosarium-list">
          {filtered.map((t, i) => (
            <Reveal key={t.istilah} delay={Math.min(i, 8) * 0.03}>
              <div className="flex h-full flex-col gap-3 rounded-3xl border border-line bg-white p-6 transition-colors hover:border-brand/40" data-testid="glosarium-term">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mint/15 font-mono text-sm font-bold text-brand">{t.istilah[0]}</span>
                  <h3 className="font-display text-lg font-bold text-ink">{t.istilah}</h3>
                </div>
                <p className="text-sm leading-relaxed text-inkMuted">{t.definisi}</p>
                {t.contoh && (
                  <p className="rounded-xl bg-paper px-4 py-2.5 text-xs text-ink"><span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand">Contoh</span> — {t.contoh}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-3xl border border-dashed border-line bg-white/60 p-12 text-center" data-testid="glosarium-empty">
            <BookA className="text-brand" />
            <p className="font-bold text-ink">Istilah tidak ditemukan</p>
            <p className="text-sm text-inkMuted">Coba kata kunci lain, atau <a href="/kontak" className="font-bold text-brand hover:underline">usulkan istilah</a> untuk ditambahkan.</p>
          </div>
        )}
      </section>

      <CtaBanner title="Ingin melihat istilah-istilah ini dalam laporan nyata?" sub="Demo interaktif menampilkan laba rugi, arus kas, dan neraca dengan data fiktif yang mudah dibaca." />
    </div>
  );
}
