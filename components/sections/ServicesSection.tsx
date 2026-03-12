"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Lightbulb,
  PlugZap,
  Home,
  Building2,
  Cable,
  Waves,
  Sun,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Panel Upgrades",
    desc: "Upgrade outdated panels to meet modern safety codes and power demands.",
    href: "/services/panel-upgrades",
    image: "/images/services/panel-upgrade.jpg",
    alt: "Electrical panel upgrade service in Brampton",
  },
  {
    icon: Lightbulb,
    title: "Pot Lights",
    desc: "Sleek recessed lighting installed in any room of your home.",
    href: "/services/pot-lights",
    image: "/images/services/pot-lights.jpg",
    alt: "Pot light installation in Brampton home",
  },
  {
    icon: PlugZap,
    title: "EV Charger",
    desc: "Level 2 charger installation so you can charge at home overnight.",
    href: "/services/ev-charger",
    image: "/images/services/ev-charger.jpg",
    alt: "EV charger installation in Brampton",
  },
  {
    icon: Home,
    title: "Residential",
    desc: "Full-service electrical for renovations, additions, and new builds.",
    href: "/services/residential",
    image: "/images/services/residential.jpg",
    alt: "Residential electrical services in Brampton",
  },
  {
    icon: Building2,
    title: "Commercial",
    desc: "Office, retail, and warehouse electrical built to code.",
    href: "/services/commercial",
    image: "/images/services/commercial.jpg",
    alt: "Commercial electrical contractor Brampton",
  },
  {
    icon: Cable,
    title: "Rewiring",
    desc: "Replace outdated wiring to handle today's electrical loads safely.",
    href: "/services/rewiring",
    image: "/images/services/rewiring.jpg",
    alt: "Home rewiring service Brampton",
  },
  {
    icon: Waves,
    title: "Hot Tub",
    desc: "Dedicated circuits and safe hookups for hot tubs and pools.",
    href: "/services/hot-tub-electrical",
    image: "/images/services/hot-tub.jpg",
    alt: "Hot tub electrical hookup Brampton",
  },
  {
    icon: Sun,
    title: "Lighting",
    desc: "Indoor, outdoor, and smart lighting design and installation.",
    href: "/services/lighting",
    image: "/images/services/lighting.jpg",
    alt: "Lighting installation Brampton",
  },
  {
    icon: ShieldAlert,
    title: "Knob & Tube",
    desc: "Safe removal and replacement of outdated knob-and-tube wiring.",
    href: "/services/knob-and-tube",
    image: "/images/services/knob-tube.jpg",
    alt: "Knob and tube wiring removal Brampton",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.625, 0.05, 0, 1] }}
        >
          <span className="inline-block px-5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase mb-4 bg-[#E31837]/10 text-[#E31837] font-heading">
            Our Services
          </span>
          <h2 className="font-heading text-[#1a2975] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            Everything Electrical. One Trusted Team.
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto font-body mt-4">
            From panel upgrades to EV chargers, we handle every job with
            licensed expertise and same-day availability.
          </p>
        </motion.div>

        {/* 3x3 Service Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.625, 0.05, 0, 1],
              }}
              className={index === services.length - 1 ? "col-span-2 lg:col-span-1" : ""}
            >
              <Link
                href={s.href}
                className="group rounded-xl bg-white overflow-hidden transition-all duration-300 hover:border-[#1B4FE4] hover:-translate-y-1 hover:shadow-xl block border-2 border-transparent"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                }}
              >
                {/* Image area */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Blue icon circle overlay */}
                  <div className="absolute bottom-3 left-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1B4FE4] flex items-center justify-center shadow-md">
                    <s.icon size={16} className="text-white md:w-5 md:h-5" />
                  </div>
                </div>

                {/* Content area */}
                <div className="p-4 md:p-5">
                  <h3 className="font-heading text-base md:text-lg font-bold uppercase text-[#1a2975]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-xs md:text-sm text-[#64748b] leading-relaxed font-body line-clamp-2">
                    {s.desc}
                  </p>
                  <span className="mt-2 md:mt-3 inline-flex items-center gap-1.5 text-[#1B4FE4] text-xs md:text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
