import { useId } from 'react';
type Status = "Tersedia" | "Dalam pengembangan" | "Direncanakan" | "Ilustratif" | "Beta" | "Demo tersedia" | "Perlu konfirmasi" | "Belum terhubung";

const STYLES: Record<Status, string> = {
  'Demo tersedia': 'border-emerald-200 bg-emerald-50 text-emerald-700',
  'Perlu konfirmasi': 'border-amber-200 bg-amber-50 text-amber-700',
  'Belum terhubung': 'border-line bg-paper text-inkMuted',
  Tersedia: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Beta: "border-sky-200 bg-sky-50 text-sky-700",
  "Dalam pengembangan": "border-amber-200 bg-amber-50 text-amber-700",
  Direncanakan: "border-line bg-paper text-inkMuted",
  Ilustratif: "border-line bg-paper text-inkMuted",
};

export default function StatusChip({ status }: { status: Status }) {
  const id=useId();
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] ${STYLES[status]}`} data-testid={`status-chip-${id}`}>
      {status === "Tersedia" && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />}
      {status}
    </span>
  );
}
