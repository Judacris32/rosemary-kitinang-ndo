"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

export type Corner = "tr" | "tl" | "br" | "bl";

/**
 * Organic corner shapes that carry the hero's look through the site:
 * a forest curve with a mint (or peach) layer behind it and a thin coral sliver.
 */
function CornerShape({ corner, onDark }: { corner: Corner; onDark?: boolean }) {
  const reduce = useReducedMotion();
  // The flip lives on a plain wrapper: framer-motion writes its own transform on the
  // animated element, which would otherwise wipe out Tailwind's scale classes.
  const place: Record<Corner, string> = {
    tr: "right-0 top-0",
    tl: "left-0 top-0 -scale-x-100",
    br: "bottom-0 right-0 -scale-y-100",
    bl: "bottom-0 left-0 -scale-x-100 -scale-y-100",
  };
  return (
    <div className={cn("pointer-events-none absolute w-[26vw] max-w-[300px] sm:w-[20vw]", place[corner])}>
      <motion.svg
        viewBox="0 0 400 400"
        className="block h-auto w-full"
        style={{ transformOrigin: "100% 0%" }}
        initial={reduce ? false : { opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.4, ease: EASE }}
        aria-hidden="true"
      >
        <path d="M60 0C70 210 210 350 400 362V0Z" fill={onDark ? "#126B56" : "#DDF2E8"} />
        <path d="M150 0C162 160 262 268 400 280V0Z" fill={onDark ? "#9FE3C4" : "#A8DCC4"} fillOpacity={onDark ? 0.16 : 1} />
        <path d="M262 0C270 76 320 132 400 140V0Z" fill={onDark ? "#FF6B57" : "#0B3D2E"} fillOpacity={onDark ? 0.45 : 1} />
        <path d="M8 0C20 236 186 392 400 398" fill="none" stroke="#FF6B57" strokeWidth="2.5" strokeLinecap="round" strokeOpacity={onDark ? 0.55 : 0.8} />
      </motion.svg>
    </div>
  );
}

export function Decor({ corners, onDark, className }: { corners: Corner[]; onDark?: boolean; className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {corners.map((c) => (
        <CornerShape key={c} corner={c} onDark={onDark} />
      ))}
    </div>
  );
}
