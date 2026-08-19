import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-white border-b border-gray-100 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-3">
					<Image
						src="/logo.png"
						alt="United Capital Corp"
						width={160}
						height={80}
						className="object-contain w-40 h-auto"
					/>
				</Link>

				<div className="flex items-center gap-6">
					<nav className="hidden md:flex items-center gap-8">
						{[
							{
								label: "About",
								href: "/about",
								children: [
									{ label: "About UCC", href: "/about" },
									{ label: "Our Mission", href: "/mission" },
								],
							},
							{ label: "Products", href: "/products" },
							{ label: "Transactions", href: "/transactions" },
							{ label: "News", href: "/news" },
						].map(({ label, href, children }) =>
							children ? (
								<div key={href} className="group relative">
									<Link
										href={href}
										style={{
											fontFamily: "'Barlow',sans-serif",
											fontSize: "0.65rem",
											letterSpacing: "0.14em",
											textTransform: "uppercase",
											fontWeight: 500,
											color: "#555",
											textDecoration: "none",
										}}
										className="hover:text-black transition-colors"
									>
										{label}
									</Link>
									<div className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
										<div
											className="absolute left-1/2 top-1.5 h-2 w-2 -translate-x-1/2 rotate-45"
											style={{ background: "#f8f6f2" }}
										/>
										<div
											className="relative min-w-42.5 py-4 px-6 text-center shadow-lg"
											style={{ background: "#f8f6f2" }}
										>
											{children.map((child) => (
												<Link
													key={child.href}
													href={child.href}
													style={{
														fontFamily: "'Barlow',sans-serif",
														fontSize: "0.62rem",
														letterSpacing: "0.12em",
														textTransform: "uppercase",
														fontWeight: 500,
														color: "#777",
														textDecoration: "none",
													}}
													className="block py-1.5 whitespace-nowrap hover:text-black transition-colors"
												>
													{child.label}
												</Link>
											))}
										</div>
									</div>
								</div>
							) : (
								<Link
									key={href}
									href={href}
									style={{
										fontFamily: "'Barlow',sans-serif",
										fontSize: "0.65rem",
										letterSpacing: "0.14em",
										textTransform: "uppercase",
										fontWeight: 500,
										color: "#555",
										textDecoration: "none",
									}}
									className="hover:text-black transition-colors"
								>
									{label}
								</Link>
							),
						)}
					</nav>

					<Link href="/contact" className="btn-dark rounded-full">
						Work With Us
					</Link>
				</div>
			</div>
		</header>
	);
}
