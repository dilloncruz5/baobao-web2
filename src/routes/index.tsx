import { createFileRoute } from "@tanstack/react-router";
import { HeroVideo } from "@/components/landing/HeroVideo";
import { About } from "@/components/landing/About";
import { Storytelling } from "@/components/landing/Storytelling";
import { VisionMission } from "@/components/landing/VisionMission";
import { Values } from "@/components/landing/Values";
import { Timeline } from "@/components/landing/Timeline";
import { WhyWeExist } from "@/components/landing/WhyWeExist";
import { Stats } from "@/components/landing/Stats";
import { Gallery } from "@/components/landing/Gallery";
import { CTA } from "@/components/landing/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bao Bao — Our Story" },
      {
        name: "description",
        content:
          "The story of Bao Bao — a Chennai-born street-food brand reimagining the humble bao with bold Indian flavours, honest prices, and a global ambition.",
      },
      { property: "og:title", content: "Bao Bao — Our Story" },
      {
        property: "og:description",
        content: "Indian-flavoured baos, born on the streets of Chennai. Read our story, vision and mission.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroVideo />
      <About />
      <Storytelling />
      <VisionMission />
      <Values />
      <Stats />
      <Timeline />
      <Gallery />
      <WhyWeExist />
      <CTA />
    </>
  );
}
