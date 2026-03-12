"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, Camera } from "lucide-react";
import { business } from "@/data/business";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTASection } from "@/components/sections/CTASection";

export function ContactContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1C1C1E] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.625, 0.05, 0, 1] }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-white/10 text-white">
              Contact
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
              CONTACT
              <br />
              <span className="font-heading font-normal italic text-[#E31837]">
                Us Today
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to start your electrical project? Book a $49 on-site
              assessment or request a free remote estimate. Call us directly or fill out the
              form below and we will get back to you within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-Option Assessment Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option A: $49 Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
              className="rounded-xl border-2 border-[#1B4FE4] bg-[#1B4FE4]/5 p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-[#1B4FE4]" />
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#1B4FE4]">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">
                $49 Project Assessment
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7280] mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#1B4FE4] mt-0.5 shrink-0" />
                  Licensed electrician visits your home
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#1B4FE4] mt-0.5 shrink-0" />
                  Detailed written quote on the spot
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#1B4FE4] mt-0.5 shrink-0" />
                  $49 credited toward your project
                </li>
              </ul>
              <p className="text-xs text-[#9CA3AF]">
                Best for panel upgrades, rewiring, EV chargers, and complex projects.
              </p>
            </motion.div>

            {/* Option B: Free Remote Estimate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.625, 0.05, 0, 1] }}
              className="rounded-xl border border-[#E5E5E5] bg-white p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Camera className="w-5 h-5 text-[#6B7280]" />
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-[#6B7280]">
                  Remote Option
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">
                Free Remote Estimate
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7280] mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9CA3AF] mt-0.5 shrink-0" />
                  Send us clear photos of the work area
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9CA3AF] mt-0.5 shrink-0" />
                  Describe your project details
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9CA3AF] mt-0.5 shrink-0" />
                  Receive a ballpark estimate by phone
                </li>
              </ul>
              <p className="text-xs text-[#9CA3AF]">
                Best for pot lights, simple fixture swaps, and smaller projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
            >
              <h2 className="text-2xl font-bold text-[#1C1C1E] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[#9CA3AF] mb-6">
                Fill out the form and we will respond within 2 hours.
              </p>
              <ContactForm />
            </motion.div>

            {/* Right: Contact Details + Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.625, 0.05, 0, 1],
              }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-[#F5F5F5] rounded-xl p-8">
                <h3 className="text-lg font-bold text-[#1C1C1E] mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-5">
                  <a
                    href={`tel:${business.phoneFull}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#1B4FE4]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1C1C1E] text-sm group-hover:text-[#E31837] transition-colors">
                        Phone
                      </div>
                      <div className="text-[#9CA3AF] text-sm mt-0.5">
                        {business.phone}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${business.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#1B4FE4]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1C1C1E] text-sm group-hover:text-[#E31837] transition-colors">
                        Email
                      </div>
                      <div className="text-[#9CA3AF] text-sm mt-0.5">
                        {business.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#1B4FE4]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1C1C1E] text-sm">
                        Address
                      </div>
                      <div className="text-[#9CA3AF] text-sm mt-0.5">
                        {business.address.full}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#1B4FE4]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1C1C1E] text-sm">
                        Hours
                      </div>
                      <div className="text-[#9CA3AF] text-sm mt-0.5 space-y-0.5">
                        <div>{business.hours.weekday}</div>
                        <div>{business.hours.saturday}</div>
                        <div>Sun: {business.hours.sunday}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden h-72 border border-[#E5E5E5]">
                <iframe
                  src={business.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Superior Power Electric location map"
                />
              </div>

              {/* Response Time + Hours */}
              <div className="bg-[#1B4FE4]/5 rounded-xl p-6 border border-[#1B4FE4]/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B4FE4]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#1B4FE4]" />
                  </div>
                  <span className="font-bold text-[#1C1C1E] text-sm">
                    We respond within 2 hours
                  </span>
                </div>
                <div className="text-[#6B7280] text-sm space-y-1 pl-11">
                  <p>Mon - Fri: 8am - 6pm</p>
                  <p>Emergency service: 24/7</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Help Now?"
        subtitle="Call Anytime"
        description="For emergency electrical issues, call us directly. We prioritize same-day emergency service for the Brampton and GTA area."
      />
    </>
  );
}
