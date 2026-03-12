"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Star, Award, ThumbsUp, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/data/business";

const reasons = [
  {
    icon: Shield,
    title: "ESA Licensed & Insured",
    description: `ESA License ${business.esaLicense}. Every job meets the Ontario Electrical Safety Code. Fully insured for your protection.`,
  },
  {
    icon: Clock,
    title: "15+ Years Experience",
    description:
      "Over 15 years serving Brampton and the GTA. We have seen it all and know how to handle any electrical challenge.",
  },
  {
    icon: Star,
    title: `${business.googleReviews.count} Five-Star Reviews`,
    description:
      "Perfect 5.0 rating on Google. Our customers trust us with their homes and businesses, and we deliver every time.",
  },
  {
    icon: ThumbsUp,
    title: "$49 Assessments",
    description:
      "Transparent pricing with no hidden fees. Book a $49 on-site assessment (credited toward your project) or request a free remote estimate.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description:
      "Clean, professional work that passes inspection the first time. We take pride in every job, big or small.",
  },
  {
    icon: Wrench,
    title: "Full-Service Electrical",
    description:
      "From simple repairs to complete home rewiring. Residential and commercial. One call handles it all.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Why Us"
          line1="Why Homeowners"
          line2="Choose Us"
          description={`${business.yearsInBusiness} years of trusted electrical service in Brampton and the Greater Toronto Area.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.625, 0.05, 0, 1],
              }}
              className="bg-white rounded-xl p-6 border border-[#E5E5E5]"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E31837]/10 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-[#E31837]" />
              </div>
              <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">
                {reason.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
