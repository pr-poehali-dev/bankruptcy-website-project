import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Scale" size={28} className="text-primary" />
              <div>
                <h3 className="text-lg font-bold">ВЕРНОЕ РЕШЕНИЕ</h3>
                <p className="text-xs text-muted-foreground">Центр юридической защиты</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Профессиональная помощь в банкротстве физических лиц. 
              Работаем по всей России с 2015 года.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Банкротство физических лиц</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Списание долгов</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Защита имущества</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Юридическое сопровождение</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#steps" className="hover:text-primary transition-colors">Этапы работы</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Цены</a></li>
              <li><a href="#cases" className="hover:text-primary transition-colors">Кейсы</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Вопросы и ответы</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Icon name="Phone" size={16} className="mt-1 text-primary" />
                <div>
                  <p className="font-semibold">+7 (961) 389-01-32</p>
                  <p className="text-xs text-muted-foreground">Работаем 24/7</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Mail" size={16} className="mt-1 text-primary" />
                <p className="text-muted-foreground">tlt@meraprava.ru</p>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="mt-1 text-primary" />
                <p className="text-muted-foreground">Самарская область, г. Тольятти, ул. Юбилейная, д. 1 А, офис 332</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Центр юридической защиты "ВЕРНОЕ РЕШЕНИЕ". Все права защищены.</p>
          <p className="mt-2">Юридические услуги оказываются ООО "Центр юридической защиты ВЕРНОЕ РЕШЕНИЕ"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;