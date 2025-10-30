import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Calculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    debtAmount: "",
    creditorsCount: "",
    hasProperty: "",
    hasIncome: "",
    urgency: ""
  });

  const [result, setResult] = useState<{
    basePrice: number;
    additionalServices: number;
    total: number;
    package: string;
  } | null>(null);

  const calculatePrice = () => {
    let basePrice = 25000;
    let additionalServices = 0;
    let packageName = "Базовый";

    const debt = parseInt(formData.debtAmount) || 0;
    const creditors = parseInt(formData.creditorsCount) || 0;

    if (creditors > 10 || debt > 2000000) {
      basePrice = 75000;
      packageName = "Премиум";
    } else if (creditors > 3 || debt > 800000) {
      basePrice = 45000;
      packageName = "Стандарт";
    }

    if (formData.hasProperty === "yes") {
      additionalServices += 20000;
    }

    if (formData.urgency === "urgent") {
      additionalServices += 10000;
    }

    setResult({
      basePrice,
      additionalServices,
      total: basePrice + additionalServices,
      package: packageName
    });

    setStep(4);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      calculatePrice();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const resetCalculator = () => {
    setStep(1);
    setFormData({
      debtAmount: "",
      creditorsCount: "",
      hasProperty: "",
      hasIncome: "",
      urgency: ""
    });
    setResult(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Калькулятор стоимости банкротства
        </h3>
        <p className="text-sm text-muted-foreground">
          Ответьте на несколько вопросов для точного расчёта
        </p>
      </div>

      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                step >= num
                  ? "bg-primary text-white"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {num}
            </div>
            {num < 4 && (
              <div
                className={`w-12 h-1 mx-2 transition-colors ${
                  step > num ? "bg-primary" : "bg-secondary"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6" style={{ animation: "fadeIn 0.3s ease-out" }}>
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Какая общая сумма ваших долгов?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "До 500 000 ₽", value: "300000" },
                { label: "500 000 - 1 000 000 ₽", value: "800000" },
                { label: "1 000 000 - 3 000 000 ₽", value: "2000000" },
                { label: "Более 3 000 000 ₽", value: "4000000" }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFormData({ ...formData, debtAmount: option.value })}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.debtAmount === option.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6" style={{ animation: "fadeIn 0.3s ease-out" }}>
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Сколько у вас кредиторов?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "1-3 кредитора", value: "2" },
                { label: "4-10 кредиторов", value: "7" },
                { label: "11-20 кредиторов", value: "15" },
                { label: "Более 20", value: "25" }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFormData({ ...formData, creditorsCount: option.value })}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.creditorsCount === option.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Есть ли у вас имущество (кроме единственного жилья)?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFormData({ ...formData, hasProperty: "yes" })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.hasProperty === "yes"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Да, есть
              </button>
              <button
                onClick={() => setFormData({ ...formData, hasProperty: "no" })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.hasProperty === "no"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6" style={{ animation: "fadeIn 0.3s ease-out" }}>
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Есть ли у вас официальный доход?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFormData({ ...formData, hasIncome: "yes" })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.hasIncome === "yes"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Да, есть
              </button>
              <button
                onClick={() => setFormData({ ...formData, hasIncome: "no" })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.hasIncome === "no"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Нет
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Насколько срочно нужно начать процедуру?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFormData({ ...formData, urgency: "normal" })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.urgency === "normal"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                В обычном режиме
              </button>
              <button
                onClick={() => setFormData({ ...formData, urgency: "urgent" })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.urgency === "urgent"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                Срочно (1-2 дня)
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 4 && result && (
        <div className="space-y-6" style={{ animation: "scaleIn 0.4s ease-out" }}>
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 text-white text-center">
            <Icon name="CheckCircle2" size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Рекомендуемый пакет:</h3>
            <p className="text-4xl font-bold mb-4">{result.package}</p>
            <div className="text-5xl font-bold mb-2">{result.total.toLocaleString()} ₽</div>
            <p className="text-white/80 text-sm">Примерная стоимость услуг</p>
          </div>

          <div className="bg-secondary rounded-lg p-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-foreground">Базовый пакет "{result.package}":</span>
              <span className="font-bold text-foreground">{result.basePrice.toLocaleString()} ₽</span>
            </div>
            {result.additionalServices > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-foreground">Дополнительные услуги:</span>
                <span className="font-bold text-foreground">
                  +{result.additionalServices.toLocaleString()} ₽
                </span>
              </div>
            )}
            <div className="border-t border-border pt-3 flex justify-between items-center">
              <span className="font-bold text-foreground">Итого:</span>
              <span className="text-2xl font-bold text-primary">
                {result.total.toLocaleString()} ₽
              </span>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Важно знать:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Возможна оплата в рассрочку без процентов</li>
                  <li>• Первая консультация бесплатно</li>
                  <li>• Окончательная стоимость определяется после анализа документов</li>
                  <li>• Дополнительно: госпошлина 300₽ и вознаграждение управляющему 25 000₽</li>
                </ul>
              </div>
            </div>
          </div>

          <Button className="w-full" size="lg" onClick={resetCalculator}>
            <Icon name="RotateCcw" size={18} className="mr-2" />
            Рассчитать заново
          </Button>
        </div>
      )}

      {step < 4 && (
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
            className="min-w-[120px]"
          >
            <Icon name="ChevronLeft" size={18} className="mr-1" />
            Назад
          </Button>
          <div className="text-sm text-muted-foreground">
            Шаг {step} из 3
          </div>
          <Button
            onClick={handleNext}
            disabled={
              (step === 1 && !formData.debtAmount) ||
              (step === 2 && (!formData.creditorsCount || !formData.hasProperty)) ||
              (step === 3 && (!formData.hasIncome || !formData.urgency))
            }
            className="min-w-[120px]"
          >
            {step === 3 ? "Рассчитать" : "Далее"}
            <Icon name="ChevronRight" size={18} className="ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Calculator;
