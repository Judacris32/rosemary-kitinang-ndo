import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "emerald" | "coral" | "light" | "outline-light" | "outline";

const styles: Record<Variant, { btn: string; badge: string }> = {
  emerald: { btn: "bg-emerald text-white hover:bg-forest", badge: "bg-white/15 text-white group-hover:bg-coral group-hover:text-forest-ink" },
  coral: { btn: "bg-coral text-forest-ink hover:bg-[#ff8572]", badge: "bg-forest-ink/10 text-forest-ink group-hover:bg-forest group-hover:text-coral-soft" },
  light: { btn: "bg-ivory text-forest hover:bg-white", badge: "bg-forest text-ivory group-hover:bg-coral group-hover:text-forest-ink" },
  "outline-light": { btn: "border border-white/35 text-white hover:bg-white hover:text-forest", badge: "bg-white/15 text-white group-hover:bg-forest group-hover:text-white" },
  outline: { btn: "border border-forest/20 text-forest hover:border-forest hover:bg-forest hover:text-ivory", badge: "bg-forest/10 text-forest group-hover:bg-coral group-hover:text-forest-ink" },
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
};

/** Pill button with a round arrow badge; colours ease over ~0.45s and the arrow rotates. */
export function Button({ href, children, variant = "emerald", className, external, icon }: Props) {
  const s = styles[variant];
  const content = (
    <>
      <span>{children}</span>
      <span className={cn("grid h-8 w-8 place-items-center rounded-full transition-all duration-[450ms] ease-brand", s.badge)}>
        {icon ?? <ArrowUpRight className="h-4 w-4 transition-transform duration-[450ms] ease-brand group-hover:rotate-45" aria-hidden="true" />}
      </span>
    </>
  );
  const cls = cn(
    "group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[0.95rem] font-semibold transition-colors duration-[450ms] ease-brand",
    s.btn,
    className,
  );
  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
