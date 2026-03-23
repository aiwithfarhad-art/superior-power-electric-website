"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessStepSliderProps {
  steps: ProcessStep[];
}

export default function ProcessStepSlider({ steps }: ProcessStepSliderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative max-w-3xl mx-auto">

      {/* Center rail - desktop */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-[#E31837] via-[#E31837]/60 to-[#E31837]"
          style={{ transformOrigin: "top" }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>

      {/* Left rail - mobile */}
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
          const isLeft = i % 2 === 0;
          const delay = 0.35 + i * 0.15;
          const num = String(step.step).padStart(2, "0");

          return (
            <div key={step.step} className={`relative ${i < steps.length - 1 ? "pb-10 md:pb-14" : ""}`}>

              {/* ── MOBILE ── */}
              <div className="flex items-start gap-5 md:hidden pl-7">
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
                  <StepCard num={num} title={step.title} desc={step.description} />
                </motion.div>
              </div>

              {/* ── DESKTOP ── */}
              <div className="hidden md:flex items-center gap-0">

                {/* Left slot */}
                <div className="flex-1 pr-12">
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -24 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <StepCard num={num} title={step.title} desc={step.description} align="right" />
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
                      <StepCard num={num} title={step.title} desc={step.description} align="left" />
                    </motion.div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StepCard({
  num,
  title,
  desc,
  align = "left",
}: {
  num: string;
  title: string;
  desc: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`group flex items-start gap-4 bg-[#F9F9F9] hover:bg-white border border-transparent hover:border-[#E31837]/15 rounded-xl p-5 md:p-6 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
      {/* Number badge */}
      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#E31837] flex items-center justify-center mt-0.5">
        <span className="font-heading text-white font-bold text-sm leading-none">{num}</span>
      </div>
      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-[#1C1C1E] font-bold uppercase text-base md:text-lg leading-tight mb-1.5">
          {title}
        </h3>
        <p className="font-body text-[#6B7280] text-sm md:text-base leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
