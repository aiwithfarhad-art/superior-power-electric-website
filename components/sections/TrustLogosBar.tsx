"use client";

import { motion } from "framer-motion";
import { Shield, Star, Clock, ShieldCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Badge {
  icon: LucideIcon;
  label: string;
  desc: string;
}

const badges: Badge[] = [
  { icon: Shield, label: "ESA Licensed", desc: "ECRA #7014710" },
  { icon: Star, label: "Google 5.0\u2605", desc: "47 Verified Reviews" },
  { icon: Clock, label: "15+ Years", desc: "Serving Brampton" },
  { icon: ShieldCheck, label: "Fully Insured", desc: "Complete Coverage" },
  { icon: Zap, label: "Same-Day", desc: "Emergency Available" },
];

export default function TrustLogosBar() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center mb-12 font-heading text-sm uppercase tracking-[0.2em] text-[#64748b] font-semibold">
          Why Brampton Trusts Superior Power
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="flex items-center gap-3 px-6 py-4 bg-[#F1F5F9] rounded-xl border-l-4 border-transparent hover:border-[#1B4FE4] transition-all duration-300"
            >
              <badge.icon className="w-6 h-6 text-[#1B4FE4] shrink-0" strokeWidth={2} />
              <div>
                <p className="font-heading text-sm font-bold uppercase text-[#1C1C1E]">
                  {badge.label}
                </p>
                <p className="text-xs text-[#64748b] font-body">
                  {badge.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
