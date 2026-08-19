import KeepExploring from "@/components/KeepExploring";
import Link from "next/link";

export const metadata = {
	title: "Our Mission",
	description:
		"United Capital Corp is dedicated to providing small businesses and middle-market companies with capital solutions that meet their specific financing needs.",
	alternates: { canonical: "/mission" },
};

export default function MissionPage() {
	return (
		<>
			<section
				className="relative flex items-center justify-center text-center text-white"
				style={{
					minHeight: "280px",
					backgroundImage: "url('/mision-hero-bg.webp')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div
					className="absolute inset-0"
					style={{ background: "rgba(0,0,0,0.25)" }}
				/>
				<div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
					<h1
						style={{
							fontFamily: "'Cormorant Garamond',Georgia,serif",
							fontSize: "clamp(2.8rem,6vw,4.5rem)",
							fontWeight: 300,
							lineHeight: 1.15,
							color: "#fff",
						}}
					>
						Our Mission
					</h1>
				</div>
			</section>

			{/* ── MISSION BODY ── */}
			<section className="bg-white py-20 px-8">
				<div className="max-w-2xl mx-auto">
					<p
						style={{
							fontFamily: "'Barlow',sans-serif",
							fontSize: "0.9rem",
							color: "#444",
							lineHeight: 2,
							marginBottom: "24px",
						}}
					>
						United Capital Corp (&ldquo;UCC&rdquo;) is dedicated to
						providing small businesses and established middle market companies
						with various debt solutions that meet their specific financing
						needs. UCC can rapidly assess a client&apos;s needs, identify a
						product offering that fills that need, and expedite funding so as to
						coincide with its client&apos;s timeframes.
					</p>
					<p
						style={{
							fontFamily: "'Barlow',sans-serif",
							fontSize: "0.9rem",
							color: "#444",
							lineHeight: 2,
							marginBottom: "24px",
						}}
					>
						UCC partners with its clients and takes a consultative approach to
						providing guidance to determine the best structure and solution that
						will aid them in their long-term growth and debt requirements. UCC
						strives to establish strategic and lasting relationships that allow
						it to offer creative financing solutions to its clients that
						contribute to their long-term success.
					</p>
					<p
						style={{
							fontFamily: "'Barlow',sans-serif",
							fontSize: "0.9rem",
							color: "#444",
							lineHeight: 2,
							marginBottom: "40px",
						}}
					>
						We believe that access to capital is the foundation of growth. By
						combining deep industry expertise with a commitment to personalized
						service, we deliver solutions that create lasting value for every
						company we work with.
					</p>
					<Link href="/contact" className="btn-dark">
						Work With Us
					</Link>
				</div>
			</section>

			<KeepExploring />
		</>
	);
}
