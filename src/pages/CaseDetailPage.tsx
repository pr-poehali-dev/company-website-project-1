import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const beforeItems = [
  "Карточки товаров без инфографики и SEO-оптимизации",
  "Нет аналитики: решения принимались «на глаз»",
  "Реклама сливала бюджет без управления ставками",
  "Ручное обновление остатков — постоянные штрафы за нехватку",
];

const tasks = [
  "Переработать карточки: SEO, Rich-контент, инфографика",
  "Настроить аналитику продаж и юнит-экономику",
  "Запустить управляемую внутреннюю рекламу WB",
  "Интегрировать склад с API маркетплейса",
];

const steps = [
  {
    num: "1",
    title: "Аудит и стратегия",
    desc: "Проанализировали 47 карточек, выявили ключевые точки роста, построили дорожную карту на 3 месяца.",
  },
  {
    num: "2",
    title: "Переработка карточек",
    desc: "Создали новые фото, инфографику, написали SEO-заголовки и описания. Подключили Rich-контент.",
  },
  {
    num: "3",
    title: "Настройка аналитики",
    desc: "Внедрили дашборд с юнит-экономикой по каждому SKU. Настроили автоматические отчёты.",
  },
  {
    num: "4",
    title: "Запуск рекламы",
    desc: "Настроили автоматические ставки, разделили кампании по типам товаров. Снизили ДРР с 28% до 11%.",
  },
  {
    num: "5",
    title: "Интеграция склада",
    desc: "Подключили МойСклад через API. Остатки обновляются автоматически каждые 30 минут.",
  },
];

const results = [
  { value: "+150%", label: "Рост продаж", icon: "TrendingUp" },
  { value: "+22 п.п.", label: "Маржинальность", icon: "BarChart2" },
  { value: "−18%", label: "Стоимость привлечения клиента", icon: "DollarSign" },
  { value: "−30 ч/нед", label: "Экономия времени команды", icon: "Clock" },
];

const relatedArticles = [
  {
    slug: "yuniyt-ekonomika-seller",
    title: "Юнит-экономика для селлера: считаем прибыль правильно",
    tag: "Финансы",
    date: "5 апр 2026",
  },
  {
    slug: "avtomatizatsiya-otchetov",
    title: "Автоматизация отчётов: как сэкономить 20 часов в неделю",
    tag: "Автоматизация",
    date: "28 мар 2026",
  },
  {
    slug: "nejrofotosessiya-marketplejsy",
    title: "Нейрофотосессия для маркетплейса: 5 кейсов",
    tag: "AI в бизнесе",
    date: "20 мар 2026",
  },
];

export default function CaseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  // Slug используется для будущей динамической загрузки данных
  void slug;

  return (
    <>
      <PageHero
        badge="Кейс"
        h1={
          <>
            +150% к продажам на{" "}
            <GradientText>Wildberries за 3 месяца</GradientText>
          </>
        }
        sub="Бренд одежды, оборот 5 млн ₽/мес | Отрасль: Одежда и аксессуары"
      >
        <div className="flex flex-wrap justify-center gap-2">
          <span className="tag-chip">Маркетплейсы</span>
          <span className="tag-chip">WB</span>
          <span className="tag-chip">Аналитика</span>
        </div>
      </PageHero>

      {/* Кнопка назад */}
      <div className="container mx-auto px-5 max-w-5xl pt-8">
        <button
          onClick={() => navigate("/keisy")}
          className="flex items-center gap-2 font-body text-sm font-medium transition-colors hover:opacity-70"
          style={{ color: "#1E40AF" }}
        >
          <Icon name="ArrowLeft" size={16} />
          Все кейсы
        </button>
      </div>

      {/* Блоки до/задачи */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Что было до */}
            <Fade>
              <div className="ic-card p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(239,68,68,0.1)" }}
                  >
                    <Icon name="XCircle" size={20} style={{ color: "#DC2626" }} />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-gray-900">
                    Что было до
                  </h2>
                </div>
                <ul className="space-y-4">
                  {beforeItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon
                        name="X"
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "#DC2626" }}
                      />
                      <span className="font-body text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>

            {/* Задачи */}
            <Fade delay={0.1}>
              <div className="ic-card p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(30,64,175,0.1)" }}
                  >
                    <Icon name="Target" size={20} style={{ color: "#1E40AF" }} />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-gray-900">
                    Что нужно было сделать
                  </h2>
                </div>
                <ul className="space-y-4">
                  {tasks.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon
                        name="Target"
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "#1E40AF" }}
                      />
                      <span className="font-body text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Инструменты / шаги */}
      <section className="py-16" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Какие инструменты применили
            </h2>
          </Fade>
          <div className="space-y-5">
            {steps.map((step, i) => (
              <Fade key={step.num} delay={i * 0.08}>
                <div className="ic-card p-6 flex items-start gap-5">
                  <div className="guarantee-num flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Результаты */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Результаты
            </h2>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <Fade key={r.label} delay={i * 0.1}>
                <div className="ic-card p-7 text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                  >
                    <Icon name={r.icon} size={24} className="text-white" />
                  </div>
                  <div
                    className="font-heading text-3xl font-extrabold mb-1"
                    style={{ color: "#1E40AF" }}
                  >
                    {r.value}
                  </div>
                  <p className="font-body text-sm text-gray-500">{r.label}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Цитата клиента */}
      <section className="py-16" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-3xl">
          <Fade>
            <div
              className="ic-card p-10 text-center relative"
              style={{ overflow: "visible" }}
            >
              <div
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center ic-gradient"
              >
                <Icon name="Quote" size={18} className="text-white" />
              </div>
              <p
                className="font-body text-lg leading-relaxed text-gray-700 italic mt-4 mb-6"
              >
                «Работа с командой Интеллект Консалтинг изменила подход к бизнесу полностью.
                Мы перестали гадать и начали управлять. За три месяца выручка выросла в 2,5 раза,
                а я наконец понимаю, где деньги и куда они уходят.»
              </p>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                >
                  <Icon name="User" size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="font-heading text-sm font-bold text-gray-900">
                    Анна
                  </div>
                  <div className="font-body text-xs text-gray-400">
                    Основатель бренда одежды
                  </div>
                </div>
              </div>
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
              Хотите такой же результат?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Расскажите о вашем бизнесе — составим персональный план роста на маркетплейсах.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Обсудить мой проект
            </button>
          </Fade>
        </div>
      </section>

      {/* Читайте также */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">
              Читайте также
            </h2>
          </Fade>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedArticles.map((a, i) => (
              <Fade key={a.slug} delay={i * 0.1}>
                <button
                  onClick={() => navigate(`/blog/${a.slug}`)}
                  className="ic-card p-6 text-left w-full group"
                >
                  <span className="tag-chip mb-3 inline-block">{a.tag}</span>
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

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="Менеджмент МП"
      />
    </>
  );
}
