import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="United Capital Partners"
            width={44}
            height={44}
            className="object-contain"
          />
          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#999", fontWeight: 500, lineHeight: 1.4 }}>
            United Capital<br />Partners LLC
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "About", href: "/about" },
            { label: "Products", href: "/products" },
            { label: "Transactions", href: "/transactions" },
            { label: "News", href: "/news" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, color: "#555", textDecoration: "none" }}
              className="hover:text-black transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-dark">
          Work With Us
        </Link>
      </div>
    </header>
  );
}
