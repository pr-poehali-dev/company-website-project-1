import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";
import { Fade, GradientText } from "@/lib/fadeHook";

const stats = [
  { value: "150+", label: "Завершённых проектов" },
  { value: "+150%", label: "Средний рост продаж" },
  { value: "24/7", label: "Мониторинг систем" },
  { value: "98%", label: "Соблюдение сроков" },
];

const problems = [
  "Цифры есть, но они разбросаны по Excel, сервисам и чату, и по ним сложно принять решение.",
  "Бизнес держится на тебе и паре ключевых людей: если кто-то «выпадет», всё тормозит.",
  "Сайт, соцсети, боты, реклама и дизайн живут отдельно, нет общей системы и стратегии.",
  "Команда тратит время на рутину и ручные действия вместо роста и развития продукта.",
];

const directions = [
  { icon: "ShoppingBag", emoji: "🛒", title: "Менеджмент маркетплейсов", desc: "Сопровождение на WB, Ozon, Яндекс.Маркет: от карточек до аналитики", href: "/uslugi/menedzhment-marketpleysov" },
  { icon: "BarChart2", emoji: "📊", title: "Финансовая аналитика", desc: "Юнит-экономика, P&L, управленческий учёт в реальном времени", href: "/uslugi/finansovaya-analitika" },
  { icon: "Cpu", emoji: "⚙️", title: "Автоматизация", desc: "Сайты, CRM, чат-боты (Telegram/WhatsApp/VK), интеграции", href: "/uslugi/avtomatizatsiya-biznesa" },
  { icon: "Sparkles", emoji: "🎨", title: "AI-дизайн + Юрист", desc: "Нейрофотосессии, инфографика, защита бренда и договоров", href: "/uslugi/ai-dizayn-uslugi" },
];

const products = [
  { icon: "Bot", emoji: "🤖", title: "LegalTech (ИИ-юрист)", desc: "Первичная диагностика, генерация документов, эскалация к юристу", href: "/legaltech", badge: "AI 24/7" },
  { icon: "Link2", emoji: "🔗", title: "Гибридный бот для селлеров", desc: "Управление продажами + финансовая аналитика в одном боте", href: "/hybrid-bot-marketplace", badge: "API интеграция" },
  { icon: "Scale", emoji: "⚖️", title: "Юридический консалтинг", desc: "Регистрация бизнеса, договоры, споры с маркетплейсами под ключ", href: "/uslugi/yuridicheskie-uslugi", badge: "Онлайн" },
];

const guarantees = [
  { emoji: "🎓", title: "Экспертиза команды", desc: "Специалисты с сертификатами и опытом в e-commerce, AI, LegalTech" },
  { emoji: "💡", title: "Творческий подход", desc: "Индивидуальные решения под задачи вашего бизнеса, не шаблоны" },
  { emoji: "⚡", title: "Быстрая обратная связь", desc: "Ответ на заявку в течение 2 часов в рабочее время" },
  { emoji: "💰", title: "Прозрачное ценообразование", desc: "Фиксированная смета, без скрытых платежей" },
  { emoji: "✅", title: "Контроль качества", desc: "Многоэтапная проверка: от прототипа до запуска и пост-поддержки" },
  { emoji: "🤝", title: "Уважение к времени", desc: "Чёткие дедлайны, еженедельные отчёты, единый менеджер проекта" },
  { emoji: "🛡️", title: "Надёжность и поддержка", desc: "Техподдержка 24/7, гарантия на работы, мониторинг систем" },
  { emoji: "🔍", title: "Внимание к деталям", desc: "Документирование, маркировка интеграций, чистая сдача проекта" },
];

const processSteps = [
  { num: "01", title: "Знакомство и бриф", desc: "Бесплатная 30-минутная консультация, выявление целей и болей." },
  { num: "02", title: "Диагностика и аудит", desc: "Анализ текущих процессов, финансов, контента, конкурентов." },
  { num: "03", title: "Концепция и смета", desc: "Дорожная карта, фиксированная цена, прозрачные сроки." },
  { num: "04", title: "Реализация и тесты", desc: "Разработка, интеграции, внутреннее QA, согласование с вами." },
  { num: "05", title: "Запуск и обучение", desc: "Передача проекта, инструкции, обучение вашей команды." },
  { num: "06", title: "Сопровождение 24/7", desc: "Мониторинг, обновления, масштабирование, поддержка." },
];

const audiences = [
  { icon: "ShoppingCart", label: "Селлеры маркетплейсов (WB, Ozon, Яндекс)", desc: "автоматизация, аналитика, защита" },
  { icon: "Factory", label: "Производители и дистрибьюторы", desc: "интеграции с МП, учёт, логистика" },
  { icon: "GraduationCap", label: "Образовательные проекты и инфобизнес", desc: "сайты, воронки, контент" },
  { icon: "Heart", label: "Медицина и здоровье", desc: "запись, документооборот, репутация" },
  { icon: "Building2", label: "Госсектор и НКО", desc: "цифровизация, отчётность, безопасность" },
  { icon: "UtensilsCrossed", label: "Ритейл, общепит, услуги", desc: "онлайн-заказы, лояльность, аналитика" },
  { icon: "Briefcase", label: "Юридические и консалтинговые фирмы", desc: "автоматизация, лидогенерация" },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{ background: "linear-gradient(155deg, #0F172A 0%, #1E3A8A 55%, #0C1F6B 100%)" }}
      >
        <div className="absolute inset-0 pixel-bg opacity-40" />
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute top-24 right-8 w-80 h-80 rounded-full opacity-15 blur-3xl float-slow"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }} />
        <div className="absolute bottom-20 left-8 w-64 h-64 rounded-full opacity-10 blur-3xl float-slow-2"
          style={{ background: "radial-gradient(circle, #1E40AF, transparent)" }} />

        <div className="container mx-auto px-5 relative z-10 py-24">
          <div className="max-w-3xl">
            <Fade>
              <div className="section-badge mb-6"
                style={{ background: "rgba(6,182,212,0.15)", borderColor: "rgba(6,182,212,0.4)", color: "#67E8F9" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                Digital-партнёр для вашего бизнеса
              </div>
            </Fade>
            <Fade delay={0.1}>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-[64px] font-extrabold text-white mb-6 leading-tight">
                Соединяем стратегию, финансовую аналитику,{" "}
                <span style={{ background: "linear-gradient(135deg, #06B6D4, #67E8F9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  автоматизацию и AI-дизайн
                </span>
              </h1>
            </Fade>
            <Fade delay={0.2}>
              <p className="font-body text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Упорядочим процессы, усилим бренд, сделаем больше прибыльных действий.
                Интеллект Консалтинг — это команда, которая помогает предпринимателям
                навести порядок в бизнесе, цифрах и визуале.
              </p>
            </Fade>
            <Fade delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-14">
                <button onClick={() => setModalOpen(true)} className="btn-primary px-8 py-4 text-base">
                  Получить консультацию
                </button>
                <button onClick={() => navigate("/legaltech")} className="btn-white px-8 py-4 text-base">
                  Попробовать демо-бота
                </button>
                <button
                  onClick={() => navigate("/pricing")}
                  className="px-8 py-4 text-base font-heading font-semibold rounded-lg transition-all duration-200"
                  style={{ border: "2px solid rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.85)", background: "transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                >
                  Прайс-лист
                </button>
              </div>
            </Fade>
            <Fade delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-heading text-3xl font-bold" style={{ color: "#06B6D4" }}>{s.value}</div>
                    <div className="font-body text-sm text-slate-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 72" fill="none" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M0,72 L1440,72 L1440,0 Q720,72 0,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Fade>
              <div>
                <div className="section-badge mb-5">Узнаёте себя?</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Сталкиваешься с этим в бизнесе?
                </h2>
                <div className="space-y-3.5">
                  {problems.map((p, i) => (
                    <div key={i} className="flex gap-3 items-start p-4 rounded-xl"
                      style={{ background: "#F8FAFF", border: "1px solid rgba(30,64,175,0.08)" }}>
                      <div className="w-5 h-5 rounded-full ic-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="X" size={9} className="text-white" />
                      </div>
                      <p className="font-body text-sm text-gray-700 leading-relaxed">{p}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.2)" }}>
                  <p className="font-body text-sm font-medium" style={{ color: "#0891B2" }}>
                    💡 Значит, пора собрать стратегию, процессы, цифры и визуал в одну работающую систему.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade delay={0.2}>
              <div className="ic-card p-8 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-5 ic-gradient" />
                <Icon name="Lightbulb" size={36} style={{ color: "#06B6D4" }} className="mb-5" />
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  Мы соединяем консалтинг, автоматизацию и дизайн в единую систему
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed mb-5">
                  Мы не просто делаем сайт или логотип — мы выстраиваем цепочку:
                  диагностика → стратегия → автоматизация → упаковка.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Анализируем, где бизнес теряет деньги и энергию.",
                    "Проектируем процессы и цифровую среду под твои цели.",
                    "Внедряем инструменты: сайты, бот-сценарии, CRM, интеграции.",
                    "Упаковываем бренд так, чтобы ему доверяли и его запоминали.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-body text-gray-700">
                      <Icon name="Check" size={14} style={{ color: "#06B6D4" }} className="flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ── 4 DIRECTIONS ── */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5">
          <Fade>
            <div className="text-center mb-14">
              <div className="section-badge mb-4">Что мы делаем</div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                Комплексный подход <GradientText>к росту</GradientText>
              </h2>
              <p className="font-body text-gray-500 max-w-xl mx-auto">
                Четыре ключевых направления, которые работают как единая система
              </p>
            </div>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {directions.map((d, i) => (
              <Fade key={d.title} delay={i * 0.08}>
                <div
                  className="ic-card p-6 h-full cursor-pointer"
                  onClick={() => navigate(d.href)}
                >
                  <div className="text-3xl mb-4">{d.emoji}</div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2">{d.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">{d.desc}</p>
                  <div className="flex items-center gap-1 text-xs font-body font-semibold" style={{ color: "#06B6D4" }}>
                    Подробнее <Icon name="ArrowRight" size={12} />
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.4}>
            <div className="text-center mt-10">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary px-9 py-4 text-base"
              >
                Узнать, что подходит именно тебе
              </button>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── DIGITAL PRODUCTS ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pixel-bg opacity-25" />
        <div className="container mx-auto px-5 relative z-10">
          <Fade>
            <div className="text-center mb-14">
              <div className="section-badge mb-4">Технологии</div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                Технологические продукты <GradientText>24/7</GradientText>
              </h2>
            </div>
          </Fade>
          <div className="grid md:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <Fade key={p.title} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-7 h-full flex flex-col cursor-pointer ${i === 0 ? "" : "ic-card"}`}
                  style={i === 0 ? { background: "linear-gradient(135deg, #1E40AF, #06B6D4)" } : {}}
                  onClick={() => navigate(p.href)}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={i === 0
                        ? { background: "rgba(255,255,255,0.18)" }
                        : { background: "rgba(30,64,175,0.08)", border: "1px solid rgba(30,64,175,0.14)" }}
                    >
                      <Icon name={p.icon} size={22} style={{ color: i === 0 ? "white" : "#1E40AF" }} />
                    </div>
                    <span
                      className="tag-chip text-xs"
                      style={i === 0 ? { background: "rgba(255,255,255,0.18)", color: "white", borderColor: "rgba(255,255,255,0.3)" } : {}}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <h3 className={`font-heading text-lg font-bold mb-3 ${i === 0 ? "text-white" : "text-gray-900"}`}>
                    {p.emoji} {p.title}
                  </h3>
                  <p className={`font-body text-sm leading-relaxed mb-6 flex-1 ${i === 0 ? "text-white/80" : "text-gray-500"}`}>
                    {p.desc}
                  </p>
                  <button
                    className={`px-5 py-2.5 rounded-lg text-sm self-start ${i === 0 ? "btn-white" : "btn-primary"}`}
                  >
                    {i === 0 ? "Попробовать демо" : "Подключить"}
                  </button>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ── */}
      <section className="py-20" style={{ background: "#0F172A" }}>
        <div className="container mx-auto px-5">
          <Fade>
            <div className="text-center mb-14">
              <div className="section-badge mb-4" style={{ background: "rgba(6,182,212,0.14)", borderColor: "rgba(6,182,212,0.3)", color: "#67E8F9" }}>
                Наши принципы
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-3">
                8 гарантий{" "}
                <span style={{ background: "linear-gradient(135deg, #06B6D4, #67E8F9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  надёжности
                </span>
              </h2>
            </div>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((g, i) => (
              <Fade key={g.title} delay={i * 0.07}>
                <div className="ic-card-dark p-6 rounded-2xl h-full">
                  <div className="text-3xl mb-3">{g.emoji}</div>
                  <h3 className="font-heading text-sm font-bold text-white mb-2">{g.title}</h3>
                  <p className="font-body text-xs text-slate-400 leading-relaxed">{g.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <Fade>
            <div className="text-center mb-14">
              <div className="section-badge mb-4">Методология</div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                Процесс работы <GradientText>с нами</GradientText>
              </h2>
            </div>
          </Fade>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((s, i) => (
              <Fade key={s.num} delay={i * 0.08}>
                <div className="p-6 rounded-xl relative overflow-hidden h-full"
                  style={{ background: "#F8FAFF", border: "1px solid rgba(30,64,175,0.08)" }}>
                  <div className="absolute top-2 right-3 font-heading text-6xl font-black opacity-[0.05] leading-none" style={{ color: "#1E40AF" }}>
                    {s.num}
                  </div>
                  <div className="guarantee-num mb-4">{s.num}</div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── KPI STATS ── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}>
        <div className="container mx-auto px-5">
          <Fade>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Результаты, которые говорят сами за себя
            </h2>
          </Fade>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "Package", value: "150+", label: "Завершённых проектов" },
              { icon: "TrendingUp", value: "+150%", label: "Средний рост продаж клиентов" },
              { icon: "RefreshCw", value: "24/7", label: "Мониторинг систем" },
              { icon: "Clock", value: "98%", label: "Соблюдение сроков" },
            ].map((s, i) => (
              <Fade key={s.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                  <Icon name={s.icon} size={28} className="text-white mx-auto mb-3 opacity-80" />
                  <div className="font-heading text-4xl font-extrabold text-white mb-1">{s.value}</div>
                  <div className="font-body text-sm text-white/75">{s.label}</div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ── */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5">
          <Fade>
            <div className="text-center mb-12">
              <div className="section-badge mb-4">Наши клиенты</div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                Решения для <GradientText>вашей отрасли</GradientText>
              </h2>
            </div>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((a, i) => (
              <Fade key={a.label} delay={i * 0.06}>
                <div className="ic-card flex items-start gap-3 px-5 py-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" }}>
                    <Icon name={a.icon} size={16} style={{ color: "#06B6D4" }} />
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold text-gray-800">{a.label}</div>
                    <div className="font-body text-xs text-gray-400 mt-0.5">{a.desc}</div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1E40AF 0%, #0891B2 100%)" }}>
        <div className="absolute inset-0 pixel-bg opacity-20" />
        <div className="container mx-auto px-5 relative z-10">
          <Fade>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5">
                Готовы масштабировать бизнес?
              </h2>
              <p className="font-body text-white/80 text-lg mb-10 leading-relaxed">
                Оставьте заявку — и мы предложим формат работы под ваш запрос: от точечной консультации
                до комплексной настройки процессов, цифр и упаковки.
              </p>
              <button onClick={() => setModalOpen(true)} className="btn-white px-10 py-4 text-base">
                Записаться на консультацию
              </button>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}