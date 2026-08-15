export const metadata = {
  title: "References | United Capital Funding",
  description: "Client and corporate references for United Capital Funding.",
};

export default function ReferencesPage() {
  return (
    <>
      {/* ── PAGE TITLE BANNER ── */}
      <div style={{ backgroundColor: "#ccd89c" }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="px-8 py-5" style={{ backgroundColor: "#8aad3a" }}>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
              References
            </h1>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">

          <p className="font-bold text-base leading-snug mb-4" style={{ color: "#1e1e1e" }}>
            Our funding and strategic partners are the lifeblood of United Capital Funding.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-12">
            Established in 1997, United Capital Funding has grown significantly due to support from key
            partners, such as First Horizon and our parent company Gulf Coast Bank &amp; Trust Company. The
            client and corporate references are available to you as a resource. Feel free to contact these
            individuals as you research the best funding option for your business.
          </p>

          <p className="text-sm text-gray-600 italic text-center">
            For a list of our client and corporate references, please email{" "}
            <a
              href="mailto:info@ucfunding.com"
              className="not-italic font-semibold"
              style={{ color: "#2d5c27" }}
            >
              info@ucfunding.com
            </a>
            .
          </p>

        </div>
      </section>
    </>
  );
}
