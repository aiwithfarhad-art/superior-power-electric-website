export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingCTA {
  heading: string;
  description: string;
  priceRange: string;
  buttonText: string;
}

export interface ServiceDetails {
  benefits: ServiceBenefit[];
  processSteps: ProcessStep[];
  pricingCTA: PricingCTA;
}

export const serviceDetails: Record<string, ServiceDetails> = {
  "panel-upgrades": {
    benefits: [
      {
        icon: "Shield",
        title: "Increased Safety",
        description:
          "Modern panels with arc-fault protection reduce fire risks and meet current Ontario Electrical Safety Code standards.",
      },
      {
        icon: "Zap",
        title: "Higher Capacity",
        description:
          "Support EV chargers, hot tubs, home offices, and modern appliances without tripping breakers or overloading circuits.",
      },
      {
        icon: "FileCheck",
        title: "Insurance Compliance",
        description:
          "Many Ontario insurers require modern panels. An upgrade can lower your premiums and keep your coverage intact.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "$49 Assessment",
        description:
          "We inspect your current panel, test capacity, and discuss your electrical needs and future plans. The $49 fee is credited toward your project.",
      },
      {
        step: 2,
        title: "Written Quote",
        description:
          "Detailed scope, timeline, and pricing with no hidden fees. You know exactly what you are paying for.",
      },
      {
        step: 3,
        title: "Professional Install",
        description:
          "Our ESA-licensed electricians install your new panel. Most upgrades are completed in a single day.",
      },
      {
        step: 4,
        title: "ESA Certification",
        description:
          "Final inspection by the Electrical Safety Authority. You receive your official certificate of inspection.",
      },
    ],
    pricingCTA: {
      heading: "How Much Does a Panel Upgrade Cost in Brampton?",
      description:
        "Panel upgrades in Brampton typically range from $2,000 to $4,500 depending on amperage (100A to 200A), complexity, and additional circuits needed. Every quote includes a detailed breakdown with no hidden fees.",
      priceRange: "$2,000 - $4,500",
      buttonText: "Get an Exact Quote",
    },
  },
  "pot-lights": {
    benefits: [
      {
        icon: "Sparkles",
        title: "Modern Aesthetics",
        description:
          "Clean, flush-mount design makes rooms feel bigger and more open. No bulky fixtures or dust-collecting lampshades.",
      },
      {
        icon: "Zap",
        title: "Energy Savings",
        description:
          "LED pot lights use 75% less energy than halogen with a 25,000+ hour lifespan. The savings start immediately.",
      },
      {
        icon: "Ruler",
        title: "Custom Layouts",
        description:
          "We plan spacing and placement for even, shadow-free lighting in every room. You approve the plan before we start.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Layout Planning",
        description:
          "We measure your room and plan pot light placement based on ceiling height, room size, and natural light.",
      },
      {
        step: 2,
        title: "Ceiling Prep",
        description:
          "We mark positions and carefully cut openings with minimal mess. Drop cloths protect your floors and furniture.",
      },
      {
        step: 3,
        title: "Wiring & Install",
        description:
          "New circuits are run, IC-rated LED fixtures installed, and every connection tested for safety.",
      },
      {
        step: 4,
        title: "Final Walkthrough",
        description:
          "Dimmer switch setup, full cleanup, and you approve the finished result before we leave.",
      },
    ],
    pricingCTA: {
      heading: "How Much Do Pot Lights Cost in Brampton?",
      description:
        "Pot light installation runs $150 to $250 per light installed, depending on ceiling type and accessibility. A standard 6-light kitchen installation costs $900 to $1,500. $49 assessment credited toward your project.",
      priceRange: "$150 - $250 per light",
      buttonText: "Book Your $49 Assessment",
    },
  },
  "ev-charger": {
    benefits: [
      {
        icon: "Battery",
        title: "Full Charge Overnight",
        description:
          "Level 2 delivers 30-50 km of range per hour. Wake up to a full battery every morning without visiting a public station.",
      },
      {
        icon: "Settings",
        title: "All Brands Supported",
        description:
          "Tesla Wall Connector, ChargePoint Home Flex, Grizzl-E, FLO, Emporia, JuiceBox, and more. We install them all.",
      },
      {
        icon: "TrendingUp",
        title: "Future-Proof",
        description:
          "Proper 240V dedicated circuit with capacity for next-generation chargers and increased power demands.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Panel Assessment",
        description:
          "We check your panel capacity and determine if a 200A upgrade is needed to support your EV charger.",
      },
      {
        step: 2,
        title: "Circuit Installation",
        description:
          "Dedicated 240V, 40-50 amp circuit from your panel to the charger location with proper wire gauge.",
      },
      {
        step: 3,
        title: "Charger Mounting",
        description:
          "We mount your charger unit, complete all electrical connections, and test the full system.",
      },
      {
        step: 4,
        title: "ESA Certification",
        description:
          "Inspection and certification by the Electrical Safety Authority. We walk you through operation.",
      },
    ],
    pricingCTA: {
      heading: "How Much Does EV Charger Installation Cost in Brampton?",
      description:
        "EV charger installation typically costs $1,500 to $3,000 without a panel upgrade. If a 200A panel upgrade is needed, the total ranges from $3,500 to $7,000. $49 assessment credited toward your project.",
      priceRange: "$1,500 - $3,000",
      buttonText: "Get an Exact Quote",
    },
  },
  residential: {
    benefits: [
      {
        icon: "Home",
        title: "Full-Service Electricians",
        description:
          "From outlets and switches to complete home rewires, we handle every residential electrical need under one roof.",
      },
      {
        icon: "Shield",
        title: "Code Compliant",
        description:
          "Every job meets Ontario Electrical Safety Code standards with ESA inspection and certification included.",
      },
      {
        icon: "Clock",
        title: "Emergency Available",
        description:
          "24/7 emergency electrical service for urgent issues across Brampton and the Greater Toronto Area.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Contact Us",
        description:
          "Call (905) 452-8439 or fill out our online form to book a $49 on-site assessment or request a free remote estimate.",
      },
      {
        step: 2,
        title: "On-Site Assessment",
        description:
          "We inspect the work area and provide a detailed written quote with upfront pricing.",
      },
      {
        step: 3,
        title: "Professional Work",
        description:
          "Licensed electricians complete the job efficiently, safely, and with minimal disruption to your home.",
      },
      {
        step: 4,
        title: "ESA Sign-Off",
        description:
          "Inspection, certification, and full cleanup before we leave. Your satisfaction is guaranteed.",
      },
    ],
    pricingCTA: {
      heading: "How Much Does a Residential Electrician Cost in Brampton?",
      description:
        "Residential electrical costs vary by project. Small repairs start at $150, while larger projects like panel upgrades or rewiring range from $2,000 to $20,000. $49 assessment credited toward your project. Free remote estimates also available.",
      priceRange: "Varies by project",
      buttonText: "Book Your $49 Assessment",
    },
  },
  commercial: {
    benefits: [
      {
        icon: "Clock",
        title: "Minimal Disruption",
        description:
          "We schedule work around your business hours, including evenings and weekends, so your operations keep running.",
      },
      {
        icon: "ClipboardCheck",
        title: "Code & Safety Audits",
        description:
          "Full ESA safety inspections with documentation for insurance compliance and municipal building codes.",
      },
      {
        icon: "Building2",
        title: "Scalable Solutions",
        description:
          "From small retail shops to large warehouse operations, we handle commercial electrical projects of any scale across the GTA.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Site Assessment",
        description:
          "We evaluate your commercial electrical needs, current systems, and any code compliance requirements.",
      },
      {
        step: 2,
        title: "Detailed Proposal",
        description:
          "Scope, timeline, and competitive pricing tailored to your business with no hidden costs.",
      },
      {
        step: 3,
        title: "Scheduled Work",
        description:
          "Installation during off-hours to minimize disruption. We coordinate timing around your operations.",
      },
      {
        step: 4,
        title: "Inspection & Docs",
        description:
          "ESA certification and all documentation for your records, insurance, and municipal requirements.",
      },
    ],
    pricingCTA: {
      heading: "How Much Do Commercial Electrical Services Cost in Brampton?",
      description:
        "Commercial electrical costs depend on scope and complexity. LED retrofits, safety inspections, emergency repairs, and full installations are all quoted individually. $49 assessment credited toward your project.",
      priceRange: "Custom quotes",
      buttonText: "Book Your $49 Assessment",
    },
  },
  rewiring: {
    benefits: [
      {
        icon: "Flame",
        title: "Fire Prevention",
        description:
          "Replace degraded aluminum or knob-and-tube wiring before it becomes a hazard. Protect your family and your home.",
      },
      {
        icon: "Wallet",
        title: "Insurance Savings",
        description:
          "Modern wiring with ESA certification often qualifies you for lower insurance premiums. We provide all documentation.",
      },
      {
        icon: "TrendingUp",
        title: "Increased Home Value",
        description:
          "Updated electrical systems add significant value when selling. Buyers and inspectors look for modern, certified wiring.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Full Assessment",
        description:
          "We trace all wiring throughout the home and identify every section that needs replacement.",
      },
      {
        step: 2,
        title: "Scope & Quote",
        description:
          "Detailed plan showing exactly what will be replaced, the timeline, and pricing with no surprises.",
      },
      {
        step: 3,
        title: "Methodical Rewiring",
        description:
          "Room-by-room replacement with minimal disruption. We work cleanly and protect your home throughout.",
      },
      {
        step: 4,
        title: "ESA Certification",
        description:
          "Inspection, certificate, and full documentation for your insurance company provided on completion.",
      },
    ],
    pricingCTA: {
      heading: "How Much Does Electrical Rewiring Cost in Brampton?",
      description:
        "Partial rewiring typically runs $3,000 to $8,000. A full home rewire ranges from $8,000 to $20,000 depending on home size and accessibility. $49 assessment credited toward your project. Honest quotes with no surprises.",
      priceRange: "$3,000 - $20,000",
      buttonText: "Book Your $49 Assessment",
    },
  },
  "hot-tub-electrical": {
    benefits: [
      {
        icon: "Zap",
        title: "Dedicated Circuit",
        description:
          "Proper 240V, 50-amp circuit ensures your hot tub runs safely at full power without tripping breakers.",
      },
      {
        icon: "ShieldCheck",
        title: "GFCI Protected",
        description:
          "Code-required ground fault protection prevents electrical shock near water. Your safety is non-negotiable.",
      },
      {
        icon: "Snowflake",
        title: "All-Weather Ready",
        description:
          "Outdoor installations use weatherproof conduit and disconnect boxes rated for Ontario winters.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Panel Check",
        description:
          "We verify your panel can support a 50-amp hot tub circuit. If not, we quote a panel upgrade.",
      },
      {
        step: 2,
        title: "Circuit Run",
        description:
          "Heavy-gauge wire from your panel to the tub location with a GFCI disconnect within sight of the tub.",
      },
      {
        step: 3,
        title: "Connection & Test",
        description:
          "Complete hookup, full circuit testing, and GFCI protection verification before you use the tub.",
      },
      {
        step: 4,
        title: "ESA Permit & Inspection",
        description:
          "We handle the entire permit and inspection process. You receive your ESA certificate.",
      },
    ],
    pricingCTA: {
      heading: "How Much Does Hot Tub Electrical Cost in Brampton?",
      description:
        "Hot tub electrical installation typically costs $800 to $2,500 depending on distance from your panel, indoor vs outdoor placement, and whether a panel upgrade is needed.",
      priceRange: "$800 - $2,500",
      buttonText: "Get an Exact Quote",
    },
  },
  lighting: {
    benefits: [
      {
        icon: "Zap",
        title: "Energy Efficiency",
        description:
          "LED upgrades save $200 to $400 per year on electricity for a typical Brampton home. The ROI is immediate.",
      },
      {
        icon: "Smartphone",
        title: "Smart Home Ready",
        description:
          "Compatible with Alexa, Google Home, and Apple HomeKit. Control every light from your phone or voice.",
      },
      {
        icon: "Sun",
        title: "Indoor & Outdoor",
        description:
          "From kitchen pendants and bathroom vanity lights to landscape security lights, we install it all.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Lighting Consultation",
        description:
          "We discuss your goals, preferences, and review the space to recommend the best lighting solution.",
      },
      {
        step: 2,
        title: "Fixture Selection",
        description:
          "Help choosing the right fixtures, bulbs, color temperatures, and smart controls for your needs.",
      },
      {
        step: 3,
        title: "Professional Install",
        description:
          "Clean, code-compliant installation with proper circuits and connections. We protect your home throughout.",
      },
      {
        step: 4,
        title: "Test & Demonstrate",
        description:
          "We test everything and show you how to use dimmers, smart switches, and scene controls.",
      },
    ],
    pricingCTA: {
      heading: "How Much Does Lighting Installation Cost in Brampton?",
      description:
        "Dimmer switch installation runs $100 to $200. Ceiling fixture replacement costs $150 to $300. A full LED retrofit for a home ranges from $500 to $1,500. $49 assessment credited toward your project.",
      priceRange: "$100 - $1,500+",
      buttonText: "Book Your $49 Assessment",
    },
  },
  "knob-and-tube": {
    benefits: [
      {
        icon: "FileCheck",
        title: "Insurance Compliance",
        description:
          "Most Ontario insurers require knob-and-tube removal. We provide the ESA documentation they need to update your policy.",
      },
      {
        icon: "Flame",
        title: "Fire Safety",
        description:
          "Remove degraded 70 to 100 year old wiring that is a leading cause of electrical fires in older Ontario homes.",
      },
      {
        icon: "Shield",
        title: "Modern Grounding",
        description:
          "Upgrade from ungrounded knob-and-tube to modern NMD90 copper wiring with full ground protection.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Complete Inspection",
        description:
          "We trace all knob-and-tube wiring including hidden runs in walls, ceilings, and attic spaces.",
      },
      {
        step: 2,
        title: "Detailed Scope",
        description:
          "Honest assessment of what is active vs disconnected, with pricing options for partial or full replacement.",
      },
      {
        step: 3,
        title: "Safe Removal",
        description:
          "Methodical removal of old wiring and installation of modern NMD90 copper with proper grounding.",
      },
      {
        step: 4,
        title: "ESA Certification",
        description:
          "Inspection, certificate of compliance, and insurance documentation provided on completion.",
      },
    ],
    pricingCTA: {
      heading: "How Much Does Knob and Tube Removal Cost in Brampton?",
      description:
        "Knob and tube removal typically costs $5,000 to $15,000 depending on home size, amount of active wiring, and accessibility. A typical Brampton bungalow runs $5,000 to $8,000.",
      priceRange: "$5,000 - $15,000",
      buttonText: "Book Your $49 Assessment",
    },
  },
};
