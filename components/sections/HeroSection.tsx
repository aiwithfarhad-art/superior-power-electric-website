"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Phone,
  Star,
  Shield,
  CheckCircle,
} from "lucide-react";
import { business } from "@/data/business";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

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

const serviceOptions = [
  "Panel Upgrade",
  "Pot Lights",
  "EV Charger",
  "Rewiring",
  "Hot Tub / Pool",
  "Knob & Tube Removal",
  "Lighting",
  "Commercial",
  "Other",
];

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "hero-form" }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silent fail
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1C1C1E]">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-32 lg:pb-20">
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-heading text-5xl md:text-6xl lg:text-[80px] font-black uppercase leading-[1.05] tracking-tight text-white"
            >
              Brampton&apos;s Most
              <br />
              Trusted Electrician
            </motion.h1>

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

          {/* Right column - 40% - Floating form card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="lg:w-[40%] quote-form-section"
            id="quote-form"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Red header */}
              <div className="bg-[#E31837] px-6 py-4">
                <h2 className="font-heading text-xl font-bold uppercase text-white text-center tracking-wide">
                  Get Your Free Quote
                </h2>
              </div>

              {/* Form body */}
              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <p className="font-heading text-xl font-bold text-[#1a2975]">
                      We&apos;ll Call You Shortly
                    </p>
                    <p className="font-body text-sm text-[#64748b] mt-2">
                      Average response time: 47 minutes
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FE4] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FE4] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FE4] focus:border-transparent text-gray-500"
                      >
                        <option value="">Select a Service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your project (optional)"
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FE4] focus:border-transparent resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-[#E31837] text-white font-heading text-sm font-bold uppercase tracking-wide rounded-lg transition-all duration-300 hover:bg-[#c8152f] hover:shadow-lg disabled:opacity-50"
                    >
                      {submitting ? "Sending..." : "Get My Free Quote"}
                    </button>
                    <p className="text-center font-body text-xs text-[#94a3b8]">
                      No spam. We&apos;ll call you within the hour.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
