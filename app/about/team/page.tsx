import PageHero from "@/components/PageHero";
export const metadata = { title: "Our Team | United Capital Funding" };
export default function TeamPage() {
  return (
    <>
      <PageHero title="Our Team" subtitle="Meet the experienced professionals behind United Capital Funding." breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Our Team", href: "/about/team" }]} />
      <section className="py-20 bg-white max-w-7xl mx-auto px-4">
        <p className="text-gray-600 text-center text-lg">Our team of factoring specialists brings decades of combined experience in financial services, banking, and business lending. <a href="/contact" className="text-blue-700 underline">Contact us</a> to speak with a specialist.</p>
      </section>
    </>
  );
}
