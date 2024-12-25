import Image, { StaticImageData } from "next/image";
import skyfallBg from "@/public/images/skyfall-bg.png";

interface NewArrivalCardProps {
  image: string | StaticImageData;
  name: string;
}

export default function NewArrivalCard({ image, name }: NewArrivalCardProps) {
  return (
    <div className="relative w-full">
      <div className="relative rounded-lg overflow-visible drop-shadow-2xl">
        <div className="relative aspect-[4/3] w-full overflow-visible">
          <div className="absolute inset-x-0 bottom-[-20%]">
            <Image
              src={skyfallBg}
              alt="Skyfall background"
              className="object-cover rounded-lg  border-yellow-800 border-2"
              width={200}
              height={120}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
            <Image
              src={image}
              alt={`${name} illustration`}
              width={100}
              height={100}
              className="z-10 transform translate-y-5 scale-150 origin-bottom"
              priority
            />
          </div>
        </div>

        <h1 className="title-18-bold text-black mt-8 relative z-20 text-center">
          {name}
        </h1>
      </div>
    </div>
  );
}
