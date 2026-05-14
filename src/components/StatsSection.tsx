"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HOME } from "@/lib/constants";

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const ran = useRef(false);
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = value.match(/^([\d,]+)(\+?)(.*)$/);
    if (!match) { setDisplayed(value); return; }
    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2] + match[3];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran.current) {
          ran.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            const current = Math.floor(eased * target);
            setDisplayed(current.toLocaleString() + suffix);
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplayed(target.toLocaleString() + suffix);
          };
          requestAnimationFrame(tick);
        }
      },
      { rootMargin: "-80px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
      }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
    >
      <div className="font-heading text-3xl tracking-tight text-white">{displayed}</div>
      <div className="mt-2 text-sm font-semibold text-white/65">{label}</div>
      <div className="mt-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#FF5C1A] to-[#00D4FF]" />
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="font-heading text-3xl tracking-tight text-white sm:text-4xl">
              {HOME.why.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">{HOME.why.blurb}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid gap-4 sm:grid-cols-3 lg:col-span-7"
          >
            {HOME.why.metrics.map((m) => (
              <StatCard key={m.label} value={m.value} label={m.label} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
