import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { SITE } from "@/content/site";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Produk",
    links: [
      { label: "Produk", to: "/produk" },
      { label: "Fitur", to: "/fitur" },
      { label: "Coba Demo Terpandu", to: "/coba-demo" },
      { label: "Integrasi", to: "/integrasi" },
      { label: "Keamanan", to: "/keamanan" },
      { label: "Peta Jalan", to: "/peta-jalan" },
      { label: "Harga", to: "/harga" },
    ],
  },
  {
    title: "Solusi",
    links: [
      { label: "Berdasarkan Peran", to: "/solusi" },
      { label: "Industri", to: "/industri" },
      { label: "Untuk Akuntan", to: "/akuntan" },
      { label: "Perbandingan", to: "/perbandingan" },
      { label: "Contoh Penggunaan", to: "/kisah-pelanggan" },
    ],
  },
  {
    title: "Insight",
    links: [
      { label: "Artikel & Blog", to: "/insight" },
      { label: "Panduan Memulai", to: "/mulai" },
      { label: "Sumber Daya", to: "/sumber-daya" },
      { label: "Glosarium", to: "/glosarium" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang", to: "/tentang" },
      { label: "Kontak", to: "/kontak" },
      { label: "Minta Demo", to: "/demo" },
      { label: "Kebijakan Privasi", to: "/legal/privasi" },
      { label: "Syarat Layanan", to: "/legal/syarat" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-deep text-white" data-testid="footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="sm:col-span-2 md:col-span-4">
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Platform pembukuan dan keuangan untuk bisnis Indonesia dari {SITE.company}.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-mint">
            Demo memakai data fiktif IDR
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-mint/80">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/60 transition-colors hover:text-white" data-testid={`footer-${l.label.toLowerCase().replace(/\s+/g, "-")}-link`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} {SITE.company}. Situs pemasaran, terpisah dari aplikasi dashboard.</span>
          <span className="font-mono uppercase tracking-widest">Bahasa Indonesia - siap terjemahan Inggris</span>
        </div>
      </div>
    </footer>
  );
}
