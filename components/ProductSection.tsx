"use client";
import NFTList from "@/components/NFTList";
import { useProducts } from "@/hooks/useProducts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { getImageSource } from "@/utils/imageMapper";
import NFTSkeleton from "@/components/NFTSkeleton";

const queryClient = new QueryClient();

function ProductContent() {
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProducts();

  if (isLoading) return <NFTSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  const allProducts = data?.pages.flat() || [];

  return (
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
  );
}

export default function ProductSection() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductContent />
    </QueryClientProvider>
  );
}
