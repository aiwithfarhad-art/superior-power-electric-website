"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wallet, CheckCircle, ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  "Apply online in minutes",
  "Affordable monthly payments",
  "No prepayment penalties",
  "Rates starting at 0% OAC",
];

export default function FinancingSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F7F7F7] overflow-hidden">
      {/* Subtle accent blob */}
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full bg-[#E31837]/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Content */}
          <div className="lg:w-[60%] text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31837]/8 border border-[#E31837]/15 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E31837] mb-5"
            >
              <Wallet className="w-3.5 h-3.5" />
              Financing Available
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="font-heading text-[28px] sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight leading-[1.08] text-[#1C1C1E]"
            >
              Big Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-xl sm:text-2xl lg:text-[34px] leading-[1.15] mt-1"
            >
              Easy Monthly Payments.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="font-body text-[#64748b] text-base lg:text-lg mt-5 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Panel upgrades, rewiring, and EV charger installations don&apos;t have to break the bank.
              We&apos;ve partnered with Financeit to offer flexible payment plans so you can get the work
              done now and pay over time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0"
            >
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4.5 h-4.5 text-[#E31837] shrink-0" />
                  <span className="font-body text-sm text-[#374151]">{b}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center"
            >
              <a
                href="https://www.financeit.ca/s/ppv2rQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#E31837] text-white rounded-full font-heading text-sm font-bold uppercase tracking-wider hover:bg-[#C21430] transition-colors duration-300 shadow-[0_4px_20px_rgba(227,24,55,0.25)]"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#94a3b8] font-body">Powered by Financeit</span>
            </motion.div>
          </div>

          {/* Right - QR Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="lg:w-[40%] w-full max-w-sm"
          >
            <div className="bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/images/financeit-qr.webp"
                  alt="Scan to apply for financing with Financeit"
                  fill
                  className="object-contain"
                  sizes="192px"
                />
              </div>
              <p className="font-heading text-base font-bold text-[#1C1C1E] uppercase tracking-wide">
                Scan to Apply
              </p>
              <p className="font-body text-sm text-[#64748b] mt-1.5 leading-relaxed">
                Point your phone camera at the code to see your financing options instantly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
