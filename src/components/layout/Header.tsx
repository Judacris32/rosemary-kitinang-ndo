"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Linkedin, Mail, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { LogoLockup } from "@/components/ui/Logo";
import { LocalTime } from "@/components/ui/LocalTime";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

const isActive = (path: string, href: string) => (href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`));

export function Header() {
  const path = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.3 });
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 260 && y > prev && !open);
  });

  useEffect(() => setOpen(false), [path]);
  // The bar always uses its light style; it gets a stronger shadow once scrolled.
  const light = true;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(90deg,#FF6B57,#FFB3A6_45%,#9FE3C4)]"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <motion.header
        className="fixed inset-x-0 top-0 z-50 pt-4 md:pt-5"
        initial={false}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <Container wide>
          <div
            className={cn(
              "flex items-center justify-between gap-4 rounded-full py-2 pl-3 pr-2 transition-all duration-500 ease-brand sm:pl-4",
              light
                ? cn("border border-forest/10 bg-ivory/95 backdrop-blur-xl", solid ? "shadow-island" : "shadow-[0_8px_30px_-14px_rgba(6,36,25,0.35)]")
                : "border border-white/15 bg-forest-deep/25 backdrop-blur-md",
            )}
          >
            <Link href="/" aria-label={`${site.name}, home`} className="rounded-full">
              <LogoLockup dark={!light} compact />
            </Link>

            <nav aria-label="Main" className="hidden xl:block">
              <ul className="flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
                {nav.map((item) => {
                  const active = isActive(path, item.href);
                  return (
                    <li key={item.href} className="relative">
                      <Link
                        href={item.href}
                        onMouseEnter={() => setHovered(item.href)}
                        onFocus={() => setHovered(item.href)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative z-10 flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.9rem] font-semibold transition-colors duration-300",
                          light ? "text-forest" : "text-ivory",
                        )}
                      >
                        {active ? <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" /> : null}
                        {item.label}
                      </Link>
                      {hovered === item.href ? (
                        <motion.span
                          layoutId="nav-pill"
                          className={cn("absolute inset-0 rounded-full", light ? "bg-mint" : "bg-white/15")}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          aria-hidden="true"
                        />
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="group hidden items-center gap-2.5 rounded-full bg-coral py-2 pl-5 pr-2 text-sm font-semibold text-forest-ink transition-colors duration-[450ms] ease-brand hover:bg-[#ff8572] sm:inline-flex"
              >
                Let&apos;s talk
                <span className="grid h-8 w-8 place-items-center rounded-full bg-forest-ink/10 transition-colors duration-[450ms] group-hover:bg-forest group-hover:text-coral-soft">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-[450ms] ease-brand group-hover:rotate-45" aria-hidden="true" />
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className={cn(
                  "flex items-center gap-2.5 rounded-full py-2 pl-4 pr-2 text-sm font-semibold transition-colors xl:hidden",
                  light ? "bg-forest text-ivory" : "bg-white/15 text-ivory",
                )}
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                Menu
                <span className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded-full bg-white/15" aria-hidden="true">
                  <span className="h-[1.5px] w-3.5 bg-current" />
                  <span className="h-[1.5px] w-3.5 bg-current" />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-forest text-ivory"
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <Container wide className="flex items-center justify-between pt-5">
              <LogoLockup dark compact />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-full bg-white/10 py-2 pl-4 pr-2 text-sm font-semibold"
              >
                Close
                <span className="grid h-8 w-8 place-items-center rounded-full bg-coral text-forest-ink">
                  <X className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </Container>
            <Container wide className="flex flex-1 flex-col justify-center py-10">
              <nav aria-label="Mobile">
                <ul className="space-y-1">
                  {nav.map((item, i) => {
                    const active = isActive(path, item.href);
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.25 + i * 0.06 }}
                      >
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className="group flex items-baseline gap-4 py-1.5 text-[clamp(2.4rem,9vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
                        >
                          <span className={cn("transition-colors duration-300 group-hover:text-coral-soft", active && "accent-glow pr-1")}>{item.label}</span>
                          {active ? <span className="h-3 w-3 rounded-full bg-coral" aria-hidden="true" /> : null}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </Container>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <Container wide className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-mint/80 sm:flex-row sm:items-center sm:justify-between">
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-base font-semibold text-ivory hover:text-coral-soft">
                  <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
                </a>
                <div className="flex items-center gap-5">
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ivory">
                    <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
                  </a>
                  <LocalTime />
                </div>
              </Container>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
