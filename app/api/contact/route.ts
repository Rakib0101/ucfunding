import nodemailer from "nodemailer";

interface ContactPayload {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
	message?: string;
}

export async function POST(request: Request) {
	let payload: ContactPayload;

	try {
		payload = await request.json();
	} catch {
		return Response.json({ error: "Invalid request." }, { status: 400 });
	}

	const { firstName, lastName, email, phone, message } = payload;

	if (!firstName || !lastName || !email || !message) {
		return Response.json(
			{ error: "Please fill out all required fields." },
			{ status: 400 },
		);
	}

	const smtpUser = process.env.ZOHO_SMTP_USER;
	const smtpPassword = process.env.ZOHO_SMTP_PASSWORD;
	const toEmail = process.env.CONTACT_TO_EMAIL || smtpUser;

	if (!smtpUser || !smtpPassword) {
		console.error(
			"Contact form: missing ZOHO_SMTP_USER/ZOHO_SMTP_PASSWORD env vars.",
		);
		return Response.json(
			{ error: "Email is not configured yet. Please try again later." },
			{ status: 500 },
		);
	}

	const transporter = nodemailer.createTransport({
		host: "smtp.zoho.com",
		port: 465,
		secure: true,
		auth: { user: smtpUser, pass: smtpPassword },
	});

	try {
		await transporter.sendMail({
			from: `"United Capital Corp Website" <${smtpUser}>`,
			to: toEmail,
			replyTo: email,
			subject: `New contact form submission from ${firstName} ${lastName}`,
			text: [
				`Name: ${firstName} ${lastName}`,
				`Email: ${email}`,
				`Phone: ${phone || "—"}`,
				"",
				"Message:",
				message,
			].join("\n"),
		});
	} catch (err) {
		console.error("Contact form email failed:", err);
		return Response.json(
			{ error: "Failed to send message. Please try again." },
			{ status: 500 },
		);
	}

	return Response.json({ ok: true });
}
