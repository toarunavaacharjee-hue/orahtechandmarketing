"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const filters = ["All", "E-commerce", "SaaS", "D2C", "Real Estate", "NGO"] as const;
type Filter = (typeof filters)[number];

const cases = [
  { industry: "E-commerce", metric: "New product creative system", title: "Catalog Creative Refresh" },
  { industry: "SaaS", metric: "Website redesign + UI kit", title: "Narrative-led Website Overhaul" },
  { industry: "D2C", metric: "Brand system + templates", title: "Content Consistency Engine" },
  { industry: "Real Estate", metric: "Brochure + landing page", title: "Premium Project Presentation" },
  { industry: "E-commerce", metric: "PDP + landing page UX", title: "Conversion-focused Store UX" },
  { industry: "NGO", metric: "Donation page redesign", title: "Trust-first Impact Storytelling" },
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

