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
    paymentAccepted: "Cash, Credit Card, Debit, E-Transfer",
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
      {
        // Sunday: Emergency 24/7
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [business.social.facebook, business.social.instagram],
    founder: {
      "@type": "Person",
      name: business.owner,
    },
    foundingDate: String(business.foundedYear),
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "On-Site Project Assessment",
          price: "49",
          priceCurrency: "CAD",
          description:
            "Licensed electrician visits your home for a detailed assessment. $49 credited toward your project if you proceed.",
        },
        {
          "@type": "Offer",
          name: "Free Remote Estimate",
          price: "0",
          priceCurrency: "CAD",
          description:
            "Send photos and project details for a free ballpark estimate by phone.",
        },
      ],
    },
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

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: business.domain,
    logo: `${business.domain}/logo.svg`,
    image: `${business.domain}/logo.svg`,
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
    founder: {
      "@type": "Person",
      name: business.owner,
    },
    foundingDate: String(business.foundedYear),
    sameAs: [business.social.facebook, business.social.instagram],
  };
}

export function howToSchema(
  name: string,
  steps: { title: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
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

export function localBusinessSchema(city: { name: string; slug: string; neighborhoods: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: `Superior Power Electric - ${city.name}`,
    url: `https://superiorpowerelectric.ca/locations/${city.slug}`,
    telephone: "+19054528439",
    email: "info@superiorpowerelectric.ca",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Ontario",
      },
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ESA/ECRA License",
      recognizedBy: {
        "@type": "Organization",
        name: "Electrical Safety Authority",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
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
    priceRange: "$$",
    knowsAbout: city.neighborhoods.map((n) => `Electrical services in ${n}, ${city.name}`),
  };
}
