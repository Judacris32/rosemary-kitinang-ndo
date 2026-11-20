import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectCover } from "@/components/covers/ProjectCover";
import { cn } from "@/lib/cn";

export function ProjectCard({ project, featured, className }: { project: Project; featured?: boolean; className?: string }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-card ring-1 ring-forest/5 transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:shadow-lift",
        featured && "lg:flex-row",
        className,
      )}
    >
      <ProjectCover
        kind={project.cover}
        large={featured}
        className={cn("shrink-0 transition-transform duration-700 ease-brand", featured ? "aspect-[4/3] lg:aspect-auto lg:w-[56%]" : "aspect-[16/11]")}
      />
      <div className={cn("flex flex-1 flex-col p-6 sm:p-8", featured && "lg:justify-center lg:p-12")}>
        <span className="h-1 w-10 rounded-full bg-coral transition-all duration-500 ease-brand group-hover:w-16" aria-hidden="true" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald">{project.kicker}</p>
        <h3 className={cn("mt-3 font-bold tracking-[-0.02em] text-ink", featured ? "text-display-md" : "text-2xl")}>{project.title}</h3>
        <p className="mt-2 text-sm font-medium text-coral-deep">{project.client}</p>
        <p className={cn("mt-4 leading-relaxed text-body", featured ? "text-lg" : "line-clamp-3")}>{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.metrics.slice(0, featured ? 3 : 2).map((m) => (
            <span key={m.label} className="rounded-full bg-mint-soft px-3 py-1.5 text-xs font-semibold text-forest">
              <span className="text-emerald">{m.value}</span> · {m.label}
            </span>
          ))}
        </div>
        <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-forest">
          Read the case study
          <span className="grid h-8 w-8 place-items-center rounded-full bg-forest/5 transition-colors duration-500 group-hover:bg-coral group-hover:text-forest-ink">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-brand group-hover:rotate-45" aria-hidden="true" />
          </span>
        </span>
      </div>
    </Link>
  );
}
