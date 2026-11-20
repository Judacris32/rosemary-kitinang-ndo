"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Expand } from "lucide-react";
import type { StaticImageData } from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { cn } from "@/lib/cn";

type Item = { title: string; source: string; date: string; image: StaticImageData; href?: string };

export function PressGallery({ items }: { items: Item[] }) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <Stagger className="grid gap-6 sm:grid-cols-2">
        {items.map((p, i) => (
          <StaggerItem key={p.title}>
            <article className="group flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-card ring-1 ring-forest/5 transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:shadow-lift">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="relative flex aspect-[5/6] items-center justify-center overflow-hidden bg-peach-soft p-5 sm:p-7"
                aria-label={`Enlarge: ${p.title}`}
              >
                {/* The whole screenshot fills the panel at its own proportions, never cropped.
                    The box takes the image's aspect ratio, so its size never depends on which
                    resolution the browser downloads. */}
                <span
                  className={cn(
                    "relative block overflow-hidden rounded-xl shadow-card ring-1 ring-forest/10 transition-transform duration-700 ease-brand group-hover:scale-[1.02]",
                    p.image.width / p.image.height < 5 / 6 ? "h-full" : "w-full",
                  )}
                  style={{ aspectRatio: `${p.image.width} / ${p.image.height}` }}
                >
                  <Image src={p.image} alt={`${p.source}: ${p.title}`} fill sizes="(min-width: 1280px) 560px, (min-width: 640px) 45vw, 90vw" placeholder="blur" className="object-cover" />
                </span>
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-forest/85 text-ivory">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
              <div className="flex flex-1 flex-col p-7">
                <span className="h-1 w-10 rounded-full bg-coral" aria-hidden="true" />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
                  {p.source} · {p.date}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-ink">{p.title}</h3>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-forest hover:text-emerald">
                    Read the original
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
      <Lightbox items={items.map((p) => ({ src: p.image, alt: p.title, caption: `${p.source} · ${p.date}` }))} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </>
  );
}
