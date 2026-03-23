"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let formVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        formVisible = entries.some((entry) => entry.isIntersecting);
        updateVisibility();
      },
      { threshold: 0.1 }
    );

    function updateVisibility() {
      const scrolled = window.scrollY > 300;
      setVisible(scrolled && !formVisible);
    }

    const forms = document.querySelectorAll(".quote-form-section");
    forms.forEach((el) => observer.observe(el));

    const quoteById = document.getElementById("quote-form");
    if (quoteById) observer.observe(quoteById);

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: visible ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex"
      style={{
        height: 60,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.3)",
      }}
    >
      <a
        href="tel:+19054528439"
        className="flex-1 flex items-center justify-center gap-2 bg-[#1C1C1E] text-white font-heading text-[15px] font-bold uppercase tracking-wide"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-[#E31837] text-white font-heading text-[15px] font-bold uppercase tracking-wide"
      >
        <Calendar className="w-4 h-4" />
        Book Now
      </Link>
    </motion.div>
  );
}
