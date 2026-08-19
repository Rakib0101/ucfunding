import KeepExploring from "@/components/KeepExploring";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	alternates: { canonical: "/" },
};

const threeIcons = [
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
					d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
				/>
			</svg>
		),
		title: "Powerful Results",
		label:
			"Leveraging our knowledge of capital markets, we help every client achieve their goals.",
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
					d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
				/>
			</svg>
		),
		title: "Industry Expertise",
		label:
			"We have decades of experience in funding equipment leasing and working capital loans.",
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
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		),
		title: "Innovative Solutions",
		label:
			"Our unique credit and underwriting model can fulfill the capital needs of your businesses.",
	},
];

export default function Home() {
	return (
		<>
			{/* ── HERO ── */}
			<section
				className="relative flex items-center justify-center overflow-hidden text-center text-white"
				style={{
					minHeight: "700px",
					backgroundImage: "url('/hero-bg.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div
					className="absolute inset-0"
					style={{ background: "rgba(33, 49, 57, 0.32)" }}
				/>
				<div className="relative z-10 max-w-5xl px-6 py-12">
					<p
						style={{
							fontFamily: "'Barlow',sans-serif",
							fontSize: "0.7rem",
							fontWeight: 500,
							letterSpacing: "0.32em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.9)",
							marginBottom: "2rem",
						}}
					>
						venture debt & capital solutions
					</p>
					<h1
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(4rem,8vw,10rem)",
							fontWeight: 300,
							lineHeight: 0.9,
							letterSpacing: "-0.04em",
							color: "#fff",
							fontStyle: "normal",
						}}
					>
						Capital{" "}
						<em style={{ fontStyle: "normal", fontWeight: 300 }}>for</em> Growth
					</h1>
					<p
						style={{
							fontFamily: "'Barlow',sans-serif",
							fontSize: "clamp(0.9rem,1.6vw,1.3rem)",
							fontWeight: 300,
							lineHeight: 1.6,
							color: "rgba(255,255,255,0.9)",
							maxWidth: "820px",
							margin: "2rem auto 0",
						}}
					>
						United Capital Corp is a leader in capital facilities,
						structured finance solutions, asset-based equipment lending, venture
						leasing, and small to mid-ticket leasing solutions.
					</p>
					<div className="mt-10">
						<Link
							href="/about"
							className="inline-flex items-center justify-center rounded-full border border-white bg-transparent px-10 py-3 text-[0.75rem] font-medium tracking-[0.22em] text-white uppercase transition hover:bg-white hover:text-slate-900"
						>
							Learn More
						</Link>
					</div>
				</div>
			</section>

			{/* ── LEADING THE WAY ── */}
			<section className="bg-white py-20 text-center px-6">
				<div className="max-w-2xl mx-auto">
					<p className="label-eyebrow mb-4">
						Venture & Structured Credit Leasing
					</p>
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(1.8rem,4vw,2.8rem)",
							fontWeight: 400,
							color: "#111",
							lineHeight: 1.2,
						}}
					>
						Leading the way in commercial financial services.
					</h2>
				</div>
				<div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
					{threeIcons.map(({ icon, title, label }, i) => (
						<div key={i} className="flex flex-col items-center gap-4">
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
								{label}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* ── FLEXIBLE AND INNOVATIVE ── */}
			<section
				className="grid grid-cols-1 md:grid-cols-2 bg-[#F9F9F9]"
				style={{ minHeight: "480px" }}
			>
				<Image
					src={"/2-man.webp"}
					alt="Two men shaking hands"
					width={1000}
					height={480}
					className="object-cover w-full h-full"
				/>
				<div className="flex flex-col justify-center px-12 py-16">
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
						Flexible <em>and</em> innovative.
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
						We take a consultative approach to every engagement — identifying
						the right capital structure for your specific needs and delivering
						creative solutions that competitors can't match.
					</p>
					<Link href="/about" className="btn-outline-dark self-start">
						What we offer
					</Link>
				</div>
			</section>

			{/* ── PARTNERSHIPS / TAILORED ── */}
			<section className="bg-white py-20">
				<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 md:divide-x md:divide-gray-200">
					<div>
						<p className="label-eyebrow mb-5">Our Focus</p>
						<h2
							style={{
								fontFamily: "'Cormorant Garamond',Georgia,serif",
								fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
								fontWeight: 400,
								color: "#111",
								lineHeight: 1.25,
								marginBottom: "20px",
							}}
						>
							Partnerships, <em>not</em> transactions.
						</h2>
						<p
							style={{
								fontFamily: "'Barlow',sans-serif",
								fontSize: "0.85rem",
								color: "#666",
								lineHeight: 1.9,
								marginBottom: "28px",
							}}
						>
							Whether your business needs a lease line of credit to support
							capital equipment acquisitions, working capital to support
							continued growth, senior debt or mezzanine debt, our team will
							help you navigate the decision with confidence.
						</p>
						<Link href="/about" className="btn-dark rounded-full px-8 py-4">
							Learn More
						</Link>
					</div>
					<div className="md:pl-16">
						<p className="label-eyebrow mb-5">What We Offer</p>
						<h2
							style={{
								fontFamily: "'Cormorant Garamond',Georgia,serif",
								fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
								fontWeight: 400,
								color: "#111",
								lineHeight: 1.25,
								marginBottom: "20px",
							}}
						>
							Tailored <em>and</em> innovative solutions.
						</h2>
						<ul
							style={{
								fontFamily: "'Barlow',sans-serif",
								fontSize: "0.82rem",
								color: "#333",
								lineHeight: 2,
								listStyle: "none",
								padding: 0,
							}}
						>
							{[
								"Equipment Leasing & Financing",
								"Venture Debt",
								"Asset-Based Lending & Factoring",
								"Subordinated Debt",
								"Short-Term Bridge Loan",
								"Purchase Order and Contract Finance",
							].map((item) => (
								<li key={item} className="flex items-center gap-2">
									<span style={{ color: "#111" }}>✓</span> {item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* ── GET THE DETAILS ── */}
			<section
				className="grid grid-cols-1 md:grid-cols-2 bg-[#F9F9F9]"
				style={{ minHeight: "440px" }}
			>
				<div className="flex flex-col justify-center px-12 py-16">
					<p className="label-eyebrow mb-5">Learn more</p>
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
						Get the details.
					</h2>
					<p
						style={{
							fontFamily: "'Barlow',sans-serif",
							fontSize: "0.85rem",
							color: "#666",
							lineHeight: 1.9,
							maxWidth: "380px",
							marginBottom: "28px",
						}}
					>
						Explore our full range of capital products designed for growing
						businesses across every industry.
					</p>
					<Link href="/products" className="btn-outline-dark self-start">
						Learn More
					</Link>
				</div>
				<Image
					src={"/office-home.webp"}
					alt="Office space"
					width={1000}
					height={480}
					className="object-cover w-full h-full"
				/>
			</section>

			{/* ── CONTACT FORM SECTION ── */}
			<section
				className="grid grid-cols-1 md:grid-cols-2 container mx-auto py-12 "
				style={{ minHeight: "480px" }}
			>
				<Image
					src={"/cta-left.webp"}
					alt="Office space"
					width={300}
					height={480}
					className="object-cover w-130  h-full"
				/>
				<div className="bg-white flex flex-col justify-center px-12 py-16">
					<p className="label-eyebrow mb-4">Send us a message</p>
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(1.6rem,3vw,2.2rem)",
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
							placeholder="Your Name"
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

			{/* ── KEEP EXPLORING ── */}
			<KeepExploring />
		</>
	);
}
