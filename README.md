# Rosemary Kitinang Ndo · Digital Transformation Project Manager

Portfolio website for Rosemary Kitinang Ndo, designed and built by JayDev Studio.

## Stack

- Next.js 14 (App Router) + TypeScript, fully static (21 pre-rendered pages)
- Tailwind CSS with design tokens in `tailwind.config.ts`
- Framer Motion for all animation
- `next/image` with blur placeholders, AVIF/WebP output
- Self-hosted fonts via Fontsource: Plus Jakarta Sans (400–800) and Instrument Serif (italic accents)
- Icons: lucide-react
- No backend. Contact is email-first (big email, copy button, mailto). No phone number, no CV download.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Deploy: push to GitHub (Judacris32) and import into Vercel. Add the environment variable below once the domain is known.

| Variable | Example | Used for |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://rosemarykitinangndo.com` | Canonical URLs, sitemap, robots, Open Graph, JSON-LD. Falls back to `https://rosemary-kitinang-ndo.vercel.app` |

## Pages

| Route | What's on it |
|---|---|
| `/` | Full-screen portrait hero, scroll-lit statement, count-up stats, Meet Rosemary, featured projects, process teaser, awards, sectors and tools marquees |
| `/about` | Story (from her LinkedIn summary), values, self-drawing career timeline (8 roles), education, PRINCE2, NHS Elect courses |
| `/projects` | Filterable case-study grid plus combined numbers |
| `/projects/[slug]` | 6 case studies: `doc-express`, `interpreter-allocation`, `records-migration`, `delivery-governance`, `pmo-standardisation`, `healthcare-and-public-builds` |
| `/how-i-work` | PRINCE2 + agile, 5-stage process with status chips, interactive PDSA cycle, RAID explainer, reporting legend, toolkit, glossary |
| `/recognition` | Both awards with trophy photos and timelines, press coverage, paper trail of letters and certificates (all with a lightbox) |
| `/contact` | Email-first contact, LinkedIn, Sunderland local time, what to include, good-fit work |
| 404 | "This task got lost in the backlog" |

The CTA banner appears before the footer on every page except Contact.

## Structure

```
src/
  app/                 routes, layout, page transition (template.tsx), sitemap, robots,
                       favicon.ico, icon.svg, apple-icon.png, opengraph-image.jpg
  components/
    layout/            Header (island navbar + mobile menu), Footer, CtaBanner
    ui/                Container, Section, Button, SectionHeading, PageHero, Logo,
                       StatusChip, CopyEmail, LocalTime, Lightbox, Metrics, Backgrounds
    motion/            Reveal, Stagger, SplitWords, ScrollLit, CountUp, ImageReveal,
                       Magnetic, Parallax, Marquee
    home/ about/ projects/ process/ recognition/ covers/
  content/             ALL copy and data: site.ts, projects.ts, experience.ts,
                       awards.ts, process.ts, images.ts
  assets/images/       optimised photos and screenshots (see below)
public/brand/          logo SVGs (icon forest/ivory, wordmark forest/ivory), icon-512.png
```

To change any wording, edit the files in `src/content/`. Components never need touching for copy changes.

## Brand

| Token | Hex | Use |
|---|---|---|
| Forest | `#0B3D2E` | Headings, hero overlays, footer, "Delivered" chips |
| Emerald | `#126B56` | Primary buttons, labels, links |
| Coral | `#FF6B57` | Highlights, "Let's talk", accent bars, dots (fill only, never small text on light) |
| Coral deep | `#B8432F` | Small coral text on light backgrounds |
| Mint | `#D9F0E6` | Section background |
| Peach | `#FFE7DE` | Section background |
| Ivory | `#FFFBF6` | Page background |
| Body | `#4B5E56` | Paragraph text |

Text on coral uses `#062419` (5.9:1). Every pairing was contrast-checked.

**Logo:** the "R" with a coral milestone dot (favicon, app icon), plus the full-name lockup in the navbar and footer. The R is drawn from Plus Jakarta Sans ExtraBold outlines, so it doesn't depend on a font loading.

## Images

Every image is Rosemary's own material. There is no stock photography.

- **Portraits:** 5 studio photos. The heroes use wide versions with the plain studio wall extended at the sides (and above, for About, Contact and Recognition) so the headline sits clear of her face.
- **Awards:** NiTA trophy, Titans of Tech trophy and certificate.
- **Press:** Blueprint and Independent article screenshots, NiTA directory and Titans winners list, nomination and winning letters, NiTA certificate.
- **DOC Express:** all 21 farmer-app screens and 7 back-office screenshots, used as supplied (including Rosemary's own red strike-throughs over customer phone numbers and emails).

## Before launch

- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel once the domain is chosen
- [ ] Healthcare client name: currently "Healthcare client, delivered with Klipspringer" on two case studies. Update `src/content/projects.ts` if Rosemary approves naming them
- [ ] Rosemary's LinkedIn shows the MSc as 2025. The site uses 2024 (as confirmed). She may want to update LinkedIn to match
- [ ] NHS invoice figure uses £5M+ a month (from the CV). LinkedIn shows ₦5M. Worth correcting LinkedIn
- [ ] Open the DOC Express Google Play link (`com.itweaktech.docexpress`) and the NiTA winners directory once to confirm both are live
- [ ] Optional: photos of Rosemary working or presenting, to add to About or a case study
