import { Category } from "@/types/filters";

export const CATEGORIES: Category[] = [
  "All",
  "Upper Body",
  "Lower Body",
  "Hat",
  "Shoes",
  "Accessory",
  "Legendary",
  "Mythic",
  "Epic",
  "Rare",
];

export const THEMES = ["All", "Dark", "Light", "Colorful", "Halloween"];

export const TIERS = ["All", "Basic", "Deluxe", "Premium"];

export const SORT_OPTIONS = [
  { label: "Latest", value: "createdAt_desc" },
  { label: "Oldest", value: "createdAt_asc" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];
