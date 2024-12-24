import Image from "next/image";
import heroImage from "@/public/images/hero-bg.jpg";
import newArrival from "@/public/vectors/new-arrival.svg";
import yellowBg from "@/public/vectors/yellow-bg.svg";

export default function Hero() {
  return (
    <div className="relative h-[90vh] max-h-[800px] flex flex-col">
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

      <div className="relative z-10 w-full px-4">
        <div className="max-w-7xl mx-auto mt-36">
          <div className="max-w-3xl">
            <Image
              src={newArrival}
              alt="New Arrival"
              priority
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-auto">
        <Image
          src={yellowBg}
          alt="Yellow Background"
          width={1920}
          height={300}
          className="w-full"
          priority
        />
      </div>
    </div>
  );
}
