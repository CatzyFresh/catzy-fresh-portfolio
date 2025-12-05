// app/page.tsx
import HeroSection from "@/components/sections/home/HeroSection";
import FeaturedGamesCarousel from "@/components/sections/home/FeaturedGamesCarousel";
import AboutSnapshotSection from "@/components/sections/home/AboutSnapshotSection";
import WhatWeBuildSection from "@/components/sections/home/WhatWeBuildSection";
import HighlightsValuesSection from "@/components/sections/home/HighlightsValuesSection";
import FinalCallToActionSection from "@/components/sections/home/FinalCallToActionSection";

export default function HomePage() {
  return (
    <>
      {/* BIG: Cinematic intro */}
      <HeroSection />

      {/* MEDIUM: Featured games carousel */}
      <FeaturedGamesCarousel />

      {/* SMALL: About snapshot */}
      <AboutSnapshotSection />

      {/* MEDIUM: Capabilities + values */}
      <WhatWeBuildSection />
      <HighlightsValuesSection />

      {/* BIG: Final CTA */}
      <FinalCallToActionSection />
    </>
  );
}
