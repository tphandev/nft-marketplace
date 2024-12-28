import NFTCard from "./NFTCard";
import NFTCardSkeleton from "./NFTCardSkeleton";
import { StaticImageData } from "next/image";
import { CreatorProps } from "./Creator";
import { PrimaryButton } from "./PrimaryButton";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { ITEMS_PER_PAGE } from "@/constants/designSystem";

interface NFT {
  id: number;
  image: string | StaticImageData;
  name: string;
  price: string;
  category: string;
  creator: CreatorProps;
}

interface NFTListProps {
  items: NFT[];
  title?: string;
  hasMore?: boolean;
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore?: () => void;
}

export default function NFTList({
  items,
  title,
  hasMore,
  isLoading,
  isFetchingNextPage,
  onLoadMore,
}: NFTListProps) {
  const showLoadingState = isLoading || isFetchingNextPage;

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            {title}
          </h2>
        )}

        {items.length === 0 && !isLoading ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl">No items found</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-h-[1200px] overflow-y-auto pb-6 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((nft) => (
                  <NFTCard
                    key={nft.id}
                    image={nft.image}
                    name={nft.name}
                    price={nft.price}
                    category={nft.category}
                    creator={nft.creator}
                  />
                ))}
                {showLoadingState &&
                  Array(ITEMS_PER_PAGE)
                    .fill(null)
                    .map((_, index) => (
                      <NFTCardSkeleton key={`skeleton-${index}`} />
                    ))}
              </div>
            </div>

            {hasMore && (
              <PrimaryButton
                onClick={onLoadMore}
                disabled={showLoadingState}
                className={showLoadingState ? "opacity-70" : ""}
              >
                {showLoadingState ? (
                  <>
                    <Loading3QuartersOutlined className="mr-2" spin />
                    Loading...
                  </>
                ) : (
                  "Load More"
                )}
              </PrimaryButton>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
