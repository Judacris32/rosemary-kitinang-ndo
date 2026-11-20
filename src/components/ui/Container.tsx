import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Side spacing is defined once here: 20px phone, 32px tablet, 48px desktop, 1280px max. */
export function Container({ children, className, wide }: { children: ReactNode; className?: string; wide?: boolean }) {
  return <div className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", wide ? "max-w-[1440px]" : "max-w-[1280px]", className)}>{children}</div>;
}
