import type { StaticImageData } from "next/image";
import { awardImages, pressImages } from "./images";

export type Award = {
  slug: string;
  title: string;
  body: string;
  edition: string;
  date: string;
  year: string;
  venue: string;
  summary: string;
  photo: StaticImageData;
  photoAlt: string;
  timeline: { date: string; label: string }[];
  links: { label: string; href: string }[];
};

export const awards: Award[] = [
  {
    slug: "nita-2024",
    title: "Most Promising Digital Project Manager of the Year",
    body: "Nigeria Technology Awards (NiTA)",
    edition: "10th edition",
    date: "8 December 2024",
    year: "2024",
    venue: "Admiralty Conference Centre, Victoria Island, Lagos",
    summary:
      "Recognised for my work in digital project management, after a formal nomination, screening and independent judging process. Winners were decided by a judging panel and advisory board, not by public voting.",
    photo: awardImages.nitaTrophy,
    photoAlt: "Nigeria Technology Awards trophy engraved Most Promising Digital Project Manager of the Year, Ndo Rosemary Kitinang",
    timeline: [
      { date: "1 Sep 2024", label: "Official nomination, Tech Individuals and Professional category" },
      { date: "2–14 Oct 2024", label: "Screening and independent judging" },
      { date: "28 Oct 2024", label: "Winning notification received" },
      { date: "8 Dec 2024", label: "Trophy and certificate presented at the ceremony" },
    ],
    links: [
      { label: "NiTA winners directory", href: "https://nigeriatechnologyawards.com/winners/individual-directory/" },
      {
        label: "Blueprint news report",
        href: "https://blueprint.ng/ndo-rosemary-kitinang-wins-most-promising-digital-project-manager-of-the-year-at-10th-nigeria-technology-awards/",
      },
    ],
  },
  {
    slug: "titans-2025",
    title: "Digital Innovation & Product Delivery Award",
    body: "Titans of Tech Awards",
    edition: "21st edition",
    date: "25 July 2025",
    year: "2025",
    venue: "Oriental Hotel, Lekki, Lagos",
    summary:
      "Given to people who can take a technical idea, build it into something that works and see it through to delivery. My name is listed in the organisers' official 2025 roll call of winners.",
    photo: awardImages.titansTrophy,
    photoAlt: "Titans of Tech crystal star trophy for the Digital Innovation and Product Delivery Award 2025, Ndo Rosemary Kitinang",
    timeline: [
      { date: "25 Jul 2025", label: "Award, certificate and plaque presented" },
      { date: "25 Jul 2025", label: "Named in the official 2025 roll call of winners" },
      { date: "26 Jul 2025", label: "Covered by Independent newspaper" },
    ],
    links: [
      { label: "Titans of Tech 2025 winners", href: "https://titansoftechawards.com/tot-2025-award-winners/" },
      {
        label: "Independent news report",
        href: "https://independent.ng/digital-innovation-recognition-rosemary-kitinang-takes-home-2025-titans-of-tech-honour/",
      },
    ],
  },
];

export type PressItem = {
  title: string;
  source: string;
  date: string;
  image: StaticImageData;
  href?: string;
};

export const press: PressItem[] = [
  {
    title: "Ndo Rosemary Kitinang wins Most Promising Digital Project Manager of the Year",
    source: "Blueprint",
    date: "9 Dec 2024",
    image: pressImages.blueprintArticle,
    href: awards[0].links[1].href,
  },
  {
    title: "Rosemary Kitinang takes home 2025 Titans of Tech honour",
    source: "Independent",
    date: "26 Jul 2025",
    image: pressImages.independentArticle,
    href: awards[1].links[1].href,
  },
];
