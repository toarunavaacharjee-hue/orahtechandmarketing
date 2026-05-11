"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { CreativeCollage } from "@/components/CreativeCollage";
import { HOME } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function splitHeadline(full: string) {
  const idx = full.indexOf(". ");
  if (idx === -1) return { first: full, second: "" as string };
  return { first: full.slice(0, idx + 1), second: full.slice(idx + 2) };
}

export function HeroSection() {
  const { first, second } = splitHeadline(HOME.hero.headline);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#050A18]" />
        <motion.div
          aria-hidden="true"
          className="absolute -inset-40 opacity-90"
          animate={{ rotate: [0, 10, -6, 0], scale: [1, 1.03, 1.02, 1] }}
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
          style={{
            background:
              "radial-gradient(600px 400px at 20% 25%, rgba(0,212,255,0.22), transparent 60%), radial-gradient(700px 520px at 70% 25%, rgba(255,92,26,0.16), transparent 60%), radial-gradient(700px 520px at 50% 80%, rgba(10,15,44,0.65), transparent 60%)",
            filter: "blur(24px)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,10,24,0)_0%,rgba(5,10,24,1)_70%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.18]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl flex-col justify-center px-4 pb-8 pt-10 sm:px-6 sm:pt-14 sm:pb-10 lg:grid lg:min-h-[calc(100vh-64px)] lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-14">
        <div className="max-w-3xl lg:col-span-7">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
            Creative systems · campaigns · product UI
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-heading text-4xl leading-[1.05] tracking-tight sm:text-6xl"
          >
            <span className="text-white">{first}</span>
            {second ? (
              <>
                {" "}
                <span className="text-gradient-playful">{second}</span>
              </>
            ) : null}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
          >
            {HOME.hero.subtext}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#FF5C1A] px-6 text-sm font-semibold text-black hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C1A]/70"
            >
              {HOME.hero.ctaPrimary} <span className="ml-2">→</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/0 px-6 text-sm font-semibold text-white ring-1 ring-white/15 hover:ring-white/30 hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/70"
            >
              {HOME.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        <div className="hidden min-h-0 lg:col-span-5 lg:block">
          <CreativeCollage />
        </div>
      </div>
    </section>
  );
}

