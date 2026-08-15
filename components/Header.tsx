"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <header className="w-full shadow-sm relative z-50 bg-white">
      {/* Main Nav Row */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between" style={{ minHeight: "72px" }}>
          {/* Logo — LEFT */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-2.svg"
              alt="United Capital Funding — Intelligent Working Capital"
              width={200}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav — CENTER/RIGHT */}
          <div className="hidden lg:flex items-center gap-1 ml-auto mr-4">
            {navItems.map((item) => (
              <div key={item.label} className="nav-item relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-green-800 transition-colors whitespace-nowrap"
                  style={{ color: "#333" }}
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

            {/* Search icon */}
            <button className="px-2 py-2 text-gray-500 hover:text-gray-700" aria-label="Search">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Client Login button */}
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm font-bold text-white px-4 py-2 rounded-full ml-2"
              style={{ backgroundColor: "#1e1e1e" }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Client Login
            </a>
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

        {/* Apply Now bar — right-aligned, below nav */}
        <div className="hidden lg:flex justify-end max-w-7xl mx-auto px-4 pb-2">
          <Link
            href="/application"
            className="text-white text-sm font-bold px-5 py-1.5 rounded-sm flex items-center gap-1"
            style={{ backgroundColor: "#2d5c27" }}
          >
            Apply Now &rsaquo;
          </Link>
        </div>
      </nav>

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
                  <svg
                    className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {openDropdown === item.label &&
                item.children.map((child) => (
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
    </header>
  );
}
