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
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [business.social.facebook, business.social.instagram, business.social.googleBusinessProfile],
    founder: {
      "@type": "Person",
      name: business.owner,
    },
    foundingDate: String(business.foundedYear),
    priceRange: "$$",
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Daniel Lebar" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "We had Superior Power Electric upgrade our service to 200 amps and our experience was great. Throughout the process, from the initial quote to completion of the job, Shaun and his crew were courteous and professional.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Tanya Burkart" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "Shaun was on time, patient and answered all of my questions. He took his time and did a thorough review. Great job Shaun.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "J Bassi" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "Recently hired Superior Power Electric for project to install new lighting fixtures and outlets. From the very beginning Shaun was very transparent and provided us with a competitive quote.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Pallav Maggu" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "Excellent service! The electrician was professional, on time, and did a great job. Everything was explained clearly and the work was done neatly. Highly recommend!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Bhaskar Venkatraman" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "I recently had my electrical panel upgraded and a full set of smoke detectors installed. I am extremely impressed with the entire experience from start to finish.",
      },
    ],
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
    sameAs: [business.social.facebook, business.social.instagram, business.social.googleBusinessProfile],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: business.domain,
    description: `Licensed electricians in Brampton serving residential and commercial clients across the GTA. ESA ${business.esaLicense}.`,
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${business.domain}/logo.svg`,
      },
    },
    inLanguage: "en-CA",
  };
}

export function siteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Site Navigation",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Home",
        url: business.domain,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "About Us",
        url: `${business.domain}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Residential Electrical Services",
        url: `${business.domain}/services/residential`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Commercial Electrical Services",
        url: `${business.domain}/services/commercial`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Panel Upgrades",
        url: `${business.domain}/services/panel-upgrades`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Pot Light Installation",
        url: `${business.domain}/services/pot-lights`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 7,
        name: "EV Charger Installation",
        url: `${business.domain}/services/ev-charger`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 8,
        name: "Electrical Services in Brampton",
        url: `${business.domain}/locations/brampton`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 9,
        name: "Contact Us",
        url: `${business.domain}/contact`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 10,
        name: "Blog",
        url: `${business.domain}/blog`,
      },
    ],
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
    telephone: "+16478729954",
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
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    knowsAbout: city.neighborhoods.map((n) => `Electrical services in ${n}, ${city.name}`),
  };
}
