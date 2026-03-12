"use client";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Phone,
  Star,
  Shield,
} from "lucide-react";
import { business } from "@/data/business";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
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

const trustItems = [
  { text: `${business.googleReviews.rating} Stars`, hasIcon: true },
  { text: `${business.googleReviews.count} Reviews` },
  { text: "500+ Jobs" },
  { text: `${business.yearsInBusiness} Years` },
  { text: "ESA Licensed" },
  { text: "Same-Day Service" },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#1C1C1E]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-electrician.jpg"
          alt="Licensed electrician in Brampton performing electrical panel upgrade"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/65" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-[1] bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/50 to-transparent" />

      {/* Electrical particles */}
      <ElectricalParticles />

      {/* Emergency badge - top right desktop */}
      <div className="absolute top-24 right-8 z-20 hidden lg:block">
        <div className="animate-emergency-pulse inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E31837]/20 border border-[#E31837]/40">
          <Zap className="w-4 h-4 text-[#E31837]" fill="currentColor" />
          <span className="font-heading text-xs uppercase tracking-[0.15em] font-bold text-white">
            24/7 Emergency
          </span>
        </div>
      </div>

      {/* 2-Column Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12 lg:pt-32 lg:pb-14">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Left column - 60% */}
          <div className="lg:w-[60%]">
            {/* Emergency badge - mobile */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 lg:hidden"
            >
              <div className="animate-emergency-pulse inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E31837]/20 border border-[#E31837]/40">
                <Zap
                  className="w-3.5 h-3.5 text-[#E31837]"
                  fill="currentColor"
                />
                <span className="font-heading text-xs uppercase tracking-[0.15em] font-bold text-white">
                  24/7 Emergency
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-heading text-5xl md:text-6xl lg:text-[80px] font-black uppercase leading-[1.05] tracking-tight text-white"
            >
              Brampton&apos;s Most
              <br />
              Trusted Electrician
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="font-accent italic text-2xl md:text-3xl lg:text-[40px] tracking-[0.05em] text-[#E31837] uppercase mt-2 leading-[1.1]"
            >
              Superior Power Electric
            </motion.p>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-5 font-body text-lg text-[#94a3b8] tracking-wide"
            >
              ESA Licensed &middot; Fully Insured &middot; 5-Star Rated
            </motion.p>

            {/* Guarantee line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-[#1B4FE4]" />
              <span className="font-body text-sm text-white/70">
                $49 credited toward your job &middot; Free remote estimates
                available
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <ShimmerButton href="/contact">
                Book Your $49 Assessment
                <ArrowRight className="w-4 h-4" />
              </ShimmerButton>

              <a
                href={`tel:${business.phoneFull}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white rounded-lg font-heading text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:border-white/70 hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] min-h-[52px]"
              >
                <Phone className="w-4 h-4" />
                Call {business.phone}
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-gray-300"
            >
              {trustItems.map((item, index) => (
                <span key={item.text} className="flex items-center gap-1.5">
                  {item.hasIcon && (
                    <Star
                      className="w-4 h-4 text-yellow-400 -mr-0.5"
                      fill="currentColor"
                    />
                  )}
                  <span>{item.text}</span>
                  {index < trustItems.length - 1 && (
                    <span className="text-gray-500 ml-1">&middot;</span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column - 40% - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="lg:w-[40%]"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom - Stats + Testimonial */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
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
    </section>
  );
}
