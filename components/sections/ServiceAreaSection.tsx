"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cities = [
  { name: "Brampton", response: "Same Day" as const, href: "/locations/brampton" },
  { name: "Mississauga", response: "Same Day" as const, href: "/locations/mississauga" },
  { name: "Vaughan", response: "Same Day" as const, href: "/locations/vaughan" },
  { name: "Oakville", response: "Same Day" as const, href: "/locations/oakville" },
  { name: "Georgetown", response: "Same Day" as const, href: "/locations/georgetown" },
  { name: "Caledon", response: "Same Day" as const, href: "/locations/caledon" },
];

export function ServiceAreaSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow-label">Service Area</span>
          <h2 className="font-heading text-[#1C1C1E] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            Serving Your City
          </h2>
          <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl sm:text-3xl lg:text-[42px] leading-[1.1]">
            Brampton And Beyond
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={city.href}
                className="group cursor-pointer block bg-white border border-gray-200 rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#E31837]/50 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(27,79,228,0.12)] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-heading text-xl font-bold uppercase text-[#1C1C1E] block">
                      {city.name}
                    </span>
                    <div className="inline-flex items-center gap-1.5 mt-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          city.response === "Same Day"
                            ? "bg-[#E31837]"
                            : "bg-[#E31837]"
                        }`}
                      />
                      <span
                        className={`text-xs font-bold ${
                          city.response === "Same Day"
                            ? "text-[#E31837]"
                            : "text-[#E31837]"
                        }`}
                      >
                        {city.response}
                      </span>
                    </div>
                  </div>
                  <span className="text-[#94a3b8] group-hover:text-[#E31837] text-sm font-body transition-colors flex items-center gap-1">
                    View Services
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
