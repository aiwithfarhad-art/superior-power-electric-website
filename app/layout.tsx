import type { Metadata } from "next";
import Script from "next/script";
import { Oswald, DM_Sans, Orbitron } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, electricianSchema, websiteSchema, siteNavigationSchema } from "@/components/seo/JsonLd";
import { PageViewTracker } from "@/components/shared/PageViewTracker";
import ScrollAnimator from "@/components/shared/ScrollAnimator";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { business } from "@/data/business";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: `${business.name} | Licensed Electricians in Brampton & GTA`,
    template: `%s | ${business.name}`,
  },
  description: `Licensed electricians in Brampton serving residential and commercial clients across the GTA. ESA ${business.esaLicense}. ${business.yearsInBusiness} years experience. Call ${business.phone}.`,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: business.domain,
    siteName: business.name,
    title: `${business.name} | Licensed Electricians in Brampton & GTA`,
    description: `Licensed electricians serving Brampton, Mississauga, and the GTA. ESA ${business.esaLicense}. $49 assessment credited toward your project. Call ${business.phone}.`,
    images: [
      {
        url: `${business.domain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${business.name} - Licensed Electricians in Brampton & GTA`,
      },
    ],
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Brampton",
    "geo.position": "43.72;-79.75",
    "ICBM": "43.72, -79.75",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: business.domain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${oswald.variable} ${dmSans.variable} ${orbitron.variable}`}>
      <body className="font-body antialiased">
        <JsonLd data={electricianSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={siteNavigationSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollAnimator />
        <StickyMobileCTA />
        <PageViewTracker />
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_ac24ff496c7741b687f2d922474876e7"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
