// Seluruh angka di bawah adalah DATA FIKTIF berlabel demo (bukan data asli).
export const DEMO_MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];

export const DEMO_SERIES = [
  { bulan: "Jan", pemasukan: 86500000, pengeluaran: 64800000 },
  { bulan: "Feb", pemasukan: 92300000, pengeluaran: 71250000 },
  { bulan: "Mar", pemasukan: 88700000, pengeluaran: 69400000 },
  { bulan: "Apr", pemasukan: 104200000, pengeluaran: 78900000 },
  { bulan: "Mei", pemasukan: 112800000, pengeluaran: 82300000 },
  { bulan: "Jun", pemasukan: 121450000, pengeluaran: 88100000 },
];

export const DEMO_FORECAST = [
  ...DEMO_SERIES.map((d) => ({ bulan: d.bulan, aktual: d.pemasukan, proyeksi: null as number | null })),
  { bulan: "Jul*", aktual: null as number | null, proyeksi: 128300000 },
  { bulan: "Agu*", aktual: null as number | null, proyeksi: 134700000 },
  { bulan: "Sep*", aktual: null as number | null, proyeksi: 141900000 },
];

export const DEMO_CATEGORIES = [
  { name: "Gaji & benefits", value: 33478000 },
  { name: "Operasional", value: 19382000 },
  { name: "Pemasaran", value: 14096000 },
  { name: "Sewa & utilitas", value: 10572000 },
  { name: "Administrasi", value: 6167000 },
  { name: "Lainnya", value: 4405000 },
];

export const CATEGORY_COLORS = ["#0D4746", "#155E5B", "#10B981", "#34D399", "#A7F3D0", "#CBD5D1"];

export interface DemoTx {
  id: string;
  tanggal: string;
  deskripsi: string;
  kategori: string;
  tipe: "masuk" | "keluar";
  jumlah: number;
  metode: string;
  catatan: string;
}

export const DEMO_TRANSACTIONS: DemoTx[] = [
  { id: "tx-001", tanggal: "28 Juni 2025", deskripsi: "Penjualan toko online", kategori: "Pendapatan", tipe: "masuk", jumlah: 18450000, metode: "Virtual Account", catatan: "Settlement mingguan marketplace." },
  { id: "tx-002", tanggal: "27 Juni 2025", deskripsi: "Langganan bulanan klien korporat", kategori: "Pendapatan", tipe: "masuk", jumlah: 25000000, metode: "Transfer Bank", catatan: "Kontrak layanan perawatan bulanan." },
  { id: "tx-003", tanggal: "26 Juni 2025", deskripsi: "Gaji tim - Juni", kategori: "Gaji & benefits", tipe: "keluar", jumlah: 33478000, metode: "Payroll", catatan: "Termasuk tunjangan transport." },
  { id: "tx-004", tanggal: "25 Juni 2025", deskripsi: "Iklan digital kampanye Juni", kategori: "Pemasaran", tipe: "keluar", jumlah: 6200000, metode: "Kartu Kredit", catatan: "Kampanye produk baru." },
  { id: "tx-005", tanggal: "24 Juni 2025", deskripsi: "Penjualan grosir - pelanggan lama", kategori: "Pendapatan", tipe: "masuk", jumlah: 14200000, metode: "Transfer Bank", catatan: "Pesanan repeat order." },
  { id: "tx-006", tanggal: "22 Juni 2025", deskripsi: "Sewa kantor - kuartal berjalan", kategori: "Sewa & utilitas", tipe: "keluar", jumlah: 9500000, metode: "Transfer Bank", catatan: "Sewa ruko lantai 2." },
  { id: "tx-007", tanggal: "21 Juni 2025", deskripsi: "Pembelian stok barang", kategori: "Operasional", tipe: "keluar", jumlah: 7840000, metode: "Transfer Bank", catatan: "Restock kategori terlaris." },
  { id: "tx-008", tanggal: "20 Juni 2025", deskripsi: "Jasa freelance desain", kategori: "Operasional", tipe: "keluar", jumlah: 3200000, metode: "E-Wallet", catatan: "Redesain katalog produk." },
  { id: "tx-009", tanggal: "19 Juni 2025", deskripsi: "Penjualan langsung - etalase", kategori: "Pendapatan", tipe: "masuk", jumlah: 5310000, metode: "QRIS", catatan: "Rekap kasir sore hari." },
  { id: "tx-010", tanggal: "18 Juni 2025", deskripsi: "Listrik & internet kantor", kategori: "Sewa & utilitas", tipe: "keluar", jumlah: 1072000, metode: "Autodebet", catatan: "Tagihan bulan Juni." },
  { id: "tx-011", tanggal: "16 Juni 2025", deskripsi: "Biaya kirim paket", kategori: "Operasional", tipe: "keluar", jumlah: 1890000, metode: "E-Wallet", catatan: "Ekspedisi minggu ini." },
  { id: "tx-012", tanggal: "14 Juni 2025", deskripsi: "Pelunasan invoice klien", kategori: "Pendapatan", tipe: "masuk", jumlah: 9800000, metode: "Transfer Bank", catatan: "Invoice INV-2025-0612." },
  { id: "tx-013", tanggal: "12 Juni 2025", deskripsi: "Langganan software operasional", kategori: "Administrasi", tipe: "keluar", jumlah: 847000, metode: "Kartu Kredit", catatan: "Alat kolaborasi tim." },
  { id: "tx-014", tanggal: "10 Juni 2025", deskripsi: "Penjualan - kemitraan reseller", kategori: "Pendapatan", tipe: "masuk", jumlah: 7260000, metode: "Transfer Bank", catatan: "Dua reseller aktif." },
  { id: "tx-015", tanggal: "8 Juni 2025", deskripsi: "Administrasi & perizinan", kategori: "Administrasi", tipe: "keluar", jumlah: 1350000, metode: "Transfer Bank", catatan: "Perpanjangan dokumen usaha." },
  { id: "tx-016", tanggal: "5 Juni 2025", deskripsi: "Penjualan toko online", kategori: "Pendapatan", tipe: "masuk", jumlah: 11230000, metode: "Virtual Account", catatan: "Settlement awal bulan." },
];
