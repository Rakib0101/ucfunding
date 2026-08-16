import Link from "next/link";

interface KeepExploringProps {
  leftTitle?: string;
  leftText?: string;
  leftHref?: string;
  rightTitle?: string;
  rightText?: string;
  rightHref?: string;
}

export default function KeepExploring({
  leftTitle = "Keep exploring.",
  leftText = "Learn more about our financial products and see everything we can offer your organization.",
  leftHref = "/products",
  rightTitle = "Let’s talk.",
  rightText = "When you reach out to our team, we'll answer any questions you have about what we offer.",
  rightHref = "/contact",
}: KeepExploringProps) {
  return (
    <section style={{ backgroundColor: "#f8f6f2" }} className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="pr-0 md:pr-16 py-4">
            <p className="label-eyebrow mb-4">Get the details</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 400, color: "#111", marginBottom: "16px" }}>
              {leftTitle}
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.8, marginBottom: "28px" }}>
              {leftText}
            </p>
            <Link href={leftHref} className="btn-outline-dark">
              Learn More
            </Link>
          </div>

          <div
            className="hidden md:flex items-center justify-center"
            style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "#ccc" }}
          >
            or
          </div>

          <div className="pl-0 md:pl-16 py-4 border-t md:border-t-0 md:border-l border-gray-200 mt-8 md:mt-0 pt-8 md:pt-4">
            <p className="label-eyebrow mb-4">Get in touch</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 400, color: "#111", marginBottom: "16px" }}>
              {rightTitle}
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.8, marginBottom: "28px" }}>
              {rightText}
            </p>
            <Link href={rightHref} className="btn-outline-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
