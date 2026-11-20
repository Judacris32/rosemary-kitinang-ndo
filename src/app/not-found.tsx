import { PageHero } from "@/components/ui/PageHero";
import { BoardWall } from "@/components/ui/Backgrounds";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHero
      crumb="Page not found"
      eyebrow="404"
      title={["This task got lost in the", { accent: "backlog" }]}
      intro="The page you are looking for has moved or never existed. Let's get you back on track."
      background={<BoardWall />}
    >
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="/" variant="coral">Back to home</Button>
        <Button href="/projects" variant="outline-light">See projects</Button>
      </div>
    </PageHero>
  );
}
