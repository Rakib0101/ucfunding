import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "Case Studies | United Capital Funding" };

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real businesses, real results. See how UC Funding has helped companies across the country."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Case Studies", href: "/services/case-studies" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          {[
            {
              company: "Multi-State Staffing Firm",
              industry: "Staffing",
              challenge: "A rapidly growing staffing firm with offices in 5 states was struggling to meet weekly payroll obligations. Their clients had Net-45 payment terms, creating a persistent cash flow gap that was limiting their ability to take on new contracts.",
              solution: "UC Funding established a $2.5M factoring facility that allowed the firm to submit invoices and receive funds within 48 hours. The flexible program allowed them to factor selectively based on their cash needs.",
              result: "Within 6 months, the staffing firm grew revenue by 40%, hired 12 new internal staff members, and expanded into 2 additional states — all without taking on any traditional bank debt.",
              color: "#1a3a6b",
            },
            {
              company: "Federal IT Contractor",
              industry: "Government / IT",
              challenge: "A mid-size IT services contractor with multiple federal agency contracts was experiencing payment cycles of 60–90 days. This was preventing them from investing in new equipment and bidding on larger contracts.",
              solution: "UC Funding implemented a B2G factoring program tailored to the company's government invoicing requirements. Our team handled the unique assignment notice requirements for government contracts.",
              result: "The contractor was able to purchase $400,000 in new equipment, hire additional certified staff, and was awarded two new federal contracts worth $3.2M combined — growth that would not have been possible without improved cash flow.",
              color: "#e8b84b",
            },
            {
              company: "Regional Security Guard Company",
              industry: "Security",
              challenge: "A security guard company with 200+ guards across 3 states was winning new contracts faster than they could fund them. Weekly guard payroll was a major constraint on growth.",
              solution: "UC Funding provided a factoring line that scaled alongside their growth. As the company won new contracts and invoice volume increased, funding availability increased automatically.",
              result: "The company grew from 200 guards to 350 guards over 12 months, expanded into 2 new states, and increased annual revenue by 65% — all while maintaining perfect payroll reliability for their guards.",
              color: "#1a3a6b",
            },
          ].map((cs) => (
            <div key={cs.company} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="h-2" style={{ backgroundColor: cs.color }} />
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-blue-900">{cs.company}</h2>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold">{cs.industry}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-4">
                  {[
                    { label: "Challenge", text: cs.challenge },
                    { label: "Solution", text: cs.solution },
                    { label: "Result", text: cs.result },
                  ].map((s) => (
                    <div key={s.label}>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{s.label}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="text-center pt-6">
            <Link href="/application" className="btn-primary">Start Your Success Story</Link>
          </div>
        </div>
      </section>
    </>
  );
}
