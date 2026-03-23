import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Superior Power Electric",
  description: "Terms of service for Superior Power Electric electrical contracting services.",
  alternates: {
    canonical: "https://superiorpowerelectric.ca/terms",
  },
  openGraph: {
    title: "Terms of Service | Superior Power Electric",
    description: "Terms of service for Superior Power Electric electrical contracting services.",
    url: "https://superiorpowerelectric.ca/terms",
    siteName: "Superior Power Electric",
    type: "website",
    locale: "en_CA",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#1C1C1E] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-heading text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Terms of Service
          </h1>
          <p className="font-body text-[#94a3b8] mt-3">Last updated: March 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="prose-legal px-4 sm:px-6">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Superior Power Electric website and services.
            By accessing our website or engaging our services, you agree to these Terms.
          </p>

          <h2>Services</h2>
          <p>
            Superior Power Electric provides licensed electrical contracting services for residential and commercial
            properties in Brampton, Mississauga, and the Greater Toronto Area. All work is performed by ESA/ECRA
            licensed electricians (License #7014710).
          </p>

          <h2>Assessment Fee</h2>
          <p>
            Our $49 on-site assessment fee covers a comprehensive evaluation of your electrical system. This fee is
            credited toward any work you authorize. Free remote estimates are available for projects where sufficient
            photos and details can be provided without a site visit.
          </p>

          <h2>Quotes and Pricing</h2>
          <p>
            All quotes are provided in writing before work begins. Prices are fixed once approved - no hidden fees or
            surprise charges. Additional work discovered during a project will be discussed and approved by you before
            proceeding.
          </p>

          <h2>Licensing and Insurance</h2>
          <p>
            Superior Power Electric is fully licensed (ESA/ECRA #7014710) and insured. All work complies with the
            Ontario Electrical Safety Code and is subject to ESA inspection where required.
          </p>

          <h2>Warranty</h2>
          <p>
            We stand behind our work. All installations include a workmanship warranty. Manufacturer warranties on
            products and materials are passed through to you as applicable.
          </p>

          <h2>Cancellation</h2>
          <p>
            You may cancel or reschedule an appointment with at least 24 hours notice at no charge. Same-day
            cancellations may be subject to a service fee.
          </p>

          <h2>Website Use</h2>
          <p>
            The content on this website is for informational purposes only. While we strive to keep information accurate
            and up-to-date, we make no guarantees about the completeness or accuracy of website content.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Superior Power Electric shall not be liable for any indirect, incidental, or consequential damages arising
            from the use of our website or services, except as required by applicable law.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable
            therein.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms, contact us at:
          </p>
          <p>
            Superior Power Electric<br />
            59 Maisonneuve Blvd, Brampton, ON L6P 1Y7<br />
            Phone: (905) 452-8439<br />
            Email: info@superiorpowerelectric.ca
          </p>
          <p>
            <Link href="https://share.google/rXefBgv7k6fmqcU5l" target="_blank" rel="noopener noreferrer" className="text-[#E31837]">
              View our Google Business Profile
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
