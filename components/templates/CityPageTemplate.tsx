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
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { FAQ } from "@/components/ui/FAQ";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { cn } from "@/lib/utils";
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
};

interface CityPageTemplateProps {
  city: CityPage;
}

export function CityPageTemplate({ city }: CityPageTemplateProps) {
  // Determine unique section bg to alternate reviews/faq correctly
  const uniqueSectionBg = (() => {
    switch (city.uniqueSection.type) {
      case "home-city":
        return "dark";
      case "diverse-communities":
        return "white";
      case "estate-specialists":
        return "dark";
      case "premium-work":
        return "white";
      case "small-town":
        return "grey";
      case "rural-estate":
        return "dark";
      default:
        return "white";
    }
  })();

  const reviewsBg = uniqueSectionBg === "white" ? "bg-[#F8F9FA]" : "bg-white";
  const faqBg = reviewsBg === "bg-white" ? "bg-[#F8F9FA]" : "bg-white";

  const displayedReviews = reviews.slice(0, 3);

  return (
    <>
      {/* ============================================================ */}
      {/* SECTION 1 - HERO */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={city.heroImage}
          alt={`Electrician serving ${city.name}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1C1C1E]/65" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-32 pb-20">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="flex items-center gap-1.5 text-[13px] text-white/60 mb-10"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              href="/locations"
              className="hover:text-white transition-colors"
            >
              Locations
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/90">{city.name}</span>
          </motion.nav>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="font-heading font-bold text-[52px] md:text-[80px] text-white uppercase tracking-[-0.02em] leading-[1.05] max-w-4xl"
          >
            {city.h1}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-body text-[18px] text-[#94a3b8] mt-6 max-w-2xl leading-relaxed"
          >
            {city.heroSubhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <ShimmerButton href="/contact">
              Book Your $49 Assessment
            </ShimmerButton>
            <a
              href="tel:+19054528439"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-8 py-4 font-body text-[15px] font-semibold uppercase tracking-[0.05em] text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5"
            >
              <Phone className="w-5 h-5" />
              Call (905) 452-8439
            </a>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="relative z-10 mt-auto"
        >
          <div className="bg-black/30 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-white/80 font-body">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]" />
                  4.9 Stars
                </span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#1B4FE4]" />
                  47 Reviews
                </span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1B4FE4]" />
                  {city.responseMinutes} min from {city.name}
                </span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1B4FE4]" />
                  Same-Day Available
                </span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span className="inline-flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#1B4FE4]" />
                  ESA Licensed
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 - LOCAL INTRO */}
      {/* ============================================================ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1a2975] leading-[1.1] mb-12"
          >
            Superior Power Electric - {city.name}&apos;s Trusted Electrician
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
                  className="font-body text-[17px] text-[#64748b] leading-[1.75]"
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
              <div className="bg-white rounded-xl shadow-xl border-l-4 border-[#1B4FE4] p-8">
                <h3 className="font-heading font-medium text-[22px] md:text-[28px] text-[#1C1C1E] mb-6">
                  Quick Stats
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-[#1B4FE4]" />
                    </div>
                    <span className="font-body text-[15px] text-[#1C1C1E]">
                      <strong>{city.jobsCompleted}+</strong> jobs completed in{" "}
                      {city.name}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-4 h-4 text-[#1B4FE4]" />
                    </div>
                    <span className="font-body text-[15px] text-[#1C1C1E]">
                      <strong>4.9</strong> average rating
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#1B4FE4]" />
                    </div>
                    <span className="font-body text-[15px] text-[#1C1C1E]">
                      ESA Licensed & Insured
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#1B4FE4]" />
                    </div>
                    <span className="font-body text-[15px] text-[#1C1C1E]">
                      <strong>{city.responseTime}</strong> service
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#1B4FE4]" />
                    </div>
                    <span className="font-body text-[15px] text-[#1C1C1E]">
                      Serving all of <strong>{city.name}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 - SERVICES IN [CITY] */}
      {/* ============================================================ */}
      <section className="bg-[#F8F9FA] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-14"
          >
            <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1a2975] leading-[1.1]">
              Electrical Services in {city.name}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, index) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 30 }}
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
                  className="group block bg-white rounded-xl p-6 border border-[#E5E5E5] hover:border-[#1B4FE4]/30 hover:-translate-y-1 transition-all duration-250 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B4FE4]/20 transition-colors">
                    <Zap className="w-6 h-6 text-[#1B4FE4]" />
                  </div>
                  <h3 className="font-heading font-medium text-[#1C1C1E] text-lg mb-2 group-hover:text-[#1B4FE4] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="font-body text-[#64748b] text-sm leading-relaxed line-clamp-2">
                    {svc.heroDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-[#1B4FE4] text-sm font-semibold font-body">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
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
            <p className="font-body text-[17px] text-[#64748b] mb-6">
              Every service includes an ESA inspection. Book a $49 on-site
              assessment (credited toward your project) or request a free remote
              estimate.
            </p>
            <ShimmerButton href="/contact">
              Book a $49 Assessment
            </ShimmerButton>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 - NEIGHBOURHOODS */}
      {/* ============================================================ */}
      <section className="bg-[#1C1C1E] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-white leading-[1.1]">
              We Service All of {city.name}
            </h2>
            <p className="font-body text-[17px] text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              From {city.neighborhoods[0]} to{" "}
              {city.neighborhoods[city.neighborhoods.length - 1]} - no matter
              where you are in {city.name}, we&apos;re on our way.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {city.neighborhoods.map((neighborhood, index) => (
              <motion.span
                key={neighborhood}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                  ease,
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-[13px] font-semibold font-body border border-white/20 hover:border-[#1B4FE4]/50 hover:bg-white/15 transition-all duration-250 cursor-default"
              >
                <MapPin className="w-3 h-3 text-[#1B4FE4]" />
                {neighborhood}
              </motion.span>
            ))}
          </div>

          {city.postalCodes && city.postalCodes.length > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              className="text-center text-sm text-white/50 font-body mt-8"
            >
              Postal codes served: {city.postalCodes.join(", ")}
            </motion.p>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 - WHY SPE */}
      {/* ============================================================ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-14"
          >
            <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1a2975] leading-[1.1]">
              Why {city.name} Homeowners Choose
              <br className="hidden md:block" /> Superior Power Electric
            </h2>
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
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#1B4FE4]/10 flex items-center justify-center mx-auto mb-5">
                    <IconComponent className="w-8 h-8 text-[#1B4FE4]" />
                  </div>
                  <h3 className="font-heading font-medium text-xl text-[#1a2975] mb-2">
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
      {/* SECTION 6 - STATS STRIP */}
      {/* ============================================================ */}
      <section className="bg-[#1B4FE4] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center"
            >
              <NumberTicker
                value={500}
                suffix="+"
                className="font-heading text-4xl md:text-5xl font-bold text-white"
              />
              <p className="font-body text-sm text-white/80 mt-2">
                Jobs Completed
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="text-center"
            >
              <NumberTicker
                value={47}
                className="font-heading text-4xl md:text-5xl font-bold text-white"
              />
              <p className="font-body text-sm text-white/80 mt-2">
                Five-Star Reviews
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16, ease }}
              className="text-center"
            >
              <NumberTicker
                value={15}
                suffix="+"
                className="font-heading text-4xl md:text-5xl font-bold text-white"
              />
              <p className="font-body text-sm text-white/80 mt-2">
                Years Experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24, ease }}
              className="text-center"
            >
              <NumberTicker
                value={city.responseMinutes}
                suffix=" min"
                className="font-heading text-4xl md:text-5xl font-bold text-white"
              />
              <p className="font-body text-sm text-white/80 mt-2">
                Response to {city.name}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 - UNIQUE SECTION */}
      {/* ============================================================ */}
      <UniqueSection city={city} />

      {/* ============================================================ */}
      {/* SECTION 8 - REVIEWS */}
      {/* ============================================================ */}
      <section className={cn(reviewsBg, "py-20 md:py-28")}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-14"
          >
            <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1a2975] leading-[1.1]">
              What {city.name} Homeowners Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease,
                }}
                className="bg-white rounded-xl p-6 border border-[#E5E5E5] shadow-sm"
              >
                {/* Google + Stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-sm font-semibold text-[#64748b]">
                    Google
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-4 h-4 text-[#FFD700] fill-[#FFD700]"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="font-body text-[#64748b] text-[15px] italic leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <p className="font-body font-semibold text-[#1C1C1E]">
                  {review.author}
                </p>
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
              href="https://www.google.com/maps/place/Superior+Power+Electric"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[#1B4FE4] font-semibold text-[15px] hover:underline"
            >
              Read All 47 Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9 - FAQ */}
      {/* ============================================================ */}
      {city.faqs.length > 0 && (
        <section className={cn(faqBg, "py-20 md:py-28")}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1a2975] leading-[1.1]">
                Electrician in {city.name} - Common Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <FAQ items={city.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* SECTION 10 - FINAL CTA */}
      {/* ============================================================ */}
      <section className="bg-[#1C1C1E] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="font-heading font-semibold text-[38px] md:text-[56px] text-white leading-[1.1]"
          >
            Ready to Book Your {city.name} Electrician?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="font-body text-[18px] text-[#94a3b8] mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Book your $49 whole-home assessment. We&apos;ll find every
            electrical issue in your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ShimmerButton href="/contact">
              Book Your $49 Assessment
            </ShimmerButton>
            <a
              href="tel:+19054528439"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-8 py-4 font-body text-[15px] font-semibold uppercase tracking-[0.05em] text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5"
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
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70 font-body"
          >
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#1B4FE4]" />
              ESA Licensed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#1B4FE4]" />
              Same-Day {city.name}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#1B4FE4]" />
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
    /* -------------------------------------------------------------- */
    /* HOME CITY (Brampton)                                           */
    /* -------------------------------------------------------------- */
    case "home-city":
      return (
        <section className="bg-[#1C1C1E] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-white leading-[1.1] mb-6">
                  {uniqueSection.title}
                </h2>
                {uniqueSection.subtitle && (
                  <p className="font-body text-[17px] text-[#94a3b8] mb-6 leading-relaxed">
                    {uniqueSection.subtitle}
                  </p>
                )}
                <p className="font-body text-[17px] text-white/80 leading-[1.75]">
                  {uniqueSection.content}
                </p>

                {uniqueSection.features && uniqueSection.features.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-8">
                    {uniqueSection.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-[13px] font-semibold font-body border border-white/20"
                      >
                        <Zap className="w-3 h-3 text-[#1B4FE4]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Right - Owner Quote */}
              {uniqueSection.ownerQuote && (
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease }}
                  className="flex items-start"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#FFD700] fill-[#FFD700]"
                        />
                      ))}
                    </div>
                    <p className="font-body text-white/90 text-[17px] italic leading-[1.75] mb-6">
                      &ldquo;{uniqueSection.ownerQuote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1B4FE4]/20 flex items-center justify-center">
                        <span className="font-heading font-bold text-[#1B4FE4] text-sm">
                          SP
                        </span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-white text-sm">
                          Shaun Pennant
                        </p>
                        <p className="font-body text-white/50 text-xs">
                          Owner, Superior Power Electric
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      );

    /* -------------------------------------------------------------- */
    /* DIVERSE COMMUNITIES (Mississauga)                              */
    /* -------------------------------------------------------------- */
    case "diverse-communities":
      return (
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1a2975] leading-[1.1] mb-4">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-[#64748b] max-w-2xl mx-auto leading-relaxed">
                {uniqueSection.content}
              </p>
            </motion.div>

            {uniqueSection.communities &&
              uniqueSection.communities.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {uniqueSection.communities.map((community, index) => (
                    <motion.div
                      key={community.area}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease,
                      }}
                      className="bg-[#F8F9FA] rounded-xl p-6 border border-[#E5E5E5]"
                    >
                      <h3 className="font-heading font-medium text-[22px] text-[#1a2975] mb-4">
                        {community.area}
                      </h3>
                      <ul className="space-y-2.5">
                        {community.neighborhoods.map((n) => (
                          <li
                            key={n}
                            className="flex items-center justify-between"
                          >
                            <span className="font-body text-[15px] text-[#1C1C1E]">
                              {n}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1B4FE4]/10 text-[#1B4FE4] text-[11px] font-semibold font-body">
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

    /* -------------------------------------------------------------- */
    /* ESTATE SPECIALISTS (Vaughan)                                   */
    /* -------------------------------------------------------------- */
    case "estate-specialists":
      return (
        <section className="bg-[#1C1C1E] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-white leading-[1.1] mb-6">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-white/80 leading-[1.75] max-w-3xl mb-10">
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
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease,
                    }}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1B4FE4]/15 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-[#1B4FE4]" />
                    </div>
                    <span className="font-body text-white text-[15px]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    /* -------------------------------------------------------------- */
    /* PREMIUM WORK (Oakville)                                        */
    /* -------------------------------------------------------------- */
    case "premium-work":
      return (
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1a2975] leading-[1.1] mb-6">
                  {uniqueSection.title}
                </h2>
                <p className="font-body text-[17px] text-[#64748b] leading-[1.75]">
                  {uniqueSection.content}
                </p>
              </motion.div>

              {/* Right - Premium Service Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(uniqueSection.features || []).slice(0, 4).map(
                  (feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease,
                      }}
                      className="bg-[#F8F9FA] rounded-xl p-5 border border-[#E5E5E5] hover:border-[#1B4FE4]/30 hover:-translate-y-1 transition-all duration-250"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center mb-3">
                        <Zap className="w-5 h-5 text-[#1B4FE4]" />
                      </div>
                      <h3 className="font-heading font-medium text-[#1C1C1E] text-[15px] mb-2">
                        {feature}
                      </h3>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-[#1B4FE4] text-[13px] font-semibold font-body"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      );

    /* -------------------------------------------------------------- */
    /* SMALL TOWN (Georgetown)                                        */
    /* -------------------------------------------------------------- */
    case "small-town":
      return (
        <section className="bg-[#F8F9FA] py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-center mb-14"
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1a2975] leading-[1.1] mb-6">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-[#64748b] max-w-2xl mx-auto leading-[1.75]">
                {uniqueSection.content}
              </p>
            </motion.div>

            {/* Small testimonial quotes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.slice(0, 3).map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="bg-white rounded-xl p-5 border border-[#E5E5E5] shadow-sm text-center"
                >
                  <div className="flex items-center justify-center gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]"
                      />
                    ))}
                  </div>
                  <p className="font-body text-[#64748b] text-[14px] italic leading-relaxed mb-3 line-clamp-3">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="font-body font-semibold text-[#1C1C1E] text-sm">
                    {review.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );

    /* -------------------------------------------------------------- */
    /* RURAL ESTATE (Caledon)                                         */
    /* -------------------------------------------------------------- */
    case "rural-estate":
      return (
        <section className="bg-[#1C1C1E] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-white leading-[1.1] mb-6">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-white/80 leading-[1.75] max-w-3xl mb-10">
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
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1B4FE4]/15 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-[#1B4FE4]" />
                    </div>
                    <span className="font-body text-white text-[15px]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    /* -------------------------------------------------------------- */
    /* DEFAULT FALLBACK                                               */
    /* -------------------------------------------------------------- */
    default:
      return (
        <section className="bg-[#F8F9FA] py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-heading font-semibold text-[38px] md:text-[56px] text-[#1a2975] leading-[1.1] mb-6">
                {uniqueSection.title}
              </h2>
              <p className="font-body text-[17px] text-[#64748b] leading-[1.75]">
                {uniqueSection.content}
              </p>
            </motion.div>
          </div>
        </section>
      );
  }
}
