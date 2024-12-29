import Image from "next/image";
import heroImage from "@/public/images/hero-bg.jpg";
import newArrival from "@/public/vectors/new-arrival.svg";
import yellowBg from "@/public/vectors/yellow-bg.svg";
import HighlightNPC from "./HighlighNPC";
import theDJ from "@/public/images/NPCs/the-dj.png";
import NewArrivals from "./NewArrivals";

export default function Hero() {
  return (
    <div className="relative h-screen sm:h-[90vh] max-h-[800px] flex flex-col overflow-y-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          quality={50}
          sizes={`(max-width: 375px) 375px,
            (max-width: 640px) 640px,
            (max-width: 750px) 750px,
            (max-width: 828px) 828px,
            (max-width: 1080px) 1080px,
            (max-width: 1200px) 1200px,
            1920px`}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 w-full px-4 flex-1 flex flex-col sm:flex-row sm:items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl hidden sm:block">
            <Image
              src={newArrival}
              alt="New Arrival"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
        {/* Mobile NewArrivals */}
        <div className="sm:hidden mt-24 md:mt-0">
          <NewArrivals />
        </div>
      </div>

      <div className="relative z-10 w-full mt-auto">
        <div className="relative">
          <Image
            src={yellowBg}
            alt="Yellow Background"
            className="w-full"
            sizes={`(max-width: 375px) 375px,
              (max-width: 640px) 640px,
              (max-width: 750px) 750px,
              (max-width: 828px) 828px,
              (max-width: 1080px) 1080px,
              (max-width: 1200px) 1200px,
              1920px`}
            loading="lazy"
          />
          <div className="absolute bottom-0 right-0  translate-y-[35%]">
            <HighlightNPC image={theDJ} name="THE DJ" />
          </div>
          {/* Desktop NewArrivals */}
          <div className="hidden lg:block absolute bottom-0 left-0 sm:left-[1%] translate-y-[15%]">
            <NewArrivals />
          </div>
        </div>
      </div>
    </div>
  );
}
