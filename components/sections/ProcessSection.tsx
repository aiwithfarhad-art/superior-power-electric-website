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

function StepCard({
  step,
  align = "left",
}: {
  step: (typeof steps)[number];
  align?: "left" | "right";
}) {
  const Icon = step.icon;
  return (
    <div
      className={`relative bg-white rounded-2xl p-7 md:p-8 border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-[#E31837]/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden group ${
        align === "right" ? "lg:text-right" : ""
      }`}
    >
      {/* Background step number watermark */}
      <span
        className={`absolute top-2 font-heading text-[100px] md:text-[120px] font-black text-[#1a2975]/[0.035] leading-none select-none pointer-events-none ${
          align === "right" ? "left-6" : "right-6"
        }`}
      >
        {step.number}
      </span>

      {/* Icon + step label */}
      <div
        className={`flex items-center gap-4 mb-5 ${
          align === "right" ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-12 h-12 rounded-lg bg-[#E31837] flex items-center justify-center shadow-lg shadow-[#E31837]/20 group-hover:shadow-[#E31837]/30 transition-shadow duration-500 shrink-0">
          <Icon size={22} className="text-white" strokeWidth={2} />
        </div>
        <span className="font-accent text-[10px] tracking-[0.3em] text-[#E31837]/50 uppercase">
          Step {step.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl md:text-2xl font-bold uppercase text-[#1a2975] mb-3 relative z-10 leading-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p
        className={`font-body text-[#64748b] text-sm md:text-base leading-relaxed relative z-10 ${
          align === "right" ? "lg:ml-auto" : ""
        } max-w-sm`}
      >
        {step.desc}
      </p>

      {/* Accent bar at bottom on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E31837] via-[#E31837]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          align === "right"
            ? "bg-gradient-to-l"
            : ""
        }`}
      />
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Header ---- */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.625, 0.05, 0, 1] }}
        >
          <span className="eyebrow-label mb-6">Simple Process</span>
          <h2 className="font-heading text-[#1a2975] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            How It Works
          </h2>
          <p className="font-accent italic tracking-[0.05em] text-2xl sm:text-3xl lg:text-[42px] leading-[1.1] mt-1 bg-gradient-to-r from-[#E31837] via-[#ff4d6a] to-[#E31837] bg-clip-text text-transparent">
            Three Simple Steps
          </p>
        </motion.div>

        {/* ---- Zigzag Timeline ---- */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          {/* Mobile: left-aligned | Desktop: center-aligned */}
          <div className="absolute left-[23px] lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#1a2975]/5 via-[#1a2975]/15 to-[#1a2975]/5"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.625, 0.05, 0, 1] }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={step.number}
                className={`relative ${i < steps.length - 1 ? "mb-12 lg:mb-20" : ""}`}
              >
                {/* ===== MOBILE LAYOUT (below lg) ===== */}
                <div className="flex items-start gap-6 lg:hidden">
                  {/* Dot */}
                  <div className="flex flex-col items-center shrink-0 pt-8 ml-1">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-[#E31837] ring-4 ring-[#E31837]/10 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 300,
                      }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0.625, 0.05, 0, 1],
                    }}
                  >
                    <StepCard step={step} />
                  </motion.div>
                </div>

                {/* ===== DESKTOP LAYOUT (lg+) ===== */}
                <div className="hidden lg:flex items-center">
                  {/* Left side */}
                  <motion.div
                    className="flex-1 pr-10"
                    initial={{ opacity: 0, x: isEven ? -40 : 0 }}
                    whileInView={{ opacity: isEven ? 1 : 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: [0.625, 0.05, 0, 1],
                    }}
                  >
                    {isEven && <StepCard step={step} align="right" />}
                  </motion.div>

                  {/* Center dot + connecting arms */}
                  <div className="relative flex items-center shrink-0 z-10">
                    {/* Left arm */}
                    <motion.div
                      className={`w-8 h-px ${
                        isEven ? "bg-[#E31837]/20" : "bg-transparent"
                      }`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      style={{ transformOrigin: isEven ? "right" : "left" }}
                    />

                    {/* Dot */}
                    <motion.div
                      className="w-4 h-4 rounded-full bg-[#E31837] border-[3px] border-white shadow-lg ring-4 ring-[#E31837]/10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3,
                        type: "spring",
                        stiffness: 300,
                      }}
                    />

                    {/* Right arm */}
                    <motion.div
                      className={`w-8 h-px ${
                        !isEven ? "bg-[#E31837]/20" : "bg-transparent"
                      }`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      style={{ transformOrigin: !isEven ? "left" : "right" }}
                    />
                  </div>

                  {/* Right side */}
                  <motion.div
                    className="flex-1 pl-10"
                    initial={{ opacity: 0, x: !isEven ? 40 : 0 }}
                    whileInView={{ opacity: !isEven ? 1 : 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: [0.625, 0.05, 0, 1],
                    }}
                  >
                    {!isEven && <StepCard step={step} align="left" />}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---- Bottom tagline ---- */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-body text-sm text-[#64748b]">
            Most jobs completed same day &middot; Average response time: 47
            minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
