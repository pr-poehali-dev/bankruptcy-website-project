import { useState, useEffect } from "react";
import { adminApi } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Field, SaveBtn, Card } from "@/components/admin/AdminHelpers";

// ---- PRICING TAB ----
interface PkgType { id: number; name: string; price: number; description: string; is_featured: boolean; features: string[]; limitations: string[]; sort_order: number; is_active: boolean; }
interface ExtraType { id: number; name: string; price: string; sort_order: number; }

export function PricingTab() {
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

export function CasesTab() {
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

export function FaqTab() {
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

export function BlogTab() {
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
