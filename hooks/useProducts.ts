import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/api";
import { Product } from "@/types/product";
import { ITEMS_PER_PAGE } from "@/constants/designSystem";

export const useProducts = (
  page: number = 1,
  limit: number = ITEMS_PER_PAGE
) => {
  return useQuery<Product[], Error>({
    queryKey: ["products", page, limit],
    queryFn: async () => {
      try {
        const response = await getProducts(page, limit);
        return response ?? [];
      } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
