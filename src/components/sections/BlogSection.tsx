import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BlogSection = () => {
  const articles = [
    {
      category: "Инструкции",
      title: "Пошаговая инструкция по банкротству физических лиц в 2024 году",
      excerpt: "Подробное руководство о том, как самостоятельно или с помощью юриста пройти процедуру банкротства. Все этапы от подачи заявления до списания долгов.",
      image: "📋",
      date: "15 октября 2024",
      readTime: "10 мин",
      views: "2.5K"
    },
    {
      category: "Законодательство",
      title: "Изменения в законе о банкротстве с 2024 года: что нужно знать",
      excerpt: "Обзор ключевых изменений в законодательстве о банкротстве физических лиц. Как новые правила влияют на процедуру и какие появились возможности.",
      image: "⚖️",
      date: "12 октября 2024",
      readTime: "8 мин",
      views: "1.8K"
    },
    {
      category: "Практика",
      title: "Как защитить единственное жилье при банкротстве",
      excerpt: "Юридические способы сохранения квартиры или дома в процедуре банкротства. Практические советы от экспертов с примерами из судебной практики.",
      image: "🏠",
      date: "8 октября 2024",
      readTime: "7 мин",
      views: "3.2K"
    },
    {
      category: "FAQ",
      title: "Банкротство ИП и самозанятых: особенности процедуры",
      excerpt: "Чем отличается банкротство индивидуальных предпринимателей от банкротства обычных физических лиц. Разбираем нюансы и подводные камни.",
      image: "💼",
      date: "5 октября 2024",
      readTime: "12 мин",
      views: "1.5K"
    },
    {
      category: "Кейсы",
      title: "Реальная история: как мы списали 3 миллиона рублей долгов",
      excerpt: "Подробный разбор реального дела нашего клиента. От первой консультации до решения суда о списании всех долгов. Трудности и их решения.",
      image: "✅",
      date: "1 октября 2024",
      readTime: "15 мин",
      views: "4.1K"
    },
    {
      category: "Советы",
      title: "5 ошибок при банкротстве, которые приводят к отказу суда",
      excerpt: "Самые распространенные ошибки должников при процедуре банкротства. Как их избежать и повысить шансы на успешное списание долгов.",
      image: "⚠️",
      date: "28 сентября 2024",
      readTime: "9 мин",
      views: "2.9K"
    }
  ];

  const categories = [
    { name: "Все статьи", count: 42, active: true },
    { name: "Инструкции", count: 12, active: false },
    { name: "Законодательство", count: 8, active: false },
    { name: "Практика", count: 15, active: false },
    { name: "Кейсы", count: 7, active: false }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="BookOpen" size={16} />
            <span className="text-sm font-semibold">Блог</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Полезные статьи о банкротстве
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Практические советы, разборы кейсов и актуальная информация от экспертов
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category.active 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-foreground hover:bg-primary/10'
              }`}
            >
              {category.name} <span className="text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center text-6xl">
                {article.image}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    Читать
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            <Icon name="BookOpen" size={18} className="mr-2" />
            Показать больше статей
          </Button>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Mail" size={48} className="mx-auto mb-4 text-white/90" />
            <h3 className="text-3xl font-bold mb-4">
              Подпишитесь на рассылку
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Получайте полезные статьи о банкротстве, изменениях в законодательстве 
              и практические советы прямо на вашу почту
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button size="lg" variant="secondary">
                Подписаться
              </Button>
            </div>
            <p className="text-xs text-white/70 mt-4">
              Никакого спама. Только полезная информация. Отписаться можно в любой момент.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
