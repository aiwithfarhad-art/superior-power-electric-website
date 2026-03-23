"use client";

import { useState } from "react";
import {
  Zap,
  Lightbulb,
  Shield,
  Home,
  Settings,
  Phone,
  ArrowLeft,
  CheckCircle,
  Plug,
  Camera,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { business } from "@/data/business";

const serviceTypes = [
  { id: "panel-upgrade", icon: Zap, label: "Panel Upgrade" },
  { id: "pot-lights", icon: Lightbulb, label: "Pot Lights" },
  { id: "wiring", icon: Plug, label: "Wiring" },
  { id: "repairs", icon: Settings, label: "Repairs" },
  { id: "inspection", icon: Shield, label: "Inspection" },
  { id: "other", icon: Home, label: "Other" },
];

const assessmentOptions = [
  {
    id: "in-person",
    icon: MapPin,
    label: "$49 Project Assessment",
    desc: "In-person visit by a licensed electrician. $49 credited toward your job.",
    tag: "Most Popular",
  },
  {
    id: "remote",
    icon: Camera,
    label: "Free Remote Estimate",
    desc: "Send photos and project details for a no-cost ballpark estimate.",
    tag: "No Cost",
  },
];

type Step = 1 | 2 | 3 | "success";

export function QuoteForm() {
  const [step, setStep] = useState<Step>(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedAssessment, setSelectedAssessment] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const assessmentLabel =
        selectedAssessment === "in-person"
          ? "$49 On-Site Assessment"
          : "Free Remote Estimate";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: selectedService,
          message: `[${assessmentLabel}] ${formData.message}`.trim(),
          source: `hero-form-${selectedAssessment}`,
        }),
      });
      if (res.ok) setStep("success");
    } catch {
      // silent fail - form stays visible
    } finally {
      setSubmitting(false);
    }
  }

  const stepNumber = typeof step === "number" ? step : 3;

  if (step === "success") {
    return (
      <div id="quote-form" className="relative">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/60">
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#1C1C1E] uppercase tracking-wide">
              We&apos;ll Call You Shortly
            </h3>
            <p className="font-body text-sm text-[#9CA3AF] mt-2">
              Average response time: 47 minutes
            </p>
            <a
              href={`tel:${business.phoneFull}`}
              className="inline-flex items-center gap-2 mt-4 text-[#E31837] font-body text-sm font-semibold hover:underline"
            >
              <Phone className="w-4 h-4" />
              Need it sooner? Call {business.phone}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="quote-form" className="relative">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/60">
        {/* Header */}
        <div className="px-5 md:px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-heading text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#E31837]">
                Get Started
              </p>
              <h3 className="font-heading text-base md:text-lg font-bold text-[#1C1C1E] mt-0.5 uppercase tracking-wide">
                Request Service
              </h3>
            </div>
            <div className="flex items-center gap-1 text-[#9CA3AF] text-[10px] md:text-xs font-body">
              <Zap size={12} className="text-[#E31837]" />
              &lt;1 min
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-3 flex gap-1.5">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={cn(
                  "h-1 flex-1 rounded-full transition-all duration-500",
                  s <= stepNumber ? "bg-[#E31837]" : "bg-gray-200"
                )}
              />
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <p className="font-body text-xs md:text-sm text-[#9CA3AF] mb-4">
                What do you need help with?
              </p>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {serviceTypes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setSelectedService(s.label);
                      setStep(2);
                    }}
                    className={cn(
                      "flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer group",
                      selectedService === s.label
                        ? "border-[#E31837] bg-[#E31837]/5"
                        : "border-gray-200 hover:border-[#E31837]/40 hover:bg-[#E31837]/[0.02]"
                    )}
                  >
                    <div
                      className={cn(
                        "w-9 h-9 md:w-11 md:h-11 rounded-lg flex items-center justify-center transition-colors",
                        selectedService === s.label
                          ? "bg-[#E31837]/15"
                          : "bg-[#E31837]/10 group-hover:bg-[#E31837]/10"
                      )}
                    >
                      <s.icon
                        className={cn(
                          "w-4 h-4 md:w-5 md:h-5 transition-colors",
                          selectedService === s.label
                            ? "text-[#E31837]"
                            : "text-[#E31837] group-hover:text-[#E31837]"
                        )}
                      />
                    </div>
                    <span className="font-heading text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-[#1C1C1E] leading-tight text-center">
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Assessment Type */}
          {step === 2 && (
            <div>
              <p className="font-body text-xs md:text-sm text-[#9CA3AF] mb-4">
                How would you like your estimate?
              </p>
              <div className="grid grid-cols-1 gap-3">
                {assessmentOptions.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => {
                      setSelectedAssessment(a.id);
                      setStep(3);
                    }}
                    className={cn(
                      "flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left group",
                      selectedAssessment === a.id
                        ? "border-[#E31837] bg-[#E31837]/5"
                        : a.id === "in-person"
                          ? "border-[#E31837]/30 bg-[#E31837]/[0.02] hover:border-[#E31837]/40"
                          : "border-gray-200 hover:border-[#E31837]/40"
                    )}
                  >
                    <div
                      className={cn(
                        "w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                        selectedAssessment === a.id
                          ? "bg-[#E31837]/15"
                          : "bg-[#E31837]/10 group-hover:bg-[#E31837]/10"
                      )}
                    >
                      <a.icon
                        className={cn(
                          "w-5 h-5 transition-colors",
                          selectedAssessment === a.id
                            ? "text-[#E31837]"
                            : "text-[#E31837] group-hover:text-[#E31837]"
                        )}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-xs md:text-sm font-bold text-[#1C1C1E] uppercase tracking-wide">
                          {a.label}
                        </span>
                        <span
                          className={cn(
                            "text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                            a.id === "in-person"
                              ? "bg-[#E31837]/10 text-[#E31837]"
                              : "bg-gray-100 text-[#9CA3AF]"
                          )}
                        >
                          {a.tag}
                        </span>
                      </div>
                      <span className="font-body text-[10px] md:text-xs text-[#9CA3AF] leading-snug block mt-1">
                        {a.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <p className="font-body text-xs md:text-sm text-[#9CA3AF] mb-4">
                How can we reach you?
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 font-body text-sm text-[#1C1C1E] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E31837]/20 focus:border-[#E31837]/40 transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 font-body text-sm text-[#1C1C1E] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E31837]/20 focus:border-[#E31837]/40 transition-all"
                />
                <textarea
                  placeholder={
                    selectedAssessment === "remote"
                      ? "Describe your project (we will ask for photos by text)"
                      : "Describe your electrical needs (optional)"
                  }
                  maxLength={500}
                  rows={2}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50/50 font-body text-sm text-[#1C1C1E] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E31837]/20 focus:border-[#E31837]/40 transition-all resize-none"
                />
                {selectedAssessment === "remote" && (
                  <p className="font-body text-[10px] md:text-xs text-[#9CA3AF] bg-[#E31837]/5 rounded-lg px-3 py-2 border border-[#E31837]/10">
                    <Camera size={10} className="inline mr-1 text-[#E31837]" />
                    We will text you to collect photos of your project for review.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-6 py-3.5 rounded-lg font-heading text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#c8152f] hover:shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  <Phone size={16} />
                  {submitting
                    ? "Sending..."
                    : selectedAssessment === "in-person"
                      ? "Book $49 Assessment"
                      : "Get Free Remote Estimate"}
                </button>
              </div>
            </form>
          )}

          {/* Back button */}
          {typeof step === "number" && step > 1 && (
            <button
              type="button"
              onClick={() => setStep((step - 1) as Step)}
              className="mt-3 flex items-center gap-1.5 text-[#9CA3AF] font-body text-[11px] hover:text-[#1C1C1E] transition-colors cursor-pointer"
            >
              <ArrowLeft size={12} /> Back
            </button>
          )}
        </div>

        {/* Trust footer */}
        <div className="px-5 md:px-6 py-3 flex items-center justify-center gap-4 text-[10px] md:text-[11px] font-body text-[#9CA3AF] border-t border-gray-100">
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-[#E31837]" /> No Spam
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-[#E31837]" /> Fast Response
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-[#E31837]" /> ESA Licensed
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
