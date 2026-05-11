"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Budget = "Under $1k" | "$1k–$3k" | "$3k–$7.5k" | "$7.5k+" | "Not sure yet";
type Service =
  | "Creative Strategy & Design"
  | "Branding & Identity"
  | "Web Design & Development"
  | "UI/UX for Products"
  | "Social Media Creatives"
  | "AI Creative Automation";

const services: Service[] = [
  "Creative Strategy & Design",
  "Branding & Identity",
  "Web Design & Development",
  "UI/UX for Products",
  "Social Media Creatives",
  "AI Creative Automation",
];

const budgets: Budget[] = ["Under $1k", "$1k–$3k", "$3k–$7.5k", "$7.5k+", "Not sure yet"];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
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

export function ContactForm({
  intent,
  defaultService,
  defaultBudget,
  messagePlaceholder,
}: {
  intent?: "audit" | "project";
  defaultService?: Service;
  defaultBudget?: Budget;
  messagePlaceholder?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [service, setService] = useState<string>(defaultService ?? "");
  const [budget, setBudget] = useState<string>(defaultBudget ?? "");
  const [error, setError] = useState<string>("");

  const placeholder = useMemo(
    () => messagePlaceholder ?? "Tell us what you need and what success looks like.",
    [messagePlaceholder]
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("sending");

    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setStatus("idle");
      setError("Something went wrong. Please try again or email us directly.");
      return;
    }

    setStatus("sent");

    form.reset();
    setService(defaultService ?? "");
    setBudget(defaultBudget ?? "");
    window.setTimeout(() => setStatus("idle"), 3500);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="intent" value={intent ?? "project"} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input required name="name" className={inputClassName()} placeholder="Your full name" />
        </Field>
        <Field label="Company / Organisation">
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
          <input
            required
            name="phone"
            className={inputClassName()}
            placeholder="+1 (555) 000-0000 or +91 90000 00000"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Service interested in">
          <select
            required
            name="service"
            className={inputClassName()}
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
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
          <select
            required
            name="budget"
            className={inputClassName()}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
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

        <div className="min-h-6">
          {error ? (
            <div className="text-sm font-semibold text-[#FF5C1A]">{error}</div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={status === "sent" ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              className="text-sm font-semibold text-[#00D4FF]"
            >
              Message sent. We’ll reply within 1 business day.
            </motion.div>
          )}
        </div>
      </div>
    </form>
  );
}

