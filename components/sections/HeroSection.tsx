"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
} from "lucide-react";
import { business } from "@/data/business";
import QuoteForm from "@/components/sections/QuoteForm";

function ElectricalParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: 2 + Math.random() * 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 4,
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            backgroundColor: "#1B4FE4",
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px rgba(27, 79, 228, 0.4)`,
            animation: `electricFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Marquee Ticker (lives inside hero, right above the fold) ─── */

const marqueeItems = [
  "500+ Jobs Completed",
  "47 Five-Star Reviews",
  "Same-Day Service",
  "ESA #7014710",
  "15+ Years Experience",
  "100% Licensed & Insured",
  "Brampton's Most Trusted",
  "Free Remote Estimates",
];

function HeroMarquee() {
  const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative z-10 bg-[#1B4FE4] py-3 overflow-hidden">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {repeated.map((text, i) => (
          <span
            key={i}
            className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-white/90 flex items-center gap-8"
          >
            {text}
            <span className="text-white/40">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#1C1C1E]">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay - 80% */}
      <div className="absolute inset-0 z-[1] bg-black/80" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-[1] bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/50 to-transparent" />

      {/* Electrical particles */}
      <ElectricalParticles />

      {/* 2-Column Content - taller hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12 lg:pt-32 lg:pb-14">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-10">
          {/* Left column - 55% */}
          <div className="lg:w-[55%]">
            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-heading text-4xl md:text-5xl lg:text-[64px] font-black uppercase leading-[1.05] tracking-tight text-white"
            >
              Brampton&apos;s Most
              <br />
              Trusted Electricians
            </motion.h1>
            {/* Subtitle + CTAs share width */}
            <div className="lg:inline-flex lg:flex-col mt-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="font-accent italic text-xl md:text-2xl lg:text-[32px] tracking-[0.05em] text-white uppercase leading-[1.1] mt-1"
              >
                <span className="relative inline-block pb-1">
                  Superior Power Electric
                  <span
                    className="absolute left-0 bottom-0 w-full h-[6px] md:h-[8px] bg-[#E31837] rounded-sm"
                    aria-hidden="true"
                  />
                </span>
              </motion.p>

              {/* CTAs - desktop only, mobile uses sticky bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="mt-6 hidden lg:flex gap-3"
              >
                <a
                  href={`tel:${business.phoneFull}`}
                  className="relative overflow-hidden flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#1B4FE4] text-white rounded-lg font-heading text-lg md:text-xl font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#1640c0] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#1B4FE4]/30"
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                    style={{ animation: "shimmerSweep 3s ease-in-out infinite" }}
                  />
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Call Us</span>
                </a>
                <a
                  href={`sms:${business.phoneFull}`}
                  className="relative overflow-hidden flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#E31837] text-white rounded-lg font-heading text-lg md:text-xl font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#c8152f] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E31837]/30"
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                    style={{ animation: "shimmerSweep 3s ease-in-out 1.5s infinite" }}
                  />
                  <MessageCircle className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Text Us</span>
                </a>
              </motion.div>
            </div>

          </div>

          {/* Right column - 45% - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="lg:w-[45%]"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom - Stats + Testimonial */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 shrink-0">
              {[
                { value: "500+", label: "Jobs Completed" },
                { value: "47", label: "5-Star Reviews" },
                { value: "15+", label: "Years Experience" },
                { value: "100%", label: "Licensed & Insured" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-heading text-2xl lg:text-3xl font-black text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-gray-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-16 bg-white/15 shrink-0" />

            {/* Testimonial */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-3">
                <span className="shrink-0 text-[#E31837] text-2xl font-serif leading-none mt-0.5">&ldquo;</span>
                <div>
                  <p className="font-body text-sm text-gray-300 leading-relaxed line-clamp-3">
                    We had Superior Power Electric upgrade our service to 200 amps and our experience was great. Throughout the process, from the initial quote to completion of the job, Shaun and his crew were courteous and professional.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="font-body text-xs text-gray-400">
                      Daniel Lebar
                    </span>
                    <span className="text-gray-600 text-xs">&middot;</span>
                    <span className="font-body text-xs text-gray-500">
                      via Google
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Marquee Banner - last thing above the fold */}
      <HeroMarquee />
    </section>
  );
}
