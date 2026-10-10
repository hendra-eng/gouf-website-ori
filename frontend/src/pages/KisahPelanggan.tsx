import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import StatusChip from "@/components/StatusChip";
import CtaBanner from "@/components/CtaBanner";

export const STORIES = [
 {slug:'usaha-jasa',industri:'Jasa profesional',perusahaan:'Saat proyek selesai, pembayaran belum tentu masuk.',persona:'Pemilik usaha',tantangan:'Usaha telah menagihkan pekerjaan, tetapi sebagian pelanggan belum membayar. Pemilik perlu menilai kemampuan membayar biaya rutin tanpa hanya mengandalkan omzet.',solusi:'Tinjau penjualan yang diakui, pembayaran yang sudah diterima, dan piutang yang belum lunas. Baca laba bersama arus kas sebelum menyetujui pengeluaran baru.',hasil:[['Piutang','Kenali yang belum dibayar'],['Kas','Periksa uang tersedia'],['Biaya','Susun prioritas bayar']],kutipan:'Apakah uang yang tersedia cukup untuk kewajiban terdekat?',module:'receivables'},
 {slug:'tutup-buku',industri:'Lintas industri',perusahaan:'Beban meningkat. Tim perlu menjelaskan penyebabnya.',persona:'Tim keuangan',tantangan:'Saldo beban lebih besar dari periode sebelumnya. Angka total belum menjelaskan apakah perubahan datang dari biaya rutin, pengeluaran sesekali, atau klasifikasi transaksi.',solusi:'Cari transaksi pada periode terkait dan tinjau kategorinya. Cocokkan catatan dengan bukti, lalu rangkum penyebab perubahan untuk dibahas dengan pemilik bisnis.',hasil:[['Telusuri','Periksa sumber angka'],['Tinjau','Cocokkan kategori'],['Jelaskan','Bawa konteks ke rapat']],kutipan:'Perubahan biaya mana yang perlu perhatian lebih dulu?',module:'transactions'},
 {slug:'rencana-pertumbuhan',industri:'UMKM',perusahaan:'Ada rencana menambah biaya tetap.',persona:'Pemilik & keuangan',tantangan:'Tim mempertimbangkan penambahan anggota atau ruang usaha. Target penjualan saja belum cukup menjadi dasar persetujuan biaya.',solusi:'Gunakan pendapatan dan beban sebelumnya sebagai dasar. Bandingkan kondisi dasar, penjualan lebih rendah, serta biaya lebih tinggi. Tinjau kebutuhan kas sebagai langkah terpisah.',hasil:[['Dasar','Mulai dari hasil usaha'],['Skenario','Uji perubahan asumsi'],['Evaluasi','Tinjau rencana bersama']],kutipan:'Seberapa besar ruang usaha menanggung biaya tambahan?',module:'budget'},
 {slug:'persiapan-rapat',industri:'Lintas industri',perusahaan:'Rapat keuangan perlu menghasilkan tindakan.',persona:'Pemilik & keuangan',tantangan:'Tim sudah memiliki laporan, tetapi rapat hanya membacakan angka. Pertanyaan tentang laba, posisi kas, dan prioritas berikutnya belum terhubung.',solusi:'Mulai dengan tiga pertanyaan: apa yang berubah, mengapa berubah, dan apa yang perlu ditindaklanjuti. Gunakan laba rugi, neraca, dan arus kas sebagai bahan yang saling melengkapi.',hasil:[['Kinerja','Baca laba dan beban'],['Posisi','Periksa aset & utang'],['Arah','Sepakati tindak lanjut']],kutipan:'Keputusan apa yang perlu diambil dari laporan bulan ini?',module:'statements'},
];

export default function KisahPelanggan() {
  return (
    <div data-testid="page-kisah-pelanggan">
      <Seo title="Contoh Penggunaan — zafeb" description="Contoh cara meninjau piutang, menjelaskan perubahan biaya, menyiapkan anggaran, dan membahas laporan bisnis." />
      <PageHero
        eyebrow="Contoh penggunaan"
        title="Mulai dari situasi yang dekat dengan usaha Anda."
        sub="Skenario edukatif untuk menghubungkan persoalan sehari-hari dengan peninjauan keuangan. Bukan testimoni pelanggan atau janji hasil."
        testId="kisah-hero"
      >
        <StatusChip status="Ilustratif" />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {STORIES.map((s, i) => (
          <Reveal key={s.slug} delay={0.04}>
            <article className={`grid gap-8 overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-12 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`} data-testid={`kisah-card-${i}`}>
              <div className="ledger-bg-dark flex flex-col justify-between bg-brand-deep p-8 text-white lg:col-span-5 lg:[direction:ltr] lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-mint">{s.industri}</span>
                    <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{s.persona}</span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold leading-snug">{s.perusahaan}</h2>
                  <span className="mt-6 block font-mono text-[10px] uppercase tracking-wider text-mint">Pertanyaan utama</span>
                  <p className="mt-2 text-base leading-relaxed text-white/80">{s.kutipan}</p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {s.hasil.map(([v, l]) => (
                    <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <p className="nums font-display text-lg font-extrabold text-mint">{v}</p>
                      <p className="mt-0.5 text-[10px] uppercase leading-tight tracking-wider text-white/60">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 p-8 lg:col-span-7 lg:[direction:ltr] lg:p-10">
                <div>
                  <p className="eyebrow">Tantangan</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{s.tantangan}</p>
                </div>
                <div>
                  <p className="eyebrow">Yang dilakukan dengan zafeb</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{s.solusi}</p>
                </div>
                <Link to={`/coba-demo?modul=${s.module}`} className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline" data-testid={`kisah-cta-${i}`}>
                  Lihat alurnya di demo interaktif <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBanner title="Situasi mana yang paling dekat dengan usaha Anda?" sub="Ceritakan tantangannya, lalu diskusikan laporan dan alur kerja yang dibutuhkan bersama tim." />
    </div>
  );
}
