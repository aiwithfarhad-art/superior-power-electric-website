"use client";

import Link from "next/link";
import { Wrench, Zap, Settings, Lightbulb, Leaf, Shield, ArrowRight } from "lucide-react";

const commercialServices = [
  { icon: Wrench, title: "Electrical Repairs", desc: "Promptly diagnose and repair any electrical problems in your commercial building, in accordance to ESA standards." },
  { icon: Zap, title: "Electrical Upgrades", desc: "Accommodate additional load with new circuits or panel upgrades, tailored to your needs and budget." },
  { icon: Settings, title: "System Installation", desc: "Complete electrical system installations including wiring, lighting fixtures, and panels - safe, functional, and up to code." },
  { icon: Lightbulb, title: "Lighting Installations", desc: "Professional lighting installation for commercial spaces - LED, fluorescent, HID and more." },
  { icon: Leaf, title: "Energy Efficient Upgrades", desc: "Reduce costs and environmental impact with energy efficient electrical upgrades." },
  { icon: Shield, title: "Safety Inspections", desc: "Ensure your building's electrical systems are up to code, identify hazards, and recommend solutions." },
];

const CommercialSection = () => {
  return (
    <section className="section-dark py-20 md:py-28 lg:py-32 relative">
      <div className="premium-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="eyebrow">Commercial Services</span>
          <h2 className="heading-section mt-3 text-text-primary">
            COMMERCIAL <span className="text-gradient-red">ELECTRICAL</span> SOLUTIONS
          </h2>
          <div className="silver-line mt-4" />
          <p className="mt-4 text-silver text-lg max-w-2xl mx-auto">
            Professional and reliable service for businesses across the GTA - retail stores, restaurants, offices, and everything in between.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children animate-on-scroll">
          {commercialServices.map((s) => (
            <div key={s.title} className="premium-card group hover:scale-[1.03] transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                <s.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-text-primary">{s.title}</h3>
              <p className="mt-3 text-sm text-silver leading-relaxed">{s.desc}</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;
