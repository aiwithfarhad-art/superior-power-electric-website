"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Star } from "lucide-react";
import { siteConfig } from "@/data/config";

const navLinks = [
  { label: "Services", href: "/services/residential" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations/brampton" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-surface-dark/95 backdrop-blur-xl shadow-2xl border-b border-silver/5 py-0"
          : "bg-transparent py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://spe-brand-kit.vercel.app/logo-dark.svg"
              alt="Superior Power Electric"
              width={200}
              height={60}
              className={`transition-all duration-500 w-auto ${
                scrolled ? "h-10 md:h-12" : "h-12 md:h-16"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-silver hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* Star Rating */}
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="fill-yellow-400" />
              ))}
              <span className="text-silver text-[10px] ml-1">
                {siteConfig.googleRating}
              </span>
            </div>

            {/* Desktop Phone CTA */}
            <a
              href={`tel:${siteConfig.phoneFormatted}`}
              className="btn-primary phone-pulse text-xs !px-5 !py-3"
            >
              <Phone size={16} />
              {siteConfig.phone}
            </a>
          </div>

          {/* Mobile: Phone CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneFormatted}`}
              className="btn-primary phone-pulse text-sm md:text-base !px-5 !py-3 font-bold"
            >
              <Phone size={18} />
              Call Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-text-primary p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface-dark/98 backdrop-blur-xl border-t border-silver/5">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-heading text-sm font-semibold uppercase tracking-[0.12em] text-silver hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
