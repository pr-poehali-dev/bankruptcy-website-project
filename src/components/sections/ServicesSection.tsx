import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "FileText",
      title: "Банкротство физических лиц",
      description: "Полное юридическое сопровождение процедуры банкротства от подачи заявления до списания долгов",
      features: [
        "Сбор и подготовка документов",
        "Подача заявления в суд",
        "Представительство в суде",
        "Взаимодействие с финансовым управляющим"
      ],
      price: "от 25 000 ₽"
    },
    {
      icon: "Wallet",
      title: "Списание долгов",
      description: "Легальное списание задолженностей по кредитам, займам, налогам и коммунальным платежам",
      features: [
        "Списание кредитов и займов",
        "Списание налоговых задолженностей",
        "Списание штрафов и пени",
        "Списание долгов по ЖКХ"
      ],
      price: "от 15 000 ₽"
    },
    {
      icon: "ShieldCheck",
      title: "Защита имущества",
      description: "Законные способы сохранения имущества при процедуре банкротства физических лиц",
      features: [
        "Анализ имущества",
        "Юридическая защита единственного жилья",
        "Защита от необоснованных претензий",
        "Консультации по сохранению активов"
      ],
      price: "от 20 000 ₽"
    },
    {
      icon: "Scale",
      title: "Юридическое сопровождение",
      description: "Комплексное юридическое сопровождение на всех этапах процедуры банкротства",
      features: [
        "Работа с кредиторами",
        "Обжалование решений",
        "Защита интересов в суде",
        "Консультации 24/7"
      ],
      price: "от 30 000 ₽"
    },
    {
      icon: "Users",
      title: "Работа с кредиторами",
      description: "Профессиональное взаимодействие с банками, МФО и коллекторскими агентствами",
      features: [
        "Переговоры с кредиторами",
        "Оспаривание требований",
        "Защита от коллекторов",
        "Реструктуризация долгов"
      ],
      price: "от 10 000 ₽"
    },
    {
      icon: "HelpCircle",
      title: "Консультации юриста",
      description: "Экспертные консультации по вопросам банкротства и списания долгов",
      features: [
        "Первичная консультация бесплатно",
        "Оценка перспектив дела",
        "Расчет стоимости услуг",
        "Ответы на все вопросы"
      ],
      price: "Бесплатно"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Briefcase" size={16} />
            <span className="text-sm font-semibold">Наши услуги</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Полный спектр юридических услуг
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Профессиональная помощь на всех этапах процедуры банкротства физических лиц</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-500 hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon name={service.icon} size={24} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Стоимость:</span>
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                </div>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Не знаете, какая услуга вам нужна?
              </h3>
              <p className="text-white/90 mb-6">
                Получите бесплатную консультацию нашего специалиста. 
                Мы проанализируем вашу ситуацию и подберем оптимальное решение.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Написать в чат
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Icon name="Award" size={24} className="text-white" />
                  <div>
                    <p className="font-semibold mb-1">Гарантия результата</p>
                    <p className="text-sm text-white/80">Вернем деньги, если не спишем долги</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mb-4">
                  <Icon name="Clock" size={24} className="text-white" />
                  <div>
                    <p className="font-semibold mb-1">Работаем 24/7</p>
                    <p className="text-sm text-white/80">Всегда на связи, отвечаем в течение 5 минут</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Percent" size={24} className="text-white" />
                  <div>
                    <p className="font-semibold mb-1">Рассрочка платежа</p>
                    <p className="text-sm text-white/80">Возможна оплата услуг в рассрочку</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;