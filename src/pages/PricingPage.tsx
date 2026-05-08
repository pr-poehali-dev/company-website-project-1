import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

/* ─── Types ─────────────────────────────────────── */
type Section =
  | "marketplace"
  | "finance"
  | "design"
  | "legal"
  | "packages";

const TABS: { id: Section; label: string; icon: string }[] = [
  { id: "marketplace", label: "Маркетплейсы", icon: "ShoppingBag" },
  { id: "finance", label: "Финансы и IT", icon: "BarChart2" },
  { id: "design", label: "Дизайн и контент", icon: "Sparkles" },
  { id: "legal", label: "Юридические услуги", icon: "Scale" },
  { id: "packages", label: "Пакеты «Всё в одном»", icon: "Package" },
];

interface PriceRow {
  service: string;
  desc?: string;
  price: string;
  period?: string;
}

/* ─── Data ───────────────────────────────────────── */
const MP_SECTIONS: { title: string; icon: string; rows: PriceRow[] }[] = [
  {
    title: "Управление магазином",
    icon: "Store",
    rows: [
      { service: "Полное ведение кабинета", desc: "Регистрация/настройка ЛК, витрина, атрибуты, логистика FBO/FBS, ежедневный мониторинг, работа с поддержкой", price: "25 000 – 60 000 ₽", period: "/ мес" },
      { service: "Ведение премиум-кабинета", desc: "Для участников программ «Бренды» / «Ozon Select»: бренд-страница, акции, персональный менеджер", price: "60 000 – 120 000 ₽", period: "/ мес" },
      { service: "Стартовый запуск «под ключ»", desc: "Регистрация ИП/ООО, настройка ЛК, 20 премиум-карточек, логистика, обучение", price: "40 000 – 80 000 ₽", period: "разово" },
      { service: "Полное ведение «под ключ»", desc: "Комплексное управление всеми процессами", price: "100 000 – 200 000 ₽", period: "/ мес" },
      { service: "Регистрация кабинета", desc: "Создание и первичная настройка ЛК селлера", price: "1 000 – 3 000 ₽", period: "разово" },
    ],
  },
  {
    title: "Работа с карточками товаров",
    icon: "LayoutGrid",
    rows: [
      { service: "Создание карточки (премиум)", desc: "Продающее название, УТП, инфографика 3–5 слайдов, полные атрибуты", price: "700 – 1 200 ₽", period: "/ товар" },
      { service: "Создание карточки (базовая)", desc: "Фото, название, описание, характеристики", price: "300 – 500 ₽", period: "/ товар" },
      { service: "Пакетная оптимизация (от 50 SKU)", desc: "Массовое обновление, унификация, кросс-ссылки", price: "15 000 – 35 000 ₽", period: "/ пакет" },
      { service: "SEO-оптимизация карточки", desc: "Сбор семантики, внедрение ключей, улучшение ранжирования", price: "500 – 1 000 ₽", period: "/ товар" },
      { service: "SEO-продвижение (ежемесячно)", desc: "Мониторинг позиций + корректировки", price: "500 – 900 ₽", period: "/ товар / мес" },
    ],
  },
  {
    title: "Продвижение и реклама",
    icon: "Megaphone",
    rows: [
      { service: "Настройка внутренней рекламы", desc: "Аудит, стратегия, запуск поисковой/баннерной/авторекламы + А/В-тесты", price: "10 000 – 25 000 ₽", period: "+ 10–30% от бюджета" },
      { service: "Ведение рекламных кампаний", desc: "Ежедневный мониторинг, оптимизация ДРР, еженедельная аналитика", price: "15 000 – 40 000 ₽", period: "/ мес + 10–20%" },
      { service: "Участие в акциях маркетплейса", desc: "Анализ, заявки, контроль, пост-анализ", price: "5 000 – 15 000 ₽", period: "/ акция" },
      { service: "Стратегия ценообразования", desc: "Анализ конкурентов + динамическое ценообразование", price: "8 000 – 20 000 ₽", period: "разово" },
    ],
  },
  {
    title: "Аналитика и отчётность",
    icon: "BarChart2",
    rows: [
      { service: "Еженедельный отчёт", desc: "Продажи, остатки, реклама, рекомендации", price: "5 000 – 10 000 ₽", period: "/ неделя" },
      { service: "Глубокая аналитика продаж", desc: "Юнит-экономика, ABC-анализ, прогноз спроса", price: "10 000 – 20 000 ₽", period: "/ мес" },
      { service: "Аудит кабинета селлера", desc: "30+ рекомендаций по контенту, логистике, рекламе", price: "20 000 – 50 000 ₽", period: "разово" },
      { service: "Конкурентный анализ", desc: "ТОП-10 конкурентов + план отстройки", price: "12 000 – 30 000 ₽", period: "разово" },
    ],
  },
  {
    title: "Работа с репутацией",
    icon: "Star",
    rows: [
      { service: "Модерация отзывов", desc: "Ежедневные ответы, работа с негативом", price: "3 000 – 7 000 ₽", period: "/ мес" },
      { service: "Стратегия репутации + кампания", desc: "Скрипты, триггеры, отчёт по рейтингу", price: "10 000 – 25 000 ₽ + 8 000 – 18 000 ₽", period: "/ мес" },
    ],
  },
  {
    title: "Логистика и поставки",
    icon: "Truck",
    rows: [
      { service: "Специалист по поставкам FBO", desc: "Полное сопровождение поставок", price: "20 000 – 30 000 ₽", period: "/ мес" },
      { service: "Оптимизация складских запасов", desc: "Анализ и рекомендации по остаткам", price: "5 000 – 7 000 ₽", period: "разово" },
      { service: "Поиск перспективных ниш", desc: "Анализ и отчёт по товарным нишам", price: "3 000 – 5 000 ₽", period: "разово" },
    ],
  },
];

const FINANCE_SECTIONS: { title: string; icon: string; rows: PriceRow[] }[] = [
  {
    title: "Финансовый анализ",
    icon: "TrendingUp",
    rows: [
      { service: "Управленческая отчётность (ОПиУ, ОДДС, баланс)", price: "5 000 – 15 000 ₽", period: "/ отчёт" },
      { service: "KPI-дашборд (Power BI / DataLens)", price: "15 000 – 40 000 ₽", period: "разово" },
      { service: "Бюджетирование и прогнозирование (3–12 мес)", price: "20 000 – 50 000 ₽", period: "разово" },
      { service: "Финансовая модель «под ключ» (Excel/Google Sheets)", price: "от 50 000 ₽", period: "разово" },
    ],
  },
  {
    title: "Автоматизация и IT-решения",
    icon: "Cpu",
    rows: [
      { service: "Сайт-визитка / лендинг на Tilda", price: "50 000 – 150 000 ₽", period: "2–6 нед" },
      { service: "Интернет-магазин (Tilda / WordPress)", price: "80 000 – 400 000 ₽", period: "1–3 мес" },
      { service: "Чат-бот Telegram/WhatsApp (с AI)", price: "30 000 – 150 000 ₽", period: "2–6 нед" },
      { service: "Внедрение Битрикс24 / amoCRM", price: "от 50 000 ₽", period: "1–2 мес" },
      { service: "AI-решение под задачу", price: "от 500 000 ₽", period: "2–8 мес" },
    ],
  },
];

const DESIGN_SECTIONS: { title: string; icon: string; rows: PriceRow[] }[] = [
  {
    title: "Графический дизайн",
    icon: "Palette",
    rows: [
      { service: "Логотип + айдентика (базовый)", price: "5 000 – 15 000 ₽", period: "3–7 дней" },
      { service: "Логотип + айдентика (премиум + брендбук)", price: "15 000 – 30 000 ₽", period: "7–14 дней" },
      { service: "Инфографика для маркетплейсов", price: "800 – 2 000 ₽", period: "/ слайд" },
      { service: "Пакет инфографики (5–7 слайдов)", price: "3 000 – 10 000 ₽", period: "/ карточка" },
      { service: "Баннеры / креативы для рекламы", price: "1 500 – 4 000 ₽", period: "/ шт." },
    ],
  },
  {
    title: "Видео, анимация и нейрокреативы",
    icon: "Video",
    rows: [
      { service: "Reels / Shorts / клипы (до 60 сек)", price: "3 000 – 10 000 ₽", period: "/ ролик" },
      { service: "Монтаж видео (до 5 мин)", price: "5 000 – 15 000 ₽", period: "2–5 дней" },
      { service: "Нейрофотосессия (товарная / бизнес-портрет)", price: "800 – 25 000 ₽", period: "1–3 дня" },
      { service: "Генерация контента ИИ (текст + визуал)", price: "1 500 – 4 000 ₽", period: "/ единица" },
      { service: "Ведение контента в соцсетях (1 аккаунт)", price: "10 000 – 20 000 ₽", period: "/ мес" },
    ],
  },
];

const LEGAL_SECTIONS: { title: string; icon: string; rows: PriceRow[] }[] = [
  {
    title: "Для физических лиц и ИП",
    icon: "User",
    rows: [
      { service: "Устная консультация (до 30 мин)", price: "Бесплатно", period: "" },
      { service: "Письменная консультация (сложная)", price: "2 500 – 6 000 ₽", period: "3–5 дней" },
      { service: "Составление простого договора", price: "1 500 – 4 000 ₽", period: "3–7 дней" },
      { service: "Составление сложного договора", price: "5 000 – 9 000 ₽", period: "5–10 дней" },
      { service: "Юридический анализ договора", price: "2 000 – 7 000 ₽", period: "2–4 дня" },
      { service: "Пакет «Старт»", desc: "Консультация + договор + анализ рисков", price: "5 000 ₽", period: "5–7 дней" },
    ],
  },
  {
    title: "Для юридических лиц",
    icon: "Building2",
    rows: [
      { service: "Устная консультация (до 30 мин)", price: "Бесплатно", period: "" },
      { service: "Письменная консультация (бизнес)", price: "4 000 – 8 000 ₽", period: "3–7 дней" },
      { service: "Составление договора для бизнеса", price: "3 500 – 6 000 ₽", period: "2–4 дня" },
      { service: "Сложный индивидуальный договор", price: "7 000 – 12 000 ₽", period: "5–10 дней" },
      { service: "Юридический аудит документов", price: "5 000 – 10 000 ₽", period: "3–5 дней" },
      { service: "Абонентское сопровождение (до 5 запросов/мес)", price: "15 000 – 35 000 ₽", period: "/ мес" },
      { service: "Пакет «Бизнес-старт»", desc: "Регистрация + документы + консультация", price: "25 000 – 45 000 ₽", period: "7–14 дней" },
    ],
  },
  {
    title: "Представление интересов в суде",
    icon: "Gavel",
    rows: [
      { service: "Разовое участие (физлица)", price: "от 5 000 ₽", period: "" },
      { service: "Полное сопровождение (физлица)", price: "20 000 – 60 000 ₽", period: "" },
      { service: "Разовое участие (юрлица)", price: "от 7 000 ₽", period: "" },
      { service: "Полное сопровождение (юрлица)", price: "30 000 – 150 000 ₽", period: "" },
    ],
  },
];

const PACKAGES = [
  {
    name: "«Старт на маркетплейсе»",
    forWho: "Новый селлер",
    price: "85 000 ₽",
    economy: "15%",
    icon: "Rocket",
    includes: [
      "Регистрация кабинета и настройка",
      "10 базовых карточек товаров",
      "SEO-оптимизация",
      "Настройка рекламы",
      "Аналитика (1 отчёт)",
    ],
    highlight: false,
  },
  {
    name: "«Бизнес под ключ»",
    forWho: "Малый бизнес",
    price: "195 000 ₽",
    economy: "20%",
    icon: "Briefcase",
    includes: [
      "Полное ведение кабинета (1 мес)",
      "20 премиум-карточек с инфографикой",
      "Ведение рекламы (1 мес)",
      "Финансовая аналитика + дашборд",
      "Юр. консультация + договоры",
    ],
    highlight: true,
  },
  {
    name: "«Контент-максимум»",
    forWho: "Блогер / бренд",
    price: "65 000 ₽",
    economy: "18%",
    icon: "Camera",
    includes: [
      "Нейрофотосессия (до 20 изображений)",
      "5 карточек инфографики",
      "Логотип + базовый брендбук",
      "Баннеры для соцсетей (10 шт.)",
      "Reels-ролик (1 шт.)",
    ],
    highlight: false,
  },
  {
    name: "«Юр.безопасность»",
    forWho: "ИП / ООО",
    price: "60 000 ₽",
    economy: "20%",
    icon: "ShieldCheck",
    includes: [
      "Регистрация ИП/ООО",
      "3 договора под задачу",
      "Анализ оферты маркетплейса",
      "Абонентское сопровождение (1 мес)",
      "Экспресс-консультация 2 раза",
    ],
    highlight: false,
  },
];

/* ─── Sub-components ──────────────────────────────── */
function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full min-w-[500px]">
        <thead>
          <tr style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}>
            <th className="text-left px-5 py-3 font-heading text-xs font-semibold text-white/90 w-1/2">Услуга</th>
            <th className="text-right px-5 py-3 font-heading text-xs font-semibold text-white/90 w-1/3">Стоимость</th>
            <th className="text-right px-5 py-3 font-heading text-xs font-semibold text-white/90 hidden sm:table-cell">Срок / период</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-t border-gray-50 hover:bg-blue-50/40 transition-colors"
              style={{ background: i % 2 === 0 ? "white" : "#FAFBFF" }}
            >
              <td className="px-5 py-3.5">
                <div className="font-body text-sm font-semibold text-gray-800">{row.service}</div>
                {row.desc && (
                  <div className="font-body text-xs text-gray-400 mt-0.5 leading-relaxed">{row.desc}</div>
                )}
              </td>
              <td className="px-5 py-3.5 text-right">
                <span
                  className="font-heading text-sm font-bold"
                  style={{ color: row.price === "Бесплатно" ? "#16A34A" : "#1E40AF" }}
                >
                  {row.price}
                </span>
              </td>
              <td className="px-5 py-3.5 text-right hidden sm:table-cell">
                <span className="font-body text-xs text-gray-400">{row.period}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PriceSectionBlock({
  title,
  icon,
  rows,
  delay = 0,
}: {
  title: string;
  icon: string;
  rows: PriceRow[];
  delay?: number;
}) {
  return (
    <Fade delay={delay}>
      <div className="mb-8">
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(30,64,175,0.1)", border: "1px solid rgba(30,64,175,0.18)" }}
          >
            <Icon name={icon} size={17} style={{ color: "#1E40AF" }} />
          </div>
          <h3 className="font-heading text-base font-bold text-gray-900">{title}</h3>
        </div>
        <PriceTable rows={rows} />
      </div>
    </Fade>
  );
}

/* ─── Main ────────────────────────────────────────── */
export default function PricingPage() {
  const [active, setActive] = useState<Section>("marketplace");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <PageHero
        badge="Прайс-лист"
        h1={
          <>
            Прозрачные цены на все <GradientText>услуги</GradientText>
          </>
        }
        sub="Все цены актуальны на 19 апреля 2026 г. Точная стоимость рассчитывается индивидуально после первичной консультации."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => setModalOpen(true)} className="btn-primary px-7 py-3 text-sm">
            Получить расчёт под задачу
          </button>
          <div className="flex items-center gap-2 text-sm font-body text-gray-500">
            <Icon name="Phone" size={14} style={{ color: "#06B6D4" }} />
            +7 (910) 774-76-33
          </div>
        </div>
      </PageHero>

      {/* Notice */}
      <div style={{ background: "rgba(6,182,212,0.06)", borderBottom: "1px solid rgba(6,182,212,0.15)" }}>
        <div className="container mx-auto px-5 py-3 flex flex-wrap items-center gap-4 text-xs font-body text-gray-500">
          <div className="flex items-center gap-1.5">
            <Icon name="Info" size={13} style={{ color: "#06B6D4" }} />
            Первая устная консультация — бесплатно (30 мин)
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="Check" size={13} style={{ color: "#06B6D4" }} />
            Льготы ветеранам, инвалидам и малоимущим
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="FileText" size={13} style={{ color: "#06B6D4" }} />
            Оплата по счёту, договор на каждую услугу
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="Shield" size={13} style={{ color: "#06B6D4" }} />
            Цены скорректированы с учётом НДС 2026 г.
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-5">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0"
                style={
                  active === tab.id
                    ? { background: "linear-gradient(135deg, #1E40AF, #06B6D4)", color: "white" }
                    : { color: "#4B5563", background: "transparent" }
                }
              >
                <Icon name={tab.icon} size={14} style={{ color: active === tab.id ? "white" : "#9CA3AF" }} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 py-12">

        {/* ── MARKETPLACE ── */}
        {active === "marketplace" && (
          <div>
            <Fade>
              <div className="flex items-center gap-3 mb-8">
                <div className="section-badge">Раздел 1</div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Услуги менеджера маркетплейсов
                </h2>
              </div>
              <p className="font-body text-sm text-gray-500 mb-8">
                Полное сопровождение продаж на Wildberries, Ozon, Яндекс.Маркет, AliExpress Russia
              </p>
            </Fade>
            {MP_SECTIONS.map((s, i) => (
              <PriceSectionBlock key={s.title} {...s} delay={i * 0.05} />
            ))}
          </div>
        )}

        {/* ── FINANCE ── */}
        {active === "finance" && (
          <div>
            <Fade>
              <div className="flex items-center gap-3 mb-8">
                <div className="section-badge">Раздел 2</div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Финансовый анализ и автоматизация
                </h2>
              </div>
            </Fade>
            {FINANCE_SECTIONS.map((s, i) => (
              <PriceSectionBlock key={s.title} {...s} delay={i * 0.07} />
            ))}

            {/* Expertise block */}
            <Fade delay={0.15}>
              <div className="rounded-2xl p-7 mt-6"
                style={{ background: "linear-gradient(135deg, rgba(30,64,175,0.06), rgba(6,182,212,0.06))", border: "1px solid rgba(30,64,175,0.12)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Crown" size={20} style={{ color: "#C8A165" }} />
                  <h3 className="font-heading text-base font-bold text-gray-900">
                    Финансовая экспертиза для собственника (Раздел 5)
                  </h3>
                </div>
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-4">
                  Тарифы Private, Insight, Scan, Recovery, Growth, System, Control, Report, Model,
                  Investor, Seller, SKU, Audit, Strategy, Budget, Launch, Cash, Policy, KPI, Pro, CFO,
                  Partner, Exit — от <strong>40 000 ₽</strong> до <strong>160 000 ₽+</strong>.
                  Цены и описания предоставляются по запросу на персональной консультации.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary px-6 py-2.5 text-sm"
                >
                  Запросить прайс на экспертизу
                </button>
              </div>
            </Fade>
          </div>
        )}

        {/* ── DESIGN ── */}
        {active === "design" && (
          <div>
            <Fade>
              <div className="flex items-center gap-3 mb-8">
                <div className="section-badge">Раздел 3</div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Дизайн и контент
                </h2>
              </div>
            </Fade>
            {DESIGN_SECTIONS.map((s, i) => (
              <PriceSectionBlock key={s.title} {...s} delay={i * 0.07} />
            ))}
          </div>
        )}

        {/* ── LEGAL ── */}
        {active === "legal" && (
          <div>
            <Fade>
              <div className="flex items-center gap-3 mb-4">
                <div className="section-badge">Раздел 4</div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Юридические услуги
                </h2>
              </div>
              <div className="rounded-xl p-4 mb-8 flex items-start gap-3"
                style={{ background: "#FFF9E6", border: "1px solid #FCD34D" }}>
                <Icon name="AlertTriangle" size={16} style={{ color: "#D97706" }} className="flex-shrink-0 mt-0.5" />
                <p className="font-body text-xs text-yellow-800 leading-relaxed">
                  <strong>Важно:</strong> Цены скорректированы с учётом налоговой реформы 2026 года (НДС 22%, порог 20 млн ₽).
                  Льготы ветеранам, инвалидам и малоимущим — консультации бесплатно.
                </p>
              </div>
            </Fade>
            {LEGAL_SECTIONS.map((s, i) => (
              <PriceSectionBlock key={s.title} {...s} delay={i * 0.07} />
            ))}
          </div>
        )}

        {/* ── PACKAGES ── */}
        {active === "packages" && (
          <div>
            <Fade>
              <div className="flex items-center gap-3 mb-4">
                <div className="section-badge">Раздел 6</div>
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Пакетные предложения «Всё в одном»
                </h2>
              </div>
              <p className="font-body text-sm text-gray-500 mb-8">
                Комплексные решения с экономией до 20% по сравнению с раздельным заказом услуг
              </p>
            </Fade>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PACKAGES.map((pkg, i) => (
                <Fade key={pkg.name} delay={i * 0.08}>
                  <div
                    className={`rounded-2xl p-7 h-full flex flex-col relative overflow-hidden ${pkg.highlight ? "" : "ic-card"}`}
                    style={
                      pkg.highlight
                        ? { background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }
                        : {}
                    }
                  >
                    {/* Economy badge */}
                    <div
                      className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-heading font-bold"
                      style={
                        pkg.highlight
                          ? { background: "rgba(255,255,255,0.2)", color: "white" }
                          : { background: "rgba(200,161,101,0.15)", color: "#C8A165", border: "1px solid rgba(200,161,101,0.3)" }
                      }
                    >
                      −{pkg.economy}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={
                          pkg.highlight
                            ? { background: "rgba(255,255,255,0.2)" }
                            : { background: "rgba(30,64,175,0.08)", border: "1px solid rgba(30,64,175,0.15)" }
                        }
                      >
                        <Icon name={pkg.icon} size={20} style={{ color: pkg.highlight ? "white" : "#1E40AF" }} />
                      </div>
                      <div>
                        <div className={`font-heading text-xs font-medium mb-0.5 ${pkg.highlight ? "text-white/70" : "text-gray-400"}`}>
                          {pkg.forWho}
                        </div>
                        <div className={`font-heading text-lg font-bold ${pkg.highlight ? "text-white" : "text-gray-900"}`}>
                          {pkg.name}
                        </div>
                      </div>
                    </div>

                    <div className={`font-heading text-3xl font-extrabold mb-5 ${pkg.highlight ? "text-white" : ""}`}
                      style={!pkg.highlight ? { color: "#1E40AF" } : {}}>
                      {pkg.price}
                    </div>

                    <ul className="space-y-2 flex-1 mb-6">
                      {pkg.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Icon
                            name="Check"
                            size={13}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: pkg.highlight ? "rgba(255,255,255,0.9)" : "#06B6D4" }}
                          />
                          <span className={`font-body text-sm ${pkg.highlight ? "text-white/85" : "text-gray-600"}`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setModalOpen(true)}
                      className={pkg.highlight ? "btn-white px-6 py-2.5 text-sm self-start" : "btn-primary px-6 py-2.5 text-sm self-start"}
                    >
                      Заказать пакет
                    </button>
                  </div>
                </Fade>
              ))}
            </div>

            {/* Custom offer */}
            <Fade delay={0.35}>
              <div className="mt-8 rounded-2xl p-8 text-center"
                style={{ background: "#F8FAFF", border: "2px dashed rgba(30,64,175,0.2)" }}>
                <Icon name="Sliders" size={32} style={{ color: "#06B6D4" }} className="mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  Нужен индивидуальный пакет?
                </h3>
                <p className="font-body text-sm text-gray-500 mb-5 max-w-md mx-auto">
                  Соберём комплекс услуг под ваши задачи и рассчитаем стоимость с учётом скидки.
                </p>
                <button onClick={() => setModalOpen(true)} className="btn-primary px-8 py-3 text-sm">
                  Получить персональное КП
                </button>
              </div>
            </Fade>
          </div>
        )}

        {/* CTA */}
        <Fade delay={0.2}>
          <div
            className="mt-14 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, #1E40AF 0%, #0891B2 100%)" }}
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-1">
                Не знаете, что выбрать?
              </h3>
              <p className="font-body text-sm text-white/75">
                Запишитесь на бесплатную 30-минутную консультацию — подберём оптимальное решение
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button onClick={() => setModalOpen(true)} className="btn-white px-7 py-3 text-sm">
                Бесплатная консультация
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
