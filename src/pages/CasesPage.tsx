import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

type CaseCategory =
  | "Все"
  | "Разработка сайтов"
  | "Автоматизация"
  | "Маркетплейсы"
  | "AI и Контент"
  | "Юридические услуги"
  | "Гибридный бот";

const FILTERS: CaseCategory[] = [
  "Все",
  "Разработка сайтов",
  "Автоматизация",
  "Маркетплейсы",
  "AI и Контент",
  "Юридические услуги",
  "Гибридный бот",
];

interface CaseItem {
  slug: string;
  title: string;
  client: string;
  category: Exclude<CaseCategory, "Все">;
  metrics: { label: string; value: string }[];
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}

const CASES: CaseItem[] = [
  {
    slug: "wildberries-rost-prodazh",
    title: "+150% к продажам на Wildberries",
    client: "Бренд одежды, оборот 5 млн ₽/мес",
    category: "Маркетплейсы",
    metrics: [
      { label: "Рост продаж", value: "+150%" },
      { label: "Срок", value: "3 мес" },
      { label: "Маржа", value: "+22 п.п." },
    ],
    icon: "ShoppingBag",
    gradientFrom: "#1E40AF",
    gradientTo: "#06B6D4",
  },
  {
    slug: "avtomatizatsiya-voronki",
    title: "Автоматизация воронки: −40% ручного труда",
    client: "Розничный магазин, 12 сотрудников",
    category: "Автоматизация",
    metrics: [
      { label: "Экономия времени", value: "−40%" },
      { label: "Конверсия", value: "+18%" },
      { label: "ROI", value: "310%" },
    ],
    icon: "Zap",
    gradientFrom: "#7C3AED",
    gradientTo: "#06B6D4",
  },
  {
    slug: "sayt-crm-klinika",
    title: "Сайт + CRM за 3 недели",
    client: "Медицинская клиника, г. Москва",
    category: "Разработка сайтов",
    metrics: [
      { label: "Срок разработки", value: "21 день" },
      { label: "Лидов/мес", value: "+85" },
      { label: "Конверсия", value: "7.2%" },
    ],
    icon: "Globe",
    gradientFrom: "#0891B2",
    gradientTo: "#6366F1",
  },
  {
    slug: "nejrofotosessiya-ctr",
    title: "Нейрофотосессия: +35% CTR карточек",
    client: "Бренд косметики, Ozon Top-100",
    category: "AI и Контент",
    metrics: [
      { label: "CTR карточек", value: "+35%" },
      { label: "Стоимость", value: "−68%" },
      { label: "Время", value: "2 дня" },
    ],
    icon: "Sparkles",
    gradientFrom: "#EC4899",
    gradientTo: "#F59E0B",
  },
  {
    slug: "shtraf-wildberries",
    title: "Оспорили штраф 180 000 ₽ на WB",
    client: "Производитель мебели, ИП",
    category: "Юридические услуги",
    metrics: [
      { label: "Возврат", value: "180 000 ₽" },
      { label: "Срок", value: "12 дней" },
      { label: "Документов", value: "7 шт" },
    ],
    icon: "Scale",
    gradientFrom: "#059669",
    gradientTo: "#06B6D4",
  },
  {
    slug: "finansovaya-analitika-poteri",
    title: "Финансовая аналитика: нашли 900 000 ₽ потерь",
    client: "Дистрибьютор FMCG, 3 маркетплейса",
    category: "Автоматизация",
    metrics: [
      { label: "Выявлено потерь", value: "900 000 ₽" },
      { label: "Рост маржи", value: "+14 п.п." },
      { label: "Дашборды", value: "5 шт" },
    ],
    icon: "BarChart2",
    gradientFrom: "#1E40AF",
    gradientTo: "#7C3AED",
  },
];

export default function CasesPage() {
  const [activeFilter, setActiveFilter] = useState<CaseCategory>("Все");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const filtered =
    activeFilter === "Все"
      ? CASES
      : CASES.filter((c) => c.category === activeFilter);

  return (
    <>
      <PageHero
        badge="Результаты"
        h1={
          <>
            Результаты наших <GradientText>партнёров</GradientText>
          </>
        }
        sub="Реальные кейсы с цифрами. Смотрите, как мы помогаем бизнесу расти."
      />

      {/* Фильтры */}
      <section className="py-10" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-6xl">
          <Fade>
            <div className="flex flex-wrap gap-2 justify-center">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className="px-5 py-2 rounded-full font-heading text-xs font-semibold transition-all duration-200"
                    style={
                      isActive
                        ? {
                            background: "linear-gradient(135deg, #1E40AF 0%, #06B6D4 100%)",
                            color: "white",
                            boxShadow: "0 4px 14px rgba(30,64,175,0.3)",
                            border: "none",
                          }
                        : {
                            background: "white",
                            color: "#4B5563",
                            border: "1.5px solid #E5E7EB",
                          }
                    }
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </Fade>
        </div>
      </section>

      {/* Кейсы */}
      <section className="py-16" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((c, i) => (
              <Fade key={c.slug} delay={i * 0.07}>
                <div className="ic-card flex flex-col overflow-hidden h-full">
                  {/* Обложка */}
                  <div
                    className="h-36 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${c.gradientFrom} 0%, ${c.gradientTo} 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 pixel-bg opacity-20" />
                    <Icon name={c.icon} size={48} className="text-white opacity-80" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag-chip">{c.category}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-1 leading-tight">
                      {c.title}
                    </h3>
                    <p className="font-body text-xs text-gray-400 mb-5">{c.client}</p>

                    {/* Метрики */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {c.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg p-2 text-center"
                          style={{ background: "#F0FDFF", border: "1px solid rgba(6,182,212,0.15)" }}
                        >
                          <div
                            className="font-heading text-base font-extrabold leading-tight"
                            style={{ color: "#1E40AF" }}
                          >
                            {m.value}
                          </div>
                          <div className="font-body text-[10px] text-gray-400 mt-0.5 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => navigate(`/keisy/${c.slug}`)}
                      className="btn-outline px-4 py-2.5 text-sm mt-auto w-full flex items-center justify-center gap-2"
                    >
                      Читать кейс
                      <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {filtered.length === 0 && (
            <Fade>
              <div className="text-center py-20 text-gray-400 font-body">
                По этой категории кейсов пока нет. Скоро добавим!
              </div>
            </Fade>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #0F172A 0%, #1E3A8A 60%, #0C1F6B 100%)",
        }}
      >
        <div className="absolute inset-0 pixel-bg opacity-25" />
        <div className="container mx-auto px-5 max-w-2xl relative z-10 text-center">
          <Fade>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
              Хотите стать следующим кейсом?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Расскажите о задаче — предложим решение и покажем, каких результатов реально достичь.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Обсудить мой проект
            </button>
          </Fade>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="Другое"
      />
    </>
  );
}
