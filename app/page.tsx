import Link from "next/link";
import Image from "next/image";

/** Green cash/bills illustration for AR Factoring section */
function CashIllustration() {
  return (
    <svg viewBox="0 0 280 220" fill="none" className="w-full max-w-xs mx-auto">
      {/* Bill stack layers */}
      {[0, 6, 12].map((offset) => (
        <rect key={offset} x={20 + offset} y={60 - offset} width="220" height="110" rx="6" fill={offset === 0 ? "#2d5c27" : offset === 6 ? "#3d7a35" : "#4a8f41"} />
      ))}
      {/* Bill border lines */}
      <rect x="32" y="72" width="196" height="86" rx="3" stroke="#8aad3a" strokeWidth="1.5" fill="none" />
      {/* Dollar sign center */}
      <circle cx="130" cy="115" r="28" fill="none" stroke="#8aad3a" strokeWidth="2" />
      <text x="130" y="122" textAnchor="middle" fontSize="28" fill="#8aad3a" fontWeight="900">$</text>
      {/* Small decorative dots */}
      <circle cx="50" cy="88" r="5" fill="#8aad3a" opacity="0.6" />
      <circle cx="210" cy="88" r="5" fill="#8aad3a" opacity="0.6" />
      <circle cx="50" cy="140" r="5" fill="#8aad3a" opacity="0.6" />
      <circle cx="210" cy="140" r="5" fill="#8aad3a" opacity="0.6" />
      {/* Corner decoration */}
      <rect x="40" y="80" width="20" height="14" rx="2" fill="#8aad3a" opacity="0.4" />
      <rect x="200" y="80" width="20" height="14" rx="2" fill="#8aad3a" opacity="0.4" />
      <rect x="40" y="132" width="20" height="14" rx="2" fill="#8aad3a" opacity="0.4" />
      <rect x="200" y="132" width="20" height="14" rx="2" fill="#8aad3a" opacity="0.4" />
    </svg>
  );
}

/** Bank / pillars illustration for Benefits section */
function BankPillarsIllustration() {
  return (
    <svg viewBox="0 0 220 260" fill="none" className="w-48 mx-auto">
      {/* Roof */}
      <polygon points="10,70 110,10 210,70" fill="#2d5c27" opacity="0.15" stroke="#2d5c27" strokeWidth="2" />
      {/* Pillars */}
      {[30, 70, 110, 150, 190].map((x) => (
        <rect key={x} x={x - 8} y="72" width="16" height="110" rx="2" fill="#2d5c27" opacity="0.2" stroke="#2d5c27" strokeWidth="1" />
      ))}
      {/* Base */}
      <rect x="14" y="182" width="192" height="12" rx="2" fill="#2d5c27" opacity="0.3" />
      {/* Down arrows */}
      {[55, 110, 165].map((x) => (
        <g key={x}>
          <line x1={x} y1="210" x2={x} y2="240" stroke="#2d5c27" strokeWidth="2" />
          <polyline points={`${x - 8},230 ${x},242 ${x + 8},230`} fill="none" stroke="#2d5c27" strokeWidth="2" />
        </g>
      ))}
      {/* Dollar signs below arrows */}
      {[55, 110, 165].map((x) => (
        <text key={`$${x}`} x={x} y="256" textAnchor="middle" fontSize="14" fill="#2d5c27" fontWeight="bold">$</text>
      ))}
    </svg>
  );
}

/* ── Industry data ── */
const industries = [
  {
    name: "Staffing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Government",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    name: "Manufacturing",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: "Service",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Information Technology",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Security Guard",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

/* ── Client logo row data ── */
const row1Logos = ["Apple", "Walmart", "Verizon", "United States Census", "Amazon"];
const row2Logos = ["Google", "Ford", "Dept. of Justice", "Dept. of Defense"];

/* ── Page component ── */
export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          1. HERO — two columns
      ═══════════════════════════════════════════ */}
      <section className="relative flex flex-col md:flex-row" style={{ minHeight: "420px" }}>
        <Link href="/application" className="absolute top-0 right-0 z-10 text-white text-sm font-bold px-5 py-3" style={{ backgroundColor: "#2d5c27" }}>
          Apply Now ›
        </Link>
        {/* LEFT — sage green background with stacked highlight lines */}
        <div
          className="flex-1 flex flex-col justify-center px-10 py-12"
          style={{ backgroundColor: "#ccd89c" }}
        >
          {/* Three highlight rows */}
          {["Intelligent.", "Working.", "Capital™"].map((word) => (
            <div
              key={word}
              className="mb-2 px-5 py-3 inline-block"
              style={{ backgroundColor: "#8aad3a" }}
            >
              <span
                className="text-4xl md:text-5xl font-black leading-tight"
                style={{ color: "#2d5c27" }}
              >
                {word}
              </span>
            </div>
          ))}

          {/* Sub-paragraph */}
          <p className="mt-6 text-sm leading-relaxed max-w-xs" style={{ color: "#3a3a3a" }}>
            Net-30 is good, but <strong>Net-2 is even better.</strong> United Capital Funding
            converts your business or government invoices into working capital quickly,
            giving you more time to grow and manage your business.
          </p>
        </div>

        {/* RIGHT — real hero photo */}
        <div className="flex-1 relative" style={{ minHeight: "320px" }}>
          <Image
            src="/hero-right.jpg"
            alt="Business professional"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. GROWTH FACTOR — white, centered
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-14 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#1e1e1e" }}>
          We are the growth factor.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          United Capital Funding is a wholly owned subsidiary of Gulf Coast Bank &amp; Trust
          Company, an FDIC-insured bank headquartered in New Orleans, Louisiana. Because we
          are bank-owned, we do not rely on capital from outside sources — giving you lower
          fees and high-quality service you can count on.
        </p>
      </section>

      {/* ═══════════════════════════════════════════
          3. THREE CARDS
      ═══════════════════════════════════════════ */}
      <section className="bg-white pb-16 px-4">
        <div className="max-w-6xl mx-auto relative">
          {/* Decorative bills illustrations flanking the cards */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 hidden xl:block opacity-70">
            <Image src="/bills-left.svg" alt="" width={100} height={140} />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 hidden xl:block opacity-70">
            <Image src="/bills-right.svg" alt="" width={100} height={140} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 — businesswoman photo */}
            <div className="bg-white overflow-hidden card-hover">
              <div className="relative w-full h-48">
                <Image src="/hero-right.jpg" alt="See why we are the best" fill className="object-cover object-top" />
              </div>
              <div className="p-6">
                <h3 className="font-black text-base mb-3" style={{ color: "#1e1e1e" }}>
                  See Why We Are The Best
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Don&apos;t just take our word for it. Our clients speak for themselves. Read real
                  stories from businesses we&apos;ve helped grow with invoice factoring.
                </p>
                <Link href="/services/testimonials" className="green-link">
                  Read Client Testimonials &rsaquo;
                </Link>
              </div>
            </div>

            {/* Card 2 — smiling man photo */}
            <div className="bg-white overflow-hidden card-hover">
              <div className="w-full h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="font-black text-base mb-3" style={{ color: "#1e1e1e" }}>
                  Better Decisions for Your Business
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  As a bank-owned factoring company, we have the financial strength and stability
                  to make better decisions for your business. No outside investors. No conflicting
                  interests.
                </p>
                <Link href="/application" className="green-link">
                  Submit an Application &rsaquo;
                </Link>
              </div>
            </div>

            {/* Card 3 — call center workers photo — has border outline */}
            <div
              className="bg-white overflow-hidden card-hover"
              style={{ border: "1px solid #dde8c0" }}
            >
              <div className="w-full h-48 bg-gray-200" />
              <div className="p-6">
                <h3 className="font-black text-base mb-3" style={{ color: "#1e1e1e" }}>
                  We&apos;re Here for You
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Our team of factoring specialists is ready to answer your questions and help you
                  find the right solution for your business cash flow needs.
                </p>
                <Link href="/contact" className="green-link">
                  CONTACT US &rsaquo;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. AR FACTORING — sage green bg
      ═══════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: "#dde8c0" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-5 leading-snug" style={{ color: "#2d5c27" }}>
              What is Accounts Receivable (AR) Factoring?
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Factoring turns your outstanding invoices into immediate cash — eliminating the
              painful wait for Net-30, Net-60, or even Net-90 payment terms. Available for both
              B2B and B2G (business-to-government) transactions.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-7">
              Unlike traditional loans, approval is based on your <strong>client&apos;s
              creditworthiness</strong>, not yours. That means even newer businesses can qualify.
              There&apos;s no debt added to your balance sheet.
            </p>
            <Link href="/services" className="btn-primary">Learn More</Link>
          </div>

          {/* RIGHT: cash illustration */}
          <div className="flex justify-center">
            <CashIllustration />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. BENEFITS — white bg
      ═══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Centered heading */}
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12" style={{ color: "#1e1e1e" }}>
            What are the benefits of choosing United Capital Funding?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT: bank building illustration */}
            <div className="flex justify-center">
              <BankPillarsIllustration />
            </div>

            {/* RIGHT: two benefit sections */}
            <div className="space-y-8">
              {/* Bank Owned */}
              <div>
                <Link href="/about" className="green-link text-base font-black block mb-2">
                  Bank Owned
                </Link>
                <p className="text-gray-700 text-sm leading-relaxed">
                  UC Funding is a wholly owned subsidiary of Gulf Coast Bank &amp; Trust Company, an
                  FDIC-insured bank headquartered in New Orleans, Louisiana. We have the backing and
                  stability that independent factors simply cannot match. Our bank ownership means we
                  do not rely on outside capital sources.
                </p>
              </div>

              {/* Lower Rates */}
              <div>
                <Link href="/services/benefits" className="green-link text-base font-black block mb-2">
                  Lower Rates
                </Link>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Because we don&apos;t rely on capital from outside sources, we can pass the savings
                  on to you. Our bank-backed model gives us a competitive cost of capital — and we
                  share that advantage with our clients, offering some of the lowest rates in the
                  invoice factoring industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. INDUSTRIES — light gray-green bg
      ═══════════════════════════════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f0f2ec" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-10" style={{ color: "#1e1e1e" }}>
            Industries We Specialize In:
          </h2>

          {/* 3×2 grid */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href="/services/industries"
                className="flex items-center gap-3 bg-white px-4 py-3 rounded border border-gray-200 hover:border-green-700 hover:shadow-sm transition-all text-sm font-semibold"
                style={{ color: "#333" }}
              >
                <span style={{ color: "#2d5c27" }}>{ind.icon}</span>
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. CLIENT LOGOS — white bg
      ═══════════════════════════════════════════ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-700 font-semibold mb-8 max-w-xl mx-auto leading-snug">
            Our clients work with some of the top brands and agencies in the nation.
          </p>

          {/* Row 1 — 5 logos */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {row1Logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center px-6 py-3 border border-gray-200 rounded text-gray-500 font-bold text-sm"
                style={{ minWidth: "120px" }}
              >
                {logo}
              </div>
            ))}
          </div>

          {/* Row 2 — 4 logos */}
          <div className="flex flex-wrap justify-center gap-4">
            {row2Logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center px-6 py-3 border border-gray-200 rounded text-gray-500 font-bold text-sm"
                style={{ minWidth: "120px" }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
