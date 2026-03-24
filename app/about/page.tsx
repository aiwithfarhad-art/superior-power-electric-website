import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, organizationSchema } from "@/components/seo/JsonLd";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Superior Power Electric | Licensed Electricians Since 2020",
  description:
    "Meet Shaun Pennant, founder of Superior Power Electric. Serving Brampton and the GTA since 2020. ESA #7014710. 47 five-star reviews. 500+ jobs completed.",
  alternates: {
    canonical: "https://superiorpowerelectric.ca/about",
  },
  openGraph: {
    title: "About Superior Power Electric | Licensed Electricians Since 2020",
    description:
      "Meet Shaun Pennant, founder of Superior Power Electric. Serving Brampton and the GTA since 2020. ESA #7014710. 47 five-star reviews. 500+ jobs completed.",
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
