import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "About Us | United Capital Funding",
  description: "Learn about United Capital Funding — a wholly owned subsidiary of Gulf Coast Bank & Trust Company.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About United Capital Funding"
        subtitle="We are a bank-owned invoice factoring company dedicated to giving businesses the working capital they need to grow."
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <div className="w-14 h-1 bg-yellow-400 mb-4" />
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                United Capital Funding (UC Funding) is a wholly owned subsidiary of Gulf Coast Bank &amp; Trust Company, an FDIC-insured bank headquartered in New Orleans, Louisiana. This unique bank ownership model allows us to offer invoice factoring services that are simply not available from independent factors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since our founding, we have helped thousands of businesses across all 50 states unlock the cash that is tied up in their outstanding invoices. Our clients range from small startups to large enterprises, and we serve a wide variety of industries including staffing, government contracting, manufacturing, IT, and more.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike traditional lenders, we base our approval decisions on the creditworthiness of your clients — not your business. This means we can help businesses that may not qualify for traditional bank loans.
              </p>
              <div className="flex gap-4">
                <Link href="/application" className="btn-primary">Apply Now</Link>
                <Link href="/about/team" className="btn-outline">Meet Our Team</Link>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-10">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Why UC Funding?</h3>
              <ul className="space-y-4">
                {[
                  { title: "Bank-Owned Stability", desc: "We are backed by an FDIC-insured bank — providing unmatched financial stability and competitive rates." },
                  { title: "No Outside Capital", desc: "We don't rely on outside investors, meaning lower costs and better service for you." },
                  { title: "Nationwide Service", desc: "We serve businesses across all 50 states with the same high level of service." },
                  { title: "Industry Expertise", desc: "Our specialists have deep experience in the industries we serve." },
                  { title: "Fast Funding", desc: "Receive working capital in as little as 24–48 hours after approval." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-900">{item.title}: </span>
                      <span className="text-gray-700 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "25+", label: "Years in Business" },
              { number: "50", label: "States Served" },
              { number: "1000s", label: "Clients Funded" },
              { number: "$1B+", label: "Invoices Factored" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl font-black text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
