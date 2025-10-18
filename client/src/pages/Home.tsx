import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import KeyInfoSection from "@/components/KeyInfoSection";
import PracticalInfo from "@/components/PracticalInfo";
import DeliveryMap from "@/components/DeliveryMap";
import OrderSection from "@/components/OrderSection";
import ProductCatalog from "@/components/ProductCatalog";
import RulesSection from "@/components/RulesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <KeyInfoSection />
      <PracticalInfo />
      <DeliveryMap />
      <OrderSection />
      <ProductCatalog />
      <RulesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
