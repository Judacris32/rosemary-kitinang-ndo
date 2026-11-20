import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Marquee({ children, reverse, className }: { children: ReactNode; reverse?: boolean; className?: string }) {
  return (
    <div className={cn("group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]", className)}>
      <div className={cn("flex w-max shrink-0 items-center", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
