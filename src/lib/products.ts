import { IMAGES } from "./rendalli";

export type Product = {
  slug: string;
  name: string;
  latin: string;
  copy: string;
  longCopy: string[];
  img: string;
  gallery: string[];
  tags: string[];
  prices: { size: string; price: string; note: string }[];
  features: string[];
};

export const TILAPIA: Product = {
  slug: "nile-tilapia",
  name: "Nile Tilapia",
  latin: "Oreochromis niloticus",
  copy: "Mild, flaky, firm. A family favourite — grills beautifully and soaks up marinades.",
  longCopy: [
    "Our one signature fish. Farmed responsibly in clean, monitored waters of East Africa — raised on natural feed, without hormones, on its own clock.",
    "The result: firm, flaky, delicately sweet flesh that takes marinades beautifully and stands up to a charcoal grill.",
  ],
  img: IMAGES.tilapia,
  gallery: [IMAGES.tilapia, IMAGES.grilled, IMAGES.cooking, IMAGES.fishDish],
  tags: ["Farm-raised", "Fresh", "24hr"],
  prices: [
    { size: "Medium", price: "10k", note: "Whole fish" },
    { size: "Large", price: "12k", note: "Whole fish" },
    { size: "Fillet", price: "20k", note: "500g" },
  ],
  features: [
    "Sustainably farmed, no hormones",
    "Traceable from pond to shop",
    "Delivered within 24 hours",
    "Mild flavour, perfect for every family table",
  ],
};

export const PRODUCTS: Product[] = [TILAPIA];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
