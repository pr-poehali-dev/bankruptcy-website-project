import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    debtAmount: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation request:", formData);
    setStep("success");
    
    setTimeout(() => {
      onClose();
      setStep("form");
      setFormData({
        name: "",
        phone: "",
        debtAmount: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                Бесплатная консультация
              </DialogTitle>
              <DialogDescription>
                Оставьте заявку и наш специалист свяжется с вами в течение 5 минут
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Сумма долгов (необязательно)
                </label>
                <select
                  value={formData.debtAmount}
                  onChange={(e) => setFormData({ ...formData, debtAmount: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Выберите диапазон</option>
                  <option value="300-500">300 000 - 500 000 ₽</option>
                  <option value="500-1000">500 000 - 1 000 000 ₽</option>
                  <option value="1000-3000">1 000 000 - 3 000 000 ₽</option>
                  <option value="3000+">Более 3 000 000 ₽</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Кратко опишите ситуацию (необязательно)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Расскажите о вашей ситуации..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-blue-900">
                    <p className="font-semibold mb-1">Конфиденциальность гарантирована</p>
                    <p>Ваши данные защищены и не передаются третьим лицам</p>
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center" style={{ animation: "scaleIn 0.4s ease-out" }}>
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle2" size={40} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Заявка отправлена!
            </h3>
            <p className="text-muted-foreground mb-6">
              Наш специалист свяжется с вами в ближайшее время
            </p>
            <div className="bg-secondary rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-foreground">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Ожидайте звонка в течение 5 минут</span>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
