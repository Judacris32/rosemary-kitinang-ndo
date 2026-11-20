import type { Metadata, Viewport } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { site } from "@/content/site";
import { awards } from "@/content/awards";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${site.name} · ${site.role}`, template: `%s · ${site.name}` },
  description: site.description,
  keywords: ["Digital Project Manager", "Digital Transformation", "PRINCE2", "Project Manager Sunderland", "Rosemary Kitinang Ndo", "UAT", "Healthcare digital transformation"],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: `${site.name} · ${site.role}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: `${site.name} · ${site.role}`, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0B3D2E",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: ["Ndo Rosemary Kitinang", "Kitinang Ndo"],
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Sunderland", addressCountry: "GB" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Sunderland" },
    { "@type": "CollegeOrUniversity", name: "University of Abuja" },
  ],
  award: awards.map((a) => `${a.title}, ${a.body} ${a.year}`),
  knowsAbout: ["Digital transformation", "Project management", "PRINCE2", "User acceptance testing", "Data migration", "Risk management", "Change management"],
  sameAs: [site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}[style*="clip-path"]{clip-path:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-coral focus:px-5 focus:py-3 focus:font-semibold focus:text-forest-ink">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <CtaBanner />
        <Footer />
      </body>
    </html>
  );
}
