import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Case Studies | United Capital Funding",
  description: "Real businesses, real results. See how UC Funding has helped companies across the country.",
};

interface CaseStudy {
  title: string;
  prefix?: string;
  imageLeft: boolean;
  slug: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Venture Capital-backed Cybersecurity Company Accelerates into Most Profitable Year with Non-dilutive Capital",
    imageLeft: false,
    slug: "#",
  },
  {
    title: "United Capital Funding provides post-petition Debtor-In-Possession (DIP) Financing",
    imageLeft: true,
    slug: "#",
  },
  {
    title: "It's a Win, Win! A bank line of credit, guaranteed by the SBA, was not enough for this Tennessee printing company",
    imageLeft: false,
    slug: "#",
  },
  {
    title: "Fortune 100 company's certified vendor needed capital to meet growing demand",
    imageLeft: true,
    slug: "#",
  },
  {
    title: "Pandemic-driven car sales caused growth issues for this company",
    imageLeft: false,
    slug: "#",
  },
  {
    prefix: "GOVERNMENT CONTRACTOR:",
    title: " Marketing and public relations firm needed liquid capital for advertising",
    imageLeft: true,
    slug: "#",
  },
  {
    prefix: "GOVERNMENT CONTRACTOR:",
    title: " Restrictive bank financing held back this IT staffing company",
    imageLeft: false,
    slug: "#",
  },
  {
    prefix: "GOVERNMENT CONTRACTOR:",
    title: " Department of Defense contractor needed liquid capital",
    imageLeft: true,
    slug: "#",
  },
  {
    title: "Sporting goods company needed liquid capital after securing a major new customer",
    imageLeft: false,
    slug: "#",
  },
];

function CaseStudyRow({ cs }: { cs: CaseStudy }) {
  const textBlock = (
    <div className="flex flex-col justify-center py-6 px-4">
      <p className="text-sm font-semibold leading-snug mb-4" style={{ color: "#1e1e1e" }}>
        {cs.prefix && (
          <strong className="font-black">{cs.prefix}</strong>
        )}
        {cs.title}
      </p>
      <div>
        <Link
          href={cs.slug}
          className="inline-block text-white text-xs font-bold px-4 py-2"
          style={{ backgroundColor: "#2d5c27" }}
        >
          View Case Study
        </Link>
      </div>
    </div>
  );

  const imageBlock = (
    <div className="relative shrink-0" style={{ width: "220px", height: "160px" }}>
      <Image
        src="/hero-right.jpg"
        alt=""
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <div className="flex items-center gap-0 border-b border-gray-100 py-2">
      {cs.imageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── PAGE TITLE BANNER ── */}
      <div style={{ backgroundColor: "#ccd89c" }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="px-8 py-5" style={{ backgroundColor: "#8aad3a" }}>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
              Case Studies
            </h1>
          </div>
        </div>
      </div>

      {/* ── CASE STUDY LIST ── */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          {caseStudies.map((cs, i) => (
            <CaseStudyRow key={i} cs={cs} />
          ))}
        </div>
      </section>
    </>
  );
}
