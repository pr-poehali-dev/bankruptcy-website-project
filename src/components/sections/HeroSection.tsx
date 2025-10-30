import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToCalculator = () => {
    const element = document.querySelector('#calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-white to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div style={{ animation: "slideInLeft 0.8s ease-out" }}>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6" style={{ animation: "fadeIn 0.6s ease-out" }}>
              <Icon name="Shield" size={16} />
              <span className="text-sm font-semibold">Официальная процедура</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ animation: "slideInLeft 0.8s ease-out 0.2s both" }}>
              Банкротство физических лиц под ключ
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8" style={{ animation: "slideInLeft 0.8s ease-out 0.4s both" }}>
              Избавьтесь от долгов законно. Полное юридическое сопровождение 
              на всех этапах процедуры банкротства. Работаем по всей России с 2015 года.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8" style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}>
              <Button size="lg" className="text-base" onClick={() => setIsModalOpen(true)}>
                <Icon name="Phone" size={18} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="text-base" onClick={scrollToCalculator}>
                <Icon name="Calculator" size={18} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6" style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">500+</p>
                <p className="text-sm text-muted-foreground">Успешных дел</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">98%</p>
                <p className="text-sm text-muted-foreground">Выигранных дел</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">9 лет</p>
                <p className="text-sm text-muted-foreground">На рынке</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block" style={{ animation: "slideInRight 0.8s ease-out 0.3s both" }}>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Проверьте, подходит ли вам банкротство
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Общая сумма долгов от 300 000 ₽</p>
                    <p className="text-sm text-muted-foreground">Минимальная сумма для процедуры</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Задержка платежей от 3 месяцев</p>
                    <p className="text-sm text-muted-foreground">Или невозможность погасить долги</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Отсутствие дохода или имущества</p>
                    <p className="text-sm text-muted-foreground">Для погашения всех обязательств</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Info" size={16} className="text-primary" />
                  <p className="text-sm font-semibold text-foreground">Важно знать</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Процедура банкротства позволяет списать до 100% долгов 
                  по кредитам, займам, налогам и коммунальным платежам.
                </p>
              </div>

              <Button className="w-full" size="lg" onClick={() => setIsModalOpen(true)}>
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;