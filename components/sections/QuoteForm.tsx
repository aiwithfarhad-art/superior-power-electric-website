"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import {
  IconPanel,
  IconPotlights,
  IconEV,
  IconOther,
  IconHouse,
  IconSemi,
  IconCondo,
  IconCommercial,
  IconASAP,
  IconWeek,
  IconDate,
} from "@/components/ui/form-icons";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { business } from "@/data/business";

/* ─── Data ─── */

const serviceOptions = [
  { id: "panel", icon: IconPanel, label: "Panel Upgrade" },
  { id: "potlights", icon: IconPotlights, label: "Pot Lights" },
  { id: "ev", icon: IconEV, label: "EV Charger" },
  { id: "other", icon: IconOther, label: "Other" },
];

const propertyOptions = [
  { id: "house", icon: IconHouse, label: "House" },
  { id: "semi", icon: IconSemi, label: "Semi-Detached" },
  { id: "condo", icon: IconCondo, label: "Condo / Apt" },
  { id: "commercial", icon: IconCommercial, label: "Commercial" },
];

const timelineOptions = [
  { id: "asap", icon: IconASAP, label: "ASAP", sub: "As soon as possible" },
  { id: "week", icon: IconWeek, label: "This Week", sub: "Within 7 days" },
  { id: "date", icon: IconDate, label: "Pick a Date", sub: "Choose a date" },
];

/* ─── Animation Variants ─── */

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
  }),
};

/* ─── Component ─── */

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);

  const [serviceType, setServiceType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 4;

  const goNext = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, totalSteps));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  }, []);

  const canProceed = () => {
    switch (step) {
      case 1: return serviceType !== "";
      case 2: return propertyType !== "";
      case 3: return timeline !== "" && (timeline !== "date" || selectedDate !== undefined);
      default: return true;
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          service: serviceType,
          propertyType,
          timeline,
          selectedDate: selectedDate ? format(selectedDate, "yyyy-MM-dd") : undefined,
          source: "quote-form",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(`Something went wrong. Please call us at ${business.phone}`);
      }
    } catch {
      setError(`Something went wrong. Please call us at ${business.phone}`);
    } finally {
      setSubmitting(false);
    }
  }

  /* ─── Success State ─── */
  if (submitted) {
    return (
      <div className="quote-form-section" id="quote-form">
        <div
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{
            background: "linear-gradient(145deg, hsl(0 0% 10.2%), hsl(0 0% 6.7%))",
            border: "1px solid hsl(0 0% 20%)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-9 h-9 text-green-400" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
              Request Received
            </h3>
            <p className="font-body text-sm text-white/50 mt-2">
              We will be in touch within 2 hours.
            </p>
            <a
              href={`tel:${business.phoneFull}`}
              className="inline-flex items-center gap-2 mt-5 text-[#E31837] font-body text-sm font-semibold hover:underline"
            >
              <Phone className="w-4 h-4" />
              Need it sooner? Call {business.phone}
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ─── Main Form ─── */
  return (
    <div className="quote-form-section" id="quote-form">
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, hsl(0 0% 10.2%), hsl(0 0% 6.7%))",
          border: "1px solid hsl(0 0% 20%)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
        }}
      >
        {/* Header */}
        <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="font-heading text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#E31837]">
              Get Started
            </span>
            <span className="font-body text-[10px] md:text-xs text-white/40">
              Step {step} of {totalSteps}
            </span>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#E31837] rounded-full"
              initial={false}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 min-h-[320px] relative">
          <AnimatePresence mode="wait" custom={direction}>
            {/* ── Step 1: Service Type ── */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="font-heading text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-5">
                  What do you need help with?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((opt) => {
                    const Icon = opt.icon;
                    const selected = serviceType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setServiceType(opt.id)}
                        className={cn(
                          "flex flex-col items-center gap-3 p-4 md:p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer group",
                          selected
                            ? "border-[#E31837] bg-[#E31837]/10"
                            : "border-white/15 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.05]"
                        )}
                      >
                        <div
                          className={cn(
                            "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-colors",
                            selected
                              ? "bg-[#E31837]/20"
                              : "bg-white/10 group-hover:bg-white/15"
                          )}
                        >
                          <Icon
                            className={cn(
                              "w-5 h-5 md:w-6 md:h-6 transition-colors",
                              selected ? "text-[#E31837]" : "text-white/70 group-hover:text-white"
                            )}
                          />
                        </div>
                        <span className="font-heading text-[10px] md:text-xs font-bold uppercase tracking-wider text-white leading-tight text-center">
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Property Type ── */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="font-heading text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-5">
                  What type of property?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {propertyOptions.map((opt) => {
                    const Icon = opt.icon;
                    const selected = propertyType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPropertyType(opt.id)}
                        className={cn(
                          "flex flex-col items-center gap-3 p-4 md:p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer group",
                          selected
                            ? "border-[#E31837] bg-[#E31837]/10"
                            : "border-white/15 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.05]"
                        )}
                      >
                        <div
                          className={cn(
                            "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-colors",
                            selected
                              ? "bg-[#E31837]/20"
                              : "bg-white/10 group-hover:bg-white/15"
                          )}
                        >
                          <Icon
                            className={cn(
                              "w-5 h-5 md:w-6 md:h-6 transition-colors",
                              selected ? "text-[#E31837]" : "text-white/70 group-hover:text-white"
                            )}
                          />
                        </div>
                        <span className="font-heading text-[10px] md:text-xs font-bold uppercase tracking-wider text-white leading-tight text-center">
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ── Step 3: Timeline ── */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="font-heading text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-5">
                  When do you need this done?
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {timelineOptions.map((opt) => {
                    const Icon = opt.icon;
                    const selected = timeline === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setTimeline(opt.id);
                          if (opt.id === "date") {
                            setCalendarOpen(true);
                          } else {
                            setSelectedDate(undefined);
                          }
                        }}
                        className={cn(
                          "flex flex-col items-center gap-2 p-4 md:p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer group",
                          selected
                            ? "border-[#E31837] bg-[#E31837]/10"
                            : "border-white/15 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.05]",
                          opt.id === "date" && timelineOptions.length === 3 ? "col-span-2" : ""
                        )}
                      >
                        <div
                          className={cn(
                            "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-colors",
                            selected
                              ? "bg-[#E31837]/20"
                              : "bg-white/10 group-hover:bg-white/15"
                          )}
                        >
                          <Icon
                            className={cn(
                              "w-5 h-5 md:w-6 md:h-6 transition-colors",
                              selected ? "text-[#E31837]" : "text-white/70 group-hover:text-white"
                            )}
                          />
                        </div>
                        <span className="font-heading text-[10px] md:text-xs font-bold uppercase tracking-wider text-white leading-tight text-center">
                          {opt.label}
                        </span>
                        <span className="font-body text-[10px] text-white/40 leading-tight text-center">
                          {selected && opt.id === "date" && selectedDate
                            ? format(selectedDate, "MMM d, yyyy")
                            : opt.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Calendar popover for "Pick a Date" */}
                {timeline === "date" && (
                  <div className="mt-4">
                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "w-full px-4 py-3 rounded-lg text-left font-body text-sm transition-all",
                            "bg-white/[0.06] border border-white/15 hover:border-white/25",
                            selectedDate ? "text-white" : "text-white/40"
                          )}
                        >
                          {selectedDate
                            ? format(selectedDate, "EEEE, MMMM d, yyyy")
                            : "Select a date..."}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-[#1a1a1a] border-white/15"
                        align="center"
                      >
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(day) => {
                            setSelectedDate(day);
                            setCalendarOpen(false);
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}
              </motion.div>
            )}

            {/* ── Step 4: Contact Details ── */}
            {step === 4 && (
              <motion.div
                key="step4"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="font-heading text-lg md:text-xl font-bold text-white uppercase tracking-wide mb-5">
                  Your contact details
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md font-body text-[15px] text-white placeholder:text-white/30 transition-all focus:outline-none"
                    style={{
                      background: "hsl(0 0% 10.2%)",
                      border: "1px solid hsl(0 0% 20%)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "hsl(0 85% 50% / 0.5)";
                      e.target.style.boxShadow = "0 0 0 3px hsl(0 85% 50% / 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "hsl(0 0% 20%)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    maxLength={20}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md font-body text-[15px] text-white placeholder:text-white/30 transition-all focus:outline-none"
                    style={{
                      background: "hsl(0 0% 10.2%)",
                      border: "1px solid hsl(0 0% 20%)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "hsl(0 85% 50% / 0.5)";
                      e.target.style.boxShadow = "0 0 0 3px hsl(0 85% 50% / 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "hsl(0 0% 20%)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    maxLength={150}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md font-body text-[15px] text-white placeholder:text-white/30 transition-all focus:outline-none"
                    style={{
                      background: "hsl(0 0% 10.2%)",
                      border: "1px solid hsl(0 0% 20%)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "hsl(0 85% 50% / 0.5)";
                      e.target.style.boxShadow = "0 0 0 3px hsl(0 85% 50% / 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "hsl(0 0% 20%)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <textarea
                    placeholder="Any additional details about your project?"
                    maxLength={500}
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md font-body text-[15px] text-white placeholder:text-white/30 transition-all focus:outline-none resize-none"
                    style={{
                      background: "hsl(0 0% 10.2%)",
                      border: "1px solid hsl(0 0% 20%)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "hsl(0 85% 50% / 0.5)";
                      e.target.style.boxShadow = "0 0 0 3px hsl(0 85% 50% / 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "hsl(0 0% 20%)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full text-sm md:text-base !py-3.5 cursor-pointer disabled:opacity-50"
                  >
                    <Phone size={16} />
                    {submitting ? "Sending..." : "Book My $49 Assessment"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                  {error && (
                    <p className="font-body text-xs text-red-400 text-center mt-2">
                      {error}
                    </p>
                  )}
                  <div className="flex flex-col gap-1 pt-1">
                    <p className="font-body text-[11px] text-white/35 flex items-center gap-1.5">
                      <CheckCircle size={10} className="text-green-400/60 shrink-0" />
                      $49 credited toward your job if you proceed
                    </p>
                    <p className="font-body text-[11px] text-white/35 flex items-center gap-1.5">
                      <CheckCircle size={10} className="text-green-400/60 shrink-0" />
                      No spam. We respond within 2 hours.
                    </p>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Footer */}
        {step < 4 && (
          <div className="px-6 md:px-8 pb-6 md:pb-8 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} />
                Back
              </button>
            ) : (
              <div />
            )}
            <button
              type="button"
              disabled={!canProceed()}
              onClick={goNext}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                canProceed()
                  ? "bg-[#E31837] text-white hover:bg-[#c8152f]"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              )}
            >
              Next
              <ArrowRight size={14} />
            </button>
          </div>
        )}

        {/* Back button on step 4 */}
        {step === 4 && (
          <div className="px-6 md:px-8 pb-5">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-1.5 font-body text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              Back
            </button>
          </div>
        )}

        {/* Trust Footer */}
        <div
          className="px-6 md:px-8 py-3 flex items-center justify-center gap-4 text-[10px] md:text-[11px] font-body text-white/30"
          style={{ borderTop: "1px solid hsl(0 0% 15%)" }}
        >
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-[#E31837]/60" /> No Spam
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-[#E31837]/60" /> Fast Response
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-[#E31837]/60" /> ESA Licensed
          </span>
        </div>
      </div>
    </div>
  );
}
