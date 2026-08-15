import PageHero from "@/components/PageHero";
export const metadata = { title: "Social Responsibility | United Capital Funding" };
export default function SocialPage() {
  return (
    <>
      <PageHero title="Social Responsibility" subtitle="UC Funding is committed to making a positive impact in the communities we serve." breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Social Responsibility", href: "/about/social-responsibility" }]} />
      <section className="py-20 bg-white max-w-4xl mx-auto px-4 text-gray-700 leading-relaxed">
        <p>At United Capital Funding, we believe that business success and community responsibility go hand in hand. We are proud to support small and minority-owned businesses through accessible factoring programs that help level the playing field.</p>
      </section>
    </>
  );
}
