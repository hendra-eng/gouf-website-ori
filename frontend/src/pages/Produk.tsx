import { Link } from "react-router-dom";
import { ArrowRight, LayoutDashboard, ArrowLeftRight, FileBarChart, Users, MousePointerClick, Database, ScanSearch } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DashboardMock from "@/components/DashboardMock";
import CtaBanner from "@/components/CtaBanner";

const MODULES = [
  { icon: LayoutDashboard, name: "Pantau keuangan", desc: "Pendapatan, laba, kas, piutang, dan utang dalam konteks perusahaan yang dipilih." },
  { icon: ArrowLeftRight, name: "Catat & telusuri", desc: "Transaksi, jurnal, daftar akun, dokumen pendukung, dan riwayat aktivitas." },
  { icon: FileBarChart, name: "Laporan & rencana", desc: "Laba rugi, neraca, arus kas, ekuitas, serta skenario anggaran dan proyeksi." },
  { icon: Users, name: "Klien & analisis", desc: "Berpindah konteks perusahaan dan jelajahi contoh penjelasan keuangan berbasis data." },
];

const FLOW = [
  { icon: MousePointerClick, title: "1. Catat", desc: "Setiap transaksi masuk dengan kategori yang konsisten." },
  { icon: ScanSearch, title: "2. Telusuri", desc: "Cari dan filter untuk memahami dari mana angka berasal." },
  { icon: Database, title: "3. Ambil keputusan", desc: "Bandingkan periode, baca laporan, dan putuskan langkah berikutnya." },
];

export default function Produk() {
  return (
    <div data-testid="page-produk">
      <Seo
        title="Produk — zafeb"
        description="Kenali modul-modul zafeb: ringkasan keuangan, transaksi, laporan, dan kolaborasi tim dalam satu dasbor."
      />
      <section className="ledger-bg">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <span className="eyebrow">Produk</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl" data-testid="produk-title">
              Satu dasbor, seluruh siklus keuangan harian.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-inkMuted sm:text-lg">
              Dari pencatatan transaksi hingga laporan yang siap dibaca — zafeb menjaga setiap angka tetap nyambung, sehingga tidak ada waktu yang hilang mencarinya.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/coba-demo" className="btn-primary" data-testid="produk-cta-explore">
                Coba Demo Interaktif <ArrowRight size={16} />
              </Link>
              <Link to="/demo" className="btn-light" data-testid="produk-cta-demo">Minta Demo</Link>
            </div>
          </div>
          <Reveal><DashboardMock /></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="Modul inti" title="Empat modul yang saling terhubung" sub="Setiap modul menyumbang ke satu tujuan: angka yang bisa dipercaya." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.07}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5" data-testid={`produk-module-${i}`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-mint"><m.icon size={20} /></span>
                <h3 className="font-display text-lg font-bold text-ink">{m.name}</h3>
                <p className="text-sm leading-relaxed text-inkMuted">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading eyebrow="Cara bekerja" title="Tiga langkah, dari catatan ke keputusan" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {FLOW.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-3xl bg-paper p-8" data-testid={`produk-flow-${i}`}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand shadow-sm border border-line"><f.icon size={20} /></span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-inkMuted">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Ingin melihat modul-modul ini dengan data nyata?" sub="Minta demo dan tim kami memandu Anda melewati setiap modul." />
    </div>
  );
}
