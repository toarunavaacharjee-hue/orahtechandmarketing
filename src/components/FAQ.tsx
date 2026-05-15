"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = { q: string; a: string };

function FAQRow({ item, open, onToggle }: { item: FAQItem; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/8">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
      >
        <span className="text-sm font-semibold text-white/90">{item.q}</span>
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-transform duration-300"
          style={{ rotate: open ? "45deg" : "0deg" }}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-7 text-white/65">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ({ items, heading = "Frequently asked questions" }: { items: FAQItem[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <h2 className="font-heading text-2xl tracking-tight text-white sm:text-3xl">{heading}</h2>
      <div className="mt-8">
        {items.map((item, i) => (
          <FAQRow
            key={i}
            item={item}
            open={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}
