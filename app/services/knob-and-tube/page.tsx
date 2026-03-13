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

const service = getServiceBySlug("knob-and-tube");

export function generateMetadata(): Metadata {
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${business.domain}/services/knob-and-tube`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${business.domain}/services/knob-and-tube`,
      siteName: business.name,
      type: "website",
    },
  };
}

export default function KnobAndTubePage() {
  if (!service) notFound();

  const relatedServices = getRelatedServices(service.relatedServices);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            title: service.title,
            slug: service.slug,
            metaDescription: service.metaDescription,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: service.title, href: `/services/${service.slug}` },
          ]),
          howToSchema(
            `How ${service.title} Works`,
            serviceDetails["knob-and-tube"]?.processSteps || []
          ),
        ]}
      />
      <ServicePageTemplate service={service} relatedServices={relatedServices} />
    </>
  );
}
