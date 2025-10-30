import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">БанкротПрофи</div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition">Услуги</a>
            <a href="#process" className="text-foreground hover:text-primary transition">Этапы</a>
            <a href="#prices" className="text-foreground hover:text-primary transition">Цены</a>
            <a href="#cases" className="text-foreground hover:text-primary transition">Кейсы</a>
            <a href="#blog" className="text-foreground hover:text-primary transition">Блог</a>
            <a href="#faq" className="text-foreground hover:text-primary transition">FAQ</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Консультация</Button>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Банкротство физических лиц под ключ
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Законное освобождение от долгов за 6-12 месяцев. Полное юридическое сопровождение от экспертов с опытом более 500 дел.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Успешных дел</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">12 лет</div>
                  <div className="text-sm text-muted-foreground">Опыт работы</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Выигранных дел</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/files/86fe1f8e-c102-42a7-a1eb-5c38afded997.jpg" 
                alt="Консультация по банкротству"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг по банкротству физических лиц
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Scale" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Судебное банкротство</h3>
              <p className="text-muted-foreground mb-6">
                Полное сопровождение процедуры банкротства через арбитражный суд с гарантией результата
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Подготовка документов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Представительство в суде</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Работа с кредиторами</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition border-primary border-2">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm inline-block mb-4">
                Популярно
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Банкротство под ключ</h3>
              <p className="text-muted-foreground mb-6">
                Комплексная услуга от подачи заявления до полного списания долгов без вашего участия
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Юридический анализ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Все этапы процедуры</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Защита имущества</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Консультации</h3>
              <p className="text-muted-foreground mb-6">
                Профессиональная юридическая консультация по вопросам банкротства и долгам
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Оценка перспектив</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>План действий</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Ответы на вопросы</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Этапы работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный процесс от первой консультации до списания долгов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Консультация",
                description: "Анализируем вашу ситуацию, оцениваем перспективы банкротства и составляем план действий",
                icon: "MessageSquare"
              },
              {
                step: "02",
                title: "Подготовка",
                description: "Собираем необходимые документы, готовим заявление и формируем доказательную базу",
                icon: "FolderOpen"
              },
              {
                step: "03",
                title: "Суд",
                description: "Подаем заявление в арбитражный суд, представляем ваши интересы на всех заседаниях",
                icon: "Gavel"
              },
              {
                step: "04",
                title: "Результат",
                description: "Получаем решение суда о списании долгов и освобождении от обязательств",
                icon: "Trophy"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Честные и прозрачные тарифы без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-2">Консультация</h3>
              <div className="text-4xl font-bold text-primary mb-6">Бесплатно</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Анализ ситуации</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Оценка перспектив</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>План действий</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Записаться</Button>
            </Card>

            <Card className="p-8 border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                Лучшее предложение
              </div>
              <h3 className="text-2xl font-bold mb-2">Под ключ</h3>
              <div className="text-4xl font-bold text-primary mb-2">от 45 000 ₽</div>
              <div className="text-sm text-muted-foreground mb-6">Полное сопровождение</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Все документы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Судебное представительство</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Работа с кредиторами</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Защита имущества</span>
                </li>
              </ul>
              <Button className="w-full">Выбрать</Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-2">VIP</h3>
              <div className="text-4xl font-bold text-primary mb-2">от 80 000 ₽</div>
              <div className="text-sm text-muted-foreground mb-6">Премиум-услуга</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Всё из тарифа "Под ключ"</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Персональный юрист</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>24/7 поддержка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Ускоренные сроки</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Выбрать</Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Кейсы и примеры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные истории наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Михаил С.",
                debt: "2,8 млн ₽",
                result: "Списано 100%",
                time: "8 месяцев",
                story: "Долги по кредитам пяти банков. Успешно прошли процедуру реализации имущества, сохранили единственное жильё."
              },
              {
                name: "Елена К.",
                debt: "1,5 млн ₽",
                result: "Списано 100%",
                time: "6 месяцев",
                story: "Микрозаймы и долги по ЖКХ. Быстрая процедура без продажи имущества через реструктуризацию."
              },
              {
                name: "Андрей П.",
                debt: "4,2 млн ₽",
                result: "Списано 100%",
                time: "10 месяцев",
                story: "Крупные долги перед банками и МФО. Сохранили автомобиль и квартиру, полностью списали долги."
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <div className="text-sm text-muted-foreground">Долг: {item.debt}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Результат</div>
                    <div className="font-bold text-green-600">{item.result}</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Срок</div>
                    <div className="font-bold text-primary">{item.time}</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{item.story}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о банкротстве
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Кто может подать на банкротство?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Любой гражданин РФ, имеющий задолженность от 500 000 рублей и просрочку по платежам более 3 месяцев. Также можно подать при меньшей сумме долга, если очевидна невозможность его погашения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Сколько длится процедура банкротства?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В среднем процедура занимает от 6 до 12 месяцев. Сроки зависят от сложности дела, количества кредиторов и наличия имущества.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Что происходит с имуществом при банкротстве?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Единственное жильё всегда остаётся у должника. Остальное имущество может быть продано для погашения долгов, однако опытный юрист поможет сохранить максимум активов законными способами.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Какие долги не спишут при банкротстве?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Не подлежат списанию: алименты, возмещение вреда здоровью, текущие платежи по ЖКХ, заработная плата сотрудникам, долги полученные мошенническим путём.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Можно ли работать во время процедуры банкротства?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, вы можете продолжать работать. Единственное ограничение - доход может учитываться при расчёте плана реструктуризации, но это не запрещает трудовую деятельность.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Есть ли последствия после банкротства?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В течение 5 лет после банкротства нужно сообщать о нём при получении новых кредитов. Также 3 года нельзя занимать руководящие должности в финансовых организациях. Других серьёзных ограничений нет.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи о банкротстве и законах
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Новый закон о банкротстве 2024: что изменилось?",
                date: "15 октября 2024",
                category: "Законодательство",
                excerpt: "Обзор последних изменений в законе о банкротстве физических лиц и как они влияют на процедуру."
              },
              {
                title: "Как сохранить имущество при банкротстве",
                date: "10 октября 2024",
                category: "Советы",
                excerpt: "Законные способы защиты имущества от взыскания в процессе банкротства."
              },
              {
                title: "ТОП-5 ошибок при самостоятельном банкротстве",
                date: "5 октября 2024",
                category: "Практика",
                excerpt: "Разбираем типичные ошибки, которые допускают люди при попытке обанкротиться самостоятельно."
              }
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    <Icon name="ArrowRight" size={20} className="text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Получите бесплатную консультацию и узнайте, как мы можем помочь решить вашу проблему с долгами
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@bankrotprofi.ru" className="text-muted-foreground hover:text-primary transition">
                      info@bankrotprofi.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Примерная, д. 1<br />
                      офис 101
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Пт: 9:00 - 20:00<br />
                      Сб-Вс: 10:00 - 18:00
                    </div>
                  </div>
                </div>
              </div>

              <img 
                src="https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/files/f8b7bddd-8cc4-4c64-a456-2a596ad78386.jpg" 
                alt="Наша команда"
                className="rounded-2xl w-full shadow-xl"
              />
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Записаться на консультацию</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="example@mail.ru" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сумма долга</label>
                  <Input placeholder="Например: 1 500 000 руб." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Опишите ситуацию</label>
                  <Textarea 
                    placeholder="Расскажите кратко о вашей ситуации с долгами..."
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы избавиться от долгов?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию прямо сейчас и узнайте, как мы поможем решить вашу проблему
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Бесплатная консультация
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">БанкротПрофи</div>
              <p className="text-sm opacity-80">
                Профессиональная помощь в банкротстве физических лиц с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#services" className="hover:text-primary transition">Судебное банкротство</a></li>
                <li><a href="#services" className="hover:text-primary transition">Под ключ</a></li>
                <li><a href="#services" className="hover:text-primary transition">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#process" className="hover:text-primary transition">Этапы работы</a></li>
                <li><a href="#prices" className="hover:text-primary transition">Цены</a></li>
                <li><a href="#faq" className="hover:text-primary transition">FAQ</a></li>
                <li><a href="#blog" className="hover:text-primary transition">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (999) 123-45-67</li>
                <li>info@bankrotprofi.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-60">
              © 2024 БанкротПрофи. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm opacity-60">
              <a href="#" className="hover:text-primary transition">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
