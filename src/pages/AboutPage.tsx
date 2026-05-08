import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const trustCards = [
  {
    icon: "Award",
    title: "Компетенции",
    desc: "Команда с опытом в e-commerce, IT-разработке, финансах и праве. Каждый специалист — практик с подтверждёнными результатами, а не теоретик.",
  },
  {
    icon: "GitBranch",
    title: "Структура",
    desc: "Работаем как продуктовая команда: PM, разработчики, аналитики и дизайнеры. Проект идёт по чёткому плану с еженедельными отчётами.",
  },
  {
    icon: "ShieldCheck",
    title: "Прозрачность",
    desc: "Договор, счёт, акт выполненных работ. Фиксированные этапы и стоимость. Никаких устных договорённостей и скрытых платежей.",
  },
];

const teamMembers = [
  {
    name: "Менеджер МП",
    role: "Маркетплейсы и продвижение",
    desc: "Опыт работы с WB, Ozon, Яндекс.Маркет. Более 50 брендов в портфеле.",
  },
  {
    name: "Финансовый аналитик",
    role: "Финансы и аналитика",
    desc: "Строим P&L, cashflow, дашборды. Юнит-экономика для e-commerce любой сложности.",
  },
  {
    name: "Специалист по автоматизации",
    role: "IT и автоматизация",
    desc: "Сайты, CRM, чат-боты, API-интеграции. Полный цикл от ТЗ до поддержки.",
  },
  {
    name: "AI-дизайнер / Юрист",
    role: "Дизайн и правовая поддержка",
    desc: "Нейрофотосессии, айдентика, инфографика. Консультации по договорам и защите бренда.",
  },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        badge="О компании"
        h1={
          <>
            Интеллект Консалтинг —{" "}
            <GradientText>архитекторы вашего цифрового роста</GradientText>
          </>
        }
        sub="Мы не просто консультируем. Мы пишем код, настраиваем серверы и внедряем алгоритмы."
      />

      {/* Философия */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <div
              className="ic-gradient rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 pixel-bg opacity-20" />
              <div className="relative z-10">
                <div className="section-badge mb-6 mx-auto"
                  style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)", color: "white" }}
                >
                  Наша философия
                </div>
                <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                  «Технологии — это инструмент. Результат — наша ответственность.»
                </h2>
                <p
                  className="font-body text-lg leading-relaxed max-w-2xl mx-auto"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Мы убеждены: любая задача бизнеса решается системно. Разовые правки и «быстрые
                  фиксы» дают временный эффект. Мы строим инфраструктуру — от финансовой модели до
                  автоматических воронок — которая работает без постоянного ручного контроля.
                  Ваш рост должен быть управляемым и предсказуемым.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Почему доверяют */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Почему нам доверяют
              </h2>
              <p className="font-body text-gray-500 max-w-xl mx-auto">
                Три принципа, на которых строится каждый проект
              </p>
            </div>
          </Fade>
          <div className="grid md:grid-cols-3 gap-7">
            {trustCards.map((card, i) => (
              <Fade key={card.title} delay={i * 0.1}>
                <div className="ic-card p-8 text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                  >
                    <Icon name={card.icon} size={26} className="text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Команда
              </h2>
              <p className="font-body text-gray-500">
                Эксперты-практики с реальными кейсами в портфеле
              </p>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <Fade key={member.name} delay={i * 0.1}>
                <div className="ic-card p-6 text-center">
                  {/* Аватар-заглушка */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "#F3F4F6", border: "2px dashed #D1D5DB" }}
                  >
                    <Icon name="User" size={32} style={{ color: "#9CA3AF" }} />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-gray-900 mb-0.5">
                    {member.name}
                  </h3>
                  <div className="tag-chip mb-3 mx-auto" style={{ display: "inline-flex" }}>
                    {member.role}
                  </div>
                  <p className="font-body text-xs text-gray-500 leading-relaxed">{member.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Реквизиты */}
      <section
        className="py-20"
        style={{ background: "#0F172A" }}
      >
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                Реквизиты компании
              </h2>
              <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Работаем официально — договор, счёт, закрывающие документы
              </p>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <div
              className="ic-card-dark rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8"
            >
              {[
                { icon: "Building2", label: "Организация", value: "ООО «Интеллект Консалтинг»" },
                { icon: "Hash", label: "ИНН", value: "В процессе регистрации" },
                { icon: "MapPin", label: "Адрес", value: "г. Москва, работаем онлайн" },
                { icon: "Mail", label: "Email", value: "Natalya.saveleva.1973@mail.ru" },
                { icon: "Phone", label: "Телефон", value: "+7 (910) 774-76-33" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 10:00–19:00 МСК" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.2)" }}
                  >
                    <Icon name={item.icon} size={18} style={{ color: "#06B6D4" }} />
                  </div>
                  <div>
                    <div
                      className="font-body text-xs mb-0.5"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {item.label}
                    </div>
                    <div className="font-heading text-sm font-semibold text-white">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
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
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
              Готовы начать работу?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Оставьте заявку — обсудим вашу задачу и предложим оптимальный формат сотрудничества.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Начать сотрудничество
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
