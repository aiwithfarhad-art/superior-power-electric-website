"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ClipboardList, ShieldCheck, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book Your $49 Assessment",
    desc: "We inspect your entire home electrical system and identify every issue. Credited toward your project if you proceed.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Get a Clear, Fixed Quote",
    desc: "Price locked before we start. No surprises. No hidden fees. Written estimate - you approve before we touch anything.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Work Done Right. Guaranteed.",
    desc: "ESA-certified installation backed by our 100% satisfaction guarantee. Permit pulled when required.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Stay Protected. Always.",
    desc: "Lifetime workmanship warranty. Call us anytime - 24/7 emergency service available.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="bg-white py-14 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-10 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.625, 0.05, 0, 1] }}
        >
          <span className="font-body text-[11px] tracking-[0.3em] text-[#E31837] uppercase block mb-4">
            Simple Process
          </span>
          <h2 className="font-heading font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl lg:text-[60px]">
            <span className="text-[#1C1C1E]">How Our Process</span>
            <br />
            <span className="text-[#E31837]">Works</span>
          </h2>
        </motion.div>

        {/* Zig-zag */}
        <div className="relative">

          {/* Center rail */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#E31837] via-[#E31837]/60 to-[#E31837]"
              style={{ transformOrigin: "top" }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />
          </div>

          {/* Mobile rail */}
          <div className="absolute left-[3px] top-0 bottom-0 w-px md:hidden">
            <motion.div
              className="w-full h-full bg-[#E31837]"
              style={{ transformOrigin: "top" }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              const delay = 0.35 + i * 0.15;

              return (
                <div key={step.number} className={`relative ${i < steps.length - 1 ? "pb-10 md:pb-14" : ""}`}>

                  {/* ── MOBILE layout ── */}
                  <div className="flex items-start gap-5 md:hidden pl-7">
                    {/* dot */}
                    <motion.div
                      className="absolute left-0 top-6 w-[9px] h-[9px] rounded-full bg-[#E31837] ring-4 ring-[#E31837]/15 z-10 -translate-y-1/2"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: delay + 0.05, type: "spring", stiffness: 500, damping: 20 }}
                    />
                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0, x: -16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <StepCard step={step} Icon={Icon} />
                    </motion.div>
                  </div>

                  {/* ── DESKTOP layout ── */}
                  <div className="hidden md:flex items-center gap-0">

                    {/* Left slot */}
                    <div className="flex-1 pr-12">
                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: -24 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <StepCard step={step} Icon={Icon} align="right" />
                        </motion.div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="relative z-10 shrink-0">
                      <motion.div
                        className="w-[14px] h-[14px] rounded-full bg-[#E31837] border-[3px] border-white ring-4 ring-[#E31837]/20 shadow-sm"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: delay + 0.1, type: "spring", stiffness: 500, damping: 20 }}
                      />
                    </div>

                    {/* Right slot */}
                    <div className="flex-1 pl-12">
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 24 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <StepCard step={step} Icon={Icon} align="left" />
                        </motion.div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.p
          className="font-body text-[#D1D5DB] text-sm mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Most jobs completed same day &middot; Avg. response: 47 min
        </motion.p>

      </div>
    </section>
  );
}

function StepCard({
  step,
  Icon,
  align = "left",
}: {
  step: (typeof steps)[number];
  Icon: React.ElementType;
  align?: "left" | "right";
}) {
  return (
    <div className={`group flex items-start gap-4 bg-[#F9F9F9] hover:bg-white border border-transparent hover:border-[#E31837]/15 rounded-xl p-5 md:p-6 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
      {/* Icon */}
      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E31837] flex items-center justify-center mt-0.5">
        <Icon size={18} className="text-white" strokeWidth={2} />
      </div>
      {/* Text */}
      <div className="flex-1 min-w-0">
        <span className="font-body text-[10px] tracking-[0.2em] text-[#E31837]/60 uppercase block mb-1">
          Step {step.number}
        </span>
        <h3 className="font-heading text-[#1C1C1E] font-bold uppercase text-base md:text-lg leading-tight mb-1.5">
          {step.title}
        </h3>
        <p className="font-body text-[#6B7280] text-sm md:text-base leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  );
}
