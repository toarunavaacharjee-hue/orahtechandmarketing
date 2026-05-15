import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { ContactJourneyDiagram } from "@/components/diagrams/ContactJourneyDiagram";

export const metadata: Metadata = {
  title: "Free Audit",
  description:
    "Request a free creative and website audit. Get quick wins across brand consistency, UX clarity, and content systems—within 1 business day.",
};

export default function FreeAuditPage() {
  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Free audit — quick wins + next steps
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Get a Free Audit
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Share your website and goals. We’ll review your brand consistency, website UX, and
              content system—and send you a prioritized action list.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <FadeIn className="min-w-0 lg:col-span-5">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <div className="font-heading text-2xl text-white">What you’ll get</div>
                <p className="mt-3 text-xs leading-5 text-white/50">
                  From request to kickoff—same cadence as a project inquiry.
                </p>
                <div className="mt-6 flex justify-center border-b border-white/10 pb-8">
                  <ContactJourneyDiagram />
                </div>
                <ul className="mt-2 grid gap-4 text-sm text-white/70">
                  {[
                    "A brand consistency check (fonts, spacing, visuals, tone, templates).",
                    "A website UX audit (clarity, trust signals, navigation, mobile experience).",
                    "Quick wins for content production (template systems and review loops).",
                    "A 30-day creative plan: what to improve first for fastest impact.",
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-1.5 h-5 w-5 flex-none rounded-full bg-white/5 ring-1 ring-white/10 grid place-items-center text-xs font-semibold text-white/80">
                        ✓
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6">
                  <div className="text-sm font-semibold text-white">Prefer browsing first?</div>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    See how we tailor our design approach by industry.
                  </p>
                  <Link
                    href="/industries"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FF5C1A] hover:text-white transition"
                  >
                    Explore industries <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05} className="min-w-0 lg:col-span-7">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <div className="font-heading text-2xl text-white">Request your audit</div>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Link your website and any brand assets (Instagram, brochure, deck) in the message.
                </p>
                <div className="mt-8">
                  <ContactForm
                    intent="audit"
                    messagePlaceholder="Add your website URL + your top priority (brand refresh, social templates, landing page redesign, UI/UX, etc.). If you have references you like, paste links."
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-16 pb-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <FAQ
              heading="About the free audit"
              items={[
                {
                  q: "What exactly do you review?",
                  a: "We look at your brand consistency (fonts, colours, logo usage), your website UX (navigation, trust signals, mobile experience), and your content production setup. You'll get specific, prioritised recommendations.",
                },
                {
                  q: "How long does the audit take?",
                  a: "We deliver your audit within 1–2 business days of receiving your submission. You'll get a written breakdown with clear action items.",
                },
                {
                  q: "Is there any obligation after the audit?",
                  a: "None. The audit is completely free with no strings attached. Many clients choose to work with us after seeing the results, but there's zero pressure.",
                },
                {
                  q: "What if I don't have a website yet?",
                  a: "That's fine—share whatever you do have: a social profile, a pitch deck, a brand document, or just describe what you're building. We'll work with what you've got.",
                },
              ]}
            />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

