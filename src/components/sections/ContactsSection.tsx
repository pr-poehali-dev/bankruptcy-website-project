import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const SEND_EMAIL_URL = "https://functions.poehali.dev/b338ad60-bed5-4a23-97f2-01990646da61";

const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (961) 389-01-32",
      subContent: "Пн-Сб 10:00-19:00 без перерыва",
      action: "tel:+79613890132"
    },
    {
      icon: "Mail",
      title: "Email",
      content: "tlt@meraprava.ru",
      subContent: "Ответим в течение часа",
      action: "mailto:tlt@meraprava.ru"
    },
    {
      icon: "MapPin",
      title: "Адрес офиса",
      content: "Самарская обл., г. Тольятти, ул. Юбилейная, д. 1 А, офис 332",
      subContent: "Приём по предварительной записи",
      action: null
    },
    {
      icon: "Clock",
      title: "График работы",
      content: "Понедельник - Суббота",
      subContent: "10:00 - 19:00 без перерыва",
      action: null
    }
  ];

  const socialLinks = [
    { icon: "MessageCircle", name: "Telegram", url: "https://t.me/+79613890132" },
    { icon: "MessageSquare", name: "WhatsApp", url: "https://wa.me/79613890132" },
    { icon: "Phone", name: "Max", url: "viber://chat?number=%2B79613890132" }
  ];

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Phone" size={16} />
            <span className="text-sm font-semibold">Контакты</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите удобный способ связи. Мы всегда на связи и готовы помочь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={contact.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{contact.title}</h3>
              {contact.action ? (
                <a 
                  href={contact.action}
                  className="text-primary hover:underline font-medium block mb-1"
                >
                  {contact.content}
                </a>
              ) : (
                <p className="text-foreground font-medium mb-1">{contact.content}</p>
              )}
              <p className="text-xs text-muted-foreground">{contact.subContent}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Получить консультацию — подходит ли вам банкротство за 5 минут
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>



              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Опишите кратко вашу ситуацию: какая общая сумма по всем кредитам или задолженностям? Имеете ли ипотеку? единственное жилье по закону защищено. Есть ли просрочки? Какие у вас вопросы по банкротству?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                <Icon name={status === "loading" ? "Loader" : "Send"} size={18} className="mr-2" />
                {status === "loading" ? "Отправляем..." : "Отправить заявку на дистанционную консультацию"}
              </Button>

              {status === "success" && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 rounded-lg p-3">
                  <Icon name="CheckCircle2" size={18} />
                  <span className="text-sm font-medium">Заявка отправлена! Мы свяжемся с вами в ближайшее время.</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 rounded-lg p-3">
                  <Icon name="AlertCircle" size={18} />
                  <span className="text-sm font-medium">Ошибка отправки. Позвоните нам: +7 (961) 389-01-32</span>
                </div>
              )}

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>

          <div>
            <div className="bg-secondary rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Напишите нам в мессенджер
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name={social.icon} size={20} className="text-primary group-hover:text-white" />
                    </div>
                    <span className="font-medium text-foreground">{social.name}</span>
                    <Icon name="ArrowRight" size={16} className="ml-auto text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 text-white">
              <Icon name="Clock" size={40} className="mb-4 text-white/90" />
              <h3 className="text-2xl font-bold mb-3">
                Бесплатная консультация 24/7
              </h3>
              <p className="text-white/90 mb-6">
                Мы работаем круглосуточно и без выходных. 
                Свяжитесь с нами в любое удобное время — наши специалисты всегда готовы помочь.
              </p>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle2" size={20} className="text-white flex-shrink-0" />
                <span className="text-sm">Ответим в течение 5 минут</span>
              </div>
              <div className="flex items-center space-x-3 mt-2">
                <Icon name="CheckCircle2" size={20} className="text-white flex-shrink-0" />
                <span className="text-sm">Консультация абсолютно бесплатна</span>
              </div>
              <div className="flex items-center space-x-3 mt-2">
                <Icon name="CheckCircle2" size={20} className="text-white flex-shrink-0" />
                <span className="text-sm">Конфиденциальность гарантирована</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-xl p-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Посетите наш офис
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              Личные встречи проводятся по предварительной записи. 
              Позвоните нам или оставьте заявку на сайте, чтобы согласовать удобное время.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Самарская обл., г. Тольятти, ул. Юбилейная, д. 1 А, офис 332</p>
                    <p className="text-sm text-muted-foreground">Центр города, удобная транспортная развязка</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span>+7 (961) 389-01-32</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span>tlt@meraprava.ru</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>График работы
Понедельник - Суббота

10:00 - 19:00 без перерывов</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-64 lg:h-auto">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=49.283876%2C53.535882&z=17&pt=49.283876,53.535882,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full min-h-[300px]"
                  allowFullScreen
                  title="Карта офиса"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;