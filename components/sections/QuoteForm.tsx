"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle,
  ChevronRight,
  Phone,
  Sparkles,
  Zap,
  Lightbulb,
  Car,
  HelpCircle,
  Home,
  Building,
  Building2,
  Briefcase,
  Clock,
  CalendarDays,
  FileText,
  Crown,
  Camera,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { business } from "@/data/business";

/* ─── Step Labels ─── */

const stepLabels = ["PLAN", "SERVICE", "PROPERTY", "TIMELINE", "DETAILS"];
const totalSteps = 5;

/* ─── Data ─── */

const estimateOptions = [
  {
    id: "assessment",
    badge: "MOST POPULAR",
    badgeColor: "bg-[#E31837] text-white",
    icon: Crown,
    title: "$49 PROJECT ASSESSMENT",
    bullets: [
      "Licensed electrician visits your home",
      "Detailed written quote on the spot",
      "$49 credited toward your project",
    ],
    note: "Best for panel upgrades, rewiring, EV chargers, and complex projects.",
  },
  {
    id: "remote",
    badge: "REMOTE OPTION",
    badgeColor: "bg-gray-200 text-gray-600",
    icon: Camera,
    title: "FREE REMOTE ESTIMATE",
    bullets: [
      "Send us clear photos of the work area",
      "Describe your project details",
      "Receive a ballpark estimate by phone",
    ],
    note: "Best for pot lights, simple fixture swaps, and smaller projects.",
  },
];

const serviceOptions = [
  { id: "panel", icon: Zap, label: "PANEL UPGRADE / REWIRING" },
  { id: "potlights", icon: Lightbulb, label: "POT LIGHTS / FIXTURES" },
  { id: "ev", icon: Car, label: "EV CHARGER INSTALLATION" },
  { id: "other", icon: HelpCircle, label: "OTHER / NOT SURE" },
];

const propertyOptions = [
  { id: "house", icon: Home, label: "DETACHED HOUSE" },
  { id: "semi", icon: Building, label: "SEMI / TOWNHOUSE" },
  { id: "condo", icon: Building2, label: "CONDO / APARTMENT" },
  { id: "commercial", icon: Briefcase, label: "COMMERCIAL" },
];

const timelineOptions = [
  {
    id: "asap",
    icon: Zap,
    label: "ASAP / EMERGENCY",
    sub: "24/7 available",
  },
  {
    id: "week",
    icon: Clock,
    label: "WITHIN A WEEK",
    sub: "Flexible timing",
  },
  {
    id: "date",
    icon: CalendarDays,
    label: "PICK A SPECIFIC DATE",
    sub: "Choose below",
  },
  {
    id: "quote",
    icon: FileText,
    label: "JUST GETTING A QUOTE",
    sub: "No rush",
  },
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

/* ─── Step Indicator ─── */

function StepIndicator({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="flex items-center justify-between w-full">
      {stepLabels.map((label, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;
        const isFuture = stepNum > currentStep;

        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            {/* Circle + Label */}
            <div className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                  isCompleted &&
                    "bg-[#E31837] text-white",
                  isActive &&
                    "bg-[#E31837] text-white ring-4 ring-[#E31837]/20",
                  isFuture &&
                    "bg-[#F6F5F2] text-[#ABABAB] border border-[#F2F0EC]"
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" strokeWidth={3} />
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={cn(
                  "text-[9px] font-bold uppercase tracking-wider whitespace-nowrap",
                  isCompleted && "text-[#E31837]",
                  isActive && "text-[#E31837]",
                  isFuture && "text-gray-400"
                )}
              >
                {label}
              </span>
            </div>

            {/* Connector line */}
            {i < stepLabels.length - 1 && (
              <div className="flex-1 mx-1.5 mt-[-14px]">
                <div
                  className={cn(
                    "h-[2px] w-full rounded-full transition-all duration-300",
                    stepNum < currentStep ? "bg-[#E31837]" : "bg-gray-200"
                  )}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── List Option Row ─── */

function OptionRow({
  icon: Icon,
  label,
  sub,
  selected,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer group",
        selected
          ? "border-[#E31837] bg-[#E31837]/5 shadow-sm"
          : "border-[#F2F0EC] bg-white hover:border-[#E31837]/30 hover:shadow-sm"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors",
          selected
            ? "bg-[#E31837]/10"
            : "bg-gray-100 group-hover:bg-gray-200/70"
        )}
      >
        <Icon
          className={cn(
            "w-4 h-4 transition-colors",
            selected ? "text-[#E31837]" : "text-[#E31837]/70"
          )}
        />
      </div>

      {/* Radio circle */}
      <div
        className={cn(
          "w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
          selected ? "border-[#E31837]" : "border-gray-300"
        )}
      >
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full bg-[#E31837]"
          />
        )}
      </div>

      {/* Text */}
      <div className="flex-1 text-left">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-gray-900">
          {label}
        </span>
        {sub && (
          <span className="block text-xs text-gray-500 mt-0.5">{sub}</span>
        )}
      </div>

      {/* Chevron */}
      <ChevronRight
        className={cn(
          "w-4 h-4 shrink-0 transition-colors",
          selected ? "text-[#E31837]" : "text-gray-300 group-hover:text-gray-400"
        )}
      />
    </button>
  );
}

/* ─── Main Component ─── */

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);

  const [estimateType, setEstimateType] = useState("");
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
      case 1:
        return estimateType !== "";
      case 2:
        return serviceType !== "";
      case 3:
        return propertyType !== "";
      case 4:
        return (
          timeline !== "" &&
          (timeline !== "date" || selectedDate !== undefined)
        );
      default:
        return true;
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
          estimateType,
          service: serviceType,
          propertyType,
          timeline,
          selectedDate: selectedDate
            ? format(selectedDate, "yyyy-MM-dd")
            : undefined,
          source: "quote-form",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(
          `Something went wrong. Please call us at ${business.phone}`
        );
      }
    } catch {
      setError(
        `Something went wrong. Please call us at ${business.phone}`
      );
    } finally {
      setSubmitting(false);
    }
  }

  /* ─── Success State ─── */
  if (submitted) {
    return (
      <div className="quote-form-section" id="quote-form">
        <div className="rounded-2xl bg-white p-8 md:p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06),0_12px_48px_rgba(0,0,0,0.06)]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-9 h-9 text-green-500" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">
              Request Received
            </h3>
            <p className="font-body text-sm text-gray-500 mt-2">
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
      <div className="rounded-2xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06),0_12px_48px_rgba(0,0,0,0.06)]">
        {/* Header */}
        <div className="px-4 sm:px-6 md:px-8 pt-6 md:pt-8 pb-1 md:pb-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-[#E31837]">
                Free Quote
              </span>
              <h2 className="font-heading text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900 mt-0.5">
                Get Your Estimate
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E31837]/10 text-[#E31837] shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-bold">&lt;2 MIN</span>
            </div>
          </div>

          {/* Step Indicator */}
          <StepIndicator currentStep={step} />
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F2F0EC] mx-4 sm:mx-6 md:mx-8" />

        {/* Body */}
        <div className="px-4 sm:px-6 md:px-8 pt-6 pb-0 h-[390px] overflow-y-auto relative">
          <AnimatePresence mode="wait" custom={direction}>
            {/* ── Step 1: Estimate Type ── */}
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
                <p className="font-body text-lg text-gray-600 mb-4">
                  Choose your estimate type
                </p>
                <div className="space-y-3">
                  {estimateOptions.map((opt) => {
                    const Icon = opt.icon;
                    const selected = estimateType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setEstimateType(opt.id)}
                        className={cn(
                          "w-full text-left px-4 py-2.5 rounded-xl border-2 transition-all duration-200 cursor-pointer",
                          selected
                            ? "border-[#E31837] bg-[#E31837]/[0.03] shadow-sm"
                            : "border-[#F2F0EC] bg-white hover:border-[#E31837]/30 hover:shadow-sm"
                        )}
                      >
                        {/* Badge + Icon row */}
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={cn(
                              "inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider",
                              opt.badgeColor
                            )}
                          >
                            {opt.badge}
                          </span>
                          <Icon
                            className={cn(
                              "w-5 h-5",
                              selected ? "text-[#E31837]" : "text-gray-400"
                            )}
                          />
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-gray-900 mb-1">
                          {opt.title}
                        </h3>

                        {/* Bullets */}
                        <ul className="space-y-0.5">
                          {opt.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <CheckCircle className="w-3.5 h-3.5 text-[#E31837] shrink-0 mt-0.5" />
                              <span className="font-body">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Service Type ── */}
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
                <p className="font-body text-base text-gray-600 mb-4">
                  What do you need help with?
                </p>
                <div className="space-y-2">
                  {serviceOptions.map((opt) => (
                    <OptionRow
                      key={opt.id}
                      icon={opt.icon}
                      label={opt.label}
                      selected={serviceType === opt.id}
                      onClick={() => setServiceType(opt.id)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Step 3: Property Type ── */}
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
                <p className="font-body text-base text-gray-600 mb-4">
                  What type of property?
                </p>
                <div className="space-y-2">
                  {propertyOptions.map((opt) => (
                    <OptionRow
                      key={opt.id}
                      icon={opt.icon}
                      label={opt.label}
                      selected={propertyType === opt.id}
                      onClick={() => setPropertyType(opt.id)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Step 4: Timeline ── */}
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
                <p className="font-body text-base text-gray-600 mb-4">
                  When do you need this done?
                </p>
                <div className="space-y-2">
                  {timelineOptions.map((opt) => (
                    <OptionRow
                      key={opt.id}
                      icon={opt.icon}
                      label={opt.label}
                      sub={
                        opt.id === "date" && selectedDate
                          ? format(selectedDate, "MMM d, yyyy")
                          : opt.sub
                      }
                      selected={timeline === opt.id}
                      onClick={() => {
                        setTimeline(opt.id);
                        if (opt.id === "date") {
                          setCalendarOpen(true);
                        } else {
                          setSelectedDate(undefined);
                        }
                      }}
                    />
                  ))}
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
                            "bg-[#FAFAF8] border border-[#F2F0EC] hover:border-[#E31837]/30",
                            selectedDate ? "text-gray-900" : "text-gray-400"
                          )}
                        >
                          {selectedDate
                            ? format(selectedDate, "EEEE, MMMM d, yyyy")
                            : "Select a date..."}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white border-gray-200"
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

            {/* ── Step 5: Contact Details ── */}
            {step === 5 && (
              <motion.div
                key="step5"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="font-body text-base text-gray-600 mb-4">
                  Your contact details
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg font-body text-base text-gray-900 placeholder:text-gray-400 bg-[#FAFAF8] border-0 transition-all focus:outline-none focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    maxLength={20}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg font-body text-base text-gray-900 placeholder:text-gray-400 bg-[#FAFAF8] border-0 transition-all focus:outline-none focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    maxLength={150}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg font-body text-base text-gray-900 placeholder:text-gray-400 bg-[#FAFAF8] border-0 transition-all focus:outline-none focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)]"
                  />
                  <textarea
                    placeholder="Tell us about your project (optional)"
                    maxLength={500}
                    rows={2}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg font-body text-base text-gray-900 placeholder:text-gray-400 bg-[#FAFAF8] border-0 transition-all focus:outline-none focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] resize-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full text-sm !py-3.5 cursor-pointer disabled:opacity-50"
                  >
                    <Phone size={16} />
                    {submitting
                      ? "Sending..."
                      : estimateType === "assessment"
                        ? "Book My $49 Assessment"
                        : "Request Free Estimate"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                  {error && (
                    <p className="font-body text-xs text-red-500 text-center mt-2">
                      {error}
                    </p>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Footer */}
        {step < 5 && (
          <div className="px-4 sm:px-6 md:px-8 pt-2 pb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            {step > 1 && (
              <button
                type="button"
                onClick={goBack}
                className="order-2 md:order-1 inline-flex items-center justify-center md:justify-start gap-1.5 font-body text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} />
                BACK
              </button>
            )}
            <button
              type="button"
              disabled={!canProceed()}
              onClick={goNext}
              className={cn(
                "relative overflow-hidden w-full md:w-auto md:ml-auto order-1 md:order-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 md:py-2.5 rounded-lg font-heading text-sm md:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                canProceed()
                  ? "bg-[#1C1C1E] text-white hover:bg-[#2a2a2d] shadow-md shadow-black/20"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
            >
              {canProceed() && (
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] md:hidden"
                  style={{ animation: "shimmerSweep 3s ease-in-out infinite" }}
                />
              )}
              <span className="relative z-10">Next</span>
              <ArrowRight size={14} className="relative z-10" />
            </button>
          </div>
        )}

        {/* Back button on step 5 */}
        {step === 5 && (
          <div className="px-4 sm:px-6 md:px-8 pt-2 pb-5">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-1.5 font-body text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              BACK
            </button>
          </div>
        )}

        {/* Trust Footer */}
        <div className="px-4 sm:px-6 md:px-8 py-1 border-t border-[#F2F0EC] flex items-center justify-center gap-4 md:gap-5 text-[10px] md:text-[11px] font-body text-gray-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle size={11} className="text-[#E31837]/60" />
            No Spam
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={11} className="text-[#E31837]/60" />
            100% Free
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle size={11} className="text-[#E31837]/60" />
            No Obligation
          </span>
        </div>
      </div>
    </div>
  );
}
