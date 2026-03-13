"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section className="bg-[#F8F9FA] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-label">Our Work</span>
          <h2 className="font-heading text-[#1a2975] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            See The Difference
          </h2>
          <p className="font-accent italic tracking-[0.05em] text-[#E31837] uppercase text-2xl sm:text-3xl lg:text-[42px] leading-[1.1]">
            Before And After
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-[#1C1C1E] shadow-xl"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* AFTER image - full width background */}
            <div className="absolute inset-0">
              <Image
                src="/images/services/panel-upgrade.webp"
                alt="After - new 200-amp panel upgrade"
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <span className="absolute bottom-4 right-4 bg-[#1B4FE4] text-white px-3 py-1 rounded-full font-heading text-xs uppercase tracking-wider font-bold z-[5]">
                After
              </span>
            </div>

            {/* BEFORE image - clipped by slider */}
            <div
              className="absolute inset-0 overflow-hidden z-[2]"
              style={{ width: `${position}%` }}
            >
              <Image
                src="/images/services/knob-tube.webp"
                alt="Before - old fuse box"
                fill
                className="object-cover"
                style={{ minWidth: containerRef.current?.offsetWidth || "100%" }}
                sizes="(max-width: 896px) 100vw, 896px"
              />
              <span className="absolute bottom-4 left-4 bg-[#E31837] text-white px-3 py-1 rounded-full font-heading text-xs uppercase tracking-wider font-bold">
                Before
              </span>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                <ChevronLeft size={14} className="text-[#1C1C1E] -mr-1" />
                <ChevronRight size={14} className="text-[#1C1C1E] -ml-1" />
              </div>
            </div>
          </div>

          <p className="text-center mt-6 font-body text-[#6B7280] text-sm">
            Old fuse box to 200-amp panel upgrade. Done in one day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
