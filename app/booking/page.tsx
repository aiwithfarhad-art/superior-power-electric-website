import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Phone, ArrowRight, Calendar, Instagram, Facebook } from "lucide-react";

export const metadata: Metadata = {
  title: "Booking Confirmed | Superior Power Electric",
  description: "Your booking with Superior Power Electric has been confirmed. We'll contact you within 2 hours.",
  robots: { index: false, follow: false },
};

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            You&apos;re All Set!
          </h1>
          <p className="font-body text-lg text-[#94a3b8] mt-4 max-w-lg mx-auto">
            We&apos;ll contact you within 2 hours to confirm your appointment details.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="eyebrow-label">What Happens Next</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1C1C1E] uppercase tracking-tight mb-10">
            Three Simple Steps
          </h2>

          <div className="space-y-8">
            {[
              {
                icon: Phone,
                step: "1",
                title: "We Call You",
                desc: "A team member will reach out within 2 hours to confirm your appointment time and answer any questions.",
              },
              {
                icon: Calendar,
                step: "2",
                title: "On-Site Assessment",
                desc: "Our licensed electrician arrives at the scheduled time for your $49 whole-home assessment.",
              },
              {
                icon: CheckCircle,
                step: "3",
                title: "Clear Quote & Plan",
                desc: "You receive a transparent, fixed-price quote. The $49 assessment fee is credited toward your project.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#E31837]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#E31837]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1C1C1E] uppercase">
                    {item.title}
                  </h3>
                  <p className="font-body text-[#64748b] text-base mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-[#C21430] transition-colors"
            >
              Back to Homepage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Social */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="font-body text-sm text-[#94a3b8] mb-4">Follow us for project photos and tips</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/superiorpowerelectric/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F8F9FA] border border-gray-200 flex items-center justify-center text-[#64748b] hover:bg-[#E31837] hover:text-white hover:border-[#E31837] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/SuperiorPowerElectric/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F8F9FA] border border-gray-200 flex items-center justify-center text-[#64748b] hover:bg-[#E31837] hover:text-white hover:border-[#E31837] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
