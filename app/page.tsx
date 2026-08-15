import Link from "next/link";

const industries = [
  {
    name: "Staffing",
    href: "/services/industries",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Government",
    href: "/services/industries",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    name: "Manufacturing",
    href: "/services/industries",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: "Service",
    href: "/services/industries",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Information Technology",
    href: "/services/industries",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Security Guard",
    href: "/services/industries",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const clientLogos = [
  "Apple", "Walmart", "Verizon", "US Census Bureau", "Amazon", "Google", "Ford", "Department of Justice", "Department of Defense",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f2645 0%, #1a3a6b 50%, #1e4a8a 100%)",
          minHeight: "580px",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "white", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ background: "white", transform: "translate(-30%, 30%)" }} />

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-yellow-500 text-blue-900 font-bold text-xs px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
                Bank-Owned Factoring
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Intelligent.<br />
                <span className="text-yellow-400">Working.</span><br />
                Capital<span className="text-yellow-400">™</span>
              </h1>
              <p className="text-blue-200 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                Net-30 is good, but <strong className="text-white">Net-2 is even better.</strong> United Capital Funding converts your business or government invoices into working capital quickly, giving you more time to grow and manage your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/application" className="btn-primary text-lg px-8 py-4">
                  Apply Now — It&apos;s Free
                </Link>
                <Link href="/services" className="btn-outline text-lg px-8 py-4" style={{ borderColor: "white", color: "white" }}>
                  Learn More
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-blue-300">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  Funded in 24–48 hrs
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  FDIC-Insured Bank
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/></svg>
                  Lower Rates
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl" style={{ background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.2)" }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white opacity-80">
                      <svg className="w-24 h-24 mx-auto mb-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="text-xl font-bold">Fast Funding</p>
                      <p className="text-blue-300 text-sm mt-1">Get paid in 24–48 hours</p>
                    </div>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 font-bold rounded-xl p-3 shadow-lg text-sm">
                  <div className="text-2xl font-black">2</div>
                  <div className="text-xs">Days to Fund</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-blue-900 font-bold rounded-xl p-3 shadow-lg text-sm">
                  <div className="text-xs text-gray-500">Since 1997</div>
                  <div className="font-black text-blue-900">FDIC Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GROWTH FACTOR BANNER ── */}
      <section className="bg-yellow-400 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-blue-900">We are the growth factor.</h2>
            <p className="text-blue-800 mt-1">Part of Gulf Coast Bank &amp; Trust Company — no outside capital, lower fees.</p>
          </div>
          <Link href="/about" className="btn-secondary whitespace-nowrap shrink-0">Learn About Us</Link>
        </div>
      </section>

      {/* ── BANK OWNED TRUST ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="gold-bar" />
              <h2 className="section-heading">Bank-Owned. <br />Better for Your Business.</h2>
              <p className="section-subheading mt-4">
                We are part of Gulf Coast Bank &amp; Trust Company. As a result, we do not rely on capital from outside sources, giving you <strong>lower fees</strong> and high quality service. Unlike most factoring companies, our stability means we can offer you consistent, competitive rates.
              </p>
              <p className="section-subheading mt-3">
                United Capital Funding is a wholly owned subsidiary of Gulf Coast Bank &amp; Trust Company, an FDIC-insured bank headquartered in New Orleans, Louisiana.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary">About Us</Link>
                <Link href="/application" className="btn-primary">Apply Now</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏦", title: "Bank Owned", desc: "Subsidiary of Gulf Coast Bank & Trust — FDIC insured since 1997" },
                { icon: "💰", title: "Lower Fees", desc: "No reliance on outside capital means better rates for you" },
                { icon: "⚡", title: "Fast Funding", desc: "Receive your money in as little as 24–48 hours" },
                { icon: "🌎", title: "Nationwide", desc: "Factoring services available across all 50 states" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 card-hover">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-blue-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 FEATURE CARDS ── */}
      <section className="py-16" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray-100">
              <div style={{ backgroundColor: "#1a3a6b" }} className="h-3" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">See Why We Are The Best</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Don&apos;t just take our word for it. Our clients speak for themselves. Read real stories from businesses we&apos;ve helped grow with invoice factoring.
                </p>
                <Link href="/services/testimonials" className="btn-primary">Read Client Testimonials</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray-100">
              <div style={{ backgroundColor: "#e8b84b" }} className="h-3" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Better Decisions for Your Business</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  As a bank-owned factoring company, we have the financial strength and stability to make better decisions for your business. No outside investors. No conflicting interests.
                </p>
                <Link href="/application" className="btn-primary">Start Your Application</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-gray-100">
              <div style={{ backgroundColor: "#1a3a6b" }} className="h-3" />
              <div className="p-8">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">We&apos;re Here for You</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our team of factoring specialists is ready to answer your questions and help you find the right solution for your business cash flow needs.
                </p>
                <Link href="/contact" className="btn-primary">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS AR FACTORING ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Visual side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-10">
                <div className="flex flex-col gap-4">
                  {[
                    { step: "1", label: "You deliver goods/services", icon: "📦" },
                    { step: "2", label: "You submit invoice to UC Funding", icon: "📄" },
                    { step: "3", label: "We advance up to 90% immediately", icon: "💵" },
                    { step: "4", label: "Your client pays the invoice", icon: "✅" },
                    { step: "5", label: "We send you the remaining balance", icon: "🏦" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white shrink-0" style={{ backgroundColor: "#1a3a6b" }}>{s.step}</div>
                      <span className="text-2xl">{s.icon}</span>
                      <span className="text-gray-700 font-medium text-sm">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Text side */}
            <div>
              <div className="gold-bar" />
              <h2 className="section-heading">What is Accounts Receivable (AR) Factoring?</h2>
              <p className="section-subheading mt-4">
                Factoring turns your outstanding invoices into immediate cash — eliminating the painful wait for Net-30, Net-60, or even Net-90 payment terms. Available for both B2B and B2G (business-to-government) transactions.
              </p>
              <p className="section-subheading mt-4">
                Unlike traditional loans, approval is based on your <strong>client&apos;s creditworthiness</strong>, not yours. That means even newer businesses can qualify. There&apos;s no debt added to your balance sheet.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "No Long-Term Contracts", icon: "✔" },
                  { label: "No Hidden Fees", icon: "✔" },
                  { label: "No Debt on Balance Sheet", icon: "✔" },
                  { label: "Credit Based on Clients", icon: "✔" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">{b.icon}</span>
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/services" className="btn-secondary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20" style={{ backgroundColor: "#1a3a6b" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex justify-center">
              <div className="gold-bar" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              What are the benefits of choosing<br className="hidden md:block" /> United Capital Funding?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Bank Owned",
                desc: "UC Funding is a wholly owned subsidiary of Gulf Coast Bank & Trust Company, an FDIC-insured bank headquartered in New Orleans, Louisiana. We have the backing and stability that independent factors simply cannot match.",
                icon: "🏦",
              },
              {
                title: "Lower Rates",
                desc: "Because we don't rely on capital from outside sources, we can pass the savings on to you. Our bank-backed model gives us a competitive cost of capital — and we share that advantage with our clients.",
                icon: "📉",
              },
              {
                title: "Fast Funding",
                desc: "Once approved, you can receive funds in as little as 24–48 hours. Stop waiting on slow-paying clients and start reinvesting in your business right away.",
                icon: "⚡",
              },
              {
                title: "Nationwide Service",
                desc: "No matter where your business is located, UC Funding provides invoice factoring services across all 50 states. Our nationwide reach means you can grow without geographic limitations.",
                icon: "🗺️",
              },
              {
                title: "Expert Support",
                desc: "Our team of experienced factoring specialists provides personalized service and expert guidance throughout the entire process — from application to ongoing funding.",
                icon: "🤝",
              },
              {
                title: "Flexible Programs",
                desc: "We offer factoring solutions tailored to your specific industry and volume needs. Whether you're a startup or an established business, we have a program that fits.",
                icon: "🔧",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20 card-hover">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services/benefits" className="btn-primary">View All Benefits</Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <div className="gold-bar" />
            </div>
            <h2 className="section-heading mt-4">Industries We Serve</h2>
            <p className="section-subheading max-w-2xl mx-auto mt-3">
              UC Funding provides invoice factoring solutions across a wide range of industries. If your business issues invoices with payment terms, we can help.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href={ind.href}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-100 hover:border-blue-900 hover:bg-blue-50 transition-all card-hover text-center"
              >
                <div className="text-blue-900 group-hover:text-blue-700 transition-colors">
                  {ind.icon}
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-blue-900 text-sm transition-colors">{ind.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services/industries" className="btn-outline">View All Industries</Link>
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section style={{ backgroundColor: "#f5f7fa" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex justify-center">
              <div className="gold-bar" />
            </div>
            <h2 className="section-heading mt-4">Our clients work with some of the top<br className="hidden md:block" /> brands and agencies in the nation.</h2>
            <p className="section-subheading mt-3 max-w-2xl mx-auto">
              When you partner with UC Funding, you&apos;re joining a network of businesses that serve the biggest names in America.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 items-center justify-items-center">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 text-gray-400 font-bold text-xs text-center w-full card-hover"
                style={{ minHeight: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex justify-center">
              <div className="gold-bar" />
            </div>
            <h2 className="section-heading mt-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "UC Funding has been a game-changer for our staffing company. We used to struggle with payroll gaps between billing our clients and receiving payment. Now that problem is completely gone.",
                name: "Sarah M.",
                company: "Staffing Solutions Inc.",
              },
              {
                quote: "Being a government contractor means long payment cycles. UC Funding understood our industry immediately and got us funded within 48 hours of submitting our first invoice.",
                name: "James T.",
                company: "Federal Services Group",
              },
              {
                quote: "The fact that they are bank-owned gives me peace of mind. The rates are transparent and the team is incredibly responsive. I recommend them to every business owner I know.",
                name: "Maria R.",
                company: "Tech Staffing Partners",
              },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-8 border border-gray-100 card-hover">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</blockquote>
                <div>
                  <div className="font-bold text-blue-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services/testimonials" className="btn-outline">Read All Testimonials</Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-20 text-center text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f2645 0%, #1a3a6b 100%)" }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white" style={{ transform: "translate(-50%, -50%)" }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white" style={{ transform: "translate(50%, 50%)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="gold-bar" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Waiting. Start Growing.
          </h2>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">
            Join thousands of businesses that have unlocked their cash flow with United Capital Funding. Apply today — it&apos;s fast, easy, and free to start.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/application" className="btn-primary text-lg px-10 py-4">
              Apply Now — It&apos;s Free
            </Link>
            <a href="tel:8778948232" className="text-lg px-10 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-blue-900 transition-all inline-block">
              Call 877-894-8232
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            Factoring services available nationwide · No obligation · No long-term contracts
          </p>
        </div>
      </section>
    </>
  );
}
