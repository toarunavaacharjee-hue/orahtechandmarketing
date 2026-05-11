/** Local SVG moodboards — always load (no external CDN). Replace files in /public/moodboard when you have real photos. */
const shots = [
  {
    src: "/moodboard/studio.svg",
    alt: "Abstract studio layout — layouts and colour exploration",
  },
  {
    src: "/moodboard/geometry.svg",
    alt: "Abstract geometric brand shapes and gradients",
  },
  {
    src: "/moodboard/collab.svg",
    alt: "Abstract collaboration — brand and UI review",
  },
] as const;

export function CreativePhotoStrip() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {shots.map((s) => (
        <div
          key={s.src}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG moodboards; next/image is poor fit for vector + fill */}
          <img
            src={s.src}
            alt={s.alt}
            className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050A18]/70 via-transparent to-transparent" />
        </div>
      ))}
    </div>
  );
}
