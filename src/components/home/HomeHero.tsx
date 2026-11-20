"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Award } from "lucide-react";
import { portraits } from "@/content/images";
import { awards } from "@/content/awards";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { SplitWords } from "@/components/motion/SplitWords";
import { EASE } from "@/lib/motion";

function AwardCard({ a, delay }: { a: (typeof awards)[number]; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className="flex items-center gap-4 rounded-3xl border border-white/15 bg-forest/85 p-4 pr-6 shadow-island backdrop-blur-xl"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-coral text-forest-ink">
        <Award className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="h-10 w-px bg-white/25" aria-hidden="true" />
      <span>
        <span className="block text-[0.95rem] font-bold leading-snug text-ivory">{a.title}</span>
        <span className="mt-0.5 block text-xs text-mint/80">
          {a.body.replace(" (NiTA)", "")} · {a.year}
        </span>
      </span>
    </motion.div>
  );
}

/** Light split hero: copy on the left, Rosemary on an organic forest shape on the right. */
export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const shapeY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ivory lg:h-[100svh] lg:min-h-[760px]">
      {/* Peach wash behind the copy */}
      <svg className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[46%] w-[70%] lg:w-[48%]" viewBox="0 0 600 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 300V120C120 190 300 250 600 300Z" fill="#FFE7DE" />
        <path d="M0 300V210C140 250 300 280 420 300Z" fill="#FFB3A6" fillOpacity="0.45" />
      </svg>

      {/* Forest shape, mint edge and coral arc (desktop) */}
      <motion.div style={{ y: shapeY }} className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] lg:block" aria-hidden="true">
        <motion.svg
          viewBox="0 0 800 1000"
          preserveAspectRatio="none"
          className="h-full w-full"
          initial={reduce ? false : { clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <path d="M800 0H330C236 120 168 300 172 520C176 720 150 880 70 1000H800Z" fill="#CDEBDD" />
          <path d="M800 0H392C300 120 236 300 240 520C244 720 222 880 150 1000H800Z" fill="#0B3D2E" />
          <path d="M800 690C720 650 640 650 560 700C500 740 470 860 460 1000H800Z" fill="#126B56" fillOpacity="0.55" />
        </motion.svg>
        <motion.svg
          viewBox="0 0 800 1000"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <path d="M470 330C560 210 680 150 800 140" fill="none" stroke="#FF6B57" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d="M560 1000C620 900 700 850 800 830" fill="none" stroke="#FF6B57" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </motion.svg>
      </motion.div>

      <Container wide className="relative flex flex-col pt-32 lg:h-full lg:flex-row lg:items-center lg:pt-24">
        {/* Copy */}
        <div className="relative z-10 max-w-[36rem] pb-10 lg:max-w-[34rem] lg:pb-0 xl:max-w-[38rem]">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="eyebrow text-emerald"
          >
            <span className="sm:hidden">Digital Project Manager</span>
            <span className="hidden sm:inline">Digital Transformation Project Manager</span>
          </motion.span>
          <h1 className="mt-6 text-[clamp(2.6rem,5.2vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-ink">
            <SplitWords
              parts={["Turning complex challenges into measurable", { accent: "results" }]}
              accentClass="font-serif font-normal italic text-coral-text tracking-[-0.01em] pr-1"
              immediate
              delay={0.3}
            />
          </h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
            className="mt-7 max-w-[32rem] text-lg leading-relaxed text-body md:text-xl"
          >
            I lead digital projects across healthcare, agri-tech and consulting, bringing people, processes and technology together so ideas create real impact.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Magnetic>
              <Button href="/projects" variant="coral">View projects</Button>
            </Magnetic>
            <Button href="/contact" variant="outline">Let&apos;s talk</Button>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="relative mt-4 h-[460px] sm:h-[560px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[60%]">
          {/* Mobile shape */}
          <svg className="absolute inset-x-[-1.25rem] bottom-0 top-[18%] -z-10 h-[82%] w-[calc(100%+2.5rem)] lg:hidden" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 400V120C90 30 260 0 400 40V400Z" fill="#CDEBDD" />
            <path d="M0 400V150C100 70 260 50 400 80V400Z" fill="#0B3D2E" />
            <path d="M120 60C220 20 320 30 400 70" fill="none" stroke="#FF6B57" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2 lg:left-[42%] lg:top-auto lg:h-[80%]">
          <motion.div
            style={{ y: photoY }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, ease: EASE, delay: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={portraits.armsCrossedCutout}
              alt="Rosemary Kitinang Ndo standing with arms crossed, wearing glasses and a white shirt"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(6,36,25,0.35)]"
            />
          </motion.div>
          </div>

          <div className="absolute right-0 top-[44%] z-10 hidden w-[19rem] space-y-3 lg:right-[1%] lg:block xl:w-[21rem]">
            {awards.map((a, i) => (
              <AwardCard key={a.slug} a={a} delay={1.1 + i * 0.15} />
            ))}
          </div>
        </div>
      </Container>

      {/* Mobile awards */}
      <div className="bg-forest px-5 pb-10 sm:px-8 lg:hidden">
        <div className="mx-auto max-w-xl space-y-3">
          {awards.map((a, i) => (
            <AwardCard key={a.slug} a={a} delay={0.2 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
