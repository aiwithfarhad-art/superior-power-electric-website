"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, ArrowRight, ChevronDown } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/superiorpowerelectric/";

const ease = [0.625, 0.05, 0, 1] as const;

const images = [
  { src: "/images/shaun-panel-work.webp", alt: "Shaun working on electrical panel upgrade" },
  { src: "/images/instagram/ig-1.webp", alt: "Exterior pot light installation on new build" },
  { src: "/images/instagram/ig-2.webp", alt: "Full home exterior lighting at night" },
  { src: "/images/shaun-residential-work.webp", alt: "Shaun installing outlet in residential home" },
  { src: "/images/instagram/ig-4.webp", alt: "Basement kitchen electrical and lighting" },
  { src: "/images/shaun-inspection.webp", alt: "Shaun inspecting home electrical with flashlight" },
  { src: "/images/shaun-panel-closeup.webp", alt: "Shaun working on panel closeup" },
];

const imagePositions = [
  "", // index 0 - center
  "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]",
  "[&>div]:!-top-[10vh] [&>div]:!left-[-25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]",
  "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]",
  "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]",
  "[&>div]:!top-[27.5vh] [&>div]:!left-[-22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]",
  "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]",
];

export default function InstagramSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Scale values for each image position
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scales = [scale4, scale5, scale6, scale5, scale6, scale7, scale8];

  // Images fade out in the last 30% of scroll
  const imageOpacity = useTransform(scrollYProgress, [0, 0.65, 0.9], [1, 1, 0]);
  // CTA fades IN during last 30% of scroll
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.65, 0.9], [0, 0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.65, 0.9], [30, 0]);

  return (
    <section className="bg-white relative">
      {/* Section header */}
      <div className="relative z-10 text-center pt-20 md:pt-28 pb-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-heading font-semibold uppercase tracking-[0.2em] mb-4"
            style={{
              background: "rgba(227, 24, 55, 0.15)",
              border: "1px solid rgba(227, 24, 55, 0.3)",
              color: "#E31837",
            }}
          >
            <Instagram className="w-3.5 h-3.5" />
            Instagram
          </span>

          <h2 className="font-heading text-[#1C1C1E] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05] mt-4">
            Follow Our Work
          </h2>
          <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-xl sm:text-2xl lg:text-[36px] leading-[1.2] mt-2">
            @superiorpowerelectric
          </p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-1 text-[#1C1C1E]/30"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-body tracking-wider uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Zoom parallax gallery with integrated CTA */}
      <div ref={container} className="relative h-[150vh]" style={{ overflow: "clip" }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Images */}
          {images.map(({ src, alt }, index) => {
            const scale = scales[index % scales.length];
            return (
              <motion.div
                key={index}
                style={{ scale, opacity: imageOpacity }}
                className={`absolute top-0 flex h-full w-full items-center justify-center ${imagePositions[index]}`}
              >
                <div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-lg">
                  <img
                    src={src || "/placeholder.svg"}
                    alt={alt || `Parallax image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}

          {/* CTA - fades in as images fade out */}
          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto group inline-flex items-center gap-3 bg-[#E31837] text-white px-8 py-4 rounded-lg font-heading text-sm uppercase tracking-wider font-bold hover:bg-[#C21430] transition-all duration-300"
              style={{ boxShadow: "0 4px 20px rgba(227, 24, 55, 0.35)" }}
            >
              <Instagram className="w-5 h-5" />
              Follow @superiorpowerelectric
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
