import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "AI Marketing Workbench — Case Study",
  description:
    "How we designed and built AI Marketing Workbench — a full-stack SaaS PMM + GTM operating platform with 18 AI-powered modules.",
};

const modules = [
  "Command Centre",
  "Market Research",
  "ICP Segmentation",
  "Positioning Studio",
  "Messaging & Artifacts",
  "Campaigns",
  "GTM Planner",
  "Events",
  "Content Studio",
  "Social Media",
  "Design & Assets",
  "Presentations",
  "Website & Pages",
  "Analytics",
  "Battlecards",
  "Sales Intelligence",
  "Customer Insights",
  "AI Copilot",
];

const stack = [
  { label: "Framework", value: "Next.js 14 · App Router · TypeScript" },
  { label: "Styling", value: "Tailwind CSS · custom design system" },
  { label: "Auth & DB", value: "Supabase (Postgres + Row-Level Security)" },
  { label: "Payments", value: "Stripe — Starter / Growth / Enterprise tiers" },
  { label: "AI", value: "Anthropic Claude (claude-sonnet-4-6)" },
  { label: "Deployment", value: "Vercel — separate projects for marketing site + app" },
];

export default function AIWorkbenchCaseStudy() {
  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition mb-8"
            >
              ← Back to Work
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#7c6cff]/10 px-3 py-1 text-xs font-semibold text-[#b8ff6c] ring-1 ring-[#7c6cff]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b8ff6c]" />
              Product · Full-stack SaaS · Shipped
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              AI Marketing Workbench
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              A complete PMM + GTM operating layer built from zero — 18 AI-powered modules
              covering the full marketing stack, from ICP segmentation to prospect research.
              Not a CRM. Not another dashboard. A purpose-built OS for marketing teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://aimarketingworkbench.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#FF5C1A] px-5 text-sm font-semibold text-black hover:brightness-110 transition"
              >
                Visit live site ↗
              </a>
              <a
                href="https://app.aimarketingworkbench.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                Open app ↗
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Problem */}
      <section className="border-t border-white/5 bg-black/20 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
              The problem
            </p>
            <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
              Marketing teams have no dedicated operating system
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Work scattered everywhere",
                  body: "Positioning docs in Notion, ICP research in spreadsheets, campaign plans in slide decks — no single source of truth.",
                },
                {
                  title: "AI bolted on, not built in",
                  body: "Copying outputs from ChatGPT into separate tools. No context, no memory, no connection to the actual marketing strategy.",
                },
                {
                  title: "CRMs aren't built for PMMs",
                  body: "Salesforce and HubSpot are sales tools. Product marketers building GTM strategy needed something purpose-built.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <div className="font-heading text-base text-white">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-white/65">{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What we built */}
      <section className="border-t border-white/5 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
              What we built
            </p>
            <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
              18 modules. One platform. End-to-end.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
              Every module is connected — research informs positioning, positioning feeds messaging,
              messaging powers campaigns. AI runs throughout, with context carried across the workspace.
            </p>
            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((mod, i) => (
                <div
                  key={mod}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#7c6cff]/15 text-[10px] font-bold text-[#b8ff6c]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/80">{mod}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-white/5 bg-black/20 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
              Tech stack
            </p>
            <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
              Built to scale from day one
            </h2>
            <div className="mt-8 divide-y divide-white/5 rounded-2xl border border-white/10 overflow-hidden">
              {stack.map((item) => (
                <div key={item.label} className="flex items-baseline gap-6 px-6 py-4 bg-white/[0.01]">
                  <div className="w-28 shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                    {item.label}
                  </div>
                  <div className="text-sm text-white/80">{item.value}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section className="border-t border-white/5 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
              Monetisation
            </p>
            <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
              Three-tier subscription model
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { plan: "Starter", price: "$99/mo", products: "2 products", seats: "1 seat", ai: "100 AI runs/mo" },
                { plan: "Growth", price: "$299/mo", products: "10 products", seats: "3 seats", ai: "Unlimited AI" },
                { plan: "Enterprise", price: "$999/mo", products: "30 products", seats: "5 seats", ai: "Unlimited + BYOK" },
              ].map((tier) => (
                <div
                  key={tier.plan}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <div className="font-heading text-lg text-white">{tier.plan}</div>
                  <div className="mt-1 text-2xl font-bold text-[#FF5C1A]">{tier.price}</div>
                  <ul className="mt-4 space-y-2 text-sm text-white/65">
                    <li>{tier.products}</li>
                    <li>{tier.seats}</li>
                    <li>{tier.ai}</li>
                    <li>All 18 modules included</li>
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-black/20 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl tracking-tight text-white sm:text-3xl">
              Want us to build your product?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
              We designed, built, and shipped AI Marketing Workbench end-to-end — from product
              architecture to design system to deployment. If you have a product idea, let's talk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#FF5C1A] px-5 text-sm font-semibold text-black hover:brightness-110 transition"
              >
                Start a conversation →
              </Link>
              <Link
                href="/work"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                Back to Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
