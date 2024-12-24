import localFont from "next/font/local";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const droneRanger = localFont({
  src: [
    {
      path: "../public/fonts/DroneRangerPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DroneRangerPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/DroneRangerPro-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-drone-ranger",
});

export const metadata: Metadata = {
  title: "Market Place",
  description: "NFT Market Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${droneRanger.variable} antialiased`}>
        <AntdRegistry>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
