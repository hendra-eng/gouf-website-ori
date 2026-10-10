import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import RequestForm from "@/components/RequestForm";
import { MessageSquare, Clock } from "lucide-react";

export default function Kontak() {
  return (
    <div data-testid="page-kontak">
      <Seo
        title="Kontak — zafeb"
        description="Hubungi tim zafeb untuk pertanyaan tentang platform, demo, atau paket."
      />
      <section className="ledger-bg">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="eyebrow">Kontak</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl" data-testid="kontak-title">
              Ada yang ingin ditanyakan?
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-inkMuted sm:text-lg">
              Kirim pesan melalui formulir di samping. Pesan Anda tersimpan sebagai permintaan resmi dan tim kami menjawab melalui email yang Anda cantumkan.
            </p>
            <div className="mt-10 space-y-4">
              <Reveal>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5" data-testid="kontak-info-channel">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-brand"><MessageSquare size={18} /></span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">Satu kanal resmi</h3>
                    <p className="mt-1 text-sm leading-relaxed text-inkMuted">
                      Semua pesan masuk melalui formulir ini agar tidak ada permintaan yang tercecer. Kontak resmi lain (email kantor, telepon) akan ditambahkan setelah ditetapkan.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5" data-testid="kontak-info-response">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-brand"><Clock size={18} /></span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">Sepenting apa?</h3>
                    <p className="mt-1 text-sm leading-relaxed text-inkMuted">
                      Tuliskan konteksnya di kolom pesan — semakin jelas kebutuhan Anda, semakin cepat jawaban yang tepat.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.1} className="self-start">
            <RequestForm defaultJenis="kontak" title="Kirim Pesan" ctaLabel="Kirim Pesan" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
