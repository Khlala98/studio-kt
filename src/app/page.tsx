import Hero from "@/components/sections/Hero";
import TrustBanner from "@/components/sections/TrustBanner";
import WhyStudioKT from "@/components/sections/WhyStudioKT";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Included from "@/components/sections/Included";
import Pricing from "@/components/sections/Pricing";
import WhyPro from "@/components/sections/WhyPro";
import Process from "@/components/sections/Process";
import RecentProjects from "@/components/sections/RecentProjects";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <WhyStudioKT />
      <Services />
      <Portfolio />
      <Included />
      <Pricing />
      <WhyPro />
      <Process />
      <RecentProjects />
      <FAQ />
      <Contact />
    </>
  );
}
