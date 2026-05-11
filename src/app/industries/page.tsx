import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-specific creative playbooks for branding, content systems, UI/UX, and conversion-focused websites.",
};

export default function IndustriesPage() {
  const list = Object.values(INDUSTRIES);

  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Personalized growth playbooks
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Industries
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
              Different industries have different buyer journeys, trust signals, and unit economics.
              Here’s how we tailor our strategy and execution—from discovery to scale.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((i, idx) => (
              <FadeIn key={i.slug} delay={idx * 0.03}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="font-heading text-xl text-white">{i.name}</div>
                      <p className="mt-3 text-sm leading-6 text-white/70">
                        {i.hero.headline}
                      </p>
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                      <div className="h-2 w-2 rounded bg-[#FF5C1A]" />
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] opacity-0 transition group-hover:opacity-100">
                    See the playbook <span aria-hidden="true">→</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

