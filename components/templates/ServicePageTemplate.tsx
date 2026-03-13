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
  X,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/business";
import type { Service } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import { reviews } from "@/data/reviews";
import { testimonials } from "@/data/testimonials";
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

const heroBackgrounds: Record<string, string> = {
  "panel-upgrades": "/images/services/panel-upgrade-hero.webp",
};

const serviceImages: Record<string, string> = {
  "panel-upgrades": "/images/services/panel-upgrade.webp",
  "pot-lights": "/images/services/pot-lights.webp",
  "ev-charger": "/images/services/ev-charger.jpg",
  residential: "/images/services/residential.webp",
  commercial: "/images/services/commercial.webp",
  rewiring: "/images/services/rewiring.webp",
  "hot-tub-electrical": "/images/services/hot-tub.webp",
  lighting: "/images/services/lighting.webp",
  "knob-and-tube": "/images/services/knob-tube.webp",
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

/**
 * Split long text into bite-size paragraphs (~2 sentences each).
 */
function splitIntoBiteSize(text: string): string[] {
  const rawParagraphs = text.split("\n\n").filter(Boolean);
  const result: string[] = [];
  for (const para of rawParagraphs) {
    if (para.length <= 200) {
      result.push(para);
      continue;
    }
    const sentences = para.match(/[^.!?]+[.!?]+/g) || [para];
    for (let i = 0; i < sentences.length; i += 2) {
      const chunk = (sentences[i] + (sentences[i + 1] || "")).trim();
      if (chunk) result.push(chunk);
    }
  }
  return result.length > 0 ? result : [text];
}

/**
 * Auto-bold the first numeric stat in text (e.g. "47", "$2,000", "75%").
 */
function renderWithBoldStats(text: string): React.ReactNode {
  const match = text.match(
    /(\$?[\d,]+(?:[.-]\d+)?[%xX+]?(?:\s?(?:hours?|days?|years?|jobs?))?)/
  );
  if (!match || match.index === undefined) return text;
  const before = text.slice(0, match.index);
  const stat = match[0];
  const after = text.slice(match.index + stat.length);
  return (
    <>
      {before}
      <strong className="text-[#1C1C1E] font-bold">{stat}</strong>
      {after}
    </>
  );
}

/** Gradient divider line between sections */
function SectionDivider({ color = "#1B4FE4" }: { color?: string }) {
  return (
    <div
      className="h-px w-full"
      style={{
        background: `linear-gradient(to right, transparent, ${color}40 30%, ${color}40 70%, transparent)`,
      }}
    />
  );
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
  const heroBg = heroBackgrounds[service.slug];
  const featuredReview = getServiceReview(service.slug);
  const details = serviceDetails[service.slug];
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* ============================================
          1. HERO - Split Layout (text left, image bg right)
          ============================================ */}
      <section className="relative bg-[#1C1C1E] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[650px] lg:min-h-[750px]">
          {/* Left column - Text + CTAs */}
          <div className="relative z-10 lg:w-[55%] flex flex-col justify-center pt-36 pb-16 lg:pt-44 lg:pb-24 px-6 sm:px-10 lg:pl-[max(2rem,calc((100vw-72rem)/2+1.5rem))] lg:pr-12">
            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative">
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
                className="font-heading text-4xl md:text-5xl lg:text-[46px] font-black text-white uppercase tracking-tight leading-[1.05] lg:whitespace-nowrap"
              >
                {line1}
                <br />
                <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
                  {line2}
                </span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="mt-5 text-lg text-gray-300 leading-relaxed max-w-lg"
              >
                {service.heroDescription}
              </motion.p>

              {/* Two CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-6 py-3.5 rounded-lg font-bold text-sm whitespace-nowrap hover:bg-[#C21430] transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  Book Your $49 Assessment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${business.phoneFull}`}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/25 text-white px-6 py-3.5 rounded-lg font-semibold text-sm whitespace-nowrap hover:border-white/50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call {business.phone}
                </a>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-3.5 font-body text-[13px] text-white/40 tracking-wide"
              >
                $49 credited toward your project &middot; Free remote estimates also available
              </motion.p>
            </div>
          </div>

          {/* Right column - Full background image */}
          <div className="relative lg:w-[45%] min-h-[300px] lg:min-h-0">
            <Image
              src={heroBg || heroImage || "/images/services/panel-upgrade.webp"}
              alt={`${service.title} - Superior Power Electric`}
              fill
              className="object-cover object-[55%_center]"
              priority
              quality={95}
              unoptimized={!!heroBg}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient blend from dark left into image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E] via-[#1C1C1E]/30 to-transparent lg:w-[40%]" />
            {/* Bottom gradient for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/60 via-transparent to-transparent lg:hidden" />
            {/* ESA badge */}
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/50 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 text-[#1B4FE4]" />
              <span className="text-white text-[11px] font-bold tracking-wide">
                ESA/ECRA {business.esaLicense}
              </span>
            </div>
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
          4. OVERVIEW (white bg) - ENHANCED bite-size text
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
              {/* First section with accent border */}
              <div className="pl-5 border-l-4 border-[#1B4FE4]/30">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-[#1C1C1E] uppercase tracking-tight mb-6">
                  {service.sections[0]?.heading || `About ${service.title}`}
                </h2>
                <div className="space-y-5">
                  {splitIntoBiteSize(service.sections[0]?.content || "").map(
                    (p, i) => (
                      <p
                        key={i}
                        className="text-[#6B7280] leading-relaxed text-base md:text-lg"
                      >
                        {renderWithBoldStats(p)}
                      </p>
                    )
                  )}
                </div>
              </div>

              {/* Additional content sections */}
              {service.sections.slice(1).map((section, idx) => (
                <div key={idx} className="mt-10">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1C1C1E] uppercase tracking-tight mb-5">
                    {section.heading}
                  </h3>
                  <div className="space-y-5">
                    {splitIntoBiteSize(section.content).map((p, i) => (
                      <p
                        key={i}
                        className="text-[#6B7280] leading-relaxed text-base md:text-lg"
                      >
                        {renderWithBoldStats(p)}
                      </p>
                    ))}
                  </div>
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
                  <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Strip after overview - ENHANCED */}
      <section className="py-12 md:py-14 bg-[#E31837]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-white text-xl md:text-2xl font-bold mb-5">
              Need {service.shortTitle || service.title}? Book your $49
              assessment today. Credited toward your project.
            </p>
            <a
              href={`tel:${business.phoneFull}`}
              className="inline-flex items-center gap-2 bg-white text-[#E31837] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E31837]/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <Phone className="w-5 h-5" />
              Call {business.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          5. BENEFITS GRID (light grey #F8F9FA bg)
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
              <span className="eyebrow-label">Key Benefits</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                Benefits of Professional
                <br />
                <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
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
          6. PROCESS (white bg) + HowTo JSON-LD
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
              <span className="eyebrow-label">How It Works</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                How Our Process
                <br />
                <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
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
          7. PRICING / ASSESSMENT CTA (white bg, red accent card)
          ============================================ */}
      {details?.pricingCTA && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="bg-white shadow-lg rounded-xl p-8 md:p-12 border-l-4 border-[#E31837] text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1a2975] uppercase tracking-tight mb-6">
                {details.pricingCTA.heading}
              </h2>
              <p className="text-[#64748b] text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
                {details.pricingCTA.description}
              </p>
              <p className="text-[#E31837] font-heading text-2xl md:text-3xl font-bold mb-8">
                {details.pricingCTA.priceRange}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E31837] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#C21430] transition-colors relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                {details.pricingCTA.buttonText}
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      )}

      <SectionDivider color="#E31837" />

      {/* ============================================
          8. BEFORE / AFTER COMPARISON (light grey bg) ** NEW **
          ============================================ */}
      {details?.beforeAfter && (
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-12"
            >
              <span className="eyebrow-label">The Difference</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                Without vs. With
                <br />
                <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
                  Professional Service
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* WITHOUT card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="bg-white rounded-xl p-8 border-2 border-red-200 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E31837]" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-5 h-5 text-[#E31837]" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#1C1C1E] uppercase">
                    Without Professional Help
                  </h3>
                </div>
                <ul className="space-y-4">
                  {details.beforeAfter.withoutItems.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.08, ease }}
                      className="flex items-start gap-3"
                    >
                      <X className="w-4 h-4 text-[#E31837] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7280] text-sm leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* WITH card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="bg-white rounded-xl p-8 border-2 border-blue-200 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#1B4FE4]" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#1B4FE4]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#1B4FE4]" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#1C1C1E] uppercase">
                    With Superior Power Electric
                  </h3>
                </div>
                <ul className="space-y-4">
                  {details.beforeAfter.withItems.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.08, ease }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-[#1B4FE4] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7280] text-sm leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          9. WHY SPE (light grey #F8F9FA bg)
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <span className="eyebrow-label">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1a2975] uppercase tracking-tight">
              Why Brampton Homeowners
              <br />
              <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
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
                className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1B4FE4]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#1B4FE4]" />
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1E] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#E31837] font-heading text-sm font-bold uppercase tracking-wider mb-3">
                  {item.stat}
                </p>
                <p className="text-[#64748b] text-sm leading-relaxed">
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
                  <p className="text-[#64748b] text-sm leading-relaxed">
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
              className="bg-[#F8F9FA] border border-gray-100 shadow-sm rounded-xl p-8"
            >
              <Quote className="w-8 h-8 text-[#1B4FE4]/30 mb-4" />
              <p className="text-[#4B5563] text-base leading-relaxed mb-6 italic">
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
                <span className="text-[#1C1C1E] font-bold text-sm">
                  {featuredReview.author}
                </span>
                <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          10. FAQ (white bg)
          ============================================ */}
      {service.faqs.length > 0 && (
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-12"
            >
              <span className="eyebrow-label">Common Questions</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                Frequently Asked
                <br />
                <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
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

      <SectionDivider color="#1B4FE4" />

      {/* ============================================
          11. TESTIMONIAL CAROUSEL (light grey bg) ** NEW **
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <span className="eyebrow-label">Real Reviews</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
              What Homeowners
              <br />
              <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
                Are Saying
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease,
                }}
                className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-100 flex flex-col"
              >
                <Quote className="w-8 h-8 text-[#1B4FE4]/20 mb-4 flex-shrink-0" />
                <p className="text-[#4B5563] text-sm leading-relaxed italic mb-6 flex-1 line-clamp-5">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-[#1C1C1E] font-bold text-sm">
                    {testimonial.name}
                  </span>
                  <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto ml-auto" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google review link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-[#9CA3AF] text-sm">
              {business.googleReviews.count} five-star reviews on Google &middot;{" "}
              <span className="text-[#1B4FE4] font-semibold">
                {business.googleReviews.rating} average rating
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          12. RELATED SERVICES (light grey bg)
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
              <span className="eyebrow-label">Related Services</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                You Might
                <br />
                <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
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
          13. FINAL CTA (dark bg)
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
              <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
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
