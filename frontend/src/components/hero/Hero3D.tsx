import { Component, Suspense, useMemo, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, useReducedMotion } from "framer-motion";
import { LogoMark } from '@/components/Logo';
import Hero3DScene from "@/components/hero/Hero3DScene";

class SceneBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

const CHIPS = [
  { label: "Arus kas demo", value: "Data fiktif", cls: "left-0 bottom-10", delay: 0 },
  { label: "Identitas baru", value: "zafeb", cls: "right-0 top-6", delay: 1.5 },
  { label: "Ruang mencoba", value: "Tanpa akun asli", cls: "right-6 bottom-2", delay: 3 },
];

function StaticLogo() {
  return <div className="static-hero-logo" data-testid="hero-3d-fallback" role="img" aria-label="Logo zafeb dengan tampilan tiga dimensi"><LogoMark size={310}/></div>;
}

export default function Hero3D() {
  const reduce = useReducedMotion();
  const webgl = useMemo(() => typeof window !== "undefined" && hasWebGL(), []);

  if (reduce || !webgl) return <StaticLogo />;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]" data-testid="hero-3d">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-mint/20 blur-3xl" />
      <SceneBoundary fallback={<StaticLogo />}>
        <Canvas
          shadows
          dpr={[1, 1.6]}
          camera={{ position: [0, 0.3, 8.8], fov: 38 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
          data-testid="hero-3d-canvas"
        >
          <Suspense fallback={null}>
            <Hero3DScene />
          </Suspense>
        </Canvas>
      </SceneBoundary>
      {CHIPS.map((c) => (
        <motion.div
          key={c.label}
          className={`absolute ${c.cls} rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-xl backdrop-blur`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
          data-testid="hero-float-chip"
        >
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-inkMuted">{c.label}</p>
          <p className="nums font-mono text-sm font-bold text-emerald-500">{c.value}</p>
        </motion.div>
      ))}
      <p className="absolute left-1/2 -bottom-6 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.25em] text-inkMuted/70" data-testid="hero-3d-hint">
        Gerakkan kursor untuk berinteraksi
      </p>
    </div>
  );
}
