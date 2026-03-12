import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
import { business } from "@/data/business";
import {
  JsonLd,
  electricianSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";
import { CityPageTemplate } from "@/components/templates/CityPageTemplate";

const city = getCityBySlug("caledon");

export function generateMetadata(): Metadata {
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `${business.domain}/locations/caledon`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${business.domain}/locations/caledon`,
      siteName: business.name,
      type: "website",
    },
  };
}

export default function CaledonPage() {
  if (!city) notFound();

  const schema = {
    ...electricianSchema(),
    areaServed: {
      "@type": "City",
      name: city.name,
    },
  };

  return (
    <>
      <JsonLd
        data={[
          schema,
          faqSchema(city.faqs),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Locations", href: "/locations" },
            { name: city.name, href: `/locations/${city.slug}` },
          ]),
        ]}
      />
      <CityPageTemplate city={city} />
    </>
  );
}
