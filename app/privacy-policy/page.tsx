import PageHero from "@/components/PageHero";

export const metadata = { title: "Privacy Policy | United Capital Funding" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed space-y-4">
          <p>United Capital Funding is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information. By using our website, you consent to the practices described in this policy.</p>
          <p>For questions about this policy, please <a href="/contact" className="text-blue-700 underline">contact us</a>.</p>
        </div>
      </section>
    </>
  );
}
