import { MARQUEE_ITEMS } from "@/content/site";

export default function Marquee({ dark = false }: { dark?: boolean }) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden border-y py-5 ${dark ? "border-white/10 bg-brand-deep" : "border-line bg-white"}`}
      data-testid="marquee-band"
    >
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className={`font-mono text-xs font-bold uppercase tracking-[0.3em] ${dark ? "text-mint/70" : "text-brand/70"}`}>
              {item}
            </span>
            <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-mint/40" : "bg-mint"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
