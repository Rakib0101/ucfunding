import Link from "next/link";
import { news, slugify } from "@/lib/news";

export const metadata = {
	title: "News & Updates",
	description:
		"The latest news, transactions, and announcements from United Capital Corp.",
	alternates: { canonical: "/news" },
};

const PAGE_SIZE = 5;
const totalPages = Math.ceil(news.length / PAGE_SIZE);

export default async function NewsPage({
	searchParams,
}: {
	searchParams: Promise<{ page?: string }>;
}) {
	const { page } = await searchParams;
	const currentPage = Math.min(
		Math.max(Number(page) || 1, 1),
		totalPages,
	);
	const pageItems = news.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE,
	);

	return (
		<>
			<section
				className="relative flex items-center justify-center text-center text-white"
				style={{
					minHeight: "520px",
					backgroundImage: "url('/news-hero-bg.webp')",
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
						Press Releases & Updates
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
						News & Updates
					</h1>
					<div style={{ marginTop: "28px" }}>
						<a href="#" className="btn-outline-white border-2 rounded-full">
							View Press Releases
						</a>
					</div>
				</div>
			</section>

			{/* ── NEWS GRID ── */}
			<section id="news-grid" className="bg-white py-20 px-8">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
						{pageItems.map(({ title, date, excerpt }) => (
							<article
								key={title}
								style={{ borderTop: "1px solid #e8e4dc", paddingTop: "20px" }}
							>
								<p
									style={{
										fontFamily: "'Barlow',sans-serif",
										fontSize: "0.65rem",
										letterSpacing: "0.12em",
										textTransform: "uppercase",
										color: "#aaa",
										marginBottom: "10px",
									}}
								>
									{date}
								</p>
								<h2
									style={{
										fontFamily: "'Cormorant Garamond',Georgia,serif",
										fontSize: "1.1rem",
										fontWeight: 500,
										color: "#111",
										lineHeight: 1.35,
										marginBottom: "10px",
									}}
								>
									<Link
										href={`/news/${slugify(title)}`}
										className="hover:opacity-70 transition-opacity"
									>
										{title}
									</Link>
								</h2>
								<p
									style={{
										fontFamily: "'Barlow',sans-serif",
										fontSize: "0.78rem",
										color: "#888",
										lineHeight: 1.8,
									}}
								>
									{excerpt}
								</p>
							</article>
						))}
					</div>

					{/* ── PAGINATION ── */}
					<div className="flex items-center justify-center gap-2 mt-16">
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
							<Link
								key={p}
								href={`/news?page=${p}#news-grid`}
								style={{
									fontFamily: "'Barlow',sans-serif",
									fontSize: "0.75rem",
									width: "32px",
									height: "32px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									border: p === currentPage ? "1px solid #111" : "1px solid #ddd",
									color: p === currentPage ? "#111" : "#aaa",
									textDecoration: "none",
								}}
							>
								{p}
							</Link>
						))}
						{currentPage < totalPages ? (
							<Link
								href={`/news?page=${currentPage + 1}#news-grid`}
								style={{ color: "#888", fontSize: "0.75rem" }}
							>
								&rsaquo;
							</Link>
						) : (
							<span style={{ color: "#ccc", fontSize: "0.75rem" }}>&rsaquo;</span>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
