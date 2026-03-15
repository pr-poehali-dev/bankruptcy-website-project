
-- Пароль администратора
CREATE TABLE admin_auth (
  id SERIAL PRIMARY KEY,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Контент секции Hero
CREATE TABLE hero_content (
  id SERIAL PRIMARY KEY,
  badge TEXT NOT NULL DEFAULT 'Официальная процедура',
  heading TEXT NOT NULL DEFAULT 'Банкротство физических лиц под ключ',
  description TEXT NOT NULL,
  cta_button TEXT NOT NULL DEFAULT 'Заказать обратный звонок',
  stat_cases TEXT NOT NULL DEFAULT '7000+',
  stat_won TEXT NOT NULL DEFAULT '100%',
  stat_years TEXT NOT NULL DEFAULT '5 лет',
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Контакты и настройки компании
CREATE TABLE company_info (
  id SERIAL PRIMARY KEY,
  phone TEXT NOT NULL DEFAULT '+7 (961) 389-01-32',
  schedule TEXT NOT NULL DEFAULT 'Пн-Сб 10:00-19:00',
  email TEXT NOT NULL DEFAULT 'tlt@meraprava.ru',
  address TEXT NOT NULL DEFAULT 'Самарская обл., г. Тольятти, ул. Юбилейная, д. 1 А, офис 332',
  telegram_link TEXT NOT NULL DEFAULT 'https://t.me/+79613890132',
  whatsapp_link TEXT NOT NULL DEFAULT 'https://wa.me/79613890132',
  inn TEXT NOT NULL DEFAULT '6321466877',
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Тарифы
CREATE TABLE pricing_packages (
  id SERIAL PRIMARY KEY,
  sort_order INTEGER NOT NULL DEFAULT 0,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT NOT NULL,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  features JSONB NOT NULL DEFAULT '[]',
  limitations JSONB NOT NULL DEFAULT '[]',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Дополнительные услуги
CREATE TABLE pricing_extra (
  id SERIAL PRIMARY KEY,
  sort_order INTEGER NOT NULL DEFAULT 0,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- Кейсы клиентов
CREATE TABLE cases (
  id SERIAL PRIMARY KEY,
  sort_order INTEGER NOT NULL DEFAULT 0,
  client_name TEXT NOT NULL,
  age INTEGER,
  city TEXT NOT NULL,
  initial_debt INTEGER NOT NULL,
  result TEXT NOT NULL DEFAULT 'Списано 100%',
  duration TEXT NOT NULL,
  story TEXT NOT NULL,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- FAQ
CREATE TABLE faq_items (
  id SERIAL PRIMARY KEY,
  sort_order INTEGER NOT NULL DEFAULT 0,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- Блог
CREATE TABLE blog_articles (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'Практика',
  read_time INTEGER NOT NULL DEFAULT 5,
  published_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  updated_at TIMESTAMP DEFAULT NOW()
);
