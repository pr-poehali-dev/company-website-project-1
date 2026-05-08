import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const services = [
  {
    icon: "Globe",
    title: "Сайты и лендинги",
    desc: "Разработка продающих сайтов и лендингов на современном стеке. Быстрая загрузка, адаптив, SEO-оптимизация.",
  },
  {
    icon: "Bot",
    title: "Чат-боты",
    desc: "Боты для Telegram, WhatsApp, ВКонтакте. Автоматический ответ, воронки продаж, интеграция с CRM.",
  },
  {
    icon: "Link2",
    title: "Интеграции API",
    desc: "Связываем маркетплейсы, склад, бухгалтерию, CRM в единую экосистему. Данные синхронизируются автоматически.",
  },
  {
    icon: "Layers",
    title: "CRM-системы",
    desc: "Настройка и внедрение amoCRM, Битрикс24, RetailCRM. Автоматические воронки, задачи и отчёты.",
  },
  {
    icon: "MessageSquare",
    title: "Автоматизация коммуникаций",
    desc: "Email-рассылки, push-уведомления, SMS-цепочки. Клиент получает нужное сообщение в нужный момент.",
  },
];

const forWhom = [
  "Менеджеры тратят время на рутинные задачи вместо продаж",
  "Данные разбросаны по разным системам и таблицам",
  "Клиенты долго ждут ответа или теряются в воронке",
  "Хотите масштабироваться без пропорционального роста штата",
];

const results = [
  {
    icon: "Clock",
    title: "Время освобождается",
    desc: "Рутинные задачи выполняются автоматически 24/7 без участия человека",
  },
  {
    icon: "TrendingUp",
    title: "Конверсия растёт",
    desc: "Клиент не теряется: автоматический follow-up увеличивает продажи",
  },
  {
    icon: "Database",
    title: "Единая база данных",
    desc: "Всё в одном месте: заказы, клиенты, склад, финансы синхронизированы",
  },
  {
    icon: "Users",
    title: "Команда эффективнее",
    desc: "Сотрудники занимаются стратегией, а не копированием данных между системами",
  },
];

export default function AutomationPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        badge="Автоматизация"
        h1={
          <>
            Автоматизация <GradientText>бизнес-процессов</GradientText>
          </>
        }
        sub="Сайты, CRM, чат-боты, интеграции — собираем цифровую среду, которая работает на вас 24/7."
      />

      {/* Услуги */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Что мы автоматизируем
              </h2>
              <p className="font-body text-gray-500">
                Полный спектр цифровых инструментов для вашего бизнеса
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
                Что вы получите
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
              Хотите автоматизировать рутину?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              Опишите задачу — рассчитаем проект и покажем, какие процессы можно автоматизировать уже сейчас.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Рассчитать проект автоматизации
            </button>
          </Fade>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="Автоматизация"
      />
    </>
  );
}
