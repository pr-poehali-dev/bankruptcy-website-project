import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import PricingSection from "@/components/sections/PricingSection";
import CasesSection from "@/components/sections/CasesSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-center">Наши услуги</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Полный спектр юридических услуг для защиты ваших прав и интересов
          </p>
        </div>
        <ServicesSection />
        <CalculatorSection />
        <PricingSection />
        <CasesSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
