"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HOME } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.02] p-10"
        >
          <div className="pointer-events-none absolute -inset-20 opacity-70 blur-2xl">
            <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-[#00D4FF]/15" />
            <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-[#FF5C1A]/15" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="font-heading text-3xl tracking-tight text-white sm:text-4xl">
                {HOME.cta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
                {HOME.cta.subtitle}
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#FF5C1A] px-6 text-sm font-semibold text-black hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C1A]/70 lg:w-auto"
              >
                {HOME.cta.button} <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

