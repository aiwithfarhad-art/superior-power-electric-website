"use client";

import { motion } from "framer-motion";
import { FAQ } from "@/components/ui/FAQ";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqs } from "@/data/homepage-faqs";

export function HomeFAQ() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="FAQ"
          line1="Common"
          line2="Questions"
          description="Answers to the most frequently asked questions about our electrical services."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
          className="max-w-3xl mx-auto"
        >
          <FAQ items={homeFaqs} />
        </motion.div>
      </div>
    </section>
  );
}
