"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Team", href: "/about/team" },
      { label: "Our Financials", href: "/about/financials" },
      { label: "Social Responsibility", href: "/about/social-responsibility" },
      { label: "References", href: "/about/references" },
    ],
  },
  {
    label: "Invoice Factoring Services",
    href: "/services",
    children: [
      { label: "Benefits", href: "/services/benefits" },
      { label: "Industries We Serve", href: "/services/industries" },
      { label: "Case Studies", href: "/services/case-studies" },
      { label: "Client Testimonials", href: "/services/testimonials" },
      { label: "FAQs", href: "/services/faqs" },
    ],
  },
  { label: "Application", href: "/application", children: [] },
  { label: "News", href: "/news", children: [] },
  {
    label: "Contact Us",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Referral Program", href: "/contact/referral" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full shadow-md relative z-50">
      {/* Top Bar */}
      <div style={{ backgroundColor: "#1a3a6b" }} className="text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Toll Free: <strong>877-894-8232</strong>
          </span>
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-yellow-300 transition-colors">Client Login</a>
            <Link href="/application" className="bg-yellow-500 text-blue-900 font-bold px-4 py-1 rounded text-sm hover:bg-yellow-400 transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <div style={{ backgroundColor: "#1a3a6b" }} className="text-white font-bold text-xl px-3 py-2 rounded-l">
                UC
              </div>
              <div className="border-2 border-l-0 text-blue-900 font-bold text-xl px-3 py-2 rounded-r" style={{ borderColor: "#1a3a6b" }}>
                FUNDING
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="nav-item relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-900 transition-colors"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children.length > 0 && (
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="w-full flex justify-between items-center px-4 py-3 text-sm font-semibold text-gray-700 border-b hover:bg-gray-50"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <svg className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {openDropdown === item.label && item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block px-8 py-2 text-sm text-gray-600 border-b hover:bg-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="p-4 flex flex-col gap-2">
              <a href="#" className="btn-secondary text-center">Client Login</a>
              <Link href="/application" className="btn-primary text-center">Apply Now</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
