import Link from "next/link";

export const metadata = {
  title: "Benefits | United Capital Funding",
  description: "Discover the benefits of invoice factoring with United Capital Funding.",
};

export default function BenefitsPage() {
  return (
    <>
      {/* ── PAGE TITLE BANNER ── */}
      <div style={{ backgroundColor: "#ccd89c" }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="px-8 py-5" style={{ backgroundColor: "#8aad3a" }}>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
              Benefits
            </h1>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: Experts + FDIC ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <h2 className="text-xl font-black mb-3" style={{ color: "#1e1e1e" }}>
              Experts at your fingertips
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              We work with top companies and agencies who owe balances to our clients. These companies and
              agencies include Walmart, Google, Amazon, Department of Defense (DOD), Federal Bureau of
              Investigation (FBI), NASA, and Department of Homeland Security (DOHS).
            </p>
            <p className="text-xs text-gray-500 italic">Client references available upon request.</p>
          </div>
          {/* Right */}
          <div>
            <h2 className="text-xl font-black mb-3" style={{ color: "#1e1e1e" }}>
              FDIC-insured source of capital
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              As a wholly owned subsidiary of FDIC-insured Gulf Coast Bank &amp; Trust, you can rest assured that our
              funding source is insured and secure.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Comparison table ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left: heading */}
          <div>
            <h2 className="text-xl font-black mb-3" style={{ color: "#1e1e1e" }}>
              How does United Capital Funding compare?
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Say goodbye to endless add-on fees. Studies show our competitors still charge the following fees.
            </p>
          </div>

          {/* Right: table */}
          <div>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left bg-white text-xs"></th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-xs font-bold text-white"
                    style={{ backgroundColor: "#2d5c27" }}
                  >
                    Others
                  </th>
                  <th
                    className="border border-gray-300 px-3 py-2 text-center text-xs font-bold text-white"
                    style={{ backgroundColor: "#2d5c27" }}
                  >
                    United Capital Funding
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Due diligence fee",
                  "Invoice processing",
                  "Filing fee",
                  "Lockbox fee",
                  "Application fee",
                  "Credit checking",
                  "UCC search",
                  "Account setup",
                ].map((fee) => (
                  <tr key={fee}>
                    <td className="border border-gray-300 px-3 py-2 text-xs text-gray-700">{fee}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center text-xs font-bold text-gray-700">$$$</td>
                    <td className="border border-gray-300 px-3 py-2 text-center text-xs italic text-gray-500">included</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-2">
              Source: 2023 Private Capital Markets Report, Pepperdine University
            </p>
          </div>
        </div>
      </section>

      {/* ── GREEN NOTIFICATION BANNER ── */}
      <section className="px-4 py-0 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2" style={{ backgroundColor: "#2d5c27" }}>
            <div className="px-8 py-8 flex items-center">
              <h2 className="text-2xl font-black text-white leading-snug">
                Experts in full notification &amp; verification
              </h2>
            </div>
            <div className="px-8 py-8">
              <p className="text-xs text-white leading-relaxed opacity-90">
                Notification is the process of informing a client&apos;s customer that payments should be
                directed to our secure lockbox facility. Notification is completed by our operations
                team during the onboarding process and any time a new customer is added. This is
                standard operating procedure in the factoring industry. The <em>verification</em> process
                occurs after a client submits an invoice for factoring. We review the invoice and
                request that the customer that owes this invoice confirms the information on the
                invoice is correct and is approved for future payment to United Capital Funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Gain control ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-center mb-1" style={{ color: "#1e1e1e" }}>
            Gain control of your working capital
          </h2>
          <p className="text-sm text-gray-500 text-center mb-10">
            Gain more control over your business by choosing which invoices you&apos;d like to factor.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "First Horizon customers welcome",
                desc: "As part of our strategic partnership with First Horizon, Iberia Bank, and Capital Bank, United Capital Funding absorbs all ACH or EFT fees for current clients of First Horizon, Iberia Bank, and Capital Bank.",
              },
              {
                title: "Easily grow with us",
                desc: "Unlike a traditional bank line, we can increase your funding limit in step with your growth, without a new application or additional fee.",
              },
              {
                title: "Save time managing accounts receivable",
                desc: "With your direction, our firm contacts your customers to ensure day sales outstanding (DSO) remains compliant with the terms granted. This increases the efficiency of your invoice cycle and reduces the time spent on credit approvals, collections and debt.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-black text-sm mb-2" style={{ color: "#1e1e1e" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Startups welcome",
                desc: "Any business with non-consumer accounts receivables in place has the right structure to consider factoring. No need to worry about presenting scarce financial history.",
              },
              {
                title: "Access on-demand reports",
                desc: "Through our online portal, clients have access to comprehensive invoice and transaction reports, making it easier for you to track activity through Purchase & Advance reports, Collection reports, Aging reports, and more.",
              },
              {
                title: "Credit insurance available",
                desc: "We absorb the entire cost of credit insuring any client or prospect, including any deductible exposure. Our access to major credit insurers provides us access to information to ensure the lowest possible level of credit losses possible.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-black text-sm mb-2" style={{ color: "#1e1e1e" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Three Ways to Get Started ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border border-gray-200 rounded px-8 py-10" style={{ backgroundColor: "#f8f9f6" }}>
            <h2 className="text-xl font-black text-center mb-10" style={{ color: "#1e1e1e" }}>
              Three Ways to Get Started
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* Submit Application */}
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 8L40 12L20 32L12 36L16 28L36 8Z" fill="#2d5c27" />
                    <path d="M10 38L14 30L18 34L10 38Z" fill="#2d5c27" opacity="0.6" />
                    <circle cx="38" cy="10" r="3" fill="#8aad3a" />
                  </svg>
                </div>
                <h3 className="font-black text-sm mb-2" style={{ color: "#1e1e1e" }}>
                  Submit An Online Application
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Submitting an application takes less than 10 minutes and there is no cost to apply.
                </p>
              </div>

              {/* Submit Inquiry */}
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#2d5c27" }}
                  >
                    <span className="text-white font-black text-xl">i</span>
                  </div>
                </div>
                <h3 className="font-black text-sm mb-2" style={{ color: "#1e1e1e" }}>
                  Submit an Inquiry
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Someone from our team will reach out to you to discuss your needs and if our services may be a fit.
                </p>
              </div>

              {/* Call */}
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 8C14 8 10 12 10 18C10 30 18 38 30 38C36 38 40 34 40 34L34 28L30 30C30 30 24 26 22 18L26 14L14 8Z"
                      fill="#2d5c27"
                    />
                    <path d="M34 6C38 8 42 12 42 16" stroke="#8aad3a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M32 10C34 11 36 13 37 16" stroke="#8aad3a" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <h3 className="font-black text-sm mb-2" style={{ color: "#1e1e1e" }}>
                  Call (877) 894-8232
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Call our offices! We are open Monday to Friday between 8:30 a.m. – 5:00 p.m. Eastern Time zone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
