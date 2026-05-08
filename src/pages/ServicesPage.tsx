import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const packages = [
  {
    title: "Диагностика и стратегия",
    price: "от 35 000 ₽",
    items: [
      "Аудит текущего состояния бизнеса",
      "Анализ конкурентов и рынка",
      "Разработка стратегии роста",
      "Дорожная карта внедрения",
      "Сессия-разбор с экспертом (2 ч)",
    ],
    btn: "Заказать аудит",
    highlighted: false,
    task: "Финансовая аналитика",
  },
  {
    title: "Автоматизация и цифровая среда",
    price: "от 250 000 ₽",
    items: [
      "Разработка сайта или лендинга",
      "Внедрение CRM и чат-ботов",
      "Интеграции API маркетплейсов",
      "Автоматизация складского учёта",
      "Обучение команды и поддержка",
    ],
    btn: "Рассчитать проект",
    highlighted: true,
    task: "Автоматизация",
  },
  {
    title: "Упаковка бренда и контента",
    price: "от 85 000 ₽",
    items: [
      "Разработка фирменного стиля",
      "Нейрофотосессии и инфографика",
      "Контент для маркетплейсов",
      "Дизайн соцсетей и сайта",
      "Видео и анимация для карточек",
    ],
    btn: "Обновить визуал",
    highlighted: false,
    task: "AI-дизайн",
  },
];

const directions = [
  {
    icon: "ShoppingCart",
    title: "Менеджмент маркетплейсов",
    desc: "Полное сопровождение на WB, Ozon, Яндекс.Маркет",
    path: "/uslugi/menedzhment-marketpleysov",
  },
  {
    icon: "BarChart2",
    title: "Финансовая аналитика",
    desc: "Юнит-экономика, P&L, cashflow в реальном времени",
    path: "/uslugi/finansovaya-analitika",
  },
  {
    icon: "Zap",
    title: "Автоматизация бизнеса",
    desc: "Сайты, CRM, чат-боты, интеграции API",
    path: "/uslugi/avtomatizatsiya-biznesa",
  },
  {
    icon: "Sparkles",
    title: "AI-дизайн и упаковка",
    desc: "Нейрофотосессии, инфографика, айдентика",
    path: "/uslugi/ai-dizayn-uslugi",
  },
  {
    icon: "Scale",
    title: "Юридические услуги",
    desc: "Консультации, документы, правовая защита бизнеса",
    path: "/uslugi/yuridicheskie-uslugi",
  },
];

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultTask, setDefaultTask] = useState("");
  const navigate = useNavigate();

  const openModal = (task = "") => {
    setDefaultTask(task);
    setModalOpen(true);
  };

  return (
    <>
      <PageHero
        badge="Наши услуги"
        h1={
          <>
            Решения для роста <GradientText>вашего бизнеса</GradientText>
          </>
        }
        sub="Выберите направление или получите персональное предложение. Работаем онлайн по России и за рубежом. Всё официально — договор, оплата по счёту, прозрачные этапы."
      />

      {/* Пакеты услуг */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-6xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Пакеты услуг
              </h2>
              <p className="font-body text-gray-500 max-w-xl mx-auto">
                Готовые решения под разные задачи и бюджеты
              </p>
            </div>
          </Fade>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <Fade key={pkg.title} delay={i * 0.1}>
                <div
                  className={
                    pkg.highlighted
                      ? "ic-gradient rounded-2xl p-px"
                      : ""
                  }
                >
                  <div
                    className={`rounded-2xl p-8 h-full flex flex-col ${
                      pkg.highlighted
                        ? "ic-gradient text-white"
                        : "ic-card"
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="mb-3">
                        <span
                          className="text-xs font-heading font-semibold px-3 py-1 rounded-full"
                          style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                        >
                          Популярный выбор
                        </span>
                      </div>
                    )}
                    <h3
                      className="font-heading text-xl font-bold mb-2"
                      style={{ color: pkg.highlighted ? "white" : "#111827" }}
                    >
                      {pkg.title}
                    </h3>
                    <div
                      className="text-3xl font-heading font-extrabold mb-6"
                      style={{ color: pkg.highlighted ? "white" : "#1E40AF" }}
                    >
                      {pkg.price}
                    </div>
                    <ul className="space-y-3 flex-1 mb-8">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Icon
                            name="Check"
                            size={18}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: pkg.highlighted ? "white" : "#06B6D4" }}
                          />
                          <span
                            className="font-body text-sm leading-relaxed"
                            style={{ color: pkg.highlighted ? "rgba(255,255,255,0.9)" : "#374151" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => openModal(pkg.task)}
                      className={pkg.highlighted ? "btn-white px-6 py-3 text-sm w-full" : "btn-primary px-6 py-3 text-sm w-full"}
                    >
                      {pkg.btn}
                    </button>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Юридическая защита */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <div
              className="ic-card p-10 text-center"
              style={{
                background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDFF 100%)",
                border: "1.5px solid rgba(30,64,175,0.15)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
              >
                <Icon name="Scale" size={26} className="text-white" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Юридическая защита бизнеса на маркетплейсах
              </h2>
              <p className="font-body text-gray-500 mb-7 max-w-xl mx-auto leading-relaxed">
                Консультации по договорам, оффертам, защите бренда и работе с маркетплейсами.
                Помогаем избежать рисков до того, как они стали проблемой.
              </p>
              <button
                onClick={() => navigate("/uslugi/yuridicheskie-uslugi")}
                className="btn-primary px-8 py-3.5 text-sm"
              >
                Узнать подробнее
              </button>
            </div>
          </Fade>
        </div>
      </section>

      {/* Направления */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-6xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Все направления
              </h2>
              <p className="font-body text-gray-500 max-w-xl mx-auto">
                Нажмите на направление, чтобы узнать подробнее
              </p>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((d, i) => (
              <Fade key={d.path} delay={i * 0.08}>
                <button
                  onClick={() => navigate(d.path)}
                  className="ic-card p-7 text-left w-full group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, #EFF6FF, #F0FDFF)", border: "1px solid rgba(6,182,212,0.2)" }}
                  >
                    <Icon name={d.icon} size={22} style={{ color: "#1E40AF" }} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {d.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{d.desc}</p>
                  <div className="flex items-center gap-1 mt-4" style={{ color: "#06B6D4" }}>
                    <span className="text-xs font-heading font-semibold">Подробнее</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </button>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #0F172A 0%, #1E3A8A 60%, #0C1F6B 100%)" }}
      >
        <div className="absolute inset-0 pixel-bg opacity-25" />
        <div className="container mx-auto px-5 max-w-3xl relative z-10 text-center">
          <Fade>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
              Не знаете, с чего начать?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              Оставьте заявку — эксперт проведёт бесплатную диагностику и предложит оптимальное решение.
            </p>
            <button
              onClick={() => openModal()}
              className="btn-white px-10 py-4 text-base"
            >
              Получить персональное предложение
            </button>
          </Fade>
        </div>
      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} defaultTask={defaultTask} />
    </>
  );
}
