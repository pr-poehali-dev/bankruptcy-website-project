import Icon from "@/components/ui/icon";

const CasesSection = () => {
  const cases = [
    {
      name: "Сергей М.",
      age: 42,
      city: "Москва",
      debt: "2 450 000",
      result: "Списано 100% долгов",
      duration: "7 месяцев",
      image: "👨‍💼",
      story: "Накопились долги по кредитам и микрозаймам. Банки подали в суд, начали списывать зарплату. После банкротства все долги списаны, жизнь началась заново.",
      debts: [
        { type: "Банковские кредиты", amount: "1 850 000" },
        { type: "Микрозаймы", amount: "450 000" },
        { type: "Задолженность по ЖКХ", amount: "150 000" }
      ]
    },
    {
      name: "Елена К.",
      age: 38,
      city: "Санкт-Петербург",
      debt: "1 780 000",
      result: "Списано 100% долгов",
      duration: "8 месяцев",
      image: "👩‍💼",
      story: "После развода осталась с ипотекой и кредитами. Не хватало денег на выплаты. Через банкротство списали все долги, единственное жилье сохранили.",
      debts: [
        { type: "Кредитные карты", amount: "680 000" },
        { type: "Потребительские кредиты", amount: "920 000" },
        { type: "Штрафы и пени", amount: "180 000" }
      ]
    },
    {
      name: "Дмитрий П.",
      age: 51,
      city: "Екатеринбург",
      debt: "3 200 000",
      result: "Списано 100% долгов",
      duration: "9 месяцев",
      image: "👨‍🔧",
      story: "Бизнес обанкротился, остались долги перед банками и контрагентами. Коллекторы звонили по 20 раз в день. После процедуры все долги списаны.",
      debts: [
        { type: "Банковские кредиты", amount: "2 100 000" },
        { type: "Долги перед контрагентами", amount: "850 000" },
        { type: "Налоговые задолженности", amount: "250 000" }
      ]
    },
    {
      name: "Анна С.",
      age: 29,
      city: "Новосибирск",
      debt: "890 000",
      result: "Списано 100% долгов",
      duration: "6 месяцев",
      image: "👩",
      story: "Попала в финансовую яму из-за микрозаймов. Долги росли как снежный ком. Банкротство помогло избавиться от всех обязательств и начать новую жизнь.",
      debts: [
        { type: "Микрофинансовые организации", amount: "620 000" },
        { type: "Кредитные карты", amount: "210 000" },
        { type: "Онлайн-займы", amount: "60 000" }
      ]
    }
  ];

  const stats = [
    { icon: "Users", value: "7000+", label: "Довольных клиентов" },
    { icon: "TrendingUp", value: "98%", label: "Выигранных дел" },
    { icon: "DollarSign", value: "2.5 млрд ₽", label: "Списанных долгов" },
    { icon: "Clock", value: "7 мес", label: "Средний срок" }
  ];

  return (
    <section id="cases" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Award" size={16} />
            <span className="text-sm font-semibold">Кейсы клиентов</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Реальные истории наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы помогли сотням людей избавиться от долгов и начать жизнь с чистого листа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-5xl">{caseItem.image}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {caseItem.name}, {caseItem.age} лет
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={14} />
                    <span>{caseItem.city}</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-red-800">Долги до процедуры:</span>
                  <span className="text-xl font-bold text-red-600">{caseItem.debt} ₽</span>
                </div>
                <div className="space-y-1">
                  {caseItem.debts.map((debt, idx) => (
                    <div key={idx} className="flex justify-between text-xs text-red-700">
                      <span>{debt.type}</span>
                      <span className="font-semibold">{debt.amount} ₽</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle2" size={20} className="text-green-600" />
                    <span className="text-sm font-semibold text-green-800">Результат:</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{caseItem.result}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 italic">
                "{caseItem.story}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>Срок: {caseItem.duration}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-primary">
                  <Icon name="Star" size={14} className="fill-current" />
                  <Icon name="Star" size={14} className="fill-current" />
                  <Icon name="Star" size={14} className="fill-current" />
                  <Icon name="Star" size={14} className="fill-current" />
                  <Icon name="Star" size={14} className="fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 text-center max-w-3xl mx-auto">
          <Icon name="Quote" size={40} className="text-primary/20 mx-auto mb-4" />
          <blockquote className="text-lg text-foreground mb-4">
            "Я думал, что никогда не избавлюсь от долгов. Коллекторы звонили каждый день, 
            не давали жить. Спасибо команде за профессионализм — все долги списаны, 
            могу спокойно спать и строить планы на будущее."
          </blockquote>
          <div className="flex items-center justify-center space-x-3">
            <div className="text-3xl">👨‍💼</div>
            <div className="text-left">
              <p className="font-bold text-foreground">Алексей Р.</p>
              <p className="text-sm text-muted-foreground">Клиент, Москва</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;