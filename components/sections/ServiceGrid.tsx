"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Gauge,
  Lightbulb,
  FlameKindling,
  Lamp,
  Cable,
  Car,
  CircuitBoard,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  residential: Home,
  commercial: Building2,
  "panel-upgrades": Gauge,
  "pot-lights": Lightbulb,
  "hot-tub-electrical": FlameKindling,
  lighting: Lamp,
  rewiring: Cable,
  "ev-charger": Car,
  "knob-and-tube": CircuitBoard,
};

interface ServiceGridProps {
  showAll?: boolean;
  className?: string;
}

export function ServiceGrid({ showAll = false, className }: ServiceGridProps) {
  const displayServices = showAll ? services : services.slice(0, 6);

  return (
    <section className={className || "py-20 bg-white"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Our Services"
          line1="Electrical Services"
          line2="You Can Trust"
          description="From panel upgrades to pot lights, we handle every electrical need for your home or business. ESA licensed and fully insured."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.625, 0.05, 0, 1],
              }}
            >
              <Card
                icon={iconMap[service.slug]}
                title={service.title}
                description={service.heroDescription}
                href={`/services/${service.slug}`}
              />
            </motion.div>
          ))}
        </div>

        {!showAll && services.length > 6 && (
          <div className="mt-10 text-center">
            <a
              href="/services/residential"
              className="inline-flex items-center gap-2 text-[#E31837] font-semibold hover:underline"
            >
              View All Services
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
