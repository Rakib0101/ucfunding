import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111" }} className="text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="UCP"
              width={52}
              height={52}
              className="object-contain mb-4 invert opacity-80"
            />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#666", marginBottom: "16px" }}>
              United Capital Partners LLC
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#555", marginBottom: "20px" }}>
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Transactions", href: "/transactions" },
                { label: "News", href: "/news" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#aaa", textDecoration: "none" }} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#555", marginBottom: "20px" }}>
              Resources
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/products" style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#aaa", textDecoration: "none" }} className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/transactions" style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#aaa", textDecoration: "none" }} className="hover:text-white transition-colors">
                  Transactions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#555", marginBottom: "20px" }}>
              Address
            </p>
            <address style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#aaa", fontStyle: "normal", lineHeight: 1.8 }}>
              700 Milam St, 14th Floor<br />
              Houston, TX 77002<br />
              United States
            </address>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #222" }}>
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.65rem", color: "#444", letterSpacing: "0.06em" }}>
            © 2024 UNITED CAPITAL PARTNERS LLC | PRIVACY POLICY | WEBSITE BY PARABOLIX CREATIVE CO.
          </p>
        </div>
      </div>
    </footer>
  );
}
