import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactsSection from "@/components/sections/ContactsSection";
import FAQSection from "@/components/sections/FAQSection";

const ContactsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-center">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Свяжитесь с нами удобным способом. Мы всегда готовы помочь!
          </p>
        </div>
        
        <div className="container mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full h-[500px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=49.283876%2C53.535882&z=17&l=map&pt=49.283876,53.535882,pm2rdm"
                width="100%"
                height="500"
                frameBorder="0"
                title="Карта офиса МЕРА ПРАВА"
              ></iframe>
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