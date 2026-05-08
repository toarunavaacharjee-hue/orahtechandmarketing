import { HeroSection } from "@/components/HeroSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { StatsSection } from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTABanner } from "@/components/CTABanner";
import { HOME } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MarqueeStrip />
      <ServicesGrid />
      <StatsSection />

      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <h2 className="font-heading text-3xl tracking-tight text-white sm:text-4xl">
                Industries we serve
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                We understand the Indian market realities—cost pressure, speed, and
                trust. Our playbooks are adapted for different buying journeys.
              </p>
            </div>
            <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
              {HOME.industries.map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-heading text-white">{i}</div>
                    <div className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Performance-first strategy designed for your category and unit economics.
                  </p>
                </div>
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

