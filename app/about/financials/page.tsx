import PageHero from "@/components/PageHero";
export const metadata = { title: "Our Financials | United Capital Funding" };
export default function FinancialsPage() {
  return (
    <>
      <PageHero title="Our Financials" subtitle="As a subsidiary of Gulf Coast Bank & Trust Company, UC Funding operates with the financial strength and transparency of an FDIC-insured bank." breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Our Financials", href: "/about/financials" }]} />
      <section className="py-20 bg-white max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed">
        <p>United Capital Funding is a wholly owned subsidiary of Gulf Coast Bank & Trust Company. Our parent company is an FDIC-insured institution, which means we operate under the highest regulatory standards in the financial industry. Contact us for more information about our financial strength and stability.</p>
      </section>
    </>
  );
}
