import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact Us | United Capital Partners",
  description: "Get in touch with United Capital Partners. Located in the heart of Houston, TX.",
};

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (800) 899-9098",
    href: "tel:18008999098",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@ucpartners.com",
    href: "mailto:info@ucpartners.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "700 Milam St, 14th Floor\nHouston, TX 77002",
    href: "#",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "Mon–Fri, 9:00 AM – 6:00 PM",
    href: null,
  },
];

const faqs = [
  { q: "What types of businesses does UCP work with?", a: "We work with small businesses and middle-market companies across a broad range of industries, from technology and healthcare to manufacturing and professional services." },
  { q: "How quickly can you close a transaction?", a: "Our team is structured for speed. Depending on the complexity of the transaction, we can often close within days to a few weeks." },
  { q: "Is there a minimum deal size?", a: "We typically work on transactions from $500K and up, though exceptions are considered on a case-by-case basis." },
  { q: "What information do I need to get started?", a: "A brief overview of your business, your financing need, and recent financial statements are a great starting point. Contact us and we will guide you from there." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Our team is ready to help you find the right capital solution. Reach out and we'll respond promptly."
        ctaText="Send a Message"
        ctaHref="#contact-form"
      />

      {/* ── GET IN TOUCH + CONTACT INFO ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <div id="contact-form">
            <p className="label-eyebrow mb-4">Send a message</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 400, color: "#111", marginBottom: "28px" }}>
              Get In Touch
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: "#777", lineHeight: 1.8, marginBottom: "24px" }}>
              Fill out the form below and a member of our team will get back to you shortly.
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-6">
                <input className="form-field" type="text" placeholder="First Name" required />
                <input className="form-field" type="text" placeholder="Last Name" required />
              </div>
              <input className="form-field" type="text" placeholder="Company Name" />
              <input className="form-field" type="email" placeholder="Email Address" required />
              <input className="form-field" type="tel" placeholder="Phone Number" />
              <textarea className="form-field resize-none" rows={4} placeholder="Message" />
              <button type="submit" className="btn-dark mt-2">
                Send Your Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <p className="label-eyebrow mb-4">Our details</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 400, color: "#111", marginBottom: "36px" }}>
              Contact Info
            </h2>
            <div className="space-y-8">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div style={{ color: "#c9a96e", marginTop: "2px", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: "4px" }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#333", textDecoration: "none", whiteSpace: "pre-line" }}
                        className="hover:text-black transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#333", whiteSpace: "pre-line" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section style={{ backgroundColor: "#f8f6f2" }} className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="label-eyebrow mb-4 text-center">Common questions</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400, color: "#111", textAlign: "center", marginBottom: "48px" }}>
            FAQs
          </h2>
          <div className="space-y-8">
            {faqs.map(({ q, a }) => (
              <div key={q} style={{ borderTop: "1px solid #e8e4dc", paddingTop: "24px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "1.15rem", fontWeight: 500, color: "#111", marginBottom: "10px" }}>
                  {q}
                </h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: "#666", lineHeight: 1.9 }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATED IN HOUSTON ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "440px" }}>
        <div style={{ background: "linear-gradient(135deg,#1e2d42 0%,#2c3f5a 100%)", minHeight: "300px" }} />
        <div className="bg-white flex flex-col justify-center px-12 py-16">
          <p className="label-eyebrow mb-5">Our location</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, color: "#111", lineHeight: 1.2, marginBottom: "20px" }}>
            Located in the heart of Houston.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.9, maxWidth: "380px", marginBottom: "28px" }}>
            Our offices are based at 700 Milam St, 14th Floor, Houston, TX 77002. We serve clients
            nationwide from our Houston headquarters.
          </p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-outline-dark self-start">
            Get Directions
          </a>
        </div>
      </section>

      {/* ── PRODUCTS / TRANSACTIONS CTA ── */}
      <section style={{ backgroundColor: "#f8f6f2" }} className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="pr-0 md:pr-16 py-4">
            <p className="label-eyebrow mb-4">Explore our offerings</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400, color: "#111", marginBottom: "16px" }}>
              Products & Services
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: "#666", lineHeight: 1.8, marginBottom: "24px" }}>
              Learn more about the full range of capital solutions we offer to growing businesses.
            </p>
            <Link href="/products" className="btn-outline-dark">
              Learn More
            </Link>
          </div>
          <div className="pl-0 md:pl-16 py-4 border-t md:border-t-0 md:border-l border-gray-200 mt-8 md:mt-0">
            <p className="label-eyebrow mb-4">See our work</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400, color: "#111", marginBottom: "16px" }}>
              Sample Transactions
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: "#666", lineHeight: 1.8, marginBottom: "24px" }}>
              Browse representative transactions to understand the types of deals we close.
            </p>
            <Link href="/transactions" className="btn-outline-dark">
              View Transactions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
