import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { PressGallery } from "@/components/recognition/PressGallery";
import { awards, press } from "@/content/awards";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Most Promising Digital Project Manager of the Year (Nigeria Technology Awards 2024) and the Digital Innovation & Product Delivery Award (Titans of Tech 2025), with press coverage.",
  alternates: { canonical: "/recognition" },
};

export default function RecognitionPage() {
  return (
    <>
      <PageHero
        crumb="Recognition"
        eyebrow="Awards and press"
        title={["Recognised for", { accent: "digital delivery" }]}
        intro="Two industry awards in two years, both for digital project delivery and both on the public record."
        features={[
          { icon: "trophy", label: "Two industry awards" },
          { icon: "newspaper", label: "Publicly recorded" },
        ]}
        laurels
      />

      {awards.map((a, i) => (
        <Section key={a.slug} tone={i === 0 ? "white" : "mint"} decor={i === 0 ? ["tr"] : ["bl"]}>
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className={cn("relative", i % 2 === 1 && "lg:order-2")}>
                <ImageReveal src={a.photo} alt={a.photoAlt} className="aspect-[4/5] rounded-4xl" sizes="(min-width: 1024px) 45vw, 90vw" />
              </div>
              <div>
                <Reveal>
                  <span className="eyebrow text-emerald">
                    {a.body} · {a.edition}
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-5 text-display-md font-bold text-ink">{a.title}</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-body">
                    <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-coral-deep" aria-hidden="true" />{a.date}</span>
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-coral-deep" aria-hidden="true" />{a.venue}</span>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-body">{a.summary}</p>
                </Reveal>
                <ol className="mt-8 space-y-0">
                  {a.timeline.map((t, k) => (
                    <Reveal as="li" key={`${t.date}-${k}`} delay={0.12 + k * 0.06} className="relative flex gap-5 pb-5 last:pb-0">
                      {k < a.timeline.length - 1 ? <span className="absolute bottom-0 left-[0.4rem] top-5 w-px bg-forest/15" aria-hidden="true" /> : null}
                      <span className={cn("mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full ring-4", k === a.timeline.length - 1 ? "bg-coral ring-peach" : "bg-emerald ring-mint")} aria-hidden="true" />
                      <div>
                        <p className="text-sm font-bold text-forest">{t.date}</p>
                        <p className="text-body">{t.label}</p>
                      </div>
                    </Reveal>
                  ))}
                </ol>
                <Reveal delay={0.3} className="mt-9 flex flex-wrap gap-3">
                  {a.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-forest/5 px-5 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-ivory">
                      {l.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section tone="peach" decor={["tr"]}>
        <Container>
          <SectionHeading eyebrow="In the news" title={["Featured in the", { accent: "press" }]} intro="Both awards were covered by national newspapers. Tap a story to read the screenshot, or open the original article." />
          <div className="mt-14">
            <PressGallery items={press} />
          </div>
        </Container>
      </Section>

    </>
  );
}
