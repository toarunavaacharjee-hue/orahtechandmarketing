"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { HOME } from "@/lib/constants";

function clampIndex(i: number, len: number) {
  return ((i % len) + len) % len;
}

export function Testimonials() {
  const items = useMemo(() => HOME.testimonials, []);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((v) => v + 1), 6500);
    return () => window.clearInterval(id);
  }, []);

  const t = items[clampIndex(active, items.length)];

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-white sm:text-4xl">
              Proof, not promises.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Real teams. Real outcomes. Transparent delivery.
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className="rounded-full p-2"
              >
                <span
                  className={[
                    "block h-1.5 w-7 rounded-full transition",
                    clampIndex(active, items.length) === idx
                      ? "bg-[#FF5C1A]"
                      : "bg-white/15 hover:bg-white/25",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${t.name}-${active}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FF5C1A]/15 text-[#FF5C1A] ring-1 ring-[#FF5C1A]/30">
                  <span className="font-heading text-3xl leading-none">“</span>
                </div>
                <div>
                  <p className="text-base leading-7 text-white/75">{t.quote}</p>
                  <div className="mt-6">
                    <div className="font-heading text-white">{t.name}</div>
                    <div className="text-sm text-white/60">{t.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 sm:p-8"
          >
            <div className="font-heading text-lg text-white">What you get</div>
            <ul className="mt-5 grid gap-3 text-sm text-white/70">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                Weekly creative cadence + clear next steps
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                Clear review loops + reliable delivery
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                Fast execution across creative, dev, and media
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                AI automation for smarter operations
              </li>
            </ul>
            <div className="mt-7 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#FF5C1A] to-[#00D4FF]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

