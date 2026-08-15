import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Client Testimonials | United Capital Funding",
  description: "Read what our clients say about UC Funding's invoice factoring services.",
};

const testimonials = [
  {
    quote: "UC Funding has been a game-changer for our staffing company. We used to struggle with payroll gaps between billing our clients and receiving payment. Now that problem is completely gone. We can take on bigger contracts because we know we'll have the cash to support them.",
    name: "Sarah M.",
    title: "CEO",
    company: "Staffing Solutions Inc.",
    industry: "Staffing",
  },
  {
    quote: "Being a government contractor means long payment cycles — sometimes 60 to 90 days. UC Funding understood our industry immediately and got us funded within 48 hours of submitting our first invoice. The team is professional and responsive every step of the way.",
    name: "James T.",
    title: "President",
    company: "Federal Services Group",
    industry: "Government",
  },
  {
    quote: "The fact that they are bank-owned gives me peace of mind. The rates are transparent and the team is incredibly responsive. I recommend them to every business owner I know who is struggling with cash flow.",
    name: "Maria R.",
    title: "Owner",
    company: "Tech Staffing Partners",
    industry: "IT Staffing",
  },
  {
    quote: "We tried other factoring companies before UC Funding and none of them came close to the service level we get here. They genuinely care about our success, not just our invoices. It feels like a real partnership.",
    name: "David K.",
    title: "CFO",
    company: "Midwest Manufacturing Co.",
    industry: "Manufacturing",
  },
  {
    quote: "Our security guard company was growing fast but we couldn't keep up with payroll. UC Funding solved that completely. We've been with them for three years now and have no intention of going anywhere else.",
    name: "Anthony L.",
    title: "Director",
    company: "Shield Security Services",
    industry: "Security",
  },
  {
    quote: "Applying was incredibly easy and the funding timeline was exactly as promised. The team walked us through the whole process and answered every question we had. Highly recommend for any B2B service business.",
    name: "Jennifer W.",
    title: "Managing Partner",
    company: "Clarity Consulting Group",
    industry: "Services",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Client Testimonials"
        subtitle="Don't take our word for it — hear directly from the businesses we've helped grow."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Client Testimonials", href: "/services/testimonials" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-8 border border-gray-100 card-hover flex flex-col">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed italic flex-1 mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="border-t border-gray-200 pt-4 flex items-start justify-between">
                  <div>
                    <div className="font-bold text-blue-900">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.title}, {t.company}</div>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold">{t.industry}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to become our next success story?</h3>
            <div className="flex justify-center gap-4">
              <Link href="/application" className="btn-primary">Apply Now</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
