import Link from "next/link";
import type { Metadata } from "next";

import { FadeIn } from "@/components/FadeIn";
import { PlaybookLoopDiagram } from "@/components/diagrams/PlaybookLoopDiagram";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by marketers, powered by technology—Orah Tech and Marketing is a results-first creative partner for ambitious brands.",
};

const values = [
  {
    title: "Results-First",
    desc: "We obsess over outcomes—engagement, conversions, consistency—not vanity metrics.",
    accent: "#FF5C1A",
  },
  {
    title: "Radical Transparency",
    desc: "Clear timelines, shared files, honest communication. No black boxes.",
    accent: "#00D4FF",
  },
  {
    title: "Always Innovating",
    desc: "AI-forward workflows and constant experimentation to stay ahead of the curve.",
    accent: "#7c6cff",
  },
  {
    title: "Client Obsessed",
    desc: "We act like owners—proactive, accountable, and invested in your growth.",
    accent: "#b8ff6c",
  },
] as const;

const differentiators = [
  {
    label: "Senior-level craft",
    desc: "No junior hand-offs. Every deliverable is reviewed and owned by an experienced creative.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    label: "Systems, not one-offs",
    desc: "Every project builds a reusable foundation—templates, tokens, guidelines—that compounds over time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    label: "Fast turnarounds",
    desc: "Sprint-based delivery. Most projects kick off within 3 business days and hit weekly milestones.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    label: "Cross-timezone coverage",
    desc: "Teams in the USA and India. Work moves while you sleep—without compromising quality.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
] as const;

const team = [
  { role: "Creative Director", focus: "Brand identity · Design systems · Creative strategy" },
  { role: "Web Designer & Developer", focus: "Next.js · UI/UX · Conversion optimisation" },
  { role: "Social Creative Lead", focus: "Content systems · Templates · Campaign creatives" },
  { role: "AI Automation Specialist", focus: "Workflow design · Brief → variant pipelines" },
] as const;

export default function AboutPage() {
  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Creative-first · USA & India · Remote-native
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Built for Brands That Want to Look Premium—and Actually Convert.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Orah is a creative studio that combines senior design craft with modern web execution.
              We build brand systems, digital experiences, and content operations that grow with you.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-full bg-[#FF5C1A] px-5 text-sm font-semibold text-black hover:brightness-110 transition">
                Start a project →
              </Link>
              <Link href="/work" className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition">
                See our work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Story + Process */}
      <section className="border-y border-white/5 bg-black/20 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">Our story</p>
              <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
                Why we built Orah
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-white/70">
                <p>
                  Most agencies give you two choices: big shops with slow processes and inflated costs,
                  or freelancers who can't keep up with scale. We built Orah to be the third option—a
                  compact, senior creative team that operates with agency discipline but startup speed.
                </p>
                <p>
                  The name "Orah" means light. We treat good design the same way—it illuminates what
                  matters, removes everything that doesn't, and makes complex things feel clear and obvious.
                </p>
                <p>
                  We're a remote-first studio with teams across the USA and India. That cross-timezone
                  coverage means your project moves around the clock, without the overhead of a large
                  agency.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "200+", label: "Brands" },
                  { value: "1,000+", label: "Creatives" },
                  { value: "8+", label: "Industries" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                    <div className="font-heading text-2xl text-[#FF5C1A]">{s.value}</div>
                    <div className="mt-1 text-xs text-white/55">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5C1A]">How we work</p>
              <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
                A tight loop—discover, align, design, deliver
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/70">
                You stay close to direction and milestones. We bring craft, systems, and momentum.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <PlaybookLoopDiagram />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">Why Orah</p>
            <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
              What sets us apart
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, idx) => (
              <FadeIn key={d.label} delay={idx * 0.04}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#FF5C1A]/10 text-[#FF5C1A] ring-1 ring-[#FF5C1A]/20">
                    {d.icon}
                  </div>
                  <div className="mt-4 font-heading text-base text-white">{d.label}</div>
                  <p className="mt-2 text-sm leading-6 text-white/65">{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-white/5 bg-black/20 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">The team</p>
            <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
              Senior specialists—no hand-offs
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Every role is senior-level. You work directly with the person doing the work—not a
              project manager who relays your feedback to someone else.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, idx) => (
              <FadeIn key={m.role} delay={idx * 0.04}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="font-heading text-white">{m.role}</div>
                  <p className="mt-2 text-xs leading-5 text-white/50">{m.focus}</p>
                  <div className="mt-5 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#FF5C1A] to-[#00D4FF]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">Our principles</p>
            <h2 className="mt-3 font-heading text-2xl tracking-tight text-white sm:text-3xl">
              How we think and operate
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <FadeIn key={v.title} delay={idx * 0.04}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="h-[2px] w-10 rounded-full" style={{ background: v.accent }} />
                  <div className="mt-4 font-heading text-lg text-white">{v.title}</div>
                  <p className="mt-3 text-sm leading-6 text-white/70">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

