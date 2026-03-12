"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  Shield,
  Star,
  Clock,
  ChevronRight,
  CheckCircle,
  Zap,
  Building2,
  Lightbulb,
  Waves,
  Sun,
  Cable,
  PlugZap,
  ShieldAlert,
  Quote,
  Sparkles,
  Ruler,
  Battery,
  Settings,
  TrendingUp,
  Home,
  ClipboardCheck,
  Flame,
  Wallet,
  ShieldCheck,
  Snowflake,
  Smartphone,
  FileCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import type { Service } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import { reviews } from "@/data/reviews";
import { FAQ } from "@/components/ui/FAQ";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Building2,
  Lightbulb,
  Waves,
  Sun,
  Cable,
  PlugZap,
  ShieldAlert,
  Shield,
  Star,
  Clock,
  CheckCircle,
  Sparkles,
  Ruler,
  Battery,
  Settings,
  TrendingUp,
  Home,
  ClipboardCheck,
  Flame,
  Wallet,
  ShieldCheck,
  Snowflake,
  Smartphone,
  FileCheck,
};

const serviceImages: Record<string, string> = {
  "panel-upgrades": "/images/services/panel-upgrade.jpg",
  "pot-lights": "/images/services/pot-lights.jpg",
  "ev-charger": "/images/services/ev-charger.jpg",
  residential: "/images/services/residential.jpg",
  commercial: "/images/services/commercial.jpg",
  rewiring: "/images/services/rewiring.jpg",
  "hot-tub-electrical": "/images/services/hot-tub.jpg",
  lighting: "/images/services/lighting.jpg",
  "knob-and-tube": "/images/services/knob-tube.jpg",
};

const slugToReviewService: Record<string, string> = {
  "panel-upgrades": "Panel Upgrades",
  "pot-lights": "Pot Lights",
  "ev-charger": "EV Charger",
  residential: "Residential",
  commercial: "Commercial",
  rewiring: "Rewiring",
  "hot-tub-electrical": "Hot Tub",
  lighting: "Lighting",
  "knob-and-tube": "Knob & Tube",
};

const ease = [0.625, 0.05, 0, 1] as const;

function splitHeadline(h1: string): { line1: string; line2: string } {
  const splitWords = ["in", "for", "&"];
  const words = h1.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    if (
      splitWords.includes(words[i].toLowerCase()) ||
      splitWords.includes(words[i])
    ) {
      return {
        line1: words.slice(0, i).join(" "),
        line2: words.slice(i).join(" "),
      };
    }
  }
  const mid = Math.ceil(words.length / 2);
  return {
    line1: words.slice(0, mid).join(" "),
    line2: words.slice(mid).join(" "),
  };
}

function getServiceReview(slug: string) {
  const serviceName = slugToReviewService[slug];
  if (!serviceName) return reviews[0];
  const match = reviews.find((r) => r.service === serviceName);
  return match || reviews[0];
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
  const heroImage = serviceImages[service.slug];
  const featuredReview = getServiceReview(service.slug);
  const details = serviceDetails[service.slug];

  return (
    <>
      {/* ============================================
          1. HERO (dark #1C1C1E background)
          ============================================ */}
      <section className="relative bg-[#1C1C1E] pt-32 pb-20 overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`${service.title} - Superior Power Electric`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#1C1C1E]/75" />
          </div>
        )}
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
              href="/#services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E31837]">{service.title}</span>
          </motion.nav>

          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#1B4FE4]/15 text-[#1B4FE4] mb-6">
                <ServiceIcon className="w-3.5 h-3.5" />
                {service.shortTitle || service.title}
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="font-heading text-4xl md:text-5xl lg:text-[64px] font-black text-white uppercase tracking-tight leading-[1.05]"
            >
              {line1}
              <br />
              <span className="font-heading font-normal italic text-[#E31837]">
                {line2}
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              {service.heroDescription}
            </motion.p>

            {/* Two CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#C21430] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                Book Your $49 Assessment
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${business.phoneFull}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-white/60 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {business.phone}
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 font-body text-[13px] text-white/50 tracking-wide"
            >
              $49 credited toward your project &middot; Free remote estimates also available
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============================================
          2. TRUST BAR (white bg)
          ============================================ */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Shield,
                label: "ESA Licensed",
                sub: `ECRA ${business.esaLicense}`,
              },
              {
                icon: Star,
                label: `${business.googleReviews.rating} Google`,
                sub: `${business.googleReviews.count} Reviews`,
              },
              {
                icon: Clock,
                label: "Same-Day",
                sub: "Quotes Available",
              },
              {
                icon: CheckCircle,
                label: "Fully Insured",
                sub: "$5M Coverage",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#1B4FE4]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1C1C1E]">
                    {item.label}
                  </p>
                  <p className="text-xs text-[#6B7280]">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          3. OVERVIEW (white bg)
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-[#1C1C1E] uppercase tracking-tight mb-6">
                {service.sections[0]?.heading || `About ${service.title}`}
              </h2>
              <div className="space-y-4">
                {(service.sections[0]?.content || "")
                  .split("\n\n")
                  .map((p, i) => (
                    <p
                      key={i}
                      className="text-[#6B7280] leading-relaxed text-base md:text-lg"
                    >
                      {p}
                    </p>
                  ))}
              </div>
              {/* Additional content sections */}
              {service.sections.slice(1).map((section, idx) => (
                <div key={idx} className="mt-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1C1C1E] uppercase tracking-tight mb-4">
                    {section.heading}
                  </h3>
                  {section.content.split("\n\n").map((p, i) => (
                    <p
                      key={i}
                      className="text-[#6B7280] leading-relaxed text-base md:text-lg mb-4"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Right - Service image + review card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="space-y-6"
            >
              {heroImage && (
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              {/* Inline review */}
              <div className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100">
                <Quote className="w-6 h-6 text-[#1B4FE4]/30 mb-3" />
                <p className="text-[#4B5563] text-sm leading-relaxed italic mb-4">
                  &ldquo;{featuredReview.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-[#1C1C1E] font-bold text-sm">
                    {featuredReview.author}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip after overview */}
      <section className="py-10 bg-[#E31837]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-white text-lg md:text-xl font-bold mb-4">
              Need {service.shortTitle || service.title}? Book your $49
              assessment today. Credited toward your project.
            </p>
            <a
              href={`tel:${business.phoneFull}`}
              className="inline-flex items-center gap-2 bg-white text-[#E31837] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {business.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          4. BENEFITS GRID (light grey #F8F9FA bg)
          ============================================ */}
      {details?.benefits && (
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                Benefits of Professional
                <br />
                <span className="font-heading font-normal italic text-[#E31837]">
                  {service.shortTitle || service.title}
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {details.benefits.map((benefit, index) => {
                const BenefitIcon = iconMap[benefit.icon] || Zap;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease,
                    }}
                    className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#1B4FE4]/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#1B4FE4]/10 flex items-center justify-center mb-5">
                      <BenefitIcon className="w-7 h-7 text-[#1B4FE4]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          5. PROCESS (white bg)
          ============================================ */}
      {details?.processSteps && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                How Our Process
                <br />
                <span className="font-heading font-normal italic text-[#E31837]">
                  Works
                </span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Dashed connector line (desktop only) */}
              <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-[#1B4FE4]/20" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                {details.processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease,
                    }}
                    className="relative text-center"
                  >
                    {/* Large step number background */}
                    <div className="relative inline-block mb-4">
                      <span className="font-heading text-[80px] md:text-[100px] font-black text-[#F0F0F0] leading-none select-none">
                        {step.step}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#1B4FE4] flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {step.step}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          6. PRICING / ASSESSMENT CTA (red #E31837 bg)
          ============================================ */}
      {details?.pricingCTA && (
        <section className="py-20 bg-[#E31837]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
                {details.pricingCTA.heading}
              </h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
                {details.pricingCTA.description}
              </p>
              <p className="text-white font-heading text-2xl md:text-3xl font-bold mb-8">
                {details.pricingCTA.priceRange}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#E31837] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                {details.pricingCTA.buttonText}
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* ============================================
          7. WHY SPE (dark #1C1C1E bg)
          ============================================ */}
      <section className="py-20 bg-[#1C1C1E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Why Brampton Homeowners
              <br />
              <span className="font-heading font-normal italic text-[#E31837]">
                Choose Superior Power
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Shield,
                title: "Licensed & Certified",
                stat: `ESA ${business.esaLicense}`,
                description:
                  "Every job inspected and certified to Ontario Electrical Safety Code standards.",
              },
              {
                icon: Clock,
                title: "15+ Years Experience",
                stat: "500+ Jobs Completed",
                description:
                  "Serving Brampton and the Greater Toronto Area since 2010 with consistent quality.",
              },
              {
                icon: Star,
                title: "Perfect Reviews",
                stat: `${business.googleReviews.count} Five-Star Reviews`,
                description:
                  "Our reputation speaks for itself. Read what Brampton homeowners say about us.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease,
                }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1B4FE4]/15 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#1B4FE4]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[#E31837] font-heading text-sm font-bold uppercase tracking-wider mb-3">
                  {item.stat}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust bullets + featured review */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="space-y-4"
            >
              {[
                "Upfront pricing with no hidden fees",
                "$49 assessment credited toward your project",
                "Same-day emergency service available",
                "Clean worksite and full cleanup included",
              ].map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1B4FE4]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#1B4FE4]" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <Quote className="w-8 h-8 text-[#1B4FE4]/30 mb-4" />
              <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
                &ldquo;{featuredReview.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">
                  {featuredReview.author}
                </span>
                <span className="text-gray-500 text-xs">Google Review</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          8. FAQ (white bg)
          ============================================ */}
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
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                Frequently Asked
                <br />
                <span className="font-heading font-normal italic text-[#E31837]">
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

      {/* ============================================
          9. RELATED SERVICES (light grey bg)
          ============================================ */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                You Might
                <br />
                <span className="font-heading font-normal italic text-[#E31837]">
                  Also Need
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.slice(0, 3).map((related, index) => {
                const RelatedIcon = iconMap[related.icon] || Zap;
                const relatedImage = serviceImages[related.slug];
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
                      className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#1B4FE4]/30 hover:-translate-y-1 transition-all duration-300"
                    >
                      {relatedImage && (
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={relatedImage}
                            alt={related.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="w-10 h-10 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center mb-3 group-hover:bg-[#1B4FE4]/20 transition-colors">
                          <RelatedIcon className="w-5 h-5 text-[#1B4FE4]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1C1C1E] mb-2 group-hover:text-[#1B4FE4] transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-2">
                          {related.heroDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-4 text-[#1B4FE4] text-sm font-semibold">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          10. FINAL CTA (dark bg)
          ============================================ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#1C1C1E]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, white 30px, white 31px)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31837]/30 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Ready to Book Your
              <br />
              <span className="font-heading font-normal italic text-[#E31837]">
                {service.shortTitle || service.title}?
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Book a $49 on-site assessment for your{" "}
              {service.title.toLowerCase()} project. The fee is credited
              toward your job. ESA licensed, fully insured, and ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#C21430] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                Book Your $49 Assessment
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${business.phoneFull}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white px-10 py-4 rounded-lg font-semibold hover:border-white/50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {business.phone}
              </a>
            </div>
            <p className="mt-6 text-white/25 text-xs uppercase tracking-widest font-heading">
              $49 assessment credited toward your job &middot; ECRA/ESA License{" "}
              {business.esaLicense}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
