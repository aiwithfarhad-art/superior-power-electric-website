export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services/residential",
    children: [
      { label: "Residential Electrical", href: "/services/residential" },
      { label: "Commercial Electrical", href: "/services/commercial" },
      { label: "Panel Upgrades", href: "/services/panel-upgrades" },
      { label: "Pot Lights", href: "/services/pot-lights" },
      { label: "Hot Tub Electrical", href: "/services/hot-tub-electrical" },
      { label: "Lighting Installation", href: "/services/lighting" },
      { label: "Rewiring", href: "/services/rewiring" },
      { label: "EV Charger Installation", href: "/services/ev-charger" },
      { label: "Knob & Tube Replacement", href: "/services/knob-and-tube" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Residential Electrical", href: "/services/residential" },
    { label: "Commercial Electrical", href: "/services/commercial" },
    { label: "Panel Upgrades", href: "/services/panel-upgrades" },
    { label: "Pot Lights", href: "/services/pot-lights" },
    { label: "Lighting Installation", href: "/services/lighting" },
    { label: "EV Charger Installation", href: "/services/ev-charger" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Brampton", href: "/locations/brampton" },
    { label: "Mississauga", href: "/locations/mississauga" },
  ],
};
