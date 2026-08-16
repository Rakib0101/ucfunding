import Link from "next/link";
import PageHero from "@/components/PageHero";
import KeepExploring from "@/components/KeepExploring";

export const metadata = {
  title: "About | United Capital Partners",
  description: "United Capital Partners LLC — financial services experts you can trust.",
};

const whyItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Years of experience",
    text: "Decades of commercial finance expertise across industries and market cycles.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Creative deal making",
    text: "We structure financing solutions that traditional lenders simply cannot provide.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "A relational approach",
    text: "Long-term partnerships that allow us to move faster and smarter for our clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About United Capital Partners"
        title="Financial services experts you can trust."
        italicWord="trust."
      />

      {/* ── WHY UCP ── */}
      <section className="bg-white py-20 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <p className="label-eyebrow mb-4">Our foundation</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400, color: "#111" }}>
            Why United Capital Partners?
          </h2>
        </div>
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {whyItems.map(({ icon, title, text }) => (
            <div key={title} className="flex flex-col items-center gap-4">
              <div style={{ color: "#c9a96e" }}>{icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "1.2rem", fontWeight: 500, color: "#111" }}>
                {title}
              </h3>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#666", lineHeight: 1.8 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STRATEGIC AND SOLUTION-DRIVEN ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "480px" }}>
        <div className="bg-white flex flex-col justify-center px-12 py-16">
          <p className="label-eyebrow mb-5">Our strategy</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400, color: "#111", lineHeight: 1.2, marginBottom: "20px" }}>
            Strategic <em>and</em> solution-driven.
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.9, maxWidth: "400px", marginBottom: "28px" }}>
            Both learning from and for the needs of our clients, United Capital Partners can rapidly assess a
            client&apos;s needs, identify a product offering that fits that need, and expedite funding so as
            to coincide with its client&apos;s timeframes.
          </p>
          <Link href="/products" className="btn-outline-dark self-start">
            Learn More
          </Link>
        </div>
        <div style={{ background: "linear-gradient(135deg,#1a2c42 0%,#2e4460 100%)", minHeight: "320px" }} />
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
