import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { business } from "@/data/business";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-gray-300">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Superior <span className="text-[#E31837]">Power</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Licensed electricians serving Brampton, Mississauga, and the Greater
              Toronto Area for over 15 years. ESA certified, fully insured, and
              committed to quality workmanship.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-[#E31837]" />
              <span>ESA License {business.esaLicense}</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${business.phoneFull}`}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E31837] flex-shrink-0" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E31837] flex-shrink-0" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#E31837] flex-shrink-0 mt-0.5" />
                {business.address.full}
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-[#E31837] flex-shrink-0 mt-0.5" />
                <div>
                  <div>{business.hours.weekday}</div>
                  <div>{business.hours.saturday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="w-full h-64">
        <iframe
          src={business.googleMapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${business.name} location on Google Maps`}
        />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {business.social.facebook && (
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Facebook
              </a>
            )}
            {business.social.instagram && (
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
