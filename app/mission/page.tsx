import Link from "next/link";
import PageHero from "@/components/PageHero";
import KeepExploring from "@/components/KeepExploring";

export const metadata = {
  title: "Our Mission | United Capital Partners",
  description: "United Capital Partners is dedicated to providing small businesses and middle-market companies with capital solutions that meet their specific financing needs.",
};

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Our Mission"
      />

      {/* ── MISSION BODY ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-2xl mx-auto">
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#444", lineHeight: 2, marginBottom: "24px" }}>
            United Capital Partners (&ldquo;UCP&rdquo;) is dedicated to providing small businesses and
            established middle market companies with various debt solutions that meet their specific financing
            needs. UCP can rapidly assess a client&apos;s needs, identify a product offering that fills that
            need, and expedite funding so as to coincide with its client&apos;s timeframes.
          </p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#444", lineHeight: 2, marginBottom: "24px" }}>
            UCP partners with its clients and takes a consultative approach to providing guidance to determine
            the best structure and solution that will aid them in their long-term growth and debt requirements.
            UCP strives to establish strategic and lasting relationships that allow it to offer creative
            financing solutions to its clients that contribute to their long-term success.
          </p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", color: "#444", lineHeight: 2, marginBottom: "40px" }}>
            We believe that access to capital is the foundation of growth. By combining deep industry
            expertise with a commitment to personalized service, we deliver solutions that create lasting value
            for every company we work with.
          </p>
          <Link href="/contact" className="btn-dark">
            Work With Us
          </Link>
        </div>
      </section>

      <KeepExploring />
    </>
  );
}
