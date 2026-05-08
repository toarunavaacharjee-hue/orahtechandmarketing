import type { Metadata } from "next";

import { FadeIn } from "@/components/FadeIn";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and campaign snapshots—see how we drive growth across industries.",
};

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
              A few examples of what we ship—performance campaigns, SEO growth, and
              conversion-first experiences.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <WorkGrid />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

