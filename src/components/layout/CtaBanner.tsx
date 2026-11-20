"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { portraits } from "@/content/images";
import { site } from "@/content/site";

/** Contained banner before the footer, in the hero's style. Hidden on the Contact page. */
export function CtaBanner() {
  const path = usePathname();
  if (path === "/contact") return null;
  return (
    <section className="bg-ivory pb-20 pt-6 md:pb-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-4xl bg-forest md:rounded-5xl">
          <svg className="absolute inset-y-0 right-0 -z-10 h-full w-full md:w-[62%]" viewBox="0 0 600 500" preserveAspectRatio="none" aria-hidden="true">
            <path d="M600 0H250C190 110 170 260 210 380C230 440 260 480 300 500H600Z" fill="#CDEBDD" fillOpacity="0.14" />
            <path d="M600 0H320C270 110 256 250 290 370C306 430 336 474 370 500H600Z" fill="#126B56" />
            <path d="M600 330C540 310 480 330 446 400C430 434 424 470 424 500H600Z" fill="#FF6B57" fillOpacity="0.9" />
            <path d="M210 60C320 10 470 20 600 70" fill="none" stroke="#FF6B57" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="grid items-end md:grid-cols-[1.15fr_0.85fr]">
            <div className="px-7 py-14 text-center sm:px-12 md:py-20 md:text-left lg:px-16">
              <Reveal>
                <span className="eyebrow text-emerald-glow">Let&apos;s build together</span>
              </Reveal>
              <h2 className="mt-6 text-display-lg font-bold text-ivory">
                <SplitWords parts={["Have a project that needs a", { accent: "steady hand?" }]} accentClass="accent-glow" />
              </h2>
              <Reveal delay={0.15}>
                <p className="mx-auto mt-6 max-w-lg text-lg text-mint/85 md:mx-0">
                  Whether it is a system rollout, a stalled programme or a platform that needs proper testing, I would love to hear about it.
                </p>
              </Reveal>
              <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <Magnetic>
                  <Button href={`mailto:${site.email}`} variant="coral">
                    Start a conversation
                  </Button>
                </Magnetic>
                <CopyEmail dark />
              </Reveal>
            </div>
            <Reveal className="relative mx-auto h-[340px] w-full max-w-[330px] md:h-[440px] md:max-w-none" y={50}>
              <Image
                src={portraits.smilingCutout}
                alt="Rosemary Kitinang Ndo smiling in glasses and a white shirt"
                fill
                sizes="(min-width: 768px) 34vw, 80vw"
                className="object-contain object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
