"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate as fmAnimate,
} from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

/* ============================================================
   DATA
   ============================================================ */

const reviews = [
  {
    name: "Daniel Lebar",
    text: "We had Superior Power Electric upgrade our service to 200 amps and our experience was great. Throughout the process, from the initial quote to completion of the job, Shaun and his crew were courteous and professional.",
  },
  {
    name: "P. Scott",
    text: "Professional, courteous, tidy, on time and reasonably priced. He does what he says he will do. Shaun sets the bar where all contractors and businesses should strive to be. I was renovating my kitchen in my 1960s era house which was sorely in need of electrical upgrades.",
  },
  {
    name: "Dharam Mann",
    text: "I had some outlets without power; three in the kitchen and one in the backyard. Shaun showed up within 30 minutes and fixed everything in less than an hour. Shaun was professional, walked me through all the issues, educated me and has earned my TRUST.",
  },
  {
    name: "Amanda Braddock",
    text: "A mouse had chewed the wire to our dishwasher and we needed it fixed before we could install our new one. Great communication in setting up the appointment. Shaun was on time and identified the issue and the fix correctly.",
  },
  {
    name: "Anna Mather",
    text: "We called Shaun again because we were so happy with his previous work and knew he was a great communicator and problem solver. Once again he was able to quickly identify the concern and even came on a snowy Sunday to fix our issue.",
  },
  {
    name: "Kent W",
    text: "We had an electrical issue with our circuits and they came in the next day. Shaun was very nice and helpful and above all very professional. He even provided recommendations on how to avoid similar problems moving forward. Great service and would gladly recommend to friends and family.",
  },
  {
    name: "John Senior",
    text: "It's hard to find a good contractor that you can trust but for any of our future electrical needs, Shaun will be our only call! From our initial quote to project completion, Shaun and his team were very professional, courteous and happy to answer all our questions.",
  },
  {
    name: "Miriam Rheault",
    text: "I had the pleasure of meeting Shaun today. Not only was he kind and courteous, he was on time, knowledgeable, efficient and fair! He was very professional. He took the time to explain things and he was honest, ethical and tried to give the best advice.",
  },
  {
    name: "ADRIAN S",
    text: "200A panel upgrade. Great experience dealing with Superior Power Electric. From the initial quote, prompt replies to my questions, pre visit and the completion of the work. Could not be happier with Shaun and the two gentlemen who arrived to do the job.",
  },
];

const row1 = reviews.slice(0, 5);
const row2 = reviews.slice(5);

/* ============================================================
   HELPERS
   ============================================================ */

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

function StarRow({ size = 14 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className="text-yellow-400 fill-yellow-400"
        />
      ))}
    </div>
  );
}

function AnimatedCounter({
  target,
  decimals = 0,
  className = "",
}: {
  target: number;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(decimals > 0 ? "0.0" : "0");

  useEffect(() => {
    if (!inView) return;
    const controls = fmAnimate(mv, target, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsub = mv.on("change", (v) => setVal(v.toFixed(decimals)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, target, decimals, mv]);

  return (
    <span ref={ref} className={className}>
      {val}
    </span>
  );
}

/* ============================================================
   REVIEW CARD (Premium light)
   ============================================================ */

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="w-[300px] md:w-[340px] lg:w-[360px] shrink-0 flex">
      <div className="rounded-2xl p-6 bg-white border border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:border-[#1B4FE4]/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col flex-1 group">
        {/* Stars + Google */}
        <div className="flex items-center gap-3 mb-4">
          <StarRow />
          <img
            src="/images/g-icon.webp"
            alt="Google"
            className="h-4 w-auto ml-auto opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Quote */}
        <p className="font-body text-[#374151] text-[15px] leading-relaxed flex-1">
          &ldquo;{review.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-black/[0.06]">
          <div className="w-9 h-9 rounded-full bg-[#1B4FE4] flex items-center justify-center shrink-0">
            <span className="text-white text-[11px] font-bold font-heading tracking-wide">
              {getInitials(review.name)}
            </span>
          </div>
          <div>
            <span className="font-heading text-[13px] font-semibold uppercase text-[#1C1C1E] tracking-tight block leading-tight">
              {review.name}
            </span>
            <span className="text-[11px] text-[#94a3b8] leading-tight">
              Verified Google Review
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MARQUEE ROW (Desktop / Tablet)
   ============================================================ */

function MarqueeRow({
  items,
  reverse = false,
  speed = 40,
}: {
  items: (typeof reviews)[0][];
  reverse?: boolean;
  speed?: number;
}) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-5 items-stretch"
        style={{
          animation: reduced
            ? "none"
            : `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: paused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {items.map((r, i) => (
          <ReviewCard key={`a${i}`} review={r} />
        ))}
        {items.map((r, i) => (
          <ReviewCard key={`b${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   MAIN SECTION
   ============================================================ */

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  /* Mobile carousel scroll tracking */
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const firstChild = el.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    const cardW = firstChild.getBoundingClientRect().width;
    const gap = 16;
    setActiveSlide(Math.round(el.scrollLeft / (cardW + gap)));
  }, []);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) {
      scrollRef.current.scrollTo({
        left:
          child.offsetLeft -
          (scrollRef.current.clientWidth - child.clientWidth) / 2,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className="relative bg-[#F8F9FA] py-16 md:py-28 lg:py-36 overflow-hidden">
      {/* -------- Subtle decorative gradient blobs -------- */}
      <div className="absolute top-[-300px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#1B4FE4] opacity-[0.025] blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full bg-[#E31837] opacity-[0.02] blur-[180px] pointer-events-none" />

      <div className="relative z-10">
        {/* ===== HEADER ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <span className="eyebrow-label">Testimonials</span>

            {/* Heading */}
            <h2 className="font-heading text-[#1a2975] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
              What Homeowners Say
            </h2>
            <p className="font-accent tracking-[0.05em] text-[#E31837] uppercase text-xl sm:text-2xl lg:text-[36px] leading-[1.2] mt-2">
              Real Google Reviews
            </p>

            {/* Decorative divider */}
            <div className="w-16 h-[2px] mx-auto mt-6 mb-6 bg-gradient-to-r from-transparent via-[#1B4FE4]/20 to-transparent" />

            {/* Premium trust strip */}
            <motion.div
              className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src="/images/g-icon.webp"
                alt="Google"
                className="h-5 sm:h-7 w-auto"
              />
              <div className="h-5 w-px bg-black/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <AnimatedCounter
                  target={5.0}
                  decimals={1}
                  className="text-xl sm:text-2xl font-heading font-bold text-[#1C1C1E]"
                />
                <StarRow size={15} />
              </div>
              <div className="h-5 w-px bg-black/10 hidden sm:block" />
              <span className="text-[#64748b] text-xs sm:text-sm font-body">
                <AnimatedCounter
                  target={47}
                  className="text-[#1C1C1E] font-semibold"
                />{" "}
                verified reviews
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== MARQUEE ROWS (Desktop / Tablet) ===== */}
        <motion.div
          className="hidden md:block space-y-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MarqueeRow items={row1} speed={45} />
          <MarqueeRow items={row2} speed={38} reverse />
        </motion.div>

        {/* ===== MOBILE CAROUSEL ===== */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-4"
          >
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                className="snap-start shrink-0"
                style={{ width: "85vw", maxWidth: "340px" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(i * 0.06, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="rounded-2xl p-5 bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] h-full flex flex-col">
                  {/* Stars + Google */}
                  <div className="flex items-center gap-3 mb-3">
                    <StarRow size={13} />
                    <img
                      src="/images/g-icon.webp"
                      alt="Google"
                      className="h-3.5 w-auto ml-auto opacity-60"
                    />
                  </div>

                  {/* Quote */}
                  <p className="font-body text-[#374151] text-sm leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-black/[0.06]">
                    <div className="w-8 h-8 rounded-full bg-[#1B4FE4] flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-bold font-heading">
                        {getInitials(review.name)}
                      </span>
                    </div>
                    <div>
                      <span className="font-heading text-xs font-semibold uppercase text-[#1C1C1E] tracking-tight block leading-tight">
                        {review.name}
                      </span>
                      <span className="text-[10px] text-[#94a3b8]">
                        Verified Google Review
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient progress bar */}
          <div className="flex justify-center mt-6 px-4">
            <div className="h-[2px] bg-black/[0.06] rounded-full w-full max-w-[200px]">
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${((activeSlide + 1) / reviews.length) * 100}%`,
                  background: "linear-gradient(90deg, #E31837, #1B4FE4)",
                }}
              />
            </div>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-1.5 mt-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeSlide
                    ? "w-6 h-1.5 bg-[#E31837]"
                    : "w-1.5 h-1.5 bg-black/15 hover:bg-black/25"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mt-14 md:mt-20"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJw_EMMkEZK4gRlraWiwcAOnY"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border-2 border-[#1B4FE4] text-[#1B4FE4] font-heading text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#1B4FE4] hover:text-white hover:shadow-[0_8px_24px_rgba(27,79,228,0.25)] group"
            >
              <img
                src="/images/g-icon.webp"
                alt="Google"
                className="h-4 w-auto"
              />
              Read All 47 Reviews on Google
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
