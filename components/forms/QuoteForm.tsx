"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { business } from "@/data/business";

type Step = "service" | "details" | "success";

export function QuoteForm() {
  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          service: selectedService,
          message,
          source: "quote-form",
        }),
      });
      if (res.ok) {
        setStep("success");
      }
    } catch {
      // Fail silently - form still visible
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "success") {
    return (
      <div className="bg-white rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">
          Quote Request Sent!
        </h3>
        <p className="text-[#9CA3AF] mb-4">
          We will get back to you within 24 hours.
        </p>
        <a
          href={`tel:${business.phoneFull}`}
          className="text-[#E31837] font-semibold hover:underline"
        >
          Need it sooner? Call {business.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-xl font-bold text-[#1C1C1E] mb-1">
        Get a Free Quote
      </h3>
      <p className="text-sm text-[#9CA3AF] mb-6">
        Tell us about your project and we will provide a detailed estimate.
      </p>

      {/* Step indicators */}
      <div className="flex items-center gap-2 mb-6">
        <div
          className={cn(
            "h-1.5 flex-1 rounded-full transition-colors",
            "bg-[#E31837]"
          )}
        />
        <div
          className={cn(
            "h-1.5 flex-1 rounded-full transition-colors",
            step === "details" ? "bg-[#E31837]" : "bg-[#E5E5E5]"
          )}
        />
      </div>

      {step === "service" && (
        <div className="space-y-3">
          <label className="text-sm font-medium text-[#1C1C1E]">
            What service do you need?
          </label>
          <div className="grid grid-cols-1 gap-2">
            {services.map((s) => (
              <button
                key={s.slug}
                onClick={() => {
                  setSelectedService(s.title);
                  setStep("details");
                }}
                className={cn(
                  "text-left px-4 py-3 rounded-lg border transition-all text-sm cursor-pointer",
                  selectedService === s.title
                    ? "border-[#E31837] bg-[#E31837]/5 text-[#E31837]"
                    : "border-[#E5E5E5] hover:border-[#E31837]/30 text-[#1C1C1E]"
                )}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "details" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1E] mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#E31837] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#1C1C1E] mb-1">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#E31837] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1E] mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email (optional)"
              className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#E31837] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1C1C1E] mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project..."
              className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#E31837] transition-colors resize-none"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep("service")}
              className="px-4 py-3 rounded-lg border border-[#E5E5E5] text-sm text-[#9CA3AF] hover:bg-[#F5F5F5] transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#C21430] transition-colors disabled:opacity-50 cursor-pointer"
            >
              {submitting ? "Sending..." : "Get My Free Quote"}
              {!submitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
