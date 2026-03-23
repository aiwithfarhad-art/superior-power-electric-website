import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Superior Power Electric",
  description: "Thank you for contacting Superior Power Electric. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Thank You!
          </h1>
          <p className="font-body text-lg text-[#94a3b8] mt-4 max-w-lg mx-auto">
            We&apos;ve received your message and will get back to you within 2 hours during business hours.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-body text-[#64748b] text-lg mb-8">
            Need something urgent? Give us a call directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16478729954"
              className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-[#C21430] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call (647) 872-9954
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-[#1C1C1E] px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:border-gray-400 transition-colors"
            >
              Back to Homepage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
