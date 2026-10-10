import { Link } from "react-router-dom";
import { Check, Minus, ArrowRight } from "lucide-react";
import { PACKAGES, PRICE_UNSET, PRICING_NOTE, COMPARISON_ROWS } from "@/content/pricing";
import Reveal from "@/components/Reveal";

export default function PricingTable() {
  return (
    <div className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-3">
        {PACKAGES.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <div
              className={`flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 ${
                p.highlight ? "border-brand bg-brand-deep text-white shadow-2xl shadow-brand/20" : "border-line bg-white hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5"
              }`}
              data-testid={`pricing-card-${p.id}`}
            >
              {p.highlight && (
                <span className="mb-4 self-start rounded-full bg-mint px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-deep">
                  Paling lengkap untuk tim
                </span>
              )}
              <h3 className={`font-display text-2xl font-bold ${p.highlight ? "text-white" : "text-ink"}`}>Paket {p.name}</h3>
              <p className={`mt-2 min-h-[48px] text-sm leading-relaxed ${p.highlight ? "text-white/70" : "text-inkMuted"}`}>{p.untuk}</p>
              <p className={`nums mt-5 font-mono text-base font-bold ${p.highlight ? "text-mint" : "text-brand"}`} data-testid={`pricing-card-${p.id}-price`}>
                {PRICE_UNSET}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.fitur.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${p.highlight ? "text-white/85" : "text-ink"}`}>
                    <Check size={15} className={`mt-0.5 shrink-0 ${p.highlight ? "text-mint" : "text-emerald"}`} /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to={`/demo?paket=${p.id}`}
                className={`mt-7 ${p.highlight ? "btn-mint" : "btn-primary"} w-full`}
                data-testid={`pricing-card-${p.id}-cta`}
              >
                {p.id === "enterprise" ? "Hubungi tim" : "Minta Demo"} <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mx-auto max-w-2xl rounded-2xl border border-line bg-white p-4 text-center text-xs leading-relaxed text-inkMuted" data-testid="pricing-note">
          {PRICING_NOTE}
        </p>
      </Reveal>

      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-line bg-white" data-testid="pricing-comparison">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-paper">
                  <th className="px-5 py-4 font-mono text-[10px] font-bold uppercase tracking-widest text-inkMuted">Kemampuan</th>
                  {PACKAGES.map((p) => (
                    <th key={p.id} className="px-5 py-4 text-center font-display text-sm font-bold text-ink">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-paper/60"}>
                    <td className="px-5 py-3.5 font-medium text-ink">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-5 py-3.5 text-center">
                        {v ? (
                          <Check size={16} className="mx-auto text-emerald" aria-label="Termasuk" />
                        ) : (
                          <Minus size={16} className="mx-auto text-line" aria-label="Tidak termasuk" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
