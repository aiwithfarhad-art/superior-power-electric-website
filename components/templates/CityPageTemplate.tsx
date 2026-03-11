"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Shield,
  Star,
  Clock,
  ChevronRight,
  Zap,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { business } from "@/data/business";
import { services } from "@/data/services";
import type { CityPage } from "@/data/cities";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const ease = [0.625, 0.05, 0, 1] as const;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap: Zap,
};

interface CityPageTemplateProps {
  city: CityPage;
}

export function CityPageTemplate({ city }: CityPageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1C1C1E] pt-32 pb-20 overflow-hidden">
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/locations"
              className="hover:text-white transition-colors"
            >
              Locations
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E31837]">{city.name}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#E31837]/15 text-[#E31837] mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  {city.name}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]"
              >
                LICENSED ELECTRICIAN
                <br />
                <span className="font-playfair font-normal italic text-[#E31837]">
                  in {city.name}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl"
              >
                {city.heroDescription}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={`tel:${business.phoneFull}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#C21430] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {business.phone}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-white/60 transition-colors"
                >
                  Get a Free Estimate
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Trust Badges - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease }}
              className="hidden lg:grid grid-cols-1 gap-4"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#E31837]/15 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <p className="text-white font-bold">ESA Licensed</p>
                  <p className="text-gray-400 text-sm">
                    License {business.esaLicense}
                  </p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#E31837]/15 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <p className="text-white font-bold">
                    {business.googleReviews.count} Google Reviews
                  </p>
                  <p className="text-gray-400 text-sm">
                    Perfect {business.googleReviews.rating} star rating
                  </p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#E31837]/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <p className="text-white font-bold">
                    {business.yearsInBusiness} Years Experience
                  </p>
                  <p className="text-gray-400 text-sm">
                    Serving {city.name} and the GTA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease }}
            className="lg:hidden mt-10 grid grid-cols-3 gap-3"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Shield className="w-6 h-6 text-[#E31837] mx-auto mb-2" />
              <p className="text-white text-xs font-bold">ESA Licensed</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Star className="w-6 h-6 text-[#E31837] mx-auto mb-2" />
              <p className="text-white text-xs font-bold">
                {business.googleReviews.count} Reviews
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-[#E31837] mx-auto mb-2" />
              <p className="text-white text-xs font-bold">
                {business.yearsInBusiness} Years
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      {city.sections.map((section, index) => (
        <section
          key={index}
          className={index % 2 === 0 ? "py-20 bg-white" : "py-20 bg-[#F5F5F5]"}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1C1C1E] uppercase tracking-tight mb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-[#6B7280] leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Neighborhoods Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
              Neighborhoods We Serve
              <br />
              <span className="font-playfair font-normal italic text-[#E31837]">
                in {city.name}
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="flex flex-wrap justify-center gap-3"
          >
            {city.neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-[#E5E5E5] text-[#1C1C1E] font-medium text-sm hover:border-[#E31837]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E31837]" />
                {neighborhood}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      {city.faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                Frequently Asked
                <br />
                <span className="font-playfair font-normal italic text-[#E31837]">
                  Questions
                </span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <FAQ items={city.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* All Services Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
              Our Services
              <br />
              <span className="font-playfair font-normal italic text-[#E31837]">
                in {city.name}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, index) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease,
                }}
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group block bg-white rounded-xl p-6 border border-[#E5E5E5] hover:border-[#E31837]/30 hover:-translate-y-0.5 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#E31837]/10 flex items-center justify-center mb-4 group-hover:bg-[#E31837]/20 transition-colors">
                    <Zap className="w-6 h-6 text-[#E31837]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1C1E] mb-2 group-hover:text-[#E31837] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-2">
                    {svc.heroDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-[#E31837] text-sm font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Need an Electrician`}
        subtitle={`in ${city.name}?`}
        description={`Get a free estimate for your electrical project in ${city.name}. ESA licensed, fully insured, and ready to help.`}
      />
    </>
  );
}
