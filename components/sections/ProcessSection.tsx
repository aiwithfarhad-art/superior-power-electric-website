"use client";

import { motion } from "framer-motion";
import { Calendar, ClipboardList, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book Your $49 Assessment",
    desc: "We inspect your entire home electrical system and identify every issue. No guesswork.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Get a Clear, Fixed Quote",
    desc: "Price locked before we start. No surprises. No hidden fees. Ever.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Work Done Right. Guaranteed.",
    desc: "ESA-certified installation backed by our 100% satisfaction guarantee.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#F8F9FA] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.625, 0.05, 0, 1] }}
        >
          <span className="inline-block px-5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase mb-4 bg-[#E31837]/10 text-[#E31837] font-heading">
            Simple Process
          </span>
          <h2 className="font-heading text-[#1a2975] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            How It Works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-4 max-w-5xl mx-auto relative">
          {/* Connecting dashed line - desktop only */}
          <div className="hidden lg:block absolute top-16 left-[20%] right-[20%] h-[2px] border-t-2 border-dashed border-[#1B4FE4]/30" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex-1 text-center relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.625, 0.05, 0, 1],
              }}
            >
              {/* Large background step number */}
              <div className="font-heading text-[100px] lg:text-[140px] font-black text-[#E2E8F0] leading-none select-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 pointer-events-none">
                {step.number}
              </div>

              {/* Blue icon circle */}
              <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#1B4FE4]/10">
                <step.icon size={28} className="text-[#1B4FE4]" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-[#1a2975] mb-2 relative z-10">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[#64748b] text-sm md:text-base max-w-xs mx-auto relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          className="text-center mt-12 font-body text-sm text-[#64748b] italic"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Most jobs completed same day &middot; Average response time: 47
          minutes
        </motion.p>
      </div>
    </section>
  );
}
