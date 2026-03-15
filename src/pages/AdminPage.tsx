import { useState, useEffect } from "react";
import { adminApi } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// ---- helpers ----
function Field({ label, value, onChange, type = "text", rows }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; rows?: number;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {rows ? (
        <textarea
          rows={rows}
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
}

function SaveBtn({ onClick, saving }: { onClick: () => void; saving: boolean }) {
  return (
    <Button onClick={onClick} disabled={saving} className="mt-2">
      <Icon name={saving ? "Loader2" : "Save"} size={16} className={`mr-2 ${saving ? "animate-spin" : ""}`} />
      {saving ? "Сохраняю..." : "Сохранить"}
    </Button>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

// ---- LOGIN ----
function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true); setError("");
    const res = await adminApi.login(password);
    setLoading(false);
    if (res.ok) {
      localStorage.setItem("admin_token", res.token);
      onLogin();
    } else {
      setError(res.error || "Неверный пароль");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="ShieldCheck" size={32} className="text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Админ-панель</h1>
          <p className="text-sm text-gray-500 mt-1">Верное Решение</p>
        </div>
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && submit()}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <Button onClick={submit} disabled={loading} className="w-full">
          {loading ? "Вхожу..." : "Войти"}
        </Button>
      </div>
    </div>
  );
}

// ---- HERO TAB ----
function HeroTab() {
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

// ---- COMPANY TAB ----
function CompanyTab() {
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

// ---- PRICING TAB ----
interface PkgType { id: number; name: string; price: number; description: string; is_featured: boolean; features: string[]; limitations: string[]; sort_order: number; is_active: boolean; }
interface ExtraType { id: number; name: string; price: string; sort_order: number; }

function PricingTab() {
  const [packages, setPackages] = useState<PkgType[]>([]);
  const [extras, setExtras] = useState<ExtraType[]>([]);
  const [editPkg, setEditPkg] = useState<PkgType | null>(null);
  const [editExtra, setEditExtra] = useState<ExtraType | null>(null);
  const [saving, setSaving] = useState(false);

  const load = () => adminApi.getPricing().then(d => { setPackages(d.packages || []); setExtras(d.extras || []); });
  useEffect(() => { load(); }, []);

  const savePkg = async () => {
    if (!editPkg) return;
    setSaving(true);
    if (editPkg.id) await adminApi.updatePackage(editPkg.id, editPkg);
    else await adminApi.createPackage(editPkg);
    setSaving(false); setEditPkg(null); load();
  };

  const deletePkg = async (id: number) => {
    if (!confirm("Удалить тариф?")) return;
    await adminApi.deletePackage(id); load();
  };

  const saveExtra = async () => {
    if (!editExtra) return;
    setSaving(true);
    if (editExtra.id) await adminApi.updateExtra(editExtra.id, editExtra);
    else await adminApi.createExtra(editExtra);
    setSaving(false); setEditExtra(null); load();
  };

  const deleteExtra = async (id: number) => {
    if (!confirm("Удалить услугу?")) return;
    await adminApi.deleteExtra(id); load();
  };

  const newPkg = (): PkgType => ({ id: 0, name: "", price: 0, description: "", is_featured: false, features: [], limitations: [], sort_order: packages.length + 1, is_active: true });
  const newExtra = (): ExtraType => ({ id: 0, name: "", price: "", sort_order: extras.length + 1 });

  return (
    <div>
      <Card title="Тарифные пакеты">
        <div className="space-y-3 mb-4">
          {packages.map(p => (
            <div key={p.id} className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
              <div>
                <span className="font-medium">{p.name}</span>
                {p.is_featured && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Популярный</span>}
                <span className="ml-3 text-gray-500 text-sm">{p.price.toLocaleString("ru")} ₽</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setEditPkg({ ...p, features: Array.isArray(p.features) ? p.features : [], limitations: Array.isArray(p.limitations) ? p.limitations : [] })}>
                  <Icon name="Pencil" size={14} />
                </Button>
                <Button size="sm" variant="outline" onClick={() => deletePkg(p.id)} className="text-red-500 hover:text-red-700">
                  <Icon name="Trash2" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={() => setEditPkg(newPkg())}>
          <Icon name="Plus" size={16} className="mr-2" /> Добавить тариф
        </Button>
      </Card>

      {editPkg && (
        <Card title={editPkg.id ? "Редактировать тариф" : "Новый тариф"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <Field label="Название" value={editPkg.name} onChange={v => setEditPkg(p => p && ({ ...p, name: v }))} />
            <Field label="Цена (₽)" value={String(editPkg.price)} type="number" onChange={v => setEditPkg(p => p && ({ ...p, price: Number(v) }))} />
            <Field label="Порядок сортировки" value={String(editPkg.sort_order)} type="number" onChange={v => setEditPkg(p => p && ({ ...p, sort_order: Number(v) }))} />
          </div>
          <Field label="Описание" value={editPkg.description} onChange={v => setEditPkg(p => p && ({ ...p, description: v }))} />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Что включено (каждый пункт с новой строки)</label>
            <textarea rows={5} value={editPkg.features.join("\n")} onChange={e => setEditPkg(p => p && ({ ...p, features: e.target.value.split("\n") }))} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Ограничения (каждый пункт с новой строки)</label>
            <textarea rows={3} value={editPkg.limitations.join("\n")} onChange={e => setEditPkg(p => p && ({ ...p, limitations: e.target.value.split("\n").filter(Boolean) }))} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" id="featured" checked={editPkg.is_featured} onChange={e => setEditPkg(p => p && ({ ...p, is_featured: e.target.checked }))} />
            <label htmlFor="featured" className="text-sm text-gray-700">Отметить как «Популярный»</label>
          </div>
          <div className="flex gap-3">
            <SaveBtn onClick={savePkg} saving={saving} />
            <Button variant="outline" onClick={() => setEditPkg(null)}>Отмена</Button>
          </div>
        </Card>
      )}

      <Card title="Дополнительные услуги">
        <div className="space-y-3 mb-4">
          {extras.map(e => (
            <div key={e.id} className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
              <div>
                <span className="font-medium text-sm">{e.name}</span>
                <span className="ml-3 text-gray-500 text-sm">{e.price} ₽</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setEditExtra({ ...e })}>
                  <Icon name="Pencil" size={14} />
                </Button>
                <Button size="sm" variant="outline" onClick={() => deleteExtra(e.id)} className="text-red-500 hover:text-red-700">
                  <Icon name="Trash2" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={() => setEditExtra(newExtra())}>
          <Icon name="Plus" size={16} className="mr-2" /> Добавить услугу
        </Button>
      </Card>

      {editExtra && (
        <Card title={editExtra.id ? "Редактировать услугу" : "Новая услуга"}>
          <Field label="Название" value={editExtra.name} onChange={v => setEditExtra(p => p && ({ ...p, name: v }))} />
          <Field label="Цена (например: 5 000 или от 20 000)" value={editExtra.price} onChange={v => setEditExtra(p => p && ({ ...p, price: v }))} />
          <div className="flex gap-3">
            <SaveBtn onClick={saveExtra} saving={saving} />
            <Button variant="outline" onClick={() => setEditExtra(null)}>Отмена</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

// ---- CASES TAB ----
interface CaseType { id: number; client_name: string; age: number | null; city: string; initial_debt: number; result: string; duration: string; story: string; is_featured: boolean; is_active: boolean; sort_order: number; }

function CasesTab() {
  const [cases, setCases] = useState<CaseType[]>([]);
  const [editCase, setEditCase] = useState<CaseType | null>(null);
  const [saving, setSaving] = useState(false);

  const load = () => adminApi.getCases().then(setCases);
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editCase) return;
    setSaving(true);
    if (editCase.id) await adminApi.updateCase(editCase.id, editCase);
    else await adminApi.createCase(editCase);
    setSaving(false); setEditCase(null); load();
  };

  const del = async (id: number) => {
    if (!confirm("Удалить кейс?")) return;
    await adminApi.deleteCase(id); load();
  };

  const newCase = (): CaseType => ({ id: 0, client_name: "", age: null, city: "", initial_debt: 0, result: "Списано 100%", duration: "", story: "", is_featured: false, is_active: true, sort_order: cases.length + 1 });

  return (
    <div>
      <Card title="Кейсы клиентов">
        <div className="space-y-3 mb-4">
          {cases.map(c => (
            <div key={c.id} className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
              <div>
                <span className="font-medium">{c.client_name}</span>
                {c.is_featured && <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Главный</span>}
                {!c.is_active && <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Скрыт</span>}
                <span className="ml-3 text-gray-500 text-sm">{c.city} · {c.initial_debt.toLocaleString("ru")} ₽</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setEditCase({ ...c })}>
                  <Icon name="Pencil" size={14} />
                </Button>
                <Button size="sm" variant="outline" onClick={() => del(c.id)} className="text-red-500 hover:text-red-700">
                  <Icon name="Trash2" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={() => setEditCase(newCase())}>
          <Icon name="Plus" size={16} className="mr-2" /> Добавить кейс
        </Button>
      </Card>

      {editCase && (
        <Card title={editCase.id ? "Редактировать кейс" : "Новый кейс"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <Field label="Имя клиента (напр. Юрий Б.)" value={editCase.client_name} onChange={v => setEditCase(p => p && ({ ...p, client_name: v }))} />
            <Field label="Возраст" value={String(editCase.age ?? "")} type="number" onChange={v => setEditCase(p => p && ({ ...p, age: v ? Number(v) : null }))} />
            <Field label="Город" value={editCase.city} onChange={v => setEditCase(p => p && ({ ...p, city: v }))} />
            <Field label="Сумма долга (₽)" value={String(editCase.initial_debt)} type="number" onChange={v => setEditCase(p => p && ({ ...p, initial_debt: Number(v) }))} />
            <Field label="Результат (напр. Списано 100%)" value={editCase.result} onChange={v => setEditCase(p => p && ({ ...p, result: v }))} />
            <Field label="Срок (напр. 6 месяцев)" value={editCase.duration} onChange={v => setEditCase(p => p && ({ ...p, duration: v }))} />
          </div>
          <Field label="История клиента" value={editCase.story} onChange={v => setEditCase(p => p && ({ ...p, story: v }))} rows={4} />
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" checked={editCase.is_featured} onChange={e => setEditCase(p => p && ({ ...p, is_featured: e.target.checked }))} />
              Выделенный (главный)
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" checked={editCase.is_active} onChange={e => setEditCase(p => p && ({ ...p, is_active: e.target.checked }))} />
              Показывать на сайте
            </label>
          </div>
          <div className="flex gap-3">
            <SaveBtn onClick={save} saving={saving} />
            <Button variant="outline" onClick={() => setEditCase(null)}>Отмена</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

// ---- FAQ TAB ----
interface FaqType { id: number; question: string; answer: string; sort_order: number; is_active: boolean; }

function FaqTab() {
  const [items, setItems] = useState<FaqType[]>([]);
  const [editItem, setEditItem] = useState<FaqType | null>(null);
  const [saving, setSaving] = useState(false);

  const load = () => adminApi.getFaq().then(setItems);
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editItem) return;
    setSaving(true);
    if (editItem.id) await adminApi.updateFaq(editItem.id, editItem);
    else await adminApi.createFaq(editItem);
    setSaving(false); setEditItem(null); load();
  };

  const del = async (id: number) => {
    if (!confirm("Удалить вопрос?")) return;
    await adminApi.deleteFaq(id); load();
  };

  const newItem = (): FaqType => ({ id: 0, question: "", answer: "", sort_order: items.length + 1, is_active: true });

  return (
    <div>
      <Card title="Частые вопросы (FAQ)">
        <div className="space-y-2 mb-4">
          {items.map(item => (
            <div key={item.id} className="flex items-start justify-between border border-gray-200 rounded-lg px-4 py-3">
              <p className="text-sm font-medium text-gray-800 flex-1 pr-4">{item.question}</p>
              <div className="flex gap-2 flex-shrink-0">
                <Button size="sm" variant="outline" onClick={() => setEditItem({ ...item })}>
                  <Icon name="Pencil" size={14} />
                </Button>
                <Button size="sm" variant="outline" onClick={() => del(item.id)} className="text-red-500 hover:text-red-700">
                  <Icon name="Trash2" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={() => setEditItem(newItem())}>
          <Icon name="Plus" size={16} className="mr-2" /> Добавить вопрос
        </Button>
      </Card>

      {editItem && (
        <Card title={editItem.id ? "Редактировать вопрос" : "Новый вопрос"}>
          <Field label="Вопрос" value={editItem.question} onChange={v => setEditItem(p => p && ({ ...p, question: v }))} />
          <Field label="Ответ" value={editItem.answer} onChange={v => setEditItem(p => p && ({ ...p, answer: v }))} rows={4} />
          <div className="flex gap-3">
            <SaveBtn onClick={save} saving={saving} />
            <Button variant="outline" onClick={() => setEditItem(null)}>Отмена</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

// ---- BLOG TAB ----
interface BlogType { id: number; slug: string; title: string; excerpt: string; content: string; category: string; read_time: number; published_at: string; is_active: boolean; }

function BlogTab() {
  const [items, setItems] = useState<BlogType[]>([]);
  const [editItem, setEditItem] = useState<BlogType | null>(null);
  const [saving, setSaving] = useState(false);

  const load = () => adminApi.getBlog().then(setItems);
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editItem) return;
    setSaving(true);
    if (editItem.id) await adminApi.updateBlog(editItem.id, editItem);
    else await adminApi.createBlog(editItem);
    setSaving(false); setEditItem(null); load();
  };

  const del = async (id: number) => {
    if (!confirm("Удалить статью?")) return;
    await adminApi.deleteBlog(id); load();
  };

  const newItem = (): BlogType => ({ id: 0, slug: "", title: "", excerpt: "", content: "", category: "Практика", read_time: 5, published_at: new Date().toISOString().split("T")[0], is_active: true });

  return (
    <div>
      <Card title="Статьи блога">
        <div className="space-y-2 mb-4">
          {items.map(item => (
            <div key={item.id} className="flex items-start justify-between border border-gray-200 rounded-lg px-4 py-3">
              <div>
                <p className="text-sm font-medium text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.category} · {item.read_time} мин</p>
              </div>
              <div className="flex gap-2 flex-shrink-0 ml-4">
                <Button size="sm" variant="outline" onClick={() => setEditItem({ ...item })}>
                  <Icon name="Pencil" size={14} />
                </Button>
                <Button size="sm" variant="outline" onClick={() => del(item.id)} className="text-red-500 hover:text-red-700">
                  <Icon name="Trash2" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={() => setEditItem(newItem())}>
          <Icon name="Plus" size={16} className="mr-2" /> Добавить статью
        </Button>
      </Card>

      {editItem && (
        <Card title={editItem.id ? "Редактировать статью" : "Новая статья"}>
          <Field label="Заголовок" value={editItem.title} onChange={v => setEditItem(p => p && ({ ...p, title: v }))} />
          <Field label="Slug (URL, напр. bankrotstvo-2024)" value={editItem.slug} onChange={v => setEditItem(p => p && ({ ...p, slug: v }))} />
          <Field label="Краткое описание" value={editItem.excerpt} onChange={v => setEditItem(p => p && ({ ...p, excerpt: v }))} rows={2} />
          <Field label="Полный текст статьи" value={editItem.content} onChange={v => setEditItem(p => p && ({ ...p, content: v }))} rows={8} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
            <Field label="Категория" value={editItem.category} onChange={v => setEditItem(p => p && ({ ...p, category: v }))} />
            <Field label="Время чтения (мин)" value={String(editItem.read_time)} type="number" onChange={v => setEditItem(p => p && ({ ...p, read_time: Number(v) }))} />
            <Field label="Дата публикации" value={editItem.published_at?.split("T")[0] || ""} type="date" onChange={v => setEditItem(p => p && ({ ...p, published_at: v }))} />
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-700 mb-4">
            <input type="checkbox" checked={editItem.is_active} onChange={e => setEditItem(p => p && ({ ...p, is_active: e.target.checked }))} />
            Показывать на сайте
          </label>
          <div className="flex gap-3">
            <SaveBtn onClick={save} saving={saving} />
            <Button variant="outline" onClick={() => setEditItem(null)}>Отмена</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

// ---- SETTINGS TAB ----
function SettingsTab() {
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

// ---- MAIN ----
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
