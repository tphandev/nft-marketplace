"use client";

import { useCallback, useState } from "react";
import NFTCard from "./NFTCard";
import { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

interface NFT {
  id: number;
  image: string | StaticImageData;
  name: string;
  price: string;
  category: string;
}

interface NFTListProps {
  items: NFT[];
  title?: string;
}

const ITEMS_PER_PAGE = 8;

export default function NFTList({ items, title }: NFTListProps) {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const loadMoreItems = useCallback(() => {
    setVisibleItems((prev) => Math.min(prev + ITEMS_PER_PAGE, items.length));
  }, [items.length]);

  // Load more items when scrolling near the bottom
  if (inView && visibleItems < items.length) {
    loadMoreItems();
  }

  const displayedItems = items.slice(0, visibleItems);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            {title}
          </h2>
        )}

        <div className="max-h-[1200px] overflow-y-auto pb-6 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedItems.map((nft) => (
              <NFTCard
                key={nft.id}
                image={nft.image}
                name={nft.name}
                price={nft.price}
                category={nft.category}
              />
            ))}
          </div>

          {visibleItems < items.length && <div ref={ref} className="h-10" />}
        </div>
      </div>
    </section>
  );
}
