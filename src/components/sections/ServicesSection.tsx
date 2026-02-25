import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Briefcase" size={16} />
            <span className="text-sm font-semibold">Наши рассрочки</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Полный спектр юридических услуг
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Профессиональная помощь на всех этапах процедуры банкротства физических лиц</p>
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Не знаете, какая услуга вам нужна?
              </h3>
              <p className="text-white/90 mb-6">
                Получите бесплатную консультацию нашего специалиста. 
                Мы проанализируем вашу ситуацию и подберем оптимальное решение.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Написать в чат
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Icon name="Award" size={24} className="text-white" />
                  <div>
                    <p className="font-semibold mb-1">Гарантия результата</p>
                    <p className="text-sm text-white/80">Вернем деньги, если не спишем долги</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mb-4">
                  <Icon name="Clock" size={24} className="text-white" />
                  <div>
                    <p className="font-semibold mb-1">Работаем 24/7</p>
                    <p className="text-sm text-white/80">Всегда на связи, отвечаем в течение 5 минут</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Percent" size={24} className="text-white" />
                  <div>
                    <p className="font-semibold mb-1">Рассрочка платежа</p>
                    <p className="text-sm text-white/80">Гибкие рассрочки за процедуру банкротства</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;