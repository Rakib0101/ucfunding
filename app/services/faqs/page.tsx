"use client";

import { useState } from "react";
import Link from "next/link";

export default function FaqsPage() {
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "Is United Capital Funding the same as United Capital or the company sending fax loan offers?",
      a: (
        <div className="grid md:grid-cols-2 gap-6">
          <p className="text-sm font-bold text-gray-800 leading-relaxed">
            No. United Capital Funding is not affiliated with any entity calling itself &ldquo;United Capital&rdquo; that is
            sending unsolicited fax loan offers.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            We do not send loan offers via fax and do not request sensitive information through unsecure
            methods. If you received one of these faxes, we recommend that you do not respond. If you feel
            that this fax is fraudulent, report it to the FTC at{" "}
            <a
              href="https://reportfraud.ftc.gov"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2d5c27" }}
              className="underline"
            >
              www.reportfraud.ftc.gov
            </a>
            .
          </p>
        </div>
      ),
    },
    {
      q: "What is factoring (accounts receivable financing)?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Invoice factoring is the purchase of accounts receivable. A factoring company purchases your outstanding invoices and advances you a percentage of the invoice value immediately — typically 80–90%. Once your customer pays the invoice, you receive the remaining balance minus a small factoring fee. It is not a loan.</p>,
    },
    {
      q: "What is the difference between a factor and a broker?",
      a: <p className="text-sm text-gray-700 leading-relaxed">A factoring company directly purchases your invoices and provides funding from its own capital. A broker acts as an intermediary, referring you to a factoring company and earning a commission. United Capital Funding is a direct factor — we fund directly from our own capital with no middlemen.</p>,
    },
    {
      q: "How is factoring different from a traditional bank loan?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Factoring is the sale of an asset, not a loan. It does not add debt to your balance sheet. Approval is based primarily on the creditworthiness of your customers, not your business. This means startups, businesses with limited credit history, or companies with past financial difficulties may still qualify.</p>,
    },
    {
      q: "Can I factor if I have an outstanding bank loan or line of credit?",
      a: <p className="text-sm text-gray-700 leading-relaxed">In many cases, yes. If your bank holds a lien on your accounts receivable, they may need to subordinate or release that lien before factoring can begin. United Capital Funding has extensive experience working through these situations and can guide you through the process.</p>,
    },
    {
      q: "Who is United Capital Funding owned by?",
      a: <p className="text-sm text-gray-700 leading-relaxed">United Capital Funding Group LLC is a wholly owned subsidiary of Gulf Coast Bank &amp; Trust Company, an FDIC-insured financial institution headquartered in New Orleans, Louisiana.</p>,
    },
    {
      q: "What is United Capital Funding's source of capital?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Our capital comes directly from Gulf Coast Bank &amp; Trust Company, our FDIC-insured parent bank. This means we do not rely on outside investors or hedge funds for our funding — providing stability and competitive rates for our clients.</p>,
    },
    {
      q: "What industries does United Capital Funding work in?",
      a: <p className="text-sm text-gray-700 leading-relaxed">We serve a wide range of B2B and B2G industries including staffing, government contracting, manufacturing, information technology, security guard companies, and service businesses. If your business invoices creditworthy customers, we can likely help.</p>,
    },
    {
      q: "What are UC Funding's fees?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Our factoring fees are competitive and transparent with no hidden add-on charges. Unlike many competitors, we do not charge due diligence fees, filing fees, lockbox fees, application fees, credit checking fees, UCC search fees, or account setup fees. Contact us for a personalized rate quote.</p>,
    },
    {
      q: "Will you check my credit?",
      a: <p className="text-sm text-gray-700 leading-relaxed">We focus primarily on the creditworthiness of your customers, not your business. We may perform a soft background review on your company, but the approval decision is largely based on who owes you money — not your personal or business credit score.</p>,
    },
    {
      q: "Do you work with startups (new businesses)?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Yes. Any business with accounts receivable from creditworthy commercial or government customers can qualify for factoring — regardless of how long you have been in business. We do not require a lengthy financial history.</p>,
    },
    {
      q: "My company is not in financial trouble; can I still use a factor?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Absolutely. Many of our clients are healthy, growing businesses that use factoring as a strategic tool to accelerate growth, take on larger contracts, or simply improve cash flow without taking on bank debt. Factoring is a mainstream financial tool, not a last resort.</p>,
    },
    {
      q: "How long does it take to begin factoring?",
      a: <p className="text-sm text-gray-700 leading-relaxed">The onboarding process typically takes 3–7 business days depending on the complexity of your business and how quickly documentation is provided. Once your account is established, ongoing funding is processed within 24–48 hours of invoice submission.</p>,
    },
    {
      q: "Do I need to factor every month?",
      a: <p className="text-sm text-gray-700 leading-relaxed">No. We offer flexible programs with no monthly minimums. You can factor as much or as little as you need. There is no obligation to submit invoices every month.</p>,
    },
    {
      q: "Do I need to sell all of my accounts receivables?",
      a: <p className="text-sm text-gray-700 leading-relaxed">No. You choose which invoices to submit for factoring. You can selectively factor only the invoices you need to convert to cash, keeping others to manage on your own.</p>,
    },
    {
      q: "Will my customer know that I'm factoring?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Yes. In a notification factoring arrangement, your customers are notified that their invoice has been assigned to United Capital Funding and that payment should be directed to our lockbox. This is standard practice in the industry and does not affect your customer relationship.</p>,
    },
    {
      q: "What is notification in AR Factoring?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Notification is the process of informing your customer that their invoice has been assigned to United Capital Funding and that payment should be sent directly to our secure lockbox facility. Notification is completed during the onboarding process and any time a new customer is added to your account.</p>,
    },
    {
      q: "What is verification in AR Factoring?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Verification is the process we use to confirm that an invoice is valid before funding. After you submit an invoice for factoring, we contact your customer to confirm that the goods or services have been received and that the invoice is approved for payment. This protects both you and us from fraudulent or disputed invoices.</p>,
    },
    {
      q: "What is a debtor in AR Factoring?",
      a: <p className="text-sm text-gray-700 leading-relaxed">In accounts receivable factoring, the &ldquo;debtor&rdquo; is your customer — the company or government agency that owes you money on the invoice. United Capital Funding purchases the right to collect that payment from the debtor.</p>,
    },
    {
      q: "Where do the payments go after we begin?",
      a: <p className="text-sm text-gray-700 leading-relaxed">After notification, your customers are directed to send all payments to United Capital Funding&apos;s secure lockbox. When payment is received, we apply it against your outstanding balance and release any remaining reserve funds (the portion held back at the time of advance) to your account.</p>,
    },
    {
      q: "What happens if I get a check sent to me by mistake?",
      a: <p className="text-sm text-gray-700 leading-relaxed">If a customer sends payment directly to you after factoring has begun, you are required to forward those funds to United Capital Funding promptly. Your account agreement will outline the specific procedures and timeframes for handling misdirected payments.</p>,
    },
    {
      q: "How do I know if one of my customers has paid?",
      a: <p className="text-sm text-gray-700 leading-relaxed">Through our online client portal, you have real-time access to all of your account activity including invoice status, payments received from customers, advances made to you, and current reserve balances. You can run reports at any time.</p>,
    },
    {
      q: "What happens if my customer doesn't pay an invoice?",
      a: <p className="text-sm text-gray-700 leading-relaxed">United Capital Funding offers recourse factoring programs, which means that if your customer does not pay an invoice within a specified period, you may be required to repurchase it or replace it with a new invoice of equal value. We also offer credit insurance options to protect against non-payment losses.</p>,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <>
      {/* ── PAGE TITLE BANNER ── */}
      <div style={{ backgroundColor: "#ccd89c" }} className="py-6 px-4 relative">
        <Link href="/application" className="absolute top-0 right-0 text-white text-sm font-bold px-5 py-3 z-10" style={{ backgroundColor: "#2d5c27" }}>
          Apply Now ›
        </Link>
        <div className="max-w-7xl mx-auto">
          <div className="px-8 py-5" style={{ backgroundColor: "#8aad3a" }}>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
              FAQs
            </h1>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-2" style={{ color: "#1e1e1e" }}>
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            To help our clients and those new to factoring, here are some of the most commonly asked
            questions and brief answers to get you started.
          </p>

          {/* Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border border-gray-200 mb-1">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left bg-white"
                  >
                    <span className="text-sm font-semibold pr-4 leading-snug" style={{ color: "#1e1e1e" }}>
                      {faq.q}
                    </span>
                    <span
                      className="shrink-0 w-8 h-8 flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: "#2d5c27" }}
                    >
                      {isOpen ? "∧" : "∨"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 py-4 border-t border-gray-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
