import { HeroSection } from "@/components/sections/HeroSection"
import { SocialProofBar } from "@/components/sections/SocialProofBar"
import { UseCaseTeaser } from "@/components/sections/UseCaseTeaser"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { ROICalculator } from "@/components/sections/ROICalculator"
import { IntegrationGrid } from "@/components/sections/IntegrationGrid"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <UseCaseTeaser />
      <HowItWorksSection />
      <ROICalculator />
      <IntegrationGrid />
      <TestimonialsSection />
      <FinalCTA />
    </>
  )
}
