import Link from "next/link";

import { HeroSection } from "@/components/HeroSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTABanner } from "@/components/CTABanner";
import { CreativePhotoStrip } from "@/components/CreativePhotoStrip";
import { CreativeStackDiagram } from "@/components/diagrams/CreativeStackDiagram";
import { INDUSTRIES } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MarqueeStrip />

      <section className="border-y border-white/5 bg-black/25 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
                How deliverables stack
              </p>
              <h2 className="mt-3 font-heading text-3xl tracking-tight text-white sm:text-4xl">
                Brand, web, and campaign layers—designed to work together
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                We map what ships first, what becomes a reusable system, and what scales across
                channels—so your creative stays consistent as volume grows.
              </p>
              <div className="mt-8">
                <CreativeStackDiagram />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Studio moodboard
              </p>
              <p className="mt-3 text-sm leading-6 text-white/60">
                Built-in SVG moodboards for layout (no external photos). Replace files in{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-white/80">/public/moodboard</code>{" "}
                with your own shots when you have them.
              </p>
              <div className="mt-6">
                <CreativePhotoStrip />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <StatsSection />

      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-heading text-3xl tracking-tight text-white sm:text-4xl">
                  Industries we serve
                </h2>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] hover:text-white transition"
                >
                  See the playbooks <span aria-hidden="true">→</span>
                </Link>
              </div>
              <p className="mt-4 text-base leading-7 text-white/70">
                We support teams across the USA and India. Our playbooks are adapted for
                different buyer journeys, trust signals, and organizational contexts.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/industries"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition"
                >
                  Explore all industries
                </Link>
                <Link
                  href="/free-audit"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#FF5C1A] px-5 text-sm font-semibold text-black hover:brightness-110 transition"
                >
                  Get a Free Audit →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
              {Object.values(INDUSTRIES).map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-heading text-white">{i.name}</div>
                    <div className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">{i.hero.headline}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FF5C1A] opacity-0 transition group-hover:opacity-100">
                    See the playbook <span aria-hidden="true">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <ProcessTimeline />
      <CTABanner />
    </div>
  );
}

