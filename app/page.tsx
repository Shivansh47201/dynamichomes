import Hero from "./components/home/Hero";
import FeaturedProperties from "./components/home/FeaturedProperties";
import FlagshipProjects from "./components/home/FlagshipProjects";
import TerritoriesSection from "./components/home/TerritoriesSection";
import MortgageCalculator from "./components/home/MortgageCalculator";
import ServicesOverview from "./components/home/ServicesOverview";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white overflow-hidden relative">
      <Hero />
      <FeaturedProperties />
      <FlagshipProjects />
      <TerritoriesSection />
      <MortgageCalculator />
      <ServicesOverview />
    </main>
  );
}



