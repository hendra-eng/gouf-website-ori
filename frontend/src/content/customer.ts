export const BUSINESS_PRIORITIES = [
  { id:'profit', number:'01', title:'Pahami laba dan kas', question:'Bisnis untung, tetapi uangnya ke mana?', description:'Baca pendapatan, biaya, piutang, dan arus kas sebagai satu cerita. Bedakan hasil usaha dari uang yang benar-benar tersedia.', to:'/fitur/arus-kas', action:'Pahami alur kas' },
  { id:'books', number:'02', title:'Rapikan pembukuan', question:'Angka laporan sulit ditelusuri?', description:'Mulai dari catatan transaksi yang konsisten. Telusuri kategori dan periode sebelum menjadikannya bahan laporan serta diskusi tim.', to:'/fitur/pembukuan', action:'Lihat alur pembukuan' },
  { id:'budget', number:'03', title:'Rencanakan anggaran', question:'Siap menambah biaya atau memperluas usaha?', description:'Uji asumsi pendapatan dan beban terlebih dahulu. Bandingkan skenario agar keputusan punya dasar, bukan hanya target.', to:'/fitur/anggaran-proyeksi', action:'Jelajahi perencanaan' },
];
export const CUSTOMER_ROLES = [
  { id:'pemilik-bisnis', label:'PEMILIK BISNIS & UMKM', title:'Lihat kondisi usaha tanpa tenggelam dalam detail.', intro:'Anda membutuhkan jawaban untuk menentukan langkah: berapa laba, apakah kas cukup, dan biaya mana yang perlu ditinjau.', routine:'Tinjauan mingguan', points:['Baca pendapatan dan beban pada periode yang sama.','Periksa piutang sebelum merencanakan pembayaran.','Uji tambahan biaya terhadap proyeksi laba.'], outcome:'Bawa tiga hal ke rapat: posisi kas, perubahan margin, dan prioritas pengeluaran.', to:'/fitur/arus-kas' },
  { id:'tim-keuangan', label:'TIM KEUANGAN PERUSAHAAN', title:'Dari catatan yang tertata ke laporan yang bisa dijelaskan.', intro:'Fokuskan pemeriksaan pada transaksi, kategori, dan hubungan antar-laporan agar diskusi tidak berhenti pada angka akhir.', routine:'Persiapan tutup buku', points:['Periksa transaksi belum lunas dan kategori yang digunakan.','Cocokkan periode pencatatan dengan laporan yang ditinjau.','Telusuri perbedaan laba dan kas sebelum membagikan ringkasan.'], outcome:'Siapkan ringkasan kinerja beserta penyebab perubahan, bukan hanya kumpulan saldo.', to:'/fitur/pembukuan' },
];
export const MONTHLY_ROUTINE = [
  ['Catat transaksi','Lengkapi tanggal, deskripsi, kategori, jumlah, dan status pembayaran. Pisahkan uang usaha dari uang pribadi.'],
  ['Periksa sebelum menutup periode','Telusuri catatan yang belum lengkap, piutang yang belum dibayar, serta pengeluaran yang perlu penjelasan.'],
  ['Baca laporan bersama','Bandingkan laba rugi dengan arus kas. Bahas perubahan biaya dan posisi tagihan, bukan hanya kenaikan penjualan.'],
  ['Susun rencana berikutnya','Gunakan hasil periode ini sebagai dasar anggaran. Coba skenario pendapatan dan biaya sebelum menentukan prioritas.'],
];
export const MODULE_BENEFITS:Record<string,string> = {
 overview:'Mulai peninjauan usaha dari pendapatan, laba, kas, dan piutang pada satu ringkasan.',
 transactions:'Cari asal sebuah angka lewat tanggal, deskripsi, kategori, dan status pembayaran.',
 statements:'Pahami kinerja usaha, posisi aset dan kewajiban, serta pergerakan kas melalui laporan yang saling melengkapi.',
 receivables:'Kenali pendapatan yang belum menjadi kas agar penagihan punya prioritas.',
 payables:'Tinjau kewajiban kepada pemasok sebelum menentukan urutan pembayaran.',
 assets:'Bedakan aset lancar dengan aset tetap saat menilai sumber daya yang dimiliki usaha.',
 liabilities:'Pahami besarnya kewajiban yang perlu diperhitungkan dalam rencana keuangan.',
 equity:'Baca hubungan antara modal yang ditanamkan dan hasil usaha yang terbentuk.',
 budget:'Uji dampak perubahan pendapatan dan biaya terhadap rencana laba.',
 tax:'Kenali dokumen serta langkah pemeriksaan yang perlu disiapkan untuk berdiskusi dengan konsultan pajak.',
 analytics:'Gunakan margin dan rasio sebagai titik awal mencari perubahan yang perlu ditelusuri.',
 analyst:'Jelajahi contoh cara menjelaskan laba, beban, serta posisi kas dalam bahasa yang mudah dipahami.',
 agent:'Kenali alur pemeriksaan data sebelum sebuah berkas menjadi catatan transaksi.',
 audit:'Telusuri perubahan catatan agar angka yang sedang ditinjau memiliki konteks.',
 reports:'Temukan laporan sesuai pertanyaan bisnis yang ingin Anda jawab.',
 clients:'Pilih konteks perusahaan yang tepat ketika menangani lebih dari satu pembukuan.',
 accounts:'Susun pemahaman yang sama tentang pengelompokan aset, utang, modal, pendapatan, dan beban.',
 documents:'Pahami peran dokumen pendukung dalam menjelaskan sebuah catatan keuangan.',
};
