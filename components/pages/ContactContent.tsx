"use client";

import { motion } from "framer-motion";
import { business } from "@/data/business";
import QuoteForm from "@/components/sections/QuoteForm";

export function ContactContent() {
  return (
    <>
      {/* Quote Form only - no headline, badge, or description */}
      <section className="bg-white pt-8 md:pt-20 pb-8 md:pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <QuoteForm />
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white pb-10 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
            className="rounded-2xl overflow-hidden h-[400px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          >
            <iframe
              src={business.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Superior Power Electric location map"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
