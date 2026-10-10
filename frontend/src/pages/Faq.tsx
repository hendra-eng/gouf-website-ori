import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { FAQ_ITEMS } from "@/content/faq";

const KATEGORI = ["Semua", "Umum", "Demo & Harga", "Data & Keamanan"] as const;

export default function Faq() {
  const [kategori, setKategori] = useState<(typeof KATEGORI)[number]>("Semua");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_ITEMS.filter(
      (f) => (kategori === "Semua" || f.kategori === kategori) && (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q))
    );
  }, [kategori, query]);

  return (
    <div data-testid="page-faq">
      <Seo
        title="Pertanyaan Umum — zafeb"
        description="Jawaban atas pertanyaan umum tentang zafeb: demo, harga, data, dan keamanan."
      />
      <section className="mx-auto max-w-4xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <SectionHeading eyebrow="FAQ" title="Pertanyaan yang paling sering muncul" align="center" />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-inkMuted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari pertanyaan..."
              aria-label="Cari FAQ"
              className="input-field !pl-10"
              data-testid="faq-search-input"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {KATEGORI.map((k) => (
              <button
                key={k}
                onClick={() => setKategori(k)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold transition-all ${
                  kategori === k ? "border-brand bg-brand text-white" : "border-line bg-white text-inkMuted hover:border-brand hover:text-brand"
                }`}
                data-testid={`faq-kategori-${k.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-3" data-testid="faq-list">
          {items.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group card overflow-hidden p-0" data-testid={`faq-item-${i}`}>
                <summary data-testid={`faq-toggle-${i}`} className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-bold text-ink transition-colors group-hover:text-brand [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="font-mono text-brand transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="border-t border-dashed border-line px-6 py-4 text-sm leading-relaxed text-inkMuted">{f.a}</p>
              </details>
            </Reveal>
          ))}
          {items.length === 0 && (
            <div className="card p-10 text-center text-sm text-inkMuted" data-testid="faq-empty">
              Tidak ada pertanyaan yang cocok dengan pencarian Anda.{" "}
              <a href="/kontak" data-testid="faq-empty-contact" className="font-bold text-brand hover:underline">Tanyakan langsung ke kami</a>.
            </div>
          )}
        </div>
      </section>
      <div className="pt-16">
        <CtaBanner title="Pertanyaan Anda belum terjawab?" sub="Kirim pesan melalui halaman kontak atau minta demo langsung." />
      </div>
    </div>
  );
}
