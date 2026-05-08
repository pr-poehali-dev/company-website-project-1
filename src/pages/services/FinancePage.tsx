import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const services = [
  {
    icon: "Calculator",
    title: "Юнит-экономика",
    desc: "Считаем маржинальность по каждому SKU с учётом комиссий, логистики и рекламы. Понимаете реальную прибыль по каждому товару.",
  },
  {
    icon: "FileText",
    title: "P&L (Отчёт о прибылях и убытках)",
    desc: "Регулярная подготовка управленческого P&L: доходы, расходы, EBITDA. Видите финансовую картину бизнеса целиком.",
  },
  {
    icon: "Waves",
    title: "Cashflow (Движение денежных средств)",
    desc: "Прогноз и контроль денежных потоков. Предотвращаем кассовые разрывы и помогаем планировать закупки.",
  },
  {
    icon: "BarChart3",
    title: "Дашборды и визуализация",
    desc: "Интерактивные дашборды в Google Data Studio, Power BI или Tableau. Все цифры в одном месте, доступно 24/7.",
  },
  {
    icon: "Search",
    title: "Аудит финансовой модели",
    desc: "Находим точки потерь и роста: где теряете деньги, как оптимизировать структуру затрат и увеличить рентабельность.",
  },
];

const forWhom = [
  "Не понимаете, почему выручка растёт, а денег нет",
  "Принимаете решения по ощущениям, а не по цифрам",
  "Хотите привлечь инвестора и нужна прозрачная отчётность",
  "Готовитесь к масштабированию и нужна финансовая модель",
];

const results = [
  {
    icon: "TrendingUp",
    title: "Ясность по каждому товару",
    desc: "Видите, какие SKU зарабатывают, а какие тянут назад",
  },
  {
    icon: "ShieldCheck",
    title: "Нет кассовых разрывов",
    desc: "Cashflow под контролем, деньги есть на закупки и рекламу",
  },
  {
    icon: "Target",
    title: "Точные решения",
    desc: "Каждое управленческое решение опирается на реальные данные",
  },
  {
    icon: "BarChart2",
    title: "Рост рентабельности",
    desc: "Средний рост чистой прибыли +15–35% за счёт оптимизации затрат",
  },
];

export default function FinancePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        badge="Финансы"
        h1={
          <>
            Финансовый учёт и аналитика{" "}
            <GradientText>для e-commerce</GradientText>
          </>
        }
        sub="Юнит-экономика, P&L, cashflow — в реальном времени. Принимайте решения на основе цифр, а не догадок."
      />

      {/* Услуги */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Что входит в финансовое сопровождение
              </h2>
              <p className="font-body text-gray-500">
                Полный спектр финансового учёта для e-commerce бизнеса
              </p>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Fade key={s.title} delay={i * 0.09}>
                <div className="ic-card p-7">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, #EFF6FF, #F0FDFF)", border: "1px solid rgba(6,182,212,0.2)" }}
                  >
                    <Icon name={s.icon} size={22} style={{ color: "#1E40AF" }} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Это решение для вас, если:
              </h2>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 gap-5">
            {forWhom.map((item, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div className="ic-card p-6 flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(34,197,94,0.12)" }}
                  >
                    <Icon name="Check" size={16} style={{ color: "#16A34A" }} />
                  </div>
                  <p className="font-body text-gray-700 leading-relaxed">{item}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Результаты */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Что изменится после внедрения
              </h2>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <Fade key={r.title} delay={i * 0.1}>
                <div className="ic-card p-7 text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                  >
                    <Icon name={r.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2">{r.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
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
        <div className="container mx-auto px-5 max-w-2xl relative z-10 text-center">
          <Fade>
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
              Узнайте, где вы теряете деньги
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              Закажите аудит финансовой модели — найдём точки потерь и дадим конкретные рекомендации.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Заказать аудит финансовой модели
            </button>
          </Fade>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="Финансовая аналитика"
      />
    </>
  );
}
