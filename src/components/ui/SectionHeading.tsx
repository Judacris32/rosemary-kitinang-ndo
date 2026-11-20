import type { ReactNode } from "react";
import { SplitWords, type HeadingPart } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark,
  align = "center",
  className,
  as: Tag = "h2",
  size = "lg",
}: {
  eyebrow: string;
  title: HeadingPart[];
  intro?: ReactNode;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
  size?: "lg" | "md";
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "", "max-w-4xl", className)}>
      <Reveal>
        <span className={cn("eyebrow", dark ? "text-emerald-glow" : "text-emerald")}>{eyebrow}</span>
      </Reveal>
      <Tag className={cn("mt-5 font-bold", size === "lg" ? "text-display-lg" : "text-display-md", dark ? "text-ivory" : "text-ink")}>
        <SplitWords parts={title} accentClass={dark ? "accent-glow" : "accent-mark"} />
      </Tag>
      {intro ? (
        <Reveal delay={0.15}>
          <p className={cn("mt-6 text-lg leading-relaxed", dark ? "text-mint/80" : "text-body", align === "center" && "mx-auto max-w-2xl")}>{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
