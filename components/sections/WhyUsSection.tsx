"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { NumberTicker } from "@/components/ui/NumberTicker";

const stats = [
  { value: 500, suffix: "+", label: "Jobs Completed" },
  { value: 47, suffix: "", label: "5-Star Reviews" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Licensed & Insured" },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.625, 0.05, 0, 1] }}
        >
          <span className="eyebrow-label">Why Choose Us</span>
          <h2 className="font-heading text-[#1C1C1E] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            The Numbers Speak
          </h2>
          <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl sm:text-3xl lg:text-[42px] leading-[1.1]">
            Power You Can Trust
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Side - Stats 4 in a row */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
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
                  className="rounded-xl border border-gray-200 p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
                >
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    className="stat-number font-heading text-5xl md:text-6xl lg:text-7xl font-black"
                  />
                  <p className="font-body text-sm text-[#64748b] uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Shaun Portrait + Pull Quote */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.625, 0.05, 0, 1] }}
          >
            {/* Shaun portrait */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/shaun-portrait.webp"
                alt="Shaun - Owner of Superior Power Electric"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-heading font-bold text-[#1C1C1E] uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#E31837]" />
                  Shaun - Owner &amp; Master Electrician
                </span>
              </div>
            </div>

            {/* Testimonial quote */}
            <div className="bg-white rounded-xl p-6 border-l-4 border-[#E31837] shadow-[0_4px_24px_rgba(227,24,55,0.08)]">
              <blockquote className="font-body text-[#4B5563] text-lg md:text-xl italic leading-relaxed">
                &ldquo;We had Superior Power Electric upgrade our service to 200
                amps and our experience was great. Throughout the process, from
                the initial quote to completion of the job, Shaun and his crew
                were courteous and professional.&rdquo;
              </blockquote>

              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <p className="font-heading text-[#1C1C1E] font-bold text-sm uppercase">
                    Daniel Lebar
                  </p>
                  <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto" />
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
