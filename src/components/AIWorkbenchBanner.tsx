"use client";

import { motion } from "framer-motion";
import { AI_WORKBENCH } from "@/lib/constants";

const FEATURES = [
  "18 marketing modules in one OS",
  "AI Copilot powered by Claude",
  "Market research, ICP & campaign planning",
  "GTM planner, battlecards & analytics",
];

export function AIWorkbenchBanner() {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#7c6cff]/10 via-white/[0.03] to-[#b8ff6c]/5 p-10"
        >
          <div className="pointer-events-none absolute -inset-20 opacity-60 blur-3xl">
            <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#7c6cff]/20" />
            <div className="absolute right-1/4 bottom-0 h-60 w-60 rounded-full bg-[#b8ff6c]/10" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8ff6c]">
                Built by Orah · Product
              </p>
              <h2 className="mt-3 font-heading text-3xl tracking-tight text-white sm:text-4xl">
                The complete Marketing OS—
                <br className="hidden sm:block" />
                powered by AI.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                AI Marketing Workbench gives your team one place for every marketing motion—research,
                campaigns, content, analytics, and an AI copilot that knows your brand.
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="mt-0.5 h-4 w-4 shrink-0 grid place-items-center rounded-full bg-[#b8ff6c]/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b8ff6c]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:flex lg:flex-col lg:items-end lg:justify-center">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={`${AI_WORKBENCH.url}/signup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#b8ff6c] px-6 text-sm font-semibold text-black hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b8ff6c]/70"
                >
                  Try it free →
                </a>
                <a
                  href={AI_WORKBENCH.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white/5 px-6 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition"
                >
                  Learn more
                </a>
              </div>
              <p className="mt-4 text-center text-xs text-white/40 lg:text-right">
                Starter plan from $49/mo · No credit card needed to explore
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
