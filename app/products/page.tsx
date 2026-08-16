import Link from "next/link";
import PageHero from "@/components/PageHero";
import KeepExploring from "@/components/KeepExploring";

export const metadata = {
  title: "Products & Services | United Capital Partners",
  description: "Customizable capital solutions for your business — equipment leasing, factoring, venture debt, and more.",
};

const products = [
  {
    title: "Equipment Leasing & Financing",
    text: "Preserve working capital by leasing or financing the equipment your business needs to grow. We structure solutions across a wide range of asset types and credit profiles.",
  },
  {
    title: "Venture Debt",
    text: "Non-dilutive capital for venture-backed companies looking to extend runway, fund growth initiatives, or bridge to the next equity round.",
  },
  {
    title: "Asset Based Lending & Factoring",
    text: "Unlock liquidity from your accounts receivable and assets. Our ABL and factoring programs are tailored to your specific revenue cycle.",
  },
  {
    title: "Subordinated Debt",
    text: "Flexible mezzanine capital to complement senior debt, support acquisitions, management buyouts, or recapitalizations.",
  },
  {
    title: "Purchase Order & Contract Finance",
    text: "Finance large purchase orders or government contracts so you can fulfill opportunities that exceed your current cash position.",
  },
  {
    title: "Short-Term Bridge Loans",
    text: "Rapid-close bridge financing for time-sensitive transactions, real estate, or working capital gaps while permanent financing is arranged.",
  },
];

const icons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

const iconLabels = [
  "Customized structures designed around your specific business needs.",
  "Competitive terms with fast execution and minimal friction.",
  "Transparent pricing with no hidden fees or surprises.",
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="Products & Services"
      />

      {/* ── INTRO ICONS ── */}
      <section className="bg-white py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <p className="label-eyebrow mb-4">What we provide</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400, color: "#111" }}>
            We offer customizable capital solutions for your business.
          </h2>
        </div>
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {icons.map((icon, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div style={{ color: "#c9a96e" }}>{icon}</div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#666", lineHeight: 1.8 }}>
                {iconLabels[i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BUILT THROUGH RELATIONSHIPS ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "460px" }}>
        <div style={{ background: "linear-gradient(135deg,#1e2d42 0%,#2c3f5a 100%)", minHeight: "300px" }} />
        <div className="bg-white flex flex-col justify-center px-12 py-16">
          <p className="label-eyebrow mb-5">Our philosophy</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400, color: "#111", lineHeight: 1.2, marginBottom: "20px" }}>
            Built through <em>relationships.</em>
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.9, maxWidth: "400px", marginBottom: "28px" }}>
            Every capital solution we deliver is rooted in a genuine understanding of your business — its goals,
            its constraints, and its opportunities. That&apos;s how we find the right structure every time.
          </p>
          <Link href="/contact" className="btn-outline-dark self-start">
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── OUR PRODUCTS GRID ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="label-eyebrow mb-4">What we offer</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400, color: "#111", marginBottom: "48px" }}>
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {products.map(({ title, text }) => (
              <div key={title} style={{ borderTop: "1px solid #e8e4dc", paddingTop: "24px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "1.3rem", fontWeight: 500, color: "#111", marginBottom: "10px" }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: "#666", lineHeight: 1.9 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LET'S WORK TOGETHER ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "480px" }}>
        <div style={{ background: "linear-gradient(135deg,#181f2c 0%,#2a3548 100%)", minHeight: "320px" }} />
        <div className="bg-white flex flex-col justify-center px-12 py-16">
          <p className="label-eyebrow mb-4">Work with us</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 400, color: "#111", marginBottom: "28px" }}>
            {"Let's work together."}
          </h2>
          <form className="space-y-5 max-w-sm">
            <input className="form-field" type="text" placeholder="Name" required />
            <input className="form-field" type="text" placeholder="Company Name" />
            <input className="form-field" type="tel" placeholder="Phone Number" />
            <input className="form-field" type="email" placeholder="Email Address" required />
            <textarea className="form-field resize-none" rows={3} placeholder="Message" />
            <button type="submit" className="btn-dark mt-2">
              Send Your Message
            </button>
          </form>
        </div>
      </section>

      <KeepExploring />
    </>
  );
}
