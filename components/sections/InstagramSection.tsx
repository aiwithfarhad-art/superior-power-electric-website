"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/superiorpowerelectric/";

const ease = [0.625, 0.05, 0, 1] as const;

const posts = [
  { id: 1, src: "/images/instagram/ig-1.webp", alt: "Exterior pot light installation on new build" },
  { id: 2, src: "/images/instagram/ig-2.webp", alt: "Full home exterior lighting at night" },
  { id: 3, src: "/images/instagram/ig-3.webp", alt: "Kitchen pot light installation with modern finishes" },
  { id: 4, src: "/images/instagram/ig-4.webp", alt: "Basement kitchen electrical and lighting" },
  { id: 5, src: "/images/instagram/ig-5.webp", alt: "200 amp panel upgrade with clean wiring" },
];

export default function InstagramSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="eyebrow-label">Instagram</span>
          <h2 className="font-heading text-[#1a2975] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            Follow Our Work
          </h2>
          <p className="font-accent italic tracking-[0.05em] text-[#E31837] uppercase text-2xl sm:text-3xl lg:text-[42px] leading-[1.1]">
            @superiorpowerelectric
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease }}
              className={`group relative rounded-xl overflow-hidden ${
                index === 0
                  ? "md:row-span-2 aspect-square md:aspect-auto md:min-h-[400px]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes={index === 0 ? "(max-width: 768px) 50vw, 33vw" : "(max-width: 768px) 50vw, 33vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Instagram className="w-6 h-6 text-white" />
                  <span className="text-white font-heading text-xs sm:text-sm uppercase tracking-wider font-bold">
                    View on Instagram
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease }}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#1C1C1E] text-white px-8 py-4 rounded-lg font-heading text-sm uppercase tracking-wider font-bold hover:bg-[#E31837] transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            Follow @superiorpowerelectric
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
