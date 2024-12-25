import Image from "next/image";
import heroImage from "@/public/images/hero-bg.jpg";
import newArrival from "@/public/vectors/new-arrival.svg";
import yellowBg from "@/public/vectors/yellow-bg.svg";
import HighlightNPC from "./HighlighNPC";
import theDJ from "@/public/images/NPCs/the-dj.png";
import NewArrivals from "./NewArrivals";

export default function Hero() {
  return (
    <div className="relative h-[90vh] max-h-[800px] flex flex-col overflow-y-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 w-full px-4 flex-1 flex flex-col sm:flex-row sm:items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <Image
              src={newArrival}
              alt="New Arrival"
              priority
              className="w-full"
            />
          </div>
        </div>
        {/* Mobile NewArrivals */}
        <div className="sm:hidden mt-8">
          <NewArrivals />
        </div>
      </div>

      <div className="relative z-10 w-full mt-auto">
        <div className="relative">
          <Image
            src={yellowBg}
            alt="Yellow Background"
            width={1920}
            height={300}
            className="w-full"
            priority
          />
          <div className="absolute bottom-0 right-0 sm:right-[1%] translate-y-[35%]">
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
