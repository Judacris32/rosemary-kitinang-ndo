"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Fragment, type ReactNode } from "react";
import { EASE } from "@/lib/motion";

export type HeadingPart = string | { accent: string } | { br: true };

/**
 * Words slide up from behind a mask. Pass plain strings, or { accent } for the
 * italic serif accent word (styled by `accentClass`).
 */
export function SplitWords({
  parts,
  className,
  accentClass = "accent-mark",
  delay = 0,
  immediate = false,
}: {
  parts: HeadingPart[];
  className?: string;
  accentClass?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const words: { text: string; accent: boolean; br?: boolean }[] = [];
  parts.forEach((p) => {
    if (typeof p === "string") p.split(" ").filter(Boolean).forEach((w) => words.push({ text: w, accent: false }));
    else if ("br" in p) words.push({ text: "", accent: false, br: true });
    else p.accent.split(" ").forEach((w) => words.push({ text: w, accent: true }));
  });
  const label = words.filter((w) => !w.br).map((w) => w.text).join(" ");

  const anim = immediate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <motion.span
      className={className}
      initial={reduce ? false : "hidden"}
      {...anim}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
      aria-label={label}
      role="text"
    >
      {words.map((w, i) =>
        w.br ? (
          <br key={i} className="hidden md:block" />
        ) : (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden="true">
            <motion.span
              className={w.accent ? `inline-block ${accentClass}` : "inline-block"}
              variants={{ hidden: { y: "110%" }, show: { y: "0%", transition: { duration: 0.9, ease: EASE } } }}
            >
              {w.text}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
        ),
      )}
    </motion.span>
  );
}

export function renderParts(parts: HeadingPart[], accentClass = "accent-mark"): ReactNode {
  return parts.map((p, i) =>
    typeof p === "string" ? <Fragment key={i}>{p}</Fragment> : "br" in p ? <br key={i} /> : <span key={i} className={accentClass}>{p.accent}</span>,
  );
}
