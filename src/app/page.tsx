import { HomeHero } from "@/components/home/HomeHero";
import { Statement } from "@/components/home/Statement";
import { Stats } from "@/components/home/Stats";
import { MeetRosemary } from "@/components/home/MeetRosemary";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessTeaser } from "@/components/home/ProcessTeaser";
import { RecognitionStrip } from "@/components/home/RecognitionStrip";
import { SectorsTools } from "@/components/home/SectorsTools";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Statement />
      <Stats />
      <MeetRosemary />
      <FeaturedProjects />
      <ProcessTeaser />
      <RecognitionStrip />
      <SectorsTools />
    </>
  );
}
