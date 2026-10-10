import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, useInView } from "framer-motion";
import { TrendingUp, TrendingDown, Wallet, LayoutDashboard, ArrowLeftRight, FileBarChart, Settings, Search } from "lucide-react";
import { useCountUp } from "@/lib/useCountUp";
import { formatIDR, formatIDRCompact } from "@/lib/format";

const BARS = [42, 58, 47, 66, 74, 88];

function StatCard({ label, value, up, active, accent }: { label: string; value: number; up?: boolean; active: boolean; accent?: boolean }) {
  const v = useCountUp(value, active);
  return (
    <div className={`rounded-xl border p-3 ${accent ? "border-mint/40 bg-mint/10" : "border-line bg-paper"}`} data-testid="dashboard-stat-card">
      <p className="text-[10px] font-bold uppercase tracking-wider text-inkMuted">{label}</p>
      <p className={`nums mt-1 font-mono text-sm font-bold ${accent ? "text-brand" : "text-ink"}`}>{formatIDR(v)}</p>
      {up !== undefined && (
        <p className={`mt-1 inline-flex items-center gap-1 text-[10px] font-bold ${up ? "text-emerald" : "text-red-500"}`}>
          {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />} vs bulan lalu
        </p>
      )}
    </div>
  );
}

export default function DashboardMock({ compact = false }: { compact?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full" ref={wrapRef} data-testid="dashboard-mock">
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduce ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-brand/10"
      >
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-line bg-paper px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
          <span className="ml-3 font-mono text-[10px] tracking-wider text-inkMuted">zafeb / ringkasan contoh</span>
          <span className="ml-auto rounded-full border border-mint/40 bg-mint/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-brand">Data Demo</span>
        </div>
        <div className="flex">
          {/* sidebar */}
          <div className="hidden w-12 flex-col items-center gap-4 border-r border-line bg-brand-deep py-4 sm:flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-mint/15 font-display text-sm font-extrabold text-mint">G</span>
            {[LayoutDashboard, ArrowLeftRight, FileBarChart, Search, Settings].map((Icon, i) => (
              <span key={i} className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 0 ? "bg-mint/20 text-mint" : "text-white/40"}`}>
                <Icon size={14} />
              </span>
            ))}
          </div>
          {/* main */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-sm font-bold text-ink">PT Cahaya Nusantara</p>
                <p className="text-[10px] text-inkMuted">Ringkasan Juni 2025</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-brand">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald" /> Sinkron
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <StatCard label="Saldo Kas" value={143320000} active={inView} accent />
              <StatCard label="Pemasukan" value={121450000} up active={inView} />
              <StatCard label="Pengeluaran" value={88100000} active={inView} />
            </div>
            <div className="mt-3 rounded-xl border border-line bg-paper p-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-wider text-inkMuted">Arus kas 6 bulan</p>
                <p className="font-mono text-[10px] text-inkMuted">pemasukan vs pengeluaran</p>
              </div>
              <div className="mt-3 flex h-16 items-end gap-2.5" data-testid="dashboard-bars">
                {BARS.map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand to-emerald"
                    initial={reduce || !inView ? { height: 4 } : { height: 4 }}
                    animate={inView ? { height: `${h}%` } : { height: 4 }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </div>
              <div className="mt-1.5 flex justify-between font-mono text-[8px] text-inkMuted">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span>
              </div>
            </div>
            {!compact && (
              <div className="mt-3 space-y-1.5" data-testid="dashboard-rows">
                {[
                  { d: "Penjualan toko online", v: 18450000, masuk: true },
                  { d: "Gaji tim - Juni", v: 33478000, masuk: false },
                  { d: "Sewa kantor", v: 9500000, masuk: false },
                ].map((r, i) => (
                  <motion.div
                    key={i}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.12, duration: 0.5 }}
                    className="flex items-center justify-between rounded-lg border border-line bg-white px-3 py-2"
                  >
                    <span className="text-[11px] font-medium text-ink">{r.d}</span>
                    <span className={`nums font-mono text-[11px] font-bold ${r.masuk ? "text-emerald" : "text-inkMuted"}`}>
                      {r.masuk ? "+" : "-"} {formatIDRCompact(r.v)}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />
      </div>
    </div>
  );
}
