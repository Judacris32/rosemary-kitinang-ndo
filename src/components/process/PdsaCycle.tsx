"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { pdsa } from "@/content/process";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

const C = 2 * Math.PI * 88;

const pos = ["left-1/2 top-0 -translate-x-1/2 -translate-y-1/2", "right-0 top-1/2 translate-x-1/2 -translate-y-1/2", "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"];

/** Interactive Plan-Do-Study-Act cycle with a real example for each stage. */
export function PdsaCycle() {
  const [i, setI] = useState(0);
  const step = pdsa[i];
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div className="relative mx-auto aspect-square w-full max-w-[16rem] sm:max-w-[26rem]">
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx="100" cy="100" r="88" fill="none" stroke="#0B3D2E" strokeOpacity="0.12" strokeWidth="2" />
          <motion.circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="url(#pdsa)"
            strokeWidth="3"
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            strokeDasharray={C}
            initial={false}
            animate={{ strokeDashoffset: C * (1 - (i + 1) / 4) }}
            transition={{ duration: 0.8, ease: EASE }}
          />
          <defs>
            <linearGradient id="pdsa" x1="0" x2="1">
              <stop offset="0" stopColor="#126B56" />
              <stop offset="1" stopColor="#FF6B57" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-[22%] grid place-items-center rounded-full bg-white text-center shadow-card">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Cycle</p>
            <p className="mt-1 font-serif text-3xl italic text-ink">keep improving</p>
          </div>
        </div>
        {pdsa.map((p, k) => (
          <button
            key={p.key}
            type="button"
            onClick={() => setI(k)}
            aria-pressed={i === k}
            className={cn(
              "absolute grid h-20 w-20 place-items-center rounded-full text-base font-bold shadow-lift transition-colors duration-500 sm:h-24 sm:w-24 sm:text-lg",
              pos[k],
              i === k ? "bg-coral text-forest-ink" : "bg-forest text-ivory hover:bg-emerald",
            )}
          >
            {p.title}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={step.key} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: EASE }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">Stage {i + 1} of 4</p>
            <h3 className="mt-3 text-display-md font-bold text-ink">{step.title}</h3>
            <p className="mt-5 text-lg leading-relaxed text-body">{step.text}</p>
            <div className="mt-7 rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-deep">In practice</p>
              <p className="mt-2 font-medium leading-relaxed text-ink">{step.example}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex gap-2">
          {pdsa.map((p, k) => (
            <button key={p.key} type="button" onClick={() => setI(k)} className={cn("h-2 rounded-full transition-all duration-500", i === k ? "w-10 bg-coral" : "w-2 bg-forest/20")} aria-label={`Show ${p.title}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
