import { cn } from "@/lib/cn";

const map: Record<string, string> = {
  "On track": "bg-mint text-emerald",
  "At risk": "bg-peach text-coral-deep",
  Delivered: "bg-forest text-emerald-glow",
  "Not started": "bg-white text-body ring-1 ring-line",
};

export function StatusChip({ status, className }: { status: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold", map[status] ?? map["Not started"], className)}>
      {status === "Delivered" ? (
        <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true"><path d="M2.5 6.5 5 9l4.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ) : (
        <span className="relative flex h-2 w-2">
          {status === "On track" ? <span className="absolute inset-0 animate-pulse-dot rounded-full bg-current" /> : null}
          <span className="relative h-2 w-2 rounded-full bg-current" />
        </span>
      )}
      {status}
    </span>
  );
}
