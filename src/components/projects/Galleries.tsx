"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Expand } from "lucide-react";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";
import { PhoneFrame } from "@/components/covers/ProjectCover";
import { Reveal } from "@/components/motion/Reveal";
import type { Shot } from "@/content/projects";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

function toItems(shots: Shot[]): LightboxItem[] {
  return shots.map((s) => ({ src: s.src, alt: s.alt, caption: s.caption }));
}

/**
 * The farmer app, grouped by user journey. Each tab shows its screens as phone
 * frames; any screen opens the lightbox, which then steps through all 21.
 */
export function AppScreensStrip({ shots }: { shots: Shot[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const groups = Array.from(new Set(shots.map((s) => s.group ?? "Screens")));
  const [active, setActive] = useState(groups[0]);
  const visible = shots.map((s, i) => ({ s, i })).filter(({ s }) => (s.group ?? "Screens") === active);

  return (
    <>
      <div className="hide-scrollbar -mx-5 flex justify-start gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" role="tablist" aria-label="App journeys">
        {groups.map((g) => {
          const count = shots.filter((s) => (s.group ?? "Screens") === g).length;
          const on = g === active;
          return (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(g)}
              className={cn(
                "relative shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                on ? "text-ivory" : "bg-white text-forest ring-1 ring-forest/10 hover:bg-mint-soft",
              )}
            >
              {on ? <motion.span layoutId="journey-pill" className="absolute inset-0 rounded-full bg-forest" transition={{ type: "spring", stiffness: 380, damping: 32 }} /> : null}
              <span className="relative">
                {g} <span className={on ? "text-coral-soft" : "text-body/60"}>{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-10"
        >
          {visible.map(({ s, i }, k) => (
            <motion.button
              key={`${s.caption}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: k * 0.07 }}
              className="group w-[42%] text-left sm:w-[190px] lg:w-[200px]"
              aria-label={`Enlarge the ${s.caption} screen`}
            >
              <PhoneFrame src={s.src} alt={s.alt} className="transition-transform duration-500 ease-brand group-hover:-translate-y-2" sizes="(min-width: 640px) 200px, 45vw" />
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-semibold text-ink">
                {s.caption}
                <Expand className="h-3.5 w-3.5 text-emerald opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </p>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>
      <Lightbox items={toItems(shots)} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </>
  );
}

/** Back-office screenshots in a browser-style frame. Click to enlarge. */
export function ScreenshotGrid({ shots }: { shots: Shot[] }) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {shots.map((s, i) => (
          <Reveal key={s.caption} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : undefined}>
            <button type="button" onClick={() => setIndex(i)} className="group block w-full text-left" aria-label={`Enlarge: ${s.caption}`}>
              <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-forest/10 transition-all duration-500 ease-brand group-hover:-translate-y-1 group-hover:shadow-lift">
                <div className="flex items-center gap-1.5 border-b border-line bg-ivory px-4 py-3" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                  <span className="h-2.5 w-2.5 rounded-full bg-coral-soft" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-glow" />
                  <span className="ml-3 truncate text-xs text-body">backoffice.docexpressnigeria.com</span>
                </div>
                <div className="relative aspect-[16/9] bg-white">
                  <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 50vw, 100vw" placeholder="blur" className="object-cover object-top" />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-forest/80 text-ivory opacity-0 transition-opacity group-hover:opacity-100">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-body">{s.caption}</p>
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox items={toItems(shots)} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </>
  );
}
