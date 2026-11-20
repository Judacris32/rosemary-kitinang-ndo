import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Decor, type Corner } from "./Decor";

export type Tone = "ivory" | "white" | "mint" | "mint-soft" | "peach" | "forest";

const tones: Record<Tone, string> = {
  ivory: "bg-ivory",
  white: "bg-white",
  mint: "bg-mint",
  "mint-soft": "bg-mint-soft",
  peach: "bg-peach",
  forest: "bg-forest text-mint",
};

/** Vertical rhythm and background tone are defined once here. */
export function Section({
  children,
  tone = "ivory",
  className,
  id,
  tight,
  decor,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  tight?: boolean;
  /** Organic corner shapes, e.g. ["tr", "bl"]. */
  decor?: Corner[];
}) {
  return (
    <section id={id} className={cn("relative", decor && "isolate overflow-hidden", tight ? "py-16 md:py-20" : "py-20 md:py-28 lg:py-32", tones[tone], className)}>
      {decor ? <Decor corners={decor} onDark={tone === "forest"} className="-z-10" /> : null}
      {children}
    </section>
  );
}
