import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import type { DemoTx } from "@/content/demoData";
import { formatIDR } from "@/lib/format";
import { DEMO_TRANSACTIONS } from "@/content/demoData";

export function downloadDemoCsv() {
  const header = "# zafeb - contoh berkas ekspor (DATA DEMO, angka fiktif)\n";
  const rows = DEMO_TRANSACTIONS.map((t) => [t.id, t.tanggal, t.deskripsi, t.kategori, t.tipe, t.jumlah, t.metode].join(";"));
  const csv = header + "id;tanggal;deskripsi;kategori;tipe;jumlah;metode\n" + rows.join("\n") + "\n";
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "zafeb-data-demo.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function TxDrawer({ tx, onClose }: { tx: DemoTx | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!tx) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tx, onClose]);

  return (
    <AnimatePresence>
      {tx && (
        <motion.div className="fixed inset-0 z-[80]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-brand-deep/50 backdrop-blur-sm" onClick={onClose} data-testid="demo-drawer-backdrop" />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Detail transaksi"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            data-testid="demo-tx-drawer"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <p className="font-display text-base font-bold text-ink">Detail Transaksi</p>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Tutup detail"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:border-brand"
                data-testid="demo-drawer-close-button"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6" data-testid="demo-drawer-body">
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${tx.tipe === "masuk" ? "bg-mint/15 text-brand" : "bg-amber-50 text-amber-600"}`}>
                {tx.tipe === "masuk" ? <ArrowDownLeft size={13} /> : <ArrowUpRight size={13} />}
                Dana {tx.tipe}
              </div>
              <p className="nums mt-4 font-mono text-3xl font-bold tracking-tight text-ink">
                {tx.tipe === "masuk" ? "+" : "-"} {formatIDR(tx.jumlah)}
              </p>
              <dl className="mt-6 space-y-4 text-sm">
                {[
                  ["Deskripsi", tx.deskripsi],
                  ["Tanggal", tx.tanggal],
                  ["Kategori", tx.kategori],
                  ["Metode", tx.metode],
                  ["Catatan", tx.catatan],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-0.5 border-b border-dashed border-line pb-3">
                    <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-inkMuted">{k}</dt>
                    <dd className="font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <button
                onClick={downloadDemoCsv}
                className="btn-light mt-6 w-full"
                data-testid="demo-drawer-export-button"
              >
                <Download size={15} /> Unduh contoh CSV (data demo)
              </button>
              <p className="mt-3 text-center text-[11px] text-inkMuted">
                Berkas berisi contoh data fiktif — bukan data keuangan asli.
              </p>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
