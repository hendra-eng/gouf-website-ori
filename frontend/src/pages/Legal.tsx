import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { SITE } from "@/content/site";

interface Section {
  h: string;
  p: string[];
}

const PRIVASI: Section[] = [
  {
    h: "1. Tentang kebijakan ini",
    p: [
      `Kebijakan privasi ini menjelaskan bagaimana situs pemasaran ${SITE.brand} yang dikelola oleh ${SITE.company} (\u201ckami\u201d) menangani informasi yang Anda kirimkan melalui formulir permintaan demo, minat paket, dan kontak.`,
      "Dokumen ini masih berupa draf. Bagian bertanda kurung siku akan dilengkapi setelah detail resmi perusahaan ditetapkan.",
    ],
  },
  {
    h: "2. Data yang kami kumpulkan",
    p: [
      "Hanya data yang Anda isi sendiri pada formulir: nama, alamat email, nama perusahaan, serta kolom opsional (jabatan, nomor telepon, paket yang diminati, dan isi pesan).",
      "Perubahan transaksi demo disimpan di sessionStorage browser, bukan basis data aplikasi. Reset mengembalikannya ke contoh awal; tidak ada panggilan AI nyata dari demo.",
      "Kami juga menyimpan waktu pengiriman dan nomor referensi permintaan untuk keperluan tindak lanjut.",
    ],
  },
  {
    h: "3. Yang TIDAK kami kumpulkan melalui situs ini",
    p: [
      "Situs ini tidak meminta dan tidak menerima password aplikasi, kredensial perbankan, maupun data keuangan asli Anda.",
      "Seluruh angka pada demo interaktif adalah data fiktif berlabel demo dan tidak berasal dari pengguna mana pun.",
    ],
  },
  {
    h: "4. Tujuan penggunaan",
    p: [
      "Data yang Anda kirim kami gunakan semata untuk menjawab permintaan Anda: menjadwalkan demo, menyusun penawaran, atau menjawab pertanyaan.",
      "Kami tidak menjual atau membagikan data Anda kepada pihak ketiga untuk tujuan pemasaran mereka.",
    ],
  },
  {
    h: "5. Penyimpanan dan keamanan",
    p: [
      "Data disimpan pada basis data yang dikelola oleh kami. Formulir dilindungi pembatasan laju permintaan dan pencegahan pengiriman ganda.",
      "Detail teknis penyimpanan ([penyedia infrastruktur, wilayah penyimpanan]) akan dilengkapi saat finalisasi.",
    ],
  },
  {
    h: "6. Hak Anda",
    p: [
      "Anda dapat meminta penjelasan, perbaikan, atau penghapusan data yang Anda kirimkan dengan menghubungi kami melalui [email kontak resmi].",
    ],
  },
  {
    h: "7. Kontak",
    p: ["Pertanyaan tentang kebijakan ini dapat dikirim ke [email kontak resmi]."],
  },
];

const SYARAT: Section[] = [
  {
    h: "1. Tentang syarat ini",
    p: [
      `Syarat layanan ini mengatur penggunaan situs pemasaran ${SITE.brand} milik ${SITE.company}. Dengan menggunakan situs ini, Anda menyetujuinya.`,
      "Dokumen ini masih berupa draf. Bagian bertanda kurung siku akan dilengkapi setelah detail resmi perusahaan ditetapkan.",
    ],
  },
  {
    h: "2. Sifat situs ini",
    p: [
      "Situs ini adalah kanal informasi dan permintaan demo. Penggunaan situs ini tidak membuat perjanjian langganan; langganan hanya lahir dari perjanjian terpisah yang disepakati dengan kami.",
      "Mengirim formulir berarti meminta kami menghubungi Anda — bukan pembayaran, bukan pembuatan akun, dan tidak menimbulkan biaya.",
    ],
  },
  {
    h: "3. Data demo",
    p: [
      "Seluruh angka, grafik, dan transaksi pada demo interaktif adalah data fiktif dalam Rupiah yang diberi label demo, disediakan untuk menggambarkan cara kerja platform.",
      "Anda tidak diizinkan menjadikan data demo sebagai dasar keputusan keuangan nyata.",
    ],
  },
  {
    h: "4. Penggunaan yang wajar",
    p: [
      "Anda tidak diperkenankan mengganggu ketersediaan situs, mengirimkan permintaan otomatis dalam jumlah besar, atau mengirimkan informasi pihak ketiga tanpa izinnya (termasuk password dan data keuangan asli).",
    ],
  },
  {
    h: "5. Hak kekayaan intelektual",
    p: [`Nama dan logo ${SITE.brand} serta seluruh isi situs adalah milik ${SITE.company} atau pemberi lisensinya, sepanjang tidak dinyatakan lain.`],
  },
  {
    h: "6. Perubahan dan hukum yang berlaku",
    p: [
      "Kami dapat memperbarui syarat ini dari waktu ke waktu. Versi terbaru selalu tersedia di halaman ini.",
      "Syarat ini tunduk pada hukum yang berlaku di [yurisdiksi].",
    ],
  },
];

export default function Legal({ kind }: { kind: "privasi" | "syarat" }) {
  const isPrivasi = kind === "privasi";
  const sections = isPrivasi ? PRIVASI : SYARAT;
  return (
    <div data-testid={isPrivasi ? "page-privasi" : "page-syarat"}>
      <Seo
        title={isPrivasi ? "Kebijakan Privasi — zafeb" : "Syarat Layanan — zafeb"}
        description={isPrivasi ? "Bagaimana situs pemasaran zafeb menangani data yang Anda kirimkan." : "Ketentuan penggunaan situs pemasaran zafeb."}
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl" data-testid="legal-title">
          {isPrivasi ? "Kebijakan Privasi" : "Syarat Layanan"}
        </h1>
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs font-medium leading-relaxed text-amber-700" data-testid="legal-draft-note">
          Draf versi awal — ditinjau bersama penasihat hukum sebelum dipublikasikan final. Isi bertanda [kurung siku] adalah placeholder yang harus dilengkapi.
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.h} delay={Math.min(i * 0.04, 0.2)}>
              <section data-testid={`legal-section-${i}`}>
                <h2 className="font-display text-xl font-bold text-ink">{s.h}</h2>
                {s.p.map((p, j) => (
                  <p key={j} className="mt-3 text-sm leading-relaxed text-inkMuted">{p}</p>
                ))}
              </section>
            </Reveal>
          ))}
        </div>
        <p className="mt-12 border-t border-line pt-6 text-xs text-inkMuted">
          Terakhir diperbarui: draf awal. {SITE.company}.
        </p>
      </section>
    </div>
  );
}
