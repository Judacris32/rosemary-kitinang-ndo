"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function CopyEmail({ className, dark, outline }: { className?: string; dark?: boolean; outline?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(site.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2200);
        } catch {
          window.location.href = `mailto:${site.email}`;
        }
      }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-[450ms] ease-brand",
        outline
          ? "border border-white/50 px-6 py-[0.95rem] text-[0.95rem] text-white hover:border-white hover:bg-white hover:text-forest"
          : dark
            ? "bg-white/10 text-white hover:bg-white/20"
            : "bg-forest/5 text-forest hover:bg-forest/10",
        className,
      )}
      aria-live="polite"
    >
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}
