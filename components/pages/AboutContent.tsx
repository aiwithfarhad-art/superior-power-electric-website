"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Star,
  Clock,
  MapPin,
  Award,
  Zap,
  Home,
  Building2,
  Car,
  ArrowRight,
} from "lucide-react";
import { business } from "@/data/business";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { CTASection } from "@/components/sections/CTASection";

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1C1C1E] overflow-hidden">
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.625, 0.05, 0, 1] }}
            className="max-w-3xl"
          >
            <span className="eyebrow-label mb-6">
              About Us
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
              ABOUT
              <br />
              <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
                Superior Power
              </span>
            </h1>

            <p className="mt-6 font-body text-gray-400 text-lg max-w-2xl">
              Founded in {business.foundedYear} by {business.owner}, Superior
              Power Electric has grown from a one-person operation into one of
              Brampton&apos;s most trusted electrical contractors.{" "}
              {business.yearsInBusiness} years of serving homeowners and
              businesses across the GTA with licensed, insured, ESA-certified
              electrical work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white">
                <Shield className="w-4 h-4 text-[#1B4FE4]" />
                ESA {business.esaLicense}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white">
                <Clock className="w-4 h-4 text-[#1B4FE4]" />
                {business.yearsInBusiness} Years Experience
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {business.googleReviews.count} Reviews (
                {business.googleReviews.rating}/5)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
            >
              <span className="eyebrow-label">
                Our Story
              </span>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1a2975]">
                BUILT ON
                <br />
                <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
                  Hard Work
                </span>
              </h2>

              <div className="mt-6 space-y-4 font-body text-[#6B7280] leading-relaxed">
                <p>
                  {business.owner} founded Superior Power Electric in{" "}
                  {business.foundedYear} in Brampton, Ontario. What started as a
                  solo electrician with a truck and a toolbox has grown into a
                  trusted team serving homeowners and businesses across the
                  Greater Toronto Area.
                </p>
                <p>
                  From day one, the focus has been on quality over volume. Every
                  job gets the same level of attention, whether it is installing
                  a single pot light or rewiring an entire home. That commitment
                  to doing things right the first time is why customers keep
                  coming back and referring their neighbors.
                </p>
                <p>
                  Today, Superior Power Electric holds ESA License{" "}
                  {business.esaLicense} and maintains a perfect{" "}
                  {business.googleReviews.rating}-star rating across{" "}
                  {business.googleReviews.count} Google reviews. Every project is
                  completed to code, inspected by the ESA, and backed by our
                  workmanship guarantee.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.625, 0.05, 0, 1],
              }}
              className="bg-[#F8F9FA] rounded-xl p-8"
            >
              <h3 className="font-heading text-lg font-bold text-[#1a2975] mb-6">
                What Sets Us Apart
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: "Quality First",
                    text: "Every job done right the first time. No shortcuts, no cutting corners.",
                  },
                  {
                    title: "Honest Pricing",
                    text: "Detailed written estimates upfront. No surprises on your bill.",
                  },
                  {
                    title: "Clean Worksite",
                    text: "We treat your home with respect. We clean up after every job.",
                  },
                  {
                    title: "Code Compliant",
                    text: "All work meets Ontario Electrical Safety Code. ESA inspected and certified.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-[#1B4FE4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1C1C1E] text-sm">
                        {item.title}
                      </h4>
                      <p className="text-[#9CA3AF] text-sm mt-0.5">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-8 bg-[#1B4FE4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
            className="text-white text-lg font-bold flex items-center justify-center gap-3"
          >
            <Clock className="w-5 h-5" />
            Response time promise: We respond within 2 hours
          </motion.p>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
            className="text-center mb-12"
          >
            <span className="eyebrow-label">
              By the Numbers
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1a2975]">
              PROVEN
              <br />
              <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
                Track Record
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { value: "15+", label: "Years Experience", icon: Clock },
              {
                value: String(business.googleReviews.count),
                label: "Google Reviews",
                icon: Star,
              },
              {
                value: String(business.serviceAreas.length),
                label: "Cities Served",
                icon: MapPin,
              },
              {
                value: String(business.googleReviews.rating),
                label: "Star Rating",
                icon: Award,
              },
              { value: "ESA", label: "Licensed", icon: Shield },
              { value: "1000s", label: "Jobs Completed", icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.625, 0.05, 0, 1],
                }}
                className="card-premium p-6 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-[#1B4FE4]" />
                </div>
                <div className="stat-number text-2xl">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-[#9CA3AF] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
            className="text-center mb-12"
          >
            <span className="eyebrow-label">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1a2975]">
              OUR
              <br />
              <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
                Services
              </span>
            </h2>
            <p className="mt-4 font-body text-base md:text-lg max-w-2xl mx-auto text-[#9CA3AF]">
              Full-service electrical for homes and businesses across the Greater
              Toronto Area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "Residential Electrical",
                description:
                  "Panel upgrades, pot lights, rewiring, hot tub electrical, lighting, EV chargers, and more. Everything your home needs.",
                href: "/services/residential",
              },
              {
                icon: Building2,
                title: "Commercial Electrical",
                description:
                  "Installations, repairs, LED retrofits, safety inspections, and emergency service for businesses across the GTA.",
                href: "/services/commercial",
              },
              {
                icon: Car,
                title: "Specialty Services",
                description:
                  "EV charger installation, knob-and-tube replacement, smart home wiring, and other specialized electrical work.",
                href: "/services/ev-charger",
              },
            ].map((service, index) => (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.625, 0.05, 0, 1],
                }}
                className="group card-premium p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-[#1B4FE4]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1a2975] mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-[#9CA3AF] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#1B4FE4] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <ServiceArea />

      {/* CTA */}
      <CTASection />
    </>
  );
}
