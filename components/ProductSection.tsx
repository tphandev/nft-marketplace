"use client";
import NFTList from "@/components/NFTList";
import CategorySelector from "@/components/CategorySelector";
import { useProducts } from "@/hooks/useProducts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { getImageSource } from "@/utils/imageMapper";
import NFTSkeleton from "@/components/NFTSkeleton";
import { useCallback, useState } from "react";
import { Category, FilterParams } from "@/types/filters";
import { CATEGORIES } from "@/constants/filter";
import FilterPanel from "@/components/FilterPanel";
import { SearchOutlined } from "@ant-design/icons";
import { PrimaryButton } from "./PrimaryButton";

const queryClient = new QueryClient();

function ProductContent() {
  const [filters, setFilters] = useState<FilterParams>({});
  const [showMobileFilters, setShowMobileFilters] = useState(false);

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

  const handleFiltersChange = useCallback((newFilters: FilterParams) => {
    setFilters(newFilters);
  }, []);

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  if (error) return <div>Error: {error.message}</div>;

  const allProducts = data?.pages.flat() || [];

  return (
    <div className="container mx-auto px-4 py-28">
      <div className="flex gap-8">
        {/* Desktop Filter Panel */}
        <div className="hidden lg:block">
          <FilterPanel filters={filters} onFilterChange={handleFiltersChange} />
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden fixed bottom-4 right-4 px-4 py-2 z-40">
          <PrimaryButton
            onClick={toggleMobileFilters}
            className="!bg-gradient text-white"
          >
            <SearchOutlined width={24} height={24} />
          </PrimaryButton>
        </div>

        {/* Mobile Filter Panel */}
        {showMobileFilters && (
          <div className="lg:hidden">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFiltersChange}
              isMobileView
              onClose={() => setShowMobileFilters(false)}
            />
          </div>
        )}

        <div className="flex-1 space-y-8">
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
