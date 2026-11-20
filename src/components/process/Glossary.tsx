"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { glossary } from "@/content/process";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Glossary() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-2">
      {glossary.map((g, i) => {
        const isOpen = open === i;
        return (
          <div key={g.term} className={cn("rounded-3xl transition-colors duration-500", isOpen ? "bg-white shadow-card" : "bg-white/60")}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
            >
              <span className="text-lg font-bold text-ink">{g.term}</span>
              <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-500", isOpen ? "rotate-45 bg-coral text-forest-ink" : "bg-forest/5 text-forest")}>
                <Plus className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} className="overflow-hidden">
                  <p className="px-5 pb-6 leading-relaxed text-body sm:px-6">{g.meaning}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
