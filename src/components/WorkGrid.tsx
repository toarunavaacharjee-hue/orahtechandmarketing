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
    thumbnail: "/work/ai-marketing-workbench.svg",
  },
  { industry: "E-commerce" as const, metric: "New product creative system", title: "Catalog Creative Refresh", description: "Rebuilt a D2C catalog's creative system from scratch—new product photography guidelines, PDP templates, and a social kit that cut production time by 60%.", href: "/contact", featured: false, thumbnail: "/work/catalog-creative.svg" },
  { industry: "SaaS" as const, metric: "Website redesign + UI kit", title: "Narrative-led Website Overhaul", description: "Redesigned a B2B SaaS homepage and core landing pages around a clearer narrative. Demo request rate doubled within 6 weeks of launch.", href: "/contact", featured: false, thumbnail: "/work/narrative-website.svg" },
  { industry: "D2C" as const, metric: "Brand system + templates", title: "Content Consistency Engine", description: "Designed a full brand system and social template pack for a D2C brand. Output that used to take a week now ships in a day—without losing quality.", href: "/contact", featured: false, thumbnail: "/work/content-engine.svg" },
  { industry: "Real Estate" as const, metric: "Brochure + landing page", title: "Premium Project Presentation", description: "Created a gold-standard presentation system for a luxury developer—brochures, a project landing page, and social creatives that drove 40% more enquiries.", href: "/contact", featured: false, thumbnail: "/work/premium-presentation.svg" },
  { industry: "E-commerce" as const, metric: "PDP + landing page UX", title: "Conversion-focused Store UX", description: "Audited and redesigned a Shopify store's product pages and checkout flow. Reduced drop-off at PDP by 28% and improved add-to-cart rate by 19%.", href: "/contact", featured: false, thumbnail: "/work/store-ux.svg" },
  { industry: "NGO" as const, metric: "Donation page redesign", title: "Trust-first Impact Storytelling", description: "Redesigned a foundation's donation journey with clearer impact metrics and storytelling. Average donation value increased by 35% in the first campaign.", href: "/contact", featured: false, thumbnail: "/work/impact-storytelling.svg" },
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
                "group flex h-full flex-col rounded-2xl border overflow-hidden transition",
                c.featured
                  ? "border-[#7c6cff]/30 bg-[#7c6cff]/5 hover:border-[#7c6cff]/50 hover:bg-[#7c6cff]/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
              ].join(" ")}
            >
              {/* Thumbnail */}
              <div className={["relative w-full overflow-hidden", c.featured ? "h-48" : "h-36"].join(" ")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.thumbnail}
                  alt={c.title}
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050A18]/60 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
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
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}



