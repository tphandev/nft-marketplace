import { Product } from "@/types/product";
import { FilterParams } from "@/types/filters";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5005";

export const getProducts = async (
  page: number = 1,
  limit: number = 12,
  filters?: FilterParams
): Promise<Product[]> => {
  try {
    const queryParams = new URLSearchParams({
      _page: page.toString(),
      _limit: limit.toString(),
    });

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== "") {
          if (key === "priceRange" && typeof value === "object") {
            if (value.min !== undefined) {
              queryParams.append("price_gte", value.min.toString());
            }
            if (value.max !== undefined) {
              queryParams.append("price_lte", value.max.toString());
            }
          } else if (key === "sort" && typeof value === "string") {
            const [field, order] = value.split('_');
            queryParams.append("_sort", field);
            queryParams.append("_order", order);
          } else {
            queryParams.append(key, value.toString());
          }
        }
      });
    }

    const response = await fetch(
      `${API_BASE_URL}/products?${queryParams.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
