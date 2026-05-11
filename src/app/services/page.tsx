import Link from "next/link";
import type { Metadata } from "next";

import { FadeIn } from "@/components/FadeIn";
import { HOME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Creative strategy, branding, UI/UX, social media creatives, and web design & development—everything you need to look premium online.",
};

export default function ServicesPage() {
  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Full-service growth team
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Everything you need to look premium online
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Creative strategy, design systems, and modern web execution—delivered with speed,
              clarity, and consistency.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-2">
            {HOME.services.items.map((s, idx) => (
              <FadeIn key={s.title} delay={idx * 0.03}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="font-heading text-2xl text-white">{s.title}</div>
                      <p className="mt-3 text-sm leading-6 text-white/70">{s.desc}</p>
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                      <div className="h-2 w-2 rounded bg-[#FF5C1A]" />
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-3 text-sm text-white/70">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-[#FF5C1A] px-4 text-sm font-semibold text-black hover:brightness-110 transition"
                    >
                      Get a quote →
                    </Link>
                    <Link
                      href="/work"
                      className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-white ring-1 ring-white/15 hover:ring-white/30 hover:bg-white/5 transition"
                    >
                      See results
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

