export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "Pembukuan" | "Arus Kas" | "Laporan" | "Operasional" | "Pajak";
  readMin: number;
  date: string;
  body: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "tanda-pindah-dari-spreadsheet",
    title: "5 tanda bisnis Anda sudah perlu pindah dari spreadsheet",
    excerpt: "Spreadsheet hebat untuk memulai, tapi ada titik ketika ia mulai menyembunyikan masalah alih-alih menunjukkannya.",
    category: "Pembukuan",
    readMin: 4,
    date: "2026-06-18",
    body: [
      "Hampir setiap bisnis memulai pembukuannya dari spreadsheet. Fleksibel, gratis, dan semua orang bisa membukanya. Masalahnya, spreadsheet tidak pernah memberi tahu kapan ia mulai tidak lagi cocok. Berikut lima tanda yang paling sering kami temui.",
      "Pertama, ada lebih dari satu versi file yang \"paling baru\". Ketika tim keuangan dan pemilik bisnis memegang salinan yang berbeda, setiap rapat dimulai dengan menyamakan angka, bukan membahas keputusan.",
      "Kedua, rekap akhir bulan memakan lebih dari satu hari kerja. Waktu itu seharusnya dipakai untuk menganalisis, bukan menyalin-tempel. Ketiga, Anda tidak yakin saldo kas hari ini tanpa membuka tiga tab berbeda.",
      "Keempat, kategori transaksi berubah-ubah tergantung siapa yang mencatat. \"Transportasi\", \"Transport\", dan \"Bensin\" akhirnya menjadi tiga baris berbeda di laporan. Kelima, akuntan Anda meminta data dalam format yang berbeda setiap periode pelaporan.",
      "Jika tiga dari lima tanda ini terasa familiar, saatnya mempertimbangkan satu sumber data yang disepakati bersama. Tidak harus langsung besar — mulai dari mencatat transaksi baru di satu tempat, biarkan arsip lama tetap di spreadsheet.",
    ],
  },
  {
    slug: "membaca-arus-kas-dalam-5-menit",
    title: "Cara membaca laporan arus kas dalam 5 menit",
    excerpt: "Laporan arus kas sering dianggap rumit. Padahal hanya ada tiga pertanyaan yang perlu dijawab.",
    category: "Arus Kas",
    readMin: 5,
    date: "2026-06-02",
    body: [
      "Laporan arus kas menjawab satu hal: dari mana uang datang dan ke mana uang pergi dalam satu periode. Berbeda dengan laba rugi yang bisa terlihat sehat sementara kas menipis, arus kas tidak bisa berbohong.",
      "Pertanyaan pertama: apakah kas dari operasional positif? Jika bisnis inti Anda menghasilkan lebih banyak uang daripada yang dihabiskannya, fondasinya sehat. Jika negatif berbulan-bulan, pertumbuhan penjualan sekalipun tidak akan menyelamatkan.",
      "Pertanyaan kedua: ke mana kas investasi pergi? Pembelian peralatan, renovasi, atau perangkat lunak masuk di sini. Angka negatif wajar — selama Anda tahu untuk apa.",
      "Pertanyaan ketiga: bagaimana kas pendanaan? Pinjaman masuk, cicilan keluar, setoran modal, dan penarikan pemilik. Jika operasional negatif tapi kas total positif karena pinjaman, itu lampu kuning.",
      "Di zafeb, tiga bagian ini disajikan berdampingan dengan grafik enam bulan agar polanya terlihat tanpa menghitung manual.",
    ],
  },
  {
    slug: "kategori-transaksi-yang-konsisten",
    title: "Menyusun kategori transaksi yang konsisten (dan bertahan lama)",
    excerpt: "Kategori yang baik membuat laporan bisa dibandingkan antar periode. Begini cara menyusunnya sekali saja.",
    category: "Pembukuan",
    readMin: 6,
    date: "2026-05-20",
    body: [
      "Kategori transaksi adalah tulang punggung laporan. Terlalu sedikit, laporan tidak informatif. Terlalu banyak, pencatatan jadi beban dan tidak ada yang konsisten memakainya.",
      "Aturan pertama: mulai dari laporan yang ingin Anda baca, bukan dari transaksi yang ada. Jika Anda ingin tahu biaya pemasaran per bulan, buat kategori \"Pemasaran\" — bukan \"Iklan Instagram\", \"Iklan Google\", dan \"Cetak Brosur\" terpisah. Detail bisa masuk ke catatan.",
      "Aturan kedua: maksimal 15–20 kategori pengeluaran dan 5–8 kategori pemasukan untuk bisnis kecil-menengah. Lebih dari itu, konsistensinya hampir pasti turun.",
      "Aturan ketiga: tulis definisi singkat setiap kategori dan sepakati dengan tim. Satu kalimat cukup: \"Operasional Kantor: listrik, air, internet, ATK, kebersihan.\"",
      "Terakhir, tinjau setiap kuartal. Kategori yang hanya terisi satu-dua transaksi bisa digabung; kategori yang terlalu gemuk bisa dipecah. Perubahan kecil berkala lebih sehat daripada perombakan total setahun sekali.",
    ],
  },
  {
    slug: "laba-rugi-vs-arus-kas",
    title: "Laba rugi positif tapi kas kosong? Ini penjelasannya",
    excerpt: "Dua laporan ini sering disalahartikan sebagai hal yang sama. Perbedaannya menentukan apakah bisnis Anda bertahan.",
    category: "Laporan",
    readMin: 4,
    date: "2026-05-06",
    body: [
      "Salah satu kebingungan paling umum pemilik bisnis: laporan laba rugi menunjukkan untung, tapi saldo rekening tidak bertambah — atau malah berkurang. Tidak ada yang salah dengan laporannya; keduanya memang mengukur hal yang berbeda.",
      "Laba rugi mencatat pendapatan saat terjadi (misalnya saat faktur diterbitkan), bukan saat uang diterima. Jika pelanggan membayar 60 hari kemudian, laba sudah tercatat tapi kasnya belum ada.",
      "Sebaliknya, pembelian stok dalam jumlah besar mengurangi kas seketika, tetapi di laba rugi baru menjadi beban ketika stok tersebut terjual.",
      "Cicilan pinjaman, pembelian aset, dan penarikan pemilik juga mengurangi kas tanpa muncul sebagai beban di laba rugi.",
      "Karena itu, keduanya perlu dibaca berdampingan. Laba rugi menjawab \"apakah model bisnis ini menguntungkan?\"; arus kas menjawab \"apakah kita bisa membayar tagihan bulan depan?\". Bisnis yang sehat menjawab ya untuk keduanya.",
    ],
  },
  {
    slug: "menutup-buku-akhir-bulan",
    title: "Checklist menutup buku akhir bulan dalam satu hari",
    excerpt: "Urutan langkah sederhana agar rekap bulanan tidak lagi memakan satu minggu.",
    category: "Operasional",
    readMin: 5,
    date: "2026-04-22",
    body: [
      "Tutup buku bulanan tidak harus menyakitkan. Kuncinya adalah urutan yang sama setiap bulan dan tidak menunda pencatatan sampai akhir periode.",
      "Hari-hari biasa: catat transaksi setiap hari atau maksimal setiap dua hari. Ini 80% dari pekerjaan tutup buku — dilakukan sedikit demi sedikit.",
      "Langkah 1 (pagi hari tutup buku): cocokkan saldo kas dan bank dengan catatan. Selisih kecil biasanya berasal dari biaya admin bank atau transaksi yang terlewat.",
      "Langkah 2: periksa transaksi tanpa kategori atau dengan kategori \"Lain-lain\". Pindahkan ke kategori yang tepat. Langkah 3: tinjau piutang yang sudah lewat jatuh tempo dan tagihan yang harus dibayar minggu depan.",
      "Langkah 4 (siang): buka laporan laba rugi dan arus kas, bandingkan dengan bulan lalu. Tulis tiga poin yang berubah signifikan dan mengapa. Itulah laporan manajemen Anda — selesai sebelum jam kerja berakhir.",
    ],
  },
  {
    slug: "persiapan-pajak-tanpa-panik",
    title: "Persiapan pelaporan pajak tanpa panik: rapi dari pembukuan",
    excerpt: "Pelaporan pajak terasa berat karena datanya tidak siap. Pembukuan yang konsisten menyelesaikan sebagian besar masalah itu.",
    category: "Pajak",
    readMin: 5,
    date: "2026-04-08",
    body: [
      "Musim pelaporan pajak sering menjadi momen paling menegangkan bagi pemilik bisnis — bukan karena pajaknya, melainkan karena mencari dan merapikan data yang berserakan.",
      "Pangkal masalahnya hampir selalu sama: pembukuan yang tidak lengkap sepanjang tahun. Solusinya bukan bekerja lebih keras di bulan Maret, tetapi mencatat lebih disiplin di sebelas bulan lainnya.",
      "Tiga hal yang membuat akuntan atau konsultan pajak Anda bahagia: (1) semua transaksi punya kategori dan tanggal yang jelas, (2) bukti transaksi mudah ditemukan, dan (3) laporan laba rugi dan neraca bisa diekspor kapan saja.",
      "Pisahkan sejak awal transaksi pribadi dan bisnis. Ini sumber koreksi terbanyak saat pelaporan, dan paling mudah dicegah.",
      "Catatan: artikel ini bersifat edukasi umum, bukan nasihat pajak. Aturan pajak berubah dan berbeda per jenis usaha — selalu konsultasikan dengan konsultan pajak Anda.",
    ],
  },
];
