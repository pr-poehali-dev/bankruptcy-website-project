import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";

const BlogSection = () => {
  const navigate = useNavigate();
  
  const articles = blogArticles.slice(0, 6);

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
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => navigate(`/blog/${article.id}`)}
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                <Icon name="FileText" size={64} className="text-primary/40" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Icon name="Clock" size={12} />
                    <span>{article.readTime}</span>
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