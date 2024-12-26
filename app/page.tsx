import Hero from "@/components/Hero";
import MainLayout from "@/components/MainLayout";
import NFTList from "@/components/NFTList";
import nftImage from "@/public/images/NPCs/the-dj.png";

const mockNFTs = [
  {
    id: 1,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 2,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 3,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 4,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 5,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 6,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 7,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 8,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 9,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 10,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 11,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 12,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 13,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
  {
    id: 14,
    image: nftImage,
    name: "The DJ",
    price: "0.08 ETH",
    category: "Epic",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <NFTList items={mockNFTs} title="Featured NFTs" />
    </MainLayout>
  );
}
