import { useState, useEffect } from "react";
import { adminApi } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Field, SaveBtn, Card } from "@/components/admin/AdminHelpers";

interface TeamMember {
  id: number;
  sort_order: number;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  description: string;
  photo: string;
  photo_position: string;
  is_active: boolean;
}

export function AboutTab() {
  const [page, setPage] = useState<Record<string, string>>({});
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [editMember, setEditMember] = useState<TeamMember | null>(null);
  const [savingPage, setSavingPage] = useState(false);
  const [savingMember, setSavingMember] = useState(false);
  const [okPage, setOkPage] = useState(false);

  const load = () => {
    adminApi.getAboutPage().then(setPage);
    adminApi.getAboutTeam().then(setTeam);
  };

  useEffect(() => { load(); }, []);

  const savePage = async () => {
    setSavingPage(true);
    await adminApi.saveAboutPage(page);
    setSavingPage(false);
    setOkPage(true);
    setTimeout(() => setOkPage(false), 2000);
  };

  const saveMember = async () => {
    if (!editMember) return;
    setSavingMember(true);
    if (editMember.id) await adminApi.updateAboutTeam(editMember.id, editMember);
    else await adminApi.createAboutTeam(editMember);
    setSavingMember(false);
    setEditMember(null);
    load();
  };

  const deleteMember = async (id: number) => {
    if (!confirm("Удалить сотрудника?")) return;
    await adminApi.deleteAboutTeam(id);
    load();
  };

  const newMember = (): TeamMember => ({
    id: 0,
    sort_order: team.length + 1,
    name: "",
    role: "",
    experience: "",
    specialization: "",
    description: "",
    photo: "",
    photo_position: "object-top",
    is_active: true,
  });

  const f = (key: string) => page[key] || "";
  const set = (key: string) => (v: string) => setPage(d => ({ ...d, [key]: v }));

  return (
    <div>
      <Card title="Текст страницы «О нас»">
        <Field label="Заголовок" value={f("heading")} onChange={set("heading")} />
        <Field label="Описание" value={f("description")} onChange={set("description")} rows={4} />
        {okPage && <p className="text-green-600 text-sm mt-2">✓ Сохранено</p>}
        <SaveBtn onClick={savePage} saving={savingPage} />
      </Card>

      <Card title="Команда">
        <div className="space-y-3 mb-4">
          {team.map(m => (
            <div key={m.id} className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                {m.photo && (
                  <img src={m.photo} alt={m.name} className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0" />
                )}
                <div>
                  <p className="font-medium text-sm">{m.name}</p>
                  <p className="text-xs text-gray-500">{m.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setEditMember({ ...m })}>
                  <Icon name="Pencil" size={14} />
                </Button>
                <Button size="sm" variant="outline" onClick={() => deleteMember(m.id)} className="text-red-500 hover:text-red-700">
                  <Icon name="Trash2" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={() => setEditMember(newMember())}>
          <Icon name="Plus" size={16} className="mr-2" /> Добавить сотрудника
        </Button>
      </Card>

      {editMember && (
        <Card title={editMember.id ? "Редактировать сотрудника" : "Новый сотрудник"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <Field label="ФИО" value={editMember.name} onChange={v => setEditMember(p => p && ({ ...p, name: v }))} />
            <Field label="Должность / роль" value={editMember.role} onChange={v => setEditMember(p => p && ({ ...p, role: v }))} />
            <Field label="Опыт (например: 10 лет опыта)" value={editMember.experience} onChange={v => setEditMember(p => p && ({ ...p, experience: v }))} />
            <Field label="Специализация" value={editMember.specialization} onChange={v => setEditMember(p => p && ({ ...p, specialization: v }))} />
            <Field label="Порядок сортировки" value={String(editMember.sort_order)} type="number" onChange={v => setEditMember(p => p && ({ ...p, sort_order: Number(v) }))} />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Положение фото</label>
              <select
                value={editMember.photo_position}
                onChange={e => setEditMember(p => p && ({ ...p, photo_position: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="object-top">Сверху (object-top)</option>
                <option value="object-center">По центру (object-center)</option>
                <option value="object-bottom">Снизу (object-bottom)</option>
              </select>
            </div>
          </div>
          <Field label="Описание" value={editMember.description} onChange={v => setEditMember(p => p && ({ ...p, description: v }))} rows={3} />
          <Field label="Ссылка на фото (URL)" value={editMember.photo} onChange={v => setEditMember(p => p && ({ ...p, photo: v }))} />
          {editMember.photo && (
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">Предпросмотр фото:</p>
              <img src={editMember.photo} alt="preview" className="h-24 w-24 object-cover rounded-lg border" />
            </div>
          )}
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" id="member_active" checked={editMember.is_active} onChange={e => setEditMember(p => p && ({ ...p, is_active: e.target.checked }))} />
            <label htmlFor="member_active" className="text-sm text-gray-700">Показывать на сайте</label>
          </div>
          <div className="flex gap-3">
            <SaveBtn onClick={saveMember} saving={savingMember} />
            <Button variant="outline" onClick={() => setEditMember(null)}>Отмена</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
