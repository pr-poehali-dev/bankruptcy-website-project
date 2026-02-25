import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Briefcase" size={16} />
            <span className="text-sm font-semibold">Специалист на консультации предложит гибкие рассрочки банкротства по разумной стоимости</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Клиент сам выбирает комфортную рассрочку стоимости банкротства
          </h2>

        </div>


      </div>
    </section>
  );
};

export default ServicesSection;