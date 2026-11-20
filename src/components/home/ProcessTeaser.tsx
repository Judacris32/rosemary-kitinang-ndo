import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StatusChip } from "@/components/ui/StatusChip";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { processSteps } from "@/content/process";

export function ProcessTeaser() {
  return (
    <Section tone="ivory" decor={["bl"]}>
      <Container>
        <SectionHeading
          eyebrow="How I work"
          title={["How I keep projects", { accent: "on track" }]}
          intro="PRINCE2 structure where it matters, agile flexibility where it helps, and honest status updates all the way through."
        />
        <Reveal className="mt-12 text-center text-sm font-medium text-body">
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-line">A live view of a typical project, stage by stage</span>
        </Reveal>
        <Stagger className="relative mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <span className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-[linear-gradient(90deg,transparent,#126B56_15%,#FF6B57_85%,transparent)] opacity-30 lg:block" aria-hidden="true" />
          {processSteps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="relative h-full rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest/5">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-sm font-bold text-ivory">{i + 1}</span>
                  <StatusChip status={s.status} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/how-i-work" variant="outline">See my full approach</Button>
        </Reveal>
      </Container>
    </Section>
  );
}
