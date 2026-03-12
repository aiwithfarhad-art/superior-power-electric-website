"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cities = [
  { name: "Brampton", response: "Same Day" as const, href: "/locations/brampton" },
  { name: "Mississauga", response: "Same Day" as const, href: "/locations/mississauga" },
  { name: "Vaughan", response: "Next Day" as const, href: "/locations/vaughan" },
  { name: "Oakville", response: "Next Day" as const, href: "/locations/oakville" },
  { name: "Georgetown", response: "Next Day" as const, href: "/locations/georgetown" },
  { name: "Caledon", response: "Next Day" as const, href: "/locations/caledon" },
];

export function ServiceAreaSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Image
        src="/images/brampton-service-area.jpg"
        alt="Brampton and GTA service area"
        fill
        className="object-cover"
        quality={75}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.25em] uppercase mb-4 bg-white/10 text-white font-heading">
            Service Area
          </span>
          <h2 className="font-heading text-white font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            Serving Brampton &amp; The GTA
          </h2>
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
                className="group cursor-pointer block bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#1B4FE4]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1B4FE4]/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-heading text-xl font-bold uppercase text-white block">
                      {city.name}
                    </span>
                    <div className="inline-flex items-center gap-1.5 mt-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          city.response === "Same Day"
                            ? "bg-green-400"
                            : "bg-[#1B4FE4]"
                        }`}
                      />
                      <span
                        className={`text-xs font-bold ${
                          city.response === "Same Day"
                            ? "text-green-400"
                            : "text-[#1B4FE4]"
                        }`}
                      >
                        {city.response}
                      </span>
                    </div>
                  </div>
                  <span className="text-white/50 group-hover:text-white text-sm font-body transition-colors flex items-center gap-1">
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
