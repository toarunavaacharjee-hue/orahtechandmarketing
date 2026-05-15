"use client";

import { motion, useReducedMotion } from "framer-motion";

const layers = [
  {
    label: "Launch film",
    tag: "Video",
    angle: -6,
    x: "8%",
    y: "6%",
    delay: 0,
    fg: "#FF5C1A",
    img: "/collage/video-launch-film.svg",
    border: "rgba(255,92,26,0.3)",
    bottomBg: "rgba(5,10,24,0.82)",
    bottomBorder: "rgba(255,92,26,0.22)",
  },
  {
    label: "Social kit",
    tag: "Social",
    angle: 4,
    x: "42%",
    y: "0%",
    delay: 0.12,
    fg: "#00D4FF",
    img: "/collage/social-kit.svg",
    border: "rgba(0,212,255,0.25)",
    bottomBg: "rgba(5,10,24,0.82)",
    bottomBorder: "rgba(0,212,255,0.18)",
  },
  {
    label: "Pitch deck",
    tag: "Deck",
    angle: -3,
    x: "18%",
    y: "48%",
    delay: 0.24,
    fg: "#7c6cff",
    img: "/collage/pitch-deck.svg",
    border: "rgba(124,108,255,0.28)",
    bottomBg: "rgba(5,10,24,0.82)",
    bottomBorder: "rgba(124,108,255,0.2)",
  },
  {
    label: "Web UI",
    tag: "Web",
    angle: 5,
    x: "52%",
    y: "44%",
    delay: 0.36,
    fg: "#b8ff6c",
    img: "/collage/web-ui.svg",
    border: "rgba(184,255,108,0.22)",
    bottomBg: "rgba(5,10,24,0.82)",
    bottomBorder: "rgba(184,255,108,0.16)",
  },
] as const;

export function CreativeCollage() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none relative hidden h-[min(28rem,52vh)] select-none lg:block"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#00D4FF]/8 via-transparent to-[#FF5C1A]/8 ring-1 ring-white/8" />
      <div className="absolute inset-6 rounded-3xl border border-dashed border-white/10" />

      {layers.map((layer) => (
        <motion.div
          key={layer.label}
          className="absolute w-[46%]"
          style={{ left: layer.x, top: layer.y, rotate: `${layer.angle}deg` }}
          initial={{ opacity: 0, y: 20, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35 + layer.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-[0_24px_56px_-18px_rgba(0,0,0,0.9)]"
            style={{ border: `1px solid ${layer.border}` }}
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 5 + layer.delay * 4, repeat: Infinity, ease: "easeInOut", delay: layer.delay }
            }
          >
            {/* Card body */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={layer.img}
                alt={layer.label}
                className="h-full w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              {/* Category badge */}
              <div
                className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: layer.fg,
                  backgroundColor: `${layer.fg}22`,
                  boxShadow: `0 0 0 1px ${layer.fg}40`,
                }}
              >
                {layer.tag}
              </div>
            </div>

            {/* Label bar */}
            <div
              className="absolute inset-x-0 bottom-0 px-3 py-2.5 backdrop-blur-sm"
              style={{
                borderTop: `1px solid ${layer.bottomBorder}`,
                backgroundColor: layer.bottomBg,
              }}
            >
              <div
                className="text-[9px] font-bold uppercase tracking-[0.22em]"
                style={{ color: layer.fg, opacity: 0.75 }}
              >
                Collateral
              </div>
              <div className="font-heading text-[11px] font-semibold text-white">{layer.label}</div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Ambient glows */}
      <motion.div
        className="absolute -right-2 top-1/3 h-28 w-28 rounded-full bg-[#FF5C1A]/15 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/4 bottom-6 h-24 w-24 rounded-full bg-[#00D4FF]/12 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.25, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/4 h-16 w-16 rounded-full bg-[#7c6cff]/15 blur-2xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
