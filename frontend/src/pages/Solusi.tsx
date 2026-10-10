import { Link } from "react-router-dom";
import { ArrowRight, Store, Landmark, Briefcase, LineChart } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const SOLUTIONS = [
  {icon:Store,label:'Untuk Pemilik Bisnis & UMKM',title:'Punya dasar sebelum menentukan langkah.',points:['Pahami laba dengan membandingkan pendapatan dan beban pada periode yang sama.','Baca piutang bersama saldo kas sebelum menambah pengeluaran.','Coba skenario biaya dan pendapatan untuk membahas rencana pertumbuhan.'],module:'overview'},
  {icon:Landmark,label:'Untuk Tim Keuangan',title:'Jelaskan angka, bukan sekadar mengirim laporan.',points:['Catat transaksi dengan tanggal, deskripsi, kategori, dan status yang konsisten.','Telusuri transaksi yang membuat sebuah saldo berubah sebelum menyusun ringkasan.','Gunakan laba rugi, neraca, dan arus kas sebagai bahan pembahasan bersama pemilik usaha.'],module:'transactions'},
  {icon:Briefcase,label:'Untuk Akuntan & Konsultan',title:'Tinjau catatan dalam konteks perusahaan yang tepat.',points:['Pilih perusahaan dan periode yang sesuai sebelum melakukan peninjauan.','Gunakan daftar akun serta jejak perubahan sebagai bahan pemeriksaan.','Diskusikan temuan dan kebutuhan akses bersama tim sebelum penggunaan produksi.'],module:'clients'},
  {icon:LineChart,label:'Untuk Pimpinan Perusahaan',title:'Hubungkan target dengan kemampuan usaha.',points:['Tinjau tren pendapatan dan biaya sebelum menetapkan prioritas.','Bedakan pertumbuhan penjualan dengan pertumbuhan laba.','Uji skenario rencana biaya dan periksa kebutuhan kas secara terpisah.'],module:'budget'},
];

export default function Solusi() {
  return (
    <div data-testid="page-solusi">
      <Seo
        title="Solusi — zafeb"
        description="zafeb untuk pemilik bisnis, tim keuangan, akuntan, dan pimpinan perusahaan."
      />
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <SectionHeading
          eyebrow="Solusi"
          title="Peran berbeda. Keputusan keuangan yang saling terhubung."
          sub="Pemilik bisnis perlu melihat gambaran. Tim keuangan perlu menelusuri detail. Mulai dari rutinitas yang sesuai dengan tanggung jawab Anda."
        />
      </section>
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-14 sm:px-6 lg:px-8">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.label} delay={0.05}>
            <div
              className={`grid items-center gap-8 rounded-3xl border border-line bg-white p-8 lg:grid-cols-12 lg:p-10 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              data-testid={`solusi-card-${i}`}
            >
              <div className="lg:col-span-4 lg:[direction:ltr]">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-mint"><s.icon size={22} /></span>
                  <span className="eyebrow">{s.label}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">{s.title}</h2>
              </div>
              <div className="lg:col-span-8 lg:[direction:ltr]">
                <ul className="grid gap-3 sm:grid-cols-1">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 rounded-2xl bg-paper px-4 py-3 text-sm text-ink">
                      <span className="mt-0.5 font-mono text-xs font-bold text-brand">0{j + 1}</span> {p}
                    </li>
                  ))}
                </ul>
                <Link to={`/coba-demo?modul=${s.module}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline" data-testid={`solusi-cta-${i}`}>
                  Coba di demo interaktif <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <CtaBanner />
    </div>
  );
}
