"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Facebook,
  Instagram,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Star,
  Clock,
  Zap,
  ArrowRight,
  Shield,
} from "lucide-react";
import { business } from "@/data/business";

/* ─── Data ─── */

const services = [
  { name: "Panel Upgrades", slug: "panel-upgrades" },
  { name: "Pot Lights", slug: "pot-lights" },
  { name: "EV Charger", slug: "ev-charger" },
  { name: "Residential", slug: "residential" },
  { name: "Commercial", slug: "commercial" },
  { name: "Rewiring", slug: "rewiring" },
  { name: "Hot Tub", slug: "hot-tub-electrical" },
  { name: "Lighting", slug: "lighting" },
  { name: "Knob & Tube", slug: "knob-and-tube" },
];

const locations = [
  { name: "Brampton", slug: "brampton" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Vaughan", slug: "vaughan" },
  { name: "Caledon", slug: "caledon" },
  { name: "Georgetown", slug: "georgetown" },
  { name: "Oakville", slug: "oakville" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Reviews", href: "https://share.google/rXefBgv7k6fmqcU5l" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/SuperiorPowerElectric/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/superiorpowerelectric/",
    label: "Instagram",
  },
  {
    icon: ExternalLink,
    href: "https://share.google/rXefBgv7k6fmqcU5l",
    label: "Google",
  },
];

/* ─── Accordion (mobile collapse) ─── */

function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.08] lg:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 lg:py-0 lg:mb-6 lg:pointer-events-none group"
      >
        <div className="flex flex-col items-start">
          <h3 className="font-heading text-white font-bold text-sm uppercase tracking-[0.2em]">
            {title}
          </h3>
          {/* Red accent bar under heading - desktop only */}
          <div className="hidden lg:block w-8 h-[2px] bg-[#E31837] mt-2.5 rounded-full" />
        </div>
        <ChevronDown
          size={16}
          className={`text-white/40 lg:hidden transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } lg:max-h-none lg:opacity-100 lg:overflow-visible`}
      >
        <div className="pb-6 lg:pb-0">{children}</div>
      </div>
    </div>
  );
}

/* ─── Star Rating ─── */

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-white/10 text-white/10"
          }
        />
      ))}
    </div>
  );
}

/* ─── Footer Link ─── */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group block text-white/70 text-[15px] font-body hover:text-white transition-colors duration-200 py-[6px]"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-px left-0 w-0 h-px bg-[#E31837] group-hover:w-full transition-all duration-300" />
      </span>
    </Link>
  );
}

/* ─── Footer ─── */

export function Footer() {
  const ctaRef = useRef(null);
  const trustRef = useRef(null);
  const gridRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  const trustInView = useInView(trustRef, { once: true, amount: 0.3 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <footer className="relative overflow-hidden">
      {/* ════════════════════════════════════════════
          1. GOOGLE TRUST BAR
      ════════════════════════════════════════════ */}
      <div
        ref={trustRef}
        className="relative bg-white border-b border-black/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={trustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            {/* Google rating */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Big rating number */}
              <div className="flex items-center gap-4">
                <div className="text-center sm:text-left">
                  <div className="font-heading text-[#1C1C1E] text-5xl lg:text-6xl font-bold leading-none">
                    {business.googleReviews.rating.toFixed(1)}
                  </div>
                  <StarRating rating={business.googleReviews.rating} size={18} />
                </div>
                <div className="w-px h-14 bg-black/10 hidden sm:block" />
                <div className="hidden sm:block">
                  <p className="text-[#1C1C1E] font-heading font-bold text-lg uppercase tracking-wide">
                    {business.googleReviews.count} Five-Star Reviews
                  </p>
                  <p className="text-[#64748b] text-sm font-body mt-0.5">
                    Verified on Google
                  </p>
                </div>
              </div>
              {/* Mobile sub-text */}
              <div className="sm:hidden text-center">
                <p className="text-[#1C1C1E] font-heading font-bold text-base uppercase tracking-wide">
                  {business.googleReviews.count} Five-Star Reviews
                </p>
                <p className="text-[#64748b] text-xs font-body mt-0.5">
                  Verified on Google
                </p>
              </div>
              {/* Read reviews link */}
              <a
                href="https://share.google/rXefBgv7k6fmqcU5l"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E31837] text-sm font-body font-semibold hover:text-[#1C1C1E] transition-colors flex items-center gap-1.5 group"
              >
                Read Our Reviews
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Credentials + License */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex items-center gap-4 bg-black/[0.02] rounded-2xl px-6 py-3.5">
                <Image
                  src="/images/esa-badge.webp"
                  alt="Electrical Safety Authority"
                  width={120}
                  height={40}
                  className="h-9 w-auto"
                />
                <div className="w-px h-8 bg-black/10" />
                <Image
                  src="/images/ecra-badge.webp"
                  alt="ECRA Licensed"
                  width={120}
                  height={40}
                  className="h-9 w-auto"
                />
                <div className="w-px h-8 bg-black/10" />
                <Image
                  src="/images/wsib-badge.webp"
                  alt="WSIB Ontario"
                  width={120}
                  height={40}
                  className="h-9 w-auto"
                />
              </div>
              {/* License number */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-[#E31837]"
                    fill="currentColor"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                  <span className="text-[#64748b] text-xs uppercase tracking-[0.12em] font-body font-medium">
                    ESA / ECRA Licensed
                  </span>
                </div>
                <span className="font-heading text-[#1C1C1E] text-lg font-bold tracking-[0.1em]">
                  {business.esaLicense}
                </span>
                <div className="flex items-center gap-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 text-emerald-500"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-emerald-600 text-xs uppercase tracking-[0.12em] font-body font-medium">
                    Verified &amp; Insured
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          2. EMERGENCY CTA BANNER
      ════════════════════════════════════════════ */}
      <div
        ref={ctaRef}
        className="relative bg-gradient-to-r from-[#C21430] via-[#E31837] to-[#C21430] overflow-hidden"
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Shine sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_6s_ease-in-out_infinite]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                </div>
                <p className="text-white/80 text-xs uppercase tracking-[0.2em] font-body font-bold">
                  24/7 Emergency Service
                </p>
              </div>
              <h2 className="font-heading text-white text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                Electrical Emergency? Call Now.
              </h2>
              <p className="text-white/60 text-sm font-body mt-1">
                Licensed electricians on standby. We answer day and night.
              </p>
            </div>

            <a
              href={`tel:${business.phoneFull}`}
              className="group flex items-center gap-3 bg-white hover:bg-white/90 rounded-full px-8 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-10 h-10 rounded-full bg-[#E31837] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#1C1C1E] font-heading font-bold text-xl tracking-wide">
                {business.phone}
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          3. MAIN CONTENT GRID
      ════════════════════════════════════════════ */}
      <div ref={gridRef} className="relative bg-[#1C1C1E]">
        {/* Subtle top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10"
          >
            {/* Column 1 - Brand */}
            <div className="lg:col-span-3 text-center lg:text-left pb-6 mb-2 border-b border-white/[0.08] lg:border-0 lg:pb-0 lg:mb-0">
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="https://spe-brand-kit.vercel.app/logo-dark.svg"
                  alt="Superior Power Electric"
                  width={500}
                  height={150}
                  className="h-28 lg:h-32 w-auto"
                />
              </div>
              <p className="font-body text-white/60 text-[15px] mt-1 leading-relaxed max-w-md mx-auto lg:mx-0">
                {business.tagline}. Serving the Greater Toronto Area since{" "}
                {business.foundedYear} with {business.yearsInBusiness} years of
                trusted expertise.
              </p>

              {/* Social icons */}
              <div className="flex justify-center lg:justify-start gap-3 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative w-11 h-11 rounded-full bg-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-[#E31837] transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,24,55,0.3)]"
                  >
                    <social.icon className="w-[18px] h-[18px] relative z-10" />
                  </a>
                ))}
              </div>

              {/* Available - Let's chat */}
              <a
                href={`tel:${business.phoneFull}`}
                className="flex justify-center lg:justify-start mt-6 group"
              >
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 text-xs uppercase tracking-[0.15em] font-body font-semibold">
                    Available 24/7 - Let&apos;s Chat
                  </span>
                </div>
              </a>

              {/* License badge */}
              <div className="flex justify-center lg:justify-start mt-4">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <Shield className="w-4 h-4 text-[#E31837]" />
                  <span className="text-white/50 text-xs font-body font-medium tracking-wide">
                    ESA {business.esaLicense}
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div className="lg:col-span-2">
              <FooterAccordion title="Services">
                <nav className="space-y-0.5">
                  {services.map((service) => (
                    <FooterLink
                      key={service.slug}
                      href={`/services/${service.slug}`}
                    >
                      {service.name}
                    </FooterLink>
                  ))}
                </nav>
              </FooterAccordion>
            </div>

            {/* Column 3 - Areas We Serve */}
            <div className="lg:col-span-2">
              <FooterAccordion title="Service Areas">
                <nav className="space-y-0.5">
                  {locations.map((location) => (
                    <FooterLink
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                    >
                      {location.name}
                    </FooterLink>
                  ))}
                </nav>
              </FooterAccordion>
            </div>

            {/* Column 4 - Company */}
            <div className="lg:col-span-2">
              <FooterAccordion title="Company">
                <nav className="space-y-0.5">
                  {companyLinks.map((link) =>
                    link.href.startsWith("http") ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block text-white/70 text-[15px] font-body hover:text-white transition-colors duration-200 py-[6px]"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-px left-0 w-0 h-px bg-[#E31837] group-hover:w-full transition-all duration-300" />
                        </span>
                      </a>
                    ) : (
                      <FooterLink key={link.href} href={link.href}>
                        {link.name}
                      </FooterLink>
                    )
                  )}
                </nav>
              </FooterAccordion>
            </div>

            {/* Column 5 - Contact */}
            <div className="lg:col-span-3">
              <FooterAccordion title="Contact Us">
                <div
                  itemScope
                  itemType="https://schema.org/ElectricalContractor"
                  className="space-y-5"
                >
                  {/* Phone */}
                  <a
                    href={`tel:${business.phoneFull}`}
                    className="group flex items-center gap-4 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#E31837]/15 flex items-center justify-center group-hover:bg-[#E31837]/25 transition-all duration-300">
                      <Phone className="w-[18px] h-[18px] text-[#E31837]" />
                    </div>
                    <div>
                      <span
                        itemProp="telephone"
                        className="text-white font-heading font-bold text-lg tracking-wide group-hover:text-[#E31837] transition-colors"
                      >
                        {business.phone}
                      </span>
                      <p className="text-white/40 text-xs font-body mt-0.5">
                        Call or text anytime
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${business.email}`}
                    className="group flex items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.12] transition-all duration-300">
                      <Mail className="w-[18px] h-[18px] text-white/60" />
                    </div>
                    <div>
                      <span
                        itemProp="email"
                        className="text-white/80 text-[15px] font-body group-hover:text-white transition-colors"
                      >
                        {business.email}
                      </span>
                      <p className="text-white/40 text-xs font-body mt-0.5">
                        Email us anytime
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0">
                      <MapPin className="w-[18px] h-[18px] text-white/60" />
                    </div>
                    <span
                      itemProp="address"
                      className="text-white/70 text-[15px] font-body leading-relaxed"
                    >
                      {business.address.full}
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0">
                      <Clock className="w-[18px] h-[18px] text-white/60" />
                    </div>
                    <div className="text-white/70 text-[15px] font-body space-y-1 pt-0.5">
                      <p>{business.hours.weekday}</p>
                      <p>{business.hours.weekend}</p>
                      <p>{business.hours.emergency}</p>
                    </div>
                  </div>

                  {/* Emergency */}
                  <div className="flex items-center gap-3 bg-[#E31837]/[0.08] border border-[#E31837]/20 rounded-xl px-4 py-3.5">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E31837]" />
                      <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#E31837] animate-ping" />
                    </div>
                    <span className="text-[#E31837] font-heading font-bold text-xs uppercase tracking-[0.15em]">
                      24/7 Emergency Available
                    </span>
                  </div>
                </div>
              </FooterAccordion>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          4. BOTTOM BAR
      ════════════════════════════════════════════ */}
      <div className="bg-[#141416] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-[88px] lg:pb-6 flex flex-col items-center gap-4">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/35 text-xs font-body">
              &copy; {new Date().getFullYear()} {business.name}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-6 text-white/45 text-[10px] sm:text-xs font-body whitespace-nowrap">
              <Link
                href="/privacy"
                className="hover:text-white/60 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="w-px h-3.5 bg-white/10" />
              <Link
                href="/terms"
                className="hover:text-white/60 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <span className="w-px h-3.5 bg-white/10" />
              <a
                href="https://www.ailocalgrowth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors duration-200"
              >
                Made with ❤️ by AI Local Growth
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
