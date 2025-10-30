import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StepsSection from "@/components/sections/StepsSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import PricingSection from "@/components/sections/PricingSection";
import CasesSection from "@/components/sections/CasesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactsSection from "@/components/sections/ContactsSection";
import BlogSection from "@/components/sections/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StepsSection />
        <CalculatorSection />
        <PricingSection />
        <CasesSection />
        <FAQSection />
        <ContactsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;