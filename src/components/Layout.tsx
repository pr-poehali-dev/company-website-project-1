import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";
import Logo from "@/components/Logo";

const navItems = [
  {
    label: "Услуги",
    href: "/uslugi",
    children: [
      { label: "Менеджмент маркетплейсов", href: "/uslugi/menedzhment-marketpleysov" },
      { label: "Финансовая аналитика", href: "/uslugi/finansovaya-analitika" },
      { label: "Автоматизация бизнеса", href: "/uslugi/avtomatizatsiya-biznesa" },
      { label: "AI-дизайн", href: "/uslugi/ai-dizayn-uslugi" },
      { label: "Юридические услуги", href: "/uslugi/yuridicheskie-uslugi" },
    ],
  },
  {
    label: "Продукты",
    href: "/products",
    children: [
      { label: "LegalTech — ИИ-юрист", href: "/legaltech" },
      { label: "Гибридный бот для селлеров", href: "/hybrid-bot-marketplace" },
    ],
  },
  { label: "Прайс", href: "/pricing" },
  { label: "Кейсы", href: "/keisy" },
  { label: "Блог", href: "/blog" },
  { label: "О компании", href: "/o-nas" },
  { label: "Контакты", href: "/kontakty" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [emailSub, setEmailSub] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const go = (href: string) => { navigate(href); setMenuOpen(false); };

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.0)",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(30,64,175,0.08)" : "none",
          boxShadow: scrolled ? "0 2px 16px rgba(30,64,175,0.07)" : "none",
        }}
      >
        <div className="container mx-auto px-5 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => go("/")}
            className="flex items-center flex-shrink-0"
          >
            <Logo size={36} variant="default" showText={true} textSize="sm" />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => go(item.href)}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-body transition-colors duration-200 hover:bg-blue-50"
                  style={{ color: isActive(item.href) ? "#06B6D4" : "#374151" }}
                >
                  {item.label}
                  {item.children && (
                    <Icon
                      name="ChevronDown"
                      size={13}
                      style={{
                        color: "currentColor",
                        transform: openDropdown === item.label ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  )}
                </button>

                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 pt-1 z-50"
                    style={{ minWidth: "220px" }}
                  >
                    <div
                      className="bg-white rounded-xl shadow-xl py-2 border border-gray-100"
                      style={{ boxShadow: "0 8px 32px rgba(30,64,175,0.12)" }}
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.href}
                          onClick={() => go(child.href)}
                          className="w-full text-left px-4 py-2.5 text-sm font-body transition-colors hover:bg-blue-50"
                          style={{ color: isActive(child.href) ? "#06B6D4" : "#374151" }}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => go("/cabinet")}
              className="px-3 py-2 text-sm font-body text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1.5"
            >
              <Icon name="User" size={15} />
              Кабинет
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary px-5 py-2 text-sm"
            >
              Консультация
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
          >
            <Icon
              name={menuOpen ? "X" : "Menu"}
              size={22}
              className="text-gray-700"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 overflow-y-auto">
          <div className="container mx-auto px-5 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <button
                  onClick={() => {
                    if (!item.children) go(item.href);
                    else setOpenDropdown(openDropdown === item.label ? null : item.label);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-body font-medium transition-colors"
                  style={{
                    color: isActive(item.href) ? "#06B6D4" : "#1F2937",
                    background: isActive(item.href) ? "rgba(6,182,212,0.06)" : "transparent",
                  }}
                >
                  {item.label}
                  {item.children && (
                    <Icon
                      name="ChevronDown"
                      size={16}
                      className="text-gray-400"
                      style={{
                        transform: openDropdown === item.label ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  )}
                </button>
                {item.children && openDropdown === item.label && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {item.children.map((child) => (
                      <button
                        key={child.href}
                        onClick={() => go(child.href)}
                        className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-body transition-colors"
                        style={{ color: isActive(child.href) ? "#06B6D4" : "#4B5563" }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => go("/cabinet")}
                className="btn-outline w-full py-3 text-sm"
              >
                Личный кабинет
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary w-full py-3 text-sm"
              >
                Записаться на консультацию
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <main>{children}</main>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0F172A" }}>
        <div className="container mx-auto px-5 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1 */}
            <div>
              <button onClick={() => go("/")} className="flex items-center mb-4">
                <Logo size={32} variant="white" showText={true} textSize="sm" />
              </button>
              <p className="font-body text-xs text-slate-400 leading-relaxed mb-5">
                Цифровые решения для e-commerce: от стратегии до автоматизации и AI-дизайна.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+79107747633"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors font-body"
                >
                  <Icon name="Phone" size={13} /> +7 (910) 774-76-33
                </a>
                <a
                  href="mailto:Natalya.saveleva.1973@mail.ru"
                  className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors font-body"
                >
                  <Icon name="Mail" size={13} /> Natalya.saveleva.1973@mail.ru
                </a>
                <p className="flex items-center gap-2 text-xs text-slate-400 font-body">
                  <Icon name="Clock" size={13} /> Пн–Пт 10:00–19:00 МСК
                </p>
              </div>
              <div className="flex gap-2 mt-5">
                {[
                  { icon: "Send", label: "Telegram" },
                  { icon: "MessageCircle", label: "WhatsApp" },
                  { icon: "Users", label: "VK" },
                ].map((s) => (
                  <div
                    key={s.label}
                    title={s.label}
                    className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Icon name={s.icon} size={14} className="text-slate-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-heading text-sm font-bold text-white mb-4">Услуги</h4>
              <ul className="space-y-2.5">
                {[
                  ["Менеджмент МП", "/uslugi/menedzhment-marketpleysov"],
                  ["Финансовая аналитика", "/uslugi/finansovaya-analitika"],
                  ["Автоматизация бизнеса", "/uslugi/avtomatizatsiya-biznesa"],
                  ["AI-дизайн", "/uslugi/ai-dizayn-uslugi"],
                  ["Юридические услуги", "/uslugi/yuridicheskie-uslugi"],
                  ["LegalTech", "/legaltech"],
                  ["Гибридный бот", "/hybrid-bot-marketplace"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <button
                      onClick={() => go(href)}
                      className="font-body text-xs text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-heading text-sm font-bold text-white mb-4">Документы</h4>
              <ul className="space-y-2.5">
                {[
                  ["Политика обработки ПДн", "/privacy"],
                  ["Пользовательское соглашение", "/terms"],
                  ["Cookie Policy", "/cookies"],
                  ["Реквизиты", "/o-nas"],
                  ["Кейсы", "/keisy"],
                  ["Блог", "/blog"],
                  ["О компании", "/o-nas"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <button
                      onClick={() => go(href)}
                      className="font-body text-xs text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-heading text-sm font-bold text-white mb-4">Полезные материалы</h4>
              <p className="font-body text-xs text-slate-400 leading-relaxed mb-4">
                Статьи по маркетплейсам, автоматизации и защите бизнеса — раз в неделю.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.ru"
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  className="ic-input text-xs py-2.5 flex-1"
                  style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)", color: "white" }}
                />
                <button className="btn-primary px-3 py-2 text-xs flex-shrink-0">
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
              <p className="font-body text-[10px] text-slate-600 mt-2">
                Только для согласившихся. Отписаться можно в любой момент.
              </p>
            </div>
          </div>

          <div
            className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p className="font-body text-xs text-slate-600">
              © 2026 ООО «Интеллект Консалтинг». Все права защищены.
            </p>
            <p className="font-body text-xs text-slate-700">
              Работаем онлайн по всей России и СНГ
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 z-[89] w-14 h-14 rounded-full ic-gradient flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ boxShadow: "0 8px 32px rgba(30,64,175,0.35)" }}
        title="Записаться на консультацию"
      >
        <Icon name="MessageCircle" size={22} className="text-white" />
      </button>
    </div>
  );
}