import Link from "next/link";
import PageHero from "@/components/PageHero";
import KeepExploring from "@/components/KeepExploring";

export const metadata = {
  title: "News & Updates | United Capital Partners",
  description: "The latest news, transactions, and announcements from United Capital Partners.",
};

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const news: NewsItem[] = [
  { title: "United Capital Secures Terms for up to $6.3MM", date: "July 01, 2020", excerpt: "United Capital Partners recently secured a $6.3MM credit facility for a high-growth technology company.", slug: "#" },
  { title: "United Capital Secures Terms for $3.5MM Line of Credit & Term Debt", date: "July 18, 2020", excerpt: "UCP structured a combined $3.5MM credit and term debt facility for a regional services firm.", slug: "#" },
  { title: "United Capital Secures Terms for $5.5MM Bridging Equity Investment", date: "December 25, 2020", excerpt: "UCP closed a $5.5MM bridging equity investment to support a Midwest manufacturer.", slug: "#" },
  { title: "United Capital Secures $4MM Equipment Leasing for Customer", date: "September 26, 2020", excerpt: "A new $4MM equipment lease facility was structured for a growing distribution business.", slug: "#" },
  { title: "United Capital Secures $500K Term Line Of Credit for an AI Driven Care to Nurse Matching Technology", date: "December 20, 2020", excerpt: "UCP provided a $500K term facility to an innovative healthcare staffing technology company.", slug: "#" },
  { title: "United Capital Announces Completion of an $8 Million Purchase Order Finance Facility", date: "March 21, 2020", excerpt: "UCP completed an $8 million purchase order finance facility for a federal government supplier.", slug: "#" },
  { title: "United Capital Partners Sources $3.3MM Real Estate Financing Offer", date: "September 01, 2021", excerpt: "UCP sourced a $3.3MM real estate bridge financing solution for a commercial property transaction.", slug: "#" },
  { title: "United Capital Secures Terms for a $500MM Term Debt & Growth Capital Facility", date: "January 09, 2021", excerpt: "A major growth capital milestone — UCP structured a $500MM facility for a scaling enterprise.", slug: "#" },
  { title: "United Capital Partners Sources $6MM Debt Refinancing Line", date: "December 26, 2020", excerpt: "UCP sources $6MM debt refinancing for a manufacturing client seeking lower cost of capital.", slug: "#" },
  { title: "United Capital Partners Sources $4MM Growth-ph Capital Funding", date: "June 8, 2021", excerpt: "UCP sourced $4MM in growth-phase capital for an emerging consumer technology company.", slug: "#" },
  { title: "United Capital Partners Sources $8MM Venture Equipment Lease Line", date: "June 8, 2021", excerpt: "A $8MM venture equipment lease line was arranged for a venture-backed hardware startup.", slug: "#" },
  { title: "United Capital Partners Sources $5MM Revolving Line of Credit for a Fast Growing Specialty Pharmaceutical Manufacturing Entity", date: "November 8, 2021", excerpt: "UCP arranged a $5MM revolving credit facility for a specialty pharma manufacturer.", slug: "#" },
  { title: "United Capital Partners Successfully Places $60MM Venture Equipment Lease Line for Fast Growing Specialty Pharmaceutical Manufacturing Entity", date: "August 2, 2019", excerpt: "UCP placed a $60MM venture equipment lease for a large-scale pharmaceutical manufacturer.", slug: "#" },
  { title: "United Capital Partners Successfully Secures $60MM AR Revolving LOC", date: "August 8, 2019", excerpt: "UCP closed a $60MM accounts receivable revolving line of credit.", slug: "#" },
  { title: "United Capital Partners Successfully Secures $15MM Line of Credit", date: "August 2, 2019", excerpt: "A $15MM line of credit was secured for a mid-market services company.", slug: "#" },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Press releases & updates"
        title="News & Updates"
        ctaText="View Press Releases"
        ctaHref="#news-grid"
      />

      {/* ── NEWS GRID ── */}
      <section id="news-grid" className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {news.map(({ title, date, excerpt, slug }) => (
              <article key={title} style={{ borderTop: "1px solid #e8e4dc", paddingTop: "20px" }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#aaa", marginBottom: "10px" }}>
                  {date}
                </p>
                <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "1.1rem", fontWeight: 500, color: "#111", lineHeight: 1.35, marginBottom: "10px" }}>
                  <Link href={slug} className="hover:opacity-70 transition-opacity">
                    {title}
                  </Link>
                </h2>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.78rem", color: "#888", lineHeight: 1.8 }}>
                  {excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* ── PAGINATION ── */}
          <div className="flex items-center justify-center gap-2 mt-16">
            {[1, 2, 3].map((p) => (
              <Link
                key={p}
                href="#"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "0.75rem",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: p === 1 ? "1px solid #111" : "1px solid #ddd",
                  color: p === 1 ? "#111" : "#aaa",
                  textDecoration: "none",
                }}
              >
                {p}
              </Link>
            ))}
            <span style={{ color: "#ccc", fontSize: "0.75rem" }}>&rsaquo;</span>
          </div>
        </div>
      </section>

      <KeepExploring />
    </>
  );
}
