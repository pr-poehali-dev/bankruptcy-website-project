import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Scale" size={28} className="text-primary" />
              <div>
                <h3 className="text-lg font-bold text-[#ffffff]">ВЕРНОЕ РЕШЕНИЕ</h3>
                <p className="text-xs text-slate-400">Центр юридической защиты, ИНН 6321466877</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Профессиональная помощь в банкротстве физических лиц и по любым делам. 
              Работаем по всей России с 2021 года.
            </p>
            <div className="flex space-x-3">
              <a href="tel:+79613890132" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="mailto:tlt@meraprava.ru" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="https://t.me/+79613890132" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Услуги</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Банкротство физических лиц</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Списание долгов</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Защита имущества</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Юридическая защита по наследственным, семейным и по всем видам дел</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Информация</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#steps" className="hover:text-blue-400 transition-colors">Этапы работы</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">О нас</a></li>
              <li><a href="#cases" className="hover:text-blue-400 transition-colors">Кейсы реальных клиентов</a></li>
              <li><a href="/contacts" className="hover:text-blue-400 transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Icon name="Phone" size={16} className="mt-1 text-blue-400" />
                <div>
                  <p className="font-semibold text-white">+7 (961) 389-01-32</p>
                  <p className="text-xs text-slate-400">Пн-Сб 10:00-19:00</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="Mail" size={16} className="mt-1 text-blue-400" />
                <p className="text-slate-400">tlt@meraprava.ru</p>
              </li>
              <li className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="mt-1 text-blue-400" />
                <p className="text-slate-400">Самарская область, г. Тольятти, ул. Юбилейная, д. 1 А, офис 332</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>© {currentYear} Центр юридической защиты "ВЕРНОЕ РЕШЕНИЕ". Все права защищены.</p>
          <p className="mt-2">Юридические услуги оказываются ООО "Центр юридической защиты ВЕРНОЕ РЕШЕНИЕ"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;