import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CtaBanner({ title, sub }: { title?: string; sub?: string }) {
  return (
    <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <Reveal>
        <div className="ledger-bg-dark relative overflow-hidden rounded-3xl bg-brand-deep px-6 py-16 text-center sm:px-12 lg:py-20" data-testid="cta-banner">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-mint/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-mint/10 blur-3xl" />
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title || "Siap melihat zafeb secara langsung?"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            {sub || "Kirim permintaan demo dan jelajahi platform bersama tim kami — tanpa pembayaran, tanpa data asli."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/demo" className="btn-mint" data-testid="cta-banner-demo-button">
              Minta Demo <ArrowRight size={16} />
            </Link>
            <Link to="/coba-demo" className="btn-ghost-dark" data-testid="cta-banner-explore-button">
              Coba Demo Terpandu
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
