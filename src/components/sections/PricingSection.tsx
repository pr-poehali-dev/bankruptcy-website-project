import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const packages = [
    {
      name: "Базовый",
      price: "25 000",
      popular: false,
      description: "Для простых случаев с минимальным количеством кредиторов",
      features: [
        "Консультация юриста",
        "Подготовка документов",
        "Подача заявления в суд",
        "До 3 кредиторов",
        "1 судебное заседание",
        "Онлайн поддержка"
      ],
      limitations: [
        "Дополнительные заседания оплачиваются отдельно",
        "Работа с управляющим не включена"
      ]
    },
    {
      name: "Стандарт",
      price: "45 000",
      popular: true,
      description: "Оптимальный вариант для большинства случаев банкротства",
      features: [
        "Все из пакета Базовый",
        "До 10 кредиторов",
        "Все судебные заседания",
        "Работа с финансовым управляющим",
        "Защита имущества",
        "Поддержка 24/7",
        "Оспаривание требований кредиторов",
        "Обжалование решений"
      ],
      limitations: []
    },
    {
      name: "Премиум",
      price: "75 000",
      popular: false,
      description: "Для сложных дел с большим количеством кредиторов и имущества",
      features: [
        "Все из пакета Стандарт",
        "Неограниченное количество кредиторов",
        "Защита сложного имущества",
        "Работа со всеми видами долгов",
        "Персональный юрист",
        "VIP поддержка",
        "Защита от субсидиарной ответственности",
        "Оспаривание сделок",
        "Гарантия результата"
      ],
      limitations: []
    }
  ];

  const additionalServices = [
    { name: "Дополнительное судебное заседание", price: "5 000" },
    { name: "Обжалование решения суда", price: "15 000" },
    { name: "Оспаривание сделок", price: "от 20 000" },
    { name: "Работа с субсидиарной ответственностью", price: "от 30 000" },
    { name: "Срочная подготовка документов (за 1 день)", price: "10 000" }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="DollarSign" size={16} />
            <span className="text-sm font-semibold">Цены</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Прозрачное ценообразование
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий пакет услуг. Возможна оплата в рассрочку без процентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 ${
                pkg.popular 
                  ? 'bg-primary text-primary-foreground shadow-2xl scale-105 border-2 border-primary' 
                  : 'bg-white border border-border'
              }`}
            >
              {pkg.popular && (
                <div className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Популярный выбор
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-foreground'}`}>
                {pkg.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-primary'}`}>
                  {pkg.price} ₽
                </span>
              </div>

              <p className={`text-sm mb-6 ${pkg.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Icon 
                      name="Check" 
                      size={16} 
                      className={`mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-primary'}`}
                    />
                    <span className={`text-sm ${pkg.popular ? 'text-white' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {pkg.limitations.length > 0 && (
                <div className={`text-xs mb-6 p-3 rounded-lg ${
                  pkg.popular ? 'bg-white/10' : 'bg-secondary'
                }`}>
                  {pkg.limitations.map((limitation, idx) => (
                    <p key={idx} className={pkg.popular ? 'text-white/80' : 'text-muted-foreground'}>
                      * {limitation}
                    </p>
                  ))}
                </div>
              )}

              <Button 
                className="w-full" 
                size="lg"
                variant={pkg.popular ? "secondary" : "default"}
              >
                Выбрать пакет
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Дополнительные услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 flex items-center justify-between"
              >
                <span className="text-sm text-foreground">{service.name}</span>
                <span className="text-lg font-bold text-primary">{service.price} ₽</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Percent" size={24} className="text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Рассрочка 0%</h4>
            <p className="text-sm text-muted-foreground">
              Оплачивайте услуги частями без процентов и переплат
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheck" size={24} className="text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Гарантия результата</h4>
            <p className="text-sm text-muted-foreground">
              Вернем деньги, если не получим решение о банкротстве
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calculator" size={24} className="text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Точный расчет</h4>
            <p className="text-sm text-muted-foreground">
              Рассчитаем стоимость именно для вашего случая бесплатно
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
