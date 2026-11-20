import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/motion/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { stats } from "@/content/site";
import { CalendarCheck, FolderCheck, Clock3, DatabaseZap } from "lucide-react";

const statIcons = [CalendarCheck, FolderCheck, Clock3, DatabaseZap];

export function Stats() {
  return (
    <Section tone="mint" decor={["bl"]}>
      <Container>
        <SectionHeading eyebrow="By the numbers" title={["Results you can", { accent: "measure" }]} intro="Every figure here comes from projects I have led or worked on, across healthcare, consulting and digital services." />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = statIcons[i];
            return (
            <StaggerItem key={s.label}>
              <div className="group h-full rounded-3xl bg-white p-7 shadow-card ring-1 ring-forest/5 transition-transform duration-500 ease-brand hover:-translate-y-1">
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-mint text-emerald transition-colors duration-500 group-hover:bg-forest group-hover:text-coral">
                  <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="text-[clamp(2.75rem,4.5vw,3.75rem)] font-extrabold leading-none tracking-[-0.04em] text-forest">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <span className="mt-5 block h-1 w-8 rounded-full bg-coral transition-all duration-500 group-hover:w-14" aria-hidden="true" />
                <p className="mt-4 font-semibold text-ink">{s.label}</p>
                <p className="mt-1 text-sm text-body">{s.note}</p>
              </div>
            </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
