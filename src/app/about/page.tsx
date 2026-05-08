import type { Metadata } from "next";

import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by marketers, powered by technology—Orah Tech and Marketing is a results-first growth partner for ambitious brands.",
};

const values = [
  {
    title: "Results-First",
    desc: "We obsess over outcomes—leads, revenue, retention—not vanity metrics.",
  },
  {
    title: "Radical Transparency",
    desc: "Clear reporting, honest timelines, and communication that keeps you in control.",
  },
  {
    title: "Always Innovating",
    desc: "AI-forward workflows and constant experimentation to stay ahead of the curve.",
  },
  {
    title: "Client Obsessed",
    desc: "We act like owners—proactive, accountable, and invested in your growth.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Built for modern growth teams
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Built by Marketers. Powered by Technology.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              We combine strategic marketing thinking with engineering execution. That
              means faster iteration, better data, and compounding results.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-12">
            <FadeIn>
              <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <div className="font-heading text-2xl text-white">Our mission</div>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  Help ambitious brands grow faster by building conversion-first digital
                  experiences and running performance campaigns backed by clean data and
                  intelligent automation.
                </p>
                <div className="mt-7 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#FF5C1A] to-[#00D4FF]" />
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <div className="font-heading text-2xl text-white">Our team</div>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  A compact, senior team with specialists across ads, SEO, design,
                  analytics, and development. You get speed without the chaos.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Performance Marketer",
                    "SEO Strategist",
                    "Brand Designer",
                    "Full-stack Developer",
                  ].map((role) => (
                    <div
                      key={role}
                      className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/75"
                    >
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <FadeIn key={v.title} delay={idx * 0.03}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="font-heading text-lg text-white">{v.title}</div>
                  <p className="mt-3 text-sm leading-6 text-white/70">{v.desc}</p>
                  <div className="mt-6 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#FF5C1A] to-[#00D4FF]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

