const clients = [
  { name: "Luminary Skin", industry: "D2C" },
  { name: "Stackflow", industry: "SaaS" },
  { name: "Verdant Health", industry: "Healthcare" },
  { name: "Pinnacle RE", industry: "Real Estate" },
  { name: "Kova Commerce", industry: "E-commerce" },
  { name: "Brightleaf Edu", industry: "Education" },
  { name: "Crestline Hotels", industry: "Hospitality" },
  { name: "Reach NGO", industry: "Non-profit" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-white/5 bg-black/20 py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
          Trusted by 200+ brands across 8+ industries
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/8 bg-white/[0.025] px-3 py-4 text-center transition hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div className="font-heading text-xs font-semibold text-white/70">{c.name}</div>
              <div className="text-[10px] text-white/35">{c.industry}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
