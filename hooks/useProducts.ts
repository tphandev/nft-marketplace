import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/api";
import { ITEMS_PER_PAGE } from "@/constants/designSystem";
import { FilterParams } from "@/types/filters";

export const useProducts = (
  limit: number = ITEMS_PER_PAGE,
  filters?: FilterParams
) => {
  return useInfiniteQuery({
    queryKey: ["products", filters],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts(pageParam, limit, filters);
        return response ?? [];
      } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
      }
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === limit ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
