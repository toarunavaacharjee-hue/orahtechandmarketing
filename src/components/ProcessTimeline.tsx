"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { ProcessFlowDiagram } from "@/components/diagrams/ProcessFlowDiagram";
import { HOME } from "@/lib/constants";

const STEP_DETAILS = [
  [
    "Brand & audience briefing",
    "Competitive landscape scan",
    "Current asset + creative audit",
    "Goals, blockers, and timeline alignment",
  ],
  [
    "Messaging framework + tone of voice",
    "Visual creative direction + moodboard",
    "Deliverables breakdown + sprint roadmap",
    "Tool setup and collaboration workflow",
  ],
  [
    "Brand kit, logos, color + typography",
    "Websites, landing pages + UI",
    "Social templates + content packs",
    "Review rounds with clear feedback loops",
  ],
  [
    "Polish and final sign-off",
    "Systemised templates for in-house use",
    "Scale-ready content operations",
    "Optional: ongoing retainer support",
  ],
];

export function ProcessTimeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-20 border-y border-white/5 bg-black/20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-heading text-3xl tracking-tight text-white sm:text-4xl">
            A simple process. Built for speed.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            Clear steps, clear ownership, clear outcomes—so work moves forward without
            chaos. Click any step to see what happens.
          </p>
        </motion.div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Engagement map
          </p>
          <ProcessFlowDiagram />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOME.process.map((p, idx) => {
            const isOpen = expanded === idx;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
              >
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : idx)}
                  className={[
                    "group relative w-full rounded-2xl border p-6 text-left transition duration-300",
                    isOpen
                      ? "border-[#00D4FF]/30 bg-[#00D4FF]/5"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={[
                        "grid h-10 w-10 place-items-center rounded-xl ring-1 transition",
                        isOpen
                          ? "bg-[#00D4FF]/10 ring-[#00D4FF]/30 text-[#00D4FF]"
                          : "bg-white/5 ring-white/10 text-white",
                      ].join(" ")}
                    >
                      <div className="font-heading text-lg">{idx + 1}</div>
                    </div>
                    <div className="font-heading text-white">{p.title}</div>
                    <span
                      className={[
                        "ml-auto text-white/40 transition-transform duration-300",
                        isOpen ? "rotate-180" : "",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/70">{p.desc}</p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                          {STEP_DETAILS[idx].map((detail) => (
                            <li key={detail} className="flex items-start gap-2 text-sm text-white/60">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#00D4FF]" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isOpen && (
                    <div className="mt-6 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#FF5C1A] to-[#00D4FF]" />
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
