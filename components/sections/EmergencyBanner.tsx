"use client";

import { Phone } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <section className="bg-[#E31837] py-12 md:py-16 overflow-hidden relative">
      {/* Diagonal stripe texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side */}
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-white font-black uppercase text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-[1.1]">
              24/7 Emergency Service
            </h2>
            <p className="font-heading font-semibold tracking-tight text-white/90 uppercase text-xl md:text-2xl lg:text-[30px] leading-[1.1] mt-1">
              When You Need Us Most
            </p>
            <p className="font-body text-white/80 text-lg mt-3">
              No heat? Sparks? Burning smell? We come to you.
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+16478729954"
              className="font-heading text-white text-3xl md:text-4xl font-black tracking-tight animate-[phonePulse_2s_ease-in-out_infinite]"
            >
              (647) 872-9954
            </a>
            <a
              href="tel:+16478729954"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#E31837] rounded-lg font-heading font-bold text-sm uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 min-h-[52px]"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes phonePulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}
