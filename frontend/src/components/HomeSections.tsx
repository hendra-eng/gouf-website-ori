import { useState } from 'react';
import { Link } from "react-router-dom";
import { BUSINESS_PRIORITIES, CUSTOMER_ROLES } from '@/content/customer';
import { ArrowRight, Check, ShieldCheck, Lock, DatabaseBackup, KeyRound } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ARTICLES } from "@/content/insight";
import { ArticleCard } from "@/pages/Insight";

export function StatsStrip() {
 return <section className="customer-priorities" data-testid="home-priorities"><div className="customer-container"><div className="customer-section-heading"><span className="eyebrow">JAWAB PERTANYAAN YANG PENTING</span><h2>Keuangan yang dipahami.<br/>Usaha yang lebih terarah.</h2><p>zafeb menghubungkan pencatatan, laporan, dan perencanaan agar pemilik bisnis dan tim keuangan dapat melihat persoalan yang sama dengan lebih jelas.</p></div><div className="priority-grid">{BUSINESS_PRIORITIES.map(p=><article className="priority-card" key={p.id} data-testid={`customer-priority-${p.id}`}><span className="priority-number">{p.number} /</span><h3>{p.title}</h3><b>{p.question}</b><p>{p.description}</p><Link to={p.to} data-testid={`priority-link-${p.id}`}>{p.action}<ArrowRight size={16}/></Link></article>)}</div></div></section>;
}

export function CompareTeaser() {
 const [view,setView]=useState<'profit'|'cash'>('profit');
 const cash=view==='cash';
 return <section className="customer-cash" data-testid="home-cash-education"><div className="customer-container customer-two-column"><div className="customer-section-heading"><span className="eyebrow">PAHAMI SEBELUM MEMUTUSKAN</span><h2>Penjualan naik.<br/>Mengapa kas masih terasa sempit?</h2><p>Laba mencatat hasil usaha. Kas menunjukkan uang yang benar-benar masuk dan keluar. Keduanya bisa berbeda ketika pelanggan belum membayar atau tagihan jatuh tempo lebih dulu.</p><ul className="customer-takeaways"><li><Check size={16}/><span><b>Jangan hanya melihat omzet.</b> Bandingkan dengan biaya untuk memahami laba.</span></li><li><Check size={16}/><span><b>Telusuri yang belum tertagih.</b> Piutang belum bisa dipakai membayar kewajiban.</span></li><li><Check size={16}/><span><b>Perhatikan waktunya.</b> Cocokkan penerimaan dengan jadwal pengeluaran.</span></li></ul><Link className="customer-text-link" to="/fitur/arus-kas" data-testid="cash-education-detail">Pelajari laba dan arus kas <ArrowRight size={16}/></Link></div><div className="cash-example" data-testid="cash-example"><div className="cash-example-header"><span>CONTOH SATU BULAN</span><span>Ilustrasi edukatif</span></div><h3>Penjualan Rp50 juta.<br/>Tidak semuanya sudah dibayar.</h3><div className="cash-example-tabs" role="tablist" aria-label="Bandingkan laba dan kas"><button role="tab" aria-selected={!cash} data-testid="cash-example-profit-tab" onClick={()=>setView('profit')} className={!cash?'active':''}>Sudut pandang laba</button><button role="tab" aria-selected={cash} data-testid="cash-example-cash-tab" onClick={()=>setView('cash')} className={cash?'active':''}>Sudut pandang kas</button></div><div className="cash-example-rows" role="tabpanel" aria-label={cash?'Perhitungan kas':'Perhitungan laba'} data-testid="cash-example-calculation"><div><span>{cash?'Uang pelanggan yang diterima':'Penjualan yang diakui'}</span><b>{cash?'Rp30 juta':'Rp50 juta'}</b></div><div><span>{cash?'Beban yang dibayar':'Beban periode ini'}</span><b>− Rp35 juta</b></div><div className={`cash-example-result ${cash?'is-cash':''}`}><span>{cash?'Perubahan kas':'Laba sebelum pajak'}</span><strong>{cash?'− Rp5 juta':'+ Rp15 juta'}</strong></div></div><p className="cash-example-explanation" data-testid="cash-example-explanation">{cash?'Usaha masih membukukan laba, tetapi kas berkurang Rp5 juta. Dari kas awal Rp20 juta, sisa kas menjadi Rp15 juta. Piutang Rp20 juta perlu diperhatikan.':'Selisih penjualan Rp50 juta dan beban Rp35 juta menghasilkan laba Rp15 juta. Namun, Rp20 juta dari penjualan masih berupa piutang.'}</p><p className="cash-example-note">Contoh sederhana dengan beban dibayar seluruhnya; tanpa pajak, penyusutan, investasi, atau pendanaan. Bukan data pelanggan.</p></div></div></section>;
}

export function PlanningSection() {
 return <section className="customer-planning" data-testid="home-planning"><div className="customer-container customer-two-column"><div className="customer-section-heading"><span className="eyebrow">ANGGARAN & RENCANA USAHA</span><h2>Sebelum menambah biaya,<br/>lihat ruang geraknya.</h2><p>Rencana bisnis tidak berhenti pada target penjualan. Mulai dari hasil periode sebelumnya, susun asumsi pendapatan dan biaya, lalu periksa pengaruhnya terhadap laba.</p><Link className="customer-text-link" to="/fitur/anggaran-proyeksi" data-testid="home-budget-detail">Kenali perencanaan anggaran <ArrowRight size={16}/></Link></div><div className="planning-questions">{[['01','Jika pendapatan turun?','Uji apakah rencana biaya masih masuk akal saat penjualan berada di bawah target.'],['02','Jika ada biaya tambahan?','Lihat perubahan laba sebelum menambah anggota tim, sewa, atau pengeluaran rutin.'],['03','Jika peluang tumbuh terbuka?','Bandingkan skenario optimistis dengan kondisi dasar, lalu periksa kebutuhan kas secara terpisah.']].map(([n,t,d])=><article key={n} data-testid={`planning-question-${n}`}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}<Link to="/coba-demo?modul=budget" data-testid="home-budget-demo">Coba ubah asumsi dalam demo <ArrowRight size={16}/></Link></div></div></section>;
}

export function SecurityStrip() {
  const PILLARS = [
    { icon: Lock, t: "Coba alur tanpa menyerahkan data bisnis" },
    { icon: DatabaseBackup, t: "Siapkan kebutuhan laporan dan migrasi" },
    { icon: KeyRound, t: "Bahas pembagian akses bersama tim" },
    { icon: ShieldCheck, t: "Pahami kebijakan data sebelum memilih" },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="ledger-bg-dark mx-auto grid max-w-7xl gap-10 rounded-3xl bg-brand-deep px-8 py-12 text-white lg:grid-cols-12 lg:px-12 lg:py-16" data-testid="home-security">
          <div className="lg:col-span-5">
            <span className="eyebrow !text-mint">Keamanan & kepercayaan</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">Pilih dengan tenang.<br/>Ketahui yang perlu ditanyakan.</h2>
            <Link to="/keamanan" className="btn-mint mt-8" data-testid="home-security-cta">Praktik & pertanyaan keamanan <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {PILLARS.map((p) => (
              <div key={p.t} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-mint"><p.icon size={18} /></span>
                <p className="font-bold">{p.t}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function CustomerRoles() {
 return <section className="customer-audiences" data-testid="home-audiences"><div className="customer-container"><div className="customer-section-heading"><span className="eyebrow">SATU ARAH, DUA KEBUTUHAN</span><h2>Pemilik usaha butuh gambaran.<br/>Tim keuangan butuh detail.</h2><p>Hubungkan keputusan bisnis dengan pekerjaan pencatatan melalui rutinitas yang saling melengkapi.</p></div><div className="customer-role-grid">{CUSTOMER_ROLES.map((r,i)=><article key={r.id} className={`customer-role ${i===0?'owner':'finance'}`} data-testid={`customer-role-${r.id}`}><span className="eyebrow">{r.label}</span><h3>{r.title}</h3><p>{r.intro}</p><div className="role-routine"><b>{r.routine}</b><ul>{r.points.map((point,j)=><li key={point}><span>0{j+1}</span>{point}</li>)}</ul></div><p className="role-outcome">{r.outcome}</p><Link to={r.to} data-testid={`customer-role-link-${r.id}`}>Lihat pendekatan untuk Anda <ArrowRight size={16}/></Link></article>)}</div></div></section>;
}

export function InsightTeaser() {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Insight" title="Bacaan singkat untuk keputusan yang lebih tenang" />
          <Reveal>
            <Link to="/insight" className="btn-light" data-testid="home-insight-cta">Semua artikel <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.06}><ArticleCard a={a} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
