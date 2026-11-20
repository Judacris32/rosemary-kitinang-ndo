import Image from "next/image";
import { Quote, Target, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCard } from "@/components/ui/IconCard";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { portraits } from "@/content/images";

const drivers = [
  {
    icon: Target,
    title: "The problems it solves",
    text: "I start with the real problem: the delay, the paperwork, the patient who waits too long. The technology comes second.",
  },
  {
    icon: Users,
    title: "The people it empowers",
    text: "A system only works if people use it, so training, testing and clear handovers sit at the heart of how I deliver.",
  },
  {
    icon: TrendingUp,
    title: "The difference it makes",
    text: "Success shows up in everyday work: fewer manual steps, faster service and results people can actually feel.",
  },
];

export function Statement() {
  return (
    <Section tone="white" id="statement" decor={["tr"]}>
      <Container>
        <SectionHeading eyebrow="What drives my work" title={["It's never just about the", { accent: "technology" }]} />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <Reveal>
            <figure className="relative isolate flex h-full flex-col overflow-hidden rounded-5xl bg-forest p-8 sm:p-12">
              <svg className="absolute -bottom-10 -right-10 -z-10 h-64 w-64" viewBox="0 0 200 200" aria-hidden="true">
                <path d="M200 40C120 40 60 100 50 200H200Z" fill="#126B56" fillOpacity="0.55" />
                <path d="M200 110C160 110 125 140 118 200H200Z" fill="#FF6B57" fillOpacity="0.85" />
              </svg>
              <Quote className="h-12 w-12 text-coral" aria-hidden="true" />
              <blockquote className="mt-6 font-serif text-[clamp(1.75rem,3vw,2.6rem)] italic leading-[1.2] text-ivory">
                A successful digital transformation isn&apos;t defined by the technology it introduces. It&apos;s defined by the problems it solves, the people it empowers and the difference it makes to everyday work.
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 pt-10">
                <span className="relative h-14 w-14 overflow-hidden rounded-full bg-mint ring-2 ring-coral/70">
                  <Image src={portraits.smilingCutout} alt="" fill sizes="56px" className="object-cover object-[50%_8%] scale-[1.9] origin-top" />
                </span>
                <span>
                  <span className="block font-bold text-ivory">Rosemary Kitinang Ndo</span>
                  <span className="block text-sm text-emerald-glow">Digital Transformation Project Manager</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <Stagger className="flex flex-col gap-4">
            {drivers.map((d) => (
              <StaggerItem key={d.title} className="flex-1">
                <IconCard icon={d.icon} title={d.title} text={d.text} className="h-full" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
