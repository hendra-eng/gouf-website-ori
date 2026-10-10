export type PaketId = "starter" | "pro" | "enterprise";

export interface Paket {
  id: PaketId;
  name: string;
  untuk: string;
  fitur: string[];
  highlight: boolean;
}

export const PACKAGES: Paket[] = [
  {
    id: "starter",
    name: "Starter",
    untuk: "Usaha kecil yang mulai merapikan pembukuan harian.",
    fitur: [
      "Ringkasan keuangan",
      "Pencatatan transaksi",
      "Laporan laba rugi, arus kas, dan neraca",
    ],
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    untuk: "Tim keuangan yang butuh kolaborasi dan analisis lebih dalam.",
    fitur: [
      "Semua kemampuan Starter",
      "Pencarian & filter lanjutan",
      "Multi-pengguna dengan peran",
      "Ekspor data untuk akuntan",
    ],
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    untuk: "Organisasi dengan kebutuhan khusus dan skala besar.",
    fitur: [
      "Semua kemampuan Pro",
      "Kebutuhan kustom yang dibahas bersama",
      "Konsultasi terjadwal dengan tim",
    ],
    highlight: false,
  },
];

export const PRICE_UNSET = "Hubungi tim untuk harga";

export const PRICING_NOTE =
  "Gunakan paket berikut sebagai bahan diskusi kebutuhan. Harga, cakupan fitur, akses pengguna, dan layanan ditetapkan dalam penawaran yang dikonfirmasi bersama tim.";

export interface ComparisonRow {
  label: string;
  values: [boolean, boolean, boolean];
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Ringkasan keuangan", values: [true, true, true] },
  { label: "Pencatatan transaksi", values: [true, true, true] },
  { label: "Laporan laba rugi, arus kas, neraca", values: [true, true, true] },
  { label: "Pencarian & filter lanjutan", values: [false, true, true] },
  { label: "Multi-pengguna dengan peran", values: [false, true, true] },
  { label: "Ekspor data untuk akuntan", values: [false, true, true] },
  { label: "Kebutuhan kustom & konsultasi terjadwal", values: [false, false, true] },
];
