import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter: max 5 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count += 1;
  return true;
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").trim().slice(0, 2000);
}

function buildHtmlEmail(fields: Record<string, string>): string {
  const rows = Object.entries(fields)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 12px;color:#111">${v.replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f5f5f5;padding:24px">
<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)">
  <div style="background:#FF5C1A;padding:20px 24px">
    <h1 style="margin:0;color:#fff;font-size:18px">New enquiry — Orah Tech and Marketing</h1>
  </div>
  <table style="width:100%;border-collapse:collapse;padding:16px">${rows}</table>
  <div style="padding:16px 24px;border-top:1px solid #eee;font-size:12px;color:#999">
    Submitted via orahtechandmarketing.com
  </div>
</div></body></html>`;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const intent = sanitize(body.intent);
    const name = sanitize(body.name);
    const company = sanitize(body.company);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const service = sanitize(body.service);
    const budget = sanitize(body.budget);
    const message = sanitize(body.message);

    if (!name || !company || !email || !phone || !service || !budget || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const to = process.env.CONTACT_NOTIFY_EMAIL || "hello@orahtechandmarketing.com";
      const from = process.env.RESEND_FROM || "Orah Website <onboarding@resend.dev>";

      const subject =
        intent === "audit"
          ? `New Free Audit request from ${name} (${company})`
          : `New project enquiry from ${name} (${company})`;

      const fields: Record<string, string> = {
        Intent: intent || "project",
        Name: name,
        Company: company,
        Email: email,
        Phone: phone,
        Service: service,
        Budget: budget,
        Message: message,
      };

      await resend.emails.send({
        from,
        to,
        subject,
        html: buildHtmlEmail(fields),
        text: Object.entries(fields)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contacts] error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
