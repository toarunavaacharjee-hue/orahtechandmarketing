"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Budget = "Under ₹50k" | "₹50k–₹1L" | "₹1L–₹3L" | "₹3L+";
type Service =
  | "Performance Marketing"
  | "SEO & Content"
  | "Web & App Development"
  | "AI Marketing Automation"
  | "Social Media Management"
  | "Branding & Design";

const services: Service[] = [
  "Performance Marketing",
  "SEO & Content",
  "Web & App Development",
  "AI Marketing Automation",
  "Social Media Management",
  "Branding & Design",
];

const budgets: Budget[] = ["Under ₹50k", "₹50k–₹1L", "₹1L–₹3L", "₹3L+"];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-semibold text-white/80">{label}</span>
      {children}
    </label>
  );
}

function inputClassName() {
  return [
    "h-11 w-full rounded-xl px-4",
    "bg-white/[0.03] border border-white/10 text-white",
    "placeholder:text-white/35",
    "focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/60 focus:border-white/20",
  ].join(" ");
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const placeholder = useMemo(
    () => "Tell us about your goals, timeline, and what success looks like.",
    []
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Production: wire this to an email provider or CRM (Resend, Postmark, HubSpot, etc.)
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    (e.currentTarget as HTMLFormElement).reset();
    window.setTimeout(() => setStatus("idle"), 3500);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input required name="name" className={inputClassName()} placeholder="Your full name" />
        </Field>
        <Field label="Company">
          <input required name="company" className={inputClassName()} placeholder="Company name" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email">
          <input
            required
            type="email"
            name="email"
            className={inputClassName()}
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Phone">
          <input required name="phone" className={inputClassName()} placeholder="+91 XXXXX XXXXX" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Service interested in">
          <select required name="service" className={inputClassName()}>
            <option value="" className="bg-[#050A18]">
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-[#050A18]">
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range">
          <select required name="budget" className={inputClassName()}>
            <option value="" className="bg-[#050A18]">
              Select a budget
            </option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-[#050A18]">
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message">
        <textarea
          required
          name="message"
          rows={5}
          className={[
            "w-full rounded-xl px-4 py-3",
            "bg-white/[0.03] border border-white/10 text-white",
            "placeholder:text-white/35",
            "focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/60 focus:border-white/20",
          ].join(" ")}
          placeholder={placeholder}
        />
      </Field>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#FF5C1A] px-6 text-sm font-semibold text-black hover:brightness-110 transition disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send Message →"}
        </button>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={status === "sent" ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          className="text-sm font-semibold text-[#00D4FF]"
        >
          Message sent. We’ll reply within 1 business day.
        </motion.div>
      </div>
    </form>
  );
}

