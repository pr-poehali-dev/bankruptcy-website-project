import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "WhatsApp",
      icon: "MessageCircle",
      href: "https://wa.me/79000000000",
      color: "bg-[#25D366] hover:bg-[#20BD5A]",
    },
    {
      name: "Telegram",
      icon: "Send",
      href: "https://t.me/username",
      color: "bg-[#0088cc] hover:bg-[#0077b5]",
    },
    {
      name: "Телефон",
      icon: "Phone",
      href: "tel:+79000000000",
      color: "bg-primary hover:bg-primary/90",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {isOpen && (
        <div className="flex flex-col space-y-2 animate-in slide-in-from-bottom-5 fade-in duration-300">
          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 ${contact.color} text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <Icon name={contact.icon} size={20} />
              <span className="font-medium pr-2">{contact.name}</span>
            </a>
          ))}
        </div>
      )}

      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 transition-all hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon
          name={isOpen ? "X" : "MessageSquare"}
          size={24}
          className="transition-transform duration-300"
        />
      </Button>
    </div>
  );
};

export default FloatingContactButton;
