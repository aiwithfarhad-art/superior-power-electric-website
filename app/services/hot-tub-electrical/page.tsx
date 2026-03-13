import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getRelatedServices } from "@/data/services";
import { business } from "@/data/business";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  howToSchema,
} from "@/components/seo/JsonLd";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { serviceDetails } from "@/data/service-details";

const slug = "hot-tub-electrical";

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${business.domain}/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${business.domain}/services/${slug}`,
      siteName: business.name,
      type: "website",
      locale: "en_CA",
    },
  };
}

export default function HotTubElectricalPage() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service.relatedServices);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: service.title, href: `/services/${slug}` },
          ]),
          howToSchema(
            `How ${service.title} Works`,
            serviceDetails[slug]?.processSteps || []
          ),
        ]}
      />
      <ServicePageTemplate service={service} relatedServices={relatedServices} />
    </>
  );
}
