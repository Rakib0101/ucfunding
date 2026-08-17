import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "Contact Us | United Capital Partners",
	description:
		"Get in touch with United Capital Partners. Located in the heart of Houston, TX.",
};

const faqs = [
	{
		q: "What types of businesses does UCP work with?",
		a: "We work with small businesses and middle-market companies across a broad range of industries, from technology and healthcare to manufacturing and professional services.",
	},
	{
		q: "How quickly can you close a transaction?",
		a: "Our team is structured for speed. Depending on the complexity of the transaction, we can often close within days to a few weeks.",
	},
	{
		q: "Is there a minimum deal size?",
		a: "We typically work on transactions from $500K and up, though exceptions are considered on a case-by-case basis.",
	},
	{
		q: "What information do I need to get started?",
		a: "A brief overview of your business, your financing need, and recent financial statements are a great starting point. Contact us and we will guide you from there.",
	},
];

export default function ContactPage() {
	return (
		<>
			<section
				className="relative flex items-center justify-center text-center text-white"
				style={{
					minHeight: "520px",
					backgroundImage: "url('/contact-hero-bg.webp')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
					<p className="text-xs tracking-widest mb-4 uppercase">Get in touch</p>
					<h1 className="text-4xl md:text-7xl font-serif font-medium leading-tight">
						Contact Us
					</h1>
					<p className="mt-6 text-base tracking-wide leading-relaxed text-white max-w-xl mx-auto font-normal">
						Whether you'd like to schedule a consultation or have questions
						about our offerings, the UCP team is here to help.
					</p>
					<div style={{ marginTop: "28px" }}>
						<a
							href="/contact"
							className="btn-outline-white border-2 uppercase rounded-full"
						>
							Get In Touch
						</a>
					</div>
				</div>
				<div className="absolute inset-0 bg-black opacity-30"></div>
			</section>

			{/* ── GET IN TOUCH + CONTACT INFO ── */}
			<section className="bg-white py-20 px-8">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
					{/* Form */}
					<div id="contact-form">
						<h2
							style={{
								fontFamily: "'Cormorant Garamond',Georgia,serif",
								fontSize: "clamp(2.8rem,3vw,2.4rem)",
								fontWeight: 400,
								color: "#111",
								marginBottom: "28px",
							}}
						>
							Get In Touch
						</h2>
						<p
							style={{
								fontFamily: "'Barlow',sans-serif",
								fontSize: "1.1rem",
								color: "#777",
								lineHeight: 1.8,
								marginBottom: "24px",
							}}
						>
							After you fill out the form below, one of our team members will
							get in touch directly about your inquiry.
						</p>
						<form className="space-y-5">
							<div className="grid grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="firstName"
										className="mb-1 block text-sm font-medium"
									>
										First Name
									</label>
									<input
										className="form-field"
										type="text"
										placeholder="First Name"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="lastName"
										className="mb-1 block text-sm font-medium"
									>
										Last Name
									</label>
									<input
										className="form-field"
										type="text"
										placeholder="Last Name"
										required
									/>
								</div>
							</div>
							<label htmlFor="email" className="mb-1 block text-sm font-medium">
								Email Address
							</label>
							<input
								className="form-field"
								type="email"
								placeholder="Email Address"
								required
							/>
							<label htmlFor="phone" className="mb-1 block text-sm font-medium">
								Phone Number
							</label>
							<input
								className="form-field"
								type="tel"
								placeholder="Phone Number"
							/>
							<label
								htmlFor="message"
								className="mb-1 block text-sm font-medium"
							>
								How can we help you?
							</label>
							<textarea
								className="form-field resize-none"
								rows={4}
								placeholder="Message"
							/>
							<button type="submit" className="btn-dark px-8 mt-2 rounded-full">
								Send Your Message
							</button>
						</form>
					</div>

					{/* Contact info */}
					<div className="flex flex-col items-center">
						<h2
							style={{
								fontFamily: "'Cormorant Garamond',Georgia,serif",
								fontSize: "clamp(2.8rem,3vw,2.4rem)",
								fontWeight: 400,
								color: "#111",
								marginBottom: "36px",
							}}
						>
							Contact Info
						</h2>
						<div className="space-y-10 flex flex-col items-center">
							<div className="flex flex-col max-w-50 text-center items-center gap-4">
								<Image
									src="/icons/phone.png"
									alt="phone icon"
									width={30}
									height={30}
								/>
								<div>
									<p className="flex flex-col uppercase items-center gap-2 mb-1">
										Phone
									</p>
									<a
										href="tel:+1-713-999-9999"
										style={{
											fontFamily: "'Barlow',sans-serif",
											fontSize: "0.85rem",
											color: "#333",
											textDecoration: "none",
											whiteSpace: "pre-line",
										}}
										className="hover:text-black tracking-wider transition-colors"
									>
										+1 (713) 907-0372
									</a>
								</div>
							</div>
							<div className="flex flex-col max-w-50 text-center items-center gap-4">
								<Image
									src="/icons/email.png"
									alt="email icon"
									width={30}
									height={30}
								/>
								<div>
									<p className="flex flex-col uppercase items-center gap-2 mb-1">
										email
									</p>
									<a
										href="tel:+1-713-999-9999"
										style={{
											fontFamily: "'Barlow',sans-serif",
											fontSize: "0.85rem",
											color: "#333",
											textDecoration: "none",
											whiteSpace: "pre-line",
										}}
										className="hover:text-black tracking-wider transition-colors"
									>
										admin@unitedcapllc.com
									</a>
								</div>
							</div>
							<div className="flex flex-col max-w-50 text-center items-center gap-4">
								<Image
									src="/icons/address.png"
									alt="address icon"
									width={30}
									height={30}
								/>
								<div>
									<p className="flex flex-col uppercase items-center gap-2 mb-1">
										Address
									</p>
									<a
										href="tel:+1-713-999-9999"
										style={{
											fontFamily: "'Barlow',sans-serif",
											fontSize: "0.85rem",
											color: "#333",
											textDecoration: "none",
											whiteSpace: "pre-line",
										}}
										className="hover:text-black tracking-wider transition-colors"
									>
										708 Main Street 10th Floor Houston, TX 77002
									</a>
								</div>
							</div>
							<div className="flex flex-col max-w-50 text-center items-center gap-4">
								<Image
									src="/icons/watch.png"
									alt="watch icon"
									width={30}
									height={30}
								/>
								<div>
									<p className="flex flex-col uppercase items-center gap-2 mb-1">
										Business Hours
									</p>
									<a
										href="tel:+1-713-999-9999"
										style={{
											fontFamily: "'Barlow',sans-serif",
											fontSize: "0.85rem",
											color: "#333",
											textDecoration: "none",
											whiteSpace: "pre-line",
										}}
										className="hover:text-black tracking-wider transition-colors"
									>
										Mon – Fri, 7am – 5pm
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── FAQS ── */}
			<section style={{ backgroundColor: "#F9F9F9" }} className="py-20 px-8">
				<div className="max-w-3xl mx-auto">
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(2.8rem,3.5vw,2.6rem)",
							fontWeight: 400,
							color: "#111",
							textAlign: "center",
							marginBottom: "18px",
						}}
					>
						Policy Info
					</h2>
					<p className="text-center text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
						All loan transaction and offers made from and by United Capital
						Partners shall be kept confidential including all information
						submitted for the furtherance of making any loan or financing
						offers.
					</p>
				</div>
			</section>

			{/* ── LOCATED IN HOUSTON ── */}
			<section
				className="grid grid-cols-1 md:grid-cols-2"
				style={{ minHeight: "440px" }}
			>
				<Image
					src="/contact-office.webp"
					alt="Strategic and solution-driven"
					width={800}
					height={600}
					className="object-cover w-full h-full"
				/>
				<div className="bg-white flex flex-col justify-center px-12 py-16">
					<h2
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
							fontWeight: 400,
							color: "#111",
							lineHeight: 1.2,
							marginBottom: "20px",
						}}
						className="text-center md:text-left max-w-sm"
					>
						Located in the heart of Houston.
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
						We are located in the heart of Houston's Central Business District.
					</p>
					<a
						href="https://maps.google.com"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-outline-dark self-start rounded-full bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
					>
						Get In Touch
					</a>
				</div>
			</section>

			{/* ── PRODUCTS / TRANSACTIONS CTA ── */}
			<section style={{ backgroundColor: "#f8f6f2" }} className="py-20 px-8">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
					<div className="pr-0 md:pr-16 py-4">
						<p className="label-eyebrow mb-4">Explore our offerings</p>
						<h2
							style={{
								fontFamily: "'Cormorant Garamond',Georgia,serif",
								fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
								fontWeight: 400,
								color: "#111",
								marginBottom: "16px",
							}}
						>
							Products & Services
						</h2>
						<p
							style={{
								fontFamily: "'Barlow',sans-serif",
								fontSize: "0.82rem",
								color: "#666",
								lineHeight: 1.8,
								marginBottom: "24px",
							}}
						>
							Learn more about the full range of capital solutions we offer to
							growing businesses.
						</p>
						<Link href="/products" className="btn-outline-dark">
							Learn More
						</Link>
					</div>
					<div className="pl-0 md:pl-16 py-4 border-t md:border-t-0 md:border-l border-gray-200 mt-8 md:mt-0">
						<p className="label-eyebrow mb-4">See our work</p>
						<h2
							style={{
								fontFamily: "'Cormorant Garamond',Georgia,serif",
								fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
								fontWeight: 400,
								color: "#111",
								marginBottom: "16px",
							}}
						>
							Sample Transactions
						</h2>
						<p
							style={{
								fontFamily: "'Barlow',sans-serif",
								fontSize: "0.82rem",
								color: "#666",
								lineHeight: 1.8,
								marginBottom: "24px",
							}}
						>
							Browse representative transactions to understand the types of
							deals we close.
						</p>
						<Link href="/transactions" className="btn-outline-dark">
							View Transactions
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
