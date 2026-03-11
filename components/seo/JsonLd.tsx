import { business } from "@/data/business";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function electricianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: business.name,
    image: `${business.domain}/logo.svg`,
    url: business.domain,
    telephone: business.phoneFull,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.72,
      longitude: -79.75,
    },
    areaServed: business.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ESA License",
      recognizedBy: {
        "@type": "Organization",
        name: "Electrical Safety Authority",
      },
      identifier: business.esaLicense,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.googleReviews.rating,
      reviewCount: business.googleReviews.count,
      bestRating: 5,
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
    sameAs: [business.social.facebook, business.social.instagram],
    founder: {
      "@type": "Person",
      name: business.owner,
    },
    foundingDate: String(business.foundedYear),
    priceRange: "$$",
  };
}

export function serviceSchema(service: {
  title: string;
  slug: string;
  metaDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Electrician",
      name: business.name,
      telephone: business.phoneFull,
      url: business.domain,
    },
    areaServed: business.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    description: service.metaDescription,
    url: `${business.domain}/services/${service.slug}`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.domain}${item.href}`,
    })),
  };
}
