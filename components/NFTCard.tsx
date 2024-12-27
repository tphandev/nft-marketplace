import Image, { StaticImageData } from "next/image";
import { HeartFilled } from "@ant-design/icons";
import Creator, { CreatorProps } from "./Creator";

interface NFTCardProps {
  image: string | StaticImageData;
  name: string;
  price: string;
  category: string;
  bgColor?: string;
  creator: CreatorProps;
}

export default function NFTCard({
  image,
  name,
  price,
  category,
  bgColor = "from-purple-600 to-indigo-600",
  creator,
}: NFTCardProps) {
  return (
    <div className="relative group min-w-[267px]">
      <div className="relative p-[2px] rounded-xl bg-[#3A3841]/60">
        <div className="relative rounded-xl p-4">
          <div className="absolute w-[75%] top-8 left-8 z-10 flex justify-between items-center">
            <span className="caption-12-medium px-3 py-1 bg-[#313B45]/80 rounded-[4px] text-white text-sm">
              {category}
            </span>
            <HeartFilled style={{ color: "white", fontSize: 24 }} />
          </div>

          <div
            className={`relative aspect-square rounded-lg overflow-hidden mb-4 bg-gradient-to-b ${bgColor}`}
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 70vw, 267px"
              quality={50}
              className="object-cover object-top translate-y-12"
              loading="lazy"
            />
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between">
              <h3 className="header-16-semibold text-white">{name}</h3>
              <span className="body-14-medium text-white">{price}</span>
            </div>
          </div>
          <Creator {...creator} />
        </div>
      </div>
    </div>
  );
}
