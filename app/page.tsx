import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

import TrustLogosBar from "@/components/sections/TrustLogosBar";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramSection from "@/components/sections/InstagramSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { CTASection } from "@/components/sections/CTASection";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Licensed Electrician in Brampton | Superior Power Electric",
  description:
    "Licensed electricians in Brampton & GTA. ESA #7014710. Residential & commercial. Panel upgrades, pot lights, rewiring, EV chargers. $49 assessment credited toward your project. Call (905) 452-8439.",
  alternates: {
    canonical: "https://superiorpowerelectric.ca",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <AboutSection />
      <TestimonialsSection />
      <InstagramSection />
      <ServiceAreaSection />
      <BlogSection />
      <CTASection />
      <StickyMobileCTA />
    </>
  );
}
