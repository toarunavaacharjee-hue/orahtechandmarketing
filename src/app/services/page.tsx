import Link from "next/link";
import type { Metadata } from "next";

import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import { CreativeStackDiagram } from "@/components/diagrams/CreativeStackDiagram";
import { ProcessFlowDiagram } from "@/components/diagrams/ProcessFlowDiagram";
import { HOME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Creative strategy, branding, UI/UX, social media creatives, and web design & development—everything you need to look premium online.",
};

const servicesPricing: Record<string, string> = {
  "Creative Strategy & Design": "From $1,500",
  "Branding & Identity": "From $2,500",
  "Web Design & Development": "From $3,500",
  "UI/UX for Products": "From $2,000",
  "Social Media Creatives": "From $800 / mo",
  "AI Creative Automation": "From $1,500",
};

const faqItems = [
  {
    q: "How long does a typical project take?",
    a: "It depends on scope—branding projects run 2–4 weeks, website builds 4–8 weeks, and ongoing creative retainers are month-to-month. We share a clear timeline before any work starts.",
  },
  {
    q: "Do you work with startups or only established brands?",
    a: "Both. We work with early-stage founders who need to build their brand from scratch and with established teams who need to systematise and scale their creative output.",
  },
  {
    q: "What's included in a 'design system'?",
    a: "A design system from us includes colour tokens, typography scale, spacing rules, reusable UI components (in Figma), and a usage guide your team can follow independently.",
  },
  {
    q: "Can I start with just one service and expand later?",
    a: "Absolutely. Many clients start with branding or a landing page, then expand into social templates, web redesigns, or AI automation once they see results.",
  },
  {
    q: "Do you offer retainers?",
    a: "Yes. Our monthly retainers cover ongoing creative production—social creatives, email graphics, ad assets, and content refreshes—at a fixed monthly rate.",
  },
  {
    q: "What do the prices cover?",
    a: "Each price is a starting point for a defined scope. Final quotes depend on complexity, number of deliverables, and timeline. We always share a detailed breakdown before you commit.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Full-service growth team
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Everything you need to look premium online
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Creative strategy, design systems, and modern web execution—delivered with speed,
              clarity, and consistency.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-white/5 bg-black/20 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5C1A]">
                Systems, not one-offs
              </p>
              <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
                One creative stack—so every touchpoint feels like the same brand
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Guidelines feed templates, templates feed web and social, and web patterns feed
                product UI—fewer mismatches, faster reviews, cleaner launches.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  Typical flow
                </p>
                <ProcessFlowDiagram />
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <CreativeStackDiagram className="flex justify-center lg:justify-end" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-2">
            {HOME.services.items.map((s, idx) => (
              <FadeIn key={s.title} delay={idx * 0.03}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="font-heading text-2xl text-white">{s.title}</div>
                      <p className="mt-3 text-sm leading-6 text-white/70">{s.desc}</p>
                    </div>
                    <div className="shrink-0 rounded-full bg-[#FF5C1A]/10 px-3 py-1 text-xs font-semibold text-[#FF5C1A] ring-1 ring-[#FF5C1A]/20 whitespace-nowrap">
                      {servicesPricing[s.title]}
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-3 text-sm text-white/70">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-[#FF5C1A] px-4 text-sm font-semibold text-black hover:brightness-110 transition"
                    >
                      Get a quote →
                    </Link>
                    <Link
                      href="/work"
                      className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-white ring-1 ring-white/15 hover:ring-white/30 hover:bg-white/5 transition"
                    >
                      See results
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-16 pb-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <FAQ items={faqItems} heading="Common questions about our services" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
