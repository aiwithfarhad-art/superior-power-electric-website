import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, organizationSchema } from "@/components/seo/JsonLd";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Superior Power Electric | Licensed Electricians Since 2010",
  description:
    "Meet Shaun Pennant and the Superior Power Electric team. 15+ years serving Brampton & GTA. ESA #7014710. 47 five-star reviews.",
  alternates: {
    canonical: "https://superiorpowerelectric.ca/about",
  },
  openGraph: {
    title: "About Superior Power Electric | Licensed Electricians Since 2010",
    description:
      "Meet Shaun Pennant and the Superior Power Electric team. 15+ years serving Brampton & GTA. ESA #7014710. 47 five-star reviews.",
    url: "https://superiorpowerelectric.ca/about",
    siteName: "Superior Power Electric",
    type: "website",
    locale: "en_CA",
  },
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
