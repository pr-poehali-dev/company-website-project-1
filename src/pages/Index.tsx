import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a86e74a9-15a2-4560-bff9-d14a48ec6fea/files/ba9d8b85-f1ff-424f-9006-9efcfe47d461.jpg";
const PORTFOLIO_IMAGE = "https://cdn.poehali.dev/projects/a86e74a9-15a2-4560-bff9-d14a48ec6fea/files/a95be48a-f82a-40bc-94f1-f7951b537453.jpg";
const TEAM_IMAGE = "https://cdn.poehali.dev/projects/a86e74a9-15a2-4560-bff9-d14a48ec6fea/files/19133f83-ae90-409c-8941-3d862b2828a2.jpg";

const services = [
  { icon: "Monitor", title: "Веб-разработка", desc: "Современные сайты и веб-приложения с уникальным дизайном под ваш бизнес", color: "var(--neon-cyan)" },
  { icon: "Smartphone", title: "Мобильные приложения", desc: "iOS и Android приложения, которые полюбят ваши клиенты", color: "var(--neon-purple)" },
  { icon: "Palette", title: "UI/UX Дизайн", desc: "Интерфейсы, которые конвертируют посетителей в покупателей", color: "var(--neon-pink)" },
  { icon: "BarChart3", title: "Digital-маркетинг", desc: "SEO, таргетинг, аналитика — полный цикл продвижения в интернете", color: "var(--neon-green)" },
  { icon: "Shield", title: "Безопасность", desc: "Защита данных, SSL-сертификаты, аудит уязвимостей сайта", color: "var(--neon-cyan)" },
  { icon: "Zap", title: "Оптимизация скорости", desc: "Ускоряем сайты до 95+ баллов по PageSpeed для роста продаж", color: "var(--neon-purple)" },
];

const portfolio = [
  { title: "NEXUS Store", category: "Интернет-магазин", year: "2024", img: PORTFOLIO_IMAGE },
  { title: "AURA Finance", category: "Финтех-платформа", year: "2024", img: TEAM_IMAGE },
  { title: "VIBE Agency", category: "Корпоративный сайт", year: "2023", img: HERO_IMAGE },
  { title: "PULSE Health", category: "Медицинский портал", year: "2023", img: PORTFOLIO_IMAGE },
  { title: "GRID Studio", category: "Портфолио дизайнера", year: "2024", img: TEAM_IMAGE },
  { title: "CORE Analytics", category: "SaaS-дашборд", year: "2024", img: HERO_IMAGE },
];

const posts = [
  {
    date: "05 МАЯ 2026",
    tag: "Дизайн",
    title: "Тренды UI/UX 2026: что изменилось и что работает",
    excerpt: "Разбираем главные сдвиги в дизайне интерфейсов — от неоморфизма к glassmorphism и обратно.",
    readTime: "5 мин",
    color: "var(--neon-cyan)",
  },
  {
    date: "28 АПР 2026",
    tag: "Разработка",
    title: "React vs Next.js в 2026: что выбрать для нового проекта",
    excerpt: "Честный разбор без воды — когда нужен Next.js, а когда хватит чистого React.",
    readTime: "7 мин",
    color: "var(--neon-purple)",
  },
  {
    date: "15 АПР 2026",
    tag: "Маркетинг",
    title: "Как мы подняли конверсию клиента с 1.2% до 4.8%",
    excerpt: "Кейс: 6 изменений на лендинге, которые утроили количество заявок за месяц.",
    readTime: "9 мин",
    color: "var(--neon-pink)",
  },
];

const stats = ["150+ проектов", "8 лет на рынке", "97% довольных клиентов", "40+ специалистов"];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Index() {
  const [activeNav, setActiveNav] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const heroSection = useInView(0.2);
  const servicesSection = useInView(0.1);
  const portfolioSection = useInView(0.1);
  const blogSection = useInView(0.1);
  const contactSection = useInView(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 1800);
  };

  const navLinks = [
    { id: "hero", label: "Главная" },
    { id: "services", label: "Услуги" },
    { id: "portfolio", label: "Портфолио" },
    { id: "blog", label: "Блог" },
    { id: "contact", label: "Контакты" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(10,15,26,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,229,255,0.08)" }}>
        <div className="font-display text-xl font-bold tracking-widest uppercase" style={{ color: "var(--neon-cyan)" }}>
          NOVA<span className="text-white">AGENCY</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="font-body text-sm tracking-wide transition-all duration-200"
              style={{ color: activeNav === l.id ? "var(--neon-cyan)" : "rgba(255,255,255,0.6)" }}>
              {l.label}
            </button>
          ))}
        </div>

        <button className="hidden md:block neon-btn px-5 py-2 rounded-lg text-sm" onClick={() => scrollTo("contact")}>
          Обсудить проект
        </button>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
          style={{ background: "rgba(10,15,26,0.97)" }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="font-display text-3xl font-semibold tracking-widest uppercase transition-all"
              style={{ color: activeNav === l.id ? "var(--neon-cyan)" : "white" }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: "var(--neon-cyan)" }} />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full opacity-15 blur-3xl animate-float"
          style={{ background: "var(--neon-purple)", animationDelay: "3s" }} />

        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div ref={heroSection.ref}
            style={{ opacity: heroSection.inView ? 1 : 0, transform: heroSection.inView ? "none" : "translateY(40px)", transition: "all 0.8s ease" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-body tracking-widest uppercase"
              style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.25)", color: "var(--neon-cyan)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: "var(--neon-cyan)" }} />
              Digital-агентство нового поколения
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 uppercase tracking-tight">
              Создаём{" "}
              <span className="neon-text-cyan">сайты</span>
              {" "}что{" "}
              <span className="neon-text-pink">продают</span>
            </h1>

            <p className="font-body text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              Разрабатываем уникальные веб-проекты, мобильные приложения и digital-стратегии — от идеи до запуска и роста.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="neon-btn px-8 py-4 rounded-xl text-base" onClick={() => scrollTo("contact")}>
                Начать проект
              </button>
              <button className="neon-btn-outline px-8 py-4 rounded-xl text-base" onClick={() => scrollTo("portfolio")}>
                Смотреть работы
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {[["150+", "проектов"], ["8", "лет опыта"], ["97%", "довольных"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-bold" style={{ color: "var(--neon-cyan)" }}>{num}</div>
                  <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(0,229,255,0.2)", boxShadow: "0 0 60px rgba(0,229,255,0.15)" }}>
              <img src={HERO_IMAGE} alt="Agency" className="w-full object-cover" style={{ height: "520px" }} />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,15,26,0.6) 0%, transparent 60%)" }} />
            </div>

            <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl animate-float stagger-2"
              style={{ background: "rgba(10,15,26,0.9)", border: "1px solid rgba(0,229,255,0.3)", backdropFilter: "blur(12px)" }}>
              <div className="flex items-center gap-2">
                <Icon name="TrendingUp" size={16} style={{ color: "var(--neon-green)" }} />
                <span className="font-body text-sm text-white">+340% трафика за квартал</span>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 px-5 py-3 rounded-xl animate-float stagger-4"
              style={{ background: "rgba(10,15,26,0.9)", border: "1px solid rgba(155,89,255,0.3)", backdropFilter: "blur(12px)" }}>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={16} style={{ color: "var(--neon-purple)" }} />
                <span className="font-body text-sm text-white">Рейтинг 4.9 / 5.0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex whitespace-nowrap marquee-track">
            {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
              <span key={i} className="font-display text-sm font-semibold tracking-widest uppercase mx-8"
                style={{ color: "rgba(255,255,255,0.25)" }}>
                {s} <span style={{ color: "var(--neon-cyan)" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div ref={servicesSection.ref} className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16"
            style={{ opacity: servicesSection.inView ? 1 : 0, transform: servicesSection.inView ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-body tracking-widest uppercase mb-4"
              style={{ background: "rgba(155,89,255,0.1)", border: "1px solid rgba(155,89,255,0.3)", color: "var(--neon-purple)" }}>
              Что мы делаем
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
              Наши <span className="neon-text-cyan">услуги</span>
            </h2>
            <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              Полный цикл разработки и продвижения вашего digital-продукта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="card-glow rounded-2xl p-7 cursor-pointer"
                style={{ opacity: servicesSection.inView ? 1 : 0, transform: servicesSection.inView ? "none" : "translateY(40px)", transition: `all 0.6s ease ${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}40` }}>
                  <Icon name={s.icon} size={22} style={{ color: s.color }} />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-3 text-white">{s.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-body font-medium" style={{ color: s.color }}>
                  Подробнее <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 grid-bg relative">
        <div ref={portfolioSection.ref} className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
            style={{ opacity: portfolioSection.inView ? 1 : 0, transform: portfolioSection.inView ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-body tracking-widest uppercase mb-4"
                style={{ background: "rgba(255,45,126,0.1)", border: "1px solid rgba(255,45,126,0.3)", color: "var(--neon-pink)" }}>
                Наши работы
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
                Порт<span className="neon-text-pink">фолио</span>
              </h2>
            </div>
            <p className="font-body text-base max-w-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Избранные проекты, которыми мы гордимся
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  opacity: portfolioSection.inView ? 1 : 0,
                  transform: portfolioSection.inView ? "none" : "translateY(40px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                  border: "1px solid rgba(255,255,255,0.06)"
                }}>
                <img src={p.img} alt={p.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ height: "260px" }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,15,26,0.95) 30%, rgba(10,15,26,0.2) 100%)" }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                  style={{ background: "rgba(0,229,255,0.06)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "var(--neon-cyan)", color: "#0a0f1a" }}>
                    <Icon name="ArrowUpRight" size={20} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-body text-xs tracking-widest uppercase mb-1" style={{ color: "var(--neon-cyan)" }}>{p.category}</div>
                  <div className="flex items-end justify-between">
                    <h3 className="font-display text-xl font-semibold uppercase text-white">{p.title}</h3>
                    <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{p.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 relative">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div ref={blogSection.ref} className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16"
            style={{ opacity: blogSection.inView ? 1 : 0, transform: blogSection.inView ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-body tracking-widest uppercase mb-4"
              style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.25)", color: "var(--neon-cyan)" }}>
              Экспертиза
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
              <span className="neon-text-cyan">Блог</span>
            </h2>
            <p className="font-body text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              Делимся знаниями о дизайне, разработке и digital-маркетинге
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article key={i} className="card-glow rounded-2xl overflow-hidden cursor-pointer"
                style={{ opacity: blogSection.inView ? 1 : 0, transform: blogSection.inView ? "none" : "translateY(40px)", transition: `all 0.6s ease ${i * 0.15}s` }}>
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }} />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-body text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: `${post.color}18`, color: post.color, border: `1px solid ${post.color}30` }}>
                      {post.tag}
                    </span>
                    <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white mb-3 leading-snug">{post.title}</h3>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="flex items-center gap-1.5 text-xs font-body" style={{ color: "rgba(255,255,255,0.35)" }}>
                      <Icon name="Clock" size={12} />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-body font-medium" style={{ color: post.color }}>
                      Читать <Icon name="ArrowRight" size={12} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 grid-bg relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--neon-cyan), var(--neon-purple))" }} />

        <div ref={contactSection.ref} className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12"
              style={{ opacity: contactSection.inView ? 1 : 0, transform: contactSection.inView ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-body tracking-widest uppercase mb-4"
                style={{ background: "rgba(255,45,126,0.1)", border: "1px solid rgba(255,45,126,0.3)", color: "var(--neon-pink)" }}>
                Начнём работу
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
                Ваш <span className="neon-text-pink">проект</span>
              </h2>
              <p className="font-body text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
                Заполните форму — ответим в течение 2 часов
              </p>
            </div>

            {formState === "sent" ? (
              <div className="text-center py-16 rounded-2xl"
                style={{ background: "rgba(0,255,135,0.05)", border: "1px solid rgba(0,255,135,0.25)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(0,255,135,0.15)", border: "2px solid rgba(0,255,135,0.5)" }}>
                  <Icon name="Check" size={28} style={{ color: "var(--neon-green)" }} />
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase text-white mb-3">Заявка отправлена!</h3>
                <p className="font-body" style={{ color: "rgba(255,255,255,0.5)" }}>Свяжемся с вами в течение 2 часов</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl p-8 md:p-10"
                style={{
                  opacity: contactSection.inView ? 1 : 0,
                  transform: contactSection.inView ? "none" : "translateY(40px)",
                  transition: "all 0.7s ease 0.2s",
                  background: "hsl(var(--card))",
                  border: "1px solid rgba(0,229,255,0.15)",
                  boxShadow: "0 0 60px rgba(0,229,255,0.05)"
                }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  {[
                    { field: "name", label: "Ваше имя", placeholder: "Иван Петров", type: "text" },
                    { field: "email", label: "Email", placeholder: "ivan@company.ru", type: "email" },
                    { field: "phone", label: "Телефон", placeholder: "+7 (999) 123-45-67", type: "tel" },
                    { field: "service", label: "Нужная услуга", placeholder: "Веб-разработка", type: "text" },
                  ].map(({ field, label, placeholder, type }) => (
                    <div key={field}>
                      <label className="block font-body text-xs font-medium mb-2 tracking-wide"
                        style={{ color: "rgba(255,255,255,0.5)" }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={formData[field as keyof typeof formData]}
                        onChange={e => setFormData(d => ({ ...d, [field]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder:text-white/25 outline-none transition-all duration-200"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                        onFocus={e => { e.target.style.borderColor = "rgba(0,229,255,0.5)"; e.target.style.boxShadow = "0 0 15px rgba(0,229,255,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block font-body text-xs font-medium mb-2 tracking-wide"
                    style={{ color: "rgba(255,255,255,0.5)" }}>
                    Расскажите о проекте
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Опишите задачу, сроки, бюджет..."
                    value={formData.message}
                    onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder:text-white/25 outline-none transition-all duration-200 resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={e => { e.target.style.borderColor = "rgba(0,229,255,0.5)"; e.target.style.boxShadow = "0 0 15px rgba(0,229,255,0.1)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>

                <button type="submit" disabled={formState === "sending"}
                  className="w-full neon-btn py-4 rounded-xl text-base flex items-center justify-center gap-2 disabled:opacity-70">
                  {formState === "sending" ? (
                    <>
                      <Icon name="Loader2" size={18} className="animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={18} />
                      Отправить заявку
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-12" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-lg font-bold tracking-widest uppercase" style={{ color: "var(--neon-cyan)" }}>
            NOVA<span className="text-white">AGENCY</span>
          </div>

          <div className="flex items-center gap-6">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className="font-body text-xs tracking-wide transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}>
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {["Instagram", "Twitter", "Linkedin", "Youtube"].map(soc => (
              <div key={soc} className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Icon name={soc} size={16} style={{ color: "rgba(255,255,255,0.5)" }} />
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto mt-6 text-center font-body text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          © 2026 NovaAgency. Все права защищены.
        </div>
      </footer>
    </div>
  );
}