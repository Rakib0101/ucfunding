"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
	const router = useRouter();
	const [status, setStatus] = useState<"idle" | "submitting" | "error">(
		"idle",
	);
	const [error, setError] = useState("");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("submitting");
		setError("");

		const data = new FormData(e.currentTarget);

		try {
			const res = await fetch("/api/contact/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					firstName: data.get("firstName"),
					lastName: data.get("lastName"),
					email: data.get("email"),
					phone: data.get("phone"),
					message: data.get("message"),
				}),
			});

			if (!res.ok) {
				const body = await res.json().catch(() => ({}));
				throw new Error(
					body.error || "Something went wrong. Please try again.",
				);
			}

			router.push("/thank-you");
		} catch (err) {
			setStatus("error");
			setError(
				err instanceof Error
					? err.message
					: "Something went wrong. Please try again.",
			);
		}
	}

	return (
		<form className="space-y-5" onSubmit={handleSubmit}>
			<div className="grid grid-cols-2 gap-6">
				<div>
					<label htmlFor="firstName" className="mb-1 block text-sm font-medium">
						First Name
					</label>
					<input
						id="firstName"
						name="firstName"
						className="form-field"
						type="text"
						placeholder="First Name"
						required
					/>
				</div>
				<div>
					<label htmlFor="lastName" className="mb-1 block text-sm font-medium">
						Last Name
					</label>
					<input
						id="lastName"
						name="lastName"
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
				id="email"
				name="email"
				className="form-field"
				type="email"
				placeholder="Email Address"
				required
			/>
			<label htmlFor="phone" className="mb-1 block text-sm font-medium">
				Phone Number
			</label>
			<input
				id="phone"
				name="phone"
				className="form-field"
				type="tel"
				placeholder="Phone Number"
			/>
			<label htmlFor="message" className="mb-1 block text-sm font-medium">
				How can we help you?
			</label>
			<textarea
				id="message"
				name="message"
				className="form-field resize-none"
				rows={4}
				placeholder="Message"
				required
			/>
			{status === "error" && (
				<p style={{ color: "#b42318", fontSize: "0.8rem" }}>{error}</p>
			)}
			<button
				type="submit"
				disabled={status === "submitting"}
				className="btn-dark px-8 mt-2 rounded-full disabled:opacity-50"
			>
				{status === "submitting" ? "Sending..." : "Send Your Message"}
			</button>
		</form>
	);
}
