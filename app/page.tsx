import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import Marquee from "@/components/home/Marquee";
import InteractiveSwipe from "@/components/home/InteractiveSwipe";
import GroupMode from "@/components/home/GroupMode";
import Bracket from "@/components/home/Bracket";
import ChapterDivider from "@/components/home/ChapterDivider";
import Itinerary from "@/components/home/Itinerary";
import ExplorerMap from "@/components/home/ExplorerMap";
import DestinationsTeaser from "@/components/home/DestinationsTeaser";
import HowItWorks from "@/components/home/HowItWorks";
import FeatureStrip from "@/components/home/FeatureStrip";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Marquee />
      <Reveal>
        <div id="chapter-try">
          <InteractiveSwipe />
        </div>
      </Reveal>
      <Reveal>
        <div id="chapter-group">
          <GroupMode />
        </div>
      </Reveal>
      <Reveal>
        <div id="chapter-bracket">
          <Bracket />
        </div>
      </Reveal>
      <ChapterDivider
        chapter="§ Interlude"
        number="II"
        line1="So. You’ve picked a place."
        line2="Now go."
        footnote="Part two — the plan, the map, the list"
      />
      <Reveal>
        <div id="chapter-itinerary">
          <Itinerary />
        </div>
      </Reveal>
      <Reveal>
        <div id="chapter-map">
          <ExplorerMap />
        </div>
      </Reveal>
      <Reveal>
        <div id="chapter-destinations">
          <DestinationsTeaser />
        </div>
      </Reveal>
      <Reveal>
        <div id="chapter-how-it-works">
          <HowItWorks />
        </div>
      </Reveal>
      <Reveal>
        <div id="chapter-features">
          <FeatureStrip />
        </div>
      </Reveal>
      <Reveal>
        <div id="chapter-faq">
          <FAQ />
        </div>
      </Reveal>
      <FinalCTA />
    </>
  );
}
