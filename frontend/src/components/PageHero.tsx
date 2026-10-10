import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  sub?: string;
  children?: ReactNode;
  testId?: string;
  dark?: boolean;
}

export default function PageHero({ eyebrow, title, sub, children, testId = "page-hero", dark = false }: Props) {
  return (
    <section className={dark ? "ledger-bg-dark bg-brand-deep text-white" : "ledger-bg"} data-testid={testId}>
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={`eyebrow ${dark ? "!text-mint" : ""}`}>
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl ${dark ? "text-white" : "text-ink"}`}
          data-testid={`${testId}-title`}
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-inkMuted"}`}
          >
            {sub}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
