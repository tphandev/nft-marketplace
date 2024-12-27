import Image from "next/image";
import bgImage from "@/public/images/bg.png";
import lines from "@/public/vectors/purple-lines.svg";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover"
          quality={25}
          sizes="(max-width: 480px) 480px,
                 (max-width: 768px) 768px,
                 100vw"
          placeholder="blur"
        />
      </div>
      <div className="relative z-0 flex-1">{children}</div>
      <div className="relative z-0 w-full">
        <Image
          src={lines}
          alt="Purple Lines"
          width={1920}
          height={418}
          className="w-full"
          sizes="(max-width: 480px) 480px,
                 (max-width: 768px) 768px,
                 (max-width: 1200px) 1200px,
                 1920px"
          quality={50}
          loading="lazy"
        />
      </div>
    </main>
  );
}
