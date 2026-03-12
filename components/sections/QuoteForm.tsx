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
import { siteConfig } from "@/data/config";

const serviceTypes = [
  { id: "panel", icon: Zap, label: "Panel" },
  { id: "potlights", icon: Lightbulb, label: "Pot Lights" },
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
    desc: "In-person visit with a licensed electrician. Credited toward your job.",
  },
  {
    id: "remote",
    icon: Camera,
    label: "Free Remote Estimate",
    desc: "Send photos and project details for a no-cost review.",
  },
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedAssessment, setSelectedAssessment] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `tel:${siteConfig.phoneFormatted}`;
  };

  return (
    <div id="quote-form" className="relative">
      <div
        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ border: "1px solid hsl(0 0% 88% / 0.6)" }}
      >
        {/* Header */}
        <div
          className="px-4 md:px-6 py-3 md:py-5 border-b"
          style={{ borderColor: "hsl(0 0% 90%)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow text-[10px] md:text-xs !tracking-[0.2em]">
                Get Started
              </p>
              <h3 className="font-heading text-base md:text-xl font-bold text-foreground mt-0.5 uppercase">
                Request Service
              </h3>
            </div>
            <div className="flex items-center gap-1 text-text-muted text-[10px] md:text-xs">
              <Zap size={12} className="text-primary" />
              &lt;1 min
            </div>
          </div>
          <div className="mt-3 flex gap-1.5">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-0.5 md:h-1 flex-1 rounded-full transition-all duration-500 ${
                  s <= step ? "bg-primary" : "bg-platinum"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Form Body */}
        <div className="p-4 md:p-6">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <p className="text-text-muted text-xs md:text-sm mb-3 md:mb-5">
                What do you need?
              </p>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {serviceTypes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setSelectedService(s.id);
                      setStep(2);
                    }}
                    className={`form-select-card-light !p-3 md:!p-5 ${
                      selectedService === s.id ? "selected" : ""
                    }`}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <s.icon
                        size={16}
                        className="text-primary md:w-5 md:h-5"
                      />
                    </div>
                    <span className="font-heading text-[9px] md:text-xs font-semibold uppercase tracking-wider text-foreground leading-tight">
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
              <p className="text-text-muted text-xs md:text-sm mb-3 md:mb-5">
                How would you like your estimate?
              </p>
              <div className="grid grid-cols-1 gap-2 md:gap-3">
                {assessmentOptions.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => {
                      setSelectedAssessment(a.id);
                      setStep(3);
                    }}
                    className={`form-select-card-light !p-4 md:!p-5 flex flex-row items-center gap-3 text-left ${
                      selectedAssessment === a.id ? "selected" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <a.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-heading text-xs md:text-sm font-semibold text-foreground block">
                        {a.label}
                      </span>
                      <span className="text-text-muted text-[10px] md:text-xs leading-snug block mt-0.5">
                        {a.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <p className="text-text-muted text-xs md:text-sm mb-3 md:mb-5">
                How can we reach you?
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  maxLength={100}
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-surface-light text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  style={{ border: "1px solid hsl(0 0% 88%)" }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  maxLength={20}
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-surface-light text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  style={{ border: "1px solid hsl(0 0% 88%)" }}
                />
                <textarea
                  placeholder={
                    selectedAssessment === "remote"
                      ? "Describe your project (we'll ask for photos by text)"
                      : "Describe your electrical needs (optional)"
                  }
                  maxLength={500}
                  rows={2}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-surface-light text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  style={{ border: "1px solid hsl(0 0% 88%)" }}
                />
                {selectedAssessment === "remote" && (
                  <p
                    className="text-[10px] md:text-xs text-text-muted bg-surface-light rounded-lg px-3 py-2"
                    style={{ border: "1px solid hsl(0 0% 92%)" }}
                  >
                    <Camera
                      size={10}
                      className="inline mr-1 text-primary"
                    />
                    We&apos;ll text you to collect photos of your project for
                    review.
                  </p>
                )}
                <button type="submit" className="btn-primary w-full text-sm md:text-base !py-3">
                  <Phone size={16} />
                  {selectedAssessment === "in-person"
                    ? "BOOK $49 ASSESSMENT"
                    : "GET FREE REMOTE ESTIMATE"}
                </button>
              </div>
            </form>
          )}

          {/* Back Button */}
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="mt-3 flex items-center gap-1.5 text-text-muted text-[11px] hover:text-foreground transition-colors"
            >
              <ArrowLeft size={12} /> Back
            </button>
          )}
        </div>

        {/* Trust Footer */}
        <div
          className="px-4 md:px-6 py-2.5 md:py-4 flex items-center justify-center gap-3 md:gap-4 text-[10px] md:text-[11px] text-text-muted"
          style={{ borderTop: "1px solid hsl(0 0% 92%)" }}
        >
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-primary" /> No Spam
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-primary" /> Fast Response
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle size={10} className="text-primary" /> ESA Licensed
          </span>
        </div>
      </div>
    </div>
  );
}
