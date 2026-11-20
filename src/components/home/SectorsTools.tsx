import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/motion/Marquee";
import { sectors, tools } from "@/content/site";
import { ToolBadge } from "@/components/ui/ToolBadge";

export function SectorsTools() {
  return (
    <Section tone="mint-soft" tight decor={["tl"]}>
      <Container>
        <SectionHeading eyebrow="Where and with what" title={["Sectors I know and", { accent: "tools I use" }]} size="md" />
      </Container>
      <div className="mt-12 space-y-5 py-2">
        <Marquee>
          {sectors.map((s) => (
            <span key={s} className="mx-2 flex items-center gap-3 whitespace-nowrap rounded-full bg-forest px-6 py-3.5 text-lg font-semibold text-ivory">
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
              {s}
            </span>
          ))}
        </Marquee>
        <Marquee reverse>
          {tools.map((t) => (
            <ToolBadge key={t.name} tool={t} />
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
