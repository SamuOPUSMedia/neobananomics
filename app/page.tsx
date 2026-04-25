import HeroSection from "@/components/HeroSection"
import ScrollingBanner from "@/components/ScrollingBanner"
import WeeklyJungleSection from "@/components/WeeklyJungleSection"
import MediaKitSection from "@/components/MediaKitSection"
import TestFinanziario from "@/components/TestFinanziario"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollingBanner />
      <WeeklyJungleSection />
      <MediaKitSection />
      <TestFinanziario />
    </>
  )
}
