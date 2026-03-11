"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Star } from "lucide-react";
import { business } from "@/data/business";
import { QuoteForm } from "@/components/forms/QuoteForm";

export function Hero() {
  return (
    <section className="relative bg-[#1C1C1E] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.625, 0.05, 0, 1] }}
          >
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white">
                <Shield className="w-3.5 h-3.5 text-[#E31837]" />
                ESA Licensed {business.esaLicense}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                {business.googleReviews.count} Reviews ({business.googleReviews.rating}/5)
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
              Brampton&apos;s Trusted
              <br />
              <span className="font-playfair font-normal italic text-[#E31837]">
                Electrical Experts
              </span>
            </h1>

            <p className="mt-5 text-gray-400 text-lg max-w-lg">
              Licensed electricians serving Brampton, Mississauga, and the GTA.{" "}
              {business.yearsInBusiness} years of experience. Residential and commercial.
              Free estimates.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${business.phoneFull}`}
                className="inline-flex items-center gap-2 bg-[#E31837] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-[#C21430] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {business.phone}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Get a Free Estimate
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-2xl font-black text-white">{business.yearsInBusiness}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">{business.googleReviews.count}+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">{business.serviceAreas.length}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Cities</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.625, 0.05, 0, 1] }}
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
