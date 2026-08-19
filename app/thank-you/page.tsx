import Link from "next/link";

export const metadata = {
	title: "Thank You",
	description:
		"Thanks for reaching out to United Capital Corp — we'll be in touch soon.",
	robots: { index: false, follow: true },
};

export default function ThankYouPage() {
	return (
		<section className="bg-white py-24 px-6 text-center">
			<div className="max-w-2xl mx-auto">
				<p className="label-eyebrow mb-4">We&rsquo;ve Received Your Message</p>
				<h1
					style={{
						fontFamily: "'Cormorant Garamond',Georgia,serif",
						fontSize: "clamp(2.4rem,5vw,3.5rem)",
						fontWeight: 400,
						color: "#111",
						lineHeight: 1.15,
					}}
				>
					Thank you! You&rsquo;re <em>all set</em>.
				</h1>
				<p
					style={{
						fontFamily: "'Barlow',sans-serif",
						fontSize: "0.95rem",
						color: "#666",
						lineHeight: 1.8,
						marginTop: "24px",
					}}
				>
					We&rsquo;ll be in touch soon. If you&rsquo;d like to get in touch
					directly, you can reach us at +1 (561) 571-7271 or email
					murray@ucapitalfl.com.
				</p>
				<div style={{ marginTop: "36px" }}>
					<Link
						href="/"
						className="btn-dark rounded-full px-8 py-4 inline-block"
					>
						Back to Home Page
					</Link>
				</div>
			</div>
		</section>
	);
}
