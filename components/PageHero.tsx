interface PageHeroProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({ eyebrow, title, italicWord, subtitle, ctaText, ctaHref }: PageHeroProps) {
  const renderTitle = () => {
    if (!italicWord) return title;
    const parts = title.split(italicWord);
    return (
      <>
        {parts[0]}
        <em>{italicWord}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      className="relative flex items-center justify-center text-center text-white"
      style={{
        minHeight: "420px",
        background: "linear-gradient(160deg, #1c2840 0%, #0f1628 60%, #090e1a 100%)",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        {eyebrow && (
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "20px" }}>
            {eyebrow}
          </p>
        )}
        <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(2.8rem,6vw,4.5rem)", fontWeight: 300, lineHeight: 1.15, color: "#fff" }}>
          {renderTitle()}
        </h1>
        {subtitle && (
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginTop: "20px", maxWidth: "480px", margin: "20px auto 0" }}>
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <div style={{ marginTop: "28px" }}>
            <a href={ctaHref} className="btn-outline-white">
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
