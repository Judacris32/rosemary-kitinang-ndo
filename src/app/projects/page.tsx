import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScreensWall } from "@/components/ui/Backgrounds";
import { Metrics } from "@/components/ui/Metrics";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies from Rosemary Kitinang Ndo: DOC Express with Amo Farm Sieberer Hatchery, interpreter allocation, records migration, delivery governance, PMO standardisation and infrastructure builds.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        eyebrow="Selected work"
        title={["Work that", { accent: "shipped" }]}
        intro="Live platforms, healthcare systems, governance frameworks and physical builds. Each one with real numbers and the story of how it got done."
        background={<ScreensWall />}
        features={[
          { icon: "rocket", label: "Delivered solutions" },
          { icon: "layers", label: "Across multiple sectors" },
          { icon: "chart", label: "With measurable impact" },
        ]}
      />
      <Section tone="ivory" decor={["tr"]}>
        <Container>
          <SectionHeading eyebrow="Case studies" title={["Six projects,", { accent: "one approach" }]} intro="Filter by the kind of work you are interested in, then open any project for the full story." />
          <div className="mt-12">
            <ProjectsGrid projects={projects} />
          </div>
        </Container>
      </Section>
      <Section tone="mint" decor={["bl"]}>
        <Container>
          <SectionHeading eyebrow="Across the work" title={["The numbers", { accent: "add up" }]} />
          <Metrics
            className="mt-14"
            metrics={[
              { value: "19,699", label: "Successful orders on DOC Express" },
              { value: "25k+", label: "Records migrated with zero data loss" },
              { value: "£2.5M+", label: "Annual portfolio budget managed" },
              { value: "3,000+", label: "Patient interactions supported every month" },
            ]}
          />
        </Container>
      </Section>
    </>
  );
}
