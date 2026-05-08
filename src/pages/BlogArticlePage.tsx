import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Fade, GradientText } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const relatedArticles = [
  {
    slug: "yuniyt-ekonomika-seller",
    title: "Юнит-экономика для селлера: считаем прибыль правильно",
    tag: "Финансы",
    date: "5 апр 2026",
    readTime: "7 мин",
  },
  {
    slug: "avtomatizatsiya-otchetov",
    title: "Автоматизация отчётов: как сэкономить 20 часов в неделю",
    tag: "Автоматизация",
    date: "28 мар 2026",
    readTime: "6 мин",
  },
  {
    slug: "okved-torgovlya-marketplejsy",
    title: "Как выбрать ОКВЭД для торговли на маркетплейсах",
    tag: "Юридические вопросы",
    date: "15 мар 2026",
    readTime: "5 мин",
  },
];

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSent, setLeadSent] = useState(false);

  // Slug используется для будущей динамической загрузки данных
  void slug;

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSent(true);
  };

  return (
    <>
      {/* Шапка статьи */}
      <section
        className="pt-28 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F8FAFF 0%, #EFF6FF 100%)" }}
      >
        <div className="container mx-auto px-5 max-w-3xl relative z-10">
          {/* Хлебные крошки */}
          <Fade>
            <nav className="flex items-center gap-2 mb-8 font-body text-sm">
              <button
                onClick={() => navigate("/blog")}
                className="font-medium hover:opacity-70 transition-opacity"
                style={{ color: "#1E40AF" }}
              >
                Блог
              </button>
              <Icon name="ChevronRight" size={14} style={{ color: "#9CA3AF" }} />
              <span style={{ color: "#6B7280" }}>Юридические вопросы</span>
            </nav>
          </Fade>

          <Fade delay={0.05}>
            <span className="tag-chip mb-4 inline-block">Юридические вопросы</span>
          </Fade>

          <Fade delay={0.1}>
            <h1 className="font-heading text-2xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Как оспорить штраф на Wildberries в 2026 году?
            </h1>
          </Fade>

          <Fade delay={0.15}>
            <div className="flex flex-wrap items-center gap-4 font-body text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                >
                  <Icon name="User" size={14} className="text-white" />
                </div>
                <span>Команда Интеллект Консалтинг</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Calendar" size={14} />
                <span>12 апр 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={14} />
                <span>5 мин чтения</span>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Основной контент */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl">
          <Fade>
            <article className="font-body text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg text-gray-800 font-medium leading-relaxed">
                Wildberries — один из немногих маркетплейсов, где штрафы могут достигать сотен тысяч
                рублей за, казалось бы, незначительные нарушения. Хорошая новость: значительную
                часть из них можно успешно оспорить.
              </p>

              <h2 className="font-heading text-xl font-bold text-gray-900 pt-4">
                За что штрафуют на Wildberries
              </h2>
              <p>
                Основные категории штрафов делятся на несколько групп. Первая — нарушения при
                поставке: пересорт, неверная маркировка, несоответствие фактического товара
                заявленному в накладной. Вторая — проблемы с качеством: жалобы покупателей,
                возвраты по браку, несоответствие описанию. Третья — технические нарушения: ошибки
                в документах, отсутствие обязательных сертификатов, нарушение правил карточки.
              </p>

              <h2 className="font-heading text-xl font-bold text-gray-900 pt-4">
                Пошаговый алгоритм оспаривания
              </h2>

              <div className="space-y-5">
                {[
                  {
                    num: "1",
                    title: "Зафиксируйте штраф",
                    text: 'Войдите в личный кабинет WB → раздел "Финансы" → "Штрафы и удержания". Скачайте выгрузку в Excel. Зафиксируйте дату, сумму, основание и номер накладной.',
                  },
                  {
                    num: "2",
                    title: "Изучите основание",
                    text: "Каждый штраф имеет код нарушения. Найдите его в актуальной редакции оферты WB (публикуется на сайте). Часто продавцы не знают, что условия оферты изменились — это само по себе основание для апелляции.",
                  },
                  {
                    num: "3",
                    title: "Соберите доказательную базу",
                    text: "Для пересорта — фото упаковки с видимым штрихкодом до отгрузки. Для брака — переписка с поставщиком, акты. Для несоответствия описанию — скриншоты карточки на момент продажи.",
                  },
                  {
                    num: "4",
                    title: "Подайте апелляцию через личный кабинет",
                    text: 'ЛК → "Вопросы и ответы" → "Апелляция по штрафу". Чётко опишите ситуацию: «Штраф начислен ошибочно, так как...» + прикрепите документы. Будьте конкретны: ссылайтесь на пункты оферты.',
                  },
                  {
                    num: "5",
                    title: "Контролируйте срок ответа",
                    text: "WB обязан ответить в течение 10 рабочих дней. Если ответа нет — повторите обращение. В случае отказа без объяснений — это основание для жалобы в ФАС.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="guarantee-num flex-shrink-0">{step.num}</div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="font-body text-sm text-gray-600 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-heading text-xl font-bold text-gray-900 pt-4">
                Типичные ошибки при оспаривании
              </h2>
              <ul className="space-y-2">
                {[
                  "Подача апелляции без доказательств — только текст «мы ничего не нарушали»",
                  "Пропуск срока: большинство штрафов оспариваются в течение 14 дней",
                  "Размытые формулировки вместо конкретных ссылок на пункты оферты",
                  "Отсутствие фотофиксации перед отгрузкой — самый частый провал",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon
                      name="AlertCircle"
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#F59E0B" }}
                    />
                    <span className="font-body text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-heading text-xl font-bold text-gray-900 pt-4">
                Когда шансы на успех высоки
              </h2>
              <p>
                Практика показывает: если у вас есть фотодокументация и штраф начислен впервые —
                вероятность положительного решения составляет 60–75%. При повторных нарушениях
                одного типа шансы снижаются до 30–40%, поэтому профилактика важнее апелляции.
              </p>

              <div
                className="rounded-xl p-5 flex items-start gap-4"
                style={{
                  background: "linear-gradient(135deg, #F0FDFF, #EFF6FF)",
                  border: "1.5px solid rgba(6,182,212,0.2)",
                }}
              >
                <Icon name="Info" size={20} style={{ color: "#06B6D4", flexShrink: 0 }} className="mt-0.5" />
                <p className="font-body text-sm text-gray-700 leading-relaxed">
                  <strong>Важно:</strong> Описанный порядок носит информационный характер и основан
                  на публичных правилах WB. В сложных случаях (штрафы свыше 100 000 ₽, системные
                  блокировки) рекомендуем получить индивидуальную консультацию специалиста.
                </p>
              </div>
            </article>
          </Fade>
        </div>
      </section>

      {/* Лид-магнит */}
      <section className="py-12">
        <div className="container mx-auto px-5 max-w-3xl">
          <Fade>
            <div
              className="rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDFF 100%)",
                border: "1.5px solid rgba(6,182,212,0.25)",
              }}
            >
              {leadSent ? (
                <div className="text-center py-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ic-gradient"
                  >
                    <Icon name="Check" size={22} className="text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-1">
                    Чек-лист отправлен!
                  </h3>
                  <p className="font-body text-sm text-gray-500">
                    Проверьте почту — письмо придёт в течение 5 минут.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                  >
                    <Icon name="Download" size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-1">
                      Скачайте чек-лист по оспариванию штрафов WB
                    </h3>
                    <p className="font-body text-sm text-gray-500 mb-4">
                      PDF с пошаговым алгоритмом, шаблонами обращений и перечнем доказательств.
                    </p>
                    <form
                      onSubmit={handleLeadSubmit}
                      className="flex gap-3"
                    >
                      <input
                        type="email"
                        className="ic-input flex-1"
                        placeholder="Ваш email"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                      />
                      <button type="submit" className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap flex-shrink-0">
                        Получить
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #0F172A 0%, #1E3A8A 60%, #0C1F6B 100%)",
        }}
      >
        <div className="absolute inset-0 pixel-bg opacity-25" />
        <div className="container mx-auto px-5 max-w-2xl relative z-10 text-center">
          <Fade>
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
              Нужна помощь с{" "}
              <GradientText>конкретным штрафом?</GradientText>
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Запишитесь на консультацию — разберём вашу ситуацию и составим апелляцию.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Записаться на консультацию
            </button>
          </Fade>
        </div>
      </section>

      {/* Читайте также */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <Fade>
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                Читайте также
              </h2>
            </Fade>
            <Fade delay={0.05}>
              <button
                onClick={() => navigate("/blog")}
                className="flex items-center gap-1 font-heading text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: "#1E40AF" }}
              >
                Все статьи
                <Icon name="ArrowRight" size={14} />
              </button>
            </Fade>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedArticles.map((a, i) => (
              <Fade key={a.slug} delay={i * 0.1}>
                <button
                  onClick={() => navigate(`/blog/${a.slug}`)}
                  className="ic-card p-6 text-left w-full group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="tag-chip">{a.tag}</span>
                    <span
                      className="font-body text-xs flex items-center gap-1"
                      style={{ color: "#9CA3AF" }}
                    >
                      <Icon name="Clock" size={11} />
                      {a.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                    {a.title}
                  </h3>
                  <p className="font-body text-xs text-gray-400">{a.date}</p>
                </button>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Кнопка назад */}
      <div className="container mx-auto px-5 max-w-5xl pb-14">
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 font-body text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: "#1E40AF" }}
        >
          <Icon name="ArrowLeft" size={16} />
          Все статьи
        </button>
      </div>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="Юридические услуги"
      />
    </>
  );
}
