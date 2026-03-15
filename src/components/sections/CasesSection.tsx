import Icon from "@/components/ui/icon";

const CasesSection = () => {
  const cases = [
    {
      name: "Юрий Б.",
      age: 32,
      city: "Москва",
      debt: "649 000",
      result: "Списано 100% долгов",
      duration: "4 месяца",
      image: "https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/bucket/3b28f32f-cf6a-40d8-90d0-2bbb0db1610e.jpg",
      story: "Накопились долги по кредитам, пока помогал матери финансово на лечение. Банки подали в суд, начали списывать ползарплаты. После банкротства все долги списаны, жизнь началась заново! (дело №А55-9271/2022).",
      debts: [
        { type: "Банковские кредиты", amount: "1 850 000" },
        { type: "Микрозаймы", amount: "450 000" },
        { type: "Задолженность по ЖКХ", amount: "150 000" }
      ]
    },
    {
      name: "Элеонора К.",
      age: 56,
      city: "Санкт-Петербург",
      debt: "1 625 000",
      result: "Списано 100% долгов",
      duration: "8 месяцев",
      image: "https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/bucket/09b8ecfc-f7fc-4003-a9a2-02498c361091.jpg",
      story: "После развода осталась одна с кредитами. Не хватало денег на кредитные платежи, приходилось подрабатывать помимо основной работы, не было сил. Через банкротство списали все долги, теперь не думаю как дожить до зарплаты, я очень рада, что обратилась! (дело №А55-8778/2022).",
      debts: [
        { type: "Кредитные карты", amount: "680 000" },
        { type: "Потребительские кредиты", amount: "920 000" },
        { type: "Штрафы и пени", amount: "180 000" }
      ]
    },
    {
      name: "Максим Ш.",
      age: 39,
      city: "Екатеринбург",
      debt: "2 667 000",
      result: "Списано 100% долгов",
      duration: "7 месяцев",
      image: "https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/bucket/df75e936-18a8-42f6-8e64-186ee20dd0ac.jpg",
      story: "Вложился в свое дело. Бизнес обанкротился, остались долги перед банками. Не представлял как их погасить, воспитывая двоих детей и потеряв свое дело. После банкротства все долги списаны. (дело №А55-27978/2024).",
      debts: [
        { type: "Банковские кредиты", amount: "2 100 000" },
        { type: "Долги перед контрагентами", amount: "850 000" },
        { type: "Налоговые задолженности", amount: "250 000" }
      ]
    },
    {
      name: "Светлана Ч.",
      age: 53,
      city: "Новосибирск",
      debt: "527 000",
      result: "Списано 100% долгов",
      duration: "6 месяцев",
      image: "https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/bucket/1693deff-2bf8-43be-b5c1-62e714f13736.jpg",
      story: "Попала в финансовую яму после сокращения на работе. Пока искала работу, долги росли как снежный ком. Банкротство помогло избавиться от всех обязательств и начать новую жизнь! (дело №А55-20006/2022).",
      debts: [
        { type: "Микрофинансовые организации", amount: "620 000" },
        { type: "Кредитные карты", amount: "210 000" },
        { type: "Онлайн-займы", amount: "60 000" }
      ]
    }
  ];

  const stats = [
    { icon: "Users", value: "7000+", label: "Довольных клиентов" },
    { icon: "TrendingUp", value: "100%", label: "Выигранных дел" },
    { icon: "DollarSign", value: "6.5 млрд ₽", label: "Списанных долгов" },
    { icon: "Clock", value: "6 месяцев", label: "Средний срок" }
  ];

  return (
    <section id="cases" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Award" size={16} />
            <span className="text-sm font-semibold">Кейсы клиентов</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4"> Истории наших клиентов</h2>
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
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  {caseItem.image.startsWith('http') ? (
                    <img src={caseItem.image} alt={caseItem.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="text-5xl flex items-center justify-center w-full h-full">{caseItem.image}</div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {caseItem.name}, {caseItem.age} лет
                  </h3>

                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-red-800">Долги до процедуры:</span>
                  <span className="text-xl font-bold text-red-600">{caseItem.debt} ₽</span>
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


        <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow max-w-3xl mx-auto">
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img src="https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/bucket/8027c995-42ab-4f6e-b0a0-531a1471517f.jpg" alt="Владимир М." className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">Владимир М.</h3>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-red-800">Долги до процедуры:</span>
              <span className="text-xl font-bold text-red-600">625 000 ₽</span>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle2" size={20} className="text-green-600" />
                <span className="text-sm font-semibold text-green-800">Результат:</span>
              </div>
              <span className="text-lg font-bold text-green-600">Списано 930 000 руб.</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 italic">
            "Лишился хорошей работы, думал, что никогда не избавлюсь от долгов. Спасибо команде "Верное решение" — все долги списаны, могу спать спокойно и строить планы на будущее." (дело №А55-7607/2022)
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={14} />
              <span>Срок: 4 месяца</span>
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
      </div>
    </section>
  );
};

export default CasesSection;