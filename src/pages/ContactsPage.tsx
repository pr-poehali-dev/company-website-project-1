import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
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

type FormState = {
  name: string;
  phone: string;
  email: string;
  task: string;
  message: string;
  consent: boolean;
  newsletter: boolean;
};

type SendState = "idle" | "sending" | "sent";

export default function ContactsPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    task: "",
    message: "",
    consent: false,
    newsletter: false,
  });
  const [sendState, setSendState] = useState<SendState>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSendState("sending");
    setTimeout(() => setSendState("sent"), 1600);
  };

  const handleReset = () => {
    setSendState("idle");
    setForm({
      name: "",
      phone: "",
      email: "",
      task: "",
      message: "",
      consent: false,
      newsletter: false,
    });
  };

  return (
    <>
      <PageHero
        badge="Контакты"
        h1={
          <>
            Свяжитесь <GradientText>с нами</GradientText>
          </>
        }
        sub="Обсудим ваш проект в удобном формате. Оставьте заявку и мы предложим формат работы."
      />

      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Левая колонка — контакты */}
            <div className="md:col-span-2 space-y-6">
              <Fade>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                    Контактные данные
                  </h2>

                  <div className="space-y-4">
                    {/* Телефон */}
                    <div className="ic-card p-4 flex items-center gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                      >
                        <Icon name="Phone" size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-body text-xs text-gray-400 mb-0.5">Телефон</div>
                        <a
                          href="tel:+79107747633"
                          className="font-heading text-sm font-bold text-gray-900 hover:text-blue-700 transition-colors"
                        >
                          +7 (910) 774-76-33
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="ic-card p-4 flex items-center gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                      >
                        <Icon name="Mail" size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-body text-xs text-gray-400 mb-0.5">Email</div>
                        <a
                          href="mailto:Natalya.saveleva.1973@mail.ru"
                          className="font-heading text-sm font-bold text-gray-900 hover:text-blue-700 transition-colors break-all"
                        >
                          Natalya.saveleva.1973@mail.ru
                        </a>
                      </div>
                    </div>

                    {/* Режим работы */}
                    <div className="ic-card p-4 flex items-center gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                      >
                        <Icon name="Clock" size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-body text-xs text-gray-400 mb-0.5">Режим работы</div>
                        <div className="font-heading text-sm font-bold text-gray-900">
                          Пн–Пт 10:00–19:00 МСК
                        </div>
                      </div>
                    </div>

                    {/* Адрес */}
                    <div className="ic-card p-4 flex items-center gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                      >
                        <Icon name="MapPin" size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-body text-xs text-gray-400 mb-0.5">Адрес</div>
                        <div className="font-heading text-sm font-bold text-gray-900">
                          г. Москва (онлайн по всей России)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>

              {/* Мессенджеры */}
              <Fade delay={0.1}>
                <div>
                  <p className="font-body text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                    Написать в мессенджер
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://t.me/intellect_consulting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs font-semibold transition-all duration-200 hover:opacity-80"
                      style={{ background: "#E7F3FF", color: "#1E40AF", border: "1.5px solid rgba(30,64,175,0.15)" }}
                    >
                      <Icon name="Send" size={14} />
                      Telegram
                    </a>
                    <a
                      href="https://wa.me/79107747633"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs font-semibold transition-all duration-200 hover:opacity-80"
                      style={{ background: "#ECFDF5", color: "#059669", border: "1.5px solid rgba(5,150,105,0.15)" }}
                    >
                      <Icon name="MessageCircle" size={14} />
                      WhatsApp
                    </a>
                    <a
                      href="https://vk.com/intellect_consulting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs font-semibold transition-all duration-200 hover:opacity-80"
                      style={{ background: "#EFF6FF", color: "#2563EB", border: "1.5px solid rgba(37,99,235,0.15)" }}
                    >
                      <Icon name="Users" size={14} />
                      VK
                    </a>
                  </div>
                </div>
              </Fade>
            </div>

            {/* Правая колонка — форма */}
            <div className="md:col-span-3">
              <Fade delay={0.1}>
                <div className="ic-card p-8">
                  {sendState === "sent" ? (
                    <div className="text-center py-12">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 ic-gradient"
                        style={{
                          animation: "fadeInUp 0.5s ease forwards",
                        }}
                      >
                        <Icon name="Check" size={36} className="text-white" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                        Заявка принята!
                      </h3>
                      <p className="font-body text-gray-500 leading-relaxed mb-8">
                        Менеджер свяжется с вами в течение 2 часов в рабочее время.
                        <br />
                        Спасибо, что выбрали Интеллект Консалтинг.
                      </p>
                      <button
                        onClick={handleReset}
                        className="btn-outline px-7 py-3 text-sm"
                      >
                        Отправить ещё одну заявку
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-xl font-bold text-gray-900 mb-1">
                        Оставить заявку
                      </h2>
                      <p className="font-body text-sm text-gray-400 mb-7">
                        Ответим в течение 2 часов в рабочее время
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                              Имя *
                            </label>
                            <input
                              className="ic-input"
                              placeholder="Иван"
                              required
                              value={form.name}
                              onChange={(e) =>
                                setForm((f) => ({ ...f, name: e.target.value }))
                              }
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                              Телефон *
                            </label>
                            <input
                              className="ic-input"
                              placeholder="+7 (___) ___-__-__"
                              type="tel"
                              required
                              value={form.phone}
                              onChange={(e) =>
                                setForm((f) => ({ ...f, phone: e.target.value }))
                              }
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
                            onChange={(e) =>
                              setForm((f) => ({ ...f, email: e.target.value }))
                            }
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
                            onChange={(e) =>
                              setForm((f) => ({ ...f, task: e.target.value }))
                            }
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
                            rows={4}
                            placeholder="Расскажите о вашей задаче..."
                            maxLength={500}
                            value={form.message}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, message: e.target.value }))
                            }
                          />
                        </div>
                        <div className="space-y-2.5">
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              required
                              checked={form.consent}
                              onChange={(e) =>
                                setForm((f) => ({ ...f, consent: e.target.checked }))
                              }
                              className="mt-0.5 w-4 h-4 rounded accent-blue-600"
                            />
                            <span className="text-xs text-gray-500 font-body leading-relaxed">
                              Я даю согласие на обработку персональных данных в соответствии с{" "}
                              <span
                                className="underline cursor-pointer"
                                style={{ color: "#06B6D4" }}
                              >
                                Политикой обработки ПДн
                              </span>{" "}
                              *
                            </span>
                          </label>
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={form.newsletter}
                              onChange={(e) =>
                                setForm((f) => ({ ...f, newsletter: e.target.checked }))
                              }
                              className="mt-0.5 w-4 h-4 rounded accent-blue-600"
                            />
                            <span className="text-xs text-gray-500 font-body leading-relaxed">
                              Хочу получать полезные материалы и спецпредложения в мессенджеры
                            </span>
                          </label>
                        </div>
                        <button
                          type="submit"
                          disabled={sendState === "sending"}
                          className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
                        >
                          {sendState === "sending" ? (
                            <>
                              <Icon name="Loader2" size={16} className="animate-spin" />
                              Отправляем...
                            </>
                          ) : (
                            <>
                              <Icon name="Send" size={16} />
                              Отправить заявку
                            </>
                          )}
                        </button>
                        <p className="text-xs text-gray-400 text-center font-body">
                          Отправляя форму, вы соглашаетесь с Пользовательским соглашением
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
