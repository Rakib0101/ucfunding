import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Invoice Factoring Services | United Capital Funding",
  description: "UC Funding provides invoice factoring and accounts receivable financing services for businesses across all industries.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Invoice Factoring Services"
        subtitle="Turn your outstanding invoices into immediate working capital. Fast, flexible, and bank-backed."
        breadcrumbs={[{ label: "Invoice Factoring Services", href: "/services" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="flex justify-center mb-4"><div className="w-14 h-1 bg-yellow-400" /></div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">How Invoice Factoring Works</h2>
            <p className="text-gray-600 leading-relaxed">
              Accounts receivable factoring is a simple, effective way to improve your cash flow without taking on debt. Here&apos;s the process from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              { step: "01", title: "Submit Your Invoices", desc: "Send us copies of your outstanding invoices from creditworthy clients. We review them quickly — usually the same day." },
              { step: "02", title: "Receive Fast Funding", desc: "Once approved, we advance you up to 90% of the invoice value — typically within 24 to 48 hours." },
              { step: "03", title: "We Collect from Your Client", desc: "Your client pays the invoice directly to UC Funding on their normal payment schedule (Net-30, Net-60, etc.)." },
              { step: "04", title: "Receive Your Remaining Balance", desc: "Once your client pays, we send you the remaining balance minus our small factoring fee. No surprises." },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="text-5xl font-black text-blue-100 shrink-0 leading-none">{s.step}</div>
                <div>
                  <h3 className="font-bold text-blue-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Benefits", desc: "See the full list of advantages that make UC Funding the smart choice.", href: "/services/benefits" },
              { title: "Industries We Serve", desc: "We specialize in several key industries with tailored factoring solutions.", href: "/services/industries" },
              { title: "Case Studies", desc: "See real examples of how businesses have grown with our factoring programs.", href: "/services/case-studies" },
              { title: "Client Testimonials", desc: "Read what our clients have to say about working with UC Funding.", href: "/services/testimonials" },
              { title: "FAQs", desc: "Get answers to the most common questions about invoice factoring.", href: "/services/faqs" },
              { title: "Apply Now", desc: "Ready to get started? Our application is quick, easy, and free.", href: "/application" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group p-6 bg-blue-900 text-white rounded-xl hover:bg-blue-800 transition-colors card-hover block">
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 text-yellow-400 font-semibold text-sm flex items-center gap-1">
                  Learn More <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
