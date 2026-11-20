import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";

export function FeaturedProjects() {
  const [featured, ...rest] = projects;
  return (
    <Section tone="peach" decor={["tr"]}>
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title={["Projects that made a", { accent: "real difference" }]}
          intro="From a live agri-tech ordering platform to interpreter allocation for patients, here is some of the work I am proudest of."
        />
        <Reveal className="mt-14">
          <ProjectCard project={featured} featured />
        </Reveal>
        <Stagger className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.slice(0, 3).map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/projects" variant="emerald">See all projects</Button>
        </Reveal>
      </Container>
    </Section>
  );
}
