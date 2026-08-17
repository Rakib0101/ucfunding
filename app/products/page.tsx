import KeepExploring from "@/components/KeepExploring";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "Products & Services | United Capital Partners",
	description:
		"Customizable capital solutions for your business — equipment leasing, factoring, venture debt, and more.",
};

const products = [
	{
		title: "Equipment Leasing & Financing",
		text: "Preserve working capital by leasing or financing the equipment your business needs to grow. We structure solutions across a wide range of asset types and credit profiles.",
	},
	{
		title: "Venture Debt",
		text: "Non-dilutive capital for venture-backed companies looking to extend runway, fund growth initiatives, or bridge to the next equity round.",
	},
	{
		title: "Asset Based Lending & Factoring",
		text: "Unlock liquidity from your accounts receivable and assets. Our ABL and factoring programs are tailored to your specific revenue cycle.",
	},
	{
		title: "Subordinated Debt",
		text: "Flexible mezzanine capital to complement senior debt, support acquisitions, management buyouts, or recapitalizations.",
	},
	{
		title: "Purchase Order & Contract Finance",
		text: "Finance large purchase orders or government contracts so you can fulfill opportunities that exceed your current cash position.",
	},
	{
		title: "Short-Term Bridge Loans",
		text: "Rapid-close bridge financing for time-sensitive transactions, real estate, or working capital gaps while permanent financing is arranged.",
	},
];

const introItems = [
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
					d="M9 3h6a1 1 0 011 1v1H8V4a1 1 0 011-1z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M7 5h10a1 1 0 011 1v13a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M9 9h4M9 12h4M9 15h2"
				/>
				<circle cx="16.5" cy="16.5" r="3.2" strokeWidth={1} fill="#fff" />
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M15.2 16.6l.9.9 1.6-1.8"
				/>
			</svg>
		),
		title: "Flexible Solutions",
		text: "We offer a wide variety of tailored financial products for the current and future capital requirements of your business.",
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
		title: "Strategic Approach",
		text: "Our team moves quickly and decisively to provide the right capital solutions to companies and entities in need.",
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
					d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M3 21h18"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M9 7h1M9 11h1M14 7h1M14 11h1"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1}
					d="M10.5 21v-3a1 1 0 011-1h1a1 1 0 011 1v3"
				/>
			</svg>
		),
		title: "Industry Expertise",
		text: "We support emerging growth companies, established businesses, and other organizations across diverse industries.",
	},
];

export default function ProductsPage() {
	return (
		<>
			<section
				className="relative flex items-center justify-center text-center text-white"
				style={{
					minHeight: "520px",
					backgroundImage: "url('/product-hero-bg.webp')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
					<p
						style={{
							fontFamily: "'Inter',sans-serif",
							fontSize: "0.6rem",
							letterSpacing: "0.18em",
							textTransform: "uppercase",
							color: "rgba(255,255,255,0.5)",
							marginBottom: "20px",
						}}
					>
						Debt Products & Financial Solutions
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
						Products & Services
					</h1>
					<p
						style={{
							fontFamily: "'Inter',sans-serif",
							fontSize: "0.85rem",
							color: "rgba(255,255,255,0.65)",
							lineHeight: 1.8,
							marginTop: "20px",
							maxWidth: "480px",
							margin: "20px auto 0",
						}}
					>
						We leverage the expertise of our investor pool to offer financial
						products that serve venture-funded companies and traditional debt
						products to fund bankable or investment-grade credits.
					</p>
					<div style={{ marginTop: "28px" }}>
						<a href="#" className="btn-outline-white border-2 rounded-full">
							Work with Us
						</a>
					</div>
				</div>
			</section>

			{/* ── INTRO ICONS ── */}
			<section className="bg-white py-20 text-center px-6">
				<div className="max-w-2xl mx-auto">
					<p className="label-eyebrow mb-4">
						Venture & Structured Credit Products
					</p>
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
							fontWeight: 400,
							color: "#111",
						}}
					>
						We offer customizable capital solutions for your business.
					</h2>
				</div>
				<div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
					{introItems.map(({ icon, title, text }) => (
						<div key={title} className="flex flex-col items-center gap-4">
							<div style={{ color: "#111" }}>{icon}</div>
							<p
								style={{
									fontFamily: "'Inter',sans-serif",
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
									fontFamily: "'Inter',sans-serif",
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

			{/* ── BUILT THROUGH RELATIONSHIPS ── */}
			<section
				className="grid grid-cols-1 md:grid-cols-2 bg-[#F9F9F9]"
				style={{ minHeight: "460px" }}
			>
				<Image
					src="/product-office.webp"
					alt="Strategic and solution-driven"
					width={800}
					height={600}
					className="object-cover w-full h-full"
				/>
				<div className="flex flex-col justify-center px-12 py-16">
					<p className="label-eyebrow mb-5">Our philosophy</p>
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
						Built through <em>relationships.</em>
					</h2>
					<p
						style={{
							fontFamily: "'Inter',sans-serif",
							fontSize: "0.85rem",
							color: "#666",
							lineHeight: 1.9,
							maxWidth: "400px",
							marginBottom: "28px",
						}}
					>
						Our team funds transactions through relationships built from decades
						in the structured finance industry. This lets us fund transactions
						directly or through a participation / broker model. While some
						transactions are funded and held on our account, others are
						transferred to investor balance sheets.
					</p>
					<Link href="/contact" className="btn-outline-dark self-start">
						Get Started
					</Link>
				</div>
			</section>

			{/* ── OUR PRODUCTS GRID ── */}
			<section className="bg-white py-20 px-8">
				<div className="max-w-6xl mx-auto">
					<p className="label-eyebrow mb-4">What we offer</p>
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
							fontWeight: 400,
							color: "#111",
							marginBottom: "48px",
						}}
					>
						Our Products
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
						{products.map(({ title, text }) => (
							<div
								key={title}
								style={{ borderTop: "1px solid #e8e4dc", paddingTop: "24px" }}
							>
								<h3
									style={{
										fontFamily: "'Cormorant Garamond',Georgia,serif",
										fontSize: "1.3rem",
										fontWeight: 500,
										color: "#111",
										marginBottom: "10px",
									}}
								>
									{title}
								</h3>
								<p
									style={{
										fontFamily: "'Inter',sans-serif",
										fontSize: "0.82rem",
										color: "#666",
										lineHeight: 1.9,
									}}
								>
									{text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── LET'S WORK TOGETHER ── */}
			<section
				className="grid grid-cols-1 md:grid-cols-2 container mx-auto py-24"
				style={{ minHeight: "480px" }}
			>
				<Image
					src="/product-cta.webp"
					alt="Strategic and solution-driven"
					width={500}
					height={600}
					className="object-cover w-full max-w-125 h-full"
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
