import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FadeIn } from "@/components/FadeIn";
import { INDUSTRIES, type IndustrySlug } from "@/lib/constants";

type Props = { params: Promise<{ industry: string }> };

export async function generateStaticParams() {
  return (Object.keys(INDUSTRIES) as IndustrySlug[]).map((slug) => ({ industry: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const key = industry as IndustrySlug;
  const data = INDUSTRIES[key];
  if (!data) return {};

  return {
    title: data.name,
    description: `${data.name} growth playbook: discovery, strategy, execution, and optimisation—tailored to your industry.`,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const key = industry as IndustrySlug;
  const data = INDUSTRIES[key];
  if (!data) notFound();

  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Industry playbook
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              {data.name}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
              {data.hero.subtext}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/free-audit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#FF5C1A] px-6 text-sm font-semibold text-black hover:brightness-110 transition"
              >
                Get a Free Audit →
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white ring-1 ring-white/15 hover:ring-white/30 hover:bg-white/5 transition"
              >
                Talk to us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-12">
            <FadeIn>
              <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <div className="font-heading text-2xl text-white">Who this is for</div>
                <ul className="mt-6 grid gap-3 text-sm text-white/70">
                  {data.whoItsFor.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <div className="font-heading text-2xl text-white">Outcomes</div>
                  <ul className="mt-6 grid gap-3 text-sm text-white/70">
                    {data.outcomes.map((s) => (
                      <li key={s} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF5C1A]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <div className="font-heading text-2xl text-white">How we help (start → scale)</div>
                <div className="mt-6 grid gap-4">
                  {data.howWeHelp.map((s, idx) => (
                    <div
                      key={s.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                          <div className="font-heading text-sm text-white">{idx + 1}</div>
                        </div>
                        <div className="font-heading text-white">{s.title}</div>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-white/70">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6">
                  <div className="text-sm font-semibold text-white">Recommended services</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {data.recommendedServices.map((s) => (
                      <Link
                        key={s}
                        href="/services"
                        className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10 hover:bg-white/10 transition"
                      >
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] hover:text-white transition"
                  >
                    ← Back to all industries
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

