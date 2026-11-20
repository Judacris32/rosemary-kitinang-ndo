import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Building2, Check, MapPin, Quote } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Metrics } from "@/components/ui/Metrics";
import { ScreensWall } from "@/components/ui/Backgrounds";
import { ProjectCover } from "@/components/covers/ProjectCover";
import { AppScreensStrip, ScreenshotGrid } from "@/components/projects/Galleries";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const isDoc = project.slug === "doc-express";

  const meta = [
    { k: "Client", v: project.client },
    { k: "Sector", v: project.sector },
    { k: "When", v: project.period },
    { k: "My role", v: project.role },
  ];

  return (
    <>
      <PageHero
        crumb={project.title}
        crumbs={[{ label: "Projects", href: "/projects" }]}
        eyebrow={project.kicker}
        title={isDoc ? [{ accent: "DOC" }, "Express"] : [project.title]}
        intro={project.summary}
        background={isDoc ? <ScreensWall /> : <ProjectCover kind={project.cover} large className="absolute inset-0 scale-110" />}
      >
        <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 text-left ring-1 ring-white/10 backdrop-blur-md lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.k} className="bg-forest-deep/60 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-glow">{m.k}</dt>
              <dd className="mt-1.5 text-sm font-semibold leading-snug text-ivory">{m.v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section tone="mint" tight>
        <Container>
          <Metrics metrics={project.metrics} />
        </Container>
      </Section>

      <Section tone="white" decor={["br"]}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="The challenge" title={["What needed", { accent: "solving" }]} align="left" size="md" />
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-body">
                {project.challenge.map((c) => (
                  <Reveal key={c}>
                    <p>{c}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal>
              <ProjectCover kind={project.cover} large className="aspect-[4/3.4] rounded-4xl shadow-lift" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" decor={["tr"]}>
        <Container>
          <SectionHeading eyebrow="What I did" title={["How it came", { accent: "together" }]} />
          <ol className="relative mx-auto mt-14 max-w-3xl space-y-5">
            <span className="absolute bottom-6 left-[1.375rem] top-6 w-px bg-[linear-gradient(180deg,#126B56,#FF6B57)] opacity-40" aria-hidden="true" />
            {project.steps.map((s, i) => (
              <Reveal as="li" key={s.title} className="relative flex gap-5">
                <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-sm font-bold text-ivory ring-4 ring-ivory">{i + 1}</span>
                <div className="flex-1 rounded-3xl bg-white p-6 shadow-card ring-1 ring-forest/5 sm:p-7">
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-body">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {project.rounds ? (
        <Section tone="peach" decor={["bl"]}>
          <Container>
            <SectionHeading eyebrow="Two rounds of testing" title={["Every finding,", { accent: "on record" }]} intro="Testing was run in rounds. Each round produced a numbered log that the development team answered item by item. Here are some of the items from each." />
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {project.rounds.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.1}>
                  <div className="h-full rounded-4xl bg-white p-7 shadow-card ring-1 ring-forest/5 sm:p-9">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">{r.name}</p>
                        <h3 className="mt-1 text-xl font-bold text-ink">{r.when}</h3>
                      </div>
                      <span className="rounded-full bg-coral px-4 py-1.5 text-sm font-bold text-forest-ink">{r.count}</span>
                    </div>
                    <ul className="mt-7 space-y-3">
                      {r.items.map((it) => (
                        <li key={it} className="flex gap-3 text-body">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint text-emerald">
                            <Check className="h-3 w-3" aria-hidden="true" />
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {project.quotes ? (
        <Section tone="white" tight>
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              {project.quotes.map((q, i) => (
                <Reveal key={q.text} delay={i * 0.1}>
                  <figure className="h-full rounded-4xl bg-mint-soft p-8 ring-1 ring-forest/5 sm:p-10">
                    <Quote className="h-7 w-7 text-coral" aria-hidden="true" />
                    <blockquote className="mt-4 font-serif text-[1.65rem] italic leading-snug text-ink">{q.text}</blockquote>
                    <figcaption className="mt-5 text-sm font-medium text-coral-deep">{q.context}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {project.appScreens ? (
        <Section tone="ivory">
          <Container>
            <SectionHeading eyebrow="The farmer app" title={["Every screen I", { accent: "tested" }]} intro="All 21 screens of the farmer app, grouped by what the farmer is doing. Pick a journey, then tap any screen to see it full size." />
            <div className="mt-14">
              <AppScreensStrip shots={project.appScreens} />
            </div>
          </Container>
        </Section>
      ) : null}

      {project.adminScreens ? (
        <Section tone="white">
          <Container>
            <SectionHeading eyebrow="The back office" title={["Where the orders", { accent: "land" }]} intro="The admin side of the platform: live statistics, customer orders, delivery tracking, refunds and product management." />
            <div className="mt-14">
              <ScreenshotGrid shots={project.adminScreens} />
            </div>
          </Container>
        </Section>
      ) : null}

      {project.sites ? (
        <Section tone="peach">
          <Container>
            <SectionHeading eyebrow="On site" title={["The builds I", { accent: "managed" }]} />
            <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
              {project.sites.map((s) => (
                <StaggerItem key={s.name}>
                  <div className="h-full rounded-3xl bg-white p-7 shadow-card ring-1 ring-forest/5">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-emerald-glow">
                      <Building2 className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-ink">{s.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-coral-deep">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {s.place}
                    </p>
                    <p className="mt-3 text-body">{s.detail}</p>
                    <p className="mt-4 text-sm font-semibold text-emerald">{s.company}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : null}

      <Section tone="mint" decor={["tr"]}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading eyebrow="The result" title={["What", { accent: "changed" }]} align="left" size="md" />
              <ul className="mt-8 space-y-4">
                {project.outcomes.map((o) => (
                  <Reveal as="li" key={o} className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-forest/5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald text-white">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-medium text-ink">{o}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Methods and tools" title={["What I", { accent: "used" }]} align="left" size="md" />
              <Reveal className="mt-8 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span key={t} className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-forest ring-1 ring-forest/10">{t}</span>
                ))}
              </Reveal>
              {project.links ? (
                <Reveal className="mt-10 flex flex-wrap gap-3">
                  {project.links.map((l) => (
                    <Button key={l.href} href={l.href} variant="emerald" external>
                      {l.label}
                    </Button>
                  ))}
                </Reveal>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" tight>
        <Container>
          <Link href={`/projects/${next.slug}`} className="group relative block overflow-hidden rounded-4xl bg-forest p-8 sm:p-12">
            <ProjectCover kind={next.cover} className="absolute inset-y-0 right-0 hidden w-[45%] opacity-90 transition-transform duration-700 ease-brand group-hover:scale-105 md:block" />
            <div className="absolute inset-y-0 right-0 hidden w-[45%] bg-[linear-gradient(90deg,#0B3D2E,transparent_45%)] md:block" aria-hidden="true" />
            <div className="relative max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-glow">Next project</p>
              <p className="mt-3 text-display-sm font-bold text-ivory">{next.title}</p>
              <p className="mt-3 text-mint/80">{next.kicker}</p>
              <span className="mt-8 inline-flex items-center gap-3 font-semibold text-ivory">
                Read the case study
                <span className="grid h-10 w-10 place-items-center rounded-full bg-coral text-forest-ink">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-brand group-hover:rotate-45" aria-hidden="true" />
                </span>
              </span>
            </div>
          </Link>
          <div className="mt-8 text-center">
            <Button href="/projects" variant="outline">All projects</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
