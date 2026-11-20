"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/content/projects";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

const filters = [
  { label: "All projects", test: () => true },
  { label: "Digital platforms", test: (p: Project) => ["doc-express", "interpreter-allocation", "records-migration"].includes(p.slug) },
  { label: "Healthcare", test: (p: Project) => p.sector.includes("Healthcare") || p.slug === "healthcare-and-public-builds" },
  { label: "Governance and PMO", test: (p: Project) => ["delivery-governance", "pmo-standardisation"].includes(p.slug) },
  { label: "Infrastructure", test: (p: Project) => p.slug === "healthcare-and-public-builds" },
];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const list = projects.filter(filters[active].test);
  return (
    <LayoutGroup>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((f, i) => (
          <button
            key={f.label}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn("relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors", active === i ? "text-ivory" : "text-forest hover:bg-forest/5")}
          >
            {active === i ? <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-forest" transition={{ type: "spring", stiffness: 380, damping: 32 }} /> : null}
            <span className="relative">{f.label}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: EASE }}
              className={cn(p.slug === "doc-express" && i === 0 && "md:col-span-2")}
            >
              <ProjectCard project={p} featured={p.slug === "doc-express" && i === 0} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}
