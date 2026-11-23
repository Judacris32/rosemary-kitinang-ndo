import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconCard } from "@/components/ui/IconCard";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { portraits } from "@/content/images";
import { values } from "@/content/site";
import { valueIcons } from "@/lib/icons";

export function MeetRosemary() {
  return (
    <Section tone="ivory" decor={["tr", "bl"]}>
      <Container>
        <SectionHeading eyebrow="About me" title={["Meet", { accent: "Rosemary" }]} />
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <ImageReveal
            src={portraits.chinSeated}
            alt="Rosemary Kitinang Ndo seated at a wooden table, chin resting on her hand"
            className="mx-auto aspect-[6/7] w-full max-w-md rounded-5xl shadow-lift lg:sticky lg:top-28 lg:max-w-none"
            imgClassName="object-[50%_100%]"
            sizes="(min-width: 1024px) 42vw, 90vw"
          />
          <div>
            <Reveal>
              <p className="border-l-4 border-coral pl-6 text-[clamp(1.4rem,2.3vw,1.9rem)] font-bold leading-[1.25] tracking-[-0.02em] text-ink">
                I&apos;m a Digital Transformation Project Manager with more than four years of delivering technology, operational and strategic projects across healthcare, consulting, corporate operations and construction.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-body">
                My work spans project planning, implementation, workflow automation, data migration, risk and change management, and programme governance. I care most about solutions that reduce manual work, improve access to services and create value people can actually feel.
              </p>
            </Reveal>
            <Stagger className="mt-9 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <IconCard icon={valueIcons[v.icon]} title={v.title} text={v.text} className="h-full" stacked />
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2} className="mt-9">
              <Button href="/about" variant="emerald">More about me</Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
