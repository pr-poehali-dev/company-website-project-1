import { useState } from "react";
import Icon from "@/components/ui/icon";

const TASKS = [
  "Менеджмент МП",
  "Финансовая аналитика",
  "Автоматизация",
  "AI-дизайн",
  "Юридические услуги",
  "LegalTech",
  "Гибридный бот",
  "Другое",
];

export default function ContactModal({
  open,
  onClose,
  defaultTask = "",
}: {
  open: boolean;
  onClose: () => void;
  defaultTask?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    task: defaultTask,
    message: "",
    consent: false,
    newsletter: false,
  });
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => setState("sent"), 1600);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.72)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto"
        style={{ boxShadow: "0 24px 80px rgba(30,64,175,0.2)" }}
      >
        <div className="p-7">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-gray-900">
                Записаться на консультацию
              </h3>
              <p className="font-body text-xs text-gray-400 mt-0.5">
                Ответим в течение 2 часов в рабочее время
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Icon name="X" size={18} className="text-gray-500" />
            </button>
          </div>

          {state === "sent" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ic-gradient">
                <Icon name="Check" size={28} className="text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">
                Заявка принята!
              </h4>
              <p className="text-gray-500 font-body leading-relaxed">
                Менеджер свяжется с вами
                <br />в течение 2 часов в рабочее время
              </p>
              <button
                onClick={() => {
                  setState("idle");
                  setForm({ name: "", phone: "", email: "", task: "", message: "", consent: false, newsletter: false });
                  onClose();
                }}
                className="mt-6 btn-primary px-8 py-2.5 text-sm"
              >
                Закрыть
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                    Имя *
                  </label>
                  <input
                    className="ic-input"
                    placeholder="Иван"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                    Телефон *
                  </label>
                  <input
                    className="ic-input"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                  Email *
                </label>
                <input
                  className="ic-input"
                  type="email"
                  placeholder="ivan@company.ru"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                  Приоритетная задача *
                </label>
                <select
                  className="ic-input"
                  required
                  value={form.task}
                  onChange={(e) => setForm((f) => ({ ...f, task: e.target.value }))}
                >
                  <option value="">Выберите из списка</option>
                  {TASKS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                  Комментарий
                </label>
                <textarea
                  className="ic-input resize-none"
                  rows={3}
                  placeholder="Расскажите о вашей задаче..."
                  maxLength={500}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <div className="space-y-2.5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                    className="mt-0.5 w-4 h-4 rounded accent-blue-600"
                  />
                  <span className="text-xs text-gray-500 font-body leading-relaxed">
                    Я даю согласие на обработку персональных данных в соответствии с{" "}
                    <span className="underline cursor-pointer" style={{ color: "#06B6D4" }}>
                      Политикой обработки ПДн
                    </span>{" "}
                    *
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.newsletter}
                    onChange={(e) => setForm((f) => ({ ...f, newsletter: e.target.checked }))}
                    className="mt-0.5 w-4 h-4 rounded accent-blue-600"
                  />
                  <span className="text-xs text-gray-500 font-body leading-relaxed">
                    Хочу получать полезные материалы, новости и спецпредложения в мессенджеры
                  </span>
                </label>
              </div>
              <button
                type="submit"
                disabled={state === "sending"}
                className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
              >
                {state === "sending" ? (
                  <>
                    <Icon name="Loader2" size={16} className="animate-spin" /> Отправляем...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={16} /> Отправить заявку
                  </>
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
