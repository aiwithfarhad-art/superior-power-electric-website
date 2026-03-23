export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  icon: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  sections: {
    heading: string;
    content: string;
  }[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Electrical Services",
    shortTitle: "Residential",
    metaTitle:
      "Residential Electrician Brampton | Superior Power Electric",
    metaDescription:
      "Trusted residential electrician in Brampton. ESA licensed, fully insured. All home electrical work. Call (647) 872-9954.",
    h1: "Residential Electrician in Brampton, ON",
    heroDescription:
      "Complete residential electrical services across the Greater Toronto Area. From panel upgrades to pot light installation, we handle projects of all sizes with ESA-certified quality.",
    icon: "Zap",
    primaryKeyword: "residential electrician brampton",
    secondaryKeywords: [
      "home electrician brampton",
      "house electrical services GTA",
    ],
    sections: [
      {
        heading: "Complete Home Electrical Services",
        content:
          "Your home's electrical system is the backbone of everything. From the moment you flip a light switch to when you plug in your phone at night, you rely on safe, reliable wiring. Superior Power Electric provides complete residential electrical services for homeowners across Brampton, Mississauga, and the Greater Toronto Area. With over 15 years of experience and ESA/ECRA License #7014710, every job we complete meets or exceeds Ontario Electrical Safety Code standards.",
      },
      {
        heading: "Our Residential Services",
        content:
          "We offer a full range of home electrical services including electrical panel upgrades (100A to 200A), pot light and recessed lighting installation, hot tub and spa electrical hookups, complete home rewiring, LED lighting upgrades, dimmer and smart switch installation, ceiling fan installation, smoke detector and carbon monoxide alarm installation, surge protection, and electrical safety inspections. Every service includes an ESA inspection upon completion. Book a $49 on-site assessment (credited toward your project) or request a free remote estimate with photos.",
      },
      {
        heading: "Why Brampton Homeowners Choose Us",
        content:
          "With 47 five-star Google reviews and over 15 years serving the GTA, homeowners trust Superior Power Electric for one simple reason: we do the job right the first time. We are fully ESA/ECRA licensed (#7014710), which means every project is inspected and certified. Whether you need a single outlet replaced or a complete home rewire, you get the same level of care and professionalism.",
      },
    ],
    faqs: [
      {
        question: "What residential electrical services do you offer?",
        answer:
          "We offer panel upgrades, pot light installation, hot tub electrical, rewiring, lighting installation, ceiling fans, surge protection, smoke detectors, and more. Every job starts with a clear quote before work begins.",
      },
      {
        question: "Are you licensed for residential work in Ontario?",
        answer:
          "Yes. We hold ESA/ECRA License #7014710. All work is inspected by the Electrical Safety Authority and meets Ontario code requirements.",
      },
      {
        question: "Do you serve areas outside Brampton?",
        answer:
          "Yes. We serve Brampton, Mississauga, Vaughan, Caledon, Georgetown, Oakville, and the broader GTA.",
      },
      {
        question: "How quickly can you start a residential project?",
        answer:
          "Most residential projects can be scheduled within 1-2 business days. Emergency services are available 24/7. Call (647) 872-9954 for availability.",
      },
      {
        question: "How do your estimates work?",
        answer:
          "We offer two options: a $49 on-site project assessment where a licensed electrician visits your home (credited toward your project if you proceed), or a free remote estimate if you send us photos and project details. Either way, you get upfront pricing before any work begins.",
      },
    ],
    relatedServices: [
      "panel-upgrades",
      "pot-lights",
      "rewiring",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Electrical Services",
    shortTitle: "Commercial",
    metaTitle:
      "Commercial Electrician Brampton | Superior Power Electric",
    metaDescription:
      "Commercial electrical services in Brampton. Licensed, insured, reliable. Office, retail & industrial. Call (647) 872-9954.",
    h1: "Commercial Electrician in Brampton, ON",
    heroDescription:
      "Professional commercial electrical services for businesses across the Greater Toronto Area. From retail stores to warehouses, we deliver safe, code-compliant electrical solutions.",
    icon: "Building2",
    primaryKeyword: "commercial electrician brampton",
    secondaryKeywords: [
      "commercial electrical contractor GTA",
      "business electrician mississauga",
    ],
    sections: [
      {
        heading: "Commercial Electrical You Can Count On",
        content:
          "Your business cannot afford downtime. When the lights go out, the registers stop, the servers shut down, and your customers leave. Superior Power Electric provides commercial electrical services designed to keep your business running safely and efficiently. We serve retail stores, offices, warehouses, restaurants, and industrial facilities across Brampton and the GTA.",
      },
      {
        heading: "Our Commercial Services",
        content:
          "We handle electrical repairs and troubleshooting, commercial system installations, electrical upgrades and panel expansions, LED and energy-efficient lighting retrofits, safety inspections and code compliance audits, emergency electrical repairs, and routine maintenance programs. Every commercial project is completed to ESA standards with minimal disruption to your operations.",
      },
      {
        heading: "Industries We Serve",
        content:
          "From small retail shops on Main Street to large warehouse operations in Brampton's industrial corridor, we work with businesses of all sizes. Our commercial clients include retail stores, restaurants and food service, office buildings, warehouses and distribution centers, manufacturing facilities, and multi-unit residential buildings.",
      },
    ],
    faqs: [
      {
        question: "Do you offer commercial electrical services?",
        answer:
          "Yes. We provide full commercial electrical services including installations, repairs, LED retrofits, safety inspections, and emergency service for businesses across Brampton and the GTA.",
      },
      {
        question:
          "Can you work around our business hours to minimize disruption?",
        answer:
          "Absolutely. We schedule commercial work around your operations, including evenings and weekends when needed. We understand downtime costs money.",
      },
      {
        question:
          "Do you handle commercial electrical inspections for insurance?",
        answer:
          "Yes. We perform full ESA safety inspections for commercial properties, including documentation required by insurance companies and municipal building codes.",
      },
      {
        question: "What is your response time for commercial emergencies?",
        answer:
          "We offer 24/7 emergency service for commercial clients. Response times are typically within 1-2 hours in the Brampton area.",
      },
      {
        question: "Do you offer LED retrofit services for commercial spaces?",
        answer:
          "Yes. We specialize in LED lighting upgrades for commercial properties. LED retrofits typically reduce lighting energy costs by 50-75% while improving brightness and reducing maintenance.",
      },
    ],
    relatedServices: ["residential", "lighting", "panel-upgrades"],
  },
  {
    slug: "panel-upgrades",
    title: "Electrical Panel Upgrades",
    shortTitle: "Panel Upgrades",
    metaTitle:
      "Electrical Panel Upgrade Brampton | Superior Power Electric",
    metaDescription:
      "Need an electrical panel upgrade in Brampton? ESA-licensed electricians. Same-day quotes. Serving Brampton & GTA. Call (647) 872-9954.",
    h1: "Electrical Panel Upgrade in Brampton, ON",
    heroDescription:
      "Upgrade your outdated or overloaded electrical panel to meet modern safety standards and power demands. From 100 to 200 amp upgrades to fuse box replacements, we handle it all with ESA certification.",
    icon: "Zap",
    primaryKeyword: "electrical panel upgrade brampton",
    secondaryKeywords: [
      "panel upgrade cost brampton",
      "200 amp panel upgrade brampton",
      "fuse box replacement",
    ],
    sections: [
      {
        heading: "What Is a Panel Upgrade and When Do You Need One?",
        content:
          "Your electrical panel is the heart of your home's electrical system. It distributes power to every circuit in your house. If your home was built before 1990, there is a good chance your panel is outdated and cannot handle the electrical demands of modern living. Adding an EV charger, hot tub, home office, or even a few large appliances can push an old panel past its limits. A panel upgrade replaces your existing panel with a modern, higher-capacity unit that safely supports today's electrical needs.",
      },
      {
        heading: "Signs Your Panel Needs Upgrading",
        content:
          "Watch for these warning signs: breakers tripping frequently, flickering or dimming lights when appliances turn on, a burning smell near your electrical panel, rust or corrosion on the panel box, your home still has a fuse box instead of circuit breakers, you are planning to add a hot tub, EV charger, or major renovation, or your insurance company is requiring an upgrade. If you notice any of these, call us to book a $49 panel assessment.",
      },
      {
        heading: "100 Amp vs 200 Amp - Which Do You Need?",
        content:
          "Most older Brampton homes have 100-amp panels. A 200-amp upgrade is recommended if you are adding high-demand equipment like an EV charger, hot tub, or central air conditioning. For homes with electric heating, workshops, or multiple high-draw appliances, 200 amps provides the headroom you need. During your $49 assessment, we evaluate your current and future electrical needs and recommend the right panel size for your home. The $49 is credited toward your project if you proceed.",
      },
      {
        heading: "Our Panel Upgrade Process",
        content:
          "Step 1: $49 on-site assessment. A licensed electrician inspects your current panel and discusses your electrical needs (credited toward your project). Step 2: Detailed written quote with no hidden fees. Step 3: Professional installation by our ESA-licensed electricians. Step 4: ESA inspection to certify the work meets Ontario code. Step 5: You receive your ESA certificate of inspection. Most panel upgrades are completed in one day.",
      },
    ],
    faqs: [
      {
        question: "How much does an electrical panel upgrade cost in Brampton?",
        answer:
          "Panel upgrades in Brampton typically range from $2,000 to $4,500 depending on the amperage (100A to 200A), complexity of the installation, and whether additional circuits are needed. Book a $49 on-site assessment for exact pricing, or request a free remote estimate with photos.",
      },
      {
        question: "How long does a panel upgrade take?",
        answer:
          "Most residential panel upgrades are completed in a single day (6-8 hours). Complex upgrades involving additional circuits or meter base replacement may take 1-2 days.",
      },
      {
        question: "Do I need a permit for a panel upgrade in Ontario?",
        answer:
          "Yes. All panel upgrades in Ontario require an ESA permit and inspection. We handle the entire permit and inspection process for you as part of our service.",
      },
      {
        question: "Will I lose power during the panel upgrade?",
        answer:
          "Yes, power will be off for a portion of the installation (typically 4-6 hours). We schedule around your needs and minimize downtime as much as possible.",
      },
      {
        question: "Do I need a 200 amp panel for an EV charger?",
        answer:
          "In many cases, yes. A Level 2 EV charger draws 30-50 amps. If your current 100A panel is already near capacity, upgrading to 200A is the safest option. We assess this during your $49 on-site assessment.",
      },
    ],
    relatedServices: ["rewiring", "knob-and-tube", "ev-charger"],
  },
  {
    slug: "pot-lights",
    title: "Pot Light Installation",
    shortTitle: "Pot Lights",
    metaTitle:
      "Pot Light Installation Brampton | Superior Power Electric",
    metaDescription:
      "Professional pot light installation in Brampton. LED recessed lighting experts. $49 assessment credited toward your project. ESA licensed. Call (647) 872-9954.",
    h1: "Pot Light Installation in Brampton, ON",
    heroDescription:
      "Transform any room with modern, energy-efficient pot lights. Professional installation in kitchens, living rooms, basements, and bathrooms across Brampton and the GTA.",
    icon: "Lightbulb",
    primaryKeyword: "pot light installation brampton",
    secondaryKeywords: [
      "recessed lighting brampton",
      "pot light cost brampton",
      "LED pot lights installation",
    ],
    sections: [
      {
        heading: "Why Pot Lights Are the Most Popular Upgrade",
        content:
          "Pot lights (recessed lighting) are the single most requested electrical upgrade for homeowners in Brampton. They create a clean, modern look by sitting flush with the ceiling. No bulky fixtures hanging down, no dust-collecting lampshades. Just smooth, even light that makes every room feel bigger and brighter. Whether you are renovating your kitchen, finishing a basement, or updating your living room, pot lights are the fastest way to transform the space.",
      },
      {
        heading: "Where to Install Pot Lights",
        content:
          "Kitchens are the number one room for pot lights. Even lighting across countertops and islands makes cooking easier and safer. Living rooms benefit from layered lighting with pot lights on dimmer switches. Basements are transformed from dark storage spaces to livable areas with proper recessed lighting. Bathrooms get a spa-like feel with pot lights over the vanity and shower. Hallways and entryways become welcoming with evenly spaced pot lights replacing outdated ceiling fixtures.",
      },
      {
        heading: "LED vs Halogen - Why We Recommend LED",
        content:
          "We install LED pot lights exclusively. LEDs use 75% less energy than halogen, last 25,000+ hours (compared to 2,000 for halogen), produce less heat (safer in insulated ceilings), and are available in a range of color temperatures from warm white (2700K) to daylight (5000K). The slightly higher upfront cost of LED pays for itself within the first year through energy savings alone.",
      },
      {
        heading: "Layout Planning and Spacing",
        content:
          "Proper spacing is critical for even, shadow-free lighting. The general rule is to space pot lights at half the ceiling height apart. For an 8-foot ceiling, that means 4 feet between each light. We plan every layout before installation, taking into account room size, ceiling height, natural light sources, and furniture placement. You approve the plan before we cut a single hole.",
      },
    ],
    faqs: [
      {
        question: "How much does pot light installation cost in Brampton?",
        answer:
          "Pot light installation typically costs $150-$250 per light installed, depending on ceiling type and accessibility. A standard 6-light kitchen installation runs $900-$1,500. Book a $49 assessment for exact pricing, or send photos for a free remote estimate.",
      },
      {
        question: "How many pot lights do I need for my kitchen?",
        answer:
          "A standard kitchen (100-150 sq ft) typically needs 6-8 pot lights for even illumination. We plan the exact layout based on your kitchen size, cabinet placement, and natural light.",
      },
      {
        question: "Can you install pot lights in an insulated ceiling?",
        answer:
          "Yes. We use IC-rated (insulation contact) LED fixtures that are safe to install directly against insulation. No need to remove insulation around the fixture.",
      },
      {
        question: "Do pot lights work with dimmer switches?",
        answer:
          "Yes. All our LED pot lights are dimmable. We install compatible LED dimmer switches so you can control the brightness from 0-100%.",
      },
      {
        question: "How long does pot light installation take?",
        answer:
          "A typical 6-light installation takes 3-4 hours. Larger projects (10+ lights across multiple rooms) may take a full day. We minimize mess and clean up completely after installation.",
      },
    ],
    relatedServices: ["lighting", "residential", "panel-upgrades"],
  },
  {
    slug: "hot-tub-electrical",
    title: "Hot Tub & Spa Electrical Installation",
    shortTitle: "Hot Tub Electrical",
    metaTitle:
      "Hot Tub Electrician Brampton | Superior Power Electric",
    metaDescription:
      "Hot tub electrical hookup in Brampton. 240V dedicated circuit, ESA permit included. Same-day quotes. Call (647) 872-9954.",
    h1: "Hot Tub Electrical Installation in Brampton, ON",
    heroDescription:
      "Safe, code-compliant electrical installation for your hot tub or spa. Dedicated circuits, GFCI protection, and ESA inspection included.",
    icon: "Waves",
    primaryKeyword: "hot tub electrical installation brampton",
    secondaryKeywords: [
      "spa electrical brampton",
      "hot tub wiring cost",
      "jacuzzi electrical hookup",
    ],
    sections: [
      {
        heading: "What Is Involved in Hot Tub Electrical",
        content:
          "A hot tub is one of the most power-hungry appliances in your home. Most full-size hot tubs require a dedicated 240V, 50-amp circuit run directly from your electrical panel. This is not a plug-and-play situation. The installation requires a licensed electrician to run heavy-gauge wire from your panel to the hot tub location, install a GFCI disconnect within sight of the tub, and ensure everything meets Ontario electrical code. Doing this wrong is not just inconvenient, it is dangerous.",
      },
      {
        heading: "Electrical Requirements for Hot Tubs",
        content:
          "Most full-size hot tubs need a 240V dedicated circuit with a 50-amp breaker, a GFCI (ground fault circuit interrupter) disconnect box installed within 1.5 meters of the tub and within line of sight, 6-gauge copper wire (for 50-amp circuits) or 8-gauge for smaller 30-amp tubs, and a weatherproof disconnect box if installed outdoors. Some smaller plug-and-play tubs run on a standard 120V/15-amp outlet, but these are limited in heating power.",
      },
      {
        heading: "Indoor vs Outdoor Considerations",
        content:
          "Outdoor installations require weatherproof wiring, conduit, and disconnect boxes rated for Canadian winters. We run conduit below the frost line when possible and use materials rated for Ontario's temperature extremes. Indoor installations may require additional ventilation considerations due to humidity. Both types require the same GFCI protection and ESA inspection.",
      },
      {
        heading: "Code Compliance and ESA Requirements",
        content:
          "In Ontario, all hot tub electrical installations require an ESA permit and inspection. The installation must comply with the Ontario Electrical Safety Code, including proper GFCI protection, correct wire gauge, appropriate disconnect placement, and bonding of all metal components within 1.5 meters of the tub. We handle the entire permit and inspection process.",
      },
    ],
    faqs: [
      {
        question: "How much does hot tub electrical installation cost?",
        answer:
          "Hot tub electrical installation typically costs $800-$2,500 depending on the distance from your panel, whether you need a panel upgrade, and indoor vs outdoor placement. Book a $49 on-site assessment for exact pricing.",
      },
      {
        question: "Do I need a panel upgrade for a hot tub?",
        answer:
          "It depends on your current panel capacity. A 50-amp hot tub circuit requires significant capacity. If your panel is already near full load, you may need a 200-amp upgrade. We assess this during your $49 on-site assessment.",
      },
      {
        question: "What size breaker does a hot tub need?",
        answer:
          "Most full-size hot tubs require a dedicated 50-amp, 240V breaker. Smaller plug-and-play tubs may work on a 15 or 20-amp, 120V circuit. Check your tub's electrical specifications or send them to us.",
      },
      {
        question: "How long does hot tub electrical installation take?",
        answer:
          "Most installations take 4-6 hours, assuming no panel upgrade is needed. If a panel upgrade is required, the total project may span 1-2 days.",
      },
      {
        question: "Do I need a permit for hot tub electrical in Ontario?",
        answer:
          "Yes. All hot tub electrical installations in Ontario require an ESA permit and inspection. We handle the full permit process as part of our service.",
      },
    ],
    relatedServices: ["panel-upgrades", "residential", "lighting"],
  },
  {
    slug: "lighting",
    title: "Lighting Installation",
    shortTitle: "Lighting",
    metaTitle:
      "Lighting Installation Brampton | Superior Power Electric",
    metaDescription:
      "Indoor and outdoor lighting installation in Brampton. LED upgrades, fixtures, smart lighting. ESA licensed. Call (647) 872-9954.",
    h1: "Lighting Installation in Brampton, ON",
    heroDescription:
      "Professional lighting installation for homes and businesses across the GTA. LED upgrades, smart lighting, dimmer switches, outdoor lighting, and more.",
    icon: "Sun",
    primaryKeyword: "lighting installation brampton",
    secondaryKeywords: [
      "LED lighting installation",
      "smart lighting brampton",
      "dimmer switch installation",
    ],
    sections: [
      {
        heading: "Types of Lighting We Install",
        content:
          "We install every type of residential and commercial lighting: LED ceiling fixtures, recessed pot lights, under-cabinet kitchen lighting, pendant and chandelier installation, outdoor landscape and security lighting, motion sensor lights, smart lighting systems (Lutron, Leviton, Philips Hue compatible), dimmer switches and smart switches, bathroom vanity lighting, and track lighting.",
      },
      {
        heading: "Benefits of LED Upgrades",
        content:
          "Switching from incandescent or halogen to LED is one of the simplest ways to reduce your electricity bill. LED bulbs use 75% less energy, last 15-25 times longer, produce 90% less heat (safer and cooler in summer), and deliver brighter, more consistent light. For a typical Brampton home, switching all fixtures to LED can save $200-$400 per year on hydro costs.",
      },
      {
        heading: "Smart Home Lighting",
        content:
          "Smart lighting lets you control every light in your home from your phone or voice assistant. We install smart switches and dimmers compatible with Alexa, Google Home, and Apple HomeKit. Set schedules, create scenes, control lights remotely, and even sync lighting with your home security system. Smart switches replace standard switches, so no special bulbs are required.",
      },
      {
        heading: "Outdoor and Landscape Lighting",
        content:
          "Outdoor lighting serves two purposes: safety and curb appeal. We install pathway lights, security flood lights, deck and patio lighting, accent lighting for landscaping, and motion-activated lights for driveways and entries. All outdoor installations use weatherproof fixtures rated for Ontario winters.",
      },
    ],
    faqs: [
      {
        question: "How much does lighting installation cost?",
        answer:
          "Costs vary by project: a dimmer switch installation runs $100-$200, a ceiling fixture replacement $150-$300, and a full LED retrofit for a home runs $500-$1,500 depending on the number of fixtures. Book a $49 assessment or request a free remote estimate with photos.",
      },
      {
        question: "Can you install smart lighting in an older home?",
        answer:
          "Yes. Smart switches replace standard switches and work with your existing wiring in most cases. We verify compatibility and handle any wiring updates needed.",
      },
      {
        question: "Do you install outdoor landscape lighting?",
        answer:
          "Yes. We install all types of outdoor lighting including pathway lights, security lights, accent lighting, and deck/patio lighting. All fixtures are weatherproof and rated for Canadian winters.",
      },
      {
        question: "How much can I save by switching to LED?",
        answer:
          "A typical home saves $200-$400 per year on electricity by switching to LED. LED bulbs also last 15-25 times longer than incandescent, reducing replacement costs.",
      },
      {
        question: "Do you install chandeliers and heavy fixtures?",
        answer:
          "Yes. We install chandeliers, pendant lights, and heavy ceiling fixtures. This includes verifying the electrical box can support the weight and upgrading it if necessary.",
      },
    ],
    relatedServices: ["pot-lights", "residential", "panel-upgrades"],
  },
  {
    slug: "rewiring",
    title: "Electrical Rewiring & Upgrades",
    shortTitle: "Rewiring",
    metaTitle:
      "Electrical Rewiring Brampton | Superior Power Electric",
    metaDescription:
      "Home electrical rewiring in Brampton. Old wiring? Safety hazard? ESA licensed rewiring experts. Call (647) 872-9954.",
    h1: "Electrical Rewiring in Brampton, ON",
    heroDescription:
      "Complete electrical rewiring for homes with outdated or unsafe wiring. Knob and tube removal, aluminum wiring replacement, and full home rewires with ESA certification.",
    icon: "Cable",
    primaryKeyword: "electrical rewiring brampton",
    secondaryKeywords: [
      "house rewiring cost brampton",
      "knob and tube replacement",
      "aluminum wiring replacement",
    ],
    sections: [
      {
        heading: "When Your Home Needs Rewiring",
        content:
          "If your home was built before 1975, there is a good chance it has outdated wiring that no longer meets Ontario safety standards. Knob-and-tube wiring (common in homes built before 1950) and aluminum wiring (common in homes built between 1965-1975) are the two most common types that require replacement. Insurance companies increasingly refuse coverage or charge higher premiums for homes with these wiring types. Beyond insurance, outdated wiring is a genuine fire hazard.",
      },
      {
        heading: "Types of Rewiring We Handle",
        content:
          "We specialize in knob-and-tube wiring removal and replacement, aluminum wiring remediation (pigtailing or full replacement), outdated copper rewiring for homes that need more circuits or higher capacity, circuit additions for renovations, home offices, or new appliances, and full home rewires for major renovations or insurance requirements. Every rewiring project includes ESA permit, inspection, and certificate.",
      },
      {
        heading: "Our Rewiring Process",
        content:
          "Step 1: Full electrical assessment of your current wiring. We identify all areas that need attention. Step 2: Detailed written quote with scope of work, timeline, and pricing. Step 3: Professional rewiring by our licensed electricians with minimal disruption to your home. Step 4: ESA inspection and certificate of compliance. Step 5: We patch and repair any necessary drywall openings (or coordinate with your contractor).",
      },
      {
        heading: "Insurance and Safety Implications",
        content:
          "Many Ontario insurance companies now require knob-and-tube and aluminum wiring to be replaced as a condition of coverage. If you are buying a home with older wiring, your home inspector will flag it and your insurer may require replacement before closing. Getting ahead of this saves money and stress. We provide documentation that satisfies insurance requirements.",
      },
    ],
    faqs: [
      {
        question: "How much does it cost to rewire a house in Brampton?",
        answer:
          "Rewiring costs vary significantly: partial rewiring runs $3,000-$8,000, while a full home rewire ranges from $8,000-$20,000 depending on home size and complexity. Book a $49 on-site assessment for an accurate scope and quote.",
      },
      {
        question: "Is knob and tube wiring dangerous?",
        answer:
          "Knob and tube wiring itself is not inherently dangerous, but it was not designed for modern electrical loads. Over time, insulation degrades, connections loosen, and the system becomes a fire risk. Most insurance companies require its replacement.",
      },
      {
        question:
          "Can you replace aluminum wiring without full rewiring (pigtailing)?",
        answer:
          "In some cases, yes. Aluminum wiring can be remediated by pigtailing - connecting short copper wire segments to aluminum connections using approved connectors. This is less disruptive and less expensive than full replacement. We assess which approach is right for your home.",
      },
      {
        question: "How long does a home rewire take?",
        answer:
          "A full home rewire typically takes 3-7 days depending on the size of the home and accessibility. Partial rewiring or pigtailing can often be completed in 1-2 days.",
      },
      {
        question: "Will my insurance rate decrease after rewiring?",
        answer:
          "In most cases, yes. Removing knob-and-tube or aluminum wiring and providing ESA certification often qualifies you for lower insurance premiums. We provide all documentation your insurer needs.",
      },
    ],
    relatedServices: ["panel-upgrades", "knob-and-tube", "residential"],
  },
  {
    slug: "ev-charger",
    title: "EV Charger Installation",
    shortTitle: "EV Chargers",
    metaTitle:
      "EV Charger Installation Brampton | Superior Power Electric",
    metaDescription:
      "Level 2 EV charger installation in Brampton. Ontario rebates available. ESA licensed. Same-day quotes. Call (647) 872-9954.",
    h1: "EV Charger Installation in Brampton, ON",
    heroDescription:
      "Fast, safe Level 2 EV charger installation for your home or business. All brands including Tesla Wall Connector, ChargePoint, and more. ESA-certified with panel assessment included.",
    icon: "PlugZap",
    primaryKeyword: "ev charger installation brampton",
    secondaryKeywords: [
      "Tesla wall connector installation brampton",
      "Level 2 EV charger installation brampton",
      "home EV charging station brampton",
    ],
    sections: [
      {
        heading: "Why Install a Level 2 EV Charger at Home?",
        content:
          "If you own or are buying an electric vehicle, a Level 2 home charger is not optional - it is essential. A standard 120V outlet (Level 1) charges your EV at roughly 5-8 km of range per hour. That means an overnight charge barely gets you 50-60 km. A Level 2 charger on a 240V dedicated circuit delivers 30-50 km per hour, giving you a full charge overnight. You wake up every morning with a full battery.",
      },
      {
        heading: "Brands We Install",
        content:
          "We install and service all major EV charger brands: Tesla Wall Connector (the most popular choice for Tesla owners), ChargePoint Home Flex (works with all EV brands), Grizzl-E (Canadian-made, weather-rated for Ontario), FLO (another Canadian brand with excellent build quality), Emporia Smart Level 2 (budget-friendly with smart features), and JuiceBox. We also install commercial EV charging stations for businesses and multi-unit residential buildings.",
      },
      {
        heading: "What the Installation Involves",
        content:
          "Step 1: Panel assessment. We check your panel capacity and determine if an upgrade is needed (many homes need a 200A upgrade to support an EV charger). Step 2: Dedicated circuit installation. We run a new 240V, 40-50 amp circuit from your panel to the charger location. Step 3: Charger mounting and connection. We mount the charger unit and complete all electrical connections. Step 4: ESA inspection and certification. Step 5: We walk you through operation and answer any questions.",
      },
      {
        heading: "Do You Need a Panel Upgrade for an EV Charger?",
        content:
          "It depends on your current panel. A Level 2 EV charger draws 30-50 amps. If your home has a 100-amp panel that is already near capacity, you will likely need a 200-amp upgrade. If you already have a 200-amp panel with available capacity, you may not. We assess this during the initial visit and provide honest recommendations. Many homeowners combine the EV charger installation with a panel upgrade, which saves money compared to doing them separately.",
      },
    ],
    faqs: [
      {
        question: "How much does EV charger installation cost in Brampton?",
        answer:
          "EV charger installation typically costs $1,500-$3,000 without a panel upgrade. If a panel upgrade is needed, the total ranges from $3,500-$7,000. Book a $49 assessment and we will determine your exact needs. The $49 is credited toward your project.",
      },
      {
        question: "Can I install a Tesla Wall Connector with a 100-amp panel?",
        answer:
          "It depends on your current panel load. A Tesla Wall Connector draws up to 48 amps. If your 100A panel is lightly loaded, it may work. If near capacity, a 200A upgrade is recommended. We assess this during your $49 on-site visit.",
      },
      {
        question: "How long does EV charger installation take?",
        answer:
          "A standard installation takes 3-5 hours. If a panel upgrade is needed, the total project may take 1-2 days.",
      },
      {
        question:
          "Are there rebates for EV charger installation in Ontario?",
        answer:
          "Ontario does not currently offer a provincial EV charger rebate, but the federal iZEV program provides purchase incentives for eligible EVs. Check with your local utility company as some offer charger installation rebates.",
      },
      {
        question: "Can you install commercial EV charging stations?",
        answer:
          "Yes. We install commercial Level 2 charging stations for businesses, condos, and apartment buildings. This includes load management systems for multi-charger installations.",
      },
    ],
    relatedServices: ["panel-upgrades", "residential", "commercial"],
  },
  {
    slug: "knob-and-tube",
    title: "Knob & Tube Replacement",
    shortTitle: "Knob & Tube",
    metaTitle:
      "Knob and Tube Removal Brampton | Superior Power Electric",
    metaDescription:
      "Knob and tube wiring removal in Brampton. Insurance issues? Safety risk? ESA licensed. $49 assessment credited toward your project. Call (647) 872-9954.",
    h1: "Knob and Tube Wiring Removal in Brampton, ON",
    heroDescription:
      "Remove dangerous knob-and-tube wiring and upgrade to modern, safe electrical. Protect your home, meet insurance requirements, and increase your property value.",
    icon: "ShieldAlert",
    primaryKeyword: "knob and tube replacement brampton",
    secondaryKeywords: [
      "knob and tube wiring removal",
      "knob and tube insurance brampton",
      "old wiring replacement",
    ],
    sections: [
      {
        heading: "What Is Knob-and-Tube Wiring?",
        content:
          "Knob-and-tube (K&T) wiring was the standard electrical wiring method in Ontario homes built before 1950. It uses ceramic knobs to support wires along joists and tubes to protect wires passing through wood framing. While revolutionary for its era, K&T wiring was designed for a time when homes had far fewer electrical demands. It has no ground wire, cannot handle modern electrical loads, and its cloth insulation degrades over decades.",
      },
      {
        heading: "Why Replacement Is Often Required",
        content:
          "Most Ontario insurance companies now require knob-and-tube wiring to be replaced as a condition of coverage. If you are buying a home with K&T wiring, your home inspector will flag it, and your insurer may refuse coverage or charge significantly higher premiums until it is replaced. Beyond insurance, K&T wiring is a genuine safety concern: degraded insulation creates fire risk, lack of grounding creates shock risk, and the inability to handle modern loads causes overheating.",
      },
      {
        heading: "Our Replacement Process",
        content:
          "Step 1: Complete inspection. We trace all K&T wiring throughout the home, including hidden runs in walls and ceilings. Step 2: Detailed scope and quote. We identify exactly what needs to be replaced and provide an honest assessment. Step 3: Methodical replacement. We remove the old K&T wiring and install modern NMD90 copper wiring with proper grounding. Step 4: ESA inspection and certification. Step 5: We provide all documentation your insurance company needs to update your policy.",
      },
      {
        heading: "What to Expect During the Project",
        content:
          "Knob-and-tube replacement is one of the more involved electrical projects. Depending on your home, we may need to open sections of walls and ceilings to access the old wiring. We minimize disruption as much as possible, work room by room, and clean up daily. For a typical Brampton bungalow, the project takes 3-5 days. Two-storey homes may take 5-7 days. We coordinate with drywall contractors if patching is needed.",
      },
    ],
    faqs: [
      {
        question: "How much does knob and tube replacement cost?",
        answer:
          "Knob and tube replacement typically costs $5,000-$15,000 depending on the size of the home, amount of K&T wiring, and accessibility. A typical Brampton bungalow runs $5,000-$8,000. Book a $49 assessment for an accurate quote. The fee is credited toward your project.",
      },
      {
        question: "Is knob and tube wiring dangerous?",
        answer:
          "K&T wiring was safe when installed, but after 70-100+ years, the cloth insulation degrades, connections loosen, and it cannot handle modern electrical loads. It is a leading cause of electrical fires in older homes.",
      },
      {
        question:
          "Will my insurance company require knob and tube replacement?",
        answer:
          "Most Ontario insurance companies either refuse coverage or charge significantly higher premiums for homes with active K&T wiring. Replacement is often required before they will issue or renew a policy.",
      },
      {
        question:
          "Can I do a partial knob and tube replacement?",
        answer:
          "Yes. In some homes, only portions of the K&T system are still active. We can replace just the active sections, which reduces cost and disruption. We identify exactly what is active vs disconnected during our assessment.",
      },
      {
        question:
          "How long does knob and tube replacement take?",
        answer:
          "A typical project takes 3-7 days depending on home size and complexity. Bungalows are faster (3-5 days), two-storey homes take longer (5-7 days).",
      },
    ],
    relatedServices: ["rewiring", "panel-upgrades", "residential"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => s !== undefined);
}
