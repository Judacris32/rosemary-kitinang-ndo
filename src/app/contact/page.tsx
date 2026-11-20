import type { Metadata } from "next";
import { ArrowUpRight, Check, Clock, Linkedin, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { LocalTime } from "@/components/ui/LocalTime";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Rosemary Kitinang Ndo, Digital Transformation Project Manager in Sunderland, UK.",
  alternates: { canonical: "/contact" },
};

const helpful = [
  "What you are trying to achieve, in a sentence or two",
  "Where the project is now: an idea, in progress or stuck",
  "Who is involved: teams, vendors, decision makers",
  "Any deadline or budget you are working towards",
];

const fit = [
  "Digital transformation programmes",
  "System implementation and rollout",
  "User acceptance testing",
  "Data and records migration",
  "Project governance and RAID setup",
  "PMO standards and reporting",
  "Healthcare digital projects",
  "Getting a stalled project moving",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title={["Let's", { accent: "talk" }]}
        intro="Have a project, a role or a question? Email is the quickest way to reach me."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Magnetic>
            <Button href={`mailto:${site.email}`} variant="coral">Email me</Button>
          </Magnetic>
          <CopyEmail dark outline />
        </div>
      </PageHero>

      <Section tone="white" decor={["tr", "bl"]}>
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <span className="eyebrow text-emerald">Write to me</span>
            </Reveal>
            <Reveal delay={0.08}>
              <a
                href={`mailto:${site.email}`}
                className="group mt-8 inline-flex flex-wrap items-center justify-center gap-4 break-all text-[clamp(1.9rem,6.2vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-ink"
              >
                <span className="bg-[linear-gradient(#FF6B57,#FF6B57)] bg-[length:0%_6px] bg-left-bottom bg-no-repeat pb-2 transition-[background-size] duration-700 ease-brand group-hover:bg-[length:100%_6px]">
                  {site.email}
                </span>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-coral text-forest-ink transition-transform duration-500 ease-brand group-hover:rotate-45 sm:h-16 sm:w-16">
                  <ArrowUpRight className="h-7 w-7" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.16} className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${site.email}`} variant="emerald" icon={<Mail className="h-4 w-4" aria-hidden="true" />}>Open in your email app</Button>
              <CopyEmail />
            </Reveal>
          </div>

          <Stagger className="mx-auto mt-20 grid max-w-5xl gap-5 md:grid-cols-3">
            <StaggerItem>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-3xl bg-mint p-7 transition-transform duration-500 ease-brand hover:-translate-y-1.5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-ivory"><Linkedin className="h-5 w-5" aria-hidden="true" /></span>
                <h2 className="mt-6 text-xl font-bold text-ink">LinkedIn</h2>
                <p className="mt-1 text-body">Connect or send a message</p>
                <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-forest">
                  linkedin.com/in/kitinang-ndo <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                </span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <div className="flex h-full flex-col rounded-3xl bg-peach p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-coral text-forest-ink"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                <h2 className="mt-6 text-xl font-bold text-ink">Based in</h2>
                <p className="mt-1 text-body">{site.location}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex h-full flex-col rounded-3xl bg-forest p-7 text-mint/85">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-glow"><Clock className="h-5 w-5" aria-hidden="true" /></span>
                <h2 className="mt-6 text-xl font-bold text-ivory">My local time</h2>
                <LocalTime className="mt-1 text-lg font-semibold text-ivory" />
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </Section>

      <Section tone="ivory" decor={["tr"]}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Before you write" title={["What helps in a", { accent: "first message" }]} align="left" size="md" />
              <ul className="mt-8 space-y-3">
                {helpful.map((h) => (
                  <Reveal as="li" key={h} className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-forest/5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald text-white"><Check className="h-4 w-4" aria-hidden="true" /></span>
                    <span className="font-medium text-ink">{h}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Good fit" title={["Work I can", { accent: "help with" }]} align="left" size="md" />
              <Reveal className="mt-8 flex flex-wrap gap-2">
                {fit.map((f) => (
                  <span key={f} className="rounded-full bg-mint px-4 py-2.5 text-sm font-semibold text-forest">{f}</span>
                ))}
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
