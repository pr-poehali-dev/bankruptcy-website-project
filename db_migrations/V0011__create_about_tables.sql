CREATE TABLE IF NOT EXISTS about_page (
  id SERIAL PRIMARY KEY,
  heading TEXT DEFAULT 'Юридическая компания ВЕРНОЕ РЕШЕНИЕ',
  description TEXT DEFAULT 'Мы предоставляем профессиональные юридические услуги с 2021 года.',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO about_page (heading, description) VALUES (
  'Юридическая компания ВЕРНОЕ РЕШЕНИЕ',
  'Мы предоставляем профессиональные юридические услуги с 2021 года. Наша команда профессионалов имеет колоссальный опыт от 8 до 15 лет. Наша цель — защита ваших прав и интересов на всех этапах правовых отношений.'
);

CREATE TABLE IF NOT EXISTS about_team (
  id SERIAL PRIMARY KEY,
  sort_order INT DEFAULT 0,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  experience TEXT DEFAULT '',
  specialization TEXT DEFAULT '',
  description TEXT DEFAULT '',
  photo TEXT DEFAULT '',
  photo_position TEXT DEFAULT 'object-top',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO about_team (sort_order, name, role, experience, specialization, description, photo, photo_position) VALUES
(1, 'Тарханова Евгения Олеговна', 'Главный юрисконсульт компании', '10 лет опыта', 'Банкротство физических лиц', 'Юрист эксперт по банкротству физических лиц и по гражданским делам.', 'https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/bucket/c7d9e7b1-dfb5-4455-b485-815897c5f791.jpg', 'object-center'),
(2, 'Чернова Анастасия Вячеславовна', 'Арбитражный управляющий', '12+ лет опыта', 'Арбитражное управление, экономика', 'Арбитражный управляющий, юрист и экономист. Эксперт в области банкротства и антикризисного управления.', 'https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/bucket/0ee9a7dd-2ae0-4e7e-ac31-95bc1797e5bb.jpg', 'object-top'),
(3, 'Пронин Николай Геннадьевич', 'Юрист по банкротству физлиц и по судебному представительству', '15+ лет опыта', 'Гражданское право', 'Специалист по банкротству, гражданским делам и судебному представительству.', 'https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/bucket/57b7428e-ded9-490e-994e-8c2becc80f52.jpg', 'object-top'),
(4, 'Николаева Татьяна Владимировна', 'Юрист по наследственным, семейным и жилищным спорам', '8+ лет опыта', 'Жилищное, наследственное, семейное право', 'Специалист по наследственным, семейным и жилищным делам.', 'https://cdn.poehali.dev/projects/46c53743-c789-42c0-baa9-7e4e90f8c24c/bucket/a84aeb5f-1d08-47aa-ab29-3ba9519da42f.jpg', 'object-top');
