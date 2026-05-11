"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HOME } from "@/lib/constants";

type StripItem = { text: string; kind: "value" | "service" };

export function MarqueeStrip() {
  const reduceMotion = useReducedMotion();

  const items: StripItem[] = [
    ...HOME.hero.ticker.map((text) => ({ text, kind: "value" as const })),
    ...HOME.marquee.map((text) => ({ text, kind: "service" as const })),
  ];
  const doubled = [...items, ...items];

  return (
    <section className="border-y border-white/5 bg-black/20">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#050A18] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#050A18] to-transparent sm:w-20" />

        {reduceMotion ? (
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 sm:px-8">
            {items.map((item) => (
              <div
                key={`${item.kind}-${item.text}`}
                className="flex items-center gap-3 text-sm font-semibold text-white/75"
              >
                <span
                  className={
                    item.kind === "value"
                      ? "h-1.5 w-1.5 rounded-full bg-[#FF5C1A]"
                      : "h-1.5 w-1.5 rounded-full bg-[#00D4FF]"
                  }
                />
                <span className={item.kind === "service" ? "uppercase tracking-wide" : ""}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex w-max gap-6 py-4 pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {doubled.map((item, idx) => (
              <div
                key={`${item.kind}-${item.text}-${idx}`}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-white/75"
              >
                <span
                  className={
                    item.kind === "value"
                      ? "h-1.5 w-1.5 rounded-full bg-[#FF5C1A]"
                      : "h-1.5 w-1.5 rounded-full bg-[#00D4FF]"
                  }
                />
                <span className={item.kind === "service" ? "uppercase tracking-wide" : ""}>
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
