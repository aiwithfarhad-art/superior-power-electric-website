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
  {
    label: "Areas We Serve",
    href: "/locations/brampton",
    children: [
      { label: "Brampton", href: "/locations/brampton" },
      { label: "Mississauga", href: "/locations/mississauga" },
      { label: "Vaughan", href: "/locations/vaughan" },
      { label: "Caledon", href: "/locations/caledon" },
      { label: "Georgetown", href: "/locations/georgetown" },
      { label: "Oakville", href: "/locations/oakville" },
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
    { label: "Hot Tub Electrical", href: "/services/hot-tub-electrical" },
    { label: "Lighting Installation", href: "/services/lighting" },
    { label: "Rewiring", href: "/services/rewiring" },
    { label: "EV Charger Installation", href: "/services/ev-charger" },
    { label: "Knob & Tube Replacement", href: "/services/knob-and-tube" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  serviceAreas: [
    { label: "Brampton", href: "/locations/brampton" },
    { label: "Mississauga", href: "/locations/mississauga" },
    { label: "Vaughan", href: "/locations/vaughan" },
    { label: "Caledon", href: "/locations/caledon" },
    { label: "Georgetown", href: "/locations/georgetown" },
    { label: "Oakville", href: "/locations/oakville" },
  ],
};
