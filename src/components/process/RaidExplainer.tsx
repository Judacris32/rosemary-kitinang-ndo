"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { raid } from "@/content/process";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

/** RAID register explainer: pick a letter to see what it means and a real example. */
export function RaidExplainer() {
  const [i, setI] = useState(0);
  const item = raid[i];
  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-4 gap-3" role="tablist" aria-label="RAID register">
        {raid.map((r, k) => (
          <button
            key={r.key}
            type="button"
            role="tab"
            aria-selected={i === k}
            onClick={() => setI(k)}
            className={cn(
              "group rounded-3xl p-4 text-center transition-all duration-500 ease-brand sm:p-6",
              i === k ? "bg-forest text-ivory shadow-lift" : "bg-white text-forest shadow-card ring-1 ring-forest/5 hover:-translate-y-1",
            )}
          >
            <span className={cn("block text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-none tracking-[-0.04em]", i === k ? "text-coral" : "text-forest")}>{r.key}</span>
            <span className="mt-2 block text-xs font-semibold sm:text-sm">{r.title}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.key}
          role="tabpanel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mt-6 grid gap-5 rounded-4xl bg-white p-7 shadow-card ring-1 ring-forest/5 sm:p-10 md:grid-cols-2"
        >
          <div>
            <h3 className="text-2xl font-bold text-ink">{item.title}</h3>
            <p className="mt-3 text-lg leading-relaxed text-body">{item.text}</p>
          </div>
          <div className="rounded-3xl bg-peach p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-deep">From DOC Express</p>
            <p className="mt-2 font-medium leading-relaxed text-ink">{item.example}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
