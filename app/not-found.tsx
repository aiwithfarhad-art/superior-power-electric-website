import Link from "next/link";
import { Home, Phone, ArrowRight, Search } from "lucide-react";
import { business } from "@/data/business";

export default function NotFound() {
  return (
    <>
      <section className="bg-[#1C1C1E] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-[#E31837]/20 flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-[#E31837]" />
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-black text-white uppercase tracking-tight">
            404
          </h1>
          <p className="font-heading text-xl md:text-2xl font-bold text-[#E31837] uppercase tracking-tight mt-2">
            Page Not Found
          </p>
          <p className="font-body text-lg text-[#94a3b8] mt-4 max-w-lg mx-auto">
            The page you are looking for may have been moved or no longer exists.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-[#1C1C1E] uppercase tracking-tight mb-8">
            Here are some helpful links
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: "Homepage", href: "/", icon: Home },
              { label: "Our Services", href: "/services/residential", icon: ArrowRight },
              { label: "Contact Us", href: "/contact", icon: Phone },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-center gap-2 bg-[#F8F9FA] border border-gray-200 text-[#1C1C1E] px-6 py-4 rounded-xl font-body font-semibold text-sm uppercase tracking-wider hover:border-[#E31837] hover:text-[#E31837] transition-all"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-100">
            <p className="font-body text-[#64748b] mb-4">
              Need an electrician? Call us directly.
            </p>
            <a
              href={`tel:${business.phoneFull}`}
              className="inline-flex items-center justify-center gap-2 bg-[#E31837] text-white px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-[#C21430] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
