"use client";

import { motion } from "framer-motion";
import { HOME } from "@/lib/constants";

export function ProcessTimeline() {
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
            chaos.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOME.process.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <div className="font-heading text-lg text-white">{idx + 1}</div>
                </div>
                <div className="font-heading text-white">{p.title}</div>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/70">{p.desc}</p>
              <div className="mt-6 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#FF5C1A] to-[#00D4FF]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

