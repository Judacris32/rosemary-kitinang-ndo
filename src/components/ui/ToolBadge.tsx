import Image from "next/image";
import { Hospital, Languages, MonitorSmartphone, SquareChartGantt } from "lucide-react";
import type { Tool } from "@/content/site";

const icons = { gantt: SquareChartGantt, hospital: Hospital, languages: Languages, monitor: MonitorSmartphone };

/** A tool shown with its original logo and colours. */
export function ToolBadge({ tool }: { tool: Tool }) {
  const Icon = tool.icon ? icons[tool.icon] : null;
  return (
    <span className="mx-2 flex items-center gap-3 whitespace-nowrap rounded-2xl bg-white px-5 py-3.5 text-lg font-semibold text-ink shadow-card ring-1 ring-forest/[0.07]">
      {tool.logo ? (
        <Image src={tool.logo} alt="" width={28} height={28} className="h-7 w-7 object-contain" unoptimized />
      ) : Icon ? (
        <span className="grid h-7 w-7 place-items-center rounded-md text-white" style={{ backgroundColor: tool.color }}>
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      ) : null}
      {tool.name}
    </span>
  );
}

/** Compact version for grids. */
export function ToolChip({ tool }: { tool: Tool }) {
  const Icon = tool.icon ? icons[tool.icon] : null;
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-ivory py-1.5 pl-1.5 pr-3.5 text-sm font-semibold text-ink ring-1 ring-forest/[0.07]">
      {tool.logo ? (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white">
          <Image src={tool.logo} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" unoptimized />
        </span>
      ) : Icon ? (
        <span className="grid h-7 w-7 place-items-center rounded-full text-white" style={{ backgroundColor: tool.color }}>
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      ) : null}
      {tool.name}
    </span>
  );
}
