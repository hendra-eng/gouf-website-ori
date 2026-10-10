import { Link } from "react-router-dom";
import { ArrowRight, LayoutDashboard, ArrowLeftRight, FileBarChart, Users, MousePointerClick, Database, ScanSearch } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DashboardMock from "@/components/DashboardMock";
import CtaBanner from "@/components/CtaBanner";

const MODULES = [
  { icon: LayoutDashboard, name: "Pahami laba & kas", desc: "Baca hasil usaha bersama uang yang tersedia. Telusuri piutang ketika pendapatan belum menjadi penerimaan." },
  { icon: ArrowLeftRight, name: "Rapikan catatan", desc: "Lengkapi transaksi dengan tanggal, kategori, deskripsi, dan status pembayaran untuk memudahkan peninjauan." },
  { icon: FileBarChart, name: "Jelaskan laporan", desc: "Gunakan laba rugi, neraca, dan arus kas untuk menjawab pertanyaan tim tentang kinerja serta posisi keuangan." },
  { icon: Users, name: "Rencanakan anggaran", desc: "Jadikan hasil periode sebelumnya sebagai dasar asumsi pendapatan dan biaya sebelum menambah komitmen." },
];

import { MONTHLY_ROUTINE } from '@/content/customer';
const FLOW = MONTHLY_ROUTINE.map(([title,desc],i)=>({icon:[MousePointerClick,ScanSearch,FileBarChart,Database][i],title:`${i+1}. ${title}`,desc}));

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
              Hubungkan pencatatan harian dengan gambaran bisnis.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-inkMuted sm:text-lg">
              Pemilik usaha perlu memahami laba dan kas. Tim keuangan perlu menelusuri catatan di baliknya. Kenali alur zafeb untuk menata transaksi, membaca laporan, dan menyusun rencana biaya.
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
        <SectionHeading eyebrow="Kebutuhan utama" title="Dari pekerjaan harian ke keputusan usaha" sub="Pahami fungsi setiap bagian sebelum menyesuaikannya dengan cara kerja tim Anda." />
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
          <SectionHeading eyebrow="Rutinitas keuangan" title="Empat tahap untuk meninjau satu periode usaha" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
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

      <CtaBanner title="Mulai dari alur kerja yang paling penting untuk Anda." sub="Jelajahi demo, atau bawa pertanyaan tentang pembukuan dan laporan ke sesi personal." />
    </div>
  );
}
