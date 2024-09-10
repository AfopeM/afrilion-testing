import Carousel from "@/components/Carousel";
import { Hero, Services, WhyUs, OurTeam, CTA } from "@/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Carousel />
        <Services />
        <WhyUs />
        <OurTeam />
        <CTA />
      </main>
    </>
  );
}
