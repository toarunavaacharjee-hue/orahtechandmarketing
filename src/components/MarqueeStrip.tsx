"use client";

import { motion } from "framer-motion";
import { HOME } from "@/lib/constants";

export function MarqueeStrip() {
  const items = HOME.marquee;
  const doubled = [...items, ...items];

  return (
    <section className="border-y border-white/5 bg-black/20">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050A18] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050A18] to-transparent" />
        <motion.div
          className="flex gap-6 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((t, idx) => (
            <div
              key={`${t}-${idx}`}
              className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              <span className="uppercase tracking-wide">{t}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

