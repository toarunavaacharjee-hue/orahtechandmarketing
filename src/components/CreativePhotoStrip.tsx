import Image from "next/image";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1626780772303-eeaffa1cbf32?auto=format&fit=crop&w=800&q=80",
    alt: "Designer workspace with layouts and colour exploration",
  },
  {
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    alt: "Abstract geometric brand shapes and gradients",
  },
  {
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    alt: "Creative team reviewing brand and UI work on screen",
  },
] as const;

/** Moodboard-style strip — Unsplash editorial imagery (not client work). */
export function CreativePhotoStrip() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {shots.map((s) => (
        <div
          key={s.src}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/5"
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition duration-500 hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050A18]/80 via-transparent to-transparent" />
        </div>
      ))}
    </div>
  );
}
