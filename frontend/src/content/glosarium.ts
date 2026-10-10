export interface GlossaryTerm {
  istilah: string;
  definisi: string;
  contoh?: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  { istilah: "Akun (Chart of Accounts)", definisi: "Daftar seluruh pos keuangan yang dipakai untuk mengelompokkan transaksi: kas, piutang, pendapatan, beban, dan sebagainya.", contoh: "Kas Bank BCA, Pendapatan Jasa, Beban Sewa." },
  { istilah: "Arus Kas (Cash Flow)", definisi: "Pergerakan uang masuk dan keluar dalam satu periode. Dibagi menjadi arus kas operasional, investasi, dan pendanaan.", contoh: "Pembayaran dari pelanggan adalah arus kas masuk operasional." },
  { istilah: "Aset", definisi: "Segala sesuatu bernilai ekonomi yang dimiliki bisnis — kas, piutang, persediaan, peralatan, kendaraan.", contoh: "Laptop kantor senilai Rp15 juta adalah aset tetap." },
  { istilah: "Beban (Expense)", definisi: "Biaya yang dikeluarkan untuk menjalankan bisnis dalam satu periode dan mengurangi laba.", contoh: "Gaji, sewa, listrik, iklan." },
  { istilah: "Buku Besar (General Ledger)", definisi: "Kumpulan seluruh catatan transaksi yang dikelompokkan per akun; sumber utama penyusunan laporan keuangan." },
  { istilah: "Depresiasi (Penyusutan)", definisi: "Pengalokasian biaya aset tetap selama masa manfaatnya, karena nilai aset berkurang seiring waktu.", contoh: "Mesin Rp120 juta dengan umur 10 tahun disusutkan Rp12 juta per tahun." },
  { istilah: "Ekuitas (Modal)", definisi: "Hak pemilik atas aset bisnis setelah dikurangi seluruh kewajiban. Rumus: Aset − Kewajiban = Ekuitas." },
  { istilah: "Faktur (Invoice)", definisi: "Dokumen tagihan kepada pelanggan yang mencantumkan barang/jasa, jumlah, dan jatuh tempo pembayaran." },
  { istilah: "Harga Pokok Penjualan (HPP)", definisi: "Biaya langsung untuk memproduksi atau membeli barang yang terjual. Pendapatan dikurangi HPP menghasilkan laba kotor." },
  { istilah: "Jurnal", definisi: "Catatan kronologis setiap transaksi beserta akun debit dan kreditnya, sebelum dipindahkan ke buku besar." },
  { istilah: "Kewajiban (Liabilitas)", definisi: "Utang atau tanggungan yang harus dibayar bisnis di masa depan.", contoh: "Utang usaha ke pemasok, pinjaman bank, pajak terutang." },
  { istilah: "Laba Bersih", definisi: "Sisa pendapatan setelah dikurangi seluruh beban, termasuk pajak dan bunga. Baris terakhir di laporan laba rugi." },
  { istilah: "Laba Kotor", definisi: "Pendapatan dikurangi harga pokok penjualan — sebelum beban operasional seperti gaji dan sewa." },
  { istilah: "Laporan Laba Rugi", definisi: "Laporan yang membandingkan pendapatan dan beban dalam satu periode untuk menunjukkan laba atau rugi." },
  { istilah: "Neraca (Balance Sheet)", definisi: "Potret posisi keuangan pada satu titik waktu: aset di satu sisi, kewajiban dan ekuitas di sisi lain. Keduanya harus seimbang." },
  { istilah: "Pendapatan (Revenue)", definisi: "Nilai penjualan barang atau jasa yang diperoleh dalam satu periode, sebelum dikurangi beban apa pun." },
  { istilah: "Persediaan (Inventory)", definisi: "Barang yang dimiliki untuk dijual atau dipakai dalam produksi. Tercatat sebagai aset sampai terjual." },
  { istilah: "Piutang Usaha", definisi: "Uang yang masih harus diterima dari pelanggan atas penjualan yang sudah terjadi tapi belum dibayar." },
  { istilah: "Rekonsiliasi Bank", definisi: "Proses mencocokkan catatan kas internal dengan mutasi rekening bank untuk menemukan selisih atau transaksi yang terlewat." },
  { istilah: "Saldo", definisi: "Jumlah akhir suatu akun pada waktu tertentu — misalnya saldo kas hari ini." },
  { istilah: "Titik Impas (Break-even Point)", definisi: "Tingkat penjualan di mana total pendapatan sama dengan total biaya — tidak untung, tidak rugi." },
  { istilah: "Utang Usaha", definisi: "Kewajiban kepada pemasok atas pembelian barang atau jasa yang belum dibayar." },
  { istilah: "Basis Akrual", definisi: "Metode pencatatan di mana pendapatan dan beban diakui saat terjadi, bukan saat uang berpindah tangan." },
  { istilah: "Basis Kas", definisi: "Metode pencatatan di mana pendapatan dan beban diakui saat uang benar-benar diterima atau dibayarkan." },
  { istilah: "Margin", definisi: "Persentase laba terhadap pendapatan. Margin kotor = laba kotor ÷ pendapatan; margin bersih = laba bersih ÷ pendapatan." },
  { istilah: "Periode Akuntansi", definisi: "Rentang waktu penyusunan laporan — bulanan, kuartalan, atau tahunan." },
];
