import type { Metadata } from "next";

import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { ContactJourneyDiagram } from "@/components/diagrams/ContactJourneyDiagram";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free creative consult or request an audit. Tell us what you’re building and we’ll reply within 1 business day.",
};

export default function ContactPage() {
  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Let’s build your next creative sprint
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Contact
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Share a little context and we’ll send back a clear plan—deliverables, quick wins,
              and a realistic timeline.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
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
                    "If it’s a fit, we share scope, milestones, and next steps to kick off.",
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
                    <div>orahhechandmarketing@gmail.com</div>
                    <div>USA + India (remote)</div>
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
    </div>
  );
}

