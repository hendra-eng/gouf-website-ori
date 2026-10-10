import { useEffect, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export interface TourStep {
  target: string;
  title: string;
  desc: string;
}

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export default function Tour({ steps, open, onClose }: { steps: TourStep[]; open: boolean; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const [rect, setRect] = useState<Rect | null>(null);

  useLayoutEffect(() => {
    if (!open) return;
    const step = steps[idx];
    const el = document.querySelector(`[data-tour="${step.target}"]`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    const measure = () => {
      const r = el.getBoundingClientRect();
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    };
    const t = setTimeout(measure, 350);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [idx, open, steps]);

  useEffect(() => {
    if (open) setIdx(0);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !rect) return null;
  const step = steps[idx];
  const cardBelow = rect.top < window.innerHeight - 260;

  return (
    <div className="fixed inset-0 z-[90]" data-testid="demo-tour">
      <div className="absolute inset-0 bg-brand-deep/60 backdrop-blur-[2px]" onClick={onClose} />
      <motion.div
        className="pointer-events-none absolute rounded-xl ring-2 ring-mint shadow-[0_0_0_9999px_rgba(7,24,23,0.55)]"
        initial={{ opacity: 0 }}
        animate={{ top: rect.top - 6, left: rect.left - 6, width: rect.width + 12, height: rect.height + 12, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="absolute left-1/2 w-[min(420px,90vw)] -translate-x-1/2 rounded-2xl border border-line bg-white p-5 shadow-2xl"
          style={{ top: cardBelow ? Math.min(rect.top + rect.height + 16, window.innerHeight - 220) : Math.max(rect.top - 200, 16) }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-brand">
                Tur {idx + 1} / {steps.length}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-inkMuted">{step.desc}</p>
            </div>
            <button onClick={onClose} aria-label="Tutup tur" className="text-inkMuted transition-colors hover:text-ink" data-testid="demo-tour-close-button">
              <X size={16} />
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
              className="rounded-full px-4 py-2 text-xs font-bold text-inkMuted transition-colors hover:text-brand disabled:opacity-30"
              data-testid="demo-tour-back-button"
            >
              Kembali
            </button>
            <button
              onClick={() => (idx === steps.length - 1 ? onClose() : setIdx((i) => i + 1))}
              className="btn-primary !px-5 !py-2 text-xs"
              data-testid="demo-tour-next-button"
            >
              {idx === steps.length - 1 ? "Selesai" : "Lanjut"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
