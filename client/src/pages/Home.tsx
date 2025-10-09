import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PracticalInfo from "@/components/PracticalInfo";
import DeliveryMap from "@/components/DeliveryMap";
import ProductCatalog from "@/components/ProductCatalog";
import OrderSection from "@/components/OrderSection";
import RulesSection from "@/components/RulesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <PracticalInfo />
      <DeliveryMap />
      <ProductCatalog />
      <OrderSection />
      <RulesSection />
      <Footer />
    </div>
  );
}
