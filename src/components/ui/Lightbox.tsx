"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { EASE } from "@/lib/motion";

export type LightboxItem = { src: StaticImageData; alt: string; caption?: string };

export function Lightbox({ items, index, onClose, onIndex }: { items: LightboxItem[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  const open = index !== null;
  const go = useCallback(
    (d: number) => {
      if (index === null) return;
      onIndex((index + d + items.length) % items.length);
    },
    [index, items.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, go, onClose]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-ink/95 p-4 backdrop-blur-md md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.caption ?? item.alt}
          onClick={onClose}
        >
          <motion.figure
            key={index}
            className="relative flex max-h-full w-full max-w-6xl flex-col items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[72vh] w-full">
              <Image src={item.src} alt={item.alt} fill sizes="100vw" className="object-contain" placeholder="blur" />
            </div>
            {item.caption ? <figcaption className="mt-4 text-center text-base font-semibold text-ivory">{item.caption}</figcaption> : null}
            <p className="mt-1 text-sm text-mint/70 tabular-nums">
              {(index ?? 0) + 1} / {items.length}
            </p>
          </motion.figure>
          <button type="button" onClick={onClose} className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-coral text-forest-ink shadow-lift ring-4 ring-white/10 transition-colors hover:bg-ivory md:right-6 md:top-6 md:h-14 md:w-14" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
          {items.length > 1 ? (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory text-forest shadow-lift transition-colors hover:bg-coral hover:text-forest-ink md:left-6" aria-label="Previous image">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory text-forest shadow-lift transition-colors hover:bg-coral hover:text-forest-ink md:right-6" aria-label="Next image">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
