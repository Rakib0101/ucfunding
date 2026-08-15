import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Benefits of Invoice Factoring | United Capital Funding",
};

export default function BenefitsPage() {
  return (
    <>
      <PageHero
        title="Benefits of Choosing UC Funding"
        subtitle="Discover why thousands of businesses trust United Capital Funding for their working capital needs."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Benefits", href: "/services/benefits" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Bank Owned — Lower Fees", desc: "As a wholly owned subsidiary of Gulf Coast Bank & Trust Company, we have a lower cost of capital than independent factors. We pass those savings directly to our clients in the form of lower factoring rates.", icon: "🏦" },
              { title: "No Debt on Your Balance Sheet", desc: "Factoring is the sale of an asset, not a loan. Your balance sheet stays clean, which is important when seeking additional financing or lines of credit.", icon: "📊" },
              { title: "Funding in 24–48 Hours", desc: "Once your account is established and invoices are verified, you receive your funds within one to two business days — not weeks or months.", icon: "⚡" },
              { title: "Nationwide Availability", desc: "No matter where your business is located in the United States, UC Funding can provide factoring services. We are truly a national solution.", icon: "🗺️" },
              { title: "Approval Based on Client Credit", desc: "We evaluate the creditworthiness of your clients, not your business history. This opens the door for newer or credit-challenged businesses to qualify.", icon: "✅" },
              { title: "No Long-Term Contracts", desc: "We offer flexible programs with no long-term contracts. Use our factoring services as much or as little as you need.", icon: "🔓" },
              { title: "Collections Support", desc: "We handle the collection process professionally on your behalf, freeing you up to focus on running and growing your business.", icon: "🤝" },
              { title: "Credit Checking Services", desc: "Before you extend credit to a new client, we can help you evaluate their creditworthiness — protecting you from slow or non-paying customers.", icon: "🔍" },
            ].map((b) => (
              <div key={b.title} className="flex gap-5 p-6 border border-gray-100 rounded-xl card-hover">
                <div className="text-4xl shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-blue-900 text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/application" className="btn-primary">Apply Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
