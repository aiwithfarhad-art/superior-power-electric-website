"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/data/business";

export function ServiceArea() {
  return (
    <section className="py-20 bg-[#1C1C1E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Service Area"
          line1="Serving the"
          line2="Greater Toronto Area"
          description="Licensed electricians proudly serving residential and commercial clients across the GTA."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Cities list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {business.serviceAreas.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4"
                >
                  <MapPin className="w-5 h-5 text-[#E31837] flex-shrink-0" />
                  <span className="text-white font-medium">{city}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-gray-400 text-sm">
              Based in Brampton, we travel across the Greater Toronto Area for
              residential and commercial electrical projects. Contact us to
              confirm service availability in your area.
            </p>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.625, 0.05, 0, 1] }}
            className="rounded-xl overflow-hidden h-80"
          >
            <iframe
              src={business.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Superior Power Electric service area map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
