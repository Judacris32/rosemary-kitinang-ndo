export type Role = {
  title: string;
  company: string;
  place: string;
  period: string;
  highlights: string[];
  current?: boolean;
};

export const experience: Role[] = [
  {
    title: "Project Delivery & Implementation Lead",
    company: "Klipspringer Consulting",
    place: "United Kingdom",
    period: "Aug 2026 – Present",
    current: true,
    highlights: [
      "Set up project governance, RAID registers and escalation routes, improving risk visibility by 40%",
      "Delivered 15+ projects end to end with 95% on-time completion",
      "Ran stakeholder workshops, requirements analysis and user acceptance testing, reaching 98% implementation readiness",
      "Raised user adoption by 35% through targeted training and clean implementation handovers",
    ],
  },
  {
    title: "Digital Transformation Project Manager",
    company: "Klipspringer Consulting",
    place: "United Kingdom",
    period: "Dec 2025 – Jul 2026",
    highlights: [
      "Led a translation-matching platform that cut waiting times for non-English-speaking patients by 38%",
      "Deployed real-time interpreter allocation supporting 3,000+ patient interactions every month",
      "Moved 25,000+ paper records to electronic systems with zero data loss",
      "Integrated legacy systems with new software, increasing staff adoption by 60%",
    ],
  },
  {
    title: "Administrative Officer",
    company: "NHS South Tyneside and Sunderland Trust",
    place: "United Kingdom",
    period: "Dec 2024 – Dec 2025",
    highlights: [
      "Handled 120+ patient and stakeholder enquiries a week with a 98% satisfaction rate",
      "Improved data accuracy by 30% across internal databases in 3 departments",
      "Processed invoices and cash tracking for transactions exceeding £5M a month",
      "Kept 1,000+ patient and departmental records fully compliant, with zero data breaches",
    ],
  },
  {
    title: "Operations Analyst",
    company: "MC Tech",
    place: "United Kingdom",
    period: "Jul 2023 – Sep 2024",
    highlights: [
      "Directed cross-departmental operations in line with organisational goals",
      "Led cost-saving initiatives while protecting service quality",
      "Designed standard operating procedures to streamline project execution and performance monitoring",
    ],
  },
  {
    title: "Digital Project Manager · Project Analyst",
    company: "Moon Rock Nigeria Limited",
    place: "Remote",
    period: "Aug 2022 – Jul 2023",
    highlights: [
      "Managed an annual project portfolio budget of over £2.5 million",
      "Cut delivery delays by 25% by introducing standard PMO methods and tools",
      "Identified and resolved 50+ project risks before they caused delays",
      "Oversaw the Dental Complex and Neonatal Care Building project in Maiduguri, delivered on time and within budget",
    ],
  },
  {
    title: "Project Manager",
    company: "Messrs Solid Rock International Link Services",
    place: "Remote",
    period: "Jan 2021 – Apr 2023",
    highlights: [
      "Reduced project-related issues by 50% through regular risk assessments",
      "Introduced remote cost tracking that cut project expenses by 65% without lowering quality",
      "Tracked key metrics for a 14-family barracks quarters build at the Army Barracks, Aba",
    ],
  },
  {
    title: "Project Manager",
    company: "Hunter and Cook",
    place: "Nigeria",
    period: "Aug 2020 – Jun 2021",
    highlights: [
      "Supervised the Network Design and Integration project at the University of Maiduguri Teaching Hospital",
      "Coordinated teams of more than 50 people",
      "Zero accidents on site and 95% adherence to project specifications",
      "Reduced construction delays by 20% with proactive scheduling",
    ],
  },
  {
    title: "Project Supervisor",
    company: "Federal Inland Revenue Service",
    place: "Nigeria",
    period: "Jun 2019 – Jun 2020",
    highlights: [
      "Set up a digital filing system that reduced paperwork by 30%",
      "Kept high-priority meetings at 95% schedule adherence",
    ],
  },
];

export const education = [
  { degree: "MSc Project Management", school: "University of Sunderland", place: "Sunderland, United Kingdom", year: "2024" },
  { degree: "BSc Sociology and Anthropology", school: "University of Abuja", place: "Abuja, Nigeria", year: "2019" },
];

export const certifications = {
  headline: { name: "PRINCE2 Foundation and Practitioner", year: "2026" },
  nhsElect: {
    year: "2025",
    courses: [
      "Quality Improvement",
      "Measurement for Quality Improvement",
      "PDSA Cycles",
      "Stakeholder Mapping",
      "Building High Performance Teams",
      "Critical Thinking",
      "Report Writing",
      "Minute Taking",
      "Successful Time Management",
    ],
  },
  other: [{ name: "Desktop Publishing", year: "2018" }],
};
