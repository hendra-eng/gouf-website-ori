import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Scale, Factory, HeartPulse, HardHat, Rocket } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const INDUSTRIES = [
  { icon: ShoppingBag, name: "Retail & F&B", needs: "Transaksi harian yang padat, setoran dari banyak kanal penjualan." },
  { icon: Scale, name: "Jasa Profesional", needs: "Pendapatan per klien dan per proyek yang harus terlacak." },
  { icon: Factory, name: "Manufaktur", needs: "Pengeluaran operasional dan pembelian bahan yang rutin dan besar." },
  { icon: HeartPulse, name: "Klinik & Kesehatan", needs: "Pencatatan yang tertib untuk banyak sumber pemasukan sekaligus." },
  { icon: HardHat, name: "Konstruksi", needs: "Proyek dengan nilai besar dan pengeluaran bertahap." },
  { icon: Rocket, name: "Startup & Teknologi", needs: "Laju pengeluaran bulanan yang perlu dipantau ketat." },
];

export default function Industri() {
  return (
    <div data-testid="page-industri">
      <Seo
        title="Industri — zafeb"
        description="zafeb untuk retail & F&B, jasa profesional, manufaktur, kesehatan, konstruksi, dan startup."
      />
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <SectionHeading
          eyebrow="Industri"
          title="Setiap industri punya kebiasaan angkanya sendiri"
          sub="Berikut cara zafeb membantu beban pembukuan yang khas di tiap bidang usaha. Kebutuhan spesifik industri Anda bisa dibahas saat demo."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5" data-testid={`industri-card-${i}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-mint"><ind.icon size={22} /></span>
                <h3 className="font-display text-xl font-bold text-ink">{ind.name}</h3>
                <p className="flex-1 text-sm leading-relaxed text-inkMuted">{ind.needs}</p>
                <Link to="/demo" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline" data-testid={`industri-cta-${i}`}>
                  Diskusikan di demo <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </div>
  );
}
