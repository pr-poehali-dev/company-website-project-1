import { useState, useEffect } from "react";
import { GradientText } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";

// ─────────────────────────── types ───────────────────────────

type AuthStep = "email" | "code" | "dashboard";
type NavItem = "projects" | "documents" | "tasks" | "payment" | "bot" | "settings";
type PaymentMethod = "yukassa" | "tinkoff" | "sbp";
type PayState = "idle" | "processing" | "success";

// ─────────────────────────── PaymentModal ───────────────────────────

function PaymentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [method, setMethod] = useState<PaymentMethod>("yukassa");
  const [agreed, setAgreed] = useState(false);
  const [payState, setPayState] = useState<PayState>("idle");

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setPayState("processing");
    setTimeout(() => setPayState("success"), 2000);
  };

  const handleClose = () => {
    setPayState("idle");
    setMethod("yukassa");
    setAgreed(false);
    onClose();
  };

  if (!open) return null;

  const methods: { id: PaymentMethod; label: string; icon: string; desc: string }[] = [
    { id: "yukassa", label: "ЮKassa", icon: "CreditCard", desc: "Карта, СБП, кошельки" },
    { id: "tinkoff", label: "Тинькофф", icon: "Landmark", desc: "Оплата через Тинькофф Бизнес" },
    { id: "sbp", label: "СБП", icon: "Smartphone", desc: "Система быстрых платежей" },
  ];

  const payments = [
    { date: "15 апр 2026", desc: "Этап 2: Дизайн и прототип", amount: "85 000 ₽", status: "Оплачено" },
    { date: "1 мар 2026", desc: "Этап 1: Аналитика и стратегия", amount: "40 000 ₽", status: "Оплачено" },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.75)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md max-h-[92vh] overflow-y-auto"
        style={{ boxShadow: "0 24px 80px rgba(30,64,175,0.22)" }}
      >
        <div className="p-7">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-bold text-gray-900">
              Оплата этапа
            </h3>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Icon name="X" size={18} className="text-gray-500" />
            </button>
          </div>

          {payState === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ic-gradient">
                <Icon name="Check" size={28} className="text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">
                Платёж проведён!
              </h4>
              <p className="font-body text-sm text-gray-500 mb-6 leading-relaxed">
                Этап 3 оплачен. Команда приступает к работе.
                <br />
                Чек отправлен на ваш email.
              </p>
              <button onClick={handleClose} className="btn-primary px-8 py-2.5 text-sm">
                Закрыть
              </button>
            </div>
          ) : (
            <form onSubmit={handlePay} className="space-y-5">
              {/* Счёт */}
              <div
                className="rounded-xl p-5"
                style={{ background: "linear-gradient(135deg, #EFF6FF, #F0FDFF)", border: "1px solid rgba(6,182,212,0.2)" }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-body text-sm text-gray-500">Этап 3: Верстка и разработка</span>
                  <span className="tag-chip">Текущий</span>
                </div>
                <div className="font-heading text-3xl font-extrabold" style={{ color: "#1E40AF" }}>
                  125 000 ₽
                </div>
                <div className="font-body text-xs text-gray-400 mt-1">
                  Договор №IC-2026-047 от 1 марта 2026
                </div>
              </div>

              {/* Способы оплаты */}
              <div>
                <p className="font-body text-xs font-medium text-gray-500 mb-3">
                  Способ оплаты
                </p>
                <div className="space-y-2">
                  {methods.map((m) => (
                    <label
                      key={m.id}
                      className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200"
                      style={{
                        border: method === m.id ? "2px solid #06B6D4" : "1.5px solid #E5E7EB",
                        background: method === m.id ? "#F0FDFF" : "white",
                      }}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        value={m.id}
                        checked={method === m.id}
                        onChange={() => setMethod(m.id)}
                        className="accent-blue-600 w-4 h-4"
                      />
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: method === m.id ? "rgba(6,182,212,0.12)" : "#F3F4F6" }}
                      >
                        <Icon name={m.icon} size={18} style={{ color: method === m.id ? "#06B6D4" : "#9CA3AF" }} />
                      </div>
                      <div>
                        <div className="font-heading text-sm font-semibold text-gray-900">{m.label}</div>
                        <div className="font-body text-xs text-gray-400">{m.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Согласие */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded accent-blue-600"
                />
                <span className="text-xs text-gray-500 font-body leading-relaxed">
                  Я принимаю условия{" "}
                  <span className="underline" style={{ color: "#06B6D4" }}>оферты</span>{" "}
                  и подтверждаю оплату *
                </span>
              </label>

              <button
                type="submit"
                disabled={payState === "processing"}
                className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
              >
                {payState === "processing" ? (
                  <>
                    <Icon name="Loader2" size={16} className="animate-spin" />
                    Обработка...
                  </>
                ) : (
                  <>
                    <Icon name="Lock" size={16} />
                    Оплатить 125 000 ₽
                  </>
                )}
              </button>

              {/* История платежей */}
              <div>
                <p className="font-body text-xs font-medium text-gray-400 mb-3 uppercase tracking-wider">
                  История платежей
                </p>
                <div className="space-y-2">
                  {payments.map((p) => (
                    <div
                      key={p.desc}
                      className="flex items-center justify-between p-3 rounded-lg"
                      style={{ background: "#F9FAFB", border: "1px solid #F3F4F6" }}
                    >
                      <div>
                        <div className="font-body text-xs font-medium text-gray-700">{p.desc}</div>
                        <div className="font-body text-[11px] text-gray-400">{p.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-heading text-sm font-bold text-gray-900">{p.amount}</div>
                        <div
                          className="font-body text-[11px] font-medium"
                          style={{ color: "#16A34A" }}
                        >
                          {p.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────── CabinetPage ───────────────────────────

export default function CabinetPage() {
  const [step, setStep] = useState<AuthStep>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(120);
  const [timerActive, setTimerActive] = useState(false);
  const [activeNav, setActiveNav] = useState<NavItem>("projects");
  const [paymentOpen, setPaymentOpen] = useState(false);

  // Таймер обратного отсчёта
  useEffect(() => {
    if (!timerActive) return;
    if (timer <= 0) {
      setTimerActive(false);
      return;
    }
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timerActive, timer]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("code");
    setTimer(120);
    setTimerActive(true);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("dashboard");
  };

  const handleResend = () => {
    setTimer(120);
    setTimerActive(true);
  };

  const formatTimer = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const maskEmail = (e: string) => {
    const [local, domain] = e.split("@");
    if (!local || !domain) return e;
    return `${local.slice(0, 2)}***@${domain}`;
  };

  const navItems: { id: NavItem; icon: string; label: string }[] = [
    { id: "projects", icon: "FolderOpen", label: "Проекты" },
    { id: "documents", icon: "FileText", label: "Документы" },
    { id: "tasks", icon: "CheckSquare", label: "Задачи" },
    { id: "payment", icon: "CreditCard", label: "Оплата" },
    { id: "bot", icon: "Bot", label: "Дашборд бота" },
    { id: "settings", icon: "Settings", label: "Настройки" },
  ];

  const documents = [
    { name: "Договор №IC-2026-047", date: "1 мар 2026", type: "PDF" },
    { name: "Акт выполненных работ. Этап 1", date: "15 мар 2026", type: "PDF" },
    { name: "Акт выполненных работ. Этап 2", date: "20 апр 2026", type: "PDF" },
    { name: "Счёт на оплату. Этап 3", date: "28 апр 2026", type: "PDF" },
  ];

  const tasks = [
    { status: "done", label: "Аудит и стратегия" },
    { status: "done", label: "Аналитика и ТЗ" },
    { status: "progress", label: "Дизайн и прототип" },
    { status: "upcoming", label: "Верстка и разработка" },
    { status: "upcoming", label: "Интеграция CRM" },
    { status: "upcoming", label: "Тестирование и сдача" },
  ];

  const taskIcon = (status: string) => {
    if (status === "done") return { icon: "CheckCircle2", color: "#16A34A" };
    if (status === "progress") return { icon: "Loader2", color: "#F59E0B" };
    return { icon: "Circle", color: "#D1D5DB" };
  };

  // ── Экран авторизации (email) ──
  if (step === "email") {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 py-20"
        style={{ background: "linear-gradient(135deg, #F8FAFF 0%, #EFF6FF 100%)" }}
      >
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ic-gradient"
            >
              <Icon name="UserCircle" size={30} className="text-white" />
            </div>
            <h1 className="font-heading text-2xl font-extrabold text-gray-900 mb-2">
              Личный кабинет клиента
            </h1>
            <p className="font-body text-sm text-gray-500">
              Войдите, чтобы просматривать проекты и документы
            </p>
          </div>

          <div className="ic-card p-7">
            <form onSubmit={handleEmailSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                  Email *
                </label>
                <input
                  type="email"
                  className="ic-input"
                  placeholder="ivan@company.ru"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2">
                <Icon name="Mail" size={15} />
                Получить код
              </button>
            </form>

            <div className="relative flex items-center gap-3 mb-6">
              <div className="flex-1 h-px" style={{ background: "#E5E7EB" }} />
              <span className="font-body text-xs text-gray-400">или войти через</span>
              <div className="flex-1 h-px" style={{ background: "#E5E7EB" }} />
            </div>

            <div className="space-y-2">
              {[
                { label: "Войти через Telegram", icon: "Send", color: "#1E40AF", bg: "#EFF6FF" },
                { label: "Войти через WhatsApp", icon: "MessageCircle", color: "#059669", bg: "#ECFDF5" },
                { label: "Войти через VK", icon: "Users", color: "#2563EB", bg: "#EFF6FF" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => setStep("code")}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-heading text-sm font-semibold transition-all hover:opacity-80"
                  style={{ background: btn.bg, color: btn.color, border: `1.5px solid ${btn.bg}` }}
                >
                  <Icon name={btn.icon} size={16} />
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Экран ввода кода ──
  if (step === "code") {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 py-20"
        style={{ background: "linear-gradient(135deg, #F8FAFF 0%, #EFF6FF 100%)" }}
      >
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ic-gradient"
            >
              <Icon name="KeyRound" size={28} className="text-white" />
            </div>
            <h2 className="font-heading text-2xl font-extrabold text-gray-900 mb-2">
              Введите код подтверждения
            </h2>
            <p className="font-body text-sm text-gray-500">
              Код отправлен на{" "}
              <span className="font-semibold text-gray-700">{maskEmail(email || "ваш@email.ru")}</span>
            </p>
          </div>

          <div className="ic-card p-7">
            <form onSubmit={handleCodeSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                  Код из письма
                </label>
                <input
                  className="ic-input text-center font-heading text-2xl font-bold tracking-[0.5em]"
                  maxLength={6}
                  placeholder="------"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                />
              </div>

              {/* Таймер */}
              <div className="flex items-center justify-between">
                <span className="font-body text-xs text-gray-400">
                  {timerActive
                    ? `Повторная отправка через ${formatTimer(timer)}`
                    : "Код не пришёл?"}
                </span>
                <button
                  type="button"
                  disabled={timerActive}
                  onClick={handleResend}
                  className="font-heading text-xs font-semibold transition-opacity"
                  style={{
                    color: timerActive ? "#9CA3AF" : "#1E40AF",
                    cursor: timerActive ? "not-allowed" : "pointer",
                  }}
                >
                  Отправить повторно
                </button>
              </div>

              <button type="submit" className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2">
                <Icon name="LogIn" size={15} />
                Войти
              </button>
            </form>

            <button
              onClick={() => setStep("email")}
              className="mt-4 w-full flex items-center justify-center gap-2 font-body text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icon name="ArrowLeft" size={13} />
              Изменить email
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Дашборд ──
  return (
    <div
      className="min-h-screen flex"
      style={{ background: "#F3F4F6", paddingTop: "64px" }}
    >
      {/* Сайдбар */}
      <aside
        className="w-60 flex-shrink-0 hidden md:flex flex-col fixed left-0 top-16 bottom-0 overflow-y-auto"
        style={{ background: "#0F172A", borderRight: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Профиль */}
        <div
          className="p-5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center ic-gradient">
              <Icon name="User" size={18} className="text-white" />
            </div>
            <div>
              <div className="font-heading text-sm font-bold text-white leading-tight">
                Личный кабинет
              </div>
              <div
                className="font-body text-xs truncate max-w-[130px]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {email || "client@ic.ru"}
              </div>
            </div>
          </div>
        </div>

        {/* Навигация */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-heading text-sm font-medium transition-all duration-200"
                style={
                  isActive
                    ? { background: "rgba(6,182,212,0.15)", color: "#67E8F9" }
                    : { color: "rgba(255,255,255,0.55)" }
                }
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Выход */}
        <div
          className="p-3 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <button
            onClick={() => setStep("email")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-heading text-sm font-medium transition-colors"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            <Icon name="LogOut" size={16} />
            Выйти
          </button>
        </div>
      </aside>

      {/* Основная область */}
      <main className="flex-1 md:ml-60 p-6 md:p-8 max-w-full overflow-x-hidden">
        <div className="max-w-4xl">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="font-heading text-2xl font-extrabold text-gray-900 mb-1">
              Мои проекты
            </h1>
            <p className="font-body text-sm text-gray-400">
              Статус и прогресс текущих проектов
            </p>
          </div>

          {/* Карточка проекта */}
          <div className="ic-card p-7 mb-8">
            <div className="flex items-start justify-between mb-5 gap-4 flex-wrap">
              <div>
                <h2 className="font-heading text-lg font-bold text-gray-900 mb-1">
                  Автоматизация продаж на WB
                </h2>
                <p className="font-body text-sm text-gray-400">
                  Договор №IC-2026-047 · Начало: 1 марта 2026
                </p>
              </div>
              <span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-heading text-xs font-semibold flex-shrink-0"
                style={{ background: "#FFFBEB", color: "#D97706", border: "1.5px solid #FCD34D" }}
              >
                <Icon name="Circle" size={8} style={{ color: "#F59E0B" }} />
                В работе
              </span>
            </div>

            {/* Прогресс */}
            <div className="mb-2 flex items-center justify-between">
              <span className="font-body text-xs text-gray-500">Шаг 3 из 6: Верстка и разработка</span>
              <span className="font-heading text-sm font-bold" style={{ color: "#1E40AF" }}>45%</span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden mb-6" style={{ background: "#E5E7EB" }}>
              <div
                className="h-full rounded-full ic-gradient transition-all duration-700"
                style={{ width: "45%" }}
              />
            </div>

            {/* Задачи */}
            <div className="space-y-2.5">
              {tasks.map((t) => {
                const { icon, color } = taskIcon(t.status);
                return (
                  <div key={t.label} className="flex items-center gap-3">
                    <Icon name={icon} size={18} style={{ color, flexShrink: 0 }} />
                    <span
                      className="font-body text-sm"
                      style={{
                        color: t.status === "done" ? "#374151" : t.status === "progress" ? "#D97706" : "#9CA3AF",
                        textDecoration: t.status === "done" ? "line-through" : "none",
                      }}
                    >
                      {t.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Документы */}
          <div className="ic-card p-7 mb-8">
            <h2 className="font-heading text-lg font-bold text-gray-900 mb-5">
              Документы
            </h2>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between p-4 rounded-xl"
                  style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(30,64,175,0.08)" }}
                    >
                      <Icon name="FileText" size={16} style={{ color: "#1E40AF" }} />
                    </div>
                    <div>
                      <div className="font-heading text-sm font-semibold text-gray-900">
                        {doc.name}
                      </div>
                      <div className="font-body text-xs text-gray-400">{doc.date}</div>
                    </div>
                  </div>
                  <button
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-heading text-xs font-semibold transition-all hover:opacity-80"
                    style={{
                      background: "rgba(6,182,212,0.08)",
                      color: "#0891B2",
                      border: "1px solid rgba(6,182,212,0.2)",
                    }}
                  >
                    <Icon name="Download" size={13} />
                    Скачать {doc.type}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Оплата */}
          <div
            className="rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            style={{
              background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDFF 100%)",
              border: "1.5px solid rgba(6,182,212,0.25)",
            }}
          >
            <div>
              <p className="font-body text-xs text-gray-400 mb-1 uppercase tracking-wider font-semibold">
                Следующий этап
              </p>
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-0.5">
                Этап 3: Верстка и разработка
              </h3>
              <p className="font-body text-sm text-gray-500">
                Готовность к оплате ·{" "}
                <span className="font-heading font-bold" style={{ color: "#1E40AF" }}>
                  125 000 ₽
                </span>
              </p>
            </div>
            <button
              onClick={() => setPaymentOpen(true)}
              className="btn-primary px-7 py-3.5 text-sm flex items-center gap-2 flex-shrink-0"
            >
              <Icon name="CreditCard" size={16} />
              Оплатить следующий этап
            </button>
          </div>

          {/* Дашборд бота — заглушка */}
          <div className="ic-card p-7 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
              >
                <Icon name="Bot" size={20} className="text-white" />
              </div>
              <h2 className="font-heading text-lg font-bold text-gray-900">
                <GradientText>Гибридный бот</GradientText> — дашборд
              </h2>
            </div>
            <p className="font-body text-sm text-gray-500 mb-5">
              Аналитика подключится после завершения этапа 5. Данные будут доступны здесь в реальном времени.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Маркетплейсы", value: "—" },
                { label: "Выручка за месяц", value: "—" },
                { label: "AI-рекомендации", value: "—" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 text-center"
                  style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}
                >
                  <div
                    className="font-heading text-2xl font-extrabold mb-1"
                    style={{ color: "#D1D5DB" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} />
    </div>
  );
}
