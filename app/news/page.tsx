import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "News & Blog | United Capital Funding",
  description: "Stay up to date with the latest news, tips, and insights from United Capital Funding.",
};

const posts = [
  {
    title: "What Is Invoice Factoring and How Does It Work?",
    date: "July 15, 2026",
    category: "Education",
    excerpt: "Invoice factoring is one of the most effective ways for B2B businesses to improve cash flow without taking on debt. In this guide, we explain everything you need to know.",
    slug: "#",
  },
  {
    title: "5 Signs Your Business Needs Invoice Factoring",
    date: "June 28, 2026",
    category: "Business Tips",
    excerpt: "Is your business struggling with cash flow gaps? Here are five telltale signs that invoice factoring could be the right solution for you.",
    slug: "#",
  },
  {
    title: "The Advantage of Bank-Owned Factoring vs. Independent Factors",
    date: "June 10, 2026",
    category: "Industry Insights",
    excerpt: "Not all factoring companies are created equal. We explain the key differences between bank-owned factors like UC Funding and independent factoring companies.",
    slug: "#",
  },
  {
    title: "Invoice Factoring for Government Contractors: A Complete Guide",
    date: "May 22, 2026",
    category: "Government",
    excerpt: "Government contracts often come with long payment terms. Discover how B2G factoring can help your company maintain cash flow while serving federal, state, and local agencies.",
    slug: "#",
  },
  {
    title: "How Staffing Companies Can Use Factoring to Fund Growth",
    date: "May 5, 2026",
    category: "Staffing",
    excerpt: "Payroll gaps are the #1 challenge for staffing firms. Learn how invoice factoring eliminates this problem and allows staffing companies to scale without financial constraints.",
    slug: "#",
  },
  {
    title: "Understanding Factoring Rates: What You Need to Know",
    date: "April 18, 2026",
    category: "Education",
    excerpt: "Factoring fees can seem complex. We break down how factoring rates work, what affects them, and how to compare offers from different factoring companies.",
    slug: "#",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Resources"
        subtitle="Expert insights on invoice factoring, cash flow management, and business growth."
        breadcrumbs={[{ label: "News", href: "/news" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="border border-gray-100 rounded-xl overflow-hidden card-hover">
                <div style={{ backgroundColor: "#1a3a6b" }} className="h-2" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-yellow-100 text-yellow-700 font-semibold px-2 py-0.5 rounded">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-blue-900 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={post.slug} className="text-blue-700 font-semibold text-sm hover:text-yellow-600 transition-colors flex items-center gap-1">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12 bg-blue-50 rounded-2xl p-10">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Ready to improve your cash flow?</h3>
            <p className="text-gray-600 mb-6">Apply for invoice factoring today — it&apos;s fast, free, and no obligation.</p>
            <Link href="/application" className="btn-primary">Start Your Application</Link>
          </div>
        </div>
      </section>
    </>
  );
}
