import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Team | United Capital Funding",
  description: "Meet the experienced professionals behind United Capital Funding.",
};

interface TeamMember {
  name: string;
  title: string;
  hasPhoto: boolean;
  featured?: boolean;
}

const teamMembers: TeamMember[] = [
  { name: "Ivan T. Baker", title: "Chief Executive Officer", hasPhoto: true, featured: true },
  { name: "Michele A. Caruso", title: "President & Chief Operating Officer", hasPhoto: true, featured: true },
  { name: "Steven Grant", title: "Chief Credit Officer", hasPhoto: true, featured: true },
  { name: "Jody M. Campbell", title: "Chief Financial Officer", hasPhoto: true, featured: true },
  { name: "Renee Tyack", title: "Vice President, Sales", hasPhoto: true },
  { name: "Neisha Pereira", title: "Vice President, West Region", hasPhoto: true },
  { name: "Nancy Kalman", title: "Senior Business Development Officer", hasPhoto: true },
  { name: "Matt Perkins", title: "Senior Business Development Officer", hasPhoto: true },
  { name: "Joshua Register", title: "Business Development Officer", hasPhoto: true },
  { name: "Nicholas Pittas", title: "National Sales Manager", hasPhoto: true },
  { name: "Holly Newton", title: "Vice President, Client Services", hasPhoto: false },
  { name: "Kristine Cerniglia", title: "Senior Vice President, Operations", hasPhoto: false },
  { name: "Melissa Tyre", title: "Director of Operations", hasPhoto: false },
  { name: "Tina Schaefer", title: "Senior Portfolio Manager", hasPhoto: false },
  { name: "Amanda Hendricks", title: "Portfolio Manager", hasPhoto: false },
  { name: "Brooke Rosner", title: "Portfolio Manager", hasPhoto: false },
  { name: "Donna Gonzalez", title: "Portfolio Manager", hasPhoto: false },
  { name: "Kecia Singleton", title: "Portfolio Manager", hasPhoto: false },
  { name: "Lisa Gould", title: "Portfolio Manager", hasPhoto: false },
  { name: "Stephanie Landers", title: "Portfolio Manager", hasPhoto: false },
  { name: "Brittney Morales", title: "Credit Analyst", hasPhoto: false },
  { name: "Cathy Grimes", title: "Senior Credit Analyst", hasPhoto: false },
  { name: "Jessica Simms", title: "Credit Analyst", hasPhoto: false },
  { name: "Pam Reaves", title: "Credit Analyst", hasPhoto: false },
  { name: "Cheryl Watts", title: "Accounting Manager", hasPhoto: false },
  { name: "Jean Pierre", title: "Staff Accountant", hasPhoto: false },
  { name: "Tameka Brown", title: "Account Executive", hasPhoto: false },
  { name: "Tony Russo", title: "Account Executive", hasPhoto: false },
  { name: "Stephanie Ypit", title: "Account Executive", hasPhoto: false },
];

function PhotoPlaceholder() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#d4dfc4", aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <svg viewBox="0 0 100 100" width="60%" height="60%" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <circle cx="50" cy="32" r="18" fill="#b8ccaa" />
        {/* Body */}
        <ellipse cx="50" cy="80" rx="28" ry="20" fill="#b8ccaa" />
      </svg>
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="flex flex-col"
      style={member.featured ? { border: "1px solid #ccd89c" } : {}}
    >
      {/* Photo or placeholder */}
      {member.hasPhoto ? (
        <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
          <Image
            src="/hero-right.jpg"
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>
      ) : (
        <PhotoPlaceholder />
      )}

      {/* Info */}
      <div className="p-3 bg-white">
        <p className="font-black text-sm leading-snug mb-0.5" style={{ color: "#1e1e1e" }}>
          {member.name}
        </p>
        <p className="text-xs text-gray-500 leading-tight mb-2">{member.title}</p>
        <Link
          href="#"
          className="text-xs font-bold uppercase tracking-wide"
          style={{ color: "#2d5c27" }}
        >
          Read Bio &rsaquo;
        </Link>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
        <Image
          src="/hero-right.jpg"
          alt="Our Team — United Capital Funding"
          fill
          className="object-cover object-center"
          priority
        />
        <Link href="/application" className="absolute top-0 right-0 text-white text-sm font-bold px-5 py-3 z-10" style={{ backgroundColor: "#2d5c27" }}>
          Apply Now ›
        </Link>
        <div className="absolute inset-0 flex items-end">
          <div className="px-8 py-5" style={{ background: "rgba(20,40,10,0.72)", minWidth: "200px" }}>
            <h1 className="text-3xl font-black" style={{ color: "#a8c84a" }}>
              Our Team
            </h1>
          </div>
        </div>
      </div>

      {/* ── TEAM GRID ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
