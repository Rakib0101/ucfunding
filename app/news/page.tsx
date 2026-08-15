import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "News | United Capital Funding",
  description: "Stay up to date with the latest news, case studies, and insights from United Capital Funding.",
};

type Category = "CASE STUDY" | "RESOURCE" | "NOTICE" | null;

interface Article {
  title: string;
  date: string;
  category: Category;
  author: string;
  excerpt: string;
  hasImage: boolean;
  slug: string;
}

const articles: Article[] = [
  {
    title: "CASE STUDY: Aerospace Contractor Accelerates Government Contract Growth",
    date: "June 17, 2026",
    category: "CASE STUDY",
    author: "ucfunding",
    excerpt:
      "Background Credit facilities Accounts Receivable Financing Facility United Capital Funding Purchase Order Financing Facility SnapCap Partners Industry Aerospace, defense logistics parts and supply chain services Customer Type U.S. government agency General Description Parts, packaging, labeling, and end-to-end logistics services Business Challenges Meet All Financing As awarded contract volume increased, this aerospace and defense logistics company experienced growing working capital pressure driven by [...]",
    hasImage: true,
    slug: "#",
  },
  {
    title: "Important Notice: Fax Alert – United Capital Fax",
    date: "May 10, 2025",
    category: "NOTICE",
    author: "ucfunding",
    excerpt:
      'United Capital Funding has recently become aware of faxes being sent to individuals and businesses offering financial solutions under the name "United Capital." These communications are not affiliated with our company, United Capital Funding. If you received a fax that mentions "United Capital" (not "United Capital Funding") Requests sensitive personal or financial information Lists unverified [...]',
    hasImage: false,
    slug: "#",
  },
  {
    title: "Subordinating an SBA Lien (EIDL)",
    date: "January 9, 2025",
    category: "RESOURCE",
    author: "ucfunding",
    excerpt:
      "Subordinating an SBA lien is a routine operation for United Capital Funding. Allow our expertise to guide you through this procedure as we establish a factoring relationship. Estimated reading time: 3 minutes What is a lien? How do I know what liens are on my business? What does it mean to subordinate a lien? Why should [...]",
    hasImage: true,
    slug: "#",
  },
  {
    title: "CASE STUDY: V.C.-backed Cybersecurity Company Enters Most Profitable Year with Non-dilutive Capital",
    date: "December 19, 2024",
    category: "CASE STUDY",
    author: "ucfunding",
    excerpt:
      "Credit facility limit $2,000,000 General description: Cybersecurity State of Formation: Virginia Customer type: U.S. Federal Government and Large Commercial Customers This Virginia-based cybersecurity company has developed and deployed their sensitive technology and demonstrated proven results with their customers. As a result of the technology's market acceptance, they are expecting to quadruple sales and achieve [...]",
    hasImage: true,
    slug: "#",
  },
  {
    title: "Government Invoice Factoring in 5 Easy Steps",
    date: "November 7, 2024",
    category: null,
    author: "ucfunding",
    excerpt:
      "Landing a government contract for any business can be exciting. It means reliable streams of income to support your business. But, because the nature of these contracts is very complicated, it usually takes some time before you will see results. That's where government invoice factoring comes in. At United Capital Funding, we provide working capital for your business so that you have the money to operate while you are waiting for your invoices to be paid. We are a simple way to turn your accounts receivable into working capital for your business.",
    hasImage: true,
    slug: "#",
  },
  {
    title: "CASE STUDY: California Government Contractor Navigates Financial Turbulence with Strategic Capital Solution",
    date: "October 16, 2024",
    category: "CASE STUDY",
    author: "ucfunding",
    excerpt:
      "This California-based government subcontractor specializing in metal surface finishing was experiencing rapid growth. Although revenue was on the rise, the company faced losses in the previous year and aimed to reach a break-even point by the end of the current year.",
    hasImage: true,
    slug: "#",
  },
  {
    title: "CASE STUDY: DoD Contractor Fulfills Nine-Figure Contract with New Capital Partner",
    date: "September 5, 2024",
    category: "CASE STUDY",
    author: "ucfunding",
    excerpt:
      "This California-based manufacturing company provides outdoor gear to both Federal government agencies and sizable prime contractors. The company was recently awarded a nine-figure federal contract to be fulfilled over several years. While this contract award will substantially increase its current revenue and previous levels of production, it does create an increasing demand for working capital to support its operations.",
    hasImage: true,
    slug: "#",
  },
  {
    title: "CASE STUDY: New York Government Contractor Navigates Federal Regulatory Challenges",
    date: "July 19, 2024",
    category: "CASE STUDY",
    author: "ucfunding",
    excerpt:
      "This New York-based government contractor was engaged in a multi-year agreement with the U.S. Department of Labor, focusing on education and training support. However, new regulations significantly raised operational costs, resulting in the company's first-ever net loss.",
    hasImage: true,
    slug: "#",
  },
  {
    title: "Why is a Factoring Company Better Than A Broker in 2024?",
    date: "June 25, 2024",
    category: null,
    author: "ucfunding",
    excerpt:
      "Factoring is the purchase of account receivables. A third-party financial business—a factoring company—takes over your unpaid invoices by paying you the amount that's due, minus one small fee. Factoring can be especially useful for Business-to-Business (B2B) or business-to-government (B2G) invoices. It is not a loan and factoring companies are not banks or brokers. It frees up money that's already yours.",
    hasImage: true,
    slug: "#",
  },
  {
    title: "CASE STUDY: Tech Government Contractor Secures New Capital Provider to Fuel Growth",
    date: "April 22, 2024",
    category: "CASE STUDY",
    author: "ucfunding",
    excerpt:
      "Having recently undergone acquisition by a larger corporation, this California-based tech company specializes in developing interactive electronic tech support and crafting tech manuals crucial for supporting business and government operations.",
    hasImage: true,
    slug: "#",
  },
];

function CategoryTag({ category }: { category: Category }) {
  if (!category) return null;
  return (
    <div
      className="absolute bottom-0 left-0 px-3 py-1.5"
      style={{ backgroundColor: "rgba(10,30,10,0.75)" }}
    >
      <span className="text-xs font-bold text-white uppercase tracking-wider">{category}</span>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex flex-col border border-gray-200 bg-white">
      {/* Image area */}
      {article.hasImage ? (
        <div className="relative w-full" style={{ height: "180px" }}>
          <div className="absolute inset-0 bg-gray-300" />
          <CategoryTag category={article.category} />
        </div>
      ) : (
        /* No-image notice card — light background with category tag row */
        article.category === "NOTICE" && (
          <div
            className="px-4 pt-4 pb-2"
          >
            <span
              className="text-xs font-bold px-2 py-1 rounded"
              style={{ backgroundColor: "#f5f0d0", color: "#7a6a00" }}
            >
              IMPORTANT NOTICE
            </span>
          </div>
        )
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-gray-500 mb-1">{article.date}</p>
        <h2 className="font-black text-base mb-1 leading-snug" style={{ color: "#1e1e1e" }}>
          <Link href={article.slug} className="hover:underline" style={{ color: "#1e1e1e" }}>
            {article.title}
          </Link>
        </h2>
        <p className="text-xs text-gray-500 mb-3">by {article.author}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
          {article.excerpt}
        </p>
        <div>
          <Link
            href={article.slug}
            className="inline-block text-white text-xs font-bold px-4 py-2 rounded-sm"
            style={{ backgroundColor: "#2d5c27" }}
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function NewsPage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
        <Image
          src="/hero-right.jpg"
          alt="News — United Capital Funding"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay bottom-left with "News" label */}
        <Link href="/application" className="absolute top-0 right-0 text-white text-sm font-bold px-5 py-3 z-10" style={{ backgroundColor: "#2d5c27" }}>
          Apply Now ›
        </Link>
        <div className="absolute inset-0 flex items-end">
          <div className="px-8 py-5" style={{ background: "rgba(20,40,10,0.72)", minWidth: "180px" }}>
            <h1 className="text-3xl font-black" style={{ color: "#a8c84a" }}>
              News
            </h1>
          </div>
        </div>
      </div>

      {/* ── "News" category badge ── */}
      <div className="flex justify-center py-6 bg-white border-b border-gray-100">
        <span
          className="text-white text-sm font-bold px-6 py-2 rounded-sm"
          style={{ backgroundColor: "#2d5c27" }}
        >
          News
        </span>
      </div>

      {/* ── ARTICLE GRID ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>

          {/* ── PAGINATION ── */}
          <div className="flex items-center justify-center gap-1 mt-12">
            {[1, 2, 3, 4, 5].map((page) => (
              <Link
                key={page}
                href="#"
                className="w-8 h-8 flex items-center justify-center text-sm font-semibold border border-gray-300 rounded-sm hover:bg-gray-100 transition-colors"
                style={page === 1 ? { backgroundColor: "#2d5c27", color: "white", borderColor: "#2d5c27" } : { color: "#333" }}
              >
                {page}
              </Link>
            ))}
            <span className="w-8 h-8 flex items-center justify-center text-sm text-gray-500">...</span>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center text-sm font-semibold border border-gray-300 rounded-sm hover:bg-gray-100 transition-colors"
              style={{ color: "#333" }}
            >
              19
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 px-3 h-8 text-sm font-bold border border-gray-300 rounded-sm hover:bg-gray-100 transition-colors ml-1"
              style={{ color: "#2d5c27" }}
            >
              NEXT &rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
