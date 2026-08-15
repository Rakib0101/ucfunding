import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | United Capital Funding",
  description: "Learn about United Capital Funding — a leading provider of accounts receivable financing since 1997.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <div style={{ backgroundColor: "#ccd89c" }} className="px-0 pt-0">
        <div className="relative w-full overflow-hidden" style={{ height: "260px" }}>
          <Image
            src="/hero-right.jpg"
            alt="About Us — United Capital Funding"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Olive bar with heading overlaid at bottom-left */}
          <div className="absolute bottom-0 left-0">
            <div className="px-8 py-4" style={{ backgroundColor: "#8aad3a" }}>
              <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT UCF ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#1e1e1e" }}>
            About United Capital Funding
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            United Capital Funding Group LLC, formerly United Capital Funding Corp., is a leading provider
            of working capital throughout the U.S. which has provided more than $3 billion in funding since
            1997. As a result, we are the leading professional accounts receivable funding firm in the United
            States.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            For over 20 years, we served B2B &amp; B2G clients with equitably priced working capital. We have
            successfully collateralized invoices with most Fortune 500 companies. Accounts receivable
            financing with United Capital Funding allows you to focus on what you do best: servicing your
            customers &amp; generating new business. With proper financing from UCF today, you can operate
            freely and get where you want to be tomorrow.
          </p>

          {/* Meet Our Team button */}
          <Link
            href="/about/team"
            className="inline-block text-white text-sm font-bold px-5 py-2.5 mb-8"
            style={{ backgroundColor: "#2d5c27" }}
          >
            Meet Our Team
          </Link>

          {/* Team photo */}
          <div className="mb-2">
            <div className="relative w-full overflow-hidden" style={{ height: "280px" }}>
              <Image
                src="/hero-right.jpg"
                alt="United Capital Funding team — Go Bolts!"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-10">Go Bolts!</p>

          {/* Our Culture */}
          <h2 className="text-2xl font-black mb-4" style={{ color: "#1e1e1e" }}>
            Our Culture
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            What did our clients look for when selecting an accounts receivable factoring firm to serve them?
            A firm with the highest level of integrity &amp; proven track record of serving and supporting the
            communities where they live.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            They also look for trust, reliability and community. This list goes on and on, and we do our best to fulfill
            all of these needs and expectations. United Capital Funding operates on the principle of helping our
            clients &amp; communities grow and prosper. UCF operates with secure funding as we are a wholly owned
            subsidiary of Gulf Coast Bank &amp; Trust. Gulf Coast Bank &amp; Trust is a community-oriented FDIC-insured
            bank serving clients with the utmost respect &amp; professionalism.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            We are the leading invoice factoring company in the United States. Our services have helped{" "}
            <Link href="#" className="font-semibold" style={{ color: "#2d5c27" }}>government contractors</Link>,{" "}
            <Link href="#" className="font-semibold" style={{ color: "#2d5c27" }}>security guard companies</Link>,{" "}
            <Link href="#" className="font-semibold" style={{ color: "#2d5c27" }}>manufacturing businesses</Link>,{" "}
            <Link href="#" className="font-semibold" style={{ color: "#2d5c27" }}>staffing companies</Link>,{" "}
            <Link href="#" className="font-semibold" style={{ color: "#2d5c27" }}>information technology</Link>,{" "}
            <Link href="#" className="font-semibold" style={{ color: "#2d5c27" }}>the service industry</Link>{" "}
            and many more to operate with working capital to grow and build their businesses.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-10">
            UCF&apos;s culture focuses on continuing this community tradition by helping our clients and their
            companies grow.
          </p>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          {/* Logo in circle */}
          <div className="flex justify-center mb-6">
            <div
              className="rounded-full flex items-center justify-center"
              style={{ width: "100px", height: "100px", backgroundColor: "#f0f2ec" }}
            >
              <Image src="/logo.png" alt="United Capital Funding" width={64} height={52} className="w-16 h-auto" />
            </div>
          </div>
          <p className="text-xl font-semibold mb-3" style={{ color: "#1e1e1e" }}>
            &ldquo;Act as if what you do makes a difference. It does.&rdquo;
          </p>
          <p className="text-sm font-bold" style={{ color: "#2d5c27" }}>William James</p>
        </div>
      </section>

      {/* ── WE'RE HERE FOR YOU CTA ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2d5c27" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            We&apos;re here for you
          </h2>
          <p className="text-sm text-white mb-6 opacity-90 leading-relaxed">
            Contact our team to learn how we can help<br />your business.
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm font-bold px-5 py-2.5 border-2 border-white text-white hover:bg-white transition-colors"
            style={{ color: "white" }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
