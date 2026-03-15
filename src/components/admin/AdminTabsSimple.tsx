import { useState, useEffect } from "react";
import { adminApi } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import { Field, SaveBtn, Card } from "@/components/admin/AdminHelpers";

export function HeroTab() {
  const [data, setData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => { adminApi.getHero().then(setData); }, []);

  const save = async () => {
    setSaving(true);
    await adminApi.saveHero(data);
    setSaving(false); setOk(true);
    setTimeout(() => setOk(false), 2000);
  };

  const f = (key: string) => data[key] || "";
  const set = (key: string) => (v: string) => setData(d => ({ ...d, [key]: v }));

  return (
    <Card title="Главный экран">
      <Field label="Бейдж" value={f("badge")} onChange={set("badge")} />
      <Field label="Заголовок" value={f("heading")} onChange={set("heading")} />
      <Field label="Описание" value={f("description")} onChange={set("description")} rows={3} />
      <Field label="Текст кнопки" value={f("cta_button")} onChange={set("cta_button")} />
      <div className="grid grid-cols-3 gap-4">
        <Field label="Кол-во дел" value={f("stat_cases")} onChange={set("stat_cases")} />
        <Field label="% выигрыша" value={f("stat_won")} onChange={set("stat_won")} />
        <Field label="Лет на рынке" value={f("stat_years")} onChange={set("stat_years")} />
      </div>
      {ok && <p className="text-green-600 text-sm mt-2">✓ Сохранено</p>}
      <SaveBtn onClick={save} saving={saving} />
    </Card>
  );
}

export function CompanyTab() {
  const [data, setData] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => { adminApi.getCompany().then(setData); }, []);

  const save = async () => {
    setSaving(true);
    await adminApi.saveCompany(data);
    setSaving(false); setOk(true);
    setTimeout(() => setOk(false), 2000);
  };

  const f = (key: string) => data[key] || "";
  const set = (key: string) => (v: string) => setData(d => ({ ...d, [key]: v }));

  return (
    <Card title="Контакты и реквизиты">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <Field label="Телефон" value={f("phone")} onChange={set("phone")} />
        <Field label="График работы" value={f("schedule")} onChange={set("schedule")} />
        <Field label="Email" value={f("email")} onChange={set("email")} />
        <Field label="ИНН" value={f("inn")} onChange={set("inn")} />
        <Field label="Адрес офиса" value={f("address")} onChange={set("address")} />
        <Field label="Telegram ссылка" value={f("telegram_link")} onChange={set("telegram_link")} />
        <Field label="WhatsApp ссылка" value={f("whatsapp_link")} onChange={set("whatsapp_link")} />
      </div>
      {ok && <p className="text-green-600 text-sm mt-2">✓ Сохранено</p>}
      <SaveBtn onClick={save} saving={saving} />
    </Card>
  );
}

export function SettingsTab() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");
  const [saving, setSaving] = useState(false);

  const save = async () => {
    if (password !== confirm) { setMsg("Пароли не совпадают"); return; }
    if (password.length < 6) { setMsg("Пароль должен быть не менее 6 символов"); return; }
    setSaving(true);
    const res = await adminApi.changePassword(password);
    setSaving(false);
    if (res.ok) { setMsg("✓ Пароль изменён"); setPassword(""); setConfirm(""); }
    else setMsg(res.error || "Ошибка");
  };

  return (
    <Card title="Настройки">
      <p className="text-sm text-gray-600 mb-4">Изменить пароль для входа в админ-панель</p>
      <Field label="Новый пароль" value={password} onChange={setPassword} type="password" />
      <Field label="Повторите пароль" value={confirm} onChange={setConfirm} type="password" />
      {msg && <p className={`text-sm mb-2 ${msg.startsWith("✓") ? "text-green-600" : "text-red-500"}`}>{msg}</p>}
      <SaveBtn onClick={save} saving={saving} />
    </Card>
  );
}
