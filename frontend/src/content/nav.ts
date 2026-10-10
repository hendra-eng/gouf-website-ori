import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard, ArrowLeftRight, FileBarChart, Users, Sparkles, Plug, ShieldCheck, Map,
  Store, Landmark, Briefcase, LineChart, Factory, Scale, BookOpenText, Newspaper, BookA,
  CircleHelp, LifeBuoy, Handshake, Building2, Mail,
} from "lucide-react";

export interface NavLinkItem {
  label: string;
  desc?: string;
  to: string;
  icon?: LucideIcon;
}

export interface NavColumn {
  title: string;
  links: NavLinkItem[];
}

export interface NavItem {
  label: string;
  path?: string;
  columns?: NavColumn[];
  featured?: { eyebrow: string; title: string; desc: string; to: string; cta: string };
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Produk",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "Laba & Arus Kas", desc: "Pahami hasil usaha dan uang tersedia", to: "/fitur/arus-kas", icon: LayoutDashboard },
          { label: "Pembukuan & Transaksi", desc: "Catat rapi, telusuri dengan jelas", to: "/fitur/pembukuan", icon: ArrowLeftRight },
          { label: "Laporan Keuangan", desc: "Baca kinerja dan posisi keuangan", to: "/fitur/laporan-keuangan", icon: FileBarChart },
          { label: "Anggaran & Proyeksi", desc: "Bandingkan asumsi dan skenario", to: "/fitur/anggaran-proyeksi", icon: LineChart },
          { label: "Analisis & AI", desc: "Dari angka menjadi penjelasan", to: "/fitur/analisis-ai", icon: Sparkles },
        ],
      },
      {
        title: "Jelajahi",
        links: [
          { label: "Semua Fitur", desc: "Katalog fitur & demo interaktif", to: "/fitur", icon: Sparkles },
          { label: "Integrasi", desc: "Bank, kasir, marketplace, payroll", to: "/integrasi", icon: Plug },
          { label: "Keamanan", desc: "Enkripsi, cadangan, hak akses", to: "/keamanan", icon: ShieldCheck },
          { label: "Peta Jalan Produk", desc: "Yang tersedia & yang akan datang", to: "/peta-jalan", icon: Map },
        ],
      },
    ],
    featured: {
      eyebrow: "Demo interaktif",
      title: "Coba dasbornya tanpa mendaftar",
      desc: "Grafik, pencarian transaksi, dan laporan — semuanya memakai data fiktif IDR.",
      to: "/coba-demo",
      cta: "Buka demo",
    },
  },
  {
    label: "Solusi",
    columns: [
      {
        title: "Berdasarkan peran",
        links: [
          { label: "Pemilik Bisnis", desc: "Tahu posisi kas hari ini", to: "/solusi", icon: Store },
          { label: "Tim Keuangan", desc: "Rekap lebih cepat", to: "/solusi", icon: Landmark },
          { label: "Akuntan & Konsultan", desc: "Data klien siap diperiksa", to: "/akuntan", icon: Briefcase },
          { label: "Pimpinan Perusahaan", desc: "Tren bisnis sekilas", to: "/solusi", icon: LineChart },
        ],
      },
      {
        title: "Lainnya",
        links: [
          { label: "Berdasarkan Industri", desc: "Ritel, jasa, F&B, distribusi, dan lainnya", to: "/industri", icon: Factory },
          { label: "Perbandingan", desc: "zafeb vs spreadsheet vs software lain", to: "/perbandingan", icon: Scale },
          { label: "Contoh Penggunaan", desc: "Laba, pembukuan, dan rencana biaya", to: "/kisah-pelanggan", icon: BookOpenText },
        ],
      },
    ],
    featured: {
      eyebrow: "Untuk akuntan",
      title: "Program Mitra Akuntan",
      desc: "Kelola banyak klien dari satu akses dengan data yang rapi dan mudah diperiksa.",
      to: "/akuntan",
      cta: "Pelajari program",
    },
  },
  { label: "Harga", path: "/harga" },
  {
    label: "Insight",
    columns: [
      {
        title: "Belajar",
        links: [
          { label: "Artikel & Blog", desc: "Tips keuangan bisnis & pembukuan", to: "/insight", icon: Newspaper },
          { label: "Panduan Memulai", desc: "Kenali alur & persiapkan migrasi", to: "/mulai", icon: BookOpenText },
          { label: "Glosarium Akuntansi", desc: "Istilah keuangan dalam bahasa sederhana", to: "/glosarium", icon: BookA },
        ],
      },
      {
        title: "Bantuan",
        links: [
          { label: "FAQ", desc: "Pertanyaan yang sering diajukan", to: "/faq", icon: CircleHelp },
          { label: "Pusat Bantuan", desc: "Hubungi tim dukungan kami", to: "/kontak", icon: LifeBuoy },
        ],
      },
    ],
    featured: {
      eyebrow: "Artikel terbaru",
      title: "5 tanda bisnis Anda sudah perlu pindah dari spreadsheet",
      desc: "Ciri-ciri yang sering terlewat sebelum angka mulai tidak cocok.",
      to: "/insight/tanda-pindah-dari-spreadsheet",
      cta: "Baca artikel",
    },
  },
  {
    label: "Perusahaan",
    columns: [
      {
        title: "zafeb",
        links: [
          { label: "Tentang Kami", desc: "Siapa di balik zafeb", to: "/tentang", icon: Building2 },
          { label: "Program Mitra", desc: "Untuk akuntan & konsultan", to: "/akuntan", icon: Handshake },
          { label: "Kontak", desc: "Hubungi tim kami", to: "/kontak", icon: Mail },
        ],
      },
    ],
  },
];
