import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and campaign snapshots—see how we drive growth across industries.",
};

const stats = [
  { value: "200+", label: "Brands supported", color: "#00D4FF" },
  { value: "8+", label: "Industries served", color: "#FF5C1A" },
  { value: "1,000+", label: "Creatives delivered", color: "#7c6cff" },
  { value: "4–8 wks", label: "Avg. project timeline", color: "#b8ff6c" },
];

export default function WorkPage() {
  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Results across channels
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Our Work
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Snapshots of creative systems, web experiences, and campaign-ready assets—built for
              clarity, consistency, and speed.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-white/5 bg-black/20 py-12 sm:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <FadeIn key={s.label}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="font-heading text-3xl font-bold" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-sm text-white/55">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
                  Selected projects
                </p>
                <h2 className="mt-2 font-heading text-2xl tracking-tight text-white sm:text-3xl">
                  Work across industries
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#FF5C1A] px-5 text-sm font-semibold text-black hover:brightness-110 transition"
              >
                Start a project →
              </Link>
            </div>
            <WorkGrid />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
