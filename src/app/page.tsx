import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { WhyUs } from "@/components/sections/why-us";
import { Chairman } from "@/components/sections/chairman";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <WhyUs />
      <Chairman />
      <HowItWorks />
      <CTA />
    </>
  );
}
