import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/** Card from the refreshed style: mint icon tile, title with a coral underline, short text. */
export function IconCard({ icon: Icon, title, text, className, tone = "white", stacked }: { icon: LucideIcon; title: string; text: string; className?: string; tone?: "white" | "ivory"; stacked?: boolean }) {
  if (stacked) {
    return (
      <div
        className={cn(
          "group rounded-3xl p-6 ring-1 ring-forest/[0.07] transition-all duration-500 ease-brand hover:-translate-y-1 hover:shadow-lift",
          tone === "white" ? "bg-white shadow-card" : "bg-ivory",
          className,
        )}
      >
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint text-emerald transition-colors duration-500 group-hover:bg-forest group-hover:text-coral">
            <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-bold leading-tight text-ink">{title}</h3>
            <span className="mt-2 block h-[3px] w-8 rounded-full bg-coral transition-all duration-500 group-hover:w-14" aria-hidden="true" />
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-body">{text}</p>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "group flex gap-5 rounded-3xl p-6 ring-1 ring-forest/[0.07] transition-all duration-500 ease-brand hover:-translate-y-1 hover:shadow-lift sm:p-7",
        tone === "white" ? "bg-white shadow-card" : "bg-ivory",
        className,
      )}
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint text-emerald transition-colors duration-500 group-hover:bg-forest group-hover:text-coral">
        <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        <span className="mt-2 block h-[3px] w-8 rounded-full bg-coral transition-all duration-500 group-hover:w-14" aria-hidden="true" />
        <p className="mt-3 leading-relaxed text-body">{text}</p>
      </div>
    </div>
  );
}
