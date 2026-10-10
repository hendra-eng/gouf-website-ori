export interface FaqItem {
  q: string;
  a: string;
  kategori: "Umum" | "Demo & Harga" | "Data & Keamanan";
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    kategori: "Umum",
    q: "Apa itu zafeb?",
    a: "zafeb adalah platform pembukuan dan keuangan dari zafeb yang membantu bisnis memantau transaksi, laporan, dan arus kas dalam satu dasbor.",
  },
  {
    kategori: "Umum",
    q: "Siapa yang cocok memakai zafeb?",
    a: "Pemilik bisnis, tim keuangan, akuntan, dan pimpinan perusahaan yang ingin melihat posisi keuangan bisnis secara jelas tanpa merakit spreadsheet sendiri.",
  },
  {
    kategori: "Demo & Harga",
    q: "Bagaimana cara mencoba tanpa berkomitmen?",
    a: "Jelajahi demo terpandu melalui tombol Coba Demo. Anda bisa menambah transaksi contoh, membaca laporan, dan mengubah skenario anggaran tanpa akun atau data asli.",
  },
  {
    kategori: "Demo & Harga",
    q: "Berapa harga paketnya?",
    a: "Harga belum ditetapkan untuk versi publik ini. Setiap paket tertulis \u201cHubungi tim untuk harga\u201d dan tim kami menyusun penawaran sesuai kebutuhan Anda.",
  },
  {
    kategori: "Demo & Harga",
    q: "Apa yang terjadi setelah saya mengirim permintaan demo?",
    a: "Anda menerima konfirmasi di layar berisi nomor referensi, lalu tim kami menghubungi Anda melalui email untuk menjadwalkan sesi demo.",
  },
  {
    kategori: "Demo & Harga",
    q: "Apakah ada masa percobaan?",
    a: "Belum. Versi pertama situs ini berfokus pada permintaan demo dan minat paket — tanpa pembayaran atau pembuatan akun otomatis.",
  },
  {
    kategori: "Data & Keamanan",
    q: "Data apa yang dikumpulkan situs ini?",
    a: "Hanya data yang Anda isi pada formulir: nama, email, perusahaan, dan detail kontak opsional. Situs ini tidak meminta password aplikasi maupun data keuangan asli Anda.",
  },
  {
    kategori: "Data & Keamanan",
    q: "Apakah data demo memakai data asli?",
    a: "Tidak. Seluruh angka pada demo interaktif adalah data fiktif dalam Rupiah dan diberi label demo secara eksplisit.",
  },
  {
    kategori: "Umum",
    q: "Apakah situs tersedia dalam bahasa Inggris?",
    a: "Saat ini bahasa Indonesia. Struktur teks sudah disiapkan agar terjemahan bahasa Inggris dapat ditambahkan.",
  },
];
