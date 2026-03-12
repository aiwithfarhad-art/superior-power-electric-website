"use client";

import { ArrowRight, Phone, Check } from "lucide-react";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

const trustItems = [
  "ESA Licensed",
  "Same-Day Available",
  "No Fix No Fee Guarantee",
];

interface CTAProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function CTASection({
  title = "Ready to Fix It Right?",
  description = "Book your $49 whole-home electrical assessment. We find the issues - you decide what to fix.",
}: CTAProps = {}) {
  return (
    <section className="bg-[#1C1C1E] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-white font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]"
        >
          {title}
        </motion.h2>

        <p className="font-body text-[#94a3b8] text-lg mt-6 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <ShimmerButton href="/contact">
            Book Your $49 Assessment
            <ArrowRight className="w-4 h-4" />
          </ShimmerButton>

          <a
            href="tel:+19054528439"
            className="border-2 border-white/40 text-white rounded-lg px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:border-white/70 hover:bg-white/5 transition-all min-h-[52px] inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            (905) 452-8439
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#94a3b8] font-body">
          {trustItems.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-green-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
