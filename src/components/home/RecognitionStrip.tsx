import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { awards } from "@/content/awards";

export function RecognitionStrip() {
  return (
    <Section tone="mint" decor={["tr"]}>
      <Container>
        <SectionHeading eyebrow="Recognition" title={["Recognised for", { accent: "delivery" }]} intro="Two industry awards in two years, both for digital project delivery." />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {awards.map((a) => (
            <StaggerItem key={a.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-card ring-1 ring-forest/5 transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:shadow-lift sm:flex-row">
                <div className="relative aspect-[4/5] shrink-0 overflow-hidden bg-forest sm:aspect-auto sm:w-[42%]">
                  <Image src={a.photo} alt={a.photoAlt} fill sizes="(min-width: 768px) 22vw, 100vw" placeholder="blur" className="object-cover transition-transform duration-700 ease-brand group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="h-1 w-10 rounded-full bg-coral" aria-hidden="true" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
                    {a.body} · {a.year}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug tracking-[-0.015em] text-ink">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{a.summary}</p>
                  <p className="mt-auto pt-6 text-sm font-medium text-forest">{a.date} · {a.venue.split(",").slice(-1)[0].trim()}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/recognition" variant="emerald">See the full story</Button>
        </Reveal>
      </Container>
    </Section>
  );
}
