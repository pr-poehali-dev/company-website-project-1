import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

/* ─── Helpers ─────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Data ────────────────────────────────────────────── */
const navLinks = [
  { id: "services", label: "Услуги" },
  { id: "products", label: "Продукты" },
  { id: "process", label: "Как работаем" },
  { id: "about", label: "О компании" },
  { id: "contacts", label: "Контакты" },
];

const services = [
  { icon: "ShoppingBag", title: "Менеджмент маркетплейсов", desc: "Сопровождение на WB, Ozon, Яндекс.Маркет. Запуск, продвижение, аналитика продаж.", color: "#1E40AF" },
  { icon: "BarChart2", title: "Финансовая аналитика", desc: "Юнит-экономика, P&L, управленческий учёт и прогнозирование прибыли.", color: "#06B6D4" },
  { icon: "Cpu", title: "Автоматизация бизнеса", desc: "Разработка сайтов, CRM, чат-ботов и интеграций для роста без найма.", color: "#1E40AF" },
  { icon: "Sparkles", title: "AI-дизайн", desc: "Нейрофотосессии, инфографика для карточек, упаковка бренда с ИИ.", color: "#06B6D4" },
  { icon: "Scale", title: "Юридические услуги", desc: "Регистрация бизнеса, договоры, защита от штрафов маркетплейсов.", color: "#1E40AF" },
];

const problems = [
  "Цифры есть, но они разбросаны по Excel и чату — сложно принять решение",
  "Бизнес держится на тебе: если кто-то «выпадет», всё тормозит",
  "Сайт, боты и реклама живут отдельно, нет единой стратегии",
  "Команда тратит время на рутину вместо роста и развития",
];

const guarantees = [
  { emoji: "🎓", title: "Экспертиза команды", desc: "Специалисты с опытом в e-commerce, AI и LegalTech" },
  { emoji: "💡", title: "Творческий подход", desc: "Индивидуальные решения, не шаблоны" },
  { emoji: "⚡", title: "Быстрая обратная связь", desc: "Ответ на заявку в течение 2 часов" },
  { emoji: "💰", title: "Прозрачное ценообразование", desc: "Фиксированная смета, без скрытых платежей" },
  { emoji: "✅", title: "Контроль качества", desc: "Многоэтапная проверка: от прототипа до запуска" },
  { emoji: "🤝", title: "Уважение к времени", desc: "Чёткие дедлайны, еженедельные отчёты" },
  { emoji: "🛡️", title: "Надёжность и поддержка", desc: "Техподдержка 24/7, гарантия на работы" },
  { emoji: "🔍", title: "Внимание к деталям", desc: "Документирование, чистая сдача проекта" },
];

const processSteps = [
  { num: "01", title: "Знакомство и бриф", desc: "Бесплатная 30-минутная консультация, выявление целей и болей" },
  { num: "02", title: "Диагностика и аудит", desc: "Анализ текущих процессов, финансов и контента" },
  { num: "03", title: "Концепция и смета", desc: "Дорожная карта, фиксированная цена, сроки" },
  { num: "04", title: "Реализация и тесты", desc: "Разработка, интеграции, внутреннее QA" },
  { num: "05", title: "Запуск и обучение", desc: "Передача проекта, инструкции, поддержка" },
  { num: "06", title: "Сопровождение 24/7", desc: "Мониторинг, обновления, масштабирование" },
];

const stats = [
  { value: "150+", label: "проектов завершено" },
  { value: "150%", label: "средний рост продаж" },
  { value: "24/7", label: "мониторинг систем" },
  { value: "98%", label: "соблюдение сроков" },
];

const audiences = [
  { icon: "ShoppingCart", label: "Селлеры маркетплейсов" },
  { icon: "Factory", label: "Производители и дистрибьюторы" },
  { icon: "GraduationCap", label: "Образовательные проекты" },
  { icon: "Heart", label: "Медицина и здоровье" },
  { icon: "Building2", label: "Госсектор и НКО" },
  { icon: "UtensilsCrossed", label: "Ритейл, общепит, услуги" },
  { icon: "Briefcase", label: "Юридические компании" },
];

/* ─── Contact Form Modal ──────────────────────────────── */
function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", task: "", message: "", consent: false });
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const tasks = ["Менеджмент МП", "Финансовая аналитика", "Автоматизация", "AI-дизайн", "Юридические услуги", "LegalTech", "Гибридный бот", "Другое"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => setState("sent"), 1600);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.72)", backdropFilter: "blur(8px)" }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: "0 24px 80px rgba(30,64,175,0.2)" }}>
        <div className="p-7">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-bold text-gray-900">Записаться на консультацию</h3>
            <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Icon name="X" size={18} className="text-gray-500" />
            </button>
          </div>

          {state === "sent" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ic-gradient">
                <Icon name="Check" size={28} className="text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">Заявка принята!</h4>
              <p className="text-gray-500 font-body">Менеджер свяжется с вами<br />в течение 2 часов в рабочее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">Имя *</label>
                  <input className="ic-input" placeholder="Иван" required
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">Телефон *</label>
                  <input className="ic-input" placeholder="+7 (___) ___-__-__" required
                    value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">Email *</label>
                <input className="ic-input" type="email" placeholder="ivan@company.ru" required
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">Приоритетная задача *</label>
                <select className="ic-input" required value={form.task}
                  onChange={e => setForm(f => ({ ...f, task: e.target.value }))}>
                  <option value="">Выберите из списка</option>
                  {tasks.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">Комментарий</label>
                <textarea className="ic-input resize-none" rows={3} placeholder="Расскажите о вашей задаче..."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required checked={form.consent}
                  onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
                  className="mt-0.5 w-4 h-4 rounded accent-blue-600" />
                <span className="text-xs text-gray-500 font-body leading-relaxed">
                  Я даю согласие на обработку персональных данных в соответствии с{" "}
                  <span className="underline cursor-pointer" style={{ color: "#06B6D4" }}>Политикой обработки ПДн</span>
                </span>
              </label>
              <button type="submit" disabled={state === "sending"}
                className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2">
                {state === "sending" ? (
                  <><Icon name="Loader2" size={16} className="animate-spin" /> Отправляем...</>
                ) : (
                  <><Icon name="Send" size={16} /> Отправить заявку</>
                )}
              </button>
              <p className="text-xs text-gray-400 text-center font-body">
                Отправляя форму, вы соглашаетесь с Пользовательским соглашением
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Demo Bot ────────────────────────────────────────── */
type Message = { from: "bot" | "user"; text: string; options?: string[] };
const INITIAL_MSG: Message = {
  from: "bot",
  text: "Здравствуйте! Я ваш юридический помощник. Чем могу помочь?",
  options: ["Регистрация бизнеса", "Договоры", "Штрафы WB/Ozon", "Другое"],
};

function DemoBot({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MSG]);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBot = (text: string, options?: string[]) => {
    setTimeout(() => {
      setMessages(m => [...m, { from: "bot", text, options }]);
    }, 600);
  };

  const handleOption = (opt: string) => {
    setMessages(m => [...m, { from: "user", text: opt }]);
    if (step === 0 && opt === "Штрафы WB/Ozon") {
      setStep(1);
      addBot("Что произошло?", ["Карточку заблокировали", "Пришёл штраф", "Неправомерное списание"]);
    } else if (step === 1 && opt === "Пришёл штраф") {
      setStep(2);
      addBot("У вас есть 10 дней на подачу претензии.\n\nЯ могу:", ["Сгенерировать шаблон претензии", "Подключить к юристу"]);
    } else if (step === 2 && opt === "Сгенерировать шаблон претензии") {
      setStep(3);
      addBot("Введите ваш email, чтобы получить документ:");
    } else {
      addBot("Понял вас! Передаю запрос специалисту. Он свяжется с вами в течение 2 часов.", ["Записаться к юристу"]);
    }
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages(m => [...m, { from: "user", text: email }]);
    setEmail("");
    setStep(4);
    addBot("Отлично! Шаблон претензии отправлен на вашу почту.\n\nХотите получить полную консультацию юриста?", ["Записаться к юристу"]);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-24 right-6 z-[89] w-80 rounded-2xl shadow-2xl overflow-hidden"
      style={{ boxShadow: "0 16px 64px rgba(30,64,175,0.22)" }}>
      <div className="flex items-center justify-between px-4 py-3 ic-gradient">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Icon name="Bot" size={16} className="text-white" />
          </div>
          <div>
            <div className="text-white text-sm font-semibold font-heading">LegalTech-бот</div>
            <div className="text-white/70 text-xs">Онлайн · Отвечает мгновенно</div>
          </div>
        </div>
        <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
          <Icon name="X" size={18} />
        </button>
      </div>

      <div className="bg-gray-50 p-4 space-y-3 overflow-y-auto" style={{ maxHeight: "320px" }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <div className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`rounded-2xl px-4 py-2.5 text-sm max-w-[85%] font-body whitespace-pre-line ${
                msg.from === "bot" ? "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100" : "rounded-br-sm text-white"
              }`}
              style={msg.from === "user" ? { background: "linear-gradient(135deg, #1E40AF, #06B6D4)" } : {}}>
                {msg.text}
              </div>
            </div>
            {msg.options && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {msg.options.map(opt => (
                  <button key={opt} onClick={() => handleOption(opt)}
                    className="text-xs px-3 py-1.5 rounded-full border font-body transition-all hover:scale-[1.02]"
                    style={{ borderColor: "#06B6D4", color: "#0891B2", background: "rgba(6,182,212,0.06)" }}>
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        {step === 3 && (
          <form onSubmit={handleEmail} className="flex gap-2">
            <input className="ic-input text-xs" type="email" placeholder="your@email.ru" required
              value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit" className="btn-primary px-3 py-2 text-xs flex-shrink-0">
              <Icon name="Send" size={14} />
            </button>
          </form>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

/* ─── Main ────────────────────────────────────────────── */
export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [botOpen, setBotOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <DemoBot open={botOpen} onClose={() => setBotOpen(false)} />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(30,64,175,0.08)" : "none",
          boxShadow: scrolled ? "0 2px 16px rgba(30,64,175,0.07)" : "none",
        }}>
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-8 h-8 rounded-lg ic-gradient flex items-center justify-center flex-shrink-0">
              <Icon name="TrendingUp" size={15} className="text-white" />
            </div>
            <div className="font-heading font-bold text-[15px] leading-tight">
              <span style={{ color: "#1E40AF" }}>ИНТЕЛЛЕКТ</span>{" "}
              <span style={{ color: "#06B6D4" }}>КОНСАЛТИНГ</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className="font-body text-sm transition-colors duration-200"
                style={{ color: activeSection === l.id ? "#06B6D4" : "#4B5563" }}>
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => setBotOpen(!botOpen)} className="btn-outline px-4 py-2 text-sm">
              Демо-бот
            </button>
            <button onClick={() => setModalOpen(true)} className="btn-primary px-5 py-2 text-sm">
              Консультация
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-gray-700" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-7 pt-16">
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="font-heading text-2xl font-semibold"
              style={{ color: activeSection === l.id ? "#06B6D4" : "#1E40AF" }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => { setModalOpen(true); setMenuOpen(false); }}
            className="btn-primary px-8 py-3 text-base mt-4">
            Записаться на консультацию
          </button>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{ background: "linear-gradient(155deg, #0F172A 0%, #1E3A8A 55%, #0C1F6B 100%)" }}>
        <div className="absolute inset-0 pixel-bg opacity-40" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="absolute top-24 right-8 w-80 h-80 rounded-full opacity-15 blur-3xl float-slow"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }} />
        <div className="absolute bottom-20 left-8 w-64 h-64 rounded-full opacity-10 blur-3xl float-slow-2"
          style={{ background: "radial-gradient(circle, #1E40AF, transparent)" }} />

        <div className="container mx-auto px-6 relative z-10 py-24">
          <div className="max-w-3xl">
            <Fade>
              <div className="section-badge mb-6"
                style={{ background: "rgba(6,182,212,0.15)", borderColor: "rgba(6,182,212,0.4)", color: "#67E8F9" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                Digital-партнёр для вашего бизнеса
              </div>
            </Fade>

            <Fade delay={0.1}>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-[68px] font-extrabold text-white mb-6 leading-tight">
                Соединяем стратегию, аналитику,{" "}
                <span style={{
                  background: "linear-gradient(135deg, #06B6D4, #67E8F9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  автоматизацию и AI
                </span>
              </h1>
            </Fade>

            <Fade delay={0.2}>
              <p className="font-body text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Упорядочим процессы, усилим бренд и сделаем больше прибыльных действий.
                Ваш технологический партнёр для навигации в цифровом бизнесе.
              </p>
            </Fade>

            <Fade delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-14">
                <button onClick={() => setModalOpen(true)} className="btn-primary px-8 py-4 text-base">
                  Получить консультацию
                </button>
                <button onClick={() => setBotOpen(true)} className="btn-white px-8 py-4 text-base">
                  Попробовать демо-бота
                </button>
              </div>
            </Fade>

            <Fade delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {stats.map(s => (
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

      {/* PROBLEMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Fade>
              <div>
                <div className="section-badge mb-5">Узнаёте себя?</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Сталкиваетесь с этим в бизнесе?
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
              </div>
            </Fade>
            <Fade delay={0.2}>
              <div className="ic-card p-8 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-5 ic-gradient" />
                <Icon name="Lightbulb" size={36} style={{ color: "#06B6D4" }} className="mb-5" />
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  Значит, пора собрать стратегию, процессы и визуал в единую систему
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed mb-6">
                  Мы не просто делаем сайт или логотип — выстраиваем цепочку: диагностика → стратегия → автоматизация → упаковка.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Анализируем, где бизнес теряет деньги",
                    "Проектируем процессы под ваши цели",
                    "Внедряем инструменты: сайты, боты, CRM",
                    "Упаковываем бренд так, чтобы ему доверяли",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-body text-gray-700">
                      <Icon name="Check" size={14} style={{ color: "#06B6D4" }} className="flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-6">
          <Fade>
            <div className="text-center mb-14">
              <div className="section-badge mb-4">Что мы делаем</div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Ключевые{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1E40AF, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>направления</span>
              </h2>
              <p className="font-body text-gray-500 max-w-xl mx-auto">
                Полный цикл: от стратегии и финансовой аналитики до автоматизации и юридической защиты
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Fade key={s.title} delay={i * 0.08}>
                <div className="ic-card p-7 h-full cursor-pointer" onClick={() => setModalOpen(true)}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${s.color}12`, border: `1px solid ${s.color}28` }}>
                    <Icon name={s.icon} size={22} style={{ color: s.color }} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center gap-1 text-xs font-body font-semibold" style={{ color: s.color }}>
                    Узнать подробнее <Icon name="ArrowRight" size={13} />
                  </div>
                </div>
              </Fade>
            ))}
            <Fade delay={0.45}>
              <div className="rounded-xl p-7 ic-gradient flex flex-col justify-between cursor-pointer min-h-[220px]"
                onClick={() => setModalOpen(true)}>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    Узнайте, что подходит именно вам
                  </h3>
                  <p className="font-body text-white/80 text-sm leading-relaxed">
                    Бесплатная 30-минутная консультация — расскажите о задаче, предложим решение
                  </p>
                </div>
                <button className="btn-white mt-5 px-5 py-2.5 text-sm self-start">
                  Записаться бесплатно
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* DIGITAL PRODUCTS */}
      <section id="products" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pixel-bg opacity-25" />
        <div className="container mx-auto px-6 relative z-10">
          <Fade>
            <div className="text-center mb-14">
              <div className="section-badge mb-4">Технологии</div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Цифровые{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1E40AF, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>продукты</span>
              </h2>
              <p className="font-body text-gray-500 max-w-lg mx-auto">
                Готовые инструменты для автоматизации и роста вашего бизнеса прямо сейчас
              </p>
            </div>
          </Fade>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "Scale",
                title: "LegalTech — ИИ-юрист 24/7",
                desc: "Первичная диагностика, генерация договоров и претензий, эскалация к живому юристу. Работает в Telegram.",
                badge: "AI-powered",
                cta: "Попробовать демо",
                action: () => setBotOpen(true),
                dark: true,
              },
              {
                icon: "Bot",
                title: "Гибридный бот для селлеров",
                desc: "Управление продажами и финансовая аналитика в реальном времени на WB, Ozon, Яндекс.Маркет.",
                badge: "Интеграция API",
                cta: "Подключить бота",
                action: () => setModalOpen(true),
                dark: false,
              },
              {
                icon: "Gavel",
                title: "Юридический консалтинг",
                desc: "Регистрация бизнеса, договоры с партнёрами, защита от штрафов маркетплейсов.",
                badge: "Живой юрист",
                cta: "Получить консультацию",
                action: () => setModalOpen(true),
                dark: false,
              },
            ].map((p, i) => (
              <Fade key={p.title} delay={i * 0.1}>
                <div className={`rounded-2xl p-7 h-full flex flex-col ${p.dark ? "ic-gradient text-white" : "ic-card"}`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center`}
                      style={p.dark
                        ? { background: "rgba(255,255,255,0.18)" }
                        : { background: "rgba(30,64,175,0.08)", border: "1px solid rgba(30,64,175,0.14)" }}>
                      <Icon name={p.icon} size={22} style={{ color: p.dark ? "white" : "#1E40AF" }} />
                    </div>
                    <span className="tag-chip text-xs" style={p.dark ? { background: "rgba(255,255,255,0.18)", color: "white", borderColor: "rgba(255,255,255,0.3)" } : {}}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 className={`font-heading text-lg font-bold mb-3 ${p.dark ? "text-white" : "text-gray-900"}`}>{p.title}</h3>
                  <p className={`font-body text-sm leading-relaxed mb-6 flex-1 ${p.dark ? "text-white/80" : "text-gray-500"}`}>{p.desc}</p>
                  <button onClick={p.action}
                    className={`px-5 py-2.5 rounded-lg text-sm self-start ${p.dark ? "btn-white" : "btn-primary"}`}>
                    {p.cta}
                  </button>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-20" style={{ background: "#0F172A" }}>
        <div className="container mx-auto px-6">
          <Fade>
            <div className="text-center mb-14">
              <div className="section-badge mb-4"
                style={{ background: "rgba(6,182,212,0.14)", borderColor: "rgba(6,182,212,0.3)", color: "#67E8F9" }}>
                Наши принципы
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
                8 гарантий{" "}
                <span style={{
                  background: "linear-gradient(135deg, #06B6D4, #67E8F9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>надёжности</span>
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

      {/* PROCESS */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <Fade>
            <div className="text-center mb-14">
              <div className="section-badge mb-4">Методология</div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Как мы{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1E40AF, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>работаем</span>
              </h2>
              <p className="font-body text-gray-500">От первой встречи до масштабирования — прозрачно и по плану</p>
            </div>
          </Fade>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((s, i) => (
              <Fade key={s.num} delay={i * 0.08}>
                <div className="p-6 rounded-xl relative overflow-hidden h-full"
                  style={{ background: "#F8FAFF", border: "1px solid rgba(30,64,175,0.08)" }}>
                  <div className="absolute top-2 right-3 font-heading text-6xl font-black opacity-[0.05] leading-none"
                    style={{ color: "#1E40AF" }}>{s.num}</div>
                  <div className="guarantee-num mb-4">{s.num}</div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="about" className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-6">
          <Fade>
            <div className="text-center mb-12">
              <div className="section-badge mb-4">Наши клиенты</div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Для кого мы{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1E40AF, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>работаем</span>
              </h2>
            </div>
          </Fade>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a, i) => (
              <Fade key={a.label} delay={i * 0.06}>
                <div className="ic-card flex items-center gap-2.5 px-5 py-3 cursor-default">
                  <Icon name={a.icon} size={16} style={{ color: "#06B6D4" }} />
                  <span className="font-body text-sm text-gray-700 font-medium">{a.label}</span>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacts" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1E40AF 0%, #0891B2 100%)" }}>
        <div className="absolute inset-0 pixel-bg opacity-20" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, white, transparent)" }} />
        <div className="container mx-auto px-6 relative z-10">
          <Fade>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5">
                Готовы масштабировать бизнес?
              </h2>
              <p className="font-body text-white/80 text-lg mb-10">
                Оставьте заявку — и мы предложим формат работы под ваш запрос
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button onClick={() => setModalOpen(true)} className="btn-white px-9 py-4 text-base">
                  Записаться на консультацию
                </button>
                <button onClick={() => setBotOpen(true)}
                  className="px-9 py-4 text-base font-heading font-semibold rounded-lg transition-all duration-200"
                  style={{ border: "2px solid rgba(255,255,255,0.5)", color: "white", background: "transparent" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                  Попробовать демо-бота
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-7 text-white/75 text-sm font-body">
                <a href="tel:+79107747633" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Phone" size={14} /> +7 (910) 774-76-33
                </a>
                <a href="mailto:Natalya.saveleva.1973@mail.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Mail" size={14} /> Natalya.saveleva.1973@mail.ru
                </a>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={14} /> Пн–Пт 10:00–19:00 МСК
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: "#020617" }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg ic-gradient flex items-center justify-center flex-shrink-0">
                <Icon name="TrendingUp" size={13} className="text-white" />
              </div>
              <div className="font-heading text-sm font-bold">
                <span style={{ color: "#60A5FA" }}>ИНТЕЛЛЕКТ</span>{" "}
                <span style={{ color: "#22D3EE" }}>КОНСАЛТИНГ</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5 text-xs font-body text-gray-600">
              {navLinks.map(l => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="hover:text-gray-300 transition-colors">
                  {l.label}
                </button>
              ))}
              <span className="text-gray-700">·</span>
              <button className="hover:text-gray-300 transition-colors">Политика ПДн</button>
              <button className="hover:text-gray-300 transition-colors">Пользовательское соглашение</button>
            </div>

            <p className="text-xs text-gray-700 font-body">© 2026 ООО «Интеллект Консалтинг»</p>
          </div>
        </div>
      </footer>

      {/* Floating bot button */}
      {!botOpen && (
        <button onClick={() => setBotOpen(true)}
          className="fixed bottom-6 right-6 z-[88] w-14 h-14 rounded-full ic-gradient flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{ boxShadow: "0 8px 32px rgba(30,64,175,0.35)" }}
          title="Открыть демо-бота">
          <Icon name="MessageCircle" size={22} className="text-white" />
        </button>
      )}
    </div>
  );
}
