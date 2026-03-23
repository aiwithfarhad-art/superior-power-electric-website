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

export interface BeforeAfter {
  withoutItems: string[];
  withItems: string[];
  mobileWithoutItems?: string[];
  mobileWithItems?: string[];
}

export interface ServiceDetails {
  benefits: ServiceBenefit[];
  processSteps: ProcessStep[];
  pricingCTA: PricingCTA;
  beforeAfter: BeforeAfter;
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
    beforeAfter: {
      withoutItems: [
        "Outdated panel with no arc-fault protection",
        "Breakers tripping when running multiple appliances",
        "Insurance company flagging your panel as a risk",
        "Cannot add EV charger, hot tub, or home office circuits",
        "Potential fire hazard from overloaded wiring",
      ],
      withItems: [
        "Modern 200A panel with full arc-fault protection",
        "Capacity for every appliance and future upgrades",
        "Insurance compliance with ESA certificate on file",
        "Ready for EV chargers, hot tubs, and smart home systems",
        "Peace of mind with code-compliant, inspected wiring",
      ],
      mobileWithoutItems: [
        "No arc-fault protection",
        "Breakers tripping constantly",
        "Insurance flagging your panel",
        "Can't add EV or hot tub circuits",
        "Fire hazard from overloaded wiring",
      ],
      mobileWithItems: [
        "Modern 200A panel installed",
        "Capacity for all appliances",
        "ESA certificate on file",
        "EV and smart home ready",
        "Code-compliant, inspected wiring",
      ],
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
    beforeAfter: {
      withoutItems: [
        "Dark corners and uneven shadows across the room",
        "Bulky fixtures collecting dust and dating your space",
        "Halogen bulbs burning out every few months",
        "No dimming control for different moods or tasks",
        "Higher electricity bills from inefficient lighting",
      ],
      withItems: [
        "Even, shadow-free illumination in every corner",
        "Clean flush-mount design that modernizes any room",
        "LED bulbs lasting 25,000+ hours with zero maintenance",
        "Full dimmer control from bright task lighting to ambient glow",
        "75% energy savings starting from day one",
      ],
      mobileWithoutItems: [
        "Dark corners and uneven lighting",
        "Bulky, dust-collecting fixtures",
        "Halogen bulbs burning out fast",
        "No dimming control",
        "High electricity bills",
      ],
      mobileWithItems: [
        "Shadow-free illumination everywhere",
        "Clean flush-mount LED design",
        "25,000+ hour bulb lifespan",
        "Full dimmer control included",
        "75% energy savings day one",
      ],
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
    beforeAfter: {
      withoutItems: [
        "Driving to public chargers and waiting 30-60 minutes",
        "Paying $15 to $25 per public charging session",
        "Unreliable Level 1 charging taking 24+ hours for a full battery",
        "Extension cords and improper outlets creating fire risk",
        "No dedicated circuit if you upgrade to a bigger EV later",
      ],
      withItems: [
        "Full charge overnight in your own garage or driveway",
        "Charging cost drops to $2 to $4 per session at home rates",
        "Level 2 delivers 30 to 50 km of range per hour",
        "Dedicated 240V circuit with proper safety protection",
        "Future-proof wiring ready for next-generation chargers",
      ],
      mobileWithoutItems: [
        "Driving to public chargers",
        "$15-$25 per charging session",
        "Level 1 takes 24+ hours",
        "Extension cords creating fire risk",
        "No dedicated EV circuit",
      ],
      mobileWithItems: [
        "Full charge overnight at home",
        "$2-$4 per charge at home rates",
        "30-50 km range per hour",
        "Dedicated 240V safety circuit",
        "Future-proof for any EV",
      ],
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
    beforeAfter: {
      withoutItems: [
        "Flickering lights and outlets that do not work reliably",
        "Old wiring that may not meet current Ontario safety code",
        "No idea if your home passes an electrical safety inspection",
        "Calling different electricians for different problems",
        "Worrying about electrical fires from aging systems",
      ],
      withItems: [
        "Every outlet, switch, and circuit working perfectly",
        "Full compliance with Ontario Electrical Safety Code",
        "ESA certificate of inspection on file for insurance",
        "One licensed team handling all your electrical needs",
        "Modern, safe wiring you can trust for decades",
      ],
      mobileWithoutItems: [
        "Flickering lights and dead outlets",
        "Old wiring failing safety code",
        "No electrical safety certificate",
        "Different electricians each time",
        "Fire risk from aging systems",
      ],
      mobileWithItems: [
        "Every outlet and switch working",
        "Full Ontario safety code compliance",
        "ESA certificate for insurance",
        "One licensed team for everything",
        "Modern, safe wiring for decades",
      ],
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
    beforeAfter: {
      withoutItems: [
        "Electrical issues disrupting business operations",
        "No documentation for insurance or municipal compliance",
        "Contractors who work during your peak hours",
        "Surprise charges and hidden fees after the job",
        "Waiting days for a quote or callback",
      ],
      withItems: [
        "Reliable electrical systems that keep your business running",
        "Full ESA documentation for insurance and code compliance",
        "Work scheduled around your hours with zero disruption",
        "Upfront pricing with detailed scope before any work starts",
        "Same-day quotes and priority scheduling available",
      ],
      mobileWithoutItems: [
        "Electrical issues disrupting ops",
        "No compliance documentation",
        "Work during your peak hours",
        "Surprise charges and hidden fees",
        "Days waiting for a quote",
      ],
      mobileWithItems: [
        "Reliable systems, zero downtime",
        "Full ESA compliance documentation",
        "Work around your schedule",
        "Upfront pricing, no surprises",
        "Same-day quotes available",
      ],
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
    beforeAfter: {
      withoutItems: [
        "Old aluminum or knob-and-tube wiring creating fire risk",
        "Insurance company threatening to cancel your policy",
        "Circuits that cannot handle modern appliances safely",
        "No grounding protection on any of your outlets",
        "Lower home resale value due to outdated electrical",
      ],
      withItems: [
        "Modern NMD90 copper wiring throughout your home",
        "Full insurance compliance with ESA documentation",
        "Capacity for every appliance, charger, and device",
        "Proper grounding on every circuit and outlet",
        "Increased home value with certified electrical systems",
      ],
      mobileWithoutItems: [
        "Old wiring creating fire risk",
        "Insurance threatening cancellation",
        "Circuits can't handle appliances",
        "No grounding on outlets",
        "Lower home resale value",
      ],
      mobileWithItems: [
        "Modern NMD90 copper wiring",
        "ESA certified, insurance compliant",
        "Capacity for all your devices",
        "Full grounding on every outlet",
        "Higher home resale value",
      ],
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
    beforeAfter: {
      withoutItems: [
        "Extension cords and adapters creating a tripping hazard",
        "No GFCI protection near water - serious shock risk",
        "Panel that cannot handle a 50-amp hot tub circuit",
        "Exposed wiring deteriorating in Ontario weather",
        "No ESA permit - could void your home insurance",
      ],
      withItems: [
        "Clean, dedicated circuit from panel to hot tub",
        "Code-required GFCI disconnect within sight of the tub",
        "Panel verified or upgraded to handle the load safely",
        "Weatherproof conduit rated for Canadian winters",
        "ESA permit and inspection certificate included",
      ],
      mobileWithoutItems: [
        "Extension cords and trip hazards",
        "No GFCI shock protection",
        "Panel can't handle the load",
        "Exposed wiring in weather",
        "No ESA permit on file",
      ],
      mobileWithItems: [
        "Dedicated circuit to hot tub",
        "GFCI disconnect installed",
        "Panel verified for the load",
        "Weatherproof conduit installed",
        "ESA permit and certificate",
      ],
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
    beforeAfter: {
      withoutItems: [
        "Rooms that feel dark even with all the lights on",
        "Outdated fixtures that waste energy and look dated",
        "No smart controls - getting up to flip every switch",
        "Mismatched color temperatures across the house",
        "Outdoor areas with no security or landscape lighting",
      ],
      withItems: [
        "Bright, even illumination designed for every room",
        "Modern LED fixtures that save $200 to $400 per year",
        "Smart home controls via phone, voice, or automation",
        "Consistent color temperature throughout your home",
        "Professional outdoor lighting for safety and curb appeal",
      ],
      mobileWithoutItems: [
        "Dark rooms even with lights on",
        "Outdated, energy-wasting fixtures",
        "No smart controls at all",
        "Mismatched color temperatures",
        "No outdoor lighting installed",
      ],
      mobileWithItems: [
        "Bright, even lighting everywhere",
        "LED fixtures save $200-$400/yr",
        "Smart home controls included",
        "Consistent color throughout",
        "Pro outdoor lighting installed",
      ],
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
    beforeAfter: {
      withoutItems: [
        "70 to 100 year old ungrounded wiring throughout your walls",
        "Insurance company refusing coverage or charging higher premiums",
        "Cannot safely add insulation without fire risk",
        "No arc-fault or ground-fault protection anywhere",
        "Failing a home inspection and losing a sale",
      ],
      withItems: [
        "Modern NMD90 copper wiring with full grounding",
        "Insurance compliance with ESA certificate provided",
        "Safe to insulate your attic and walls properly",
        "Arc-fault and ground-fault protection on every circuit",
        "Clean home inspection report that closes the deal",
      ],
      mobileWithoutItems: [
        "70-100 year old ungrounded wiring",
        "Insurance refusing coverage",
        "Can't safely add insulation",
        "No arc-fault protection",
        "Failing home inspections",
      ],
      mobileWithItems: [
        "Modern NMD90 copper wiring",
        "ESA certificate for insurance",
        "Safe to insulate everywhere",
        "Full arc-fault protection",
        "Clean home inspection report",
      ],
    },
  },
};
