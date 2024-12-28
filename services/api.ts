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
          queryParams.append(key, value.toString());
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
