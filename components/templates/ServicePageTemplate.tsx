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
  Building2,
  Lightbulb,
  Waves,
  Sun,
  Cable,
  PlugZap,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import { business } from "@/data/business";
import type { Service } from "@/data/services";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Building2,
  Lightbulb,
  Waves,
  Sun,
  Cable,
  PlugZap,
  ShieldAlert,
};

const ease = [0.625, 0.05, 0, 1] as const;

function splitHeadline(h1: string): { line1: string; line2: string } {
  const splitWords = ["in", "for", "&"];
  const words = h1.split(" ");

  for (let i = words.length - 1; i >= 0; i--) {
    if (splitWords.includes(words[i].toLowerCase()) || splitWords.includes(words[i])) {
      return {
        line1: words.slice(0, i).join(" "),
        line2: words.slice(i).join(" "),
      };
    }
  }

  // Fallback: split roughly in half
  const mid = Math.ceil(words.length / 2);
  return {
    line1: words.slice(0, mid).join(" "),
    line2: words.slice(mid).join(" "),
  };
}

interface ServicePageTemplateProps {
  service: Service;
  relatedServices: Service[];
}

export function ServicePageTemplate({
  service,
  relatedServices,
}: ServicePageTemplateProps) {
  const { line1, line2 } = splitHeadline(service.h1);
  const ServiceIcon = iconMap[service.icon] || Zap;

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
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/#services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E31837]">{service.title}</span>
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
                  <ServiceIcon className="w-3.5 h-3.5" />
                  {service.shortTitle || service.title}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]"
              >
                {line1}
                <br />
                <span className="font-playfair font-normal italic text-[#E31837]">
                  {line2}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl"
              >
                {service.heroDescription}
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
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Trust Badges */}
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
                    Serving Brampton and the GTA
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
      {service.sections.map((section, index) => (
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
                {section.heading}
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

      {/* Why Choose Us Mini-Section */}
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
              Why Choose
              <br />
              <span className="font-playfair font-normal italic text-[#E31837]">
                Superior Power
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "ESA Licensed",
                description: `ESA License ${business.esaLicense}. Every project inspected and certified to Ontario Electrical Safety Code.`,
              },
              {
                icon: Star,
                title: "Free Estimates",
                description:
                  "Upfront pricing with no hidden fees. Detailed written quotes before any work begins.",
              },
              {
                icon: Clock,
                title: "Quality Guaranteed",
                description: `${business.googleReviews.count} five-star Google reviews. Over ${business.yearsInBusiness} years of trusted service in the GTA.`,
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease,
                }}
                className="bg-[#F5F5F5] rounded-xl p-8 text-center border border-[#E5E5E5]"
              >
                <div className="w-14 h-14 rounded-lg bg-[#E31837]/10 flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-7 h-7 text-[#E31837]" />
                </div>
                <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
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
                Related
                <br />
                <span className="font-playfair font-normal italic text-[#E31837]">
                  Services
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.slice(0, 3).map((related, index) => {
                const RelatedIcon = iconMap[related.icon] || Zap;
                return (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease,
                    }}
                  >
                    <Link
                      href={`/services/${related.slug}`}
                      className="group block bg-white rounded-xl p-6 border border-[#E5E5E5] hover:border-[#E31837]/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#E31837]/10 flex items-center justify-center mb-4 group-hover:bg-[#E31837]/20 transition-colors">
                        <RelatedIcon className="w-6 h-6 text-[#E31837]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#1C1C1E] mb-2 group-hover:text-[#E31837] transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-2">
                        {related.heroDescription}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-[#E31837] text-sm font-semibold">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
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
              <FAQ items={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title={`Need ${service.shortTitle || service.title}?`}
        subtitle="Call Today"
        description={`Get a free estimate for your ${service.title.toLowerCase()} project. ESA licensed, fully insured, and ready to help.`}
      />
    </>
  );
}
