"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, Star } from "lucide-react";
import QuoteForm from "@/components/sections/QuoteForm";
import { business } from "@/data/business";

const trustItems = [
  { icon: Shield, text: "ESA Licensed" },
  { icon: Clock, text: "Same-Day Service" },
  { icon: Star, text: "5.0 on Google" },
];

const googleReviews = [
  {
    text: "Shaun and his team did an amazing job upgrading our panel. Very professional, clean work, and explained everything clearly. Highly recommend!",
    author: "Mike T.",
    time: "2 months ago",
  },
  {
    text: "Called for an emergency on a Saturday and Shaun came out the same day. Fixed the problem quickly and didn't overcharge. This is our go-to electrician now.",
    author: "James R.",
    time: "3 months ago",
  },
  {
    text: "We've used Superior Power for multiple projects over the years. Panel upgrade, pot lights, and outdoor lighting. Consistent quality every single time.",
    author: "Karen P.",
    time: "5 months ago",
  },
];

function GoogleReviewSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % googleReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Card */}
      <div className="bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-5 lg:p-6">
        {/* Google header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            {/* Google G logo */}
            <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <span className="font-heading text-xs font-bold text-[#1C1C1E] uppercase tracking-wide">
                Google Reviews
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="font-heading text-sm font-bold text-[#1C1C1E]">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <span className="font-body text-[10px] text-[#94a3b8] ml-0.5">
                  ({business.googleReviews.count})
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sliding review */}
        <div className="relative min-h-[100px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Stars row */}
              <div className="flex mb-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              <p className="font-body text-[13px] text-[#4B5563] leading-relaxed">
                &ldquo;{googleReviews[current].text}&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2">
                {/* Avatar circle */}
                <div className="w-7 h-7 rounded-full bg-[#E31837] flex items-center justify-center">
                  <span className="text-white text-[11px] font-bold">
                    {googleReviews[current].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-heading text-xs font-bold text-[#1C1C1E]">
                    {googleReviews[current].author}
                  </span>
                  <span className="block font-body text-[10px] text-[#94a3b8]">
                    {googleReviews[current].time}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-4 pt-3 border-t border-gray-100">
          {googleReviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? "bg-[#E31837] w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CTASection() {
  return (
    <section className="relative bg-white pt-20 md:pt-36 lg:pt-44 pb-8 md:pb-20 lg:pb-28 overflow-hidden">
      {/* Subtle ambient blobs */}
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-[#E31837]/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full bg-[#E31837]/[0.015] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-14">
          {/* Left Column: Headline + Trust + Review Slider */}
          <div className="lg:w-[42%] lg:sticky lg:top-28 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full border border-black/[0.08] text-[10px] font-bold uppercase tracking-[0.25em] text-[#64748b] mb-4 lg:mb-6"
            >
              Free Quote
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-[32px] sm:text-4xl lg:text-[52px] font-black uppercase tracking-tight leading-[1.05] text-[#1C1C1E]"
            >
              Get Your Free
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl sm:text-3xl lg:text-[40px] leading-[1.1] mt-1"
            >
              Estimate Today
            </motion.p>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-body text-[#64748b] text-sm lg:text-lg mt-3 lg:mt-6 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Takes less than 2 minutes.{" "}
              <br className="hidden sm:block" />
              We call you back within 2 hours with a quote.
            </motion.p>

            {/* Trust micro-strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-5 lg:mt-8 hidden lg:flex flex-wrap items-center justify-start gap-5"
            >
              {trustItems.map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 text-[11px] font-body text-[#94a3b8] uppercase tracking-[0.15em]"
                >
                  <item.icon className="w-3.5 h-3.5 text-[#E31837]/60" />
                  {item.text}
                </span>
              ))}
            </motion.div>

            {/* Google Review Slider Card - desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 hidden lg:block"
            >
              <GoogleReviewSlider />
            </motion.div>
          </div>

          {/* Right Column: Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-[58%]"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
