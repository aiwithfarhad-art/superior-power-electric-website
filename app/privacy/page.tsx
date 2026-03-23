import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Superior Power Electric",
  description: "Privacy policy for Superior Power Electric - how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://superiorpowerelectric.ca/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Superior Power Electric",
    description: "Privacy policy for Superior Power Electric - how we collect, use, and protect your personal information.",
    url: "https://superiorpowerelectric.ca/privacy",
    siteName: "Superior Power Electric",
    type: "website",
    locale: "en_CA",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#1C1C1E] pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-heading text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-body text-[#94a3b8] mt-3">Last updated: March 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="prose-legal px-4 sm:px-6">
          <p>
            Superior Power Electric (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting
            the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website superiorpowerelectric.ca or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name, email address, and phone number when you fill out a contact form or request a quote</li>
            <li>Service address and project details related to your electrical service request</li>
            <li>Payment information when processed through secure third-party payment processors</li>
          </ul>
          <p>We may also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and browsing behavior through cookies and similar technologies.</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide quotes for electrical services</li>
            <li>Schedule and perform electrical work at your property</li>
            <li>Send appointment confirmations and follow-up communications</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>How We Share Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with
            trusted service providers who assist us in operating our website and business, provided they agree to keep
            your information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of
            transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze
            website traffic. You can control cookie preferences through your browser settings.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under Canadian privacy legislation (PIPEDA), you have the right to access, correct, or delete your personal
            information. To exercise these rights, contact us at the information below.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
            revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <p>
            Superior Power Electric<br />
            59 Maisonneuve Blvd, Brampton, ON L6P 1Y7<br />
            Phone: (647) 872-9954<br />
            Email: info@superiorpowerelectric.ca
          </p>
        </div>
      </section>
    </>
  );
}
