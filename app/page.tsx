import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CTASection } from "@/components/sections/CTASection";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { homeFaqs } from "@/data/homepage-faqs";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Licensed Electrician in Brampton | Superior Power Electric",
  description:
    "Licensed electricians in Brampton & GTA. ESA #7014710. Residential & commercial. Panel upgrades, pot lights, rewiring, EV chargers. Free estimates. Call 647-872-9954.",
  alternates: {
    canonical: "https://superiorpowerelectric.ca",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={faqSchema(
          homeFaqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))
        )}
      />
      <Hero />
      <ServiceGrid />
      <WhyChooseUs />
      <ReviewsSection />
      <ServiceArea />
      <HomeFAQ />
      <CTASection />
    </>
  );
}
