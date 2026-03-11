export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
}

export const reviews: Review[] = [
  {
    author: "Mike T.",
    rating: 5,
    date: "2025-12-15",
    text: "Shaun and his team did an amazing job upgrading our electrical panel. Very professional, clean work, and explained everything clearly. Highly recommend Superior Power Electric!",
    service: "Panel Upgrades",
  },
  {
    author: "Sarah K.",
    rating: 5,
    date: "2025-11-28",
    text: "Had pot lights installed throughout our main floor. The team was on time, respectful of our home, and the finished product looks incredible. Fair pricing too.",
    service: "Pot Lights",
  },
  {
    author: "James R.",
    rating: 5,
    date: "2025-11-10",
    text: "Called for an emergency electrical issue on a Saturday and Shaun came out the same day. Fixed the problem quickly and didn't overcharge. This is our go-to electrician now.",
    service: "Residential",
  },
  {
    author: "Priya M.",
    rating: 5,
    date: "2025-10-22",
    text: "We hired Superior Power for a complete rewiring of our older Brampton home. The work was done on schedule and passed inspection with zero issues. ESA certified and it shows.",
    service: "Rewiring",
  },
  {
    author: "David L.",
    rating: 5,
    date: "2025-10-05",
    text: "Shaun installed an EV charger in our garage. Clean installation, proper permits, and he even helped us understand the rebate process. Excellent service from start to finish.",
    service: "EV Charger",
  },
  {
    author: "Angela F.",
    rating: 5,
    date: "2025-09-18",
    text: "Had our knob and tube wiring replaced. Shaun's team was knowledgeable about the older wiring in our home and made the whole process stress-free. Our insurance company is happy too!",
    service: "Knob & Tube",
  },
  {
    author: "Robert H.",
    rating: 5,
    date: "2025-09-01",
    text: "Superior Power handles all the electrical work for our commercial property in Mississauga. Always reliable, licensed, and their pricing is competitive. Been using them for 3 years.",
    service: "Commercial",
  },
  {
    author: "Lisa W.",
    rating: 5,
    date: "2025-08-14",
    text: "Fantastic job on our outdoor lighting. The team designed a beautiful layout for our backyard and front entrance. Our neighbours keep asking who did it!",
    service: "Lighting",
  },
  {
    author: "Chris B.",
    rating: 5,
    date: "2025-07-30",
    text: "Needed hot tub wiring done properly with a dedicated circuit. Shaun handled the permit, installation, and ESA inspection. Everything was up to code. Very professional.",
    service: "Hot Tub",
  },
  {
    author: "Karen P.",
    rating: 5,
    date: "2025-07-12",
    text: "We've used Superior Power Electric for multiple projects over the years. Panel upgrade, pot lights, and outdoor lighting. Consistent quality every single time. Can't recommend enough.",
  },
  {
    author: "Mark D.",
    rating: 5,
    date: "2025-06-25",
    text: "Quick response, fair quote, and excellent work. Shaun replaced our old fuse box with a modern panel. The difference is night and day. Thank you!",
    service: "Panel Upgrades",
  },
  {
    author: "Jennifer S.",
    rating: 5,
    date: "2025-06-08",
    text: "Hired them for a full kitchen renovation electrical. New circuits, pot lights, under-cabinet lighting. Everything was done perfectly. Would absolutely hire again.",
    service: "Residential",
  },
];

export function getReviewsByService(service: string): Review[] {
  return reviews.filter((r) => r.service === service);
}
