import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, electricianSchema } from "@/components/seo/JsonLd";
import { business } from "@/data/business";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
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
    description: `Licensed electricians serving Brampton, Mississauga, and the GTA. ESA ${business.esaLicense}. Free estimates. Call ${business.phone}.`,
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={electricianSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
