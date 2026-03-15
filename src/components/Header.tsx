import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ConsultationModal from "@/components/ConsultationModal";
import { fetchContent } from "@/lib/siteContent";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const [company, setCompany] = useState({ phone: "+7 (961) 389-01-32", schedule: "Пн-Сб 10:00-19:00" });

  useEffect(() => { fetchContent("/company").then(d => { if (d.phone) setCompany(d); }); }, []);

  const menuItems = [
    { title: "Главная", href: "/" },
    { title: "Реальные дела наших клиентов", href: "/services" },
    { title: "О нас", href: "/about" },
    { title: "Контакты", href: "/contacts" }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Scale" size={32} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-[#ffffff]">ВЕРНОЕ РЕШЕНИЕ</h1>
              <p className="text-xs text-slate-400">Центр юридической защиты</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href) 
                    ? 'text-blue-400 font-semibold' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{company.phone}</p>
              <p className="text-xs text-slate-400">{company.schedule}</p>
            </div>
            <Button size="sm" onClick={() => setIsModalOpen(true)}>Консультация</Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+79613890132"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white"
            >
              <Icon name="Phone" size={18} />
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="text-white" />
            </button>
          </div>
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
                    ? 'text-blue-400 font-semibold' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-700">
              <p className="text-sm font-semibold text-white">{company.phone}</p>
              <p className="text-xs text-slate-400 mb-3">{company.schedule}</p>
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