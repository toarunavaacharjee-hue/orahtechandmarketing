import type { Metadata } from "next";

import { CreativePhotoStrip } from "@/components/CreativePhotoStrip";
import { FadeIn } from "@/components/FadeIn";
import { ProcessFlowDiagram } from "@/components/diagrams/ProcessFlowDiagram";
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
              Snapshots of creative systems, web experiences, and campaign-ready assets—built for
              clarity, consistency, and speed.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-white/5 bg-black/20 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
                How projects run
              </p>
              <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
                Same workflow whether it’s a sprint or a long-term retainer
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Cards below are placeholders—replace with real case studies, metrics, and hero
                shots as you publish work.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
                <ProcessFlowDiagram />
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Visual texture
              </p>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Local SVG moodboards for visual rhythm—swap for real case art in{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-white/80">/public/moodboard</code>.
              </p>
              <div className="mt-6">
                <CreativePhotoStrip />
              </div>
            </FadeIn>
          </div>
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

