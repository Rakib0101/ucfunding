import Link from "next/link";
import KeepExploring from "@/components/KeepExploring";

const threeIcons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Trusted partnership built on transparency and long-term relationships.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    label: "Flexible capital solutions that grow alongside your business.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Expert team with decades of commercial finance experience.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center text-center text-white"
        style={{ minHeight: "520px", background: "linear-gradient(160deg,#1c2840 0%,#0f1628 60%,#090e1a 100%)" }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />
        <div className="relative z-10 px-6">
          <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(3rem,7vw,5.5rem)", fontWeight: 300, lineHeight: 1.1, color: "#fff" }}>
            Capital <em>for</em> Growth
          </h1>
        </div>
      </section>

      {/* ── LEADING THE WAY ── */}
      <section className="bg-white py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <p className="label-eyebrow mb-4">Who we are</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 400, color: "#111", lineHeight: 1.2 }}>
            Leading the way in commercial financial services.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.9, marginTop: "16px" }}>
            United Capital Partners LLC delivers bespoke financing solutions to small businesses and middle-market companies, empowering growth through strategic capital access.
          </p>
        </div>
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {threeIcons.map(({ icon, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div style={{ color: "#c9a96e" }}>{icon}</div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#666", lineHeight: 1.8 }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FLEXIBLE AND INNOVATIVE ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "480px" }}>
        <div style={{ background: "linear-gradient(135deg,#1e2d42 0%,#2c3f5a 100%)", minHeight: "320px" }} />
        <div className="bg-white flex flex-col justify-center px-12 py-16">
          <p className="label-eyebrow mb-5">Our approach</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400, color: "#111", lineHeight: 1.2, marginBottom: "20px" }}>
            Flexible <em>and</em> innovative.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.9, maxWidth: "400px", marginBottom: "28px" }}>
            We take a consultative approach to every engagement — identifying the right capital structure for your specific needs and delivering creative solutions that competitors can't match.
          </p>
          <Link href="/about" className="btn-outline-dark self-start">
            Learn More
          </Link>
        </div>
      </section>

      {/* ── PARTNERSHIPS / TAILORED ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="label-eyebrow mb-5">Philosophy</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400, color: "#111", lineHeight: 1.25, marginBottom: "20px" }}>
              Partnerships, <em>not</em> transactions.
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.9 }}>
              We invest in understanding your business deeply so that every capital solution we provide strengthens your operations and accelerates your long-term trajectory.
            </p>
          </div>
          <div>
            <p className="label-eyebrow mb-5">What we offer</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400, color: "#111", lineHeight: 1.25, marginBottom: "20px" }}>
              Tailored <em>and</em> innovative solutions.
            </h2>
            <ul style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.82rem", color: "#666", lineHeight: 2, listStyle: "none", padding: 0 }}>
              {[
                "Equipment Leasing & Financing",
                "Asset Based Lending & Factoring",
                "Purchase Order & Contract Finance",
                "Venture Debt",
                "Subordinated Debt",
                "Short-Term Bridge Loans",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: "#c9a96e" }}>—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── GET THE DETAILS ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "440px" }}>
        <div className="bg-white flex flex-col justify-center px-12 py-16 order-2 md:order-1">
          <p className="label-eyebrow mb-5">Learn more</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400, color: "#111", lineHeight: 1.2, marginBottom: "20px" }}>
            Get the details.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.9, maxWidth: "380px", marginBottom: "28px" }}>
            Explore our full range of capital products designed for growing businesses across every industry.
          </p>
          <Link href="/products" className="btn-outline-dark self-start">
            Learn More
          </Link>
        </div>
        <div className="order-1 md:order-2" style={{ background: "linear-gradient(135deg,#181f2c 0%,#2a3548 100%)", minHeight: "320px" }} />
      </section>

      {/* ── CONTACT FORM SECTION ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "480px" }}>
        <div style={{ background: "linear-gradient(135deg,#1e2d42 0%,#2c3f5a 100%)", minHeight: "320px" }} />
        <div className="bg-white flex flex-col justify-center px-12 py-16">
          <p className="label-eyebrow mb-4">Send us a message</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 400, color: "#111", marginBottom: "28px" }}>
            {"Let's work together."}
          </h2>
          <form className="space-y-5 max-w-sm">
            <input className="form-field" type="text" placeholder="Your Name" required />
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

      {/* ── KEEP EXPLORING ── */}
      <KeepExploring />
    </>
  );
}
