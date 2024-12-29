export type Category =
  | "All"
  | "Upper Body"
  | "Lower Body"
  | "Hat"
  | "Shoes"
  | "Accessory"
  | "Legendary"
  | "Mythic"
  | "Epic"
  | "Rare";

export type Theme = "All" | "Dark" | "Light" | "Colorful" | "Halloween";

export type Tier = "All" | "Basic" | "Deluxe" | "Premium";

export type PriceRange = {
  min?: number;
  max?: number;
};

export type SortOption =
  | "price_asc"
  | "price_desc"
  | "createdAt_desc"
  | "createdAt_asc";

export type FilterParams = {
  category?: Category;
  q?: string;
  priceRange?: PriceRange;
  tier?: Tier;
  theme?: Theme;
  sort?: SortOption;
};
