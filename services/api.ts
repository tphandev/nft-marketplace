import { Product } from "@/types/product";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5005";

export const getProducts = async (
  page: number = 1,
  limit: number = 12
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products?_page=${page}&_limit=${limit}`
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
