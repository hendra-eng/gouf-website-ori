import Seo from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import PricingTable from "@/components/PricingTable";
import CtaBanner from "@/components/CtaBanner";

export default function Harga() {
  return (
    <div data-testid="page-harga">
      <Seo
        title="Harga & Paket — zafeb"
        description="Perbandingan paket zafeb. Harga belum ditetapkan — hubungi tim untuk penawaran sesuai kebutuhan bisnis Anda."
      />
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <SectionHeading
          eyebrow="Harga"
          title="Pilih bentuk paketnya, angkanya menyusul bersama tim"
          sub="Kami tidak menampilkan angka yang belum final. Setiap paket dibandingkan dari kemampuannya, lalu harga disusun sesuai kebutuhan Anda."
        />
        <div className="mt-12">
          <PricingTable />
        </div>
      </section>
      <div className="py-16 lg:py-20">
        <CtaBanner title="Masih ragu memilih paket?" sub="Sebutkan kebutuhan Anda di formulir demo — tim kami membantu memilihkan." />
      </div>
    </div>
  );
}
