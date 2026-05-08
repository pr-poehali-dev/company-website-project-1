import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const services = [
  {
    icon: "LayoutGrid",
    title: "Создание и оптимизация карточек",
    desc: "SEO-заголовки, Rich-контент, инфографика. Карточки, которые видят и покупают.",
  },
  {
    icon: "TrendingUp",
    title: "Аналитика продаж и конкурентов",
    desc: "Мониторинг позиций, анализ спроса и конкурентного окружения, отчёты в реальном времени.",
  },
  {
    icon: "Megaphone",
    title: "Продвижение и реклама",
    desc: "Внутренняя реклама WB и Ozon, внешний трафик, управление ставками и бюджетом.",
  },
  {
    icon: "Package",
    title: "Логистика и склад",
    desc: "Управление остатками, FBO/FBS, поставки, минимизация штрафов за нехватку товара.",
  },
  {
    icon: "Cpu",
    title: "Автоматизация процессов",
    desc: "Интеграция с 1С, МойСклад, автоматическое обновление цен и остатков.",
  },
];

const forWhom = [
  "Вы уже продаёте на маркетплейсах, но рост остановился",
  "Хотите выйти на новую площадку и не допустить ошибок",
  "Тратите много времени на рутинные операции",
  "Не понимаете, почему падают продажи или снижается рейтинг",
];

const results = [
  {
    icon: "TrendingUp",
    title: "Рост выручки",
    desc: "Средний рост продаж +40–120% за первые 3 месяца работы",
  },
  {
    icon: "Clock",
    title: "Экономия времени",
    desc: "До 20 часов в неделю освобождаете от рутинных задач",
  },
  {
    icon: "Star",
    title: "Лучший рейтинг",
    desc: "Карточки в топе выдачи, выше конверсия в покупку",
  },
  {
    icon: "ShieldCheck",
    title: "Прозрачная отчётность",
    desc: "Понятные дашборды: что продаётся, сколько зарабатываете, где теряете",
  },
];

export default function MarketplacePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        badge="Маркетплейсы"
        h1={
          <>
            Профессиональное сопровождение{" "}
            <GradientText>на маркетплейсах</GradientText>
          </>
        }
        sub="От создания карточек до аналитики продаж. Возьмём на себя рутину, чтобы вы фокусировались на росте."
      />

      {/* Полный цикл */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Полный цикл работы
              </h2>
              <p className="font-body text-gray-500">
                Берём на себя все процессы — от создания карточки до аналитики
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
                Что вы получите через 1–3 месяца
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
              Готовы к росту продаж?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              Оставьте заявку — составим персональный план продвижения на маркетплейсах.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Получить план продвижения
            </button>
          </Fade>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="Менеджмент МП"
      />
    </>
  );
}
