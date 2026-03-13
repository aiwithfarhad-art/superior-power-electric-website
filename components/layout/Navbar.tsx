"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Menu,
  X,
  Star,
  ChevronDown,
  ChevronRight,
  MapPin,
  Clock,
  Mail,
  ArrowRight,
  Shield,
  Facebook,
  Instagram,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/config";

/* --- Data --- */
const services = [
  { label: "Panel Upgrades", href: "/services/panel-upgrades", desc: "100A to 200A upgrades", img: "/images/services/panel-upgrade.webp" },
  { label: "Pot Lights", href: "/services/pot-lights", desc: "LED recessed lighting", img: "/images/services/pot-lights.webp" },
  { label: "EV Charger", href: "/services/ev-charger", desc: "Level 2 home charging", img: "/images/services/ev-charger.jpg" },
  { label: "Residential", href: "/services/residential", desc: "Full home electrical", img: "/images/services/residential.webp" },
  { label: "Commercial", href: "/services/commercial", desc: "Office & retail wiring", img: "/images/services/commercial.webp" },
  { label: "Rewiring", href: "/services/rewiring", desc: "Aluminum & knob-tube", img: "/images/services/rewiring.webp" },
  { label: "Hot Tub", href: "/services/hot-tub-electrical", desc: "Dedicated circuits", img: "/images/services/hot-tub.webp" },
  { label: "Lighting", href: "/services/lighting", desc: "Indoor & outdoor", img: "/images/services/lighting.webp" },
  { label: "Knob & Tube", href: "/services/knob-and-tube", desc: "Safe removal & replace", img: "/images/services/knob-tube.webp" },
];

const locations = [
  { label: "Brampton", href: "/locations/brampton", img: "/images/cities/brampton-aerial.jpg" },
  { label: "Mississauga", href: "/locations/mississauga", img: "/images/cities/mississauga-aerial.jpg" },
  { label: "Vaughan", href: "/locations/vaughan", img: "/images/cities/vaughan-aerial.jpg" },
  { label: "Caledon", href: "/locations/caledon", img: "/images/cities/caledon-aerial.jpg" },
  { label: "Georgetown", href: "/locations/georgetown", img: "/images/cities/georgetown-aerial.jpg" },
  { label: "Oakville", href: "/locations/oakville", img: "/images/cities/oakville-aerial.jpg" },
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "Panel Upgrade Guide", href: "/services/panel-upgrades" },
  { label: "Pot Light Pricing", href: "/services/pot-lights" },
  { label: "EV Charger Guide", href: "/services/ev-charger" },
  { label: "Knob & Tube Guide", href: "/services/knob-and-tube" },
];

type MegaKey = "services" | "locations" | "contact" | null;

/* --- Subtle top accent bar for panels --- */
const PanelAccent = () => (
  <div
    className="h-[2px] w-full"
    style={{
      background:
        "linear-gradient(90deg, transparent, hsl(0 85% 50% / 0.7), hsl(0 85% 50% / 0.2), transparent)",
    }}
  />
);

/* --- Desktop Mega Panel: Services --- */
const MegaServices = ({ onClose }: { onClose: () => void }) => (
  <div>
    <PanelAccent />
    <div className="grid grid-cols-12 gap-0">
      {/* Hero image column */}
      <div className="col-span-3 relative overflow-hidden">
        <Image
          src="/images/hero-electrician.jpg"
          alt="Electrician at work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/50 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full p-6">
          <div className="flex items-center gap-2 mb-2">
            <Shield size={13} className="text-[#E31837]" />
            <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E31837]">
              Licensed & Insured
            </span>
          </div>
          <h3 className="font-heading text-lg font-bold text-white uppercase tracking-tight leading-tight">
            Expert Electrical Services
          </h3>
          <p className="text-white/60 text-[13px] mt-1.5 leading-relaxed">
            ESA-certified electricians serving Brampton and the GTA.
          </p>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 mt-4 font-heading text-[12px] font-bold uppercase tracking-wider text-white bg-[#E31837] rounded-full px-5 py-2.5 hover:bg-[#C21430] transition-colors hover:shadow-[0_4px_20px_rgba(227,24,55,0.35)]"
          >
            Get Free Quote <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Services grid */}
      <div className="col-span-6 py-5 px-7">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E31837] mb-4">
          Our Services
        </p>
        <div className="grid grid-cols-3 gap-2">
          {services.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              onClick={onClose}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="font-heading text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#E31837] transition-colors block leading-tight">
                  {s.label}
                </span>
                <span className="text-[12px] text-white/50 leading-snug block mt-0.5">
                  {s.desc}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="col-span-3 py-5 px-6">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E31837] mb-4">
          Resources
        </p>
        <div className="space-y-0.5">
          {resources.map((r) => (
            <Link
              key={r.label}
              href={r.href}
              onClick={onClose}
              className="group flex items-center justify-between py-2.5 px-3 rounded-xl transition-all duration-200 hover:bg-gray-50/80"
            >
              <span className="text-[14px] font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                {r.label}
              </span>
              <ChevronRight
                size={15}
                className="text-gray-300 group-hover:text-[#E31837] transition-colors"
              />
            </Link>
          ))}
        </div>
        {/* Emergency callout */}
        <div className="mt-4 p-4 rounded-xl bg-[#E31837]/[0.04]">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E31837]" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#E31837] animate-ping" />
            </div>
            <span className="font-heading text-[12px] font-bold text-[#E31837] uppercase tracking-wider">
              24/7 Emergency
            </span>
          </div>
          <p className="text-[13px] text-gray-500 leading-relaxed mb-2">
            Call us anytime for urgent electrical issues.
          </p>
          <a
            href={`tel:${siteConfig.phoneFormatted}`}
            onClick={onClose}
            className="text-[16px] font-heading font-bold text-[#1C1C1E] block tracking-wide hover:text-[#E31837] transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  </div>
);

/* --- Desktop Mega Panel: Locations --- */
const MegaLocations = ({ onClose }: { onClose: () => void }) => (
  <div>
    <PanelAccent />
    <div className="py-5 px-7">
      <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E31837] mb-4">
        Areas We Serve
      </p>
      <div className="grid grid-cols-3 gap-2">
        {locations.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            onClick={onClose}
            className="group flex items-center gap-3 py-3 px-3.5 rounded-xl transition-all duration-200 hover:bg-gray-50/80"
          >
            <div className="w-9 h-9 rounded-lg bg-gray-100/60 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E31837]/[0.08] transition-all">
              <MapPin size={16} className="text-gray-400 group-hover:text-[#E31837] transition-colors" />
            </div>
            <div>
              <span className="font-heading text-[14px] font-semibold text-gray-800 uppercase tracking-wide group-hover:text-[#E31837] transition-colors block">
                {l.label}
              </span>
              <span className="text-[11px] text-gray-400">Electrician near me</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

/* --- Desktop Mega Panel: Contact --- */
const MegaContact = ({ onClose }: { onClose: () => void }) => (
  <div>
    <PanelAccent />
    <div className="flex">
      {/* Get In Touch */}
      <div className="py-6 px-7 flex-1">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E31837] mb-4">
          Get In Touch
        </p>
        <div className="space-y-2">
          <a
            href={`tel:${siteConfig.phoneFormatted}`}
            onClick={onClose}
            className="group flex items-center gap-3.5 py-3 px-3.5 rounded-xl hover:bg-gray-50/80 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-[#E31837]/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E31837]/[0.12] transition-colors">
              <Phone size={18} className="text-[#E31837]" />
            </div>
            <div>
              <span className="font-heading text-base font-bold text-gray-900 tracking-wide block group-hover:text-[#E31837] transition-colors">
                {siteConfig.phone}
              </span>
              <span className="text-[12px] text-gray-400">Call or text anytime</span>
            </div>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            onClick={onClose}
            className="group flex items-center gap-3.5 py-3 px-3.5 rounded-xl hover:bg-gray-50/80 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-gray-100/60 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors">
              <Mail size={18} className="text-gray-400" />
            </div>
            <div>
              <span className="text-[14px] font-semibold text-gray-700 block group-hover:text-gray-900 transition-colors">
                {siteConfig.email}
              </span>
              <span className="text-[12px] text-gray-400">Email us for quotes</span>
            </div>
          </a>
        </div>
      </div>

      {/* Office */}
      <div className="py-6 px-7 flex-1">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E31837] mb-4">
          Office
        </p>
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-gray-100/60 flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin size={16} className="text-gray-400" />
          </div>
          <div className="text-[14px] text-gray-600 leading-relaxed">
            59 Maisonneuve Blvd,<br />
            Brampton, ON L6P 1Y7
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-gray-100/60 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Clock size={16} className="text-gray-400" />
          </div>
          <div className="text-[14px] text-gray-600 space-y-1">
            <p>Mon - Fri: 8 AM - 6 PM</p>
            <p>Sat: 9 AM - 3 PM</p>
            <p className="text-gray-400">Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* --- Mobile Accordion --- */
const MobileSection = ({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <div className="border-b border-gray-100/60">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 px-0 active:opacity-70 transition-opacity"
    >
      <span className="font-heading text-base font-bold uppercase tracking-[0.1em] text-gray-900">
        {title}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <ChevronDown size={18} className="text-gray-400" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* --- Main Navbar --- */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaKey>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMobileSection(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMegaEnter = (key: MegaKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMega(key);
  };

  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMega(null), 250);
  };

  const closeMega = () => setActiveMega(null);
  const closeMobile = () => {
    setMenuOpen(false);
    setMobileSection(null);
  };

  const megaNavItems: { label: string; key: MegaKey }[] = [
    { label: "Services", key: "services" },
    { label: "Locations", key: "locations" },
    { label: "Contact", key: "contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      onMouseLeave={handleMegaLeave}
    >
      {/* Top Credential Bar - hides on scroll */}
      <div
        className={`hidden lg:block bg-white border-b border-gray-200 transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left - License info */}
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-[15px] font-body">
                Licensed Electricians &middot; Brampton &amp; GTA
              </span>
              <span className="text-gray-300 text-lg">|</span>
              <span className="text-gray-800 text-[15px] font-heading font-bold tracking-wide uppercase">
                ECRA/ESA Licence #{siteConfig.esaLicense?.replace("#", "")}
              </span>
            </div>

            {/* Right - Credential badges */}
            <div className="flex items-center gap-8">
              <Image
                src="/images/esa-badge.webp"
                alt="Electrical Safety Authority"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
              <Image
                src="/images/ecra-badge.webp"
                alt="Electrical Contractor Registration Agency"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
              <Image
                src="/images/wsib-badge.webp"
                alt="WSIB Ontario"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Header Bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-surface-dark/[0.98] backdrop-blur-2xl shadow-[0_1px_30px_rgba(0,0,0,0.25)]"
            : "bg-surface-dark/80 backdrop-blur-xl"
        }`}
      >
        {/* Subtle bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(0 85% 50% / 0.2), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "h-[72px] md:h-[80px]"
                : "h-[78px] md:h-[96px]"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 relative"
              onClick={closeMega}
            >
              <Image
                src="https://spe-brand-kit.vercel.app/logo-dark.svg"
                alt="Superior Power Electric"
                width={200}
                height={60}
                className={`transition-all duration-500 w-auto ${
                  scrolled ? "h-16 md:h-[72px]" : "h-[72px] md:h-[88px]"
                }`}
                priority
              />
            </Link>

            {/* Desktop Nav - centered */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-1">
              {megaNavItems.map((item) => (
                <button
                  key={item.key}
                  onMouseEnter={() => handleMegaEnter(item.key)}
                  onClick={() =>
                    setActiveMega(
                      activeMega === item.key ? null : item.key
                    )
                  }
                  className={`group relative flex items-center gap-1.5 px-4 py-2 font-heading text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-200 rounded-sm ${
                    activeMega === item.key
                      ? "text-primary"
                      : "text-silver-light/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 opacity-50 ${
                      activeMega === item.key
                        ? "rotate-180 opacity-100"
                        : ""
                    }`}
                  />
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full transition-transform duration-300 origin-left ${
                      activeMega === item.key
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />
                </button>
              ))}

              {[
                { label: "About", href: "/about" },
                { label: "Reviews", href: "/#testimonials" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-heading text-sm font-semibold uppercase tracking-[0.1em] text-silver-light/80 hover:text-white transition-colors duration-200"
                  onClick={closeMega}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA - right aligned */}
            <a
              href={`tel:${siteConfig.phoneFormatted}`}
              className="hidden lg:block font-heading text-xl xl:text-2xl font-bold uppercase tracking-wider text-white hover:text-primary transition-colors duration-200 shrink-0"
            >
              Call: {siteConfig.phone}
            </a>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-2.5">
              <a
                href={`tel:${siteConfig.phoneFormatted}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-heading text-sm font-bold uppercase tracking-wide rounded-lg phone-pulse"
                style={{
                  boxShadow: "0 2px 12px hsl(0 85% 50% / 0.35)",
                }}
              >
                <Phone size={18} />
                <span className="whitespace-nowrap">{siteConfig.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  setMobileSection(null);
                }}
                className="text-white/90 p-1.5 rounded-sm hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={menuOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Mega Panels */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.995 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute left-0 right-0"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMegaLeave}
          >
            <div className={`mx-auto px-4 sm:px-6 lg:px-8 pt-1.5 ${activeMega === "services" ? "max-w-6xl" : activeMega === "contact" ? "max-w-3xl" : "max-w-2xl"}`}>
              <div
                className="rounded-2xl overflow-hidden bg-white"
                style={{
                  boxShadow:
                    "0 25px 60px -12px rgba(0,0,0,0.18), 0 12px 28px -6px rgba(0,0,0,0.1)",
                }}
              >
                {activeMega === "services" && (
                  <MegaServices onClose={closeMega} />
                )}
                {activeMega === "locations" && (
                  <MegaLocations onClose={closeMega} />
                )}
                {activeMega === "contact" && (
                  <MegaContact onClose={closeMega} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
              onClick={closeMobile}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-white overflow-hidden"
              style={{ borderTop: "1px solid hsl(0 0% 92%)" }}
            >
              <div className="max-h-[80vh] overflow-y-auto overscroll-contain px-6 py-3">
                {/* Services */}
                <MobileSection
                  title="Services"
                  isOpen={mobileSection === "services"}
                  onToggle={() =>
                    setMobileSection(
                      mobileSection === "services" ? null : "services"
                    )
                  }
                >
                  <div className="space-y-0.5">
                    {services.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        onClick={closeMobile}
                        className="flex items-center justify-between py-3.5 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      >
                        <div>
                          <span className="text-[15px] font-semibold text-gray-900 block">
                            {s.label}
                          </span>
                          <span className="text-[13px] text-gray-400 mt-0.5 block">
                            {s.desc}
                          </span>
                        </div>
                        <ChevronRight
                          size={16}
                          className="text-gray-300 flex-shrink-0 ml-3"
                        />
                      </Link>
                    ))}
                  </div>
                </MobileSection>

                {/* Locations */}
                <MobileSection
                  title="Locations"
                  isOpen={mobileSection === "locations"}
                  onToggle={() =>
                    setMobileSection(
                      mobileSection === "locations" ? null : "locations"
                    )
                  }
                >
                  <div className="grid grid-cols-2 gap-1.5">
                    {locations.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        onClick={closeMobile}
                        className="flex items-center gap-3 py-3.5 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      >
                        <MapPin
                          size={16}
                          className="text-[#E31837] flex-shrink-0"
                        />
                        <span className="text-[15px] font-medium text-gray-800">
                          {l.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </MobileSection>

                {/* Resources */}
                <MobileSection
                  title="Resources"
                  isOpen={mobileSection === "resources"}
                  onToggle={() =>
                    setMobileSection(
                      mobileSection === "resources" ? null : "resources"
                    )
                  }
                >
                  <div className="space-y-0.5">
                    {resources.map((r) => (
                      <Link
                        key={r.label}
                        href={r.href}
                        onClick={closeMobile}
                        className="flex items-center justify-between py-3.5 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      >
                        <span className="text-[15px] text-gray-700 font-medium">
                          {r.label}
                        </span>
                        <ChevronRight
                          size={16}
                          className="text-gray-300"
                        />
                      </Link>
                    ))}
                  </div>
                </MobileSection>

                {/* Contact */}
                <MobileSection
                  title="Contact"
                  isOpen={mobileSection === "contact"}
                  onToggle={() =>
                    setMobileSection(
                      mobileSection === "contact" ? null : "contact"
                    )
                  }
                >
                  <div className="space-y-2">
                    <a
                      href={`tel:${siteConfig.phoneFormatted}`}
                      onClick={closeMobile}
                      className="flex items-center gap-4 py-3.5 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#E31837]/[0.07] flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-[#E31837]" />
                      </div>
                      <div>
                        <span className="text-base font-bold text-gray-900 block">
                          {siteConfig.phone}
                        </span>
                        <span className="text-[13px] text-gray-400">
                          Call or text anytime
                        </span>
                      </div>
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      onClick={closeMobile}
                      className="flex items-center gap-4 py-3.5 px-4 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gray-100/60 flex items-center justify-center flex-shrink-0">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <div>
                        <span className="text-[14px] text-gray-800 block font-semibold break-all">
                          {siteConfig.email}
                        </span>
                        <span className="text-[13px] text-gray-400">
                          Email us for quotes
                        </span>
                      </div>
                    </a>
                    <div className="flex items-start gap-4 py-3.5 px-4">
                      <div className="w-11 h-11 rounded-xl bg-gray-100/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock size={18} className="text-gray-400" />
                      </div>
                      <div className="text-[14px] text-gray-700 space-y-1">
                        <p>Mon - Fri: 8 AM - 6 PM</p>
                        <p>Sat: 9 AM - 3 PM</p>
                        <p className="text-gray-400">Sun: Closed</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-[#E31837]" />
                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#E31837] animate-ping" />
                          </div>
                          <span className="text-[#E31837] font-bold text-[12px] uppercase tracking-wider">
                            24/7 Emergency
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </MobileSection>

                {/* Quick links */}
                <div className="py-4 space-y-1">
                  {[
                    { label: "About", href: "/about" },
                    { label: "Reviews", href: "/#testimonials" },
                    { label: "Blog", href: "/blog" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="block py-3 font-heading text-base font-bold uppercase tracking-[0.1em] text-gray-400 hover:text-[#E31837] active:text-[#E31837] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="py-3">
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#E31837] text-white rounded-xl font-heading text-sm font-bold uppercase tracking-wider hover:bg-[#C21430] transition-colors"
                    style={{ boxShadow: "0 4px 20px rgba(227,24,55,0.3)" }}
                  >
                    Get Free Quote <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Social icons */}
                <div className="py-4 flex items-center justify-center gap-4">
                  <a href="https://www.facebook.com/SuperiorPowerElectric/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-gray-100/60 flex items-center justify-center text-gray-400 hover:bg-[#E31837] hover:text-white transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="https://www.instagram.com/superiorpowerelectric/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-gray-100/60 flex items-center justify-center text-gray-400 hover:bg-[#E31837] hover:text-white transition-all">
                    <Instagram size={18} />
                  </a>
                </div>

                {/* Emergency call button */}
                <div className="pb-8 px-0">
                  <a
                    href="tel:+19054528439"
                    className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#1C1C1E] text-white rounded-xl font-heading text-base font-bold uppercase tracking-wider"
                  >
                    <Phone size={18} />
                    Emergency: (905) 452-8439
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
