import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | United Capital Funding",
  description: "UC Funding provides invoice factoring for staffing, government, manufacturing, IT, security, and service companies.",
};

function StaffingIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="12" r="5" fill="#2d5c27" />
      <circle cx="26" cy="12" r="5" fill="#2d5c27" />
      <circle cx="20" cy="10" r="6" fill="#2d5c27" />
      <ellipse cx="20" cy="30" rx="12" ry="7" fill="#2d5c27" />
      <ellipse cx="10" cy="28" rx="7" ry="5" fill="#2d5c27" opacity="0.7" />
      <ellipse cx="30" cy="28" rx="7" ry="5" fill="#2d5c27" opacity="0.7" />
    </svg>
  );
}

function GovernmentIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="18" width="24" height="16" rx="1" fill="#2d5c27" />
      <rect x="10" y="20" width="4" height="6" fill="white" opacity="0.8" />
      <rect x="18" y="20" width="4" height="6" fill="white" opacity="0.8" />
      <rect x="26" y="20" width="4" height="6" fill="white" opacity="0.8" />
      <rect x="15" y="28" width="10" height="6" fill="white" opacity="0.8" />
      <polygon points="20,4 6,18 34,18" fill="#2d5c27" />
      <rect x="18" y="2" width="4" height="4" fill="#2d5c27" />
    </svg>
  );
}

function ManufacturingIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="20" width="32" height="14" rx="1" fill="#2d5c27" />
      <rect x="6" y="14" width="8" height="6" fill="#2d5c27" />
      <rect x="26" y="10" width="8" height="10" fill="#2d5c27" />
      <rect x="8" y="24" width="4" height="6" fill="white" opacity="0.7" />
      <rect x="18" y="24" width="4" height="6" fill="white" opacity="0.7" />
      <rect x="28" y="24" width="4" height="6" fill="white" opacity="0.7" />
      <circle cx="30" cy="10" r="4" fill="#2d5c27" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 26C6 24 8 22 11 22L16 26C18 28 22 28 24 26L29 22C32 22 34 24 34 26V28H6V26Z"
        fill="#2d5c27"
      />
      <path
        d="M14 22L20 18L26 22"
        stroke="#2d5c27" strokeWidth="2" fill="none"
      />
      <circle cx="20" cy="15" r="5" fill="#2d5c27" opacity="0.3" />
    </svg>
  );
}

function ITIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0,1,2,3].map(row =>
        [0,1,2,3].map(col => (
          <rect
            key={`${row}-${col}`}
            x={8 + col * 7}
            y={8 + row * 7}
            width="5"
            height="5"
            rx="1"
            fill="#2d5c27"
            opacity={((row + col) % 2 === 0) ? "1" : "0.4"}
          />
        ))
      )}
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="12" r="7" fill="#2d5c27" />
      <ellipse cx="20" cy="30" rx="11" ry="8" fill="#2d5c27" />
      <rect x="16" y="6" width="8" height="4" rx="1" fill="white" opacity="0.6" />
      <rect x="17" y="25" width="6" height="8" rx="1" fill="white" opacity="0.5" />
    </svg>
  );
}

const industries = [
  { name: "Staffing", icon: <StaffingIcon />, href: "#" },
  { name: "Government", icon: <GovernmentIcon />, href: "#" },
  { name: "Manufacturing", icon: <ManufacturingIcon />, href: "#" },
  { name: "Service", icon: <ServiceIcon />, href: "#" },
  { name: "Information Technology", icon: <ITIcon />, href: "#" },
  { name: "Security Guard", icon: <SecurityIcon />, href: "#" },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ── PAGE TITLE BANNER ── */}
      <div style={{ backgroundColor: "#ccd89c" }} className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="px-8 py-5" style={{ backgroundColor: "#8aad3a" }}>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#2d5c27" }}>
              Industries We Serve
            </h1>
          </div>
        </div>
      </div>

      {/* ── INDUSTRY GRID ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-semibold text-base mb-8" style={{ color: "#1e1e1e" }}>
            Select an industry to learn more
          </h2>

          {/* Gray container */}
          <div className="rounded p-6" style={{ backgroundColor: "#f0f2ec" }}>
            <div className="grid grid-cols-3 gap-4">
              {industries.map((ind) => (
                <a
                  key={ind.name}
                  href={ind.href}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded px-4 py-4 hover:border-green-600 transition-colors"
                >
                  <div className="shrink-0">{ind.icon}</div>
                  <span className="text-sm font-semibold leading-snug" style={{ color: "#1e1e1e" }}>
                    {ind.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUALIFY SECTION ── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-3" style={{ color: "#1e1e1e" }}>
            Does my business qualify?
          </h2>
          <p className="text-sm font-bold mb-3" style={{ color: "#2d5c27" }}>
            Clients of United Capital Funding include businesses that have...
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-1 mb-5 pl-1">
            <li>Sales from $20,000 to $5,000,000 monthly – including startups and companies with historical losses.</li>
            <li>Capital needs to allow them to grow in their industry.</li>
            <li>Limited collateral other than commercial invoices.</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            <Link href="/contact" className="font-semibold" style={{ color: "#2d5c27" }}>
              Schedule a free consultation
            </Link>{" "}
            to discuss your working capital needs, or if you currently have invoices and are ready to apply – fill out our{" "}
            <Link href="/application" className="font-semibold" style={{ color: "#2d5c27" }}>
              online application
            </Link>
            , there&apos;s no cost to apply.
          </p>

          <hr className="border-gray-300 mb-0" />
        </div>
      </section>

      {/* ── WE'RE HERE FOR YOU CTA ── */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="py-12 px-10 rounded" style={{ backgroundColor: "#2d5c27" }}>
            <h2 className="text-2xl font-black text-white mb-3">
              We&apos;re here for you
            </h2>
            <p className="text-sm text-white opacity-90 mb-6 leading-relaxed">
              Contact our team to learn how we can help<br />your business.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-bold px-5 py-2.5 border-2 border-white text-white hover:bg-white hover:text-green-900 transition-colors rounded-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <div className="py-8 bg-white" />
    </>
  );
}
