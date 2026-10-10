# zafeb — Website promosi & demo terpandu

## Permintaan pengguna
Memperbarui website dari `website 2 clean.zip`, mengganti Gouf Consulting/Gouf Accounting menjadi **zafeb**, memakai logo baru pengguna dengan tampilan 3D di sebelah nama pada header, menyelaraskan konten dengan aplikasi asli serta inspirasi struktur Xero/Jurnal. Setelah tahap analisis pengguna memberi izin implementasi dan memilih **Demo mandiri dengan tur terpandu**.

## Batasan
- Tidak mengubah aplikasi eksternal maupun datanya. Kredensial pengguna tidak dimasukkan ke website/demo.
- Demo tanpa login, dengan data fiktif, transaksi lokal, laporan terhitung, anggaran, dan contoh analisis yang jelas berlabel SIMULASI; tidak ada panggilan AI nyata.
- Tur otomatis saat membuka demo; bisa dilewati, dilanjutkan, dan diulang.
- Form permintaan nyata disimpan di MongoDB privat. Email otomatis belum diaktifkan: public form tidak boleh menjadi relay email. UI hanya menjanjikan konfirmasi penyimpanan.
- Tidak mengarang sertifikasi, integrasi resmi pajak, metrik pelanggan, dukungan, harga, atau bukti keamanan.

## Arsitektur
React 19 + TypeScript + CRA/craco, Tailwind, Framer Motion, Recharts, Three/R3F untuk logo. FastAPI + MongoDB dari MONGO_URL/DB_NAME asli. Konten & halaman dipulihkan dari ZIP dengan konfigurasi platform dipertahankan.

## Rencana & verifikasi
1. Pulihkan fondasi dan merek: kompilasi, semua halaman, logo/nav/footer/meta konsisten.
2. Demo `/coba-demo`: semua modul bisa dibuka; transaksi menambah/mengubah ringkasan/laporan; client/periode, filter, CSV, anggaran, tur, reset dan isolasi data diuji.
3. Halaman fitur mendalam, workflow, onboarding; pisahkan coba demo dan permintaan `/demo`; validasi formulir dan dedup tersimpan diuji.
4. QA desktop 1920x800 dan mobile 390x844, perbaiki seluruh temuan.

## Status
Implementasi berjalan. Aplikasi asli hanya ditelaah: beberapa layar transaksi/AR/AP menghasilkan 404, sebagian data contoh/kosong, mobile overflow. Masalah aplikasi eksternal tidak termasuk perubahan website ini.

## Backlog yang menunggu data resmi
Harga final, profil/kontak perusahaan & legal final, bukti keamanan/integrasi, studi kasus nyata. Opsional sebelumnya: bahasa Inggris, prerender SEO. Email owner/konfirmasi perlu konfigurasi dan alur aman terverifikasi sebelum diaktifkan.
