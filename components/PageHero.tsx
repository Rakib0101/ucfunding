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
    <section style={{ backgroundColor: "#1a3a6b" }} className="py-14 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-yellow-400 transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="w-12 h-1 bg-yellow-400 mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="text-blue-200 mt-4 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
