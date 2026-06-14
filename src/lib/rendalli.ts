export const BRAND = {
  name: "Rendalli",
  tagline: "Fresh from the lake, straight to your table.",
  summary:
    "Rendalli farms fish sustainably in the waters of East Africa, bringing you the freshest catch with no compromise on quality or flavour.",
  essence: [
    { title: "Natural", body: "Nothing artificial. We come from the lake, the farm, the earth." },
    { title: "Organic", body: "Honest sourcing. Sustainable. Grown the right way." },
    { title: "Tasty", body: "Make people hungry. Every visual should build appetite." },
    { title: "Family-oriented", body: "We feed families. Parents, children, grandparents." },
    { title: "Fresh & Approachable", body: "Never stiff, never corporate. Warm like a good neighbour." },
    { title: "Young & Modern", body: "Rooted in tradition, but unmistakably contemporary." },
  ],
  audiences: [
    { label: "Uganda", tag: "Home ground", body: "Community pride, local warmth, home-ground storytelling." },
    { label: "East Africa", tag: "Regional", body: "Regional leadership, scale, responsible farming." },
    { label: "International", tag: "Global", body: "Premium provenance, quality standards, global reach." },
  ],
  palette: [
    { name: "Rendalli Green", hex: "#4DB848", role: "Primary" },
    { name: "Deep Forest", hex: "#2E7D32", role: "Body on green" },
    { name: "Leaf Mist", hex: "#C8EAC5", role: "Tints" },
    { name: "Pure White", hex: "#FFFFFF", role: "Surface" },
    { name: "Fresh Lemon", hex: "#F5C518", role: "Accent / CTAs" },
    { name: "Night Leaf", hex: "#1A2E1A", role: "Headlines" },
  ],
} as const;

export type NavItem = {
  heading: string;
  href: string;
  subheading?: string;
  imgSrc?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { heading: "Home", href: "/", subheading: "Fresh from the lake",
    imgSrc: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=1200&q=80&auto=format&fit=crop" },
  { heading: "Products", href: "/products", subheading: "Our fish",
    imgSrc: "https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=1200&q=80&auto=format&fit=crop" },
  { heading: "Story", href: "/story", subheading: "From Lake Victoria",
    imgSrc: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=1200&q=80&auto=format&fit=crop" },
  { heading: "Contact", href: "/contact", subheading: "Come visit us",
    imgSrc: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=1200&q=80&auto=format&fit=crop" },
];

export const IMAGES = {
  heroBg: "https://res.cloudinary.com/dcnbho9c9/image/upload/v1776719170/WhatsApp_Image_2026-04-20_at_23.38.00_znbkkj.jpg",
  hero: "https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=1800&q=80&auto=format&fit=crop",
  heroAlt: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=1800&q=80&auto=format&fit=crop",
  lake: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80&auto=format&fit=crop",
  lakeAlt: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1800&q=80&auto=format&fit=crop",
  grilled: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=1600&q=80&auto=format&fit=crop",
  tilapia: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1600&q=80&auto=format&fit=crop",
  cooking: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1600&q=80&auto=format&fit=crop",
  family: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=1600&q=80&auto=format&fit=crop",
  farm: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=1600&q=80&auto=format&fit=crop",
  market: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1600&q=80&auto=format&fit=crop",
  leaves: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop",
  boat: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80&auto=format&fit=crop",
  fishDish: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop",
  perch: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=1600&q=80&auto=format&fit=crop",
};

// Append Journal to the main nav
export const NAV_WITH_JOURNAL: NavItem[] = [
  ...NAV_ITEMS,
  {
    heading: "Journal",
    href: "/journal",
    subheading: "Notes from the farm",
    imgSrc:
      "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=1200&q=80&auto=format&fit=crop",
  },
];
