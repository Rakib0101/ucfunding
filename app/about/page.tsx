import KeepExploring from "@/components/KeepExploring";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "About",
	description:
		"United Capital Partners LLC — financial services experts you can trust.",
	alternates: { canonical: "/about" },
};

const whyItems = [
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-7 h-7"
			>
				<circle cx="12" cy="8" r="7" strokeWidth={1} />
				<polyline
					points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
					strokeWidth={1}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M9 8.5l2 2 3.5-3.5"
				/>
			</svg>
		),
		title: "Years of Experience",
		text: "Our team has 20+ years of experience in equipment leasing, venture debt, and asset-based lending markets.",
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-7 h-7"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M5 20v-5M10.5 20V10M16 20v-8"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M4 13.5L9 8l4 3 6-6"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M14 5h5v5"
				/>
			</svg>
		),
		title: "Proven Track Record",
		text: "United Capital Partners has provided millions to emerging and established businesses across a wide variety of industries.",
	},
	{
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-7 h-7"
			>
				<circle cx="11" cy="13" r="8" strokeWidth={1} />
				<circle cx="11" cy="13" r="4.5" strokeWidth={1} />
				<circle cx="11" cy="13" r="1" fill="currentColor" stroke="none" />
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M15 9l6-6M17 2h4v4"
				/>
			</svg>
		),
		title: "Flexible Solutions",
		text: "We provide tailored, innovative financial products for the current and future capital requirements of your business.",
	},
];

export default function AboutPage() {
	return (
		<>
			<section
				className="relative flex items-center justify-center text-center text-white"
				style={{
					minHeight: "420px",
					backgroundImage: "url('/about-hero-bg.webp')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div
					className="absolute inset-0"
					style={{ background: "rgba(0,0,0,0.25)" }}
				/>
				<div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
					<p
						style={{
							fontFamily: "'Barlow',sans-serif",
							fontSize: "0.6rem",
							letterSpacing: "0.18em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.5)",
							marginBottom: "20px",
						}}
					>
						About United Capital Partners
					</p>
					<h1
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(2.8rem,6vw,4.5rem)",
							fontWeight: 300,
							lineHeight: 1.15,
							color: "#fff",
						}}
					>
						Financial services experts you can trust.
					</h1>
					<p
						style={{
							fontFamily: "'Barlow',sans-serif",
							fontSize: "0.85rem",
							color: "rgba(255,255,255,0.65)",
							lineHeight: 1.8,
							marginTop: "20px",
							maxWidth: "480px",
							margin: "20px auto 0",
						}}
					>
						United Capital Partners works with a team of finance professionals
						with an average twenty years of experience in funding equipment
						leasing and working capital loans.
					</p>
					<div style={{ marginTop: "28px" }}>
						<a href="#" className="btn-outline-white border-2 rounded-full">
							Get in touch
						</a>
					</div>
				</div>
			</section>

			{/* ── WHY UCP ── */}
			<section className="bg-white py-20 text-center px-6">
				<div className="max-w-2xl mx-auto">
					<p className="label-eyebrow mb-4">What Sets Us Apart</p>
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
							fontWeight: 400,
							color: "#111",
						}}
					>
						Why United Capital Partners?
					</h2>
				</div>
				<div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
					{whyItems.map(({ icon, title, text }) => (
						<div key={title} className="flex flex-col items-center gap-4">
							<div style={{ color: "#111" }}>{icon}</div>
							<p
								style={{
									fontFamily: "'Barlow',sans-serif",
									fontSize: "0.72rem",
									fontWeight: 600,
									letterSpacing: "0.18em",
									textTransform: "uppercase",
									color: "#111",
								}}
							>
								{title}
							</p>
							<p
								style={{
									fontFamily: "'Barlow',sans-serif",
									fontSize: "0.8rem",
									color: "#666",
									lineHeight: 1.8,
								}}
							>
								{text}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* ── STRATEGIC AND SOLUTION-DRIVEN ── */}
			<section
				className="grid grid-cols-1 md:grid-cols-2"
				style={{ minHeight: "480px" }}
			>
				<div className="bg-white flex flex-col justify-center px-12 py-16">
					<p className="label-eyebrow mb-5">Our strategy</p>
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(2rem,4vw,3rem)",
							fontWeight: 400,
							color: "#111",
							lineHeight: 1.2,
							marginBottom: "20px",
						}}
					>
						Strategic <em>and</em> solution-driven.
					</h2>
					<p
						style={{
							fontFamily: "'Barlow',sans-serif",
							fontSize: "0.85rem",
							color: "#666",
							lineHeight: 1.9,
							maxWidth: "400px",
							marginBottom: "28px",
						}}
					>
						Both learning from and for the needs of our clients, United Capital
						Partners can rapidly assess a client&apos;s needs, identify a
						product offering that fits that need, and expedite funding so as to
						coincide with its client&apos;s timeframes.
					</p>
					<Link href="/products" className="btn-outline-dark self-start">
						Learn More
					</Link>
				</div>
				<Image
					src="/about-office.webp"
					alt="Strategic and solution-driven"
					width={800}
					height={600}
					className="object-cover w-full h-full"
				/>
			</section>

			{/* ── LET'S WORK TOGETHER ── */}
			<section
				className="grid grid-cols-1 md:grid-cols-2 container mx-auto py-24"
				style={{ minHeight: "480px" }}
			>
				<Image
					src="/about-cta.webp"
					alt="Strategic and solution-driven"
					width={800}
					height={600}
					className="object-cover w-full h-full"
				/>
				<div className="bg-white flex flex-col justify-center px-12 py-16">
					<p className="label-eyebrow mb-4">Work with us</p>
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(1.8rem,3vw,2.5rem)",
							fontWeight: 400,
							color: "#111",
							marginBottom: "28px",
						}}
					>
						{"Let's work together."}
					</h2>
					<form className="space-y-5 max-w-sm">
						<input
							className="form-field"
							type="text"
							placeholder="Name"
							required
						/>
						<input
							className="form-field"
							type="text"
							placeholder="Company Name"
						/>
						<input
							className="form-field"
							type="tel"
							placeholder="Phone Number"
						/>
						<input
							className="form-field"
							type="email"
							placeholder="Email Address"
							required
						/>
						<textarea
							className="form-field resize-none"
							rows={3}
							placeholder="Message"
						/>
						<button type="submit" className="btn-dark mt-2">
							Send Your Message
						</button>
					</form>
				</div>
			</section>

			<KeepExploring />
		</>
	);
}
