import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { intent, name, company, email, phone, service, budget, message } = body as Record<string, string>;

    if (!name || !company || !email || !phone || !service || !budget || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const to = process.env.CONTACT_NOTIFY_EMAIL || "orahhechandmarketing@gmail.com";
      const from = process.env.RESEND_FROM || "Orah Website <onboarding@resend.dev>";

      const subject =
        intent === "audit"
          ? `New Free Audit request from ${name}`
          : `New contact request from ${name}`;

      const text = [
        `Intent: ${intent ?? "project"}`,
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        `Budget: ${budget}`,
        "",
        "Message:",
        message,
      ].join("\n");

      await resend.emails.send({ from, to, subject, text });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contacts] error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
