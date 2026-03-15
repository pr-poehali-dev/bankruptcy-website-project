import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";
import { fetchContent } from "@/lib/siteContent";

interface CaseType { id: number; client_name: string; age: number | null; city: string; initial_debt: number; result: string; duration: string; story: string; is_featured: boolean; }

const CasesSection = () => {
  const [allCases, setAllCases] = useState<CaseType[]>([]);

  useEffect(() => { fetchContent("/cases").then(d => { if (Array.isArray(d) && d.length) setAllCases(d); }); }, []);

  const cases = allCases.filter(c => !c.is_featured);
  const featuredCase = allCases.find(c => c.is_featured);

  const stats = [
    { icon: "Users", value: "7000+", label: "Довольных клиентов" },
    { icon: "TrendingUp", value: "100%", label: "Выигранных дел" },
    { icon: "DollarSign", value: "6.5 млрд ₽", label: "Списанных долгов" },
    { icon: "Clock", value: "6 месяцев", label: "Средний срок" }
  ];

  return (
    <section id="cases" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Award" size={16} />
            <span className="text-sm font-semibold">Кейсы клиентов</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"> Истории наших клиентов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы помогли сотням людей избавиться от долгов и начать жизнь с чистого листа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {caseItem.client_name}{caseItem.age ? `, ${caseItem.age} лет` : ""}
                  </h3>
                  <p className="text-sm text-muted-foreground">{caseItem.city}</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-red-800">Долги до процедуры:</span>
                  <span className="text-xl font-bold text-red-600">{caseItem.initial_debt.toLocaleString("ru")} ₽</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle2" size={20} className="text-green-600" />
                    <span className="text-sm font-semibold text-green-800">Результат:</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{caseItem.result}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 italic">"{caseItem.story}"</p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>Срок: {caseItem.duration}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-primary">
                  {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={14} className="fill-current" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {featuredCase && (
        <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow max-w-3xl mx-auto">
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="User" size={28} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">{featuredCase.client_name}</h3>
              <p className="text-sm text-muted-foreground">{featuredCase.city}</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-red-800">Долги до процедуры:</span>
              <span className="text-xl font-bold text-red-600">{featuredCase.initial_debt.toLocaleString("ru")} ₽</span>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle2" size={20} className="text-green-600" />
                <span className="text-sm font-semibold text-green-800">Результат:</span>
              </div>
              <span className="text-lg font-bold text-green-600">{featuredCase.result}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 italic">"{featuredCase.story}"</p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={14} />
              <span>Срок: {featuredCase.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-primary">
              {[1,2,3,4,5].map(i => <Icon key={i} name="Star" size={14} className="fill-current" />)}
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
};

export default CasesSection;