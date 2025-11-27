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
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c7e6f5d4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7&amp;source=constructor"
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
