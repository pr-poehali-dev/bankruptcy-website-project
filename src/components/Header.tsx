import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { title: "Главная", href: "#hero" },
    { title: "Услуги", href: "#services" },
    { title: "Этапы работы", href: "#steps" },
    { title: "Цены", href: "#pricing" },
    { title: "Кейсы", href: "#cases" },
    { title: "FAQ", href: "#faq" },
    { title: "Блог", href: "#blog" },
    { title: "Контакты", href: "#contacts" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Scale" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">ВЕРНОЕ РЕШЕНИЕ</h1>
              <p className="text-xs text-muted-foreground">Центр юридической защиты</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">+7 (961) 389-01-32</p>
              <p className="text-xs text-muted-foreground">Работаем 24/7</p>
            </div>
            <Button size="sm" onClick={() => setIsModalOpen(true)}>Консультация</Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-sm text-foreground hover:text-primary transition-colors py-2"
              >
                {item.title}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <p className="text-sm font-semibold text-foreground">+7 (961) 389-01-32</p>
              <p className="text-xs text-muted-foreground mb-3">Работаем 24/7</p>
              <Button className="w-full" onClick={() => setIsModalOpen(true)}>Консультация</Button>
            </div>
          </nav>
        )}
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;