export const site = {
  name: "Rosemary Kitinang Ndo",
  firstName: "Rosemary",
  role: "Digital Transformation Project Manager",
  shortRole: "Digital Project Manager",
  tagline: "Turning complex challenges into measurable results",
  description:
    "Rosemary Kitinang Ndo is an award-winning Digital Transformation Project Manager in Sunderland, UK, with 7+ years delivering technology, healthcare and infrastructure projects. PRINCE2 Practitioner.",
  email: "kitinangndo@gmail.com",
  linkedin: "https://www.linkedin.com/in/kitinang-ndo/",
  location: "Sunderland, United Kingdom",
  city: "Sunderland",
  timeZone: "Europe/London",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "How I work", href: "/how-i-work" },
  { label: "Recognition", href: "/recognition" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 7, suffix: "+", label: "Years delivering projects", note: "Since 2019, across the UK and Nigeria" },
  { value: 15, suffix: "+", label: "Projects delivered end to end", note: "At Klipspringer Consulting" },
  { value: 95, suffix: "%", label: "Delivered on time", note: "Structured planning and cross-team coordination" },
  { value: 25, suffix: "k+", label: "Records migrated", note: "Paper to digital, with zero data loss" },
];

export const sectors = [
  "Healthcare",
  "Digital transformation",
  "Agri-tech",
  "Consulting",
  "Public sector",
  "Construction and infrastructure",
  "Corporate operations",
];

/** Tools with their official logos (in /public/logos). Tools without a public logo use an icon in their brand colour. */
export type Tool = { name: string; logo?: string; icon?: "gantt" | "hospital" | "languages" | "monitor"; color?: string };

export const tools: Tool[] = [
  { name: "Jira", logo: "/logos/jira.svg" },
  { name: "Confluence", logo: "/logos/confluence.svg" },
  { name: "Microsoft Project", icon: "gantt", color: "#31752F" },
  { name: "Power BI", logo: "/logos/power-bi.svg" },
  { name: "SharePoint", logo: "/logos/sharepoint.svg" },
  { name: "Power Automate", logo: "/logos/power-automate.svg" },
  { name: "SQL", logo: "/logos/sql.svg" },
  { name: "Visio", logo: "/logos/visio.svg" },
  { name: "Microsoft 365", logo: "/logos/microsoft-365.svg" },
  { name: "PowerPoint", logo: "/logos/powerpoint.svg" },
  { name: "Meditech", icon: "hospital", color: "#00857C" },
  { name: "Soliton", icon: "languages", color: "#126B56" },
  { name: "ICE Desktop", icon: "monitor", color: "#0B5CAD" },
];

export const values: { icon: "target" | "users" | "layers" | "graduation"; title: string; text: string }[] = [
  {
    icon: "target",
    title: "Tenacity",
    text: "Projects rarely go exactly to plan. Risks appear, requirements change and teams hit walls. I stay with the problem until there is a practical way through.",
  },
  {
    icon: "users",
    title: "People first",
    text: "Real transformation is a team achievement. I work closely with specialists, clinicians, vendors and leaders to turn what an organisation needs into a plan people can follow.",
  },
  {
    icon: "layers",
    title: "Structure with heart",
    text: "Clear governance, honest reporting and shared accountability, combined with genuine curiosity about how technology can make everyday work simpler.",
  },
  {
    icon: "graduation",
    title: "Always learning",
    text: "From an MSc in Project Management to PRINCE2 and NHS quality improvement training, I keep sharpening how I plan, measure and improve.",
  },
];
