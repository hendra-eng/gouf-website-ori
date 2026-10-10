import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, RotateCcw, MailCheck } from "lucide-react";
import { submitRequest, ApiError } from "@/lib/api";
import { PACKAGES } from "@/content/pricing";

interface Props {
  defaultJenis?: "demo" | "paket" | "kontak";
  defaultPaket?: string;
  title?: string;
  ctaLabel?: string;
}

const INITIAL = {
  nama: "",
  email: "",
  perusahaan: "",
  jabatan: "",
  telepon: "",
  paket_minat: "",
  pesan: "",
};

export default function RequestForm({ defaultJenis = "demo", defaultPaket = "", title, ctaLabel }: Props) {
  const [jenis, setJenis] = useState(defaultJenis);
  const [fields, setFields] = useState({ ...INITIAL, paket_minat: defaultPaket });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [banner, setBanner] = useState<{ type: "error" | "info"; text: string } | null>(null);
  const [sending, setSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [success, setSuccess] = useState<{ referensi: string; dedup: boolean; emailKonfirmasi: boolean; email: string } | null>(null);

  const set = (key: keyof typeof INITIAL) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const clientValidate = (): boolean => {
    const errs: Record<string, string> = {};
    if (fields.nama.trim().length < 2) errs.nama = "Nama wajib diisi (minimal 2 karakter).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errs.email = "Masukkan alamat email yang valid.";
    if (fields.perusahaan.trim().length < 2) errs.perusahaan = "Nama perusahaan wajib diisi.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBanner(null);
    if (!clientValidate()) return;
    setSending(true);
    try {
      const res = await submitRequest({
        jenis,
        nama: fields.nama,
        email: fields.email,
        perusahaan: fields.perusahaan,
        jabatan: fields.jabatan || undefined,
        telepon: fields.telepon || undefined,
        paket_minat: fields.paket_minat || undefined,
        pesan: fields.pesan || undefined,
        client_request_id: crypto.randomUUID(),
        honeypot,
      });
      setSuccess({ referensi: res.referensi, dedup: res.dedup, emailKonfirmasi: !!res.email_konfirmasi, email: fields.email.trim() });
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.fields) setErrors(err.fields);
        setBanner({ type: "error", text: err.message });
      } else {
        setBanner({ type: "error", text: "Terjadi kesalahan tak terduga. Isian Anda tetap tersimpan - coba lagi." });
      }
    } finally {
      setSending(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-mint/40 bg-mint/10 p-8 text-center"
        data-testid="request-form-success"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald/15">
          <CheckCircle2 size={28} className="text-emerald" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Permintaan Anda tersimpan</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-inkMuted">
          Terima kasih, {fields.nama.split(" ")[0] || "teman"}! Nomor referensi permintaan Anda:
        </p>
        <p className="nums mx-auto mt-3 inline-block rounded-full border border-mint/40 bg-white px-5 py-2 font-mono text-sm font-bold text-brand" data-testid="request-form-reference">
          {success.referensi}
        </p>
        {success.dedup && (
          <p className="mt-3 text-xs text-inkMuted">Kami menerima permintaan yang sama sebelumnya - tidak ada data ganda yang kami simpan.</p>
        )}
        {success.emailKonfirmasi ? (
          <div className="mx-auto mt-5 flex max-w-md items-start gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-left" data-testid="request-form-email-notice">
            <MailCheck size={18} className="mt-0.5 shrink-0 text-brand" />
            <p className="text-sm leading-relaxed text-inkMuted">
              Email konfirmasi berisi nomor referensi dan langkah berikutnya sedang dikirim ke <span className="font-bold text-ink">{success.email}</span>. Periksa juga folder spam/promosi bila belum muncul dalam beberapa menit.
            </p>
          </div>
        ) : (
          <p className="mt-4 text-sm text-inkMuted">
            Permintaan tersimpan untuk ditindaklanjuti tim. Simpan nomor referensi ini; email konfirmasi otomatis belum diaktifkan.
          </p>
        )}
        <button
          onClick={() => {
            setSuccess(null);
            setFields({ ...INITIAL });
            setErrors({});
          }}
          className="btn-light mt-6"
          data-testid="request-form-reset-button"
        >
          <RotateCcw size={14} /> Kirim permintaan lain
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8" data-testid="request-form">
      <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{title || "Minta Demo"}</h3>
      <p className="mt-1 text-sm text-inkMuted">
        Cukup informasi kontak - kami tidak meminta password aplikasi maupun data keuangan asli.
      </p>

      <AnimatePresence>
        {banner && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-4 flex items-start gap-2 rounded-xl border p-3 text-sm font-medium ${banner.type === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-amber-200 bg-amber-50 text-amber-700"}`}
            role="alert"
            data-testid="request-form-banner"
          >
            <AlertCircle size={16} className="mt-0.5 shrink-0" /> {banner.text}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="rf-nama" className="input-label">Nama lengkap *</label>
          <input id="rf-nama" className="input-field" value={fields.nama} onChange={set("nama")} autoComplete="name" data-testid="request-form-nama-input" />
          {errors.nama && <p className="mt-1 text-xs font-medium text-red-600" data-testid="request-form-error-nama">{errors.nama}</p>}
        </div>
        <div>
          <label htmlFor="rf-email" className="input-label">Email kerja *</label>
          <input id="rf-email" type="email" className="input-field" value={fields.email} onChange={set("email")} autoComplete="email" data-testid="request-form-email-input" />
          {errors.email && <p className="mt-1 text-xs font-medium text-red-600" data-testid="request-form-error-email">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="rf-perusahaan" className="input-label">Perusahaan *</label>
          <input id="rf-perusahaan" className="input-field" value={fields.perusahaan} onChange={set("perusahaan")} autoComplete="organization" data-testid="request-form-perusahaan-input" />
          {errors.perusahaan && <p className="mt-1 text-xs font-medium text-red-600" data-testid="request-form-error-perusahaan">{errors.perusahaan}</p>}
        </div>
        <div>
          <label htmlFor="rf-jabatan" className="input-label">Jabatan (opsional)</label>
          <input id="rf-jabatan" className="input-field" value={fields.jabatan} onChange={set("jabatan")} data-testid="request-form-jabatan-input" />
        </div>
        <div>
          <label htmlFor="rf-telepon" className="input-label">Telepon (opsional)</label>
          <input id="rf-telepon" type="tel" className="input-field" value={fields.telepon} onChange={set("telepon")} autoComplete="tel" data-testid="request-form-telepon-input" />
        </div>
        <div>
          <label htmlFor="rf-jenis" className="input-label">Jenis permintaan</label>
          <select id="rf-jenis" className="input-field" value={jenis} onChange={(e) => setJenis(e.target.value as typeof jenis)} data-testid="request-form-jenis-select">
            <option value="demo">Permintaan demo</option>
            <option value="paket">Minat berlangganan</option>
            <option value="kontak">Pertanyaan umum</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="rf-paket" className="input-label">Paket yang diminati (opsional)</label>
          <select id="rf-paket" className="input-field" value={fields.paket_minat} onChange={set("paket_minat")} data-testid="request-form-paket-select">
            <option value="">Belum menentukan</option>
            {PACKAGES.map((p) => (
              <option key={p.id} value={p.id}>Paket {p.name}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="rf-pesan" className="input-label">Ceritakan kebutuhan Anda (opsional)</label>
          <textarea id="rf-pesan" rows={4} className="input-field resize-none" value={fields.pesan} onChange={set("pesan")} placeholder="Contoh: kami mengelola pembukuan 3 cabang dengan spreadsheet..." data-testid="request-form-pesan-textarea" />
        </div>
      </div>

      {/* honeypot - hidden from humans, filled by naive bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <button type="submit" disabled={sending} className="btn-primary mt-6 w-full disabled:opacity-60" data-testid="request-form-submit-button">
        {sending ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Mengirim...
          </>
        ) : (
          <>
            {ctaLabel || "Kirim Permintaan"} <ArrowRight size={16} />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-[11px] leading-relaxed text-inkMuted">
        Dengan mengirim, Anda setuju data kontak diproses sesuai Kebijakan Privasi untuk keperluan menjawab permintaan ini.
      </p>
    </form>
  );
}
