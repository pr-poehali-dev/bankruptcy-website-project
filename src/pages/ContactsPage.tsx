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
        <ContactsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;