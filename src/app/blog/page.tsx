import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Growth notes, playbooks, and practical insights on performance marketing, SEO, and AI automation.",
};

const posts = [
  {
    title: "How to scale Meta ads without killing ROAS",
    tag: "Performance",
    excerpt:
      "A practical framework for creative testing, audience expansion, and landing-page alignment.",
  },
  {
    title: "SEO that drives pipeline (not just traffic)",
    tag: "SEO",
    excerpt:
      "Build topic clusters that match intent, strengthen internal linking, and measure conversion contribution.",
  },
  {
    title: "AI automations to save 10+ hours/week in marketing ops",
    tag: "AI Automation",
    excerpt:
      "Lead routing, reporting, and content workflows that reduce manual work while improving quality.",
  },
] as const;

export default function BlogPage() {
  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Insights and playbooks
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Short, actionable notes from the field—built for founders and marketing teams.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((p, idx) => (
              <FadeIn key={p.title} delay={idx * 0.03}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="inline-flex rounded-full bg-[#FF5C1A]/10 px-3 py-1 text-xs font-semibold text-[#FF5C1A] ring-1 ring-[#FF5C1A]/20">
                    {p.tag}
                  </div>
                  <div className="mt-4 font-heading text-xl text-white">{p.title}</div>
                  <p className="mt-3 text-sm leading-6 text-white/70">{p.excerpt}</p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] hover:text-white transition"
                  >
                    Get this implemented <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

