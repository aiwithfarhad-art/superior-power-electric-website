import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import TrustLogosBar from "@/components/sections/TrustLogosBar";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
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
      <MarqueeTicker />
      <TrustLogosBar />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <EmergencyBanner />
      <ServiceAreaSection />
      <CTASection />
      <StickyMobileCTA />
    </>
  );
}
