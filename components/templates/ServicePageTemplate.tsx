"use client";

import React from "react";
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
import ProcessStepSlider from "@/components/ui/ProcessStepSlider";

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

/** Service-specific "Our Work" gallery photos */
const serviceGalleryPhotos: Record<string, { src: string; alt: string; label: string }[]> = {
  "pot-lights": [
    { src: "/images/instagram/ig-1.webp", alt: "Kitchen pot light installation", label: "Kitchen Pot Lights" },
    { src: "/images/instagram/ig-3.webp", alt: "Kitchen lighting with pot lights", label: "Kitchen Lighting" },
    { src: "/images/instagram/ig-2.webp", alt: "Exterior home lighting", label: "Exterior Lighting" },
  ],
  "panel-upgrades": [
    { src: "/images/instagram/ig-5.webp", alt: "Electrical panel upgrade", label: "Panel Upgrade" },
    { src: "/images/instagram/ig-1.webp", alt: "Kitchen pot light installation", label: "Kitchen Pot Lights" },
    { src: "/images/instagram/ig-2.webp", alt: "Exterior home lighting", label: "Exterior Lighting" },
  ],
  lighting: [
    { src: "/images/instagram/ig-2.webp", alt: "Exterior home lighting", label: "Exterior Lighting" },
    { src: "/images/instagram/ig-4.webp", alt: "Commercial lighting installation", label: "Commercial Lighting" },
    { src: "/images/instagram/ig-3.webp", alt: "Kitchen lighting with pot lights", label: "Kitchen Lighting" },
  ],
  rewiring: [
    { src: "/images/instagram/ig-5.webp", alt: "Electrical panel upgrade", label: "Panel Upgrade" },
    { src: "/images/instagram/ig-1.webp", alt: "Kitchen pot light installation", label: "Kitchen Pot Lights" },
    { src: "/images/instagram/ig-4.webp", alt: "Commercial lighting installation", label: "Commercial Lighting" },
  ],
  "knob-and-tube": [
    { src: "/images/instagram/ig-5.webp", alt: "Electrical panel upgrade", label: "Panel Upgrade" },
    { src: "/images/instagram/ig-3.webp", alt: "Kitchen lighting", label: "Kitchen Lighting" },
    { src: "/images/instagram/ig-2.webp", alt: "Exterior home lighting", label: "Exterior Lighting" },
  ],
  "hot-tub-electrical": [
    { src: "/images/instagram/ig-2.webp", alt: "Exterior home lighting", label: "Exterior Lighting" },
    { src: "/images/instagram/ig-1.webp", alt: "Kitchen pot light installation", label: "Kitchen Pot Lights" },
    { src: "/images/instagram/ig-5.webp", alt: "Electrical panel upgrade", label: "Panel Upgrade" },
  ],
  "ev-charger": [
    { src: "/images/instagram/ig-2.webp", alt: "Exterior home lighting", label: "Exterior Lighting" },
    { src: "/images/instagram/ig-5.webp", alt: "Electrical panel upgrade", label: "Panel Upgrade" },
    { src: "/images/instagram/ig-1.webp", alt: "Kitchen pot light installation", label: "Kitchen Pot Lights" },
  ],
  residential: [
    { src: "/images/instagram/ig-1.webp", alt: "Kitchen pot light installation", label: "Kitchen Pot Lights" },
    { src: "/images/instagram/ig-2.webp", alt: "Exterior home lighting", label: "Exterior Lighting" },
    { src: "/images/instagram/ig-3.webp", alt: "Kitchen lighting", label: "Kitchen Lighting" },
  ],
  commercial: [
    { src: "/images/instagram/ig-4.webp", alt: "Commercial lighting installation", label: "Commercial Lighting" },
    { src: "/images/instagram/ig-5.webp", alt: "Electrical panel upgrade", label: "Panel Upgrade" },
    { src: "/images/instagram/ig-2.webp", alt: "Exterior home lighting", label: "Exterior Lighting" },
  ],
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
  const words = h1.split(" ");
  if (words.length <= 1) return { line1: h1, line2: "" };

  let bestSplit = 1;
  let bestDiff = Infinity;
  for (let i = 1; i < words.length; i++) {
    const l1 = words.slice(0, i).join(" ");
    const l2 = words.slice(i).join(" ");
    const diff = Math.abs(l1.length - l2.length);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestSplit = i;
    }
  }
  return {
    line1: words.slice(0, bestSplit).join(" "),
    line2: words.slice(bestSplit).join(" "),
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
function SectionDivider({ color = "#E31837" }: { color?: string }) {
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

  return (
    <>
      {/* ============================================
          1. HERO - Split Layout (text left, image bg right)
          ============================================ */}
      <section className="relative bg-[#1C1C1E] overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:min-h-[750px]">
          {/* Left column - Text + CTAs */}
          <div className="relative z-10 lg:w-[55%] flex flex-col justify-center pt-24 pb-6 lg:pt-44 lg:pb-24 px-6 sm:px-10 lg:pl-[max(2rem,calc((100vw-72rem)/2+1.5rem))] lg:pr-12">
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
                className="flex items-center gap-2 text-sm text-gray-400 mb-3 lg:mb-8"
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
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#E31837]/15 text-[#E31837] mb-3 lg:mb-6">
                  <ServiceIcon className="w-3.5 h-3.5" />
                  {service.shortTitle || service.title}
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                className="font-heading text-[6.5vw] md:text-5xl lg:text-[46px] font-black text-white uppercase tracking-tight leading-[1.05] lg:whitespace-nowrap"
              >
                {line1}
                <br />
                <span className="text-[#E31837]">
                  {line2}
                </span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="mt-3 lg:mt-5 text-[15px] lg:text-lg text-gray-300 leading-relaxed max-w-lg"
              >
                {service.heroDescription}
              </motion.p>

              {/* Two CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease }}
                className="mt-8 hidden lg:flex flex-col sm:flex-row gap-3"
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
                className="hidden lg:block mt-3.5 font-body text-[13px] text-white/40 tracking-wide"
              >
                $49 credited toward your project &middot; Free remote estimates also available
              </motion.p>
            </div>
          </div>

          {/* Mobile image - full width, no clip-path */}
          <div className="relative lg:hidden w-full h-[260px]">
            <Image
              src={heroBg || heroImage || "/images/services/panel-upgrade.webp"}
              alt={`${service.title} - Superior Power Electric`}
              fill
              className="object-cover object-[55%_center]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#1C1C1E]/20" />
            {/* ESA badge */}
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/50 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 text-[#E31837]" />
              <span className="text-white text-[11px] font-bold tracking-wide">
                ESA/ECRA {business.esaLicense}
              </span>
            </div>
          </div>

          {/* Mobile CTAs - full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="lg:hidden px-6 sm:px-10 pt-6 pb-8 flex flex-col gap-3"
          >
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-[#E31837] text-white px-6 py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#C21430] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2">
                Book Your $49 Assessment
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href={`tel:${business.phoneFull}`}
              className="flex items-center justify-center gap-2 w-full bg-transparent border-2 border-white/25 text-white px-6 py-4 rounded-lg font-semibold text-sm uppercase tracking-wide hover:border-white/50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {business.phone}
            </a>
            <p className="font-body text-[12px] text-white/40 tracking-wide text-center mt-1">
              $49 credited toward your project
            </p>
          </motion.div>

          {/* Desktop image with clip-path */}
          <motion.div
            className="relative hidden lg:block lg:w-[45%]"
            initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <Image
              src={heroBg || heroImage || "/images/services/panel-upgrade.webp"}
              alt={`${service.title} - Superior Power Electric`}
              fill
              className="object-cover object-[55%_center]"
              priority
              quality={95}
              unoptimized={!!heroBg}
              sizes="50vw"
            />
            {/* Gradient blend from dark left into image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E] via-[#1C1C1E]/30 to-transparent lg:w-[40%]" />
            {/* ESA badge */}
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/50 backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 text-[#E31837]" />
              <span className="text-white text-[11px] font-bold tracking-wide">
                ESA/ECRA {business.esaLicense}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          2. TRUST BAR (white bg)
          ============================================ */}
      <section className="py-6 bg-white border-b border-[#F2F0EC]">
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
                <div className="w-10 h-10 rounded-lg bg-[#E31837]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#E31837]" />
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
              <div className="pl-5 border-l-4 border-[#E31837]/30">
                <h2 className="font-heading text-3xl lg:text-4xl font-black text-[#1C1C1E] uppercase tracking-tight mb-6">
                  {service.sections[0]?.heading || `About ${service.title}`}
                </h2>
                <div className="space-y-5">
                  {splitIntoBiteSize(service.sections[0]?.content || "").map(
                    (p, i) => (
                      <p
                        key={i}
                        className="text-[#6B7280] leading-relaxed text-lg md:text-xl"
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
                        className="text-[#6B7280] leading-relaxed text-lg md:text-xl"
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
              className="space-y-6 lg:sticky lg:top-28"
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
              <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
                <Quote className="w-6 h-6 text-[#E31837]/30 mb-3" />
                <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed italic mb-4">
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

      {/* OUR WORK GALLERY */}
      {(serviceGalleryPhotos[service.slug] || serviceGalleryPhotos["residential"]).length > 0 && (
        <section className="py-20 bg-[#F7F7F7]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#E31837] bg-[#E31837]/8 border border-[#E31837]/15 px-4 py-1.5 rounded-full mb-4">
                Our Work
              </span>
              <h2 className="font-heading font-semibold text-[32px] md:text-[44px] text-[#1C1C1E] leading-[1.1]">
                Recent {service.shortTitle || service.title}
                <br />
                <span className="text-[#E31837]">Projects</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {(serviceGalleryPhotos[service.slug] || serviceGalleryPhotos["residential"]).map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease }}
                  className="group relative bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-heading font-medium text-[15px] text-[#1C1C1E]">{photo.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3, ease }}
              className="text-center mt-8"
            >
              <p className="font-body text-[15px] text-[#94a3b8]">
                ESA licensed. ECRA #7014710. Every job inspected and certified.
              </p>
            </motion.div>
          </div>
        </section>
      )}

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
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-12"
            >
              <span className="eyebrow-label">Key Benefits</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                Benefits of Professional
                <br />
                <span className="font-heading font-semibold text-[0.75em] tracking-tight text-[#E31837]">
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
                    className="bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#E31837]/10 flex items-center justify-center mb-5">
                      <BenefitIcon className="w-7 h-7 text-[#E31837]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed">
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
        <section className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-16 md:mb-24"
            >
              <span className="font-body text-[11px] tracking-[0.3em] text-[#E31837] uppercase block mb-4">
                Simple Process
              </span>
              <h2 className="font-heading font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl lg:text-[60px]">
                <span className="text-[#1C1C1E]">How Our Process</span>
                <br />
                <span className="text-[#E31837]">Works</span>
              </h2>
            </motion.div>
            <ProcessStepSlider steps={details.processSteps} />
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
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight mb-6">
                {details.pricingCTA.heading}
              </h2>
              <p className="text-[#64748b] text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
                {details.pricingCTA.description}
              </p>
              <p className="text-[#E31837] font-heading text-3xl font-bold mb-8">
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
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Luxury background - subtle warm gradient */}
          <div className="absolute inset-0 bg-white" />
          {/* Subtle diagonal texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                #1C1C1E 20px,
                #1C1C1E 21px
              )`,
            }}
          />

          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-center mb-16 md:mb-20"
            >
              <span className="eyebrow-label">The Difference</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1C1C1E] uppercase tracking-tight mt-4">
                Without vs. With
              </h2>
              <p className="font-heading font-semibold text-2xl md:text-3xl lg:text-4xl tracking-tight text-[#E31837] mt-2">
                Professional Service
              </p>
              {/* Decorative line */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="h-px w-16 bg-[#E31837]/30" />
                <div className="w-2 h-2 rotate-45 bg-[#E31837]" />
                <div className="h-px w-16 bg-[#E31837]/30" />
              </div>
            </motion.div>

            {/* Two-column comparison */}
            <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/8">

              {/* WITHOUT card - dark, danger aesthetic */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="relative bg-[#1C1C1E] p-8 md:p-10"
              >
                {/* Red accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E31837] via-[#ff3350] to-[#E31837]" />
                {/* Subtle radial glow */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#E31837]/5 rounded-full blur-3xl" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-xl bg-[#E31837]/15 border border-[#E31837]/20 flex items-center justify-center">
                      <X className="w-7 h-7 text-[#E31837]" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                      Without Professional Help
                    </h3>
                  </div>

                  {/* Items - mobile short copy */}
                  <ul className="space-y-4 md:hidden">
                    {(details.beforeAfter.mobileWithoutItems ?? details.beforeAfter.withoutItems).map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease }}
                        className="flex items-start gap-3 group"
                      >
                        <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#E31837]/10 border border-[#E31837]/20 flex items-center justify-center">
                          <X className="w-3.5 h-3.5 text-[#E31837]" />
                        </span>
                        <span className="text-white/70 text-base leading-snug">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  {/* Items - desktop full copy */}
                  <ul className="hidden md:block space-y-5">
                    {details.beforeAfter.withoutItems.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease }}
                        className="flex items-start gap-4 group"
                      >
                        <span className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-[#E31837]/10 border border-[#E31837]/20 flex items-center justify-center group-hover:bg-[#E31837]/20 transition-colors duration-300">
                          <X className="w-4 h-4 text-[#E31837]" />
                        </span>
                        <span className="text-white/70 text-xl leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* WITH card - light, premium, aspirational */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="relative bg-white p-8 md:p-10"
              >
                {/* Blue accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E31837] via-[#3b6ff7] to-[#E31837]" />
                {/* Subtle radial glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31837]/5 rounded-full blur-3xl" />
                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#E31837]/5 to-transparent" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-xl bg-[#E31837]/10 border border-[#E31837]/15 flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-[#E31837]" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1C1C1E] uppercase tracking-wide">
                      With Superior Power Electric
                    </h3>
                  </div>

                  {/* Items - mobile short copy */}
                  <ul className="space-y-4 md:hidden">
                    {(details.beforeAfter.mobileWithItems ?? details.beforeAfter.withItems).map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease }}
                        className="flex items-start gap-3 group"
                      >
                        <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#E31837]/10 border border-[#E31837]/15 flex items-center justify-center">
                          <CheckCircle className="w-3.5 h-3.5 text-[#E31837]" />
                        </span>
                        <span className="text-[#4B5563] text-base leading-snug">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  {/* Items - desktop full copy */}
                  <ul className="hidden md:block space-y-5">
                    {details.beforeAfter.withItems.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease }}
                        className="flex items-start gap-4 group"
                      >
                        <span className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-[#E31837]/10 border border-[#E31837]/15 flex items-center justify-center group-hover:bg-[#E31837]/20 transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-[#E31837]" />
                        </span>
                        <span className="text-[#4B5563] text-xl leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          9. WHY SPE - Bento Grid (white bg)
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="flex flex-col gap-4 items-start mb-12"
          >
            <span className="eyebrow-label">Why Choose Us</span>
            <div>
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                Why Brampton Homeowners
              </h2>
              <p className="font-heading font-semibold text-xl sm:text-2xl lg:text-[30px] tracking-tight text-[#E31837] uppercase leading-[1.1] mt-1">
                Choose Superior Power
              </p>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 - Licensed & Certified (wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="bg-white rounded-2xl lg:col-span-2 p-8 md:p-10 flex justify-between flex-col min-h-[280px] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <Shield className="w-8 h-8 text-[#E31837] stroke-1 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="text-[#E31837] font-heading text-xs font-bold uppercase tracking-wider mb-2">
                  ESA {business.esaLicense}
                </p>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1C1C1E] uppercase tracking-tight mb-2">
                  Licensed & Certified
                </h3>
                <p className="text-[#64748b] max-w-md text-lg md:text-xl leading-relaxed">
                  Every job inspected and certified to Ontario Electrical Safety Code standards.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - 15+ Years (tall) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="bg-white rounded-2xl p-8 flex justify-between flex-col min-h-[280px] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <Clock className="w-8 h-8 text-[#E31837] stroke-1 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="text-[#E31837] font-heading text-xs font-bold uppercase tracking-wider mb-2">
                  500+ Jobs Completed
                </p>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1C1C1E] uppercase tracking-tight mb-2">
                  15+ Years Experience
                </h3>
                <p className="text-[#64748b] max-w-xs text-lg md:text-xl leading-relaxed">
                  Serving Brampton and the Greater Toronto Area since 2020 with consistent quality.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Perfect Reviews (tall) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="bg-white rounded-2xl p-8 flex justify-between flex-col min-h-[280px] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <Star className="w-8 h-8 text-[#E31837] stroke-1 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="text-[#E31837] font-heading text-xs font-bold uppercase tracking-wider mb-2">
                  {business.googleReviews.count} Five-Star Reviews
                </p>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1C1C1E] uppercase tracking-tight mb-2">
                  Perfect Reviews
                </h3>
                <p className="text-[#64748b] max-w-xs text-lg md:text-xl leading-relaxed">
                  Our reputation speaks for itself. Read what Brampton homeowners say about us.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Trust Promises (wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="bg-white rounded-2xl lg:col-span-2 p-8 md:p-10 flex justify-between flex-col min-h-[280px] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <Award className="w-8 h-8 text-[#E31837] stroke-1 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1C1C1E] uppercase tracking-tight mb-4">
                  Our Promise to You
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Upfront, no-surprise pricing",
                    "$49 assessment credited to job",
                    "Same-day emergency service",
                    "Clean worksite guaranteed",
                  ].map((bullet, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-[#E31837] flex-shrink-0 mt-1" />
                      <p className="text-[#64748b] text-lg md:text-xl leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured review below grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="mt-5 bg-white rounded-2xl p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Quote className="w-8 h-8 text-[#E31837]/30 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-[#4B5563] text-lg md:text-xl leading-relaxed italic">
                  &ldquo;{featuredReview.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          10. FAQ (white bg)
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
              <span className="eyebrow-label">Common Questions</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                Frequently Asked
                <br />
                <span className="font-heading font-semibold text-[0.75em] tracking-tight text-[#E31837]">
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

      <SectionDivider color="#E31837" />

      {/* ============================================
          11. SCROLLING TESTIMONIALS (white bg)
          ============================================ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <span className="eyebrow-label">Real Reviews</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
              What Homeowners
              <br />
              <span className="font-heading font-semibold text-[0.75em] tracking-tight text-[#E31837]">
                Are Saying
              </span>
            </h2>
            <div className="inline-flex items-center gap-3 mt-6 px-5 py-2.5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]">
              <img src="/images/g-icon.webp" alt="Google" className="h-5 w-auto" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-heading font-bold text-[#1C1C1E] text-lg">{business.googleReviews.rating}</span>
              <span className="text-[#64748b] text-sm font-body">{business.googleReviews.count} reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Scrolling columns */}
        <div
          className="flex justify-center gap-5 max-h-[680px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* Column 1 */}
          <div className="hidden lg:block">
            <motion.div
              animate={{ translateY: "-50%" }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear", repeatType: "loop" }}
              className="flex flex-col gap-5 pb-5"
            >
              {[...Array(2)].map((_, dupIdx) => (
                <React.Fragment key={dupIdx}>
                  {testimonials.slice(0, 5).map((t, i) => (
                    <div
                      key={`${dupIdx}-${i}`}
                      className="w-[340px] p-7 rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, si) => (
                            <Star key={si} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[#374151] text-lg leading-relaxed font-body mb-5">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-[#F2F0EC]">
                        <div className="w-9 h-9 rounded-full bg-[#E31837] flex items-center justify-center shrink-0">
                          <span className="text-white text-[11px] font-bold font-heading">
                            {t.name.split(" ").map((n: string) => n[0]).join("").toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <span className="font-heading text-sm font-bold uppercase text-[#1C1C1E] tracking-tight block">{t.name}</span>
                          <span className="text-[11px] text-[#94a3b8]">Google Review</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Column 2 */}
          <div>
            <motion.div
              animate={{ translateY: "-50%" }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear", repeatType: "loop" }}
              className="flex flex-col gap-5 pb-5"
            >
              {[...Array(2)].map((_, dupIdx) => (
                <React.Fragment key={dupIdx}>
                  {testimonials.slice(5, 10).map((t, i) => (
                    <div
                      key={`${dupIdx}-${i}`}
                      className="w-[340px] p-7 rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, si) => (
                            <Star key={si} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[#374151] text-lg leading-relaxed font-body mb-5">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-[#F2F0EC]">
                        <div className="w-9 h-9 rounded-full bg-[#E31837] flex items-center justify-center shrink-0">
                          <span className="text-white text-[11px] font-bold font-heading">
                            {t.name.split(" ").map((n: string) => n[0]).join("").toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <span className="font-heading text-sm font-bold uppercase text-[#1C1C1E] tracking-tight block">{t.name}</span>
                          <span className="text-[11px] text-[#94a3b8]">Google Review</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="hidden md:block">
            <motion.div
              animate={{ translateY: "-50%" }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear", repeatType: "loop" }}
              className="flex flex-col gap-5 pb-5"
            >
              {[...Array(2)].map((_, dupIdx) => (
                <React.Fragment key={dupIdx}>
                  {testimonials.slice(10, 15).map((t, i) => (
                    <div
                      key={`${dupIdx}-${i}`}
                      className="w-[340px] p-7 rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, si) => (
                            <Star key={si} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[#374151] text-lg leading-relaxed font-body mb-5">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-[#F2F0EC]">
                        <div className="w-9 h-9 rounded-full bg-[#E31837] flex items-center justify-center shrink-0">
                          <span className="text-white text-[11px] font-bold font-heading">
                            {t.name.split(" ").map((n: string) => n[0]).join("").toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <span className="font-heading text-sm font-bold uppercase text-[#1C1C1E] tracking-tight block">{t.name}</span>
                          <span className="text-[11px] text-[#94a3b8]">Google Review</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA below columns */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-10"
          >
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJw_EMMkEZK4gRlraWiwcAOnY"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border-2 border-[#E31837] text-[#E31837] font-heading text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#E31837] hover:text-white hover:shadow-[0_8px_24px_rgba(27,79,228,0.25)] group"
            >
              <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto" />
              Read All {business.googleReviews.count} Reviews
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          12. RELATED SERVICES (light grey bg)
          ============================================ */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-12"
            >
              <span className="eyebrow-label">Related Services</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-[#1C1C1E] uppercase tracking-tight">
                You Might
                <br />
                <span className="font-heading font-semibold text-[0.75em] tracking-tight text-[#E31837]">
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
                      className="group block bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
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
                        <div className="w-10 h-10 rounded-lg bg-[#E31837]/10 flex items-center justify-center mb-3 group-hover:bg-[#E31837]/20 transition-colors">
                          <RelatedIcon className="w-5 h-5 text-[#E31837]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1C1C1E] mb-2 group-hover:text-[#E31837] transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-[#9CA3AF] text-lg md:text-xl leading-relaxed line-clamp-2">
                          {related.heroDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-4 text-[#E31837] text-sm font-semibold">
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
            <h2 className="font-heading text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Ready to Book Your
              <br />
              <span className="font-heading font-semibold text-[0.75em] tracking-tight text-[#E31837]">
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
