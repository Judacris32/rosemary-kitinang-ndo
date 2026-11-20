import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { nav } from "@/content/site";
import { SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...nav.map((n) => ({ url: `${SITE_URL}${n.href === "/" ? "" : n.href}`, lastModified: now, priority: n.href === "/" ? 1 : 0.8 })),
    ...projects.map((p) => ({ url: `${SITE_URL}/projects/${p.slug}`, lastModified: now, priority: 0.7 })),
  ];
}
