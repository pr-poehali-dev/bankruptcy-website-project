import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const AboutPage = () => {
  const team = [
    {
      name: "Тарханова Елена Владимировна",
      role: "Главный юрист",
      experience: "15+ лет опыта",
      specialization: "Семейное право, наследство",
      description: "Специализируется на сложных семейных спорах и делах о наследстве. Более 500 выигранных дел."
    },
    {
      name: "Иванов Сергей Петрович",
      role: "Ведущий юрист",
      experience: "12+ лет опыта",
      specialization: "Гражданское право",
      description: "Эксперт в области гражданского права и судебных разбирательств. Более 400 успешных дел."
    },
    {
      name: "Петрова Анна Михайловна",
      role: "Юрист-консультант",
      experience: "8+ лет опыта",
      specialization: "Жилищное право",
      description: "Специалист по жилищным спорам и сделкам с недвижимостью. Более 300 довольных клиентов."
    }
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "Надежность",
      description: "15 лет успешной работы и тысячи довольных клиентов"
    },
    {
      icon: "Award",
      title: "Профессионализм",
      description: "Команда опытных юристов с высшим образованием"
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Персональное решение для каждого клиента"
    },
    {
      icon: "Clock",
      title: "Оперативность",
      description: "Быстрое реагирование и решение вопросов"
    },
    {
      icon: "TrendingUp",
      title: "Высокий процент успеха",
      description: "98% выигранных дел в судах"
    },
    {
      icon: "FileCheck",
      title: "Прозрачность",
      description: "Честные цены без скрытых платежей"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Icon name="Users" size={16} />
              <span className="text-sm font-semibold">О компании</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Юридическая компания МЕРА ПРАВА</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Мы предоставляем профессиональные юридические услуги в Тольятти с 2010 года. 
              Наша миссия — защита ваших прав и интересов на всех этапах правовых отношений.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name={advantage.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-br from-primary to-primary/80 h-48 flex items-center justify-center">
                    <Icon name="User" size={80} className="text-white/90" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <div className="flex items-center text-primary mb-2">
                      <Icon name="Briefcase" size={16} className="mr-2" />
                      <span className="font-semibold">{member.role}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Icon name="Clock" size={16} className="mr-2" />
                      <span className="text-sm">{member.experience}</span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3 mb-3">
                      <p className="text-sm font-medium text-foreground">{member.specialization}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-white text-center">
            <Icon name="Target" size={60} className="mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl font-bold mb-6">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3">Честность</h3>
                <p className="text-white/90">Мы всегда говорим правду о перспективах вашего дела</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Профессионализм</h3>
                <p className="text-white/90">Постоянно повышаем квалификацию и следим за изменениями в законодательстве</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Результат</h3>
                <p className="text-white/90">Работаем на достижение лучшего результата для каждого клиента</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
