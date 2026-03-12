"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { NumberTicker } from "@/components/ui/NumberTicker";

const stats = [
  { value: 500, suffix: "+", label: "Jobs Completed" },
  { value: 47, suffix: "", label: "5-Star Reviews" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Licensed & Insured" },
];

export default function StatsTicker() {
  return (
    <section className="bg-[#1C1C1E] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Stats grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.625, 0.05, 0, 1],
                  }}
                >
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-heading font-bold text-[48px] md:text-[72px] text-white leading-none"
                    duration={2}
                  />
                  <p className="font-body text-xs md:text-sm uppercase tracking-[0.15em] text-[#64748b] mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pull quote - desktop only */}
          <motion.div
            className="hidden lg:block lg:w-[340px] shrink-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.625, 0.05, 0, 1] }}
          >
            <div className="border-l-4 border-[#1B4FE4] pl-6">
              <p className="font-body text-white/80 text-sm leading-relaxed italic">
                &ldquo;We had Superior Power Electric upgrade our service to 200
                amps and our experience was great. Throughout the process, Shaun
                and his crew were courteous and professional.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="font-heading text-sm font-bold text-white uppercase">
                  Daniel Lebar
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#94a3b8] mt-1">
                <span className="font-bold" style={{ color: "#4285F4" }}>
                  G
                </span>
                via Google
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
