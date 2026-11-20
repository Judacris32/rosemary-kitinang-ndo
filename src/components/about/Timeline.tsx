"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import type { Role } from "@/content/experience";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/** Career timeline whose spine draws itself as you scroll, with alternating cards. */
export function Timeline({ roles }: { roles: Role[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl">
      <div className="absolute bottom-0 left-5 top-0 w-[3px] rounded-full bg-forest/10 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
      <motion.div
        className="absolute bottom-0 left-5 top-0 w-[3px] origin-top rounded-full bg-[linear-gradient(180deg,#126B56,#FF6B57)] md:left-1/2 md:-translate-x-1/2"
        style={{ scaleY: reduce ? 1 : scaleY }}
        aria-hidden="true"
      />
      <ol className="space-y-10 md:space-y-14">
        {roles.map((r, i) => {
          const left = i % 2 === 0;
          return (
            <li key={`${r.company}-${r.period}`} className="relative grid md:grid-cols-2 md:gap-16">
              <span
                className={cn(
                  "absolute left-5 top-8 z-10 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full ring-4 ring-ivory md:left-1/2",
                  r.current ? "bg-coral" : "bg-emerald",
                )}
                aria-hidden="true"
              >
                {r.current ? <span className="absolute inset-0 animate-pulse-dot rounded-full bg-coral" /> : null}
              </span>
              <Reveal className={cn("pl-12 md:pl-0", left ? "md:col-start-1 md:text-right" : "md:col-start-2")}>
                <article className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest/5 sm:p-7">
                  <p className={cn("flex flex-wrap items-center gap-2 text-sm font-semibold text-emerald", left && "md:justify-end")}>
                    {r.current ? <span className="rounded-full bg-coral px-2.5 py-0.5 text-xs font-bold text-forest-ink">Now</span> : null}
                    {r.period}
                  </p>
                  <h3 className="mt-3 text-xl font-bold tracking-[-0.015em] text-ink">{r.title}</h3>
                  <p className={cn("mt-1 flex items-center gap-1.5 text-sm font-medium text-coral-deep", left && "md:justify-end")}>
                    {r.company} <span className="text-body/50">·</span> <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {r.place}
                  </p>
                  <ul className={cn("mt-4 space-y-2 text-[0.95rem] leading-relaxed text-body", left && "md:[&>li]:flex-row-reverse")}>
                    {r.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
        <li className="relative grid md:grid-cols-2 md:gap-16">
          <span className="absolute left-5 top-8 z-10 h-5 w-5 -translate-x-1/2 rounded-full bg-forest ring-4 ring-ivory md:left-1/2" aria-hidden="true" />
          <Reveal className="pl-12 md:col-start-2 md:pl-0">
            <div className="rounded-3xl bg-forest p-7 text-mint/85">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-glow">What&apos;s next</p>
              <p className="mt-3 text-xl font-bold leading-snug text-ivory">
                More digital transformation that reduces manual work, improves access to services and creates value people can feel.
              </p>
            </div>
          </Reveal>
        </li>
      </ol>
    </div>
  );
}
