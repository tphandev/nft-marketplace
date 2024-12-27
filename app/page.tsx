import Hero from "@/components/Hero";
import MainLayout from "@/components/MainLayout";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <ProductSection />
    </MainLayout>
  );
}
