"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function LocalTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: site.timeZone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={className}>
      {site.city}, UK · <span className="tabular-nums">{time ?? "--:--"}</span>
    </span>
  );
}
