import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center sm:px-6" data-testid="page-404">
      <Seo title="Halaman tidak ditemukan — zafeb" />
      <p className="nums font-mono text-7xl font-bold text-brand">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink">Halaman ini tidak ditemukan</h1>
      <p className="mt-2 text-sm text-inkMuted">Tautan mungkin salah ketik atau halaman sudah dipindah.</p>
      <div className="mt-8 flex gap-3">
        <Link to="/" className="btn-primary" data-testid="404-home-button">Ke Beranda</Link>
        <Link to="/fitur" className="btn-light" data-testid="404-fitur-button">Lihat Fitur</Link>
      </div>
    </div>
  );
}
