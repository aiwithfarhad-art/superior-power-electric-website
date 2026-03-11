"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { business } from "@/data/business";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to Get Started?",
  subtitle = "Call Today",
  description = "Get a free estimate for your electrical project. Licensed, insured, and ready to help.",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-[#E31837]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            {title}
            <br />
            <span className="font-playfair font-normal italic">{subtitle}</span>
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${business.phoneFull}`}
              className="inline-flex items-center gap-2 bg-white text-[#E31837] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
