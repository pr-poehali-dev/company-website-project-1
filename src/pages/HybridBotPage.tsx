import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const features = [
  {
    icon: "Database",
    title: "Сбор данных с API маркетплейсов",
    desc: "Автоматически получаем заказы, остатки, выручку и комиссии с WB, Ozon и Яндекс.Маркет. Данные обновляются каждый час.",
  },
  {
    icon: "Calculator",
    title: "Расчёт юнит-экономики",
    desc: "Бот считает реальную прибыль по каждому товару с учётом всех затрат: комиссия, логистика, реклама, налоги.",
  },
  {
    icon: "Sparkles",
    title: "AI-рекомендации",
    desc: "Искусственный интеллект анализирует данные и даёт конкретные советы: что повысить в цене, что снять с продажи, где увеличить запас.",
  },
  {
    icon: "Lock",
    title: "Безопасное хранение ключей AES-256",
    desc: "API-ключи маркетплейсов хранятся в зашифрованном виде с использованием алгоритма AES-256. Ваши данные защищены.",
  },
  {
    icon: "Bell",
    title: "Уведомления в мессенджеры",
    desc: "Мгновенные алерты о важных событиях: резкое падение продаж, нулевой остаток, изменение рейтинга карточки.",
  },
];

const connectSteps = [
  {
    num: "1",
    title: "Оставляете заявку",
    desc: "Указываете email, телефон и маркетплейсы, которые хотите подключить.",
  },
  {
    num: "2",
    title: "Получаете инструкцию",
    desc: "Менеджер отправляет подробную инструкцию по созданию и передаче API-ключей. Всё безопасно.",
  },
  {
    num: "3",
    title: "Бот начинает работу",
    desc: "В течение 24 часов бот подключается к вашим аккаунтам и начинает собирать аналитику.",
  },
];

const plans = [
  {
    title: "Старт",
    price: "1 990 ₽/мес",
    items: [
      "1 маркетплейс",
      "Ежедневная аналитика",
      "Базовые уведомления",
      "Telegram-бот",
    ],
    highlighted: false,
    btn: "Начать",
  },
  {
    title: "Бизнес",
    price: "4 990 ₽/мес",
    items: [
      "3 маркетплейса",
      "Аналитика в реальном времени",
      "AI-советы и рекомендации",
      "Telegram + WhatsApp",
    ],
    highlighted: true,
    btn: "Выбрать тариф",
  },
  {
    title: "Профи",
    price: "9 990 ₽/мес",
    items: [
      "Безлимит по маркетплейсам",
      "Персональный аналитик",
      "Приоритетная поддержка",
      "Все каналы коммуникации",
    ],
    highlighted: false,
    btn: "Выбрать тариф",
  },
];

const marketplaceOptions = ["WB (Wildberries)", "Ozon", "Яндекс.Маркет"];

type FormState = {
  email: string;
  phone: string;
  marketplace: string;
  apiConsent: boolean;
};

export default function HybridBotPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    email: "",
    phone: "",
    marketplace: "",
    apiConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        dark
        badge="Гибридный бот"
        h1="Управление продажами и финансами в одном боте"
        sub="Подключите WB, Ozon и Яндекс.Маркет. Смотрите прибыль в реальном времени."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["WB", "Ozon", "Яндекс.Маркет"].map((label) => (
            <span
              key={label}
              className="tag-chip"
              style={{ background: "rgba(6,182,212,0.15)", color: "#67E8F9", border: "1px solid rgba(6,182,212,0.35)" }}
            >
              {label}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Функции */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Возможности <GradientText>гибридного бота</GradientText>
              </h2>
              <p className="font-body text-gray-500">
                Все данные ваших маркетплейсов — в одном месте
              </p>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Fade key={f.title} delay={i * 0.09}>
                <div className="ic-card p-7">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                  >
                    <Icon name={f.icon} size={22} className="text-white" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Шаги подключения */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Как подключиться
              </h2>
              <p className="font-body text-gray-500">Настройка занимает менее 24 часов</p>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-3 gap-6">
            {connectSteps.map((step, i) => (
              <Fade key={step.num} delay={i * 0.12}>
                <div className="ic-card p-7 text-center">
                  <div className="guarantee-num mx-auto mb-4">{step.num}</div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{step.desc}</p>
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
              <p className="font-body text-gray-500">Первые 14 дней бесплатно на любом тарифе</p>
            </div>
          </Fade>
          <div className="grid md:grid-cols-3 gap-7">
            {plans.map((plan, i) => (
              <Fade key={plan.title} delay={i * 0.1}>
                <div className={plan.highlighted ? "ic-gradient rounded-2xl p-px" : ""}>
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
                          Популярный
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

      {/* Форма подключения */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-xl">
          <Fade>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Подключить бота
              </h2>
              <p className="font-body text-gray-500">
                Заполните форму — менеджер свяжется в течение 2 часов
              </p>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div className="ic-card p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ic-gradient"
                  >
                    <Icon name="Check" size={28} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Заявка принята!</h3>
                  <p className="font-body text-gray-500">
                    Менеджер свяжется с вами в течение 2 часов в рабочее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="ic-input"
                      placeholder="ivan@company.ru"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      className="ic-input"
                      placeholder="+7 (___) ___-__-__"
                      required
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                      Маркетплейс *
                    </label>
                    <select
                      className="ic-input"
                      required
                      value={form.marketplace}
                      onChange={(e) => setForm((f) => ({ ...f, marketplace: e.target.value }))}
                    >
                      <option value="">Выберите маркетплейс</option>
                      {marketplaceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "#F0FDFF", border: "1px solid rgba(6,182,212,0.25)" }}
                  >
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={form.apiConsent}
                        onChange={(e) => setForm((f) => ({ ...f, apiConsent: e.target.checked }))}
                        className="mt-0.5 w-4 h-4 rounded accent-blue-600"
                      />
                      <span className="text-xs text-gray-600 font-body leading-relaxed">
                        Я даю согласие на безопасное хранение API-ключей маркетплейсов в зашифрованном виде (AES-256) для обеспечения работы сервиса. *
                      </span>
                    </label>
                  </div>
                  <button type="submit" className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2">
                    <Icon name="Zap" size={16} />
                    Подключить бота
                  </button>
                  <p className="text-xs text-gray-400 text-center font-body">
                    Отправляя форму, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
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
              Попробуйте 14 дней бесплатно
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              Подключите бота и убедитесь, как легко управлять маркетплейсами с аналитикой в реальном времени.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Подключить бота бесплатно
            </button>
          </Fade>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="Гибридный бот"
      />
    </>
  );
}
