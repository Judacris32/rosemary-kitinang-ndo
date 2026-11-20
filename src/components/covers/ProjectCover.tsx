import Image, { type StaticImageData } from "next/image";
import { Building2, Check, Database, FileText, Languages, MapPin, ShieldCheck, UserRound } from "lucide-react";
import type { CoverKind } from "@/content/projects";
import { docExpressApp } from "@/content/images";
import { cn } from "@/lib/cn";

export function PhoneFrame({ src, alt, className, sizes = "240px", priority }: { src: StaticImageData; alt: string; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className={cn("relative aspect-[9/19.5] overflow-hidden rounded-[1.9rem] border-[6px] border-forest-ink bg-forest-ink shadow-lift", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" priority={priority} className="object-cover object-top" />
      <span className="absolute left-1/2 top-1.5 h-[5px] w-12 -translate-x-1/2 rounded-full bg-forest-ink/90" aria-hidden="true" />
    </div>
  );
}

function DocExpressCover({ large }: { large?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(120%_90%_at_80%_10%,#FFE7DE_0%,#FFD3C5_45%,#FFB3A6_100%)]">
      <div className="absolute inset-0 grain opacity-60" />
      <div className={cn("absolute inset-x-0 bottom-0 flex items-end justify-center", large ? "gap-5 -mb-16" : "gap-3 -mb-14")}>
        <PhoneFrame src={docExpressApp.searchResults} alt="DOC Express search results screen" className={cn("-rotate-[8deg] translate-y-6", large ? "w-[30%] max-w-[210px]" : "w-[30%] max-w-[150px]")} />
        <PhoneFrame src={docExpressApp.dashboard} alt="DOC Express farmer dashboard" className={cn("z-10", large ? "w-[34%] max-w-[240px]" : "w-[34%] max-w-[170px]")} />
        <PhoneFrame src={docExpressApp.orderDetails} alt="DOC Express order tracking screen" className={cn("rotate-[8deg] translate-y-6", large ? "w-[30%] max-w-[210px]" : "w-[30%] max-w-[150px]")} />
      </div>
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl bg-white/95 p-4 shadow-card ring-1 ring-forest/5", className)}>{children}</div>;
}

function InterpreterCover() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(110%_90%_at_20%_0%,#EAF7F0_0%,#D9F0E6_55%,#B9E4D2_100%)]" aria-hidden="true">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute left-[7%] right-[24%] top-[12%]">
        <Card>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-peach text-coral-deep"><Languages className="h-4 w-4" /></span>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-body">Language request</p>
              <p className="text-sm font-bold text-ink">Patient needs an interpreter</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="absolute left-[18%] right-[7%] top-[44%]">
        <Card>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald text-white"><UserRound className="h-4 w-4" /></span>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-body">Real-time match</p>
                <p className="text-sm font-bold text-ink">Interpreter allocated</p>
              </div>
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-mint text-emerald"><Check className="h-4 w-4" /></span>
          </div>
        </Card>
      </div>
      <div className="absolute bottom-[10%] left-[8%] flex gap-3">
        <span className="rounded-full bg-forest px-4 py-2 text-sm font-bold text-ivory">−38% wait</span>
        <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-forest">3,000+ / month</span>
      </div>
    </div>
  );
}

function RecordsCover() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(110%_90%_at_80%_0%,#FFF3EE_0%,#FFE7DE_60%,#FFD3C5_100%)]" aria-hidden="true">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute left-[10%] top-[20%] h-[42%] w-[30%]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute inset-0 rounded-xl bg-white shadow-card ring-1 ring-forest/5" style={{ transform: `rotate(${(i - 1) * 7}deg) translate(${i * 6}px, ${i * -6}px)` }}>
            <div className="space-y-2 p-4">
              <FileText className="h-5 w-5 text-coral-deep" />
              <div className="h-1.5 w-4/5 rounded bg-forest/10" />
              <div className="h-1.5 w-3/5 rounded bg-forest/10" />
              <div className="h-1.5 w-2/3 rounded bg-forest/10" />
            </div>
          </div>
        ))}
      </div>
      <svg className="absolute left-[44%] top-[36%] h-10 w-[14%]" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M0 10 H88" stroke="#126B56" strokeWidth="2.5" strokeDasharray="6 6" />
        <path d="M84 3 L96 10 L84 17" fill="none" stroke="#126B56" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div className="absolute right-[10%] top-[22%] grid h-[38%] w-[26%] place-items-center rounded-2xl bg-forest text-emerald-glow shadow-lift">
        <Database className="h-10 w-10" />
      </div>
      <div className="absolute bottom-[12%] left-[10%] right-[10%]">
        <Card className="py-3">
          <div className="flex items-center justify-between text-xs font-semibold text-ink">
            <span>25,000+ files migrated</span>
            <span className="text-emerald">0 lost</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-mint">
            <div className="h-full w-full rounded-full bg-[linear-gradient(90deg,#126B56,#1C8C6F)]" />
          </div>
        </Card>
      </div>
    </div>
  );
}

function GovernanceCover() {
  const cols = [
    { k: "Risks", c: "bg-peach text-coral-deep", n: 3 },
    { k: "Assumptions", c: "bg-white text-body", n: 2 },
    { k: "Issues", c: "bg-peach text-coral-deep", n: 1 },
    { k: "Dependencies", c: "bg-mint text-emerald", n: 2 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(110%_90%_at_20%_0%,#EAF7F0_0%,#D9F0E6_60%,#B9E4D2_100%)]" aria-hidden="true">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute inset-x-[7%] top-[12%] grid grid-cols-4 gap-2">
        {cols.map((col) => (
          <div key={col.k} className="rounded-xl bg-white/70 p-2 ring-1 ring-forest/5">
            <p className="text-center text-lg font-extrabold leading-none text-forest">{col.k[0]}</p>
            <p className="mt-1 text-center text-[0.55rem] font-semibold uppercase tracking-wide text-body [overflow-wrap:anywhere]">{col.k}</p>
            <div className="mt-2 space-y-1.5">
              {Array.from({ length: col.n }).map((_, i) => (
                <div key={i} className={cn("h-6 rounded-md", col.c.split(" ")[0], "ring-1 ring-forest/5")} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[10%] left-[7%] right-[7%] flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-bold text-ivory"><ShieldCheck className="h-4 w-4 text-emerald-glow" /> 15+ projects</span>
        <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-forest">95% on time</span>
      </div>
    </div>
  );
}

function PmoCover() {
  const bars = [
    { l: "8%", w: "38%", c: "bg-emerald" },
    { l: "26%", w: "34%", c: "bg-forest" },
    { l: "44%", w: "30%", c: "bg-coral" },
    { l: "18%", w: "52%", c: "bg-emerald-bright" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(110%_90%_at_80%_0%,#FFF3EE_0%,#FFE7DE_60%,#FFD3C5_100%)]" aria-hidden="true">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute inset-x-[7%] top-[14%] rounded-2xl bg-white/90 p-4 shadow-card ring-1 ring-forest/5">
        <div className="flex justify-between text-[0.62rem] font-semibold uppercase tracking-wider text-body">
          {["Q1", "Q2", "Q3", "Q4"].map((q) => <span key={q}>{q}</span>)}
        </div>
        <div className="mt-3 space-y-2.5">
          {bars.map((b, i) => (
            <div key={i} className="relative h-4 rounded-full bg-ivory">
              <div className={cn("absolute top-0 h-4 rounded-full", b.c)} style={{ left: b.l, width: b.w }} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[7%] flex flex-wrap gap-2">
        <span className="rounded-full bg-forest px-4 py-2 text-sm font-bold text-ivory">£2.5M+ portfolio</span>
        <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-forest">−25% delays</span>
      </div>
    </div>
  );
}

function BuildsCover() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-forest" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(159,227,196,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(159,227,196,0.09)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <svg viewBox="0 0 300 160" className="absolute inset-x-[8%] top-[10%] h-[58%] w-[84%]" fill="none" stroke="#9FE3C4" strokeWidth="1.6">
        <path d="M20 150 V70 L80 40 L140 70 V150" />
        <path d="M140 150 V55 H270 V150" />
        <path d="M10 150 H290" strokeWidth="2.2" />
        {[0, 1, 2].map((r) => [0, 1, 2, 3].map((c) => <rect key={`${r}${c}`} x={156 + c * 28} y={70 + r * 26} width="14" height="14" rx="2" />))}
        <rect x="64" y="104" width="32" height="46" rx="2" stroke="#FF6B57" />
        <circle cx="80" cy="72" r="7" stroke="#FFB3A6" />
      </svg>
      <div className="absolute bottom-[10%] left-[8%] flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-2 text-sm font-bold text-forest-ink"><Building2 className="h-4 w-4" /> 4 sites</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-ivory"><MapPin className="h-4 w-4" /> Maiduguri · Aba</span>
      </div>
    </div>
  );
}

export function ProjectCover({ kind, large, className }: { kind: CoverKind; large?: boolean; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {kind === "doc-express" && <DocExpressCover large={large} />}
      {kind === "interpreter" && <InterpreterCover />}
      {kind === "records" && <RecordsCover />}
      {kind === "governance" && <GovernanceCover />}
      {kind === "pmo" && <PmoCover />}
      {kind === "builds" && <BuildsCover />}
    </div>
  );
}
