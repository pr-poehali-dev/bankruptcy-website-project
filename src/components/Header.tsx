import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ConsultationModal from "@/components/ConsultationModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: "Главная", href: "/" },
    { title: "Услуги", href: "/services" },
    { title: "О нас", href: "/about" },
    { title: "Контакты", href: "/contacts" }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Scale" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">ВЕРНОЕ РЕШЕНИЕ</h1>
              <p className="text-xs text-muted-foreground">Центр юридической защиты</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href) 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">+7 (961) 389-01-32</p>
              <p className="text-xs text-muted-foreground">Пн-Сб 10:00-19:00</p>
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
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left text-sm transition-colors py-2 ${
                  isActive(item.href) 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <p className="text-sm font-semibold text-foreground">+7 (961) 389-01-32</p>
              <p className="text-xs text-muted-foreground mb-3">Пн-Сб 10:00-19:00</p>
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
