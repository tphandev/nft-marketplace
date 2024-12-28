"use client";
import NFTList from "@/components/NFTList";
import CategorySelector from "@/components/CategorySelector";
import { useProducts } from "@/hooks/useProducts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { getImageSource } from "@/utils/imageMapper";
import NFTSkeleton from "@/components/NFTSkeleton";
import { useState } from "react";
import { Category, FilterParams } from "@/types/filters";
import { CATEGORIES } from "@/constants/filter";

const queryClient = new QueryClient();

function ProductContent() {
  const [filters, setFilters] = useState<FilterParams>({});

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProducts(undefined, filters);

  const handleCategoryChange = (category: Category) => {
    setFilters((prev) => ({
      ...prev,
      category: category === "All" ? undefined : category,
    }));
  };

  if (error) return <div>Error: {error.message}</div>;

  const allProducts = data?.pages.flat() || [];

  return (
    <div className="container mx-auto px-4 py-28">
      <div className="space-y-8">
        <CategorySelector
          categories={CATEGORIES}
          selectedCategory={filters.category}
          onCategoryChange={handleCategoryChange}
        />

        {isLoading ? (
          <NFTSkeleton />
        ) : (
          <NFTList
            items={allProducts.map((product) => ({
              id: product.id,
              image: getImageSource(product.imageId),
              name: product.title,
              price: `${product.price} ETH`,
              category: product.category,
              creator: {
                name: `${product.author.firstName} ${product.author.lastName}`,
                isOnline: product.author.onlineStatus === "online",
                avatarUrl: product.author.avatar,
              },
            }))}
            hasMore={hasNextPage}
            isLoading={isFetchingNextPage}
            onLoadMore={() => fetchNextPage()}
          />
        )}
      </div>
    </div>
  );
}

export default function ProductSection() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductContent />
    </QueryClientProvider>
  );
}
