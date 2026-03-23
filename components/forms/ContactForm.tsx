"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { business } from "@/data/business";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    estimateType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "contact-form" }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // Fail silently
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">Message Sent!</h3>
        <p className="text-[#9CA3AF] mb-4">
          Thank you for reaching out. We will respond within 24 hours.
        </p>
        <a
          href={`tel:${business.phoneFull}`}
          className="text-[#E31837] font-semibold hover:underline"
        >
          Need immediate help? Call {business.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] p-6 md:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[#1C1C1E] mb-1">
            Full Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg bg-[#FAFAF8] border-0 text-sm focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] focus:outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-[#1C1C1E] mb-1">
            Phone Number *
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full px-4 py-3 rounded-lg bg-[#FAFAF8] border-0 text-sm focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] focus:outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-[#1C1C1E] mb-1">
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email (optional)"
          className="w-full px-4 py-3 rounded-lg bg-[#FAFAF8] border-0 text-sm focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] focus:outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium text-[#1C1C1E] mb-1">
          Service Needed
        </label>
        <select
          id="contact-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-[#FAFAF8] border-0 text-sm focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] focus:outline-none transition-all"
        >
          <option value="">Select a service</option>
          <option value="Residential Electrical">Residential Electrical</option>
          <option value="Commercial Electrical">Commercial Electrical</option>
          <option value="Panel Upgrades">Panel Upgrades</option>
          <option value="Pot Lights">Pot Lights</option>
          <option value="Hot Tub Electrical">Hot Tub Electrical</option>
          <option value="Lighting Installation">Lighting Installation</option>
          <option value="Rewiring">Rewiring</option>
          <option value="EV Charger Installation">EV Charger Installation</option>
          <option value="Knob & Tube Replacement">Knob & Tube Replacement</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-estimate-type" className="block text-sm font-medium text-[#1C1C1E] mb-1">
          How would you like your estimate?
        </label>
        <select
          id="contact-estimate-type"
          name="estimateType"
          value={formData.estimateType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-[#FAFAF8] border-0 text-sm focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] focus:outline-none transition-all"
        >
          <option value="">Select an option</option>
          <option value="$49 On-Site Assessment">$49 On-Site Assessment (credited toward project)</option>
          <option value="Free Remote Estimate">Free Remote Estimate (send photos)</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[#1C1C1E] mb-1">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project or question..."
          className="w-full px-4 py-3 rounded-lg bg-[#FAFAF8] border-0 text-sm focus:bg-white focus:shadow-[0_0_0_2px_rgba(227,24,55,0.12)] focus:outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-[#C21430] hover:shadow-[0_4px_16px_rgba(227,24,55,0.3)] transition-all disabled:opacity-50 cursor-pointer"
      >
        {submitting ? "Sending..." : "Send Message"}
        {!submitting && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
}
