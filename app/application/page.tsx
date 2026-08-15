import Link from "next/link";

export const metadata = {
  title: "Application | United Capital Funding",
  description: "Start your invoice factoring application with United Capital Funding. Fast, secure, and no obligation.",
};

export default function ApplicationPage() {
  return (
    <>
      {/* ── PAGE TITLE BANNER ── */}
      {/* Outer: light sage green background */}
      <div style={{ backgroundColor: "#ccd89c" }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Inner: darker olive green title bar */}
          <div
            className="px-8 py-5"
            style={{ backgroundColor: "#8aad3a" }}
          >
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
              Application
            </h1>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">

          {/* Instruction text */}
          <p className="text-base text-gray-700 mb-8">
            Please select &lsquo;Start An Online Application&rsquo; below to proceed to our secure online application
          </p>

          {/* CTA Button */}
          <Link
            href="#"
            className="inline-block font-bold text-white px-8 py-3 mb-8 border-2 transition-colors"
            style={{ backgroundColor: "#2d5c27", borderColor: "#2d5c27" }}
          >
            Start An Online Application
          </Link>

          {/* Fraud notice */}
          <p className="text-sm text-gray-700 mb-12 leading-relaxed">
            <strong>Did you receive a fax from &ldquo;United Capital&rdquo;?</strong>{" "}
            <em>These communications <strong>are not affiliated</strong> with our company.</em>{" "}
            Read more and learn how to report suspected fraud here:{" "}
            <a
              href="https://ucfunding.com/unitedcapitalfax/"
              className="transition-colors"
              style={{ color: "#2d5c27" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ucfunding.com/unitedcapitalfax/
            </a>
          </p>

          {/* Technical issues notice */}
          <p className="text-base text-gray-600 italic leading-relaxed">
            If you encounter technical issues while completing our online application, please visit our{" "}
            <Link
              href="#"
              className="font-semibold not-italic"
              style={{ color: "#2d5c27" }}
            >
              online application help page by clicking here
            </Link>
            .
          </p>

        </div>
      </section>
    </>
  );
}
