"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const faqs = [
  {
    q: "What is invoice factoring?",
    a: "Invoice factoring (also called accounts receivable factoring) is a financial transaction where a business sells its outstanding invoices to a factoring company at a discount in exchange for immediate cash. Instead of waiting 30, 60, or 90 days for clients to pay, you get most of that money upfront.",
  },
  {
    q: "How is factoring different from a bank loan?",
    a: "Unlike a bank loan, factoring is not debt — it's the sale of an asset (your invoice). Because of this, it doesn't appear as debt on your balance sheet. Approval is based on your clients' creditworthiness, not yours, making it accessible to newer businesses or those with imperfect credit.",
  },
  {
    q: "How much of the invoice value will I receive?",
    a: "Typically, UC Funding advances 80–90% of the invoice value upfront. Once your client pays the invoice in full, you receive the remaining balance minus our small factoring fee.",
  },
  {
    q: "How quickly can I receive funding?",
    a: "After your account is set up and invoices are verified, funding is typically processed within 24–48 hours. Initial setup may take a few days depending on the information provided.",
  },
  {
    q: "What types of businesses qualify for factoring?",
    a: "Most B2B (business-to-business) and B2G (business-to-government) businesses that invoice creditworthy clients can qualify. The key factors are the creditworthiness of your clients and that the invoices are for completed work or delivered goods.",
  },
  {
    q: "Do I have to factor all of my invoices?",
    a: "No. UC Funding offers flexible programs that allow you to choose which invoices to factor. You are not required to factor every invoice you issue.",
  },
  {
    q: "What does it cost?",
    a: "Factoring fees vary based on your industry, invoice volume, and client payment terms. Because UC Funding is bank-owned, we are able to offer very competitive rates. Contact us for a personalized quote.",
  },
  {
    q: "How does being bank-owned benefit me?",
    a: "As a subsidiary of Gulf Coast Bank & Trust Company, we do not rely on outside investors for capital. This gives us a lower cost of funds that we pass directly to our clients in the form of lower factoring rates. It also means greater financial stability and reliability.",
  },
  {
    q: "Will my clients know I am factoring?",
    a: "In most cases, yes — your clients will be notified that invoices have been assigned to UC Funding and that payment should be directed to us. This is standard practice in the industry and is viewed as a normal business arrangement.",
  },
  {
    q: "Is there a minimum or maximum amount I can factor?",
    a: "We work with businesses of various sizes. There is no strict minimum, and we can accommodate high-volume clients as well. Contact us to discuss your specific needs.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-blue-900 pr-4">{q}</span>
        <svg className={`w-5 h-5 text-blue-900 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-2 bg-blue-50 border-t border-gray-100">
          <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about invoice factoring and working with UC Funding."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "FAQs", href: "/services/faqs" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
            <p className="text-blue-200 mb-6">Our factoring specialists are happy to answer any questions you have. Contact us today.</p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <a href="tel:8778948232" className="btn-outline" style={{ borderColor: "white", color: "white" }}>Call 877-894-8232</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
