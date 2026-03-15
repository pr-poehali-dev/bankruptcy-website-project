import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";
import { fetchContent } from "@/lib/siteContent";

interface PkgType { id: number; name: string; price: number; description: string; is_featured: boolean; features: string[]; limitations: string[]; }
interface ExtraType { id: number; name: string; price: string; }

const PricingSection = () => {
  const [packages, setPackages] = useState<PkgType[]>([]);
  const [additionalServices, setAdditionalServices] = useState<ExtraType[]>([]);

  useEffect(() => {
    fetchContent("/pricing").then(d => {
      if (d.packages?.length) setPackages(d.packages);
      if (d.extras?.length) setAdditionalServices(d.extras);
    });
  }, []);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="DollarSign" size={16} />
            <span className="text-sm font-semibold">Цены</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Прозрачное ценообразование
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий пакет услуг. Возможна оплата в рассрочку без процентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`rounded-xl p-6 md:p-8 ${
                pkg.is_featured 
                  ? 'bg-primary text-primary-foreground shadow-2xl md:scale-105 border-2 border-primary' 
                  : 'bg-white border border-border'
              }`}
            >
              {pkg.is_featured && (
                <div className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Популярный выбор
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${pkg.is_featured ? 'text-white' : 'text-foreground'}`}>
                {pkg.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-3xl sm:text-4xl font-bold ${pkg.is_featured ? 'text-white' : 'text-primary'}`}>
                  {pkg.price.toLocaleString("ru")} ₽
                </span>
              </div>

              <p className={`text-sm mb-6 ${pkg.is_featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-6">
                {(Array.isArray(pkg.features) ? pkg.features : []).map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Icon 
                      name="Check" 
                      size={16} 
                      className={`mt-0.5 flex-shrink-0 ${pkg.is_featured ? 'text-white' : 'text-primary'}`}
                    />
                    <span className={`text-sm ${pkg.is_featured ? 'text-white' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {(Array.isArray(pkg.limitations) ? pkg.limitations : []).length > 0 && (
                <div className={`text-xs mb-6 p-3 rounded-lg ${
                  pkg.is_featured ? 'bg-white/10' : 'bg-secondary'
                }`}>
                  {(pkg.limitations as string[]).map((limitation, idx) => (
                    <p key={idx} className={pkg.is_featured ? 'text-white/80' : 'text-muted-foreground'}>
                      * {limitation}
                    </p>
                  ))}
                </div>
              )}

              <Button 
                className="w-full" 
                size="lg"
                variant={pkg.is_featured ? "secondary" : "default"}
              >
                Выбрать пакет
              </Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Percent" size={24} className="text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Рассрочка 0%</h4>
            <p className="text-sm text-muted-foreground">
              Оплачивайте услуги частями без процентов и переплат
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheck" size={24} className="text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Гарантия результата</h4>
            <p className="text-sm text-muted-foreground">
              Вернем деньги, если не получим решение о банкротстве
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calculator" size={24} className="text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">Точный расчет</h4>
            <p className="text-sm text-muted-foreground">
              Рассчитаем стоимость именно для вашего случая бесплатно
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;