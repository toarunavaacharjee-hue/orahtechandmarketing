"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { HOME } from "@/lib/constants";

function Icon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M14 3c3 1 6 4 7 7-2 3-5 6-8 8-2 1-4 1-5 0-1-1-1-3 0-5 2-3 5-6 6-10Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M9 12c-2 1-4 1-6 1 0 2 1 4 3 6 0-2 0-4 1-6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M14.5 9.5h.01"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M16.5 16.5 21 21"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="m8 8-4 4 4 4M16 8l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 6 10 18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 2l1.2 5.3L19 8.6l-4.3 3.2L16 17l-4-2.6L8 17l1.3-5.2L5 8.6l5.8-1.3L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "social":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M17 8a3 3 0 1 0-2.8-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M7 14a3 3 0 1 0 2.8 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M8.9 12.3 15.1 9.7M15.1 14.3 8.9 11.7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "palette":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
          <path
            d="M12 3c-5 0-9 4-9 9 0 4 3 7 7 7h1c1 0 2 .8 2 1.8S12 22 11 22h1c5 0 9-4 9-9s-4-10-9-10Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M7.5 12h.01" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M10 8.5h.01" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M14.5 9h.01" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M16 13h.01" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      );
    default:
      return <span className="block h-5 w-5 rounded bg-white/20" aria-hidden="true" />;
  }
}

export function ServicesGrid() {
  return (
    <section className="relative py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-heading text-3xl tracking-tight text-white sm:text-4xl">
            {HOME.services.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">{HOME.services.subtitle}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {HOME.services.items.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Link
                href="/services"
                className="group relative block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white/90">
                    <Icon name={s.icon} />
                  </div>
                  <div className="font-heading text-lg text-white">{s.title}</div>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/70">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF5C1A] opacity-0 transition group-hover:opacity-100">
                  Learn more <span aria-hidden="true">→</span>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00D4FF]/15 via-transparent to-[#FF5C1A]/12 blur-xl" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

