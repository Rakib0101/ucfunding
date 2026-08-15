import PageHero from "@/components/PageHero";
import Link from "next/link";
export const metadata = { title: "Referral Program | United Capital Funding" };
export default function ReferralPage() {
  return (
    <>
      <PageHero title="Referral Program" subtitle="Earn money by referring businesses to UC Funding. Our referral program rewards accountants, brokers, attorneys, and business advisors." breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Referral Program", href: "/contact/referral" }]} />
      <section className="py-20 bg-white max-w-4xl mx-auto px-4">
        <div className="bg-blue-50 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Earn Referral Fees</h2>
          <p className="text-gray-600 leading-relaxed mb-6">When you refer a business to UC Funding and they become a client, you earn a referral fee. It's that simple. Our referral program is ideal for CPAs, attorneys, financial advisors, and business consultants who work with businesses that could benefit from invoice factoring.</p>
          <Link href="/contact" className="btn-primary">Contact Us to Learn More</Link>
        </div>
      </section>
    </>
  );
}
