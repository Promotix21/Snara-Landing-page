import { Hero } from "@/components/sections/Hero";
import { TheProblem } from "@/components/sections/TheProblem";
import { IntelligenceEngine } from "@/components/sections/IntelligenceEngine";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LiveVisualization } from "@/components/sections/LiveVisualization";
import { UseCases } from "@/components/sections/UseCases";
import { ConversationalIntelligence } from "@/components/sections/ConversationalIntelligence";
import { EnterpriseCapabilities } from "@/components/sections/EnterpriseCapabilities";
import { Pricing } from "@/components/sections/Pricing";
import { TopUps } from "@/components/sections/TopUps";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-zinc-100">
      <Hero />
      <TheProblem />
      <IntelligenceEngine />
      <HowItWorks />
      <LiveVisualization />
      <UseCases />
      <ConversationalIntelligence />
      <EnterpriseCapabilities />
      <Pricing />
      <TopUps />
      <Cta />
    </main>
  );
}
