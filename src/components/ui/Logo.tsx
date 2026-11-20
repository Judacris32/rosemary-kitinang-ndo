import { cn } from "@/lib/cn";

const R_PATH = "M110.08687248322147 384.0V128.0H208.01975838926174Q234.4788187919463 128.0 254.92445637583893 137.2778523489933Q275.37009395973155 146.55570469798658 287.05331543624163 164.76778523489935Q298.73653691275166 182.9798657718121 298.73653691275166 209.78255033557048Q298.73653691275166 235.89798657718123 286.70969127516776 254.2818791946309Q274.6828456375839 272.66577181208055 254.40902013422817 281.94362416107384L312.8251275167785 384.0H253.03452348993287L201.14727516778524 291.22147651006713H163.34861744966443V384.0ZM163.34861744966443 244.83221476510067H208.3633825503356Q219.7029798657718 244.83221476510067 227.94995973154363 240.36510067114097Q236.19693959731543 235.89798657718123 240.83586577181208 227.99463087248324Q245.47479194630873 220.09127516778526 245.47479194630873 209.78255033557048Q245.47479194630873 199.13020134228188 240.83586577181208 191.2268456375839Q236.19693959731543 183.3234899328859 227.94995973154363 178.85637583892617Q219.7029798657718 174.38926174496646 208.3633825503356 174.38926174496646H163.34861744966443Z";

/** The R + milestone-dot monogram, drawn from Plus Jakarta Sans ExtraBold outlines. */
export function LogoIcon({ className, tile = "#0B3D2E", letter = "#FFFBF6", title }: { className?: string; tile?: string; letter?: string; title?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={cn("h-10 w-10 shrink-0", className)} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <rect width="512" height="512" rx="120" fill={tile} />
      <path d={R_PATH} fill={letter} />
      <circle cx="365.0" cy="347.1" r="36.9" fill="#FF6B57" />
    </svg>
  );
}

/** Navbar and footer lockup: icon | name with coral dot + role line. */
export function LogoLockup({ dark, compact, className }: { dark?: boolean; compact?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoIcon tile={dark ? "#FFFBF6" : "#0B3D2E"} letter={dark ? "#0B3D2E" : "#FFFBF6"} className="h-9 w-9 sm:h-10 sm:w-10" />
      <span className={cn("h-8 w-px", compact && "hidden sm:block", dark ? "bg-white/25" : "bg-forest/20")} aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <span className={cn("whitespace-nowrap text-[0.92rem] font-extrabold tracking-[-0.02em] sm:text-[1.02rem]", dark ? "text-ivory" : "text-forest")}>
          Rosemary Kitinang Ndo
          <span className="ml-[2px] inline-block h-[6px] w-[6px] rounded-full bg-coral align-baseline" aria-hidden="true" />
        </span>
        <span className={cn("mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em]", compact && "hidden sm:block", dark ? "text-emerald-glow" : "text-emerald")}>
          Digital Project Manager
        </span>
      </span>
    </span>
  );
}
