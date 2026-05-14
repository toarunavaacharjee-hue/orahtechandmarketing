"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const filters = ["All", "Product", "E-commerce", "SaaS", "D2C", "Real Estate", "NGO"] as const;
type Filter = (typeof filters)[number];

const cases = [
  {
    industry: "Product" as const,
    metric: "Full-stack SaaS · shipped",
    title: "AI Marketing Workbench",
    description: "Built a complete PMM + GTM operating platform from zero — 18 AI-powered modules, auth, billing, and a two-site Vercel deployment.",
    href: "/work/ai-marketing-workbench",
    featured: true,
  },
  { industry: "E-commerce" as const, metric: "New product creative system", title: "Catalog Creative Refresh", description: "Strategy, design, templates, and web experience—delivered with a clear system so output stays consistent.", href: "/contact", featured: false },
  { industry: "SaaS" as const, metric: "Website redesign + UI kit", title: "Narrative-led Website Overhaul", description: "Strategy, design, templates, and web experience—delivered with a clear system so output stays consistent.", href: "/contact", featured: false },
  { industry: "D2C" as const, metric: "Brand system + templates", title: "Content Consistency Engine", description: "Strategy, design, templates, and web experience—delivered with a clear system so output stays consistent.", href: "/contact", featured: false },
  { industry: "Real Estate" as const, metric: "Brochure + landing page", title: "Premium Project Presentation", description: "Strategy, design, templates, and web experience—delivered with a clear system so output stays consistent.", href: "/contact", featured: false },
  { industry: "E-commerce" as const, metric: "PDP + landing page UX", title: "Conversion-focused Store UX", description: "Strategy, design, templates, and web experience—delivered with a clear system so output stays consistent.", href: "/contact", featured: false },
  { industry: "NGO" as const, metric: "Donation page redesign", title: "Trust-first Impact Storytelling", description: "Strategy, design, templates, and web experience—delivered with a clear system so output stays consistent.", href: "/contact", featured: false },
] as const;

export function WorkGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return cases;
    return cases.filter((c) => c.industry === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={[
                "h-10 rounded-full px-4 text-sm font-semibold transition",
                isActive
                  ? "bg-white/10 text-white ring-1 ring-white/20"
                  : "text-white/70 ring-1 ring-white/10 hover:text-white hover:bg-white/5",
              ].join(" ")}
            >
              {f}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <motion.div
            key={`${c.title}-${c.metric}`}
            layout
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className={c.featured ? "sm:col-span-2 lg:col-span-2" : ""}
          >
            <Link
              href={c.href}
              className={[
                "group flex h-full flex-col rounded-2xl border p-6 transition",
                c.featured
                  ? "border-[#7c6cff]/30 bg-[#7c6cff]/5 hover:border-[#7c6cff]/50 hover:bg-[#7c6cff]/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs font-semibold text-white/60">{c.industry}</div>
                <div className={[
                  "rounded-full px-3 py-1 text-xs font-semibold ring-1",
                  c.featured
                    ? "bg-[#7c6cff]/15 text-[#b8ff6c] ring-[#7c6cff]/30"
                    : "bg-[#00D4FF]/10 text-[#00D4FF] ring-[#00D4FF]/20",
                ].join(" ")}>
                  {c.metric}
                </div>
              </div>
              <div className="mt-4 font-heading text-lg text-white">{c.title}</div>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/70">{c.description}</p>
              <div className={[
                "mt-6 inline-flex items-center gap-2 text-sm font-semibold transition",
                c.featured
                  ? "text-[#b8ff6c] opacity-100"
                  : "text-[#FF5C1A] opacity-0 group-hover:opacity-100",
              ].join(" ")}>
                {c.featured ? "View case study →" : "View Case Study →"}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}


export function WorkGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return cases;
    return cases.filter((c) => c.industry === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={[
                "h-10 rounded-full px-4 text-sm font-semibold transition",
                isActive
                  ? "bg-white/10 text-white ring-1 ring-white/20"
                  : "text-white/70 ring-1 ring-white/10 hover:text-white hover:bg-white/5",
              ].join(" ")}
            >
              {f}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <motion.div
            key={`${c.title}-${c.metric}`}
            layout
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.05] transition">
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs font-semibold text-white/60">{c.industry}</div>
                <div className="rounded-full bg-[#00D4FF]/10 px-3 py-1 text-xs font-semibold text-[#00D4FF] ring-1 ring-[#00D4FF]/20">
                  {c.metric}
                </div>
              </div>
              <div className="mt-4 font-heading text-lg text-white">{c.title}</div>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Strategy, design, templates, and web experience—delivered with a clear system so output stays consistent.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF5C1A] opacity-0 transition group-hover:opacity-100"
              >
                View Case Study <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

