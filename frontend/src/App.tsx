import { useEffect, useRef, Component, type ReactNode } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Produk from "@/pages/Produk";
import Fitur from "@/pages/Fitur";
import Solusi from "@/pages/Solusi";
import Industri from "@/pages/Industri";
import Demo from "@/pages/Demo";
import Harga from "@/pages/Harga";
import SumberDaya from "@/pages/SumberDaya";
import Faq from "@/pages/Faq";
import Tentang from "@/pages/Tentang";
import Kontak from "@/pages/Kontak";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/NotFound";
import Integrasi from "@/pages/Integrasi";
import Keamanan from "@/pages/Keamanan";
import Akuntan from "@/pages/Akuntan";
import Perbandingan from "@/pages/Perbandingan";
import KisahPelanggan from "@/pages/KisahPelanggan";
import Glosarium from "@/pages/Glosarium";
import PetaJalan from "@/pages/PetaJalan";
import Insight from "@/pages/Insight";
import Sandbox from '@/pages/Sandbox';
import FeatureDetail from '@/pages/FeatureDetail';
import Mulai from '@/pages/Mulai';
import InsightArtikel from "@/pages/InsightArtikel";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="font-display text-2xl font-bold text-ink">Terjadi kesalahan</h1>
          <p className="max-w-md text-sm text-inkMuted">Muat ulang halaman untuk mencoba lagi.</p>
          <button onClick={() => window.location.reload()} className="btn-primary" data-testid="error-reload">Muat Ulang</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
}

function Site() {
  const { pathname } = useLocation();
  if (pathname === '/coba-demo') return <Sandbox />;
  return <MarketingSite />;
}

function MarketingSite() {
  useLenis();
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/fitur/:slug" element={<FeatureDetail />} />
          <Route path="/mulai" element={<Mulai />} />
          <Route path="/solusi" element={<Solusi />} />
          <Route path="/industri" element={<Industri />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/sumber-daya" element={<SumberDaya />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/integrasi" element={<Integrasi />} />
          <Route path="/keamanan" element={<Keamanan />} />
          <Route path="/akuntan" element={<Akuntan />} />
          <Route path="/perbandingan" element={<Perbandingan />} />
          <Route path="/kisah-pelanggan" element={<KisahPelanggan />} />
          <Route path="/glosarium" element={<Glosarium />} />
          <Route path="/peta-jalan" element={<PetaJalan />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/insight/:slug" element={<InsightArtikel />} />
          <Route path="/legal/privasi" element={<Legal kind="privasi" />} />
          <Route path="/legal/syarat" element={<Legal kind="syarat" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="grain" aria-hidden="true" />
        <Site />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
