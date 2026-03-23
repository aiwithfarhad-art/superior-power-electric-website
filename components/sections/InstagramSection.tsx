"use client";

import { useRef, useState, useEffect } from "react";
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
  "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[60vw] md:[&>div]:!w-[35vw]",
  "[&>div]:!-top-[10vh] [&>div]:!left-[-25vw] [&>div]:!h-[45vh] [&>div]:!w-[45vw] md:[&>div]:!w-[20vw]",
  "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[50vw] md:[&>div]:!w-[25vw]",
  "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[45vw] md:[&>div]:!w-[20vw]",
  "[&>div]:!top-[27.5vh] [&>div]:!left-[-22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[55vw] md:[&>div]:!w-[30vw]",
  "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[35vw] md:[&>div]:!w-[15vw]",
];

/* ── Mobile: 2-col masonry grid ─────────────────────────────── */
function MobileGrid() {
  const mobileImages = images.slice(0, 6);
  const col1 = [mobileImages[0], mobileImages[2], mobileImages[4]];
  const col2 = [mobileImages[1], mobileImages[3], mobileImages[5]];

  return (
    <div className="px-4 pb-6">
      <div className="grid grid-cols-2 gap-2">
        {/* Left column - starts taller */}
        <div className="flex flex-col gap-2">
          {col1.map((img, i) => (
            <motion.div
              key={`l-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className={`overflow-hidden rounded-xl ${i === 0 ? "aspect-[3/4]" : i === 1 ? "aspect-square" : "aspect-[4/3]"}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        {/* Right column - starts shorter */}
        <div className="flex flex-col gap-2 pt-6">
          {col2.map((img, i) => (
            <motion.div
              key={`r-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.05, ease }}
              className={`overflow-hidden rounded-xl ${i === 0 ? "aspect-square" : i === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 text-center"
      >
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#E31837] text-white px-6 py-3.5 rounded-lg font-heading text-sm uppercase tracking-wider font-bold hover:bg-[#C21430] transition-all duration-300"
          style={{ boxShadow: "0 4px 20px rgba(227, 24, 55, 0.35)" }}
        >
          <Instagram className="w-5 h-5" />
          Follow Us
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}

/* ── Desktop: zoom parallax with cross-fade CTA ─────────────── */
function DesktopParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scales = [scale4, scale5, scale6, scale5, scale6, scale7, scale8];

  const imageOpacity = useTransform(scrollYProgress, [0, 0.65, 0.9], [1, 1, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.65, 0.9], [0, 0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.65, 0.9], [30, 0]);

  return (
    <div ref={container} className="relative h-[150vh]" style={{ overflow: "clip" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
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
  );
}

/* ── Main section ────────────────────────────────────────────── */
export default function InstagramSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="bg-white relative">
      {/* Section header */}
      <div className={`relative z-10 text-center px-4 ${isMobile ? "pt-14 pb-4" : "pt-20 md:pt-28 pb-6"}`}>
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

          <h2 className={`font-heading text-[#1C1C1E] font-black uppercase tracking-tight leading-[1.05] mt-4 ${isMobile ? "text-2xl" : "text-3xl sm:text-4xl lg:text-[56px]"}`}>
            Follow Our Work
          </h2>
          <p className={`font-heading font-semibold tracking-tight text-[#E31837] uppercase leading-[1.2] mt-2 ${isMobile ? "text-lg" : "text-xl sm:text-2xl lg:text-[36px]"}`}>
            @superiorpowerelectric
          </p>

          {/* Scroll hint - desktop only */}
          {!isMobile && (
            <motion.div
              className="mt-8 flex flex-col items-center gap-1 text-[#1C1C1E]/30"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-body tracking-wider uppercase">Scroll to explore</span>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Conditionally render mobile grid or desktop parallax */}
      {isMobile ? <MobileGrid /> : <DesktopParallax />}
    </section>
  );
}
