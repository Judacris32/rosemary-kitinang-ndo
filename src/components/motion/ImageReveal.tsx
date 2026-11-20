"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

/**
 * Clip-path wipe plus a settle from zoom. The clip lives on an inner layer so the
 * outer element is always measurable by the in-view observer.
 */
export function ImageReveal({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  imgClassName,
  from = "bottom",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  imgClassName?: string;
  from?: "bottom" | "left";
}) {
  const reduce = useReducedMotion();
  const hidden = from === "bottom" ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)";
  return (
    <motion.div
      className={cn("relative overflow-hidden bg-forest", className)}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      <motion.div
        className="absolute inset-0"
        variants={{ hidden: { clipPath: hidden }, show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.2, ease: EASE } } }}
      >
        <motion.div
          className="absolute inset-0"
          variants={{ hidden: { scale: 1.18 }, show: { scale: 1, transition: { duration: 1.6, ease: EASE } } }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" priority={priority} className={cn("object-cover", imgClassName)} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
