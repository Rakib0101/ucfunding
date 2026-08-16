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
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0">
          <div className="pb-10 md:pb-0 md:pr-16 py-4">
            <p className="label-eyebrow mb-4">Get the details</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 400, color: "#111", marginBottom: "16px" }}>
              {leftTitle}
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.8, marginBottom: "28px" }}>
              {leftText}
            </p>
            <Link href={leftHref} className="btn-outline-dark rounded-full">
              Learn More
            </Link>
          </div>

          <div className="hidden md:flex flex-col items-center self-stretch px-10">
            <span className="w-px flex-1 bg-gray-300" />
            <span
              style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "#111",
              }}
              className="py-4"
            >
              or
            </span>
            <span className="w-px flex-1 bg-gray-300" />
          </div>

          <div className="pt-10 md:pt-0 md:pl-16 py-4">
            <p className="label-eyebrow mb-4">Get in touch</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 400, color: "#111", marginBottom: "16px" }}>
              {rightTitle}
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "#666", lineHeight: 1.8, marginBottom: "28px" }}>
              {rightText}
            </p>
            <Link href={rightHref} className="btn-outline-dark rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
