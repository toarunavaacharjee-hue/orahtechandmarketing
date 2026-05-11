"use client";

import { motion, useReducedMotion } from "framer-motion";

const layers = [
  { label: "Launch film", angle: -6, x: "8%", y: "6%", delay: 0 },
  { label: "Social kit", angle: 4, x: "42%", y: "0%", delay: 0.12 },
  { label: "Pitch deck", angle: -3, x: "18%", y: "48%", delay: 0.24 },
  { label: "Web UI", angle: 5, x: "52%", y: "44%", delay: 0.36 },
] as const;

export function CreativeCollage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none relative hidden h-[min(28rem,52vh)] select-none lg:block" aria-hidden="true">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-[#FF5C1A]/10 ring-1 ring-white/10" />
      <div className="absolute inset-6 rounded-3xl border border-dashed border-white/15" />

      {layers.map((layer) => (
        <motion.div
          key={layer.label}
          className="absolute w-[46%]"
          style={{ left: layer.x, top: layer.y, rotate: `${layer.angle}deg` }}
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35 + layer.delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.02] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 5 + layer.delay * 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: layer.delay,
                  }
            }
          >
            <div className="aspect-[4/5] bg-[linear-gradient(135deg,rgba(255,92,26,0.35),transparent_45%,rgba(0,212,255,0.25))]" />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/50 px-3 py-2 backdrop-blur-sm">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Collateral
              </div>
              <div className="font-heading text-xs font-semibold text-white">{layer.label}</div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        className="absolute -right-2 top-1/3 h-24 w-24 rounded-full bg-[#FF5C1A]/20 blur-2xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/4 bottom-6 h-20 w-20 rounded-full bg-[#00D4FF]/15 blur-2xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={
          reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }
      />
    </div>
  );
}
