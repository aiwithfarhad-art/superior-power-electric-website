import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { business } from "@/data/business";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Superior Power Electric | $49 Assessment | (905) 452-8439",
  description:
    "Contact Superior Power Electric for electrical estimates in Brampton & GTA. $49 on-site assessment credited toward your project. Call (905) 452-8439. ESA #7014710. Same-day emergency service.",
};

function contactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: business.name,
    telephone: business.phoneFull,
    email: business.email,
    url: business.domain,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phoneFull,
      contactType: "customer service",
      areaServed: business.serviceAreas.map((city) => ({
        "@type": "City",
        name: city,
      })),
      availableLanguage: "English",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
  };
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <JsonLd data={contactPointSchema()} />
      <ContactContent />
    </>
  );
}
