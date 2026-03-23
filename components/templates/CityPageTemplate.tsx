"use client";

import Image from "next/image";
import Link from "next/link";
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
  Check,
  Users,
  Home,
  Wrench,
  Award,
  Building2,
  CalendarDays,
  FileCheck,
  Lightbulb,
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { FAQ } from "@/components/ui/FAQ";
import { reviews } from "@/data/reviews";
import { testimonials } from "@/data/testimonials";
import { getCityBySlug } from "@/data/cities";
import type { CityPage } from "@/data/cities";

const ease = [0.625, 0.05, 0, 1] as const;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  Shield,
  Star,
  Zap,
  MapPin,
  Check,
  Users,
  Home,
  Wrench,
  Award,
  Phone,
  Building2,
  Lightbulb,
  CalendarDays,
  FileCheck,
};

/** Gradient divider between sections */
function SectionDivider() {
  return (
    <div
      className="h-px w-full"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(227,24,55,0.2) 30%, rgba(227,24,55,0.2) 70%, transparent)",
      }}
    />
  );
}

/** Return 3 unique testimonials per city using slug hash */
function getCityTestimonials(slug: string, count: number = 3) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash + slug.charCodeAt(i)) | 0;
  }
  const start = Math.abs(hash) % testimonials.length;
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(testimonials[(start + i) % testimonials.length]);
  }
  return result;
}

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

interface CityPageTemplateProps {
  city: CityPage;
}

export function CityPageTemplate({ city }: CityPageTemplateProps) {
  const { line1, line2 } = splitHeadline(city.h1);
  const cityTestimonials = getCityTestimonials(city.slug);

  const relatedCitiesData = city.relatedCities
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is CityPage => c !== undefined);

  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 - HERO (unchanged)                                 */}
      {/* ============================================================ */}
      <section className="relative bg-[#1C1C1E] overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:min-h-[750px]">
          <div className="relative z-10 lg:w-[55%] flex flex-col justify-center pt-24 pb-6 lg:pt-44 lg:pb-24 px-6 sm:px-10 lg:pl-[max(2rem,calc((100vw-72rem)/2+1.5rem))] lg:pr-12">
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
              <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
                className="flex items-center gap-1.5 text-[13px] text-gray-400 mb-4 lg:mb-10"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/90">{city.name}</span>
              </motion.nav>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                className="font-heading font-black text-[9vw] md:text-[64px] lg:text-[72px] text-white uppercase tracking-[-0.02em] leading-[1.05] max-w-2xl"
              >
                {line1}
                <br />
                <span className="text-[#E31837]">
                  {line2}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="font-body text-[15px] lg:text-[18px] text-gray-300 mt-3 lg:mt-6 max-w-lg leading-relaxed"
              >
                {city.heroSubhead}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="mt-10 hidden lg:flex flex-col sm:flex-row gap-4"
              >
                <ShimmerButton href="/contact">Book Your $49 Assessment</ShimmerButton>
                <a
                  href="tel:+19054528439"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-8 py-4 font-body text-[15px] font-semibold uppercase tracking-[0.05em] text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5"
                >
                  <Phone className="w-5 h-5" />
                  Call (905) 452-8439
                </a>
              </motion.div>
            </div>
          </div>

          {/* Mobile image - full width, no clip-path */}
          <div className="relative lg:hidden w-full h-[300px]">
            <Image
              src={city.heroImage}
              alt={`Electrician serving ${city.name}`}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#1C1C1E]/20" />
          </div>

          {/* Mobile buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:hidden px-6 sm:px-10 pt-6 pb-8 flex flex-col gap-3"
          >
            <ShimmerButton href="/contact" className="w-full">Book Your $49 Assessment</ShimmerButton>
            <a
              href="tel:+19054528439"
              className="flex items-center justify-center gap-2 w-full rounded-lg border-2 border-white/30 bg-transparent px-8 py-4 font-body text-[15px] font-semibold uppercase tracking-[0.05em] text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5"
            >
              <Phone className="w-5 h-5" />
              Call (905) 452-8439
            </a>
          </motion.div>

          {/* Desktop image with clip-path */}
          <motion.div
            className="relative hidden lg:block lg:w-[45%]"
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)" }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <Image
              src={city.heroImage}
              alt={`Electrician serving ${city.name}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#1C1C1E]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E] via-[#1C1C1E]/40 to-transparent lg:w-[45%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/60 via-transparent to-transparent lg:hidden" />
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <div className="bg-gradient-to-r from-[#1C1C1E] via-[#222326] to-[#1C1C1E] border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { text: "ESA Licensed", icon: Shield },
                  { text: "Fully Insured", icon: Award },
                  { text: "Next-Day Service", icon: Clock },
                  { text: "5.0\u2605 Google Rated", icon: Star },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-9 h-9 rounded-lg bg-[#E31837]/15 flex items-center justify-center group-hover:bg-[#E31837]/25 transition-colors duration-300">
                        <span className="text-base leading-none" role="img" aria-label="electric">&#9889;</span>
                      </div>
                    </div>
                    <span className="font-body text-[14px] md:text-[15px] font-semibold text-white/90 tracking-wide">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 - LOCAL INTRO (white)                              */}
      {/* ============================================================ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1] mb-12"
          >
            Superior Power Electric
            <br />
            <span className="text-[#E31837]">{city.name}&apos;s Trusted Electrician</span>
          </motion.h2>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left - Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="lg:col-span-3 space-y-6"
            >
              {city.introCopy.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-[17px] text-[#64748b] leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Right - Quick Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] p-8">
                <h3 className="font-heading font-medium text-[22px] md:text-[28px] text-[#1C1C1E] mb-6">
                  Quick Stats
                </h3>
                <ul className="space-y-5">
                  {[
                    { icon: Zap, label: <><strong>{city.jobsCompleted}+</strong> jobs completed in {city.name}</> },
                    { icon: Star, label: <><strong>5.0</strong> average rating</> },
                    { icon: Check, label: <>ESA Licensed &amp; Insured</> },
                    { icon: Clock, label: <><strong>{city.responseTime}</strong> service</> },
                    { icon: MapPin, label: <>Serving all of <strong>{city.name}</strong></> },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="w-4.5 h-4.5 text-[#E31837]" />
                      </div>
                      <span className="font-body text-[15px] text-[#1C1C1E]">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-[12px] text-[#94a3b8] mt-6 pt-5 border-t border-gray-50">
                  Based on 47 verified Google reviews
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 3 - COMMON ELECTRICAL ISSUES (light grey)            */}
      {/* ============================================================ */}
      {city.localChallenges && city.localChallenges.length > 0 && (
        <section className="bg-[#F7F7F7] py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <span className="eyebrow-label">Local Electrical Challenges</span>
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
                Common Electrical Issues
                <br />
                <span className="text-[#E31837]">in {city.name}</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {city.localChallenges.map((challenge, index) => {
                const ChallengeIcon = iconMap[challenge.icon] || Zap;
                return (
                  <motion.div
                    key={challenge.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease }}
                    className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E31837] to-[#FF4D6A] flex items-center justify-center flex-shrink-0 shadow-[0_4px_15px_rgba(227,24,55,0.25)]">
                        <ChallengeIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-[18px] md:text-[20px] text-[#1C1C1E] mb-3">
                          {challenge.title}
                        </h3>
                        <p className="font-body text-[15px] text-[#64748b] leading-[1.8]">
                          {challenge.description}
                        </p>
                        {challenge.relatedService && (
                          <Link
                            href={`/services/${challenge.relatedService}`}
                            className="inline-flex items-center gap-1.5 mt-4 text-[#E31837] text-[14px] font-semibold font-body hover:underline"
                          >
                            Learn More
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 4 - TOP SERVICES IN [CITY] (white)                   */}
      {/* ============================================================ */}
      {city.topServicesLocal && city.topServicesLocal.length > 0 && (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <span className="eyebrow-label">Services in {city.name}</span>
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
                Electrical Services
                <br />
                <span className="text-[#E31837]">Tailored for {city.name}</span>
              </h2>
              <p className="font-body text-[15px] text-[#94a3b8] mt-3">
                ESA Licensed. ECRA #7014710. Every job inspected and certified.
              </p>
            </motion.div>

            {/* First 2 cards side by side (larger) */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {city.topServicesLocal.slice(0, 2).map((svc, index) => (
                <motion.div
                  key={svc.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease }}
                >
                  <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 h-full border border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center mb-5">
                      <Zap className="w-6 h-6 text-[#E31837]" />
                    </div>
                    <h3 className="font-heading font-semibold text-[20px] md:text-[22px] text-[#1C1C1E] mb-4">
                      {svc.title}
                    </h3>
                    <p className="font-body text-[15px] text-[#64748b] leading-[1.8] mb-6">
                      {svc.localContext}
                    </p>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-2 bg-[#E31837] text-white text-[13px] font-semibold font-body uppercase tracking-wider px-5 py-2.5 rounded-lg hover:bg-[#FF4D6A] transition-colors duration-300"
                    >
                      Book This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Remaining 3 cards in a row */}
            <div className="grid md:grid-cols-3 gap-6">
              {city.topServicesLocal.slice(2).map((svc, index) => (
                <motion.div
                  key={svc.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease }}
                >
                  <div className="bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 h-full border border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center mb-4">
                      <Zap className="w-5 h-5 text-[#E31837]" />
                    </div>
                    <h3 className="font-heading font-semibold text-[18px] text-[#1C1C1E] mb-3">
                      {svc.title}
                    </h3>
                    <p className="font-body text-[15px] text-[#64748b] leading-[1.8] mb-5">
                      {svc.localContext}
                    </p>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-2 text-[#E31837] text-[13px] font-semibold font-body hover:underline"
                    >
                      Book This Service
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="text-center mt-14"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-body text-[#E31837] font-semibold text-[15px] hover:underline"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 5 - HOUSING HISTORY TIMELINE (light grey)            */}
      {/* ============================================================ */}
      {city.housingEras && city.housingEras.length > 0 && (
        <section className="bg-[#F7F7F7] py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <span className="eyebrow-label">{city.name} Housing Stock</span>
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
                Your Home&apos;s
                <br />
                <span className="text-[#E31837]">Electrical History</span>
              </h2>
              <p className="font-body text-[16px] text-[#94a3b8] mt-3 max-w-2xl mx-auto">
                Understanding your home&apos;s era helps us diagnose issues faster and recommend the right solutions.
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical red connecting line - desktop only */}
              <div className="hidden md:block absolute left-[200px] top-4 bottom-4 w-px bg-gradient-to-b from-[#E31837]/40 via-[#E31837]/20 to-transparent" />

              <div className="space-y-8 md:space-y-10">
                {city.housingEras.map((era, index) => (
                  <motion.div
                    key={era.era}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease }}
                    className="relative"
                  >
                    <div className="flex flex-col md:flex-row md:gap-12">
                      {/* Left: era name + years badge */}
                      <div className="md:w-[200px] flex-shrink-0 mb-4 md:mb-0 relative">
                        {/* Red dot on connecting line */}
                        <div className="hidden md:block absolute right-[-6px] top-3 w-3 h-3 rounded-full bg-[#E31837] shadow-[0_0_8px_rgba(227,24,55,0.4)]" />
                        <h3 className="font-heading font-bold text-[18px] text-[#1C1C1E]">
                          {era.era}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 mt-2 bg-[#E31837]/10 rounded-full text-[#E31837] text-[12px] font-semibold font-body">
                          <CalendarDays className="w-3 h-3" />
                          {era.years}
                        </span>
                      </div>

                      {/* Right: description + electrical needs */}
                      <div className="flex-1 bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
                        <p className="font-body text-[15px] text-[#64748b] leading-[1.8] mb-5">
                          {era.description}
                        </p>
                        <ul className="space-y-2.5">
                          {era.electricalNeeds.map((need, needIndex) => (
                            <li key={needIndex} className="flex items-start gap-2.5">
                              <Check className="w-4 h-4 text-[#E31837] flex-shrink-0 mt-0.5" />
                              <span className="font-body text-[14px] text-[#1C1C1E]">{need}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SECTION 6 - OUR RECENT WORK GALLERY (light grey)             */}
      {/* ============================================================ */}
      <section className="bg-[#F7F7F7] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-14"
          >
            <span className="eyebrow-label">Our Work</span>
            <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
              Recent Projects
              <br />
              <span className="text-[#E31837]">in {city.name}</span>
            </h2>
            <p className="font-body text-[17px] text-[#64748b] mt-4 max-w-xl mx-auto">
              Real work from our team - residential, commercial, and everything in between.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: "/images/shaun-panel-work.webp", alt: "Shaun working on electrical panel upgrade", label: "Panel Upgrade" },
              { src: "/images/instagram/ig-1.webp", alt: "Kitchen pot light installation", label: "Kitchen Pot Lights" },
              { src: "/images/shaun-residential-work.webp", alt: "Shaun performing residential electrical work", label: "Residential Work" },
              { src: "/images/instagram/ig-2.webp", alt: "Exterior home lighting", label: "Exterior Lighting" },
              { src: "/images/shaun-inspection.webp", alt: "Shaun inspecting home electrical system", label: "Electrical Inspection" },
              { src: "/images/shaun-panel-closeup.webp", alt: "Shaun working on panel closeup", label: "Panel Closeup" },
            ].map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease }}
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
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 - NEIGHBOURHOODS + GOOGLE MAPS (white) - ENHANCED  */}
      {/* ============================================================ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <span className="eyebrow-label">Service Area</span>
            <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
              We Service All of {city.name}
            </h2>
            <p className="font-body text-[16px] text-[#94a3b8] mt-3">
              Average {city.responseMinutes}-minute response across all {city.name} neighbourhoods
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {city.mapEmbedUrl && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
              >
                <div className="rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
                  <iframe
                    src={city.mapEmbedUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Superior Power Electric service area in ${city.name}`}
                  />
                </div>
              </motion.div>
            )}

            <div>
              {/* Neighbourhood Cluster Cards */}
              {city.neighborhoodHighlights && city.neighborhoodHighlights.length > 0 ? (
                <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
                  {city.neighborhoodHighlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.cluster}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08, ease }}
                      className="bg-[#F7F7F7] rounded-2xl p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
                    >
                      <h3 className="font-heading font-bold text-[16px] text-[#1C1C1E] mb-3">
                        {highlight.cluster}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {highlight.neighborhoods.map((n) => (
                          <span
                            key={n}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-[#1C1C1E] text-[12px] font-semibold font-body shadow-sm"
                          >
                            <MapPin className="w-2.5 h-2.5 text-[#E31837]" />
                            {n}
                          </span>
                        ))}
                      </div>
                      <p className="font-body text-[13px] text-[#64748b] leading-relaxed">
                        {highlight.topService}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {city.neighborhoods.map((neighborhood, index) => (
                    <motion.span
                      key={neighborhood}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.04, ease }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F7F7F7] rounded-full text-[#1C1C1E] text-[13px] font-semibold font-body shadow-sm hover:bg-[#E31837]/5 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      <MapPin className="w-3 h-3 text-[#E31837]" />
                      {neighborhood}
                    </motion.span>
                  ))}
                </div>
              )}

              {city.postalCodes && city.postalCodes.length > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease }}
                  className="text-sm text-[#94a3b8] font-body mt-8"
                >
                  Postal codes served: {city.postalCodes.join(", ")}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 8 - PERMITS & REGULATIONS (white)                    */}
      {/* ============================================================ */}
      {city.permitInfo && (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <span className="eyebrow-label">Permits &amp; Compliance</span>
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
                {city.name} Electrical
                <br />
                <span className="text-[#E31837]">Permits &amp; Regulations</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Left - Permit Note */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="bg-[#F7F7F7] rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#E31837]" />
                  </div>
                  <h3 className="font-heading font-semibold text-[18px] text-[#1C1C1E]">
                    Electrical Permits
                  </h3>
                </div>
                <p className="font-body text-[15px] text-[#64748b] leading-[1.8]">
                  {city.permitInfo.permitNote}
                </p>
              </motion.div>

              {/* Right - Insurance Note */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                className="bg-[#F7F7F7] rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center">
                    <Home className="w-6 h-6 text-[#E31837]" />
                  </div>
                  <h3 className="font-heading font-semibold text-[18px] text-[#1C1C1E]">
                    Insurance &amp; Liability
                  </h3>
                </div>
                <p className="font-body text-[15px] text-[#64748b] leading-[1.8]">
                  {city.permitInfo.insuranceNote}
                </p>
              </motion.div>
            </div>

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                { label: "Municipality", value: city.permitInfo.municipality, icon: Building2 },
                { label: "ESA Office", value: city.permitInfo.esaOffice, icon: FileCheck },
                { label: "Utility Provider", value: city.permitInfo.utilityProvider, icon: Zap },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="inline-flex items-center gap-3 px-5 py-3 bg-[#F7F7F7] rounded-xl"
                >
                  <pill.icon className="w-4 h-4 text-[#E31837]" />
                  <div>
                    <span className="font-body text-[11px] text-[#94a3b8] uppercase tracking-wider block">
                      {pill.label}
                    </span>
                    <span className="font-body text-[14px] font-semibold text-[#1C1C1E]">
                      {pill.value}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* ESA License callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              className="text-center mt-8"
            >
              <p className="font-body text-[13px] text-[#94a3b8]">
                ESA Licensed - ECRA #7014710 - Fully Insured - Serving {city.permitInfo.region}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 9 - WHY SPE (light grey)                             */}
      {/* ============================================================ */}
      <section className="bg-[#F7F7F7] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-14"
          >
            <span className="eyebrow-label">Why Choose Us</span>
            <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
              Why {city.name} Homeowners
              <br />
              <span className="text-[#E31837]">Choose Superior Power Electric</span>
            </h2>
            <p className="font-body text-[16px] text-[#94a3b8] mt-3">
              Rated 5.0/5 on Google by {city.name} homeowners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.whyChoose.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Zap;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease }}
                  className="text-center bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center mx-auto mb-5 shadow-[0_4px_15px_rgba(227,24,55,0.08)]">
                    <IconComponent className="w-7 h-7 text-[#E31837]" />
                  </div>
                  <h3 className="font-heading font-medium text-xl text-[#1C1C1E] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-[#64748b] text-[15px] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10 - STATS STRIP (white)                             */}
      {/* ============================================================ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: city.jobsCompleted, suffix: "+", label: `Jobs in ${city.name}` },
              { value: 47, suffix: "", label: "Five-Star Reviews" },
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: city.responseMinutes, suffix: " min", label: `Response to ${city.name}` },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="bg-white rounded-2xl p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
              >
                <NumberTicker
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-heading text-5xl md:text-6xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #E31837, #FF4D6A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
                <p className="font-body text-[15px] font-medium text-[#4B5563] mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 11 - UNIQUE SECTION (white)                          */}
      {/* ============================================================ */}
      <UniqueSection city={city} />

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 12 - TESTIMONIALS (light grey)                       */}
      {/* ============================================================ */}
      <section className="bg-[#F7F7F7] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-14"
          >
            <span className="eyebrow-label">Customer Reviews</span>
            <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
              What {city.name} Homeowners Say
            </h2>
            {/* Google rating bar */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>
              <span className="font-body text-[15px] text-[#64748b]">
                5.0 from 47 reviews on Google
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease }}
                className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                  ))}
                </div>

                <p className="font-body text-[#64748b] text-[15px] italic leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E31837]/15 to-[#E31837]/5 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-[#E31837] text-[12px]">
                      {testimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body font-semibold text-[#1C1C1E] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-[#94a3b8] text-xs">
                      {testimonial.time}
                    </p>
                  </div>
                  <img
                    src="/images/g-icon.webp"
                    alt="Google"
                    className="h-5 w-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="text-center mt-10"
          >
            <Link
              href="https://www.google.com/maps/place/?q=place_id:ChIJw_EMMkEZK4gRlraWiwcAOnY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[#E31837] font-semibold text-[15px] hover:underline"
            >
              Read All 47 Reviews on Google
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 13 - FAQ (white)                                     */}
      {/* ============================================================ */}
      {city.faqs.length > 0 && (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <span className="eyebrow-label">Common Questions</span>
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
                Electrician in {city.name}
                <br />
                <span className="text-[#E31837]">Common Questions</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-2 md:p-3">
                <FAQ items={city.faqs} />
              </div>
            </div>
          </div>
        </section>
      )}

      <SectionDivider />

      {/* ============================================================ */}
      {/* SECTION 14 - RELATED CITIES (light grey)                     */}
      {/* ============================================================ */}
      {relatedCitiesData.length > 0 && (
        <section className="bg-[#F7F7F7] py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <span className="eyebrow-label">Nearby Areas</span>
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]">
                Also Serving Nearby
              </h2>
              <p className="font-body text-[17px] text-[#64748b] mt-4 max-w-2xl mx-auto leading-relaxed">
                Superior Power Electric serves homeowners and businesses across
                the Greater Toronto Area. Same quality, same standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCitiesData.map((relatedCity, index) => (
                <motion.div
                  key={relatedCity.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease }}
                >
                  <Link
                    href={`/locations/${relatedCity.slug}`}
                    className="group block bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#E31837]" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-[#1C1C1E] text-xl group-hover:text-[#E31837] transition-colors">
                          {relatedCity.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[#64748b] text-[13px] font-body">
                          <Clock className="w-3 h-3" />
                          {relatedCity.responseTime} response
                        </span>
                      </div>
                    </div>

                    <p className="font-body text-[#64748b] text-[15px] leading-relaxed mb-4 line-clamp-2">
                      {relatedCity.introCopy[0]}
                    </p>

                    <span className="inline-flex items-center gap-1 text-[#E31837] text-sm font-semibold font-body">
                      View {relatedCity.name} Services
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SECTION 15 - FINAL CTA (light grey)                          */}
      {/* ============================================================ */}
      <section className="relative bg-[#F7F7F7] py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(ellipse, #E31837, transparent 70%)" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1]"
          >
            Ready to Book
            <br />
            <span className="text-[#E31837]">Your {city.name} Electrician?</span>
            <br />
            <span className="text-[22px] md:text-[28px] font-medium text-[#64748b]">Book your $49 whole-home assessment today.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="font-body text-[18px] text-[#64748b] mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Join {city.jobsCompleted}+ {city.name} homeowners who trust Superior Power Electric.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ShimmerButton href="/contact">Book Your $49 Assessment</ShimmerButton>
            <a
              href="tel:+19054528439"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-body text-[15px] font-semibold uppercase tracking-[0.05em] text-[#1C1C1E] shadow-[0_2px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call (905) 452-8439
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#64748b] font-body"
          >
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#E31837]" />
              ESA Licensed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#E31837]" />
              Same-Day {city.name}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#E31837]" />
              No Fix No Fee
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ================================================================== */
/* UNIQUE SECTION COMPONENT                                           */
/* ================================================================== */

function UniqueSection({ city }: { city: CityPage }) {
  const { uniqueSection } = city;

  switch (uniqueSection.type) {
    case "home-city":
      return (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1] mb-6">
                  {uniqueSection.title}
                </h2>
                {uniqueSection.subtitle && (
                  <p className="font-body text-[17px] text-[#64748b] mb-6 leading-relaxed">
                    {uniqueSection.subtitle}
                  </p>
                )}
                <p className="font-body text-[17px] text-[#64748b] leading-[1.8]">
                  {uniqueSection.content}
                </p>

                {uniqueSection.features && uniqueSection.features.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-8">
                    {uniqueSection.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F7F7F7] rounded-full text-[#1C1C1E] text-[13px] font-semibold font-body shadow-sm"
                      >
                        <Zap className="w-3 h-3 text-[#E31837]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              {uniqueSection.ownerQuote && (
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease }}
                  className="flex items-start"
                >
                  <div className="bg-white rounded-2xl shadow-[0_4px_30px_rgba(227,24,55,0.06)] p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                      ))}
                    </div>
                    <p className="font-body text-[#4B5563] text-[17px] italic leading-[1.8] mb-6">
                      &ldquo;{uniqueSection.ownerQuote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E31837]/15 to-[#E31837]/5 flex items-center justify-center">
                        <span className="font-heading font-bold text-[#E31837] text-sm">SP</span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-[#1C1C1E] text-sm">Shaun Pennant</p>
                        <p className="font-body text-[#94a3b8] text-xs">Owner, Superior Power Electric</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      );

    case "diverse-communities":
      return (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1] mb-4">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-[#64748b] max-w-2xl mx-auto leading-relaxed">
                {uniqueSection.content}
              </p>
            </motion.div>

            {uniqueSection.communities && uniqueSection.communities.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uniqueSection.communities.map((community, index) => (
                  <motion.div
                    key={community.area}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease }}
                    className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <h3 className="font-heading font-medium text-[22px] text-[#1C1C1E] mb-4">
                      {community.area}
                    </h3>
                    <ul className="space-y-2.5">
                      {community.neighborhoods.map((n) => (
                        <li key={n} className="flex items-center justify-between">
                          <span className="font-body text-[15px] text-[#1C1C1E]">{n}</span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E31837]/10 text-[#E31837] text-[11px] font-semibold font-body">
                            <Clock className="w-2.5 h-2.5" />
                            Same-day
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    case "estate-specialists":
      return (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1] mb-6">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-[#64748b] leading-[1.8] max-w-3xl mb-10">
                {uniqueSection.content}
              </p>
            </motion.div>

            {uniqueSection.features && uniqueSection.features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {uniqueSection.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06, ease }}
                    className="flex items-center gap-3 bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-[#E31837]" />
                    </div>
                    <span className="font-body text-[#1C1C1E] text-[15px]">{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    case "premium-work":
      return (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1] mb-6">
                  {uniqueSection.title}
                </h2>
                <p className="font-body text-[17px] text-[#64748b] leading-[1.8]">
                  {uniqueSection.content}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(uniqueSection.features || []).slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease }}
                    className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-[#E31837]" />
                    </div>
                    <h3 className="font-heading font-medium text-[#1C1C1E] text-[15px] mb-2">
                      {feature}
                    </h3>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-[#E31837] text-[13px] font-semibold font-body"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case "small-town":
      return (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1] mb-6">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-[#64748b] max-w-2xl mx-auto leading-[1.8]">
                {uniqueSection.content}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.slice(0, 3).map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease }}
                  className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] text-center hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-center justify-center gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />
                    ))}
                  </div>
                  <p className="font-body text-[#64748b] text-[14px] italic leading-relaxed mb-3 line-clamp-3">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="font-body font-semibold text-[#1C1C1E] text-sm">{review.author}</p>
                    <img src="/images/g-icon.webp" alt="Google" className="h-3.5 w-auto" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );

    case "rural-estate":
      return (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1] mb-6">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-[#64748b] leading-[1.8] max-w-3xl mb-10">
                {uniqueSection.content}
              </p>
            </motion.div>

            {uniqueSection.features && uniqueSection.features.length > 0 && (
              <div className="space-y-3">
                {uniqueSection.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06, ease }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E31837]/12 to-[#E31837]/5 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-[#E31837]" />
                    </div>
                    <span className="font-body text-[#1C1C1E] text-[15px]">{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    default:
      return (
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1C1C1E] leading-[1.1] mb-6">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-[#64748b] leading-[1.8]">
                {uniqueSection.content}
              </p>
            </motion.div>
          </div>
        </section>
      );
  }
}
