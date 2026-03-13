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
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Panel Upgrades",
    desc: "Upgrade outdated panels to meet modern safety codes and power demands.",
    href: "/services/panel-upgrades",
    image: "/images/services/panel-upgrade.webp",
    alt: "Electrical panel upgrade service in Brampton",
  },
  {
    icon: Lightbulb,
    title: "Pot Lights",
    desc: "Sleek recessed lighting installed in any room of your home.",
    href: "/services/pot-lights",
    image: "/images/services/pot-lights.webp",
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
    image: "/images/services/residential.webp",
    alt: "Residential electrical services in Brampton",
  },
  {
    icon: Building2,
    title: "Commercial",
    desc: "Office, retail, and warehouse electrical built to code.",
    href: "/services/commercial",
    image: "/images/services/commercial.webp",
    alt: "Commercial electrical contractor Brampton",
  },
  {
    icon: Cable,
    title: "Rewiring",
    desc: "Replace outdated wiring to handle today's electrical loads safely.",
    href: "/services/rewiring",
    image: "/images/services/rewiring.webp",
    alt: "Home rewiring service Brampton",
  },
  {
    icon: Waves,
    title: "Hot Tub",
    desc: "Dedicated circuits and safe hookups for hot tubs and pools.",
    href: "/services/hot-tub-electrical",
    image: "/images/services/hot-tub.webp",
    alt: "Hot tub electrical hookup Brampton",
  },
  {
    icon: Sun,
    title: "Lighting",
    desc: "Indoor, outdoor, and smart lighting design and installation.",
    href: "/services/lighting",
    image: "/images/services/lighting.webp",
    alt: "Lighting installation Brampton",
  },
  {
    icon: ShieldAlert,
    title: "Knob & Tube",
    desc: "Safe removal and replacement of outdated knob-and-tube wiring.",
    href: "/services/knob-and-tube",
    image: "/images/services/knob-tube.webp",
    alt: "Knob and tube wiring removal Brampton",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* ---- White Header Area ---- */}
      <div className="bg-white pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.625, 0.05, 0, 1] }}
          >
            {/* Eyebrow pill - light variant */}
            <span className="eyebrow-label mb-6">
              Our Services
            </span>

            <h2 className="font-heading text-[#1a2975] font-black uppercase text-4xl sm:text-5xl lg:text-[64px] tracking-tight leading-[1.0]">
              Everything Electrical
            </h2>

            <p className="font-accent text-2xl sm:text-3xl lg:text-[36px] tracking-[0.04em] italic leading-tight mt-2 mb-8 bg-gradient-to-r from-[#E31837] via-[#ff4d6a] to-[#E31837] bg-clip-text text-transparent">
              One Trusted Team
            </p>

            {/* Decorative diamond divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-black/10" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#E31837]" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-black/10" />
            </div>

            <p className="text-[#64748b] text-base md:text-lg max-w-xl mx-auto font-body leading-relaxed">
              From panel upgrades to EV chargers, we handle every job with
              licensed expertise and same-day availability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---- Cards Area ---- */}
      <div className="relative bg-white pt-0 pb-24 md:pb-32 lg:pb-40">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---- 3x3 Service Grid ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.625, 0.05, 0, 1],
                }}
                className={
                  i === services.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }
              >
                <Link
                  href={s.href}
                  className="group relative block rounded-2xl overflow-hidden aspect-[4/3] border border-black/[0.06] hover:border-[#E31837]/30 transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                >
                  {/* ---- Image ---- */}
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* ---- Gradient overlays ---- */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/80 group-hover:via-black/30 group-hover:to-black/5" />

                  {/* Red glow from bottom on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#E31837]/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* ---- Number index (editorial detail) ---- */}
                  <span className="absolute top-4 right-5 font-accent text-[10px] tracking-[0.3em] text-white/[0.12] group-hover:text-white/25 transition-colors duration-500 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* ---- Content ---- */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[#E31837] flex items-center justify-center mb-3 shadow-lg shadow-black/40 group-hover:shadow-[#E31837]/30 transition-all duration-500">
                      <Icon size={18} className="text-white" strokeWidth={2} />
                    </div>

                    {/* Title + hover arrow */}
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-heading text-lg md:text-xl font-bold uppercase text-white tracking-wide leading-tight">
                        {s.title}
                      </h3>
                      <div className="w-7 h-7 rounded-full border border-white/0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                        <ArrowUpRight size={13} className="text-white" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/40 text-sm font-body leading-relaxed line-clamp-2 group-hover:text-white/60 transition-colors duration-500">
                      {s.desc}
                    </p>
                  </div>

                  {/* ---- Shimmer sweep on hover ---- */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    <div className="absolute -top-1/2 -left-1/2 w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent rotate-[15deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-[1200ms] ease-out" />
                  </div>

                  {/* ---- Bottom accent bar on hover ---- */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31837] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
            );
          })}
        </div>
        </div>

        {/* Bottom edge accent line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
      </div>
    </section>
  );
}
