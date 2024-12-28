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

export type FilterParams = {
  category?: Category;
  price_gte?: number;
  price_lte?: number;
  name_like?: string;
  // Add more filter parameters as needed
};
