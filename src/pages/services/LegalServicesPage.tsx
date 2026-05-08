import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const consultations = [
  {
    icon: "MessageCircle",
    title: "Экспресс-консультация",
    price: "от 3 000 ₽",
    desc: "Ответ на конкретный юридический вопрос. Онлайн или по телефону, до 60 минут.",
  },
  {
    icon: "FileSearch",
    title: "Анализ договора / оферты",
    price: "от 7 000 ₽",
    desc: "Проверяем оферту маркетплейса, договор с поставщиком или партнёром. Выявляем риски и невыгодные условия.",
  },
  {
    icon: "FilePlus",
    title: "Подготовка документов",
    price: "от 10 000 ₽",
    desc: "Составляем договоры, агентские соглашения, NDA, политику конфиденциальности и пользовательские соглашения.",
  },
  {
    icon: "ShieldCheck",
    title: "Правовой аудит аккаунта",
    price: "от 15 000 ₽",
    desc: "Комплексная проверка вашей работы на маркетплейсе: документы, маркировка, соответствие требованиям площадки.",
  },
  {
    icon: "Rocket",
    title: "Сопровождение на старте",
    price: "от 25 000 ₽",
    desc: "Юридическая поддержка при регистрации бизнеса, выборе системы налогообложения и первичной настройке документооборота.",
  },
  {
    icon: "RefreshCw",
    title: "Абонентская поддержка",
    price: "от 20 000 ₽/мес",
    desc: "Регулярные консультации, проверка документов, мониторинг изменений законодательства для вашей сферы.",
  },
];

const risks = [
  {
    risk: "Блокировка карточки или аккаунта",
    help: "Консультация по правилам площадки, помощь с подготовкой апелляции и комплекта документов",
  },
  {
    risk: "Штрафы и нарушения от маркетплейса",
    help: "Анализ основания штрафа, консультация по порядку оспаривания через официальные каналы",
  },
  {
    risk: "Споры с поставщиками",
    help: "Анализ договора, консультация по претензионному порядку, помощь с составлением претензии",
  },
  {
    risk: "Налоговые вопросы e-commerce",
    help: "Консультация по режимам налогообложения, НДС, работе с самозанятыми и ИП",
  },
  {
    risk: "Защита товарного знака и бренда",
    help: "Консультация по регистрации товарного знака, защите от контрафакта и нарушений интеллектуальных прав",
  },
];

const steps = [
  {
    num: "1",
    title: "Оставляете заявку",
    desc: "Заполняете форму или пишете в мессенджер. Описываете вопрос или прикладываете документ.",
  },
  {
    num: "2",
    title: "Предварительная оценка",
    desc: "В течение 2 часов в рабочее время уточняем детали и согласовываем стоимость.",
  },
  {
    num: "3",
    title: "Оплата и назначение консультации",
    desc: "Оплата по счёту или картой. Назначаем время — онлайн, по телефону или в чате.",
  },
  {
    num: "4",
    title: "Консультация или подготовка документа",
    desc: "Отвечаем на вопросы, разбираем ситуацию, готовим документ или заключение.",
  },
  {
    num: "5",
    title: "Рекомендации и поддержка",
    desc: "Выдаём письменные рекомендации. При необходимости — сопровождение на следующих этапах.",
  },
];

const faqItems = [
  {
    q: "Вы ведёте судебные дела?",
    a: "Нет. Мы предоставляем исключительно консультационные услуги: анализ ситуации, подготовка документов, разъяснение правовых норм. Представительство в судах и арбитражных органах не входит в перечень наших услуг.",
  },
  {
    q: "Насколько быстро можно получить консультацию?",
    a: "Экспресс-консультацию можем организовать в течение рабочего дня после подтверждения заявки и оплаты. Подготовка документов занимает 2–5 рабочих дней в зависимости от сложности.",
  },
  {
    q: "Работаете ли вы с ИП и самозанятыми?",
    a: "Да, работаем с любыми организационно-правовыми формами: ООО, ИП, самозанятые. Условия и стоимость не зависят от формы ведения бизнеса.",
  },
  {
    q: "Как оформляется сотрудничество?",
    a: "Заключаем договор на оказание консультационных услуг. Оплата по счёту (безналичный расчёт) или картой. Все оплаты проводятся официально с выдачей закрывающих документов.",
  },
  {
    q: "Можете помочь с регистрацией товарного знака?",
    a: "Да, консультируем по процедуре регистрации товарного знака в Роспатенте, помогаем подготовить необходимые документы. Непосредственную подачу и сопровождение регистрации осуществляют профильные патентные поверенные.",
  },
  {
    q: "Что если у меня срочный вопрос вне рабочего времени?",
    a: "Для абонентских клиентов доступна приоритетная связь. Для разовых консультаций — ответ в начале следующего рабочего дня. Укажите срочность в заявке, постараемся помочь как можно быстрее.",
  },
];

const notIncluded = [
  "Представительство в судах общей юрисдикции",
  "Ведение арбитражных и административных дел",
  "Уголовно-правовые вопросы",
  "Нотариальное удостоверение документов",
  "Юридическое сопровождение сделок с недвижимостью",
];

export default function LegalServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        badge="Юридические услуги"
        h1={
          <>
            Юридическое консультирование{" "}
            <GradientText>для бизнеса</GradientText>
          </>
        }
        sub="Консультации, анализ документов и правовая поддержка для предпринимателей на маркетплейсах. Работаем официально — договор, счёт, закрывающие документы."
      />

      {/* Дисклеймер и описание */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <div
              className="rounded-2xl p-7 mb-8 flex items-start gap-5"
              style={{
                background: "linear-gradient(135deg, #FFFBEB, #FEF9C3)",
                border: "1.5px solid #FCD34D",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "#F59E0B" }}
              >
                <Icon name="AlertTriangle" size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-yellow-900 mb-1">
                  Важно: консультационный формат работы
                </h3>
                <p className="font-body text-sm text-yellow-800 leading-relaxed">
                  Мы предоставляем исключительно консультационные юридические услуги.{" "}
                  <strong>Мы не представляем интересы в судах и не ведём арбитражные дела.</strong>{" "}
                  Наша работа — помочь вам разобраться в правовой ситуации, подготовить документы и минимизировать риски до их возникновения.
                </p>
              </div>
            </div>
          </Fade>

          <Fade delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: "Video", title: "Онлайн-консультация", desc: "Zoom, Meet, Telegram — удобный формат для вас" },
                { icon: "Phone", title: "По телефону", desc: "Быстрый ответ на срочный вопрос" },
                { icon: "FileText", title: "Письменное заключение", desc: "Развёрнутый анализ ситуации с рекомендациями" },
              ].map((f) => (
                <div key={f.title} className="ic-card p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "linear-gradient(135deg, #EFF6FF, #F0FDFF)", border: "1px solid rgba(6,182,212,0.2)" }}
                  >
                    <Icon name={f.icon} size={20} style={{ color: "#1E40AF" }} />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-gray-900 mb-1">{f.title}</h4>
                  <p className="font-body text-xs text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* Услуги с ценами */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-6xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Виды консультаций и стоимость
              </h2>
              <p className="font-body text-gray-500">
                Прозрачные цены, официальный договор, закрывающие документы
              </p>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultations.map((c, i) => (
              <Fade key={c.title} delay={i * 0.08}>
                <div className="ic-card p-7 flex flex-col h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, #EFF6FF, #F0FDFF)", border: "1px solid rgba(6,182,212,0.2)" }}
                  >
                    <Icon name={c.icon} size={22} style={{ color: "#1E40AF" }} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-1">
                    {c.title}
                  </h3>
                  <div
                    className="text-2xl font-heading font-extrabold mb-3"
                    style={{ color: "#1E40AF" }}
                  >
                    {c.price}
                  </div>
                  <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">{c.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Таблица рисков */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                С чем мы помогаем
              </h2>
              <p className="font-body text-gray-500">
                Типичные правовые риски на маркетплейсах и наш подход
              </p>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div className="ic-card overflow-hidden">
              <div
                className="grid grid-cols-2 px-6 py-3 text-xs font-heading font-semibold uppercase tracking-wider"
                style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)", color: "white" }}
              >
                <span>Ситуация / риск</span>
                <span>Как мы помогаем</span>
              </div>
              {risks.map((r, i) => (
                <div
                  key={r.risk}
                  className="grid grid-cols-2 gap-4 px-6 py-5"
                  style={{ borderTop: i > 0 ? "1px solid #F3F4F6" : "none" }}
                >
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#F59E0B" }} />
                    <span className="font-body text-sm text-gray-800 font-medium">{r.risk}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#16A34A" }} />
                    <span className="font-body text-sm text-gray-600">{r.help}</span>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* Шаги */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Как проходит консультация
              </h2>
            </div>
          </Fade>
          <div className="space-y-5">
            {steps.map((step, i) => (
              <Fade key={step.num} delay={i * 0.1}>
                <div className="ic-card p-6 flex items-start gap-5">
                  <div className="guarantee-num flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-3xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Частые вопросы
              </h2>
            </div>
          </Fade>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div className="ic-card overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-heading text-sm font-semibold text-gray-900">{item.q}</span>
                    <Icon
                      name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                      size={18}
                      style={{ color: "#06B6D4", flexShrink: 0 }}
                    />
                  </button>
                  {openFaq === i && (
                    <div
                      className="px-6 pb-5"
                      style={{ borderTop: "1px solid #F3F4F6" }}
                    >
                      <p className="font-body text-sm text-gray-600 leading-relaxed pt-4">{item.a}</p>
                    </div>
                  )}
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Что НЕ входит */}
      <section className="py-16" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-3xl">
          <Fade>
            <div
              className="rounded-2xl p-8"
              style={{
                background: "white",
                border: "1.5px solid rgba(239,68,68,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(239,68,68,0.1)" }}
                >
                  <Icon name="XCircle" size={20} style={{ color: "#DC2626" }} />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  Что НЕ входит в наши услуги
                </h3>
              </div>
              <ul className="space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Icon name="X" size={16} style={{ color: "#DC2626", flexShrink: 0 }} />
                    <span className="font-body text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-xs text-gray-400 mt-6 leading-relaxed">
                По вопросам, требующим судебного представительства, мы можем порекомендовать профильных юристов из нашей сети партнёров.
              </p>
            </div>
          </Fade>
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
              Есть юридический вопрос?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              Запишитесь на консультацию — разберём вашу ситуацию и дадим конкретные рекомендации.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Записаться на консультацию
            </button>
          </Fade>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="Юридические услуги"
      />
    </>
  );
}
