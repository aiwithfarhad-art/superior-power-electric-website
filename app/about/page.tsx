import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, organizationSchema } from "@/components/seo/JsonLd";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Superior Power Electric | Licensed Electricians Since 2010",
  description:
    "Meet Shaun Pennant and the Superior Power Electric team. 15+ years serving Brampton & GTA. ESA #7014710. 47 five-star reviews. Residential & commercial.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
      <JsonLd data={organizationSchema()} />
      <AboutContent />
    </>
  );
}
