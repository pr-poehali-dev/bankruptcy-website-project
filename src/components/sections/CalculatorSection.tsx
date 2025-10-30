import Calculator from "@/components/Calculator";
import Icon from "@/components/ui/icon";

const CalculatorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Calculator" size={16} />
            <span className="text-sm font-semibold">Калькулятор</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Рассчитайте стоимость онлайн
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте примерную стоимость процедуры банкротства за 2 минуты
          </p>
        </div>

        <Calculator />
      </div>
    </section>
  );
};

export default CalculatorSection;
