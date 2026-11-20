import type { Metadata } from "next";
import { Check, Layers, Workflow } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusChip } from "@/components/ui/StatusChip";
import { BoardWall } from "@/components/ui/Backgrounds";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PdsaCycle } from "@/components/process/PdsaCycle";
import { RaidExplainer } from "@/components/process/RaidExplainer";
import { Glossary } from "@/components/process/Glossary";
import { processSteps, workingWithMe } from "@/content/process";
import { tools } from "@/content/site";
import { ToolChip } from "@/components/ui/ToolBadge";

export const metadata: Metadata = {
  title: "How I work",
  description: "How Rosemary Kitinang Ndo runs projects: PRINCE2 structure, agile delivery, RAID registers, user acceptance testing and PDSA improvement cycles.",
  alternates: { canonical: "/how-i-work" },
};

const toolGroups = [
  { title: "Planning and delivery", items: ["Microsoft Project", "Jira", "Confluence", "Visio"] },
  { title: "Data and reporting", items: ["Power BI", "SQL", "PowerPoint"] },
  { title: "Collaboration and automation", items: ["SharePoint", "Power Automate", "Microsoft 365"] },
  { title: "Healthcare systems", items: ["Meditech", "Soliton", "ICE Desktop"] },
];

const statuses = [
  { s: "Not started", t: "Planned and resourced, waiting for its start date." },
  { s: "On track", t: "Moving as planned. No action needed from you." },
  { s: "At risk", t: "Something could slip. You will hear what, why and my plan." },
  { s: "Delivered", t: "Done, tested, handed over and signed off." },
];

export default function HowIWorkPage() {
  const toolCount = tools.length;
  return (
    <>
      <PageHero
        crumb="How I work"
        eyebrow="My approach"
        title={["Structure where it matters,", { br: true }, { accent: "flexibility" }, "where it helps"]}
        intro="The methods, habits and tools I use to keep projects on track, people informed and results measurable."
        background={<BoardWall />}
        accent="glow"
        features={[
          { icon: "layers", label: "Clear processes" },
          { icon: "users", label: "Collaborative delivery" },
          { icon: "chart", label: "Measurable results" },
        ]}
      />

      <Section tone="white" decor={["tr"]}>
        <Container>
          <SectionHeading eyebrow="Two ways of working" title={["PRINCE2 meets", { accent: "agile" }]} intro="Neither method is a religion. I use the structure of PRINCE2 for governance and control, and agile habits for building, testing and adjusting quickly." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-4xl bg-forest p-8 text-mint/85 sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-coral text-forest-ink"><Layers className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-6 text-2xl font-bold text-ivory">PRINCE2 for control</h3>
                <ul className="mt-5 space-y-3">
                  {["Clear stages with decision points", "Defined roles and responsibilities", "Business case checked at every stage", "Formal risk, issue and change control"].map((x) => (
                    <li key={x} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-glow" aria-hidden="true" />{x}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-4xl bg-mint p-8 sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-emerald-glow"><Workflow className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-6 text-2xl font-bold text-ink">Agile for delivery</h3>
                <ul className="mt-5 space-y-3 text-body">
                  {["Short cycles of build, test and feedback", "Real users testing early and often", "Priorities adjusted as we learn", "Visible boards everyone can read"].map((x) => (
                    <li key={x} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />{x}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" decor={["bl"]}>
        <Container>
          <SectionHeading eyebrow="Start to finish" title={["The five stages of", { accent: "every project" }]} intro="A live view of a typical project, stage by stage, and what I do in each one." />
          <Stagger className="mt-14 grid gap-5 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest/5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-sm font-bold text-ivory">{i + 1}</span>
                    <StatusChip status={s.status} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{s.text}</p>
                  <ul className="mt-auto space-y-1.5 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-medium text-forest">
                        <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="mint" decor={["tr"]}>
        <Container>
          <SectionHeading eyebrow="From my NHS training" title={["Plan, do, study,", { accent: "act" }]} intro="PDSA is a simple cycle used across the NHS to test changes safely. Tap each stage to see it applied to a real project." />
          <div className="mt-20">
            <PdsaCycle />
          </div>
        </Container>
      </Section>

      <Section tone="peach" decor={["bl"]}>
        <Container>
          <SectionHeading eyebrow="My favourite tool" title={["The RAID register,", { accent: "explained" }]} intro="Four letters that stop surprises. Pick one to see what it means, with a real example from DOC Express." />
          <div className="mt-14">
            <RaidExplainer />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading eyebrow="How I report" title={["Status you can", { accent: "trust" }]} align="left" size="md" />
              <Stagger className="mt-8 space-y-3">
                {statuses.map((x) => (
                  <StaggerItem key={x.s}>
                    <div className="flex items-center gap-4 rounded-2xl bg-ivory p-4 ring-1 ring-forest/5">
                      <StatusChip status={x.s} className="w-32 justify-center" />
                      <p className="text-sm text-body">{x.t}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div>
              <SectionHeading eyebrow="Working with me" title={["What you can", { accent: "expect" }]} align="left" size="md" />
              <ul className="mt-8 space-y-3">
                {workingWithMe.map((w) => (
                  <Reveal as="li" key={w} className="flex gap-4 rounded-2xl bg-mint-soft p-5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald text-white"><Check className="h-4 w-4" aria-hidden="true" /></span>
                    <span className="font-medium text-ink">{w}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <SectionHeading eyebrow="Toolkit" title={[`${toolCount} tools in`, { accent: "my kit" }]} />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {toolGroups.map((g) => (
              <StaggerItem key={g.title}>
                <div className="h-full rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest/5">
                  <span className="block h-1 w-10 rounded-full bg-coral" aria-hidden="true" />
                  <h3 className="mt-5 font-bold text-ink">{g.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((t) => {
                      const tool = tools.find((x) => x.name === t);
                      return <li key={t}>{tool ? <ToolChip tool={tool} /> : t}</li>;
                    })}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="mint-soft" decor={["tr"]}>
        <Container>
          <SectionHeading eyebrow="Plain English" title={["Project terms,", { accent: "decoded" }]} intro="New to project jargon? Here is what the words in my case studies actually mean." />
          <div className="mt-14">
            <Glossary />
          </div>
        </Container>
      </Section>
    </>
  );
}
