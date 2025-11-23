import { useParams, useNavigate } from 'react-router-dom';
import { blogArticles } from '@/data/blogArticles';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BlogArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = blogArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
          <Button onClick={() => navigate('/blog')}>
            Вернуться к блогу
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate('/blog')}
        >
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Назад к блогу
        </Button>

        <article className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                {article.category}
              </span>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Icon name="Calendar" size={16} className="mr-1" />
                  {article.date}
                </span>
                <span className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-1" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ 
                  __html: article.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold mt-8 mb-4 text-foreground">${line.slice(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-bold mt-6 mb-3 text-foreground">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-bold mt-5 mb-2 text-foreground">${line.slice(4)}</h3>`;
                      }
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return `<p class="font-bold text-foreground my-3">${line.slice(2, -2)}</p>`;
                      }
                      if (line.startsWith('- ')) {
                        return `<li class="ml-6 my-2 text-foreground">${line.slice(2)}</li>`;
                      }
                      if (line.startsWith('✅ ')) {
                        return `<p class="flex items-start my-2"><span class="text-green-600 mr-2 text-xl">✅</span><span class="text-foreground">${line.slice(2)}</span></p>`;
                      }
                      if (line.startsWith('❌ ')) {
                        return `<p class="flex items-start my-2"><span class="text-red-600 mr-2 text-xl">❌</span><span class="text-foreground">${line.slice(2)}</span></p>`;
                      }
                      if (line.startsWith('> ')) {
                        return `<blockquote class="border-l-4 border-primary bg-primary/5 pl-4 py-2 italic my-4 text-foreground rounded-r">${line.slice(2)}</blockquote>`;
                      }
                      if (line.startsWith('─────')) {
                        return `<div class="my-2 text-center text-muted-foreground">${line}</div>`;
                      }
                      if (line.match(/^[А-Яа-я\s]+:\s+[-\d\s₽,.()]+$/)) {
                        return `<div class="bg-primary/5 border-l-4 border-primary px-4 py-2 my-1 font-mono text-sm text-foreground rounded-r">${line}</div>`;
                      }
                      if (line.startsWith('---')) {
                        return '<hr class="my-8 border-t-2 border-primary/20" />';
                      }
                      if (line.trim() === '') {
                        return '<br />';
                      }
                      return `<p class="my-3 text-foreground leading-relaxed">${line}</p>`;
                    })
                    .join('')
                }}
              />
            </div>

            <div className="mt-12 pt-8 border-t border-secondary">
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Нужна консультация по банкротству?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Запишитесь на бесплатную консультацию, и наши юристы помогут разобраться в вашей ситуации.
                </p>
                <Button size="lg" onClick={() => navigate('/#contacts')}>
                  <Icon name="Phone" size={18} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogArticlePage;