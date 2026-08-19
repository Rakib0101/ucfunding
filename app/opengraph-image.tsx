import { ImageResponse } from "next/og";

export const alt = "United Capital Corp — Commercial Finance Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					background: "linear-gradient(135deg, #1a2c42 0%, #2e4460 100%)",
					color: "#ffffff",
					fontFamily: "Georgia, serif",
				}}
			>
				<div
					style={{
						fontSize: 22,
						letterSpacing: 6,
						color: "#c9a96e",
						fontFamily: "Helvetica, Arial, sans-serif",
						fontWeight: 600,
						marginBottom: 28,
					}}
				>
					COMMERCIAL FINANCE SOLUTIONS
				</div>
				<div style={{ fontSize: 84, fontWeight: 700, textAlign: "center" }}>
					United Capital Corp
				</div>
				<div
					style={{
						fontSize: 26,
						color: "rgba(255,255,255,0.75)",
						marginTop: 28,
						fontFamily: "Helvetica, Arial, sans-serif",
						fontWeight: 300,
					}}
				>
					Equipment Leasing · Venture Debt · Asset-Based Lending
				</div>
			</div>
		),
		{ ...size },
	);
}
