"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChartColumn, ChevronRight, Layers, Newspaper, Quote, Rocket, Trophy, Users } from "lucide-react";
import { Container } from "./Container";
import { SplitWords, type HeadingPart } from "@/components/motion/SplitWords";
import { Parallax } from "@/components/motion/Parallax";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

const featureIcons = { rocket: Rocket, layers: Layers, chart: ChartColumn, users: Users, trophy: Trophy, newspaper: Newspaper };
export type HeroFeature = { icon: keyof typeof featureIcons; label: string };

type Props = {
  crumb: string;
  crumbs?: { label: string; href: string }[];
  eyebrow: string;
  title: HeadingPart[];
  intro?: ReactNode;
  /** Faint background layer for dark heroes (screens wall, project board, cover art). */
  background?: ReactNode;
  children?: ReactNode;
  /** Icon chips under the intro. */
  features?: HeroFeature[];
  /** Laurel branches either side of the feature chips. */
  laurels?: boolean;
  /** Accent word style on dark heroes. */
  accent?: "coral" | "glow";
  /** Light variant: cut-out portrait on organic shapes, with a quote card. */
  light?: { portrait: StaticImageData; portraitAlt: string; quote: string };
};

function Crumbs({ crumb, crumbs, light }: { crumb: string; crumbs: { label: string; href: string }[]; light?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.nav
      aria-label="Breadcrumb"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      className={cn("mb-7 flex flex-wrap items-center justify-center gap-1.5 text-[0.95rem]", light ? "text-body" : "text-mint/70")}
    >
      <Link href="/" className={cn("transition-colors", light ? "hover:text-forest" : "hover:text-white")}>Home</Link>
      {crumbs.map((c) => (
        <span key={c.href} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <Link href={c.href} className={cn("transition-colors", light ? "hover:text-forest" : "hover:text-white")}>{c.label}</Link>
        </span>
      ))}
      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
      <span className={cn("font-medium", light ? "text-ink" : "text-white")} aria-current="page">{crumb}</span>
    </motion.nav>
  );
}

function Laurel({ flip }: { flip?: boolean }) {
  const leaves = Array.from({ length: 7 });
  return (
    <svg viewBox="0 0 60 160" className={cn("h-32 w-12 text-[#8C9A55] opacity-70 md:h-40 md:w-14", flip && "-scale-x-100")} aria-hidden="true">
      <path d="M44 154C18 120 12 70 34 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {leaves.map((_, i) => {
        const t = i / (leaves.length - 1);
        const y = 140 - t * 120;
        const x = 40 - Math.sin(t * Math.PI * 0.9) * 18 - t * 6;
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <ellipse cx="-8" cy="-2" rx="9" ry="3.6" transform="rotate(-35)" fill="currentColor" />
            <ellipse cx="7" cy="-4" rx="8" ry="3.2" transform="rotate(40)" fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}

function Features({ features, laurels }: { features: HeroFeature[]; laurels?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 1 }}
      className="mt-12 flex items-center justify-center gap-4 md:gap-8"
    >
      {laurels ? <span className="hidden sm:block"><Laurel /></span> : null}
      <ul className="flex flex-wrap items-center justify-center gap-y-5">
        {features.map((f, i) => {
          const Icon = featureIcons[f.icon];
          return (
            <li key={f.label} className="flex items-center">
              {i > 0 ? <span className="mx-5 hidden h-14 w-px bg-white/15 sm:block md:mx-9" aria-hidden="true" /> : null}
              <span className="flex items-center gap-4 px-3 sm:px-0">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-mint text-forest shadow-[0_8px_30px_-8px_rgba(159,227,196,0.5)] md:h-16 md:w-16">
                  <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="max-w-[9.5rem] text-left text-base font-semibold leading-snug text-ivory md:text-lg">{f.label}</span>
              </span>
            </li>
          );
        })}
      </ul>
      {laurels ? <span className="hidden sm:block"><Laurel flip /></span> : null}
    </motion.div>
  );
}

/** Mint wave on the left, green wave with a coral line on the right. Sits on the bottom edge of dark heroes. */
function BottomWaves() {
  return (
    <svg className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[110px] w-full md:h-[180px]" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="hero-mint" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9FE3C4" />
          <stop offset="1" stopColor="#3FA57E" />
        </linearGradient>
        <linearGradient id="hero-green" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#126B56" stopOpacity="0.2" />
          <stop offset="1" stopColor="#1C8C6F" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path d="M0 30C230 60 440 130 640 200H0Z" fill="#126B56" fillOpacity="0.75" />
      <path d="M0 112C170 92 360 120 560 200H0Z" fill="url(#hero-mint)" />
      <path d="M0 112C170 92 360 120 560 200" fill="none" stroke="#DDF5EA" strokeOpacity="0.7" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <path d="M760 200C980 118 1200 70 1440 62V200Z" fill="url(#hero-green)" />
      <path d="M760 200C980 118 1200 70 1440 62" fill="none" stroke="#FF6B57" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function PageHero({ crumb, crumbs = [], eyebrow, title, intro, background, children, features, laurels, accent = "coral", light }: Props) {
  const reduce = useReducedMotion();

  if (light) {
    return (
      <section className="relative isolate overflow-hidden bg-ivory lg:h-[100svh] lg:min-h-[780px]">
        <motion.svg
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          aria-hidden="true"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <defs>
            <linearGradient id="about-mint" x1="1" y1="0" x2="0.4" y2="1">
              <stop offset="0" stopColor="#3FA57E" />
              <stop offset="0.55" stopColor="#CDEBDD" />
            </linearGradient>
          </defs>
          <path d="M160 900C720 790 1100 520 1440 190V900Z" fill="url(#about-mint)" />
          <path d="M260 900C800 830 1120 640 1440 400V900Z" fill="#0B3D2E" />
          <path d="M260 900C800 830 1120 640 1440 400" fill="none" stroke="#126B56" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M1080 900C1200 760 1310 660 1440 610" fill="none" stroke="#FF6B57" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d="M0 760C160 790 300 840 380 900H0Z" fill="#FFB3A6" fillOpacity="0.55" />
          <path d="M0 820C140 830 240 860 290 900H0Z" fill="#CDEBDD" />
        </motion.svg>

        <Container className="relative flex flex-col items-center pt-32 text-center lg:h-full lg:pt-32">
          <Crumbs crumb={crumb} crumbs={crumbs} light />
          <motion.span
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="eyebrow text-emerald"
          >
            {eyebrow}
          </motion.span>
          <h1 className="mx-auto mt-5 max-w-6xl text-[clamp(2.5rem,5.4vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-ink">
            <SplitWords parts={title} accentClass="font-serif font-normal italic text-coral-text tracking-[-0.01em] pr-1" immediate delay={0.3} />
          </h1>

          <div className="relative mt-6 h-[380px] w-full max-w-[640px] sm:h-[460px] lg:mt-4 lg:h-auto lg:flex-1">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: EASE, delay: 0.45 }}
              className="absolute inset-0"
            >
              <Image
                src={light.portrait}
                alt={light.portraitAlt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(6,36,25,0.3)]"
              />
            </motion.div>
          </div>

          <motion.figure
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
            className="relative z-10 -mt-20 mb-8 w-full max-w-3xl rounded-3xl border border-white/20 bg-forest/80 px-6 py-5 shadow-island backdrop-blur-xl sm:px-10 lg:mb-10"
          >
            <blockquote className="flex items-start justify-center gap-3 text-left text-lg font-semibold leading-snug text-ivory md:text-xl">
              <Quote className="mt-0.5 h-7 w-7 shrink-0 -scale-x-100 fill-coral text-coral" aria-hidden="true" />
              <span>{light.quote}</span>
            </blockquote>
          </motion.figure>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative isolate flex min-h-[86svh] items-center overflow-hidden bg-forest-deep pb-40 pt-36 md:min-h-[820px] md:pb-52 md:pt-40">
      {/* Soft glows */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(55%_60%_at_15%_20%,rgba(18,107,86,0.55),transparent_70%),radial-gradient(45%_45%_at_85%_70%,rgba(150,170,80,0.16),transparent_70%),radial-gradient(40%_35%_at_50%_100%,rgba(140,160,70,0.18),transparent_70%)]" aria-hidden="true" />
      {background ? (
        <Parallax className="absolute inset-0 -z-20 opacity-[0.42] blur-[1.5px] [mask-image:radial-gradient(90%_80%_at_50%_45%,black_40%,transparent_100%)]" distance={120}>
          {background}
        </Parallax>
      ) : null}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_50%_45%,rgba(7,42,32,0.7),rgba(7,42,32,0.15)_80%)]" aria-hidden="true" />
      <BottomWaves />

      <Container className="relative text-center">
        <Crumbs crumb={crumb} crumbs={crumbs} />
        <motion.span initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.25 }} className="eyebrow text-emerald-glow">
          {eyebrow}
        </motion.span>
        <h1 className="mx-auto mt-6 max-w-6xl text-[clamp(2.5rem,5.4vw,5rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-ivory">
          <SplitWords
            parts={title}
            accentClass={accent === "glow" ? "accent-glow" : "font-serif font-normal italic text-[#FF7A66] tracking-[-0.01em] pr-1"}
            immediate
            delay={0.3}
          />
        </h1>
        {intro ? (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
            className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-mint/90 md:text-[1.35rem]"
          >
            {intro}
          </motion.p>
        ) : null}
        {children ? (
          <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.85 }} className="mt-10">
            {children}
          </motion.div>
        ) : null}
        {features ? <Features features={features} laurels={laurels} /> : null}
      </Container>
    </section>
  );
}
