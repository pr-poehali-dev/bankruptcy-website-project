import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactsSection from "@/components/sections/ContactsSection";
import FAQSection from "@/components/sections/FAQSection";
import Icon from "@/components/ui/icon";

const ContactsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <Header />
      <main className="pt-24">
        <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <Icon name="Headphones" size={20} />
                <span className="font-semibold">Профессиональная юридическая помощь</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Свяжитесь с нами
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Мы всегда на связи и готовы проконсультировать вас по любым юридическим вопросам
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Icon name="Clock" size={32} className="mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-white/80 text-sm">Круглосуточная поддержка</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Icon name="Users" size={32} className="mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-white/80 text-sm">Опытных юристов</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Icon name="MessageCircle" size={32} className="mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">&lt;5 мин</div>
                  <div className="text-white/80 text-sm">Среднее время ответа</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;