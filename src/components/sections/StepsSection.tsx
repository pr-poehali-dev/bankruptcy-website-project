import Icon from "@/components/ui/icon";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      icon: "Phone",
      title: "Бесплатная консультация",
      description: "Свяжитесь с нами любым удобным способом. Наши специалисты проанализируют вашу ситуацию и ответят на все вопросы.",
      duration: "30 минут",
      details: [
        "Оценка перспектив дела",
        "Расчет стоимости услуг",
        "Ответы на вопросы"
      ]
    },
    {
      number: "02",
      icon: "FileCheck",
      title: "Сбор документов",
      description: "Подготовим полный пакет документов для подачи заявления в арбитражный суд. Поможем собрать все необходимые справки.",
      duration: "1-2 недели",
      details: [
        "Список необходимых документов",
        "Помощь в получении справок",
        "Проверка документов юристом"
      ]
    },
    {
      number: "03",
      icon: "Send",
      title: "Подача заявления",
      description: "Подготовим и подадим заявление о признании банкротом в арбитражный суд. Оплатим госпошлину и вознаграждение управляющему.",
      duration: "1-2 дня",
      details: [
        "Составление заявления",
        "Подача в суд",
        "Оплата обязательных платежей"
      ]
    },
    {
      number: "04",
      icon: "Scale",
      title: "Судебные заседания",
      description: "Представим ваши интересы на всех судебных заседаниях. Защитим от необоснованных претензий кредиторов.",
      duration: "3-6 месяцев",
      details: [
        "Представительство в суде",
        "Работа с возражениями",
        "Защита ваших интересов"
      ]
    },
    {
      number: "05",
      icon: "Users",
      title: "Работа с управляющим",
      description: "Обеспечим взаимодействие с финансовым управляющим. Проконтролируем законность его действий и защитим ваше имущество.",
      duration: "Весь период",
      details: [
        "Контроль действий управляющего",
        "Защита имущества",
        "Обжалование незаконных требований"
      ]
    },
    {
      number: "06",
      icon: "CheckCircle2",
      title: "Списание долгов",
      description: "Получим решение суда о завершении процедуры банкротства и списании всех ваших долгов. Вы начнете жизнь с чистого листа.",
      duration: "Финал",
      details: [
        "Решение суда о банкротстве",
        "Списание всех долгов",
        "Выдача документов"
      ]
    }
  ];

  return (
    <section id="steps" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="ListChecks" size={16} />
            <span className="text-sm font-semibold">Этапы работы</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Как проходит процедура банкротства
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы сопровождаем вас на каждом этапе и берем на себя все юридические формальности
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow relative"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2">
                      {step.number}
                    </div>
                    <div className="relative bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon name={step.icon} size={28} className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {step.details.map((detail, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start space-x-2 bg-secondary rounded-lg p-3"
                      >
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -bottom-3 left-12 w-0.5 h-6 bg-primary/20"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Info" size={28} className="text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Общий срок процедуры — от 6 до 12 месяцев
              </h3>
              <p className="text-muted-foreground">
                Точные сроки зависят от сложности дела, количества кредиторов и загруженности суда. 
                Мы делаем все возможное, чтобы ускорить процесс и минимизировать ваши неудобства.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
