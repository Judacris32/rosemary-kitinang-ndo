import type { Metadata } from "next";
import { Award, BadgeCheck, GraduationCap, Quote } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Timeline } from "@/components/about/Timeline";
import { SectorsTools } from "@/components/home/SectorsTools";
import { portraits } from "@/content/images";
import { certifications, education, experience } from "@/content/experience";
import { values } from "@/content/site";
import { IconCard } from "@/components/ui/IconCard";
import { valueIcons } from "@/lib/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Rosemary Kitinang Ndo's story, values, career and qualifications: MSc Project Management, PRINCE2 Practitioner and 7+ years of project delivery.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About me"
        title={["The person behind", { accent: "the plan" }]}
        light={{
          portrait: portraits.chinSeatedCutout,
          portraitAlt: "Rosemary Kitinang Ndo seated, chin resting on her hand",
          quote: "Project manager, problem solver and firm believer that the best technology is the kind people actually want to use.",
        }}
      />

      <Section tone="white" decor={["tr"]}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <ImageReveal src={portraits.handsClasped} alt="Rosemary Kitinang Ndo seated at a wooden table with her hands clasped" className="aspect-[4/5] rounded-4xl" sizes="(min-width: 1024px) 38vw, 90vw" />
            </div>
            <div>
              <SectionHeading eyebrow="My story" title={["Why I do", { accent: "this work" }]} align="left" size="md" />
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-body">
                <Reveal>
                  <p>
                    I have seen how the right systems, thoughtful planning and coordinated delivery can turn complicated processes into simpler, better experiences. That is what keeps me in project management and digital transformation.
                  </p>
                </Reveal>
                <Reveal>
                  <p>
                    Over more than seven years I have delivered technology initiatives, operational improvements and strategic projects across healthcare, consulting, corporate operations and construction. My work covers planning, implementation, workflow automation, data migration, risk management, stakeholder engagement, change management and programme governance.
                  </p>
                </Reveal>
                <Reveal>
                  <figure className="my-10 rounded-4xl bg-peach p-8 sm:p-10">
                    <Quote className="h-8 w-8 text-coral" aria-hidden="true" />
                    <blockquote className="mt-4 font-serif text-[clamp(1.6rem,2.6vw,2.15rem)] italic leading-snug text-ink">
                      Complex projects rarely unfold exactly as planned. I meet that with persistence, clear reasoning and a commitment to finding practical solutions.
                    </blockquote>
                    <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-coral-deep">On tenacity</figcaption>
                  </figure>
                </Reveal>
                <Reveal>
                  <p>
                    From migrating more than 25,000 records with zero data loss to cutting delays and speeding up implementation, I focus on keeping momentum without compromising quality, compliance or what stakeholders expect.
                  </p>
                </Reveal>
                <Reveal>
                  <p>
                    I also believe meaningful transformation is a team achievement. I have worked alongside technical specialists, healthcare professionals, administrators, vendors and leadership teams, translating what an organisation needs into plans people can act on, whether that means running requirements workshops, coordinating user acceptance testing or managing a handover.
                  </p>
                </Reveal>
                <Reveal>
                  <p>
                    For me, great project management means bringing people, processes and technology together to make real progress possible.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mint" decor={["bl"]}>
        <Container>
          <SectionHeading eyebrow="What I stand for" title={["The values I", { accent: "bring" }]} />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <IconCard icon={valueIcons[v.icon]} title={v.title} text={v.text} className="h-full" stacked />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="ivory" decor={["tr"]}>
        <Container>
          <SectionHeading
            eyebrow="Career"
            title={["Seven years,", { accent: "eight roles" }]}
            intro="From public service in Nigeria to digital transformation in the UK. Every role added something to how I run projects today."
          />
          <div className="mt-16">
            <Timeline roles={experience} />
          </div>
        </Container>
      </Section>

      <Section tone="peach" decor={["bl"]}>
        <Container>
          <SectionHeading eyebrow="Learning" title={["Education and", { accent: "certifications" }]} />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 shadow-card ring-1 ring-forest/5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-emerald">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-sm font-semibold text-emerald">{e.year}</p>
                  <h3 className="mt-1 text-xl font-bold text-ink">{e.degree}</h3>
                  <p className="mt-1 text-body">{e.school}</p>
                  <p className="text-sm text-body/80">{e.place}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <div className="h-full rounded-3xl bg-forest p-7 text-mint/85 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-coral text-forest-ink">
                  <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-6 text-sm font-semibold text-emerald-glow">{certifications.headline.year}</p>
                <h3 className="mt-1 text-xl font-bold text-ivory">{certifications.headline.name}</h3>
                <p className="mt-2 leading-relaxed">The UK&apos;s most widely used project management method, from first principles to practical application.</p>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-5">
            <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-forest/5 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-peach text-coral-deep">
                    <Award className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">NHS Elect learning programme</h3>
                    <p className="text-sm text-body">Nine courses completed in {certifications.nhsElect.year}</p>
                  </div>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {certifications.nhsElect.courses.map((c) => (
                  <li key={c} className="rounded-full bg-mint-soft px-4 py-2 text-sm font-semibold text-forest ring-1 ring-forest/10">{c}</li>
                ))}
                {certifications.other.map((c) => (
                  <li key={c.name} className="rounded-full bg-ivory px-4 py-2 text-sm font-semibold text-body ring-1 ring-line">
                    {c.name} · {c.year}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="mt-12 text-center">
            <Button href="/how-i-work" variant="emerald">See how I put it to work</Button>
          </Reveal>
        </Container>
      </Section>

      <SectorsTools />
    </>
  );
}
