"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Star, Clock, Zap } from "lucide-react";
import Image from "next/image";

const badges = [
  { icon: Shield, text: "ESA #7014710" },
  { icon: Clock, text: "5+ Years" },
  { icon: Zap, text: "500+ Jobs" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Split background - right side light grey on desktop */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-white hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* ── Left: Fleet Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-[55%] relative"
          >
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/company-fleet.webp"
                alt="Superior Power Electric service truck parked in front of the Toronto CN Tower skyline - licensed electricians serving Brampton and the GTA"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />

              {/* Bottom gradient for depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

              {/* Red accent bar at bottom edge */}
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#E31837]" />
            </div>

            {/* Floating review card - overlaps image bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 right-3 sm:right-6 lg:right-8 bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.04)] px-5 py-4 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-full bg-[#E31837]/10 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-[#E31837] fill-[#E31837]" />
              </div>
              <div>
                <div className="font-heading text-xl font-black text-[#1C1C1E] leading-none">
                  5.0
                </div>
                <div className="font-body text-[11px] text-[#94a3b8] mt-0.5">
                  47 Google Reviews
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Story Copy ── */}
          <div className="lg:w-[45%] pt-8 lg:pt-0">
            {/* Eyebrow + Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="eyebrow-label">Meet Shaun Pennant</span>

              <h2
                id="about-heading"
                className="font-heading text-[28px] sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight leading-[1.05] text-[#1C1C1E] mt-4"
              >
                One Truck. One Promise.
              </h2>
              <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-xl sm:text-2xl lg:text-[30px] leading-[1.1] mt-1">
                Same Standard. Every Job.
              </p>
            </motion.div>

            {/* Silver divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="w-16 h-[2px] bg-gradient-to-r from-[#E31837]/30 to-transparent origin-left mt-6"
            />

            {/* Story - short, punchy, SEO keywords naturally placed */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 space-y-4 font-body text-[#64748b] text-lg md:text-xl leading-[1.75]"
            >
              <p>
                In 2020, Shaun Pennant started Superior Power Electric with one
                truck and a simple rule: do the job right, or don&apos;t do it
                at all.
              </p>
              <p>
                That commitment turned into Brampton&apos;s go-to licensed
                electrician. Not because of clever marketing. Because every
                panel upgrade, every pot light install, every emergency call got
                the same treatment: show up on time, explain everything, leave
                the place cleaner than you found it.
              </p>
              <p className="text-[#1C1C1E] font-medium">
                47 five-star reviews. Zero shortcuts. That is the whole story.
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {badges.map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)] text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-[#64748b]"
                >
                  <b.icon className="w-3.5 h-3.5 text-[#E31837]" />
                  {b.text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
