import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section style={{ backgroundColor: "#2d5c27" }} className="py-14 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="w-12 h-1 mb-4" style={{ backgroundColor: "#8aad3a" }} />
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <Link href="/application" className="text-white text-xs font-bold px-4 py-2 shrink-0" style={{ backgroundColor: "#8aad3a" }}>
            Apply Now ›
          </Link>
        </div>
        {subtitle && <p className="text-green-100 mt-4 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
