import PageHero from "@/components/PageHero";

export const metadata = { title: "CCPA Disclosure | United Capital Funding" };

export default function CcpaPage() {
  return (
    <>
      <PageHero title="California Consumer Privacy Act Disclosure" breadcrumbs={[{ label: "CCPA Disclosure", href: "/ccpa" }]} />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed">
          <p>This disclosure applies to California residents as required by the California Consumer Privacy Act (CCPA). For questions about your rights under CCPA or to submit a data request, please <a href="/contact" className="text-blue-700 underline">contact us</a>.</p>
        </div>
      </section>
    </>
  );
}
