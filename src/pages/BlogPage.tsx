import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

type BlogCategory =
  | "Все"
  | "Разработка и IT"
  | "Автоматизация"
  | "AI в бизнесе"
  | "Маркетплейсы"
  | "Финансы"
  | "Брендинг"
  | "Юридические вопросы";

const FILTERS: BlogCategory[] = [
  "Все",
  "Разработка и IT",
  "Автоматизация",
  "AI в бизнесе",
  "Маркетплейсы",
  "Финансы",
  "Брендинг",
  "Юридические вопросы",
];

interface Article {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, "Все">;
  date: string;
  readTime: string;
  lead: string;
  gradientFrom: string;
  gradientTo: string;
  icon: string;
}

const ARTICLES: Article[] = [
  {
    slug: "kak-osporit-shtraf-wildberries-2026",
    title: "Как оспорить штраф на Wildberries в 2026 году?",
    category: "Юридические вопросы",
    date: "12 апр 2026",
    readTime: "5 мин",
    lead: "Пошаговое руководство: от составления претензии до официального обращения в службу поддержки маркетплейса.",
    gradientFrom: "#059669",
    gradientTo: "#06B6D4",
    icon: "Scale",
  },
  {
    slug: "yuniyt-ekonomika-seller",
    title: "Юнит-экономика для селлера: считаем прибыль правильно",
    category: "Финансы",
    date: "5 апр 2026",
    readTime: "7 мин",
    lead: "Формула расчёта реальной прибыли с учётом комиссий, логистики, возвратов и рекламных расходов.",
    gradientFrom: "#1E40AF",
    gradientTo: "#7C3AED",
    icon: "Calculator",
  },
  {
    slug: "avtomatizatsiya-otchetov",
    title: "Автоматизация отчётов: как сэкономить 20 часов в неделю",
    category: "Автоматизация",
    date: "28 мар 2026",
    readTime: "6 мин",
    lead: "Инструменты и подходы, которые позволяют получать ключевые отчёты автоматически без Excel и ручного копирования.",
    gradientFrom: "#7C3AED",
    gradientTo: "#06B6D4",
    icon: "Zap",
  },
  {
    slug: "nejrofotosessiya-marketplejsy",
    title: "Нейрофотосессия для маркетплейса: 5 кейсов",
    category: "AI в бизнесе",
    date: "20 мар 2026",
    readTime: "4 мин",
    lead: "Реальные примеры того, как AI-генерация изображений повышает CTR карточек на 25–45% при стоимости в 5 раз ниже студийной съёмки.",
    gradientFrom: "#EC4899",
    gradientTo: "#F59E0B",
    icon: "Sparkles",
  },
  {
    slug: "okved-torgovlya-marketplejsy",
    title: "Как выбрать ОКВЭД для торговли на маркетплейсах",
    category: "Юридические вопросы",
    date: "15 мар 2026",
    readTime: "5 мин",
    lead: "Какие коды ОКВЭД выбрать ИП и ООО при регистрации для продаж на WB, Ozon и Яндекс.Маркет — разбираем по шагам.",
    gradientFrom: "#0891B2",
    gradientTo: "#1E40AF",
    icon: "FileText",
  },
  {
    slug: "crm-amocrm-vs-bitrix24",
    title: "CRM для малого бизнеса: сравниваем amoCRM и Bitrix24",
    category: "Разработка и IT",
    date: "10 мар 2026",
    readTime: "8 мин",
    lead: "Честное сравнение двух популярных CRM-систем: цена, функциональность, интеграции и подводные камни для малого бизнеса.",
    gradientFrom: "#1E40AF",
    gradientTo: "#06B6D4",
    icon: "Layers",
  },
];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<BlogCategory>("Все");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const filtered =
    activeFilter === "Все"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeFilter);

  return (
    <>
      <PageHero
        badge="Блог"
        h1={
          <>
            Блог <GradientText>Интеллект Консалтинг</GradientText>
          </>
        }
        sub="Практические статьи о маркетплейсах, автоматизации, финансах и юридической защите бизнеса."
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
                            background:
                              "linear-gradient(135deg, #1E40AF 0%, #06B6D4 100%)",
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

      {/* Статьи */}
      <section className="py-16" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((a, i) => (
              <Fade key={a.slug} delay={i * 0.07}>
                <div className="ic-card flex flex-col overflow-hidden h-full">
                  {/* Обложка */}
                  <div
                    className="h-40 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${a.gradientFrom} 0%, ${a.gradientTo} 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 pixel-bg opacity-20" />
                    <Icon name={a.icon} size={48} className="text-white opacity-80" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Мета */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="tag-chip">{a.category}</span>
                      <div
                        className="flex items-center gap-1 font-body text-xs"
                        style={{ color: "#9CA3AF" }}
                      >
                        <Icon name="Clock" size={12} />
                        {a.readTime}
                      </div>
                    </div>
                    <p className="font-body text-xs text-gray-400 mb-2">{a.date}</p>
                    <h3 className="font-heading text-base font-bold text-gray-900 leading-snug mb-3">
                      {a.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                      {a.lead}
                    </p>
                    <button
                      onClick={() => navigate(`/blog/${a.slug}`)}
                      className="btn-outline px-4 py-2.5 text-sm w-full flex items-center justify-center gap-2 mt-auto"
                    >
                      Читать статью
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
                По этой теме статей пока нет. Скоро добавим!
              </div>
            </Fade>
          )}
        </div>
      </section>

      {/* Подписка / CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #0F172A 0%, #1E3A8A 60%, #0C1F6B 100%)",
        }}
      >
        <div className="absolute inset-0 pixel-bg opacity-25" />
        <div className="container mx-auto px-5 max-w-2xl relative z-10 text-center">
          <Fade>
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
              Хотите получать новые статьи первыми?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Оставьте заявку — будем присылать полезные материалы в мессенджер раз в неделю.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Подписаться на рассылку
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
