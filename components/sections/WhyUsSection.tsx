"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { NumberTicker } from "@/components/ui/NumberTicker";

const stats = [
  { value: 500, suffix: "+", label: "Jobs Completed", color: "white" },
  { value: 47, suffix: "", label: "5-Star Reviews", color: "#E31837" },
  { value: 15, suffix: "+", label: "Years Experience", color: "white" },
  { value: 100, suffix: "%", label: "Licensed & Insured", color: "#E31837" },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-[#1C1C1E] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Side - Stats 2x2 Grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.625, 0.05, 0, 1],
                  }}
                >
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-heading text-5xl md:text-6xl lg:text-7xl font-black"
                    style={{ color: stat.color }}
                  />
                  <p className="font-body text-sm text-[#94a3b8] uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Pull Quote */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.625, 0.05, 0, 1] }}
          >
            <div className="border-l-4 border-[#1B4FE4] pl-6">
              <blockquote className="font-body text-white/80 text-lg italic leading-relaxed">
                &ldquo;We had Superior Power Electric upgrade our service to 200
                amps and our experience was great. Throughout the process, from
                the initial quote to completion of the job, Shaun and his crew
                were courteous and professional.&rdquo;
              </blockquote>

              <div className="mt-4">
                <p className="font-heading text-white font-bold text-sm uppercase">
                  Daniel Lebar
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-[#94a3b8] text-xs mt-1">via Google</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
