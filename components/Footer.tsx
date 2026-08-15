import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* CTA Strip */}
      <div style={{ backgroundColor: "#1a3a6b" }} className="py-10 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Grow Your Business?</h2>
          <p className="text-blue-200 mb-6 text-lg">Our factoring services are available nationwide. Get funded in as little as 2 days.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/application" className="btn-primary">Apply Now</Link>
            <a href="tel:8778948232" className="btn-outline" style={{ borderColor: "white", color: "white" }}>
              Call 877-894-8232
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-0 mb-4">
              <div className="bg-white text-blue-900 font-bold text-lg px-2 py-1 rounded-l">UC</div>
              <div className="border-2 border-white text-white font-bold text-lg px-2 py-1 rounded-r border-l-0">FUNDING</div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              United Capital Funding is a wholly owned subsidiary of Gulf Coast Bank &amp; Trust Company, an FDIC-insured bank headquartered in New Orleans, Louisiana.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/about/team" },
                { label: "Invoice Factoring Services", href: "/services" },
                { label: "Industries We Serve", href: "/services/industries" },
                { label: "Case Studies", href: "/services/case-studies" },
                { label: "Client Testimonials", href: "/services/testimonials" },
                { label: "FAQs", href: "/services/faqs" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors flex items-center gap-1">
                    <span className="text-yellow-500">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Industries</h4>
            <ul className="space-y-2 text-sm">
              {["Staffing", "Government", "Manufacturing", "Service Companies", "Information Technology", "Security Guard"].map((ind) => (
                <li key={ind}>
                  <Link href="/services/industries" className="hover:text-yellow-400 transition-colors flex items-center gap-1">
                    <span className="text-yellow-500">›</span> {ind}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="text-gray-400">Toll Free</div>
                  <a href="tel:8778948232" className="text-white font-semibold hover:text-yellow-400">877-894-8232</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-400">Factoring services available nationwide</div>
              </li>
              <li className="mt-4">
                <Link href="/application" className="btn-primary text-center block">Apply Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-gray-500 text-sm py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>Copyright &copy; {new Date().getFullYear()}. United Capital Funding. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/ccpa" className="hover:text-gray-300">CCPA Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
