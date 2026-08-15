import Link from "next/link";

export const metadata = {
  title: "Invoice Factoring Services | United Capital Funding",
  description: "Invoice factoring services that turn your accounts receivables into working capital. Bank-owned, nationwide.",
};

const industries = [
  { label: "Factoring for Staffing Companies" },
  { label: "Factoring for Government Contractors" },
  { label: "Factoring for Manufacturing Companies" },
  { label: "Factoring for Service Businesses" },
  { label: "Factoring for Information Technology" },
  { label: "Factoring for Security Guard Companies" },
];

const steps = [
  {
    num: "01",
    desc: "A copy of your invoice is provided to United Capital.",
  },
  {
    num: "02",
    desc: "United Capital Funding verifies the invoice with your customer, then pays you 80-90% of the invoice (advance) in cash.",
  },
  {
    num: "03",
    desc: "United Capital Funding acts as your accounts receivables department and services the invoice.",
  },
  {
    num: "04",
    desc: "Your client pays 100% of the invoice to United Capital Funding at our secure lock box facility.",
  },
  {
    num: "05",
    desc: "United Capital Funding pays you the 10-20% balance less a small professional fee (reserve).",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE TITLE BANNER ── */}
      <div style={{ backgroundColor: "#ccd89c" }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="px-8 py-5" style={{ backgroundColor: "#8aad3a" }}>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
              Invoice Factoring Services
            </h1>
          </div>
        </div>
      </div>

      {/* ── WHAT ARE INVOICE FACTORING SERVICES ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#1e1e1e" }}>
            What are Invoice Factoring Services?
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Our invoice factoring services turn your accounts receivables (invoices) into cash flow by
            eliminating the waiting period while your invoices are paid. This process works for companies
            with a business-to-business (B2B) and business-to-government (B2G) model.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            This provides businesses with the opportunity to have immediate consistent cash flow for
            ongoing operations and additional cash reserves to fund growth opportunities. For many
            businesses, maintaining enough cash can be difficult, especially if a business is young or
            experiencing rapid growth.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            United Capital Funding provides help to these businesses through payroll funding services and
            invoice factoring services which gives them working capital quickly.
          </p>
          <div className="flex flex-wrap gap-3 mb-0">
            <Link
              href="#"
              className="inline-block text-white text-xs font-bold px-4 py-2"
              style={{ backgroundColor: "#2d5c27" }}
            >
              INFOGRAPHIC: About Factoring
            </Link>
            <Link
              href="#qualify"
              className="inline-block text-white text-xs font-bold px-4 py-2"
              style={{ backgroundColor: "#2d5c27" }}
            >
              Does my business qualify?
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVICE ── */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="rounded p-6" style={{ backgroundColor: "#f0f2ec" }}>
            <h2 className="text-center font-black text-base mb-6" style={{ color: "#1e1e1e" }}>
              Industries We Service:
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {industries.map((ind) => (
                <Link
                  key={ind.label}
                  href="/services/industries"
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded px-3 py-3 hover:border-green-600 transition-colors"
                >
                  {/* Generic building/industry icon */}
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="4" y="12" width="20" height="12" rx="1" fill="#2d5c27" opacity="0.85" />
                    <rect x="7" y="8" width="5" height="4" fill="#2d5c27" />
                    <rect x="16" y="6" width="5" height="6" fill="#2d5c27" />
                    <rect x="6" y="16" width="3" height="4" fill="white" opacity="0.7" />
                    <rect x="12" y="16" width="3" height="4" fill="white" opacity="0.7" />
                    <rect x="18" y="16" width="3" height="4" fill="white" opacity="0.7" />
                  </svg>
                  <span className="text-xs font-semibold leading-tight" style={{ color: "#1e1e1e" }}>
                    {ind.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW INVOICE FACTORING WORKS ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            {/* Left: heading + intro */}
            <div>
              <h2 className="text-2xl font-black mb-4" style={{ color: "#1e1e1e" }}>
                How Invoice Factoring Works
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Selling invoices owed by another business or government entity to a third-party buyer (a
                Factor). Invoice factoring services are one way to fund your business. Prior to your first
                funding, we work with you to introduce ourselves to your customer as a new financial partner.
                This allows us to verify invoices efficiently in step #2.
              </p>
            </div>
            {/* Right: step 01 */}
            <div className="border border-gray-200 rounded p-4">
              <div className="text-2xl font-black mb-2" style={{ color: "#2d5c27" }}>01</div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{steps[0].desc}</p>
              {/* Simple flow diagram */}
              <div className="flex items-center justify-center gap-3 mt-2">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#555"><circle cx="10" cy="7" r="4"/><ellipse cx="10" cy="16" rx="6" ry="4"/></svg>
                  </div>
                  <span className="text-xs text-gray-500">You</span>
                </div>
                <svg width="24" height="12" viewBox="0 0 24 12"><path d="M0 6h20M16 2l6 4-6 4" stroke="#2d5c27" strokeWidth="2" fill="none"/></svg>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1" style={{ backgroundColor: "#dde8c0" }}>
                    <span className="text-xs font-black" style={{ color: "#2d5c27" }}>UCF</span>
                  </div>
                  <span className="text-xs text-gray-500">UC Funding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps 02–05 in 2×2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {steps.slice(1).map((step) => (
              <div key={step.num} className="border border-gray-200 rounded p-4">
                <div className="text-2xl font-black mb-2" style={{ color: "#2d5c27" }}>{step.num}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW AR FACTORING WORKS ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#1e1e1e" }}>
            How Accounts Receivables Factoring Works
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            <strong style={{ color: "#2d5c27" }}>Accounts Receivables Factoring</strong> with United Capital
            Funding is fast, simple and hassle-free for businesses with a business-to-business (B2B) and
            business-to-government (B2G) model. Clients fill out a schedule of invoices they wish to sell
            when capital is needed. Upon receipt of the schedule, United Capital Funding will fund up to at
            least 80% of the total amount on the same business day. Once the invoice is collected at a secure
            lock box, the reserve account (less a small fee) will be returned to you. Once the invoice
            factoring services have been completed, our clients enjoy the benefits of same day funding, as
            opposed to waiting up to 90 days for payment.
          </p>

          <p className="text-sm font-bold mb-4" style={{ color: "#2d5c27" }}>
            Accounts Receivable Factoring vs. Traditional Bank Line of Credit
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
              <li className="flex gap-2"><span style={{ color: "#2d5c27" }}>•</span> Invoice factoring services focus on the credit worthiness of your customers, not your company.</li>
              <li className="flex gap-2"><span style={{ color: "#2d5c27" }}>•</span> Unlike a typical bank loan, factoring clients are not subject to tightening credit availability due to credit cycles, economic volatility or market fluctuations.</li>
              <li className="flex gap-2"><span style={{ color: "#2d5c27" }}>•</span> Traditional bank loans have restrictive covenants on net worth, leverage, profitability, dividends and other restrictions, which inhibit sales growth.</li>
            </ul>
            <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
              <li className="flex gap-2"><span style={{ color: "#2d5c27" }}>•</span> Typical bank loans focus on the strength of the balance sheet, the profit and loss statement and cash flow of your company.</li>
              <li className="flex gap-2"><span style={{ color: "#2d5c27" }}>•</span> Factoring de-leverages your balance sheet.</li>
              <li className="flex gap-2"><span style={{ color: "#2d5c27" }}>•</span> Getting set up with United Capital is quick, free and with no long approval process.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── QUALIFY ── */}
      <section id="qualify" className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-3" style={{ color: "#1e1e1e" }}>
            Does my business qualify for invoice factoring services?
          </h2>
          <p className="text-sm font-bold mb-3" style={{ color: "#2d5c27" }}>
            Clients of United Capital Funding include businesses that have...
          </p>
          <ul className="text-sm text-gray-700 leading-relaxed space-y-1 mb-5 list-disc list-inside pl-1">
            <li>Final sale invoices to another business or government entity (not consumer sales)</li>
            <li>Sales from $20,000 to $5,000,000 monthly – including startups and companies with historical losses.</li>
            <li>Capital needs to allow them to grow in their industry.</li>
            <li>Limited collateral other than commercial invoices.</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Submit a connect form below to discuss your working capital needs, or if you currently have
            invoices and are ready to apply – fill out our{" "}
            <Link href="/application" className="font-semibold" style={{ color: "#2d5c27" }}>
              online application
            </Link>
            , there&apos;s no cost to apply.
          </p>
        </div>
      </section>

      {/* ── CONNECT FORM ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-6" style={{ color: "#1e1e1e" }}>
            Connect with United Capital Funding
          </h2>

          <div className="border border-gray-300 rounded p-6 mb-4">
            <p className="text-sm text-gray-600 mb-4">
              Please fill out the form below and a representative will be in touch with you.
            </p>
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
                <input type="text" placeholder="Last name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
              </div>
              <input type="text" placeholder="Company name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
              <div className="grid grid-cols-2 gap-3">
                <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
                <input type="tel" placeholder="Phone number" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-green-600">
                  <option value="">Please select...</option>
                  <option>Alabama</option><option>Alaska</option><option>Arizona</option>
                  <option>Arkansas</option><option>California</option><option>Colorado</option>
                  <option>Connecticut</option><option>Delaware</option><option>Florida</option>
                  <option>Georgia</option><option>Hawaii</option><option>Idaho</option>
                  <option>Illinois</option><option>Indiana</option><option>Iowa</option>
                  <option>Kansas</option><option>Kentucky</option><option>Louisiana</option>
                  <option>Maine</option><option>Maryland</option><option>Massachusetts</option>
                  <option>Michigan</option><option>Minnesota</option><option>Mississippi</option>
                  <option>Missouri</option><option>Montana</option><option>Nebraska</option>
                  <option>Nevada</option><option>New Hampshire</option><option>New Jersey</option>
                  <option>New Mexico</option><option>New York</option><option>North Carolina</option>
                  <option>North Dakota</option><option>Ohio</option><option>Oklahoma</option>
                  <option>Oregon</option><option>Pennsylvania</option><option>Rhode Island</option>
                  <option>South Carolina</option><option>South Dakota</option><option>Tennessee</option>
                  <option>Texas</option><option>Utah</option><option>Vermont</option>
                  <option>Virginia</option><option>Washington</option><option>West Virginia</option>
                  <option>Wisconsin</option><option>Wyoming</option>
                </select>
                <input type="text" placeholder="Type of business (industry)?" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1">How did you hear about us? *</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-green-600">
                  <option value="">Please select...</option>
                  <option>Google / Search Engine</option>
                  <option>Referral</option>
                  <option>LinkedIn</option>
                  <option>Facebook</option>
                  <option>Trade Show / Conference</option>
                  <option>Email</option>
                  <option>Other</option>
                </select>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                By providing your contact information you are authorizing United Capital Funding, or its
                affiliates including Gulf Coast Bank &amp; Trust, AmerifactorS, Gulf Coast Business Credit,
                KLC Financial, Phoenix Capital Group, Seven Oaks Capital Associates, and Spectrum Commercial
                Services to contact you. Authorization includes the use of text messaging and automated
                telephone dialing systems in connection with calls made to the number you provide.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting this form, you acknowledge you are over the age of 13 and approve submission of the above information.
              </p>
              <div className="border border-gray-300 rounded p-3 flex items-center gap-4 bg-gray-50" style={{ maxWidth: "300px" }}>
                <input type="checkbox" id="robot2" className="w-5 h-5" />
                <label htmlFor="robot2" className="text-sm text-gray-700 select-none">I&apos;m not a robot</label>
                <div className="ml-auto text-right">
                  <div className="text-xs text-gray-400 leading-tight">reCAPTCHA</div>
                  <div className="text-xs text-gray-400">Privacy - Terms</div>
                </div>
              </div>
              <button type="submit" className="w-full py-3 font-bold text-white text-sm rounded transition-colors" style={{ backgroundColor: "#555" }}>
                Connect
              </button>
            </form>
          </div>

          <div className="text-center">
            <Link href="/contact" className="text-sm text-gray-500 hover:underline">
              Contact Information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
