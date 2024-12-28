import { ITEMS_PER_PAGE } from "@/constants/designSystem";
import NFTCardSkeleton from "./NFTCardSkeleton";

export default function NFTSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8 container mx-auto">
      {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
        <NFTCardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );
}
