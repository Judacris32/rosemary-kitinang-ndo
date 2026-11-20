import { CountUp } from "@/components/motion/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Metric } from "@/content/projects";
import { cn } from "@/lib/cn";

function parse(value: string) {
  const m = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!m) return null;
  const n = Number(m[2].replace(/,/g, ""));
  if (!Number.isFinite(n) || m[2].includes(".")) return null;
  return { prefix: m[1], n, suffix: m[3] };
}

export function MetricValue({ value }: { value: string }) {
  const p = parse(value);
  return p ? <CountUp to={p.n} prefix={p.prefix} suffix={p.suffix} /> : <>{value}</>;
}

export function Metrics({ metrics, className }: { metrics: Metric[]; className?: string }) {
  return (
    <Stagger className={cn("grid gap-4 sm:grid-cols-2", metrics.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3", className)}>
      {metrics.map((m) => (
        <StaggerItem key={m.label}>
          <div className="group h-full rounded-3xl bg-white p-7 shadow-card ring-1 ring-forest/5">
            <p className="text-[clamp(2.4rem,4vw,3.25rem)] font-extrabold leading-none tracking-[-0.04em] text-forest">
              <MetricValue value={m.value} />
            </p>
            <span className="mt-5 block h-1 w-8 rounded-full bg-coral transition-all duration-500 group-hover:w-14" aria-hidden="true" />
            <p className="mt-4 font-medium leading-snug text-ink">{m.label}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
