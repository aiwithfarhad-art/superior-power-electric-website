export interface CityPage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  neighborhoods: string[];
  description: string;
  sections: {
    title: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const cities: CityPage[] = [
  {
    slug: "brampton",
    name: "Brampton",
    metaTitle: "Electrician in Brampton | ESA Licensed | Superior Power Electric",
    metaDescription:
      "Licensed electrician in Brampton serving residential and commercial properties. ESA #7014710. Panel upgrades, pot lights, rewiring, EV chargers. Call 647-872-9954.",
    h1: "Licensed Electrician in Brampton",
    heroDescription:
      "Superior Power Electric has been Brampton's trusted electrical contractor for over 15 years. ESA licensed, fully insured, and backed by 47 five-star Google reviews.",
    primaryKeyword: "electrician brampton",
    secondaryKeywords: [
      "electrician in brampton",
      "brampton electrician",
      "licensed electrician brampton",
      "electrical contractor brampton",
      "residential electrician brampton",
      "commercial electrician brampton",
    ],
    neighborhoods: [
      "Springdale",
      "Mount Pleasant",
      "Castlemore",
      "Heart Lake",
      "Bramalea",
      "Sandalwood",
      "Gore Meadows",
      "Bram West",
      "Fletcher's Meadow",
      "Credit Valley",
      "Snelgrove",
      "Churchville",
    ],
    description:
      "As Brampton's locally owned electrical contractor, Superior Power Electric understands the unique needs of homes and businesses across the city. From older homes in Bramalea needing panel upgrades to new builds in Castlemore requiring modern electrical systems, we deliver reliable, code-compliant work every time.",
    sections: [
      {
        title: "Brampton's Trusted Electrical Experts",
        content:
          "For over 15 years, Superior Power Electric has served Brampton homeowners and business owners with professional electrical services. Our ESA license (#7014710) means every job meets or exceeds the Ontario Electrical Safety Code. We live and work in Brampton, so our reputation matters to us.\n\nWhether you need pot lights in your Springdale home, a panel upgrade in Heart Lake, or commercial wiring for your Bramalea business, we bring the same level of care and expertise to every project.",
      },
      {
        title: "Residential Electrical Services in Brampton",
        content:
          "Brampton homes range from newer builds in Gore Meadows to established properties in Bramalea and Sandalwood. Each comes with different electrical needs. Older homes may have outdated 100-amp panels that struggle with modern demands. Newer homes might need additions like pot lights, EV charger installations, or hot tub wiring.\n\nWe handle it all. Our residential services include electrical panel upgrades, pot light installation, complete home rewiring, knob and tube replacement, EV charger installation, hot tub wiring, indoor and outdoor lighting, and general electrical repairs. Every job includes proper permits and ESA inspection.",
      },
      {
        title: "Commercial Electrical Services in Brampton",
        content:
          "Brampton is home to thousands of commercial properties along Queen Street, Steeles Avenue, and throughout the industrial areas near Highway 410. Superior Power Electric provides full commercial electrical services including office fit-outs, retail lighting, warehouse wiring, code compliance upgrades, and emergency electrical repairs.\n\nWe understand that downtime costs money. That is why we work efficiently to minimize disruption to your business operations while maintaining the highest safety standards.",
      },
      {
        title: "Why Brampton Homeowners Choose Us",
        content:
          "We are not a franchise or a large corporation. Superior Power Electric is locally owned and operated by Shaun Pennant, right here in Brampton. That means when you call, you talk to someone who lives in your community and takes personal pride in every job.\n\nWith 47 five-star Google reviews, ESA licensing, and over 15 years of experience, we have built our reputation one satisfied customer at a time. We offer free estimates, transparent pricing, and stand behind our work with a satisfaction guarantee.",
      },
    ],
    faqs: [
      {
        question: "How much does an electrician cost in Brampton?",
        answer:
          "Electrician rates in Brampton typically range from $100 to $150 per hour for a licensed contractor. The total cost depends on the scope of work. Simple repairs may be $150 to $300, while panel upgrades range from $1,500 to $3,500. We provide free, detailed estimates before starting any work.",
      },
      {
        question: "Do you need a permit for electrical work in Brampton?",
        answer:
          "Yes. In Brampton, most electrical work requires a permit from the Electrical Safety Authority (ESA). This includes panel upgrades, new circuit installations, rewiring, and EV charger installations. As an ESA-licensed contractor (#7014710), we handle all permit applications and inspections for you.",
      },
      {
        question: "What areas of Brampton do you serve?",
        answer:
          "We serve all of Brampton including Springdale, Mount Pleasant, Castlemore, Heart Lake, Bramalea, Sandalwood, Gore Meadows, Bram West, Fletcher's Meadow, Credit Valley, Snelgrove, and Churchville. We also serve surrounding areas like Mississauga, Vaughan, and Caledon.",
      },
      {
        question: "Do you offer emergency electrical services in Brampton?",
        answer:
          "Yes. We understand that electrical emergencies cannot wait. If you are experiencing a power outage, sparking outlets, burning smells, or other urgent electrical issues, call us at 647-872-9954. We prioritize emergency calls and will do our best to respond the same day.",
      },
      {
        question: "Are you a licensed electrician in Brampton?",
        answer:
          "Yes. Superior Power Electric holds ESA license #7014710 and is fully insured. Shaun Pennant has over 15 years of experience as a licensed electrician serving Brampton and the Greater Toronto Area. Every job we complete meets or exceeds the Ontario Electrical Safety Code.",
      },
    ],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    metaTitle:
      "Electrician in Mississauga | ESA Licensed | Superior Power Electric",
    metaDescription:
      "Licensed electrician in Mississauga. ESA #7014710. Residential and commercial electrical services. Panel upgrades, pot lights, EV chargers. Call 647-872-9954.",
    h1: "Licensed Electrician in Mississauga",
    heroDescription:
      "Professional electrical services for Mississauga homes and businesses. ESA licensed (#7014710), fully insured, and trusted by homeowners across the GTA with 47 five-star reviews.",
    primaryKeyword: "electrician mississauga",
    secondaryKeywords: [
      "electrician in mississauga",
      "mississauga electrician",
      "licensed electrician mississauga",
      "electrical contractor mississauga",
      "residential electrician mississauga",
      "commercial electrician mississauga",
    ],
    neighborhoods: [
      "Port Credit",
      "Streetsville",
      "Erin Mills",
      "Meadowvale",
      "Clarkson",
      "Lorne Park",
      "Cooksville",
      "Malton",
      "Mississauga Valleys",
      "Churchill Meadows",
      "Lisgar",
      "Hurontario",
    ],
    description:
      "Superior Power Electric brings over 15 years of professional electrical experience to Mississauga. From heritage homes in Port Credit to modern builds in Churchill Meadows, we deliver reliable, ESA-certified electrical work for residential and commercial properties across the city.",
    sections: [
      {
        title: "Professional Electricians Serving Mississauga",
        content:
          "Mississauga homeowners and business owners deserve electrical contractors they can trust. Superior Power Electric has served the Mississauga community with professional, ESA-licensed electrical services for over 15 years. Our team handles everything from small repairs to full home rewiring projects.\n\nWith 47 five-star Google reviews and ESA license #7014710, we bring the expertise and reliability that Mississauga residents expect. We serve all neighborhoods from Port Credit to Meadowvale and everywhere in between.",
      },
      {
        title: "Residential Electrical Services in Mississauga",
        content:
          "Mississauga has one of the most diverse housing stocks in the GTA. Port Credit and Lorne Park feature established homes that often need electrical upgrades. Erin Mills and Churchill Meadows have newer developments that may need additions like pot lights, smart home wiring, or EV charger installations.\n\nOur residential services cover the full spectrum: electrical panel upgrades from 100 to 200 amps, pot light installation, complete home rewiring, knob and tube replacement, EV charger installation, hot tub electrical, indoor and outdoor lighting design, and all general electrical repairs. We pull proper permits and schedule ESA inspections on every job.",
      },
      {
        title: "Commercial Electrical in Mississauga",
        content:
          "Mississauga is a major business hub with thousands of commercial and industrial properties along Hurontario, Dundas, and throughout the Meadowvale Business Park area. Superior Power Electric provides comprehensive commercial electrical services.\n\nWe handle office renovations, retail build-outs, warehouse lighting, code compliance upgrades, parking lot lighting, and emergency electrical repairs. Our commercial clients trust us because we work clean, finish on time, and keep their operations running with minimal disruption.",
      },
      {
        title: "Why Mississauga Residents Trust Superior Power",
        content:
          "Based in nearby Brampton, we are a short drive from any Mississauga neighborhood. Unlike large franchises that send whoever is available, you get Shaun Pennant's experienced team on every job. We have built our business on referrals and repeat customers.\n\nFree estimates. Transparent pricing. No hidden fees. Every project backed by our ESA license and workmanship guarantee. That is why 47 customers have left us five-star reviews on Google.",
      },
    ],
    faqs: [
      {
        question: "How much does an electrician charge in Mississauga?",
        answer:
          "Licensed electricians in Mississauga typically charge $100 to $150 per hour. Project costs vary based on scope. A pot light installation might cost $150 to $250 per light, while an electrical panel upgrade ranges from $1,500 to $3,500. We provide free estimates so you know the full cost before we start.",
      },
      {
        question: "What areas of Mississauga do you serve?",
        answer:
          "We serve all of Mississauga including Port Credit, Streetsville, Erin Mills, Meadowvale, Clarkson, Lorne Park, Cooksville, Malton, Mississauga Valleys, Churchill Meadows, Lisgar, and Hurontario. We also serve Brampton, Vaughan, Oakville, and the surrounding GTA.",
      },
      {
        question: "Do you do electrical work for condos in Mississauga?",
        answer:
          "Yes. We work on condos, townhomes, semi-detached, and detached homes throughout Mississauga. For condo work, we coordinate with property management as needed for access and permits. Common condo electrical work includes lighting upgrades, outlet additions, and panel inspections.",
      },
      {
        question: "Can you install EV chargers in Mississauga?",
        answer:
          "Yes. We install Level 2 EV chargers for homes and businesses across Mississauga. This includes a dedicated 240V circuit, proper breaker installation, and ESA inspection. We work with all major EV charger brands and can advise on the best option for your vehicle and electrical setup.",
      },
      {
        question: "How quickly can you get to Mississauga for an emergency?",
        answer:
          "We are based in Brampton, just minutes from most Mississauga neighborhoods. For electrical emergencies like power outages, sparking outlets, or burning smells, call us at 647-872-9954. We prioritize emergency calls and aim to respond the same day whenever possible.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cities.find((c) => c.slug === slug);
}
