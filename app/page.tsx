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
import { JsonLd, organizationSchema, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Licensed Electrician in Brampton | Superior Power Electric",
  description:
    "Licensed electricians in Brampton & GTA. ESA #7014710. Panel upgrades, pot lights, rewiring, EV chargers. $49 assessment credited toward your project. (905) 452-8439.",
  alternates: {
    canonical: "https://superiorpowerelectric.ca",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }])} />
      <JsonLd data={faqSchema([
        {
          question: "How much does an electrician cost in Brampton?",
          answer: "Most electrical projects in Brampton range from $200 to $5,000 depending on the scope. Superior Power Electric offers a $49 on-site assessment that is credited toward your project if you proceed.",
        },
        {
          question: "Do you offer free estimates?",
          answer: "We offer free remote estimates by phone when you send us photos and project details. For on-site assessments, we charge $49 which is credited toward your project if you move forward.",
        },
        {
          question: "Are you licensed and insured?",
          answer: "Yes. Superior Power Electric holds ESA/ECRA License #7014710 and is fully insured. All work is performed to the Ontario Electrical Safety Code and includes ESA inspection.",
        },
        {
          question: "What areas do you serve?",
          answer: "We serve Brampton, Mississauga, Vaughan, Caledon, Georgetown, Oakville, and the wider Greater Toronto Area for residential and commercial electrical services.",
        },
        {
          question: "Do you offer emergency electrical service?",
          answer: "Yes. We offer 24/7 emergency electrical service across the GTA. Call (905) 452-8439 for immediate assistance with electrical emergencies.",
        },
      ])} />
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
