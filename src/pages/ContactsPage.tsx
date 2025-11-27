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

        <ContactsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;