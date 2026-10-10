import { Link, useSearchParams } from "react-router-dom";
import { CalendarCheck, Mail, Video } from "lucide-react";
import Seo from "@/components/Seo";
import RequestForm from "@/components/RequestForm";
import Reveal from "@/components/Reveal";
import { PACKAGES } from "@/content/pricing";

const AFTER_STEPS = [
  { icon: CalendarCheck, title: "Konfirmasi di layar", desc: "Setelah formulir tersimpan, Anda menerima nomor referensi. Simpan nomor ini untuk tindak lanjut; email otomatis belum diaktifkan." },
  { icon: Mail, title: "Kami menghubungi Anda", desc: "Tim zafeb mengirim email untuk menyapa dan mengatur jadwal." },
  { icon: Video, title: "Sesi demo online", desc: "Kami memandu platform memakai data demo — atau cerita bisnis Anda." },
];

export default function Demo() {
  const [params] = useSearchParams();
  const paketParam = params.get("paket") || "";
  const validPaket = PACKAGES.some((p) => p.id === paketParam) ? paketParam : "";

  return (
    <div data-testid="page-demo">
      <Seo
        title="Minta Demo — zafeb"
        description="Kirim permintaan demo zafeb. Tanpa pembayaran, tanpa data keuangan asli — cukup informasi kontak."
      />
      <section className="ledger-bg">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="eyebrow">Minta Demo</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl" data-testid="demo-page-title">
              Lihat platformnya, jangan cuma membacanya.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-inkMuted sm:text-lg">
              Isi formulir ini dan tim kami akan menjadwalkan sesi demo. Tanpa pembayaran dan tanpa pembuatan akun otomatis.
            </p>
            <p className="mt-6 text-sm text-brand"><Link to="/coba-demo" className="font-bold underline underline-offset-4" data-testid="request-page-try-demo">Ingin mencoba sendiri? Buka demo terpandu tanpa formulir.</Link></p>
            <div className="mt-10 space-y-5" data-testid="demo-after-steps">
              {AFTER_STEPS.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-line bg-white p-5" data-testid={`demo-after-step-${i}`}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-brand"><s.icon size={18} /></span>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-inkMuted">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 rounded-2xl border border-dashed border-line bg-white/60 p-4 text-xs leading-relaxed text-inkMuted" data-testid="demo-privacy-note">
              Formulir ini hanya menyimpan informasi kontak Anda untuk keperluan menjawab permintaan. Kami tidak meminta password aplikasi maupun data keuangan asli melalui situs ini.
            </p>
          </div>
          <Reveal delay={0.1} className="self-start lg:sticky lg:top-24">
            <RequestForm defaultJenis="demo" defaultPaket={validPaket} title={validPaket ? `Minat Paket ${PACKAGES.find((p) => p.id === validPaket)?.name}` : "Minta Demo"} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
