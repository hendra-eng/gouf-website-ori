import { LayoutDashboard, ArrowLeftRight, FileBarChart, Receipt, Wallet, Building2, Landmark, Layers, Target, ShieldCheck, LineChart, Sparkles, ClipboardCheck, Files, Users, ListTree, FolderOpen, Bot } from 'lucide-react';

export const MODULES = [
  { id:'overview', label:'Ringkasan keuangan', en:'Financial Overview', group:'GAMBARAN BESAR', icon:LayoutDashboard, desc:'Lihat pendapatan, laba, kas, dan posisi bisnis dalam satu pandangan.' },
  { id:'transactions', label:'Transaksi & jurnal', en:'Transactions', group:'KEUANGAN', icon:ArrowLeftRight, desc:'Catat transaksi contoh dan lihat angka laporan ikut berubah.' },
  { id:'statements', label:'Laporan keuangan', en:'Financial Statements', group:'KEUANGAN', icon:FileBarChart, desc:'Telusuri laba rugi, neraca, arus kas, dan perubahan ekuitas.' },
  { id:'receivables', label:'Piutang usaha', en:'Accounts Receivable', group:'KEUANGAN', icon:Receipt, desc:'Pantau tagihan pelanggan dan umur piutang contoh.' },
  { id:'payables', label:'Utang usaha', en:'Accounts Payable', group:'KEUANGAN', icon:Wallet, desc:'Lihat kewajiban kepada pemasok dan jadwal jatuh tempo.' },
  { id:'assets', label:'Aset', en:'Assets', group:'ASET & MODAL', icon:Building2, desc:'Kenali posisi kas, piutang, dan aset tetap perusahaan contoh.' },
  { id:'liabilities', label:'Liabilitas', en:'Liabilities', group:'ASET & MODAL', icon:Landmark, desc:'Pahami komposisi kewajiban usaha yang belum diselesaikan.' },
  { id:'equity', label:'Ekuitas', en:'Equity', group:'ASET & MODAL', icon:Layers, desc:'Lihat hubungan modal awal dan laba periode berjalan.' },
  { id:'budget', label:'Anggaran & proyeksi', en:'Budget & Forecast', group:'PERENCANAAN', icon:Target, desc:'Ubah asumsi pendapatan dan biaya untuk membandingkan skenario.' },
  { id:'tax', label:'Pajak & kepatuhan', en:'Tax & Compliance', group:'PERENCANAAN', icon:ShieldCheck, desc:'Pelajari contoh alur persiapan pajak, bukan pelaporan resmi.' },
  { id:'analytics', label:'Analisis keuangan', en:'Financial Analytics', group:'ANALISIS', icon:LineChart, desc:'Baca margin, rasio lancar, dan komposisi arus kas dari data demo.' },
  { id:'analyst', label:'AI Financial Analyst', en:'AI Financial Analyst', group:'ANALISIS', icon:Sparkles, desc:'Lihat contoh penjelasan berdasarkan data simulasi, tanpa AI sungguhan.' },
  { id:'agent', label:'Agent AI', en:'Agent AI', group:'ANALISIS', icon:Bot, desc:'Pratinjau alur dari berkas menuju pencatatan; tanpa unggah data asli.' },
  { id:'audit', label:'Audit & aktivitas', en:'Audit Center', group:'MANAJEMEN', icon:ClipboardCheck, desc:'Telusuri aktivitas perubahan transaksi selama sesi demo Anda.' },
  { id:'reports', label:'Katalog laporan', en:'Reports', group:'MANAJEMEN', icon:Files, desc:'Buka laporan demo yang sesuai dengan pertanyaan bisnis Anda.' },
  { id:'clients', label:'Klien', en:'Clients', group:'MANAJEMEN', icon:Users, desc:'Berpindah antara dua perusahaan fiktif yang datanya terpisah.' },
  { id:'accounts', label:'Daftar akun', en:'Chart of Accounts', group:'MANAJEMEN', icon:ListTree, desc:'Pahami pengelompokan akun yang membentuk laporan keuangan.' },
  { id:'documents', label:'Dokumen', en:'Documents', group:'MANAJEMEN', icon:FolderOpen, desc:'Buka contoh dokumen, tanpa mengirim berkas ke aplikasi asli.' },
];
export type ModuleId = typeof MODULES[number]['id'];
export const CLIENTS = [{id:'cahaya',name:'PT Cahaya Nusantara',short:'CN',industry:'Jasa profesional',factor:1},{id:'bumi',name:'PT Bumi Kreasi',short:'BK',industry:'Perdagangan',factor:0.65}];
export const MONTHS = ['Jan','Feb','Mar','Apr','Mei','Jun'];
export const PERIODS = [{id:'all',label:'Jan – Jun 2026',months:[1,2,3,4,5,6]},{id:'q1',label:'Kuartal 1 · 2026',months:[1,2,3]},{id:'q2',label:'Kuartal 2 · 2026',months:[4,5,6]},{id:'june',label:'Juni 2026',months:[6]}];
export interface DemoTransaction { id:string; client:string; date:string; description:string; kind:'income'|'expense'; category:string; amount:number; settled:boolean; }
export interface Activity {id:string; client:string; description:string; time:string;}
export interface DemoSession {version:1; sessionId:string; transactions:DemoTransaction[]; activities:Activity[];}
export function seedTransactions(): DemoTransaction[] {
 return CLIENTS.flatMap(c=>MONTHS.flatMap((_,i)=>{
  const month=String(i+1).padStart(2,'0');
  return [
   {description:'Pendapatan layanan konsultasi',kind:'income',category:'Pendapatan jasa',amount:(52+i*6)*1e6,settled:true,day:'05'},
   {description:'Invoice proyek mitra',kind:'income',category:'Pendapatan jasa',amount:(8+i)*1e6,settled:false,day:'18'},
   {description:'Gaji & operasional tim',kind:'expense',category:'Gaji & operasional',amount:(24+i*2)*1e6,settled:true,day:'25'},
   {description:'Sewa & perangkat lunak',kind:'expense',category:'Sewa & perangkat lunak',amount:9e6,settled:true,day:'03'},
   {description:'Tagihan pemasok layanan',kind:'expense',category:'Beban pemasok',amount:(3+i)*1e6,settled:false,day:'20'},
  ].map((r,j)=>({id:`${c.id}-${i}-${j}`,client:c.id,date:`2026-${month}-${r.day}`,description:r.description,kind:r.kind as 'income'|'expense',category:r.category,amount:Math.round(r.amount*c.factor),settled:r.settled}));
 }));
}
export function newSession():DemoSession {return {version:1,sessionId:crypto.randomUUID(),transactions:seedTransactions(),activities:[]};}
export const money=(n:number)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
export const compact=(n:number)=>`${new Intl.NumberFormat('id-ID',{maximumFractionDigits:1}).format(n/1e6)} jt`;
export function summarize(rows:DemoTransaction[],factor=1) {
 const income=rows.filter(t=>t.kind==='income').reduce((a,t)=>a+t.amount,0);
 const expense=rows.filter(t=>t.kind==='expense').reduce((a,t)=>a+t.amount,0);
 const ar=rows.filter(t=>t.kind==='income'&&!t.settled).reduce((a,t)=>a+t.amount,0);
 const ap=rows.filter(t=>t.kind==='expense'&&!t.settled).reduce((a,t)=>a+t.amount,0);
 const opening=80e6*factor, fixed=100e6*factor, profit=income-expense;
 const cash=opening+income-ar-expense+ap;
 return {income,expense,ar,ap,profit,cash,fixed,opening,assets:cash+ar+fixed,equity:180e6*factor+profit,margin:income?profit/income*100:0};
}
export function exportCsv(filename:string,headers:string[],rows:(string|number)[][]) {
 const safe=(value:string|number)=>{const s=String(value);return '"'+(/^[=+@\-]/.test(s)?"'"+s:s).replace(/"/g,'""')+'"';};
 const data='\uFEFF'+[headers,...rows].map(r=>r.map(safe).join(',')).join('\r\n');
 const url=URL.createObjectURL(new Blob([data],{type:'text/csv;charset=utf-8;'}));
 const a=document.createElement('a');a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
}
