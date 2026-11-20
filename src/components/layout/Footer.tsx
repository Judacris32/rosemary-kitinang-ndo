import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { nav, site } from "@/content/site";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { LogoLockup } from "@/components/ui/Logo";
import { Decor } from "@/components/ui/Decor";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden bg-forest text-mint/80">
      <Decor corners={["tr"]} onDark className="-z-10" />
      <Container className="relative z-10 pb-10 pt-20 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <LogoLockup dark />
            <p className="mt-7 max-w-sm leading-relaxed">
              Digital Transformation Project Manager in Sunderland, UK. PRINCE2 Practitioner, MSc Project Management, and twice recognised for digital project delivery.
            </p>
            <a href={`mailto:${site.email}`} className="group mt-8 inline-flex items-center gap-3 text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold tracking-[-0.02em] text-ivory">
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-brand group-hover:bg-[length:100%_2px]">
                {site.email}
              </span>
              <ArrowUpRight className="h-6 w-6 text-coral transition-transform duration-500 ease-brand group-hover:rotate-45" aria-hidden="true" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-glow">Explore</h3>
              <ul className="mt-5 space-y-3">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="transition-colors hover:text-ivory">{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-glow">Projects</h3>
              <ul className="mt-5 space-y-3">
                {projects.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/projects/${p.slug}`} className="transition-colors hover:text-ivory">{p.title.split(" for ")[0]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-glow">Get in touch</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-ivory">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><Mail className="h-4 w-4" aria-hidden="true" /></span>
                  Email
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-ivory">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><Linkedin className="h-4 w-4" aria-hidden="true" /></span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-mint/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Designed and built by @Judacris_Jude</p>
        </div>
      </Container>
    </footer>
  );
}
