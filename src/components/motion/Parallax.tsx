"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Moves its child slowly against the scroll, for hero backgrounds. */
export function Parallax({ children, className, distance = 120 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
}
