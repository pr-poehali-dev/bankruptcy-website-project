import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { LoginPage } from "@/components/admin/AdminHelpers";
import { HeroTab, CompanyTab, SettingsTab } from "@/components/admin/AdminTabsSimple";
import { PricingTab, CasesTab, FaqTab, BlogTab } from "@/components/admin/AdminTabsData";

const TABS = [
  { id: "hero", label: "Главная", icon: "Home" },
  { id: "company", label: "Контакты", icon: "Phone" },
  { id: "pricing", label: "Цены", icon: "DollarSign" },
  { id: "cases", label: "Кейсы", icon: "Award" },
  { id: "faq", label: "FAQ", icon: "HelpCircle" },
  { id: "blog", label: "Блог", icon: "BookOpen" },
  { id: "settings", label: "Настройки", icon: "Settings" },
];

export default function AdminPage() {
  const [authed, setAuthed] = useState(!!localStorage.getItem("admin_token"));
  const [tab, setTab] = useState("hero");

  if (!authed) return <LoginPage onLogin={() => setAuthed(true)} />;

  const logout = () => { localStorage.removeItem("admin_token"); setAuthed(false); };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white rounded-lg p-1.5">
            <Icon name="ShieldCheck" size={20} />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-sm">Админ-панель</h1>
            <p className="text-xs text-gray-500">Верное Решение</p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={logout}>
          <Icon name="LogOut" size={14} className="mr-1.5" /> Выйти
        </Button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-16 md:w-56 bg-white border-r border-gray-200 min-h-[calc(100vh-57px)] sticky top-[57px] flex-shrink-0">
          <nav className="p-2 space-y-1">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  tab === t.id ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon name={t.icon as Parameters<typeof Icon>[0]["name"]} size={18} />
                <span className="hidden md:block">{t.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-4 md:p-8 max-w-4xl">
          {tab === "hero" && <HeroTab />}
          {tab === "company" && <CompanyTab />}
          {tab === "pricing" && <PricingTab />}
          {tab === "cases" && <CasesTab />}
          {tab === "faq" && <FaqTab />}
          {tab === "blog" && <BlogTab />}
          {tab === "settings" && <SettingsTab />}
        </main>
      </div>
    </div>
  );
}
