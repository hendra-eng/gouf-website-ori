import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/CtaBanner';
import { FeatureCatalog } from '@/components/FeatureCatalog';

export default function Fitur() {
 return <div data-testid="page-fitur"><Seo title="Fitur & Modul Keuangan — zafeb" description="Kenali 18 modul zafeb: pembukuan, laporan, klien, anggaran, analisis, dan dokumen melalui demo terpandu dengan data fiktif."/><PageHero eyebrow="KEBUTUHAN BISNIS, ALUR YANG JELAS" title="Kenali alat di balik keputusan keuangan Anda." sub="Pahami laba dan kas, rapikan catatan transaksi, lalu susun rencana anggaran. Pilih kebutuhan yang paling dekat dengan pekerjaan Anda." testId="fitur-hero"><div className="flex flex-wrap gap-3"><Link to="/coba-demo" className="btn-primary" data-testid="fitur-try-demo">Coba Demo Terpandu <ArrowRight size={16}/></Link><Link to="/demo" className="btn-light" data-testid="fitur-request-demo">Minta Demo Personal</Link></div></PageHero><FeatureCatalog/><CtaBanner title="Cocokkan dengan kebutuhan bisnis Anda." sub="Ceritakan persoalan pencatatan, laporan, dan rencana bisnis yang ingin Anda selesaikan."/></div>;
}
