import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  async redirects() {
    return [
      // WordPress page redirects (from old sitemap)
      {
        source: "/electrical-services",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/electrician-brampton",
        destination: "/locations/brampton",
        permanent: true,
      },
      {
        source: "/electrical-panel-upgrades",
        destination: "/services/panel-upgrades",
        permanent: true,
      },
      {
        source: "/electrical-repairs",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/electrical-rewiring-upgrades",
        destination: "/services/rewiring",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/pot-light-installation",
        destination: "/services/pot-lights",
        permanent: true,
      },
      {
        source: "/hot-tub-installation",
        destination: "/services/hot-tub-electrical",
        permanent: true,
      },
      {
        source: "/residential-electrical-services",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/ceiling-fan-installation",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/surge-protection",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/home-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/electrical-services-in-brampton",
        destination: "/locations/brampton",
        permanent: true,
      },
      {
        source: "/ev-charger-installation",
        destination: "/services/ev-charger",
        permanent: true,
      },
      {
        source: "/knob-and-tube-wiring",
        destination: "/services/knob-and-tube",
        permanent: true,
      },
      {
        source: "/knob-and-tube-wiring-removal",
        destination: "/services/knob-and-tube",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/rewiring",
        destination: "/services/rewiring",
        permanent: true,
      },
      {
        source: "/commercial-electrical-services",
        destination: "/services/commercial",
        permanent: true,
      },
      {
        source: "/lighting-installation",
        destination: "/services/lighting",
        permanent: true,
      },
      {
        source: "/commercial-electrical-system-installation",
        destination: "/services/commercial",
        permanent: true,
      },
      {
        source: "/emergency-electrical-services",
        destination: "/contact",
        permanent: true,
      },
      // /blog redirect removed - blog section is now live
      {
        source: "/thank-you",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/home-inspection",
        destination: "/services/residential",
        permanent: true,
      },
      // WordPress blog post redirects (mapped to closest service page)
      {
        source: "/why-do-my-lights-flicker",
        destination: "/services/lighting",
        permanent: true,
      },
      {
        source: "/what-is-the-difference-between-fuses-and-breakers",
        destination: "/services/panel-upgrades",
        permanent: true,
      },
      {
        source: "/home-electrical-safety-inspection",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/whole-home-surge-protection",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/why-is-my-electrical-outlet-receptacle-not-working",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/installation-of-ethernet-cables-in-your-home",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/pot-light-installation-by-a-licensed-electrical-contractor",
        destination: "/services/pot-lights",
        permanent: true,
      },
      {
        source: "/5-tips-about-electricity-for-the-new-homeowner",
        destination: "/",
        permanent: true,
      },
      {
        source: "/why-does-my-circuit-breaker-keep-tripping",
        destination: "/services/panel-upgrades",
        permanent: true,
      },
      {
        source: "/tesla-charger-installation",
        destination: "/services/ev-charger",
        permanent: true,
      },
      {
        source: "/smoke-carbon-monoxide-alarms-installation-by-a-electrician",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/aluminum-wiring-repair-rewire",
        destination: "/services/rewiring",
        permanent: true,
      },
      {
        source: "/hot-tub-wiring",
        destination: "/services/hot-tub-electrical",
        permanent: true,
      },
      {
        source: "/what-electrical-upgrades-can-i-do-to-raise-my-property-value",
        destination: "/",
        permanent: true,
      },
      {
        source: "/what-is-a-gfci",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/benefits-of-retrofitting-your-lighting-to-led",
        destination: "/services/lighting",
        permanent: true,
      },
      {
        source: "/knob-and-tube-maintenance-or-removal",
        destination: "/services/knob-and-tube",
        permanent: true,
      },
      {
        source: "/how-do-i-know-when-an-electrical-receptacle-needs-to-be-repaired-or-replaced",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/security-camera-installation",
        destination: "/services/residential",
        permanent: true,
      },
      {
        source: "/do-you-need-a-panel-upgrade",
        destination: "/services/panel-upgrades",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
