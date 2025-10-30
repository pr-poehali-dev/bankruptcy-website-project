import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">БанкротЭксперт</div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#steps" className="hover:text-primary transition-colors">Этапы</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Консультация</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
              Банкротство физических лиц
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Законное списание долгов под ключ. Профессиональное сопровождение на всех этапах процедуры банкротства
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Онлайн-консультация
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "FileText",
                title: "Консультация по банкротству",
                description: "Бесплатная оценка вашей ситуации и перспектив банкротства"
              },
              {
                icon: "Scale",
                title: "Полное сопровождение",
                description: "Ведение дела от подачи заявления до полного списания долгов"
              },
              {
                icon: "Shield",
                title: "Защита от кредиторов",
                description: "Остановка звонков коллекторов и судебных приставов"
              },
              {
                icon: "Briefcase",
                title: "Работа с ИП",
                description: "Банкротство индивидуальных предпринимателей"
              },
              {
                icon: "Users",
                title: "Семейное банкротство",
                description: "Комплексное решение долговых проблем семьи"
              },
              {
                icon: "CheckCircle",
                title: "Реструктуризация долга",
                description: "Альтернативные варианты решения долговых проблем"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Этапы работы</h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Консультация и анализ",
                description: "Изучаем вашу ситуацию, оцениваем перспективы, рассказываем о процедуре"
              },
              {
                number: "02",
                title: "Сбор документов",
                description: "Помогаем собрать все необходимые документы для подачи заявления"
              },
              {
                number: "03",
                title: "Подача заявления",
                description: "Подготавливаем и подаём заявление о банкротстве в арбитражный суд"
              },
              {
                number: "04",
                title: "Судебный процесс",
                description: "Представляем ваши интересы в суде, работаем с финансовым управляющим"
              },
              {
                number: "05",
                title: "Реализация имущества",
                description: "Сопровождаем процедуру реализации имущества, защищаем ваши права"
              },
              {
                number: "06",
                title: "Списание долгов",
                description: "Получаем решение суда о признании банкротом и списании долгов"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 animate-fade-in">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent text-secondary rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Тарифы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Базовый",
                price: "от 25 000 ₽",
                features: [
                  "Первичная консультация",
                  "Анализ документов",
                  "Подготовка заявления",
                  "Подача в суд",
                  "Консультации по телефону"
                ]
              },
              {
                name: "Стандарт",
                price: "от 50 000 ₽",
                features: [
                  "Всё из тарифа «Базовый»",
                  "Представительство в суде",
                  "Работа с финансовым управляющим",
                  "Защита имущества",
                  "Сопровождение до списания долгов"
                ],
                popular: true
              },
              {
                name: "Премиум",
                price: "от 80 000 ₽",
                features: [
                  "Всё из тарифа «Стандарт»",
                  "Персональный юрист",
                  "Работа со сложными делами",
                  "Взаимодействие с приставами",
                  "Гарантия результата",
                  "24/7 поддержка"
                ]
              }
            ].map((tariff, index) => (
              <Card key={index} className={`${tariff.popular ? 'border-primary border-2 shadow-xl' : ''} animate-fade-in hover:shadow-lg transition-shadow`}>
                {tariff.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary mt-2">
                    {tariff.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={tariff.popular ? "default" : "outline"}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Кейсы и примеры</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Списание 2,5 млн рублей",
                description: "Клиент имел долги перед 5 банками. Процедура банкротства заняла 8 месяцев, все долги списаны полностью.",
                result: "Долг списан: 2 500 000 ₽"
              },
              {
                title: "Сохранение единственного жилья",
                description: "Помогли сохранить квартиру клиента при банкротстве с долгом 1,8 млн рублей.",
                result: "Квартира сохранена"
              },
              {
                title: "Банкротство ИП",
                description: "Списание долгов индивидуального предпринимателя на 4,2 млн рублей за 10 месяцев.",
                result: "Долг списан: 4 200 000 ₽"
              },
              {
                title: "Семейное банкротство",
                description: "Комплексное банкротство супругов с общим долгом 3,7 млн рублей.",
                result: "Долг списан: 3 700 000 ₽"
              }
            ].map((caseItem, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="font-semibold text-primary">{caseItem.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Кто может подать на банкротство?",
                  answer: "Банкротом может быть признан гражданин, который не способен удовлетворить требования кредиторов на сумму от 500 000 рублей и просрочка составляет более 3 месяцев."
                },
                {
                  question: "Сколько длится процедура банкротства?",
                  answer: "В среднем процедура банкротства занимает от 6 до 12 месяцев. Точные сроки зависят от сложности дела и количества кредиторов."
                },
                {
                  question: "Какое имущество можно сохранить?",
                  answer: "Единственное жильё, личные вещи, предметы домашней обстановки (кроме предметов роскоши), профессиональное оборудование стоимостью до 100 МРОТ сохраняются за должником."
                },
                {
                  question: "Можно ли выезжать за границу?",
                  answer: "После введения процедуры реализации имущества выезд за границу ограничивается. По завершении процедуры ограничения снимаются."
                },
                {
                  question: "Какие последствия банкротства?",
                  answer: "В течение 5 лет нельзя повторно подать на банкротство, 3 года — занимать руководящие должности, 5 лет обязаны сообщать о банкротстве при получении кредита."
                },
                {
                  question: "Нужно ли платить финансовому управляющему?",
                  answer: "Да, вознаграждение финансового управляющего составляет 25 000 рублей единовременно и может быть дополнительно процент от реализованного имущества."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Блог</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Как подготовиться к банкротству",
                date: "15 марта 2024",
                excerpt: "Пошаговая инструкция по подготовке к процедуре банкротства физических лиц..."
              },
              {
                title: "Изменения в законе о банкротстве",
                date: "10 марта 2024",
                excerpt: "Обзор последних изменений в законодательстве о банкротстве граждан..."
              },
              {
                title: "Мифы о банкротстве",
                date: "5 марта 2024",
                excerpt: "Разбираем самые распространённые заблуждения о процедуре банкротства..."
              }
            ].map((post, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Получите бесплатную консультацию</h2>
            <p className="text-center text-lg mb-8 opacity-90">
              Оставьте заявку, и наш юрист свяжется с вами в течение 15 минут
            </p>
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите вашу ситуацию"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@bankruptcy.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">БанкротЭксперт</h3>
              <p className="text-sm opacity-80">Профессиональная помощь в банкротстве физических лиц</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#services" className="hover:opacity-100">Консультация</a></li>
                <li><a href="#services" className="hover:opacity-100">Сопровождение</a></li>
                <li><a href="#services" className="hover:opacity-100">Защита</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#faq" className="hover:opacity-100">FAQ</a></li>
                <li><a href="#blog" className="hover:opacity-100">Блог</a></li>
                <li><a href="#cases" className="hover:opacity-100">Кейсы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@bankruptcy.ru</li>
                <li>Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 БанкротЭксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
