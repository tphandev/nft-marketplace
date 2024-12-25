import React from "react";
import Image, { StaticImageData } from "next/image";
import purpleBg from "@/public/vectors/purple-bg.svg";

interface HighlightNPCProps {
  image: string | StaticImageData;
  name: string;
}

const HighlightNPC: React.FC<HighlightNPCProps> = ({ image, name }) => {
  return (
    <div className="highlight-npc relative">
      <div className="npc-image relative">
        <Image
          src={image}
          alt={`${name}`}
          width={800}
          height={1000}
          className="object-cover object-center scale-x-[-1]"
        />
        <div className="absolute bottom-[36%] left-[55%] -translate-x-1/2">
          <Image
            src={purpleBg}
            alt="Purple Background"
            className="w-[600px]"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold font-drone">
              {name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightNPC;
