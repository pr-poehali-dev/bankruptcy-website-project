import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchContent } from "@/lib/siteContent";

interface FaqItem { id: number; question: string; answer: string; }

const FAQSection = () => {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);

  useEffect(() => { fetchContent("/faq").then(d => { if (Array.isArray(d) && d.length) setFaqItems(d); }); }, []);



  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="HelpCircle" size={16} />
            <span className="text-sm font-semibold">Вопросы и ответы</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Частые вопросы о банкротстве
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о процедуре банкротства физических лиц
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={item.id} 
                value={`item-${item.id}`}
                className="bg-white border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="font-semibold text-foreground pr-4">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-9 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 md:p-12 text-center text-white max-w-3xl mx-auto">
          <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-white/90" />
          <h3 className="text-xl sm:text-3xl font-bold mb-4">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-lg text-white/90 mb-6">
            Получите бесплатную консультацию нашего специалиста. 
            Мы ответим на все ваши вопросы и поможем разобраться в ситуации.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Icon name="Mail" size={18} className="mr-2" />
              Написать на почту
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;