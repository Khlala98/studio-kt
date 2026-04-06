import Hero from "@/components/sections/Hero";
import TrustBanner from "@/components/sections/TrustBanner";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Included from "@/components/sections/Included";
import Pricing from "@/components/sections/Pricing";
import WhyPro from "@/components/sections/WhyPro";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <Services />
      <Portfolio />
      <Included />
      <Pricing />
      <WhyPro />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
