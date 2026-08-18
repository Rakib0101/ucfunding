import Link from "next/link";
import { notFound } from "next/navigation";
import { news, slugify } from "@/lib/news";

const SITE_URL = "https://ucapitalfl.com";

export async function generateStaticParams() {
	return news.map((item) => ({ slug: slugify(item.title) }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const item = news.find((n) => slugify(n.title) === slug);
	if (!item) return {};
	return {
		title: `${item.title} | United Capital Corp`,
		description: item.excerpt,
	};
}

const shareIcon = (path: string) => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
		<path d={path} />
	</svg>
);

export default async function NewsDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const index = news.findIndex((item) => slugify(item.title) === slug);
	if (index === -1) notFound();

	const item = news[index];
	const prev = index > 0 ? news[index - 1] : null;
	const next = index < news.length - 1 ? news[index + 1] : null;
	const articleUrl = `${SITE_URL}/news/${slug}`;
	const encodedUrl = encodeURIComponent(articleUrl);
	const encodedTitle = encodeURIComponent(item.title);

	const shareLinks = [
		{
			label: "Facebook",
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
			path: "M22 12a10 10 0 10-11.5 9.87v-6.99H7.9v-2.88h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62v1.95h2.86l-.46 2.88h-2.4v6.99A10 10 0 0022 12z",
		},
		{
			label: "Twitter",
			href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
			path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z",
		},
		{
			label: "LinkedIn",
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
			path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
		},
		{
			label: "Reddit",
			href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
			path: "M12 2C6.5 2 2 5.8 2 10.5c0 2.3 1.1 4.4 2.9 6-.1.5-.5 1.9-.6 2.2 0 0 1.7-.4 2.8-.9 1.5.5 3.1.8 4.9.8 5.5 0 10-3.8 10-8.5S17.5 2 12 2z",
		},
		{
			label: "Tumblr",
			href: `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodedUrl}&title=${encodedTitle}`,
			path: "M14.5 21c-3 0-5-1.7-5-4.8V10.4H7v-2.5c2.4-.6 3.4-2.6 3.6-4.6h2.6v4.2h3.4v2.9h-3.4v5.1c0 1.3.6 1.9 1.7 1.9.6 0 1.2-.2 1.5-.3l.8 2.7c-.5.3-1.7 1.2-3.7 1.2z",
		},
	];

	return (
		<section className="bg-white py-20 px-6">
			<div className="max-w-4xl mx-auto">
				<h1
					style={{
						fontFamily: "'Cormorant Garamond',Georgia,serif",
						fontSize: "clamp(1.8rem,4vw,2.8rem)",
						fontWeight: 500,
						color: "#111",
						lineHeight: 1.25,
					}}
				>
					{item.title}
				</h1>
				<p
					style={{
						fontFamily: "'Barlow',sans-serif",
						fontSize: "0.7rem",
						letterSpacing: "0.14em",
						textTransform: "uppercase",
						color: "#999",
						textAlign: "center",
						margin: "20px 0 40px",
					}}
				>
					{item.date}
				</p>
				<div
					style={{
						fontFamily: "'Barlow',sans-serif",
						fontSize: "0.95rem",
						color: "#333",
						lineHeight: 1.85,
					}}
					className="space-y-5"
				>
					{item.body.split("\n\n").map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>

				{/* ── SHARE ── */}
				<div className="flex items-center justify-center gap-3 mt-14 mb-14">
					{shareLinks.map(({ label, href, path }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Share on ${label}`}
							className="flex items-center justify-center w-9 h-9 rounded-full text-black transition-colors hover:bg-gray-200"
							style={{ background: "#f0f0f0" }}
						>
							{shareIcon(path)}
						</a>
					))}
					<span
						aria-hidden="true"
						className="flex items-center justify-center w-9 h-9 rounded-full text-black"
						style={{ background: "#f0f0f0" }}
					>
						{shareIcon(
							"M12 20.5s-7.5-4.6-9.6-9C1.1 8.8 2 5.8 4.7 4.7 7 3.8 9 4.6 12 7.8c3-3.2 5-4 7.3-3.1 2.7 1.1 3.6 4.1 2.3 6.8-2.1 4.4-9.6 9-9.6 9z",
						)}
					</span>
				</div>

				{/* ── PREV / NEXT ── */}
				<div
					style={{ borderTop: "1px solid #e8e4dc" }}
					className="flex items-start justify-between gap-8 pt-10"
				>
					<div className="max-w-[45%]">
						{prev && (
							<Link
								href={`/news/${slugify(prev.title)}`}
								className="group flex items-start gap-3 hover:opacity-70 transition-opacity"
							>
								<span style={{ color: "#999", fontSize: "1.1rem" }}>
									&lsaquo;
								</span>
								<span>
									<span
										style={{
											fontFamily: "'Barlow',sans-serif",
											fontSize: "0.62rem",
											letterSpacing: "0.16em",
											textTransform: "uppercase",
											color: "#999",
											display: "block",
											marginBottom: "6px",
										}}
									>
										Previous
									</span>
									<span
										style={{
											fontFamily: "'Cormorant Garamond',Georgia,serif",
											fontSize: "1.05rem",
											color: "#111",
											lineHeight: 1.4,
										}}
									>
										{prev.title}
									</span>
								</span>
							</Link>
						)}
					</div>
					<div className="max-w-[45%] text-right">
						{next && (
							<Link
								href={`/news/${slugify(next.title)}`}
								className="group flex items-start justify-end gap-3 hover:opacity-70 transition-opacity"
							>
								<span>
									<span
										style={{
											fontFamily: "'Barlow',sans-serif",
											fontSize: "0.62rem",
											letterSpacing: "0.16em",
											textTransform: "uppercase",
											color: "#999",
											display: "block",
											marginBottom: "6px",
										}}
									>
										Next
									</span>
									<span
										style={{
											fontFamily: "'Cormorant Garamond',Georgia,serif",
											fontSize: "1.05rem",
											color: "#111",
											lineHeight: 1.4,
										}}
									>
										{next.title}
									</span>
								</span>
								<span style={{ color: "#999", fontSize: "1.1rem" }}>
									&rsaquo;
								</span>
							</Link>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
