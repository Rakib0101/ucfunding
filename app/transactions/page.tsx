import KeepExploring from "@/components/KeepExploring";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "Sample Transactions",
	description:
		"A representative sample of transactions completed by United Capital Corp.",
	alternates: { canonical: "/transactions" },
};

const transactionGroups = [
	{
		industry: "High Density Computing, Storage Device Manufacturer",
		items: [
			"$12.5MM Equipment Lease — Term: 36 months",
			"$4.2MM Purchase Order Finance Facility",
			"$8.0MM ABL Line of Credit",
		],
	},
	{
		industry: "Industrial Chemical Supplier",
		items: [
			"$6.0MM Revolving Line of Credit",
			"$2.8MM Accounts Receivable Facility",
			"$1.5MM Short-Term Bridge Loan",
		],
	},
	{
		industry: "Storage & Disaster Recovery",
		items: [
			"$5.0MM Term Debt & Growth Capital Facility",
			"$3.2MM Equipment Lease",
			"$1.0MM Venture Debt Bridge",
		],
	},
	{
		industry: "Wireless Network Software Provider",
		items: [
			"$3.5MM Venture Debt Facility",
			"$2.0MM Working Capital Line",
			"$1.2MM Equipment Finance",
		],
	},
	{
		industry: "Telecom VoIP Switch Supplier",
		items: [
			"$4.8MM Purchase Order Financing",
			"$3.0MM Contract Finance Facility",
			"$900K Bridge Loan",
		],
	},
	{
		industry: "Biotech Pharmaceutical",
		items: [
			"$15.0MM Growth Capital & Subordinated Debt",
			"$7.5MM Equipment Leasing Facility",
			"$3.0MM Bridge Financing",
		],
	},
	{
		industry: "Call Center Software Development",
		items: [
			"$2.2MM Venture Debt",
			"$1.5MM ABL Facility",
			"$800K Short-Term Bridge",
		],
	},
];

export default function TransactionsPage() {
	return (
		<>
			<section
				className="relative flex items-center justify-center text-center text-white"
				style={{
					minHeight: "520px",
					backgroundImage: "url('/transaction-hero-bg.webp')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
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
						Investment Details
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
						Sample Transactions
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
						Whether your business needs working capital to support continued
						growth, senior debt or mezzanine debt, United Capital has the right
						solution for you.
					</p>
					<div style={{ marginTop: "28px" }}>
						<a href="#" className="btn-outline-white border-2 rounded-full">
							Contact Us
						</a>
					</div>
				</div>
			</section>

			{/* ── TRANSACTIONS LIST ── */}
			<section className="bg-white py-20 px-8">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
						{transactionGroups.map(({ industry, items }) => (
							<div
								key={industry}
								style={{ borderTop: "1px solid #e8e4dc", paddingTop: "24px" }}
							>
								<p className="label-eyebrow mb-3">Client type</p>
								<h3
									style={{
										fontFamily: "'Cormorant Garamond',Georgia,serif",
										fontSize: "1.25rem",
										fontWeight: 500,
										color: "#111",
										marginBottom: "14px",
										lineHeight: 1.3,
									}}
								>
									{industry}
								</h3>
								<ul
									style={{
										fontFamily: "'Barlow',sans-serif",
										fontSize: "0.78rem",
										color: "#666",
										lineHeight: 2,
										listStyle: "none",
										padding: 0,
									}}
								>
									{items.map((item) => (
										<li key={item} className="flex items-start gap-2">
											<span style={{ color: "#c9a96e", marginTop: "2px" }}>
												—
											</span>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── FIND THE RIGHT SOLUTION ── */}
			<section
				style={{ backgroundColor: "#f8f6f2" }}
				className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
			>
				<Image
					src="/transaction-office.webp"
					alt="Strategic and solution-driven"
					width={800}
					height={600}
					className="object-cover w-full h-full"
				/>
				<div className="max-w-xl mx-auto">
					<p className="label-eyebrow mb-4">Next steps</p>
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
							fontWeight: 400,
							color: "#111",
							marginBottom: "16px",
						}}
					>
						Find the right solution.
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
						Every transaction is unique. Our team works closely with you to
						understand your capital needs and structure the right solution —
						quickly and efficiently.
					</p>
					<Link href="/contact" className="btn-outline-dark">
						Work With Us
					</Link>
				</div>
			</section>

			{/* ── LET'S WORK TOGETHER ── */}
			<section
				className="grid grid-cols-1 md:grid-cols-2 py-24 container mx-auto"
				style={{ minHeight: "480px" }}
			>
				<Image
					src="/transaction-cta.webp"
					alt="Strategic and solution-driven"
					width={500}
					height={600}
					className="object-cover w-full h-full max-w-125"
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
