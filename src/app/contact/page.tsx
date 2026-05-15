import type { Metadata } from "next";

import { FadeIn } from "@/components/FadeIn";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { ContactJourneyDiagram } from "@/components/diagrams/ContactJourneyDiagram";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free creative consult or request an audit. Tell us what you're building and we'll reply within 1 business day.",
};

const faqItems = [
  {
    q: "How quickly will you respond?",
    a: "Within 1 business day. If you submit on a weekend, expect a reply Monday morning.",
  },
  {
    q: "What happens after I send the form?",
    a: "We review your brief and assets, then send back a prioritised plan—quick wins, deliverables, and a realistic timeline. If it's a fit, we share scope and next steps.",
  },
  {
    q: "Do I need a big budget to work with you?",
    a: "Not necessarily. We work with brands at different stages. Our services start from $800/month for social creatives and $1,500 for project work. We'll recommend the right scope for your budget.",
  },
  {
    q: "Can I get a quote without committing to anything?",
    a: "Yes—just fill in the form and we'll send a no-obligation proposal. There's no pressure to move forward.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Let's build your next creative sprint
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Contact
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Share a little context and we'll send back a clear plan—deliverables, quick wins,
              and a realistic timeline.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <FadeIn className="min-w-0 lg:col-span-5">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <div className="font-heading text-2xl text-white">What happens next</div>
                <p className="mt-3 text-xs leading-5 text-white/50">
                  Quick visual of the journey after you hit send.
                </p>
                <div className="mt-6 flex justify-center border-b border-white/10 pb-8">
                  <ContactJourneyDiagram />
                </div>
                <ol className="mt-2 grid gap-4 text-sm text-white/70">
                  {[
                    "We review your goals, brand assets, site, and current creative setup.",
                    "You get a prioritized plan—quick wins, deliverables, and a realistic timeline.",
                    "If it's a fit, we share scope, milestones, and next steps to kick off.",
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-1.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-white/5 text-xs font-semibold text-white/80 ring-1 ring-white/10">
                        ✓
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6">
                  <div className="text-sm font-semibold text-white">Direct contact</div>
                  <div className="mt-4 grid gap-2 text-sm text-white/70">
                    <a href={`mailto:${BRAND.email}`} className="hover:text-white transition">
                      {BRAND.email}
                    </a>
                    <div>{BRAND.location}</div>
                    <div className="mt-1 text-xs text-white/40">We reply within 1 business day.</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05} className="min-w-0 lg:col-span-7">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <div className="font-heading text-2xl text-white">Tell us about your project</div>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  The more details you share, the faster we can propose the right plan.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-16 pb-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <FAQ items={faqItems} heading="Before you reach out" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
