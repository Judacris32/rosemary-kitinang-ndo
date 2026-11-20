"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/** Page transition: a forest curtain lifts away on every route change. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <>
      {!reduce ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[90] origin-top bg-forest"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.05 }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 grid place-items-center">
            <motion.span
              className="h-3 w-3 rounded-full bg-coral"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      ) : null}
      {children}
    </>
  );
}
