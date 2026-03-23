export type BlogCategory =
  | "Safety & Education"
  | "Cost Guides"
  | "How-To & DIY Limits"
  | "Service Spotlights"
  | "Local Electrical News";

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogSection {
  heading: string;
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  category: BlogCategory;
  author: string;
  authorCredential: string;
  publishedDate: string;
  readTime: number;
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  sections: BlogSection[];
  faqs: BlogFAQ[];
  relatedPosts: string[];
  relatedServices: string[];
}

export const blogCategories: BlogCategory[] = [
  "Safety & Education",
  "Cost Guides",
  "How-To & DIY Limits",
  "Service Spotlights",
  "Local Electrical News",
];

export const blogPosts: BlogPost[] = [
  // POST 1: Panel Upgrade Cost Ontario
  {
    slug: "electrical-panel-upgrade-cost-ontario",
    title:
      "How Much Does an Electrical Panel Upgrade Cost in Ontario? (2024 Guide)",
    metaTitle:
      "Electrical Panel Upgrade Cost Ontario (2024) | Superior Power Electric",
    metaDescription:
      "How much does an electrical panel upgrade cost in Ontario? 100-amp to 200-amp upgrades range from $2,000 to $4,500. $49 on-site assessment (credited toward your project) from ESA licensed electricians in Brampton.",
    targetKeyword: "electrical panel upgrade cost ontario",
    category: "Cost Guides",
    author: "Shaun Pennant",
    authorCredential: "ESA Licensed Electrician",
    publishedDate: "2024-11-15",
    readTime: 6,
    excerpt:
      "Panel upgrades in Ontario typically cost $2,000 to $4,500 depending on amperage and complexity. Here is what affects pricing and how to get the best deal.",
    featuredImage: "/images/services/panel-upgrade-hero.webp",
    featuredImageAlt:
      "Electrical panel upgrade being performed by licensed electrician in Brampton",
    sections: [
      {
        heading: "Average Cost of Panel Upgrade in Ontario",
        content:
          "If your home was built before 1990, there is a good chance your electrical panel is overdue for an upgrade. The average cost of an [electrical panel upgrade in Ontario](/services/panel-upgrades) ranges from $2,000 to $4,500 depending on the scope of work.\n\nHere is a quick breakdown of what most homeowners pay:\n\nA 100-amp to 200-amp upgrade typically runs $2,500 to $4,500. A fuse box to breaker panel conversion costs $2,000 to $3,500. A panel replacement (same amperage) is usually $1,800 to $2,800. Adding a subpanel runs $800 to $1,500.\n\nThese prices include the ESA permit and inspection, which is required by law in Ontario. Any electrician who skips this step is cutting corners you do not want cut.",
      },
      {
        heading: "100-Amp vs 200-Amp Panel: What's the Difference?",
        content:
          "Most older homes in [Brampton](/locations/brampton) and across the GTA have 100-amp panels. That was plenty when houses had a stove, a few lights, and maybe a window air conditioner. Today, you are running central air, multiple TVs, computers, kitchen appliances, and possibly an EV charger or hot tub.\n\nA 100-amp panel can handle basic household needs. A 200-amp panel gives you the headroom for modern living, including high-draw additions like EV chargers, hot tubs, home workshops, and electric heating.\n\nIf you are just replacing an aging panel and your electrical needs have not changed much, 100 amps may be fine. But if you are adding an EV charger, finishing a basement, or planning any major renovation, go with 200 amps. The incremental cost of upgrading to 200 amps during the project is much lower than doing it separately later.",
      },
      {
        heading: "What's Included in the Price?",
        content:
          "When you get a quote for a [panel upgrade](/services/panel-upgrades), make sure it includes all of these items. If it does not, ask why.\n\nA proper panel upgrade includes removal of the old panel and installation of the new one, the new breaker panel and all circuit breakers, reconnection of all existing circuits, ESA permit application and inspection fee, the ESA certificate of inspection, and cleanup of the work area.\n\nAt Superior Power Electric, our quotes include everything listed above. We do not add surprise charges after the job starts. The price you see on the quote is the price you pay.",
      },
      {
        heading: "Hidden Costs to Watch For",
        content:
          "Some panel upgrades end up costing more than expected because of issues discovered during the work. Here are the most common ones.\n\nYour meter base may need replacing. If your utility meter base is old or incompatible with a 200-amp panel, Alectra Utilities may require a new meter base. This adds $500 to $1,200 to the project. Your local utility handles the meter swap, but you pay for the base itself.\n\nYour home may need additional circuits. If your panel is outdated, some circuits may not meet current code. Your electrician might recommend adding dedicated circuits for your kitchen, bathroom, or laundry. Each new circuit adds $200 to $400.\n\nAluminum wiring or knob-and-tube wiring may need attention. If your home has [outdated wiring](/services/rewiring), the panel upgrade is the right time to address it. Insurance companies often require this work as a condition of coverage.",
      },
      {
        heading: "Is It Worth Upgrading Your Panel?",
        content:
          "Yes. A panel upgrade is one of the best investments you can make in your home. Here is why.\n\nSafety comes first. An outdated panel with worn breakers is a fire risk. Modern panels with arc-fault and ground-fault breakers catch problems before they become dangerous.\n\nYour insurance may require it. Many Ontario insurance companies charge higher premiums for homes with outdated panels or fuse boxes. Some refuse coverage entirely. Upgrading can lower your premiums.\n\nHome value increases. A [200-amp panel upgrade](/services/panel-upgrades) is a selling point that home buyers and inspectors look for. It signals that the home's electrical system is modern and safe.\n\nYou need it for modern additions. EV chargers, hot tubs, central air, and home offices all require significant electrical capacity. Without a panel upgrade, you cannot safely power these additions.",
      },
      {
        heading: "How to Get the Best Price in Brampton",
        content:
          "Get at least two quotes from ESA-licensed electricians. Make sure each quote includes the same scope of work so you are comparing apples to apples.\n\nAsk about bundling. If you need other electrical work (pot lights, wiring updates, EV charger prep), doing it all during the panel upgrade saves money because the electrician is already on site.\n\nDo not choose the cheapest quote if it does not include the ESA permit and inspection. That is a non-negotiable requirement in Ontario. Any electrician who offers to skip the permit is not someone you want working on your home.\n\nReady for a quote? Call Superior Power Electric at (905) 452-8439 to book a $49 [panel upgrade assessment](/services/panel-upgrades) at your [Brampton](/locations/brampton) home. The $49 is credited toward your project if you proceed. We will tell you exactly what you need, what it costs, and handle the entire process from permit to inspection. Prefer a ballpark first? Send us photos for a free remote estimate.",
      },
    ],
    faqs: [
      {
        question: "How much does a 200-amp panel upgrade cost in Ontario?",
        answer:
          "A 200-amp panel upgrade in Ontario typically costs $2,500 to $4,500 including the ESA permit and inspection. The final price depends on your current panel, meter base condition, and whether additional circuits are needed.",
      },
      {
        question: "Does a panel upgrade require a permit in Ontario?",
        answer:
          "Yes. All electrical panel upgrades in Ontario require an ESA (Electrical Safety Authority) permit and inspection. The permit ensures the work meets the Ontario Electrical Safety Code.",
      },
      {
        question: "How long does a panel upgrade take?",
        answer:
          "Most residential panel upgrades are completed in a single day, typically 6 to 8 hours. Power will be off for 4 to 6 hours during the installation. More complex jobs involving additional circuits may take up to 2 days.",
      },
      {
        question: "Will my insurance go down after a panel upgrade?",
        answer:
          "In many cases, yes. Upgrading from a fuse box to a modern breaker panel or from 100 to 200 amps often qualifies you for lower insurance premiums. Contact your insurer with your ESA certificate after the upgrade.",
      },
      {
        question: "Can I upgrade my panel myself to save money?",
        answer:
          "No. Electrical panel work in Ontario must be performed by an ESA-licensed electrician. Working on your own panel is illegal, dangerous, and would void your home insurance.",
      },
    ],
    relatedPosts: [
      "when-to-replace-electrical-panel-ontario",
      "ev-charger-installation-ontario-rebate",
      "knob-and-tube-wiring-ontario",
    ],
    relatedServices: ["panel-upgrades", "rewiring", "ev-charger"],
  },

  // POST 2: Pot Light Installation Cost Brampton
  {
    slug: "pot-light-installation-cost-brampton",
    title: "Pot Light Installation Cost in Brampton & GTA: 2024 Pricing Guide",
    metaTitle:
      "Pot Light Installation Cost Brampton (2024) | Superior Power Electric",
    metaDescription:
      "Pot light installation in Brampton costs $150-$250 per light. LED recessed lighting for kitchens, basements & living rooms. $49 assessment credited toward your project. ESA licensed.",
    targetKeyword: "pot light installation cost brampton",
    category: "Cost Guides",
    author: "Shaun Pennant",
    authorCredential: "ESA Licensed Electrician",
    publishedDate: "2024-11-20",
    readTime: 5,
    excerpt:
      "Pot light installation in Brampton typically costs $150 to $250 per light. Here is what drives the price and how to plan your project.",
    featuredImage: "/images/services/pot-lights.webp",
    featuredImageAlt:
      "LED pot lights installed in a modern Brampton kitchen ceiling",
    sections: [
      {
        heading: "How Much Do Pot Lights Cost in Brampton?",
        content:
          "Pot lights are the most popular lighting upgrade for homeowners in [Brampton](/locations/brampton) and across the GTA. The cost of [pot light installation](/services/pot-lights) typically breaks down like this.\n\nPer light installed, expect to pay $150 to $250. A 4-light bathroom installation runs $600 to $1,000. A 6-light kitchen installation costs $900 to $1,500. A full home package of 12 to 20 lights ranges from $1,800 to $4,500.\n\nThese prices include the LED fixtures, dimmer switches, and installation labour. At Superior Power Electric, our quotes always include the fixtures. No surprises.",
      },
      {
        heading: "Factors That Affect the Price",
        content:
          "Not every [pot light installation](/services/pot-lights) costs the same. Here are the main factors that move the price up or down.\n\nCeiling type matters most. Open ceilings (unfinished basements, new construction) are the cheapest because we can access the wiring easily. Finished drywall ceilings on the main floor cost more because we need to fish wires through existing framing. Cathedral and vaulted ceilings add complexity and time.\n\nThe number of lights affects the per-unit cost. More lights means a lower cost per light because the fixed costs (setup, running main power) are spread across more fixtures.\n\nExisting wiring plays a role. If your home already has ceiling junction boxes, the wiring path is shorter. Starting from scratch with no existing ceiling electrical means more wire and more labour.\n\nDimmer switches add $80 to $150 per switch but are absolutely worth it. Dimmable pot lights give you full control over ambiance and energy use.",
      },
      {
        heading: "LED vs Halogen: Which Should You Choose?",
        content:
          "LED. Every time. We exclusively install LED pot lights and here is why.\n\nLED pot lights use 75% less electricity than halogen. They last 25,000 hours compared to 2,000 for halogen. They run cooler, which is critical in insulated ceilings where heat buildup is a fire concern. And they are available in every color temperature from warm white (2700K) for living rooms to daylight (5000K) for kitchens and workspaces.\n\nThe price difference between LED and halogen fixtures is minimal. Maybe $10 to $15 per fixture. But the energy savings pay that back within months. Plus, LED [lighting](/services/lighting) gives you better, more consistent light quality.",
      },
      {
        heading: "How Many Pot Lights Do You Need?",
        content:
          "The general rule is to space pot lights apart at half the ceiling height. For a standard 8-foot ceiling, that means 4 feet between each light.\n\nHere is what we typically recommend. A kitchen (100 to 150 square feet) needs 6 to 8 lights. A living room (200 to 300 square feet) needs 8 to 12 lights. A bathroom needs 3 to 4 lights. A basement (full, 500+ square feet) needs 12 to 16 lights. A hallway needs 1 light per 4 to 5 linear feet.\n\nWe plan every layout with you before cutting a single hole. You approve the placement, and we mark the ceiling so you can see exactly where each light will go.",
      },
      {
        heading: "DIY vs Licensed Electrician",
        content:
          "You might see videos online showing pot light installation as a weekend DIY project. Here is why that is a bad idea in Ontario.\n\nFirst, electrical work in Ontario requires an ESA permit for new circuit installations. DIY electrical work is not covered by your home insurance. If something goes wrong, you are on the hook.\n\nSecond, fishing wires through finished ceilings without damaging insulation, vapour barriers, or structural members requires experience. One wrong cut and you are looking at a drywall repair on top of the electrical bill.\n\nThird, IC-rated fixtures must be used in insulated ceilings. Using the wrong fixture in an insulated ceiling is a fire hazard.\n\nA licensed electrician handles the permit, uses the right fixtures, and guarantees the work. For [pot lights in Brampton](/services/pot-lights), the peace of mind is worth every dollar.",
      },
      {
        heading: "Get an Accurate Quote",
        content:
          "Every home is different. Ceiling type, wiring access, and the number of lights all affect your final price. The best way to get an accurate number is a $49 in-home assessment (credited toward your project if you proceed).\n\nCall Superior Power Electric at (905) 452-8439 or visit our [contact page](/contact) to book your pot light assessment. We serve [Brampton](/locations/brampton), [Mississauga](/locations/mississauga), Vaughan, Caledon, and the wider GTA.\n\nWe will walk through your home, recommend the right layout, and give you a written quote on the spot. Want a ballpark first? Send us photos for a free remote estimate.",
      },
    ],
    faqs: [
      {
        question: "How much does it cost to install 6 pot lights?",
        answer:
          "Installing 6 pot lights in Brampton typically costs $900 to $1,500 including LED fixtures, dimmer switch, and labour. The exact price depends on ceiling type and wiring accessibility.",
      },
      {
        question: "Are pot lights worth the investment?",
        answer:
          "Yes. Pot lights are the most requested upgrade by homebuyers and add immediate visual appeal. They also improve daily comfort with better, more even lighting throughout your home.",
      },
      {
        question: "Can pot lights be installed in an insulated ceiling?",
        answer:
          "Yes. We use IC-rated (insulation contact) LED fixtures that are safe to install directly against insulation. These run cool enough to eliminate fire risk.",
      },
      {
        question: "How long does pot light installation take?",
        answer:
          "A typical 6-light installation takes 3 to 4 hours. A full home project with 15 or more lights may take a full day. We clean up completely after every job.",
      },
      {
        question: "Do pot lights increase home value?",
        answer:
          "Yes. Pot lights are consistently listed among the top lighting upgrades that improve home value. They modernize the look of any room and are a feature buyers actively look for.",
      },
    ],
    relatedPosts: [
      "electrical-panel-upgrade-cost-ontario",
      "ev-charger-installation-ontario-rebate",
    ],
    relatedServices: ["pot-lights", "lighting", "residential"],
  },

  // POST 3: EV Charger Installation Ontario
  {
    slug: "ev-charger-installation-ontario-rebate",
    title:
      "EV Charger Installation in Ontario: Costs, Rebates & What to Expect",
    metaTitle:
      "EV Charger Installation Ontario - Costs & Rebates (2024) | Superior Power",
    metaDescription:
      "EV charger installation in Ontario costs $1,500-$3,000 (without panel upgrade). Learn about rebates, Level 2 vs Level 1, ESA permits, and what to expect.",
    targetKeyword: "ev charger installation ontario",
    category: "Cost Guides",
    author: "Shaun Pennant",
    authorCredential: "ESA Licensed Electrician",
    publishedDate: "2024-12-01",
    readTime: 5,
    excerpt:
      "EV charger installation in Ontario costs $1,500 to $3,000 without a panel upgrade. Here is everything you need to know about costs, rebates, and the process.",
    featuredImage: "/images/services/ev-charger.jpg",
    featuredImageAlt:
      "Level 2 EV charger installed in a Brampton garage by Superior Power Electric",
    sections: [
      {
        heading: "EV Charger Installation Cost in Ontario",
        content:
          "Installing a Level 2 [EV charger](/services/ev-charger) at your Ontario home typically costs $1,500 to $3,000. If you also need a panel upgrade, the total ranges from $3,500 to $7,000.\n\nHere is how the costs break down. The charger unit itself (Tesla Wall Connector, ChargePoint Home Flex, Grizzl-E, etc.) costs $500 to $1,200 depending on the brand and features. Installation labour runs $800 to $1,800 depending on the distance from your panel to the charger location, and the ESA permit and inspection adds $200 to $400.\n\nThe biggest variable is the distance between your electrical panel and where the charger will be mounted. A charger on the garage wall right next to the panel is the cheapest scenario. A charger on the opposite side of the house, or in a detached garage, costs more because of the additional wiring and conduit.",
      },
      {
        heading: "Level 1 vs Level 2: Which Do You Need?",
        content:
          "Level 1 charging uses the standard 120V outlet that already exists in your garage. It delivers about 5 to 8 kilometres of range per hour of charging. If you drive less than 50 kilometres per day, Level 1 might be enough. But most EV owners find it painfully slow.\n\nLevel 2 charging uses a dedicated 240V circuit (like your dryer or stove). It delivers 30 to 50 kilometres of range per hour. That means a full charge overnight, every night. For most [Brampton](/locations/brampton) homeowners, Level 2 is the right choice.\n\nIf you are buying a new EV or switching from hybrid to full electric, invest in Level 2 from the start. The convenience is night and day. You will never worry about range again.",
      },
      {
        heading: "Ontario Rebates for EV Charger Installation",
        content:
          "Ontario does not currently offer a provincial rebate specifically for home [EV charger installation](/services/ev-charger). However, there are a few programs worth knowing about.\n\nThe federal government offers the iZEV program which provides $5,000 off eligible new EVs. This is a purchase incentive, not a charger rebate, but it offsets your total cost of going electric.\n\nSome Ontario utilities offer time-of-use rates that make overnight charging significantly cheaper. Alectra Utilities in [Brampton](/locations/brampton) offers off-peak rates that can cut your charging cost to a fraction of daytime rates. Check with your local utility for current programs.\n\nNatural Resources Canada has occasionally offered rebates through the Zero Emission Vehicle Infrastructure Program (ZEVIP) for multi-unit residential buildings and workplaces. If you own a condo or manage a commercial building, this is worth investigating.\n\nEven without a direct rebate, the savings from charging at home versus public chargers (or gasoline) make the installation cost worthwhile within the first year.",
      },
      {
        heading: "How Long Does Installation Take?",
        content:
          "A standard [EV charger installation](/services/ev-charger) takes 3 to 5 hours. That includes the panel assessment, running the dedicated 240V circuit, mounting the charger, and testing everything.\n\nIf your panel needs an upgrade to support the additional load, add another half day to full day for the [panel upgrade](/services/panel-upgrades) portion. Most homeowners schedule both for the same visit to save on labour costs.\n\nWe handle the ESA permit before the installation date and schedule the ESA inspection within a few days of completing the work. You can start using your charger as soon as we finish the installation.",
      },
      {
        heading: "ESA Permit Requirements in Ontario",
        content:
          "Every EV charger installation in Ontario requires an ESA permit and inspection. This is not optional and it is not something your electrician should skip.\n\nThe ESA permit confirms that the installation meets the Ontario Electrical Safety Code. The inspector verifies proper wire gauge, breaker sizing, GFCI protection (where required), and safe installation practices.\n\nAt Superior Power Electric, we handle the entire permit process. We apply for the permit, schedule the inspection, and provide you with the ESA certificate when everything passes. You do not have to deal with any of it.\n\nAny electrician who offers to do the job without a permit is putting your home, your insurance, and your safety at risk. Always verify that your electrician is ESA licensed before hiring them.",
      },
      {
        heading: "Book Your EV Charger Installation",
        content:
          "Ready to charge at home? Call Superior Power Electric at (905) 452-8439 to book a $49 [EV charger assessment](/services/ev-charger) (credited toward your installation). We install all major brands including Tesla Wall Connector, ChargePoint, Grizzl-E, FLO, and JuiceBox.\n\nWe serve [Brampton](/locations/brampton), Mississauga, Vaughan, Caledon, Georgetown, and Oakville. ESA License #7014710.",
      },
    ],
    faqs: [
      {
        question: "Do I need a panel upgrade for an EV charger?",
        answer:
          "It depends on your current panel capacity. A Level 2 EV charger draws 30 to 50 amps. If your 100-amp panel is near capacity, a 200-amp upgrade is recommended. We assess this during your $49 on-site assessment.",
      },
      {
        question: "Can I install a Tesla Wall Connector myself?",
        answer:
          "No. In Ontario, EV charger installation on a dedicated 240V circuit requires an ESA-licensed electrician. DIY electrical work is not covered by insurance and violates provincial regulations.",
      },
      {
        question: "What brand of EV charger is best?",
        answer:
          "For Tesla owners, the Tesla Wall Connector is the best match. For all other EVs, the ChargePoint Home Flex and Grizzl-E offer the best combination of features, reliability, and Canadian weather rating.",
      },
      {
        question: "How much does it cost to charge an EV at home in Ontario?",
        answer:
          "At Alectra off-peak rates, charging a typical EV costs $2 to $4 per full charge. That works out to about $40 to $80 per month for average driving, compared to $200 or more in gas.",
      },
      {
        question: "Is there a rebate for EV charger installation in Ontario?",
        answer:
          "Ontario does not currently offer a provincial charger installation rebate. The federal iZEV program provides up to $5,000 off eligible new EVs. Some local utilities offer charging incentive programs.",
      },
    ],
    relatedPosts: [
      "electrical-panel-upgrade-cost-ontario",
      "when-to-replace-electrical-panel-ontario",
    ],
    relatedServices: ["ev-charger", "panel-upgrades", "residential"],
  },

  // POST 4: Signs You Need to Replace Your Electrical Panel
  {
    slug: "when-to-replace-electrical-panel-ontario",
    title:
      "7 Signs You Need to Replace Your Electrical Panel (Ontario Homeowners Guide)",
    metaTitle:
      "7 Signs Your Electrical Panel Needs Replacing | Superior Power Electric",
    metaDescription:
      "Breakers tripping? Burning smell? Still have a fuse box? Here are 7 signs your electrical panel needs replacing. Ontario homeowner guide from ESA licensed electricians.",
    targetKeyword: "signs electrical panel needs replacing",
    category: "Safety & Education",
    author: "Shaun Pennant",
    authorCredential: "ESA Licensed Electrician",
    publishedDate: "2024-12-10",
    readTime: 5,
    excerpt:
      "Tripping breakers, burning smells, and flickering lights are warning signs your panel needs attention. Here are 7 signs every Ontario homeowner should know.",
    featuredImage: "/images/services/panel-upgrade.webp",
    featuredImageAlt:
      "Old electrical panel showing signs it needs replacement",
    sections: [
      {
        heading: "Sign 1: Breakers Trip Frequently",
        content:
          "If you are resetting the same breaker every week, that is not normal. A breaker that trips occasionally is doing its job - protecting you from an overloaded circuit. But a breaker that trips repeatedly is telling you something is wrong.\n\nThe most common cause is an overloaded circuit. Too many devices on one circuit draw more current than the breaker is rated for. The fix is either adding a dedicated circuit or upgrading to a [panel with more capacity](/services/panel-upgrades).\n\nA less common but more serious cause is a failing breaker. Breakers wear out over time. A breaker that trips under normal load may have weakened internal contacts. If this is happening, do not just keep resetting it. Call a licensed electrician.",
      },
      {
        heading: "Sign 2: You Have a Fuse Box (Not Breakers)",
        content:
          "If your home still has a fuse box with screw-in fuses instead of circuit breakers, it is time for an upgrade. Fuse boxes were standard in homes built before the 1960s. They are not inherently dangerous, but they have serious limitations.\n\nFuses can be replaced with the wrong size, allowing too much current to flow through the circuit. Fuse boxes cannot be expanded to add new circuits without major modifications. And most Ontario insurance companies either refuse to insure homes with fuse boxes or charge significantly higher premiums.\n\nReplacing a fuse box with a modern [breaker panel](/services/panel-upgrades) is one of the most common upgrades we perform. It improves safety, lowers your insurance, and brings your home up to current code.",
      },
      {
        heading: "Sign 3: Burning Smell from Panel",
        content:
          "A burning smell coming from your electrical panel is an emergency. Turn off the main breaker and call an electrician immediately.\n\nThe burning smell is caused by wiring or connections overheating inside the panel. This can happen when connections become loose over time, when wire insulation degrades from age or heat, or when a breaker is failing and arcing internally.\n\nDo not open the panel cover yourself. Do not try to identify the source. Call a licensed electrician. This is a fire risk that requires immediate professional attention.",
      },
      {
        heading: "Sign 4: Flickering or Dimming Lights",
        content:
          "If your lights flicker or dim when you turn on an appliance (the microwave, hair dryer, or air conditioner), your panel may not have enough capacity for your home's electrical demands.\n\nOccasional, slight dimming when a large appliance kicks on is normal. The startup surge draws extra current momentarily. But if the dimming is pronounced, happens frequently, or affects multiple rooms, your panel is struggling.\n\nThis is especially common in [older Brampton homes](/locations/brampton) with 60 or 100-amp panels that were never designed for today's electrical loads. A [panel upgrade](/services/panel-upgrades) solves this by providing enough capacity for everything in your home to run simultaneously.",
      },
      {
        heading: "Sign 5: You're Adding Major Appliances",
        content:
          "Planning to add an EV charger, hot tub, central air conditioning, or an electric stove? Each of these requires a dedicated circuit that draws significant amperage.\n\nBefore adding any major appliance, you need to know whether your panel can handle the additional load. Adding a 40-amp EV charger to a 100-amp panel that is already 80% loaded is a recipe for constant tripping and potential hazards.\n\nWe recommend a panel assessment before any major appliance addition. We measure your current load, calculate the new demand, and tell you honestly whether your panel can handle it or needs an upgrade. Book a $49 panel assessment with Superior Power Electric. The fee is credited toward your project if you proceed.",
      },
      {
        heading: "Sign 6: Your Panel is 25+ Years Old",
        content:
          "Electrical panels have a lifespan of 25 to 40 years. If your panel was installed in the 1990s or earlier, it is approaching or past its expected life.\n\nOlder panels may have breakers that no longer trip properly, bus bars that have corroded or loosened, and outdated technology that does not include modern safety features like arc-fault circuit interrupters (AFCIs).\n\nEven if your panel seems to be working fine, a panel over 25 years old deserves a professional inspection. Small problems inside the panel can exist for years before causing a visible issue. By then, the damage may already be done.\n\nA licensed electrician can open the panel, inspect the bus bars, test the breakers, and check all connections. This inspection takes about 30 minutes and can save you from a much bigger problem down the road.",
      },
      {
        heading: "Sign 7: You Have Aluminum Wiring",
        content:
          "Homes built between 1965 and 1975 often have aluminum wiring. Aluminum expands and contracts more than copper as it heats and cools, which loosens connections over time. Loose connections cause arcing, which causes fires.\n\nIf your home has aluminum wiring, your panel connections are a critical inspection point. Aluminum-to-copper connections require special anti-oxidant compound and approved connectors. If these were not used (or have degraded), the connections inside your panel may be overheating.\n\nWe specialize in [aluminum wiring remediation](/services/rewiring) including pigtailing and full replacement. If your home has aluminum wiring, start with a panel and wiring assessment. We will tell you exactly what needs attention and what can wait.",
      },
      {
        heading: "What to Do Next",
        content:
          "If you recognized one or more of these signs in your home, the next step is a professional assessment. Do not ignore warning signs from your electrical panel. Electrical fires are among the leading causes of house fires in Ontario.\n\nCall Superior Power Electric at (905) 452-8439 to book a $49 [panel assessment](/services/panel-upgrades). We will inspect your panel, test your breakers, measure your load, and give you an honest recommendation. The $49 is credited toward your project if you proceed. If you do not need an upgrade, we will tell you that too.\n\nESA License #7014710. Serving Brampton, Mississauga, Vaughan, Caledon, Georgetown, and Oakville. We also handle [knob-and-tube replacement](/services/knob-and-tube) and full home [rewiring](/services/rewiring).",
      },
    ],
    faqs: [
      {
        question: "How do I know if my electrical panel is safe?",
        answer:
          "Schedule a panel inspection with an ESA-licensed electrician. They will test your breakers, check connections, measure load, and inspect for corrosion or damage. This takes about 30 minutes and gives you a clear picture.",
      },
      {
        question: "How often should an electrical panel be inspected?",
        answer:
          "We recommend a professional inspection every 10 years for panels under 25 years old, and every 5 years for panels over 25 years old. If you notice any warning signs, get it checked immediately.",
      },
      {
        question: "Are Federal Pacific panels dangerous?",
        answer:
          "Federal Pacific Electric (FPE) Stab-Lok panels have been the subject of widespread safety concerns. Testing has shown that some FPE breakers fail to trip under overload conditions. If your home has an FPE panel, we recommend replacement.",
      },
      {
        question: "Can a bad electrical panel cause a fire?",
        answer:
          "Yes. Loose connections, failing breakers, and overloaded panels can all cause arcing and overheating, which are leading causes of electrical fires. Warning signs include burning smells, discoloration, and breakers that trip frequently.",
      },
      {
        question:
          "What is the difference between a panel upgrade and a panel replacement?",
        answer:
          "A panel replacement swaps your old panel for a new one at the same amperage. A panel upgrade increases the amperage (typically from 100 to 200 amps) and may also require a new meter base and service entrance cable.",
      },
    ],
    relatedPosts: [
      "electrical-panel-upgrade-cost-ontario",
      "knob-and-tube-wiring-ontario",
      "ev-charger-installation-ontario-rebate",
    ],
    relatedServices: ["panel-upgrades", "rewiring", "knob-and-tube"],
  },

  // POST 5: Knob and Tube Wiring Ontario
  {
    slug: "knob-and-tube-wiring-ontario",
    title:
      "Knob and Tube Wiring in Ontario: Is It Safe? What Homeowners Need to Know",
    metaTitle:
      "Knob and Tube Wiring Ontario - Safety & Replacement Guide | Superior Power",
    metaDescription:
      "Is knob and tube wiring safe? Ontario homeowners guide to K&T wiring risks, insurance issues, replacement costs, and ESA requirements. $49 assessments in Brampton.",
    targetKeyword: "knob and tube wiring ontario",
    category: "Safety & Education",
    author: "Shaun Pennant",
    authorCredential: "ESA Licensed Electrician",
    publishedDate: "2024-12-15",
    readTime: 5,
    excerpt:
      "Knob and tube wiring is common in Ontario homes built before 1950. Here is what you need to know about safety, insurance, and when to replace it.",
    featuredImage: "/images/services/knob-tube.webp",
    featuredImageAlt:
      "Knob and tube wiring visible in an older Ontario home attic",
    sections: [
      {
        heading: "What Is Knob and Tube Wiring?",
        content:
          "Knob and tube (K&T) wiring was the standard electrical wiring method in Ontario homes built before 1950. It uses ceramic knobs screwed into joists to support individual wires, and ceramic tubes to protect wires where they pass through wood framing.\n\nUnlike modern wiring which bundles hot, neutral, and ground wires together in a single cable, [knob and tube](/services/knob-and-tube) runs each wire separately with air space between them. There is no ground wire. The insulation is a rubber or cloth material that was not designed to last 75 or more years.\n\nIf your home was built before 1950 and has never been fully rewired, there is a high probability that some or all of the original K&T wiring is still active.",
      },
      {
        heading: "Is Knob and Tube Wiring Dangerous?",
        content:
          "When it was new and properly maintained, knob and tube wiring was safe for the electrical demands of the era. The problem is that era had very different electrical demands than today.\n\nK&T wiring was designed for lighting and a few small appliances. It was never meant to power air conditioners, microwaves, computers, multiple TVs, and all the other devices in a modern home. Running modern loads through K&T wiring causes overheating.\n\nThe insulation is the bigger concern. After 70 to 100 years, the rubber and cloth insulation on K&T wiring becomes brittle, cracks, and falls off. Bare wire touching wood framing is a fire waiting to happen.\n\nAdditionally, homeowners or previous contractors may have improperly added to or modified the original K&T system over the decades. Spliced connections, improper insulation contact, and overloaded circuits are common findings when we inspect older homes.",
      },
      {
        heading: "Ontario Insurance Issues with Knob & Tube",
        content:
          "This is often what forces the conversation. Most Ontario insurance companies now treat knob and tube wiring as a significant risk factor. Here is what you may encounter.\n\nSome insurers refuse to write new policies for homes with active K&T wiring. Others will insure the home but at significantly higher premiums, sometimes 50% or more above standard rates. Some will issue a policy with a condition that K&T wiring must be replaced within 30 to 90 days.\n\nIf you are buying a home with K&T wiring, your home inspector will flag it. Your mortgage lender may require proof of insurability before closing. And your insurer may require a full [rewiring](/services/rewiring) before they will issue coverage.\n\nIf you currently have insurance on a home with K&T wiring, do not assume you are covered forever. Policy renewals can trigger new inspections and new requirements.",
      },
      {
        heading: "When Does It Need to Be Replaced?",
        content:
          "Not all [knob and tube wiring](/services/knob-and-tube) needs to be replaced immediately. Some K&T systems are in better condition than others. Here is how we assess it.\n\nThe wiring must be replaced if the insulation is visibly cracked, brittle, or missing. It must be replaced if K&T wiring is in contact with building insulation (blown-in insulation covering K&T wire is a fire hazard). It must be replaced if circuits are overloaded or have been improperly modified.\n\nReplacement may be deferrable if the K&T wiring is in good condition, properly supported, and not in contact with insulation. Some homes have partial K&T where only certain circuits are still on the old system. In these cases, replacing just the active K&T sections is often sufficient.\n\nThe only way to know for certain is a professional inspection. We trace all K&T circuits throughout the home, assess the condition of the insulation, check for improper modifications, and provide an honest recommendation.",
      },
      {
        heading: "Cost of Knob & Tube Removal in Ontario",
        content:
          "The cost of [knob and tube replacement](/services/knob-and-tube) in Ontario depends on how much K&T wiring is active and how accessible it is. Here are typical ranges.\n\nPartial replacement (a few circuits) costs $3,000 to $6,000. A full bungalow rewire runs $5,000 to $8,000. A two-storey home full rewire costs $8,000 to $15,000.\n\nThese prices include the new NMD90 copper wiring with proper grounding, the ESA permit and inspection, and the ESA certificate your insurance company needs.\n\nDrywall patching is sometimes needed and is typically not included in the electrical quote. We minimize wall openings wherever possible and coordinate with drywall contractors when needed.\n\nThe cost of not replacing K&T wiring can be far higher. A house fire, denied insurance claim, or failed home sale all cost more than the rewiring itself.",
      },
      {
        heading: "ESA Requirements in Ontario",
        content:
          "All [knob and tube replacement](/services/knob-and-tube) work in Ontario must be performed by an ESA-licensed electrician. An ESA permit is required before work begins, and an ESA inspection must be completed after the work is done.\n\nThe ESA inspector verifies that all old K&T wiring has been properly disconnected or removed, that the new wiring meets current Ontario Electrical Safety Code, that all connections are properly made, and that the new circuits are correctly protected by appropriately sized breakers.\n\nAfter passing inspection, you receive an ESA certificate. This certificate is what your insurance company needs to update your policy and, in many cases, lower your premium.\n\nCall Superior Power Electric at (905) 452-8439 to book a $49 knob and tube assessment at your [Brampton](/locations/brampton) home. The fee is credited toward your project if you proceed. We will inspect the wiring, tell you what needs replacing, and give you a written quote. ESA License #7014710.\n\nWe also handle [complete home rewiring](/services/rewiring) and aluminum wiring remediation.",
      },
    ],
    faqs: [
      {
        question:
          "Can I get home insurance with knob and tube wiring in Ontario?",
        answer:
          "Some insurers will cover homes with K&T wiring at higher premiums, while others refuse entirely. Most require replacement as a condition of coverage. Contact your insurer directly for their current policy.",
      },
      {
        question:
          "Does knob and tube wiring need to be removed or just disconnected?",
        answer:
          "Active K&T wiring must be replaced with modern wiring. Disconnected K&T wiring that is no longer carrying electricity can often be left in place without issue, though some insurers prefer full removal.",
      },
      {
        question:
          "Can I add insulation to my attic if I have knob and tube wiring?",
        answer:
          "No. Building insulation must not come in contact with active K&T wiring. The wiring was designed to dissipate heat through air circulation. Insulation traps that heat and creates a fire risk. Replace the K&T wiring first, then insulate.",
      },
      {
        question: "How do I know if my home has knob and tube wiring?",
        answer:
          "Check your attic and basement for ceramic knobs on joists and ceramic tubes through framing. You may also see individual cloth-covered wires running along joists instead of modern cable. If unsure, book a $49 inspection with us. The fee is credited toward any work you approve.",
      },
      {
        question: "How long does knob and tube replacement take?",
        answer:
          "A typical bungalow takes 3 to 5 days. A two-storey home takes 5 to 7 days. Partial replacements (a few circuits) can often be completed in 1 to 2 days. We work room by room to minimize disruption.",
      },
    ],
    relatedPosts: [
      "when-to-replace-electrical-panel-ontario",
      "electrical-panel-upgrade-cost-ontario",
    ],
    relatedServices: ["knob-and-tube", "rewiring", "panel-upgrades"],
  },

  // POST 6: DIY Electrical Work Ontario
  {
    slug: "diy-electrical-work-ontario-what-you-can-and-cannot-do",
    title:
      "What Electrical Work Can You Do Yourself in Ontario? (And What You Cannot)",
    metaTitle:
      "DIY Electrical Work Ontario - What's Legal & What's Not | Superior Power",
    metaDescription:
      "What electrical work can you legally do yourself in Ontario? Learn what requires an ESA-licensed electrician, what homeowners can handle, and the penalties for illegal work.",
    targetKeyword: "diy electrical work ontario",
    category: "Cost Guides",
    author: "Shaun Pennant",
    authorCredential: "ESA Licensed Electrician",
    publishedDate: "2025-01-10",
    readTime: 6,
    excerpt:
      "Ontario homeowners can handle a few basic electrical tasks, but most work requires an ESA-licensed electrician. Here is where the line is drawn and what happens if you cross it.",
    featuredImage: "/images/services/rewiring.webp",
    featuredImageAlt:
      "Licensed electrician performing electrical work in an Ontario home",
    sections: [
      {
        heading: "The Short Answer: Most Electrical Work Requires a License",
        content:
          "Ontario takes electrical safety seriously. The Ontario Electrical Safety Code and the Electricity Act set clear rules about who can do what. The Electrical Safety Authority (ESA) enforces those rules.\n\nThe general principle is simple. If the work involves changing, extending, or adding to your home's permanent electrical wiring, you need an ESA-licensed electrician. If the work only involves plugging things in or swapping surface-level components, you can likely do it yourself.\n\nThis is not about what you are capable of doing. You might be perfectly handy. The law does not care. Unlicensed electrical work in Ontario is illegal, voids your insurance, and can kill someone. That is not an exaggeration.",
      },
      {
        heading: "Electrical Work You CAN Do Yourself",
        content:
          "There are a handful of tasks Ontario homeowners can legally handle without a licensed electrician.\n\nReplacing a light switch (same type, same location) is allowed. Swapping a standard toggle switch for a new toggle switch in the same box does not require a permit. However, if you are adding a dimmer, smart switch, or changing the switch type, consult an electrician.\n\nReplacing a light fixture (same location, same circuit) is allowed. Taking down an old ceiling light and hanging a new one on the same junction box is a basic swap. Make sure the breaker is off and the new fixture is rated for the circuit.\n\nReplacing an outlet cover plate is allowed. This is cosmetic. No wiring involved.\n\nReplacing a damaged plug on an appliance cord is allowed. This is cord repair, not fixed wiring.\n\nResetting a tripped breaker is allowed. Flip it off, then back on. If it keeps tripping, stop and call a professional.\n\nThat is about it. Everything beyond this list moves into territory that requires a licensed electrician and, in most cases, an ESA permit.",
      },
      {
        heading: "Electrical Work You CANNOT Do Yourself",
        content:
          "This is the list most people underestimate. All of the following require an ESA-licensed electrician in Ontario.\n\nInstalling new outlets or switches. Adding an outlet to a room, even if you know how to run wire, requires a permit and inspection. Moving an existing outlet to a different location also counts as new work.\n\nRunning new circuits. Adding a dedicated circuit for a [home office, workshop, or kitchen appliance](/services/residential) requires a permit. This includes running wire through walls, connecting to the panel, and installing the breaker.\n\n[Panel upgrades](/services/panel-upgrades) and replacements. Any work inside your electrical panel is strictly licensed-only. This includes replacing breakers, adding circuits, and upgrading from 100 to 200 amps.\n\n[Pot light installation](/services/pot-lights). Cutting holes in your ceiling and running new wiring to recessed lights requires a licensed electrician. Even if the YouTube video makes it look easy.\n\n[EV charger installation](/services/ev-charger). A Level 2 charger runs on a dedicated 240V circuit. This is not a plug-in situation. It requires a permit, proper wire gauge, and ESA inspection.\n\nAny outdoor wiring. Running power to a shed, installing landscape lighting on a new circuit, or adding an outdoor outlet all require permits and licensed work.\n\n[Knob and tube replacement](/services/knob-and-tube) or any [rewiring](/services/rewiring). This should go without saying, but replacing old wiring in your walls is complex, dangerous, and absolutely requires a professional.",
      },
      {
        heading: "What Happens If You Do Illegal Electrical Work",
        content:
          "The consequences are real and they stack up.\n\nYour home insurance is void. If unlicensed electrical work causes a fire, your insurance company can deny the claim entirely. They will send an investigator, and if the fire originated from unpermitted work, you are on your own. This applies even if the work was done by a previous owner.\n\nYou face ESA fines. The Electrical Safety Authority can issue fines up to $50,000 for individuals and $100,000 for corporations doing unlicensed electrical work. They actively investigate complaints and inspect properties.\n\nYou cannot sell your home cleanly. When you sell, the buyer's home inspector will check the electrical panel for evidence of unpermitted work. Missing permits and amateur wiring are red flags that can kill a deal or force you to pay for a licensed electrician to redo everything before closing.\n\nSomeone can get hurt. Improperly wired circuits cause fires, shocks, and electrocution. The Ontario Electrical Safety Code exists because people died. The rules are written in tragedies.",
      },
      {
        heading: "How ESA Permits Work in Ontario",
        content:
          "Every significant electrical project in Ontario requires an ESA permit. Here is how the process works.\n\nYour licensed electrician applies for the permit before starting work. The permit is tied to the specific scope of work (panel upgrade, new circuits, etc.) and the property address.\n\nThe work is completed by the licensed electrician according to the Ontario Electrical Safety Code. After completion, the ESA sends an inspector to verify the work meets code.\n\nIf the work passes inspection, you receive an ESA certificate. This certificate proves the work was done legally and to code. Keep it with your home documents. Your insurance company may ask for it, and it adds value when selling your home.\n\nIf the work does not pass, the electrician must correct the deficiencies and request a re-inspection. At Superior Power Electric, we have a first-pass inspection rate above 98% because we do the job right the first time.\n\nYou can verify any electrician's ESA license at esasafe.com. If they cannot provide a license number, do not hire them.",
      },
      {
        heading: "When to Call a Licensed Electrician",
        content:
          "If you are reading this article, you are probably trying to figure out whether your specific project needs a professional. Here is a simple rule.\n\nIf the work involves anything behind your walls, inside your panel, or connected to your home's permanent wiring, call a licensed electrician. The cost of doing it right is always less than the cost of doing it wrong.\n\nAt Superior Power Electric, we offer a $49 [on-site assessment](/services/residential) that covers any electrical question you have. We will look at your project, tell you exactly what is needed, and give you a written quote. The $49 is credited toward your project if you proceed.\n\nCall (905) 452-8439 or visit our [contact page](/contact) to book. We serve [Brampton](/locations/brampton), [Mississauga](/locations/mississauga), [Vaughan](/locations/vaughan), [Oakville](/locations/oakville), and the wider GTA. ESA License #7014710.",
      },
    ],
    faqs: [
      {
        question: "Can I install a ceiling fan myself in Ontario?",
        answer:
          "If you are replacing an existing light fixture with a ceiling fan on the same junction box, and the box is rated for fan weight, this is generally considered a like-for-like swap. However, if the box needs upgrading or new wiring is required, you need a licensed electrician.",
      },
      {
        question: "Do I need a permit to change a light fixture in Ontario?",
        answer:
          "No. Replacing a light fixture on an existing junction box (same location, same circuit) does not require a permit. Adding a new fixture where one did not exist before does require a permit and licensed electrician.",
      },
      {
        question: "Can a handyman do electrical work in Ontario?",
        answer:
          "No. In Ontario, only ESA-licensed electricians can perform electrical work that involves permanent wiring. A handyman cannot legally install outlets, run circuits, or do panel work, regardless of their experience.",
      },
      {
        question: "How do I check if an electrician is licensed in Ontario?",
        answer:
          "Visit the ESA website at esasafe.com and use their contractor verification tool. Any legitimate electrician will provide their ESA license number upfront. Superior Power Electric holds ESA License #7014710.",
      },
      {
        question: "What is the fine for doing electrical work without a permit in Ontario?",
        answer:
          "The ESA can issue fines up to $50,000 for individuals and $100,000 for corporations performing unlicensed electrical work. Beyond fines, unpermitted work voids your home insurance and can prevent the sale of your home.",
      },
    ],
    relatedPosts: [
      "electrical-panel-upgrade-cost-ontario",
      "when-to-replace-electrical-panel-ontario",
      "knob-and-tube-wiring-ontario",
    ],
    relatedServices: ["residential", "panel-upgrades", "rewiring"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getRelatedBlogPosts(slugs: string[]): BlogPost[] {
  return slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);
}
