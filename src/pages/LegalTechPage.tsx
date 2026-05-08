import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const features = [
  {
    icon: "MessageSquare",
    title: "Первичная диагностика",
    desc: "Опишите ситуацию — бот задаст уточняющие вопросы и сформирует первичный правовой анализ. Понимаете, насколько серьёзна проблема, за секунды.",
  },
  {
    icon: "FileText",
    title: "Генерация документов",
    desc: "Более 150 шаблонов: договоры, претензии, согласия на обработку данных, NDA. Заполняете за 2 минуты по подсказкам бота.",
  },
  {
    icon: "Search",
    title: "Проверка контрагентов",
    desc: "Мгновенная проверка ИНН/ОГРН через открытые реестры. Узнаёте о долгах, банкротстве и судебных делах до подписания договора.",
  },
  {
    icon: "BookOpen",
    title: "База знаний по маркетплейсам",
    desc: "Актуальные ответы на вопросы о правилах WB, Ozon, Яндекс.Маркет. Разборы типичных ситуаций, штрафов и блокировок.",
  },
];

const howSteps = [
  {
    num: "1",
    title: "Подключаетесь к боту",
    desc: "Запускаете бота в Telegram, WhatsApp или ВКонтакте. Регистрация — 30 секунд.",
  },
  {
    num: "2",
    title: "Задаёте вопрос",
    desc: "Пишете своими словами. Бот понимает контекст и уточняет детали при необходимости.",
  },
  {
    num: "3",
    title: "Получаете ответ или документ",
    desc: "Первичный анализ — мгновенно. Документ по шаблону — за 2–3 минуты.",
  },
  {
    num: "4",
    title: "При необходимости — к юристу",
    desc: "Если ситуация требует экспертного взгляда, бот направит к специалисту IC Group.",
  },
];

const plans = [
  {
    title: "Старт",
    price: "990 ₽/мес",
    items: [
      "50 запросов в месяц",
      "Базовые шаблоны документов",
      "Проверка контрагентов (5/мес)",
      "Telegram",
    ],
    highlighted: false,
    btn: "Начать бесплатно",
  },
  {
    title: "Бизнес",
    price: "2 990 ₽/мес",
    items: [
      "Безлимитные запросы",
      "Все премиум-шаблоны (150+)",
      "Проверка контрагентов (50/мес)",
      "Telegram, WhatsApp, ВКонтакте",
    ],
    highlighted: true,
    btn: "Выбрать тариф",
  },
  {
    title: "Профи",
    price: "9 990 ₽/мес",
    items: [
      "Всё из тарифа Бизнес",
      "Безлимитная проверка контрагентов",
      "Персональный юрист (2 ч/мес)",
      "Приоритетная поддержка 24/7",
    ],
    highlighted: false,
    btn: "Выбрать тариф",
  },
];

export default function LegalTechPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        dark
        badge="AI-продукт"
        h1="Ваш личный юрист 24/7 в кармане"
        sub="ИИ-бот для первичной диагностики, генерации документов и проверки контрагентов. Доступен в Telegram, WhatsApp и ВКонтакте."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="tag-chip" style={{ background: "rgba(6,182,212,0.15)", color: "#67E8F9", border: "1px solid rgba(6,182,212,0.35)" }}>
            Telegram
          </span>
          <span className="tag-chip" style={{ background: "rgba(6,182,212,0.15)", color: "#67E8F9", border: "1px solid rgba(6,182,212,0.35)" }}>
            WhatsApp
          </span>
          <span className="tag-chip" style={{ background: "rgba(6,182,212,0.15)", color: "#67E8F9", border: "1px solid rgba(6,182,212,0.35)" }}>
            ВКонтакте
          </span>
        </div>
      </PageHero>

      {/* Функции */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Что умеет <GradientText>LegalTech-бот</GradientText>
              </h2>
              <p className="font-body text-gray-500">
                Искусственный интеллект + юридическая база знаний = доступная правовая помощь
              </p>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <Fade key={f.title} delay={i * 0.1}>
                <div className="ic-card p-8 flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                  >
                    <Icon name={f.icon} size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Как это работает
              </h2>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 gap-6">
            {howSteps.map((step, i) => (
              <Fade key={step.num} delay={i * 0.1}>
                <div className="ic-card p-7 flex items-start gap-5">
                  <div className="guarantee-num flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Тарифы
              </h2>
              <p className="font-body text-gray-500">Без скрытых платежей. Отменить можно в любой момент.</p>
            </div>
          </Fade>
          <div className="grid md:grid-cols-3 gap-7">
            {plans.map((plan, i) => (
              <Fade key={plan.title} delay={i * 0.1}>
                <div
                  className={plan.highlighted ? "ic-gradient rounded-2xl p-px" : ""}
                >
                  <div
                    className={`rounded-2xl p-8 h-full flex flex-col ${
                      plan.highlighted ? "ic-gradient text-white" : "ic-card"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="mb-3">
                        <span
                          className="text-xs font-heading font-semibold px-3 py-1 rounded-full"
                          style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                        >
                          Лучший выбор
                        </span>
                      </div>
                    )}
                    <h3
                      className="font-heading text-xl font-bold mb-2"
                      style={{ color: plan.highlighted ? "white" : "#111827" }}
                    >
                      {plan.title}
                    </h3>
                    <div
                      className="text-3xl font-heading font-extrabold mb-6"
                      style={{ color: plan.highlighted ? "white" : "#1E40AF" }}
                    >
                      {plan.price}
                    </div>
                    <ul className="space-y-3 flex-1 mb-8">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Icon
                            name="Check"
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: plan.highlighted ? "white" : "#06B6D4" }}
                          />
                          <span
                            className="font-body text-sm"
                            style={{ color: plan.highlighted ? "rgba(255,255,255,0.9)" : "#374151" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setModalOpen(true)}
                      className={plan.highlighted ? "btn-white px-6 py-3 text-sm w-full" : "btn-outline px-6 py-3 text-sm w-full"}
                    >
                      {plan.btn}
                    </button>
                  </div>
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
              Попробуйте прямо сейчас
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              Запустите демо-бота бесплатно и убедитесь в удобстве на практике.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Запустить демо-бота
            </button>
          </Fade>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="LegalTech"
      />
    </>
  );
}
