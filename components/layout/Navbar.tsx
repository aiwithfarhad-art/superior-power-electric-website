"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1C1C1E] border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              Superior <span className="text-[#E31837]">Power</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-[#2A2A2E] border border-white/10 rounded-xl p-2 min-w-[240px] shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${business.phoneFull}`}
              className="hidden sm:inline-flex items-center gap-2 bg-[#E31837] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#C21430] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
            <a
              href={`tel:${business.phoneFull}`}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 bg-[#E31837] text-white rounded-lg"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 text-gray-300 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-200",
            mobileOpen ? "max-h-[500px] pb-4" : "max-h-0"
          )}
        >
          <div className="space-y-1 pt-2">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      servicesOpen ? "max-h-[400px]" : "max-h-0"
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block pl-6 pr-3 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
