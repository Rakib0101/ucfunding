import PageHero from "@/components/PageHero";
export const metadata = { title: "References | United Capital Funding" };
export default function ReferencesPage() {
  return (
    <>
      <PageHero title="References" subtitle="UC Funding is proud to be recognized by leading industry organizations." breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "References", href: "/about/references" }]} />
      <section className="py-20 bg-white max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed">
        <p>We adhere to the Code of Ethics set forth by our industry associations and are proud of the trust our clients and partners have placed in us. Contact us for professional references or to speak with current clients.</p>
      </section>
    </>
  );
}
