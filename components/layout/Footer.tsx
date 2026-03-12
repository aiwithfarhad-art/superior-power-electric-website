"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Globe, Phone, Mail, MapPin } from "lucide-react";
import { business } from "@/data/business";

const services = [
  { name: "Panel Upgrades", slug: "panel-upgrades" },
  { name: "Pot Lights", slug: "pot-lights" },
  { name: "EV Charger", slug: "ev-charger" },
  { name: "Residential", slug: "residential" },
  { name: "Commercial", slug: "commercial" },
  { name: "Rewiring", slug: "rewiring" },
  { name: "Hot Tub", slug: "hot-tub" },
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

const socialLinks = [
  { icon: Facebook, href: business.social.facebook, label: "Facebook" },
  { icon: Instagram, href: business.social.instagram, label: "Instagram" },
  { icon: Globe, href: business.domain, label: "Google" },
];

export function Footer() {
  return (
    <footer className="bg-[#1C1C1E] border-t border-white/10">
      {/* Top section */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Column 1 - Brand */}
            <div>
              <Image
                src="https://spe-brand-kit.vercel.app/logo-light.svg"
                alt="Superior Power Electric"
                width={160}
                height={45}
              />
              <p className="font-body text-[#94a3b8] text-sm mt-4">
                {business.tagline}
              </p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#1B4FE4] hover:text-white transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h3 className="font-heading text-white font-bold text-sm uppercase tracking-wider mb-4">
                Services
              </h3>
              <nav>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block text-[#94a3b8] text-sm font-body hover:text-white transition-colors py-1"
                  >
                    {service.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3 - Locations */}
            <div>
              <h3 className="font-heading text-white font-bold text-sm uppercase tracking-wider mb-4">
                Areas We Serve
              </h3>
              <nav>
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="block text-[#94a3b8] text-sm font-body hover:text-white transition-colors py-1"
                  >
                    {location.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 4 - Resources */}
            <div>
              <h3 className="font-heading text-white font-bold text-sm uppercase tracking-wider mb-4">
                Resources
              </h3>
              <nav>
                <Link
                  href="/blog"
                  className="block text-[#94a3b8] text-sm font-body hover:text-white transition-colors py-1"
                >
                  Blog
                </Link>
                <Link
                  href="/blog/electrical-panel-upgrade-cost-ontario"
                  className="block text-[#94a3b8] text-sm font-body hover:text-white transition-colors py-1"
                >
                  Panel Upgrade Costs
                </Link>
                <Link
                  href="/blog/pot-light-installation-cost-brampton"
                  className="block text-[#94a3b8] text-sm font-body hover:text-white transition-colors py-1"
                >
                  Pot Light Pricing
                </Link>
                <Link
                  href="/blog/ev-charger-installation-ontario-rebate"
                  className="block text-[#94a3b8] text-sm font-body hover:text-white transition-colors py-1"
                >
                  EV Charger Guide
                </Link>
                <Link
                  href="/blog/knob-and-tube-wiring-ontario"
                  className="block text-[#94a3b8] text-sm font-body hover:text-white transition-colors py-1"
                >
                  Knob & Tube Guide
                </Link>
              </nav>
            </div>

            {/* Column 5 - Contact */}
            <div
              itemScope
              itemType="https://schema.org/ElectricalContractor"
            >
              <h3 className="font-heading text-white font-bold text-sm uppercase tracking-wider mb-4">
                Contact
              </h3>
              <div className="space-y-3 text-[#94a3b8] text-sm font-body">
                <a
                  href={`tel:${business.phoneFull}`}
                  className="flex items-center gap-2 text-white font-bold hover:text-[#E31837] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span itemProp="telephone">{business.phone}</span>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span itemProp="email">{business.email}</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span itemProp="address">{business.address.full}</span>
                </div>

                <div className="pt-2 space-y-1">
                  <p>{business.hours.weekday}</p>
                  <p>{business.hours.saturday}</p>
                  <p>Sun: {business.hours.sunday}</p>
                </div>

                <p className="text-[#E31837] font-bold text-sm pt-1">
                  24/7 Emergency Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-xs">
            &copy; 2026 {business.name}. All rights reserved.
          </p>
          <p className="text-[#94a3b8] text-xs">
            ESA/ECRA License {business.esaLicense} | Licensed Electrical
            Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}
