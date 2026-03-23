"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  animate as fmAnimate,
  AnimatePresence,
} from "framer-motion";
import {
  Shield,
  Star,
  Clock,
  Zap,
  Phone,
  ShieldCheck,
  ClipboardList,
  Sparkles,
  FileCheck,
  ChevronDown,
  ArrowRight,
  Camera,
} from "lucide-react";
import Image from "next/image";
import { business } from "@/data/business";
import { testimonials } from "@/data/testimonials";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { CTASection } from "@/components/sections/CTASection";

/* ============================================================
   CONSTANTS & DATA
   ============================================================ */

const ease = [0.625, 0.05, 0, 1] as const;

const milestones = [
  { year: "2010", title: "Founded in Brampton", description: "Shaun starts Superior Power Electric with one truck and a toolbox." },
  { year: "2013", title: "First Commercial Client", description: "Expanded into commercial electrical for local businesses across the GTA." },
  { year: "2015", title: "Fleet Expansion", description: "Added second and third service trucks as demand grew through referrals." },
  { year: "2018", title: "500+ Jobs Milestone", description: "Completed over 500 residential and commercial electrical projects." },
  { year: "2022", title: "EV Charger Specialist", description: "Added Level 2 EV charger installation as Ontario goes electric." },
  { year: "2025", title: "47 Five-Star Reviews", description: "Maintained a perfect 5.0 Google rating with zero negative reviews." },
];

const certifications = [
  {
    badge: "/images/esa-badge.webp",
    title: "ESA Licensed",
    license: `ESA License ${business.esaLicense}`,
    description: "Every job inspected and certified by the Electrical Safety Authority. Ontario's governing body for electrical safety.",
  },
  {
    badge: "/images/ecra-badge.webp",
    title: "ECRA Registered",
    license: "Registered Electrical Contractor",
    description: "Verified by the Electrical Contractor Registration Agency. Your guarantee of a legitimate, qualified contractor.",
  },
  {
    badge: "/images/wsib-badge.webp",
    title: "WSIB Insured",
    license: "Full WSIB Coverage",
    description: "Workers covered by the Workplace Safety and Insurance Board. You are never liable for on-site injuries.",
  },
];

const values = [
  { icon: Shield, title: "Quality First", description: "We don't cut corners. Every wire, every connection, every panel is done to the highest standard. If it is not right, we redo it." },
  { icon: ClipboardList, title: "Honest Pricing", description: "Detailed written estimates before we start. The price we quote is the price you pay. No hidden fees. No surprises." },
  { icon: Sparkles, title: "Clean Worksite", description: "We treat your home like it is ours. Drop cloths down, tools organized, debris cleaned up. You will never know we were there." },
  { icon: ShieldCheck, title: "Code Compliant", description: "Every project meets Ontario Electrical Safety Code. Permits pulled when required. ESA inspected and certified." },
];

const statsData = [
  { value: 500, suffix: "+", label: "Jobs Completed" },
  { value: 47, suffix: "", label: "5-Star Reviews" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Licensed & Insured" },
];

const galleryItems = [
  { src: "/images/shaun-panel-work.webp", label: "Panel Upgrade" },
  { src: "/images/instagram/ig-1.webp", label: "Exterior Lighting" },
  { src: "/images/shaun-residential-work.webp", label: "Residential Work" },
  { src: "/images/instagram/ig-3.webp", label: "Pot Lights" },
  { src: "/images/shaun-inspection.webp", label: "Electrical Inspection" },
  { src: "/images/shaun-panel-closeup.webp", label: "Panel Closeup" },
];

const processSteps = [
  { icon: Phone, title: "Call or Text", description: `Reach us at ${business.phone}. Tell us what you need. We respond within 2 hours.` },
  { icon: ClipboardList, title: "$49 Assessment", description: "We inspect your electrical system and identify every issue. The $49 is credited toward your project." },
  { icon: FileCheck, title: "Clear Fixed Quote", description: "Written estimate with no hidden fees. You approve before we start. No surprises." },
  { icon: ShieldCheck, title: "Work Done Right", description: "ESA-certified installation. Permit pulled when required. 100% satisfaction guaranteed." },
];

const aboutFaqs = [
  { q: "Are you licensed and insured?", a: "Yes. We hold ESA License #7014710, we are ECRA registered, and carry full WSIB coverage. Every job is done to Ontario Electrical Safety Code standards." },
  { q: "What areas do you serve?", a: "We serve Brampton and the entire Greater Toronto Area including Mississauga, Vaughan, Caledon, Georgetown, Oakville, and surrounding communities." },
  { q: "Do you offer emergency service?", a: "Yes. We provide 24/7 emergency electrical service. Same-day response for urgent issues like power outages, sparking outlets, or tripped panels." },
  { q: "How does the $49 assessment work?", a: "A licensed electrician visits your home, inspects your electrical system, and provides a detailed report. If you proceed with the work, the $49 is credited toward your project." },
  { q: "Do you pull permits?", a: "Yes. When required by Ontario code, we handle all permits and coordinate ESA inspections. You never have to deal with paperwork." },
  { q: "What payment methods do you accept?", a: "We accept e-transfer, credit card, debit, and cheque. Financing is available for larger projects like panel upgrades and full rewiring." },
  { q: "How long does a panel upgrade take?", a: "Most 100A to 200A panel upgrades are completed in a single day. Complex installations involving meter base replacement may take two days." },
  { q: "Do you provide warranties?", a: "Yes. All installations come with a workmanship warranty. We stand behind every connection, every wire, and every panel we install." },
];

const marqueeReviews = testimonials.slice(0, 10);
const row1Reviews = marqueeReviews.slice(0, 5);
const row2Reviews = marqueeReviews.slice(5);

/* ============================================================
   HELPER COMPONENTS
   ============================================================ */

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

function StarRow({ size = 14 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

function AnimatedCounter({ target, decimals = 0, className = "" }: { target: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(decimals > 0 ? "0.0" : "0");

  useEffect(() => {
    if (!inView) return;
    const controls = fmAnimate(mv, target, { duration: 2.2, ease: [0.16, 1, 0.3, 1] });
    const unsub = mv.on("change", (v) => setVal(v.toFixed(decimals)));
    return () => { controls.stop(); unsub(); };
  }, [inView, target, decimals, mv]);

  return <span ref={ref} className={className}>{val}</span>;
}

function ReviewCard({ review }: { review: { text: string; name: string } }) {
  return (
    <div className="w-[300px] md:w-[340px] lg:w-[360px] shrink-0 flex">
      <div className="rounded-2xl p-6 bg-white border border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:border-[#E31837]/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col flex-1 group">
        <div className="flex items-center gap-3 mb-4">
          <StarRow />
          <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto ml-auto opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <p className="font-body text-[#374151] text-[15px] md:text-base leading-relaxed flex-1">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-black/[0.06]">
          <div className="w-9 h-9 rounded-full bg-[#E31837] flex items-center justify-center shrink-0">
            <span className="text-white text-[11px] font-bold font-heading tracking-wide">{getInitials(review.name)}</span>
          </div>
          <div>
            <span className="font-heading text-[13px] font-semibold uppercase text-[#1C1C1E] tracking-tight block leading-tight">{review.name}</span>
            <span className="text-[11px] text-[#94a3b8] leading-tight">Verified Google Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, speed = 40 }: { items: { text: string; name: string }[]; reverse?: boolean; speed?: number }) {
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
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-5 items-stretch"
        style={{
          animation: reduced ? "none" : `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: paused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {items.map((r, i) => <ReviewCard key={`a${i}`} review={r} />)}
        {items.map((r, i) => <ReviewCard key={`b${i}`} review={r} />)}
      </div>
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }: { item: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-black/[0.06] rounded-xl overflow-hidden transition-colors duration-300 hover:border-[#E31837]/15 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
      >
        <span className="font-heading text-sm md:text-base font-bold text-[#1C1C1E] uppercase tracking-tight">{item.q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-[#E31837] shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-5 pb-5 pt-0">
              <p className="font-body text-[#64748b] text-sm md:text-base leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export function AboutContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 40%"],
  });
  const timelineScaleY = useTransform(timelineProgress, [0, 1], [0, 1]);

  // Mobile review carousel
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const firstChild = el.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    const cardW = firstChild.getBoundingClientRect().width;
    setActiveSlide(Math.round(el.scrollLeft / (cardW + 16)));
  }, []);
  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) {
      scrollRef.current.scrollTo({ left: child.offsetLeft - (scrollRef.current.clientWidth - child.clientWidth) / 2, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* ================================================================
          S1 - CINEMATIC HERO
          ================================================================ */}
      <section className="relative bg-[#1C1C1E] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E31837] opacity-[0.03] blur-[150px] pointer-events-none" />
        <div className="absolute top-0 right-[-5%] w-[400px] h-[400px] rounded-full bg-[#E31837] opacity-[0.02] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
            <div className="lg:w-[55%] text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 mb-5"
              >
                <Clock className="w-3 h-3 text-[#E31837]" />
                Since 2020
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="font-heading text-[7.5vw] sm:text-4xl md:text-5xl lg:text-[56px] font-black uppercase leading-[1.05] tracking-tight text-white"
              >
                Meet the Man
                <br />
                <span className="text-[#E31837]">Behind the Meter</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease }}
                className="font-body text-gray-400 text-base md:text-lg lg:text-xl mt-4 lg:mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {business.owner} founded Superior Power Electric with one truck and a simple rule - do the job right, or don&apos;t do it at all. {business.yearsInBusiness} years later, that rule hasn&apos;t changed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 lg:mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
              >
                {[
                  { icon: Shield, text: `ESA ${business.esaLicense}`, starFill: false },
                  { icon: Clock, text: `${business.yearsInBusiness} Years`, starFill: false },
                  { icon: Star, text: `${business.googleReviews.count} Reviews (${business.googleReviews.rating}/5)`, starFill: true },
                ].map((pill, i) => (
                  <motion.span
                    key={pill.text}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.55 + i * 0.08 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] rounded-full text-sm text-white/80 border border-white/[0.06]"
                  >
                    <pill.icon className={`w-3.5 h-3.5 ${pill.starFill ? "text-yellow-400 fill-yellow-400" : "text-[#E31837]"}`} />
                    {pill.text}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease }}
                className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <a
                  href="/booking"
                  className="relative overflow-hidden inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#E31837] text-white rounded-lg font-heading text-base font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#C21430] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#E31837]/30"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" style={{ animation: "shimmerSweep 3s ease-in-out infinite" }} />
                  <Zap className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Book $49 Assessment</span>
                </a>
                <a
                  href={`tel:${business.phoneFull}`}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 border-2 border-white/20 text-white rounded-lg font-heading text-base font-bold uppercase tracking-wide transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                >
                  <Phone className="w-4 h-4" />
                  {business.phone}
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="lg:w-[45%] relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[560px]">
                <Image src="/images/about-shaun.webp" alt={`${business.owner} - Founder of Superior Power Electric`} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 45vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-8 w-20 h-1 bg-[#E31837] rounded-full" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -left-4 lg:-left-6 bg-white rounded-xl p-3 shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center gap-3"
              >
                <img src="/images/esa-badge.webp" alt="ESA Licensed" className="h-10 w-auto" />
                <div>
                  <span className="font-heading text-xs font-bold text-[#1C1C1E] uppercase tracking-wide block">Licensed</span>
                  <span className="font-body text-[10px] text-[#64748b]">ESA {business.esaLicense}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          S2 - SHAUN'S STORY
          ================================================================ */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/company-fleet.webp" alt="Superior Power Electric service fleet" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-2 left-8 w-16 h-1 bg-[#E31837] rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <span className="eyebrow-label">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1C1C1E] leading-[1.05]">
                ONE TRUCK.
              </h2>
              <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl md:text-3xl lg:text-[40px] leading-[1.1] mt-1">
                One Promise.
              </p>

              <div className="mt-6 space-y-4 font-body text-[#64748b] text-base md:text-lg leading-relaxed">
                <p>In {business.foundedYear}, {business.owner} left a comfortable job to start Superior Power Electric out of his garage in Brampton. One truck. One toolbox. One commitment: every job done right the first time.</p>
                <p>Word spread. Not through advertising - through referrals. One happy customer told their neighbor. That neighbor told theirs. Within five years, that one truck became a fleet of three.</p>
                <p>Today, Superior Power Electric holds ESA License {business.esaLicense}, maintains a perfect {business.googleReviews.rating}-star rating across {business.googleReviews.count} Google reviews, and serves homeowners and businesses across the Greater Toronto Area.</p>
              </div>

              <p className="mt-6 font-body text-[#1C1C1E] font-medium text-base md:text-lg">
                {business.googleReviews.count} five-star reviews. Zero shortcuts. That is the whole story.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          S3 - COMPANY TIMELINE
          ================================================================ */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center mb-16">
            <span className="eyebrow-label">{business.yearsInBusiness} Years Strong</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1C1C1E] leading-[1.05]">OUR JOURNEY</h2>
            <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl md:text-3xl lg:text-[40px] leading-[1.1] mt-1">Powering Homes</p>
          </motion.div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-black/[0.06]">
              <motion.div className="absolute top-0 left-0 w-full bg-[#E31837] origin-top" style={{ scaleY: timelineScaleY, height: "100%" }} />
            </div>

            <div className="space-y-12 md:space-y-16">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease }}
                    className={`relative flex items-start gap-6 lg:gap-0 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    <div className="lg:hidden absolute left-6 -translate-x-1/2 w-12 h-12 rounded-full bg-[#E31837] flex items-center justify-center z-10 shadow-lg shadow-[#E31837]/20">
                      <span className="font-heading text-[11px] font-bold text-white tracking-wide">{m.year}</span>
                    </div>

                    <div className={`hidden lg:block lg:w-[calc(50%-2rem)] ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
                      <h3 className="font-heading text-lg font-bold text-[#1C1C1E] uppercase tracking-tight">{m.title}</h3>
                      <p className="font-body text-[#64748b] text-sm mt-1 leading-relaxed">{m.description}</p>
                    </div>

                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#E31837] items-center justify-center z-10 shadow-lg shadow-[#E31837]/20">
                      <span className="font-heading text-xs font-bold text-white tracking-wider">{m.year}</span>
                    </div>

                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />

                    <div className="lg:hidden ml-14 pl-4">
                      <h3 className="font-heading text-base font-bold text-[#1C1C1E] uppercase tracking-tight">{m.title}</h3>
                      <p className="font-body text-[#64748b] text-sm mt-1 leading-relaxed">{m.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          S4 - CERTIFICATIONS
          ================================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center mb-14">
            <span className="eyebrow-label">Fully Licensed</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1C1C1E] leading-[1.05]">CERTIFIED.</h2>
            <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl md:text-3xl lg:text-[40px] leading-[1.1] mt-1">Insured. Inspected.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div key={cert.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="card-premium p-8 text-center hover:border-[#E31837]/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-2 h-2 rounded-full bg-[#E31837] mx-auto mb-5" />
                <img src={cert.badge} alt={cert.title} className="h-20 w-auto mx-auto mb-5" />
                <h3 className="font-heading text-lg font-bold text-[#1C1C1E] uppercase tracking-tight">{cert.title}</h3>
                <p className="font-body text-xs text-[#E31837] font-semibold uppercase tracking-wider mt-1">{cert.license}</p>
                <p className="font-body text-[#64748b] text-sm leading-relaxed mt-3">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Red banner */}
      <section className="py-5 bg-[#E31837]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease }}
            className="text-white text-sm md:text-base font-bold text-center flex items-center justify-center gap-3 font-heading uppercase tracking-wide"
          >
            <ShieldCheck className="w-5 h-5 shrink-0" />
            ESA Licensed. ECRA Registered. WSIB Insured. Every job to code.
          </motion.p>
        </div>
      </section>

      {/* ================================================================
          S5 - CORE VALUES
          ================================================================ */}
      <section className="py-20 md:py-28 bg-[#1C1C1E] relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#E31837] opacity-[0.03] blur-[150px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center lg:text-left mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60 mb-5">What We Stand For</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">OUR VALUES</h2>
            <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl md:text-3xl lg:text-[40px] leading-[1.1] mt-1">Built Into Every Job</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="bg-white/[0.04] border border-white/[0.08] border-l-4 border-l-[#E31837] rounded-xl p-6 hover:bg-white/[0.06] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#E31837] flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white uppercase tracking-tight">{v.title}</h3>
                    <p className="font-body text-gray-400 text-sm leading-relaxed mt-1.5">{v.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          S6 - BY THE NUMBERS
          ================================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center mb-16">
            <span className="eyebrow-label">By The Numbers</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[56px] font-black uppercase tracking-tight text-[#1C1C1E] leading-[1.05]">The Numbers Speak</h2>
            <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl md:text-3xl lg:text-[42px] leading-[1.1] mt-1">For Themselves</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-3/5">
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {statsData.map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease }}
                    className="rounded-2xl p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <NumberTicker value={stat.value} suffix={stat.suffix} className="stat-number font-heading text-5xl md:text-6xl lg:text-7xl font-black" />
                    <p className="font-body text-sm text-[#64748b] uppercase tracking-wider mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div className="lg:w-2/5" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }}>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#E31837] shadow-[0_4px_24px_rgba(227,24,55,0.08)]">
                <blockquote className="font-body text-[#4B5563] text-base md:text-lg italic leading-relaxed">
                  &ldquo;Professional, courteous, tidy, on time and reasonably priced. He does what he says he will do. Shaun sets the bar where all contractors and businesses should strive to be.&rdquo;
                </blockquote>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <p className="font-heading text-[#1C1C1E] font-bold text-sm uppercase">P. Scott</p>
                    <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto" />
                  </div>
                  <StarRow size={14} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          S7 - GOOGLE REVIEWS
          ================================================================ */}
      <section className="relative bg-[#F8F9FA] py-16 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute top-[-300px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#E31837] opacity-[0.025] blur-[200px] pointer-events-none" />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-14 md:mb-20">
              <span className="eyebrow-label">Real Reviews</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-[56px] font-black uppercase tracking-tight text-[#1C1C1E] leading-[1.05]">What Homeowners Say</h2>
              <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-xl md:text-2xl lg:text-[36px] leading-[1.2] mt-2">Verified Google Reviews</p>
              <div className="w-16 h-[2px] mx-auto mt-6 mb-6 bg-gradient-to-r from-transparent via-[#E31837]/20 to-transparent" />

              <motion.div initial={{ opacity: 0, y: 15, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <img src="/images/g-icon.webp" alt="Google" className="h-5 sm:h-7 w-auto" />
                <div className="h-5 w-px bg-black/10 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <AnimatedCounter target={5.0} decimals={1} className="text-xl sm:text-2xl font-heading font-bold text-[#1C1C1E]" />
                  <StarRow size={15} />
                </div>
                <div className="h-5 w-px bg-black/10 hidden sm:block" />
                <span className="text-[#64748b] text-xs sm:text-sm font-body"><AnimatedCounter target={47} className="text-[#1C1C1E] font-semibold" /> verified reviews</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div className="hidden md:block space-y-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <MarqueeRow items={row1Reviews} speed={45} />
            <MarqueeRow items={row2Reviews} speed={38} reverse />
          </motion.div>

          <div className="md:hidden">
            <div ref={scrollRef} onScroll={handleScroll} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar px-4">
              {marqueeReviews.map((review, i) => (
                <motion.div key={i} className="snap-start shrink-0" style={{ width: "85vw", maxWidth: "340px" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3), ease: [0.16, 1, 0.3, 1] }}>
                  <div className="rounded-2xl p-5 bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3"><StarRow size={13} /><img src="/images/g-icon.webp" alt="Google" className="h-3.5 w-auto ml-auto opacity-60" /></div>
                    <p className="font-body text-[#374151] text-[15px] leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-black/[0.06]">
                      <div className="w-8 h-8 rounded-full bg-[#E31837] flex items-center justify-center shrink-0"><span className="text-white text-[10px] font-bold font-heading">{getInitials(review.name)}</span></div>
                      <div>
                        <span className="font-heading text-xs font-semibold uppercase text-[#1C1C1E] tracking-tight block leading-tight">{review.name}</span>
                        <span className="text-[10px] text-[#94a3b8]">Verified Google Review</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-6 px-4">
              <div className="h-[2px] bg-black/[0.06] rounded-full w-full max-w-[200px]">
                <div className="h-full rounded-full transition-all duration-300 ease-out bg-[#E31837]" style={{ width: `${((activeSlide + 1) / marqueeReviews.length) * 100}%` }} />
              </div>
            </div>
            <div className="flex justify-center gap-1.5 mt-4">
              {marqueeReviews.map((_, i) => (
                <button key={i} onClick={() => scrollTo(i)} className={`rounded-full transition-all duration-300 ${i === activeSlide ? "w-6 h-1.5 bg-[#E31837]" : "w-1.5 h-1.5 bg-black/15 hover:bg-black/25"}`} aria-label={`Go to review ${i + 1}`} />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mt-14 md:mt-20" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <a href="https://www.google.com/maps/place/?q=place_id:ChIJw_EMMkEZK4gRlraWiwcAOnY" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border-2 border-[#E31837] text-[#E31837] font-heading text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#E31837] hover:text-white group"
              >
                <img src="/images/g-icon.webp" alt="Google" className="h-4 w-auto" />
                Read All {business.googleReviews.count} Reviews on Google
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          S8 - OUR WORK GALLERY
          ================================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center mb-14">
            <span className="eyebrow-label">Our Work</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1C1C1E] leading-[1.05]">SEE THE QUALITY</h2>
            <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl md:text-3xl lg:text-[40px] leading-[1.1] mt-1">In Every Detail</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {galleryItems.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <Image src={item.src} alt={`${item.label} - Superior Power Electric`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-heading font-bold text-[#1C1C1E] uppercase tracking-wide">
                    <Camera className="w-3 h-3 text-[#E31837]" />
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          S9 - WHAT TO EXPECT
          ================================================================ */}
      <section className="py-20 md:py-28 bg-white border-t border-black/[0.04]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center mb-14">
            <span className="eyebrow-label">Simple Process</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1C1C1E] leading-[1.05]">WHAT TO EXPECT</h2>
            <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl md:text-3xl lg:text-[40px] leading-[1.1] mt-1">Working With Us</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="relative bg-[#F9F9F9] hover:bg-white border border-transparent hover:border-[#E31837]/15 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <span className="font-heading text-[10px] font-bold text-[#E31837]/50 uppercase tracking-[0.2em] mb-3 block">Step {String(i + 1).padStart(2, "0")}</span>
                <div className="w-10 h-10 rounded-lg bg-[#E31837] flex items-center justify-center mb-4"><step.icon className="w-5 h-5 text-white" /></div>
                <h3 className="font-heading text-base font-bold text-[#1C1C1E] uppercase tracking-tight">{step.title}</h3>
                <p className="font-body text-[#64748b] text-sm leading-relaxed mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-center font-body text-sm text-[#94a3b8] mt-8">
            Most jobs completed same day. Average response time: under 2 hours.
          </motion.p>
        </div>
      </section>

      {/* ================================================================
          S10 - FAQ
          ================================================================ */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center mb-14">
            <span className="eyebrow-label">Questions</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1C1C1E] leading-[1.05]">COMMON</h2>
            <p className="font-heading font-semibold tracking-tight text-[#E31837] uppercase text-2xl md:text-3xl lg:text-[40px] leading-[1.1] mt-1">Questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutFaqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05, ease }}>
                <FAQItem item={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          S11 - SERVICE AREA
          ================================================================ */}
      <ServiceAreaSection />

      {/* ================================================================
          S12 - FINAL CTA
          ================================================================ */}
      <CTASection />
    </>
  );
}
