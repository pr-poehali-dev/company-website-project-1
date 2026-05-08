import { useState } from "react";
import { Fade, GradientText, PageHero } from "@/lib/fadeHook";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";

const services = [
  {
    icon: "Camera",
    title: "Нейрофотосессии",
    desc: "Профессиональные фото товаров и образов с использованием нейросетей. Без фотографа и студии — в 3 раза быстрее и дешевле.",
  },
  {
    icon: "LayoutTemplate",
    title: "Инфографика для маркетплейсов",
    desc: "Карточки товаров, которые продают: инфографика с выгодами, размерные таблицы, сравнительные блоки.",
  },
  {
    icon: "Palette",
    title: "Фирменный стиль (айдентика)",
    desc: "Логотип, цвета, шрифты, паттерны. Создаём визуальный язык бренда, который узнают и запоминают.",
  },
  {
    icon: "Monitor",
    title: "Дизайн соцсетей и сайтов",
    desc: "Баннеры, шаблоны постов, обложки, лендинги. Единый визуальный стиль во всех точках контакта.",
  },
  {
    icon: "Play",
    title: "Видео и анимация",
    desc: "Промо-ролики для карточек на маркетплейсах, анимированные баннеры и сторис. Движущийся контент конвертирует лучше.",
  },
];

const forWhom = [
  "Карточки товаров «серые» и теряются среди конкурентов",
  "Нет единого визуального стиля, бренд не узнают",
  "Фотографии низкого качества снижают доверие покупателей",
  "Хотите создать бренд, а не просто продавать товар",
];

const results = [
  {
    icon: "Eye",
    title: "Внимание",
    desc: "CTR карточек вырастает на 30–60% — покупатели замечают вас среди сотен конкурентов",
  },
  {
    icon: "TrendingUp",
    title: "Конверсия",
    desc: "Качественный визуал повышает конверсию в покупку на 20–40%",
  },
  {
    icon: "DollarSign",
    title: "Экономия",
    desc: "Нейрофотосессия обходится в 3–5 раз дешевле традиционной съёмки с аналогичным результатом",
  },
  {
    icon: "Layers",
    title: "Единство бренда",
    desc: "Согласованный визуальный стиль во всех каналах повышает узнаваемость и доверие",
  },
];

export default function AiDesignPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        badge="AI-дизайн"
        h1={
          <>
            AI-дизайн и визуальная <GradientText>упаковка бренда</GradientText>
          </>
        }
        sub="Нейрофотосессии, инфографика, айдентика — создаём визуал, который выделяет и продаёт."
      />

      {/* Услуги */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Что мы создаём
              </h2>
              <p className="font-body text-gray-500">
                AI-инструменты + экспертиза дизайнеров = результат быстрее и дешевле
              </p>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Fade key={s.title} delay={i * 0.09}>
                <div className="ic-card p-7">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, #EFF6FF, #F0FDFF)", border: "1px solid rgba(6,182,212,0.2)" }}
                  >
                    <Icon name={s.icon} size={22} style={{ color: "#1E40AF" }} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-4xl">
          <Fade>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Это решение для вас, если:
              </h2>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 gap-5">
            {forWhom.map((item, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div className="ic-card p-6 flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(34,197,94,0.12)" }}
                  >
                    <Icon name="Check" size={16} style={{ color: "#16A34A" }} />
                  </div>
                  <p className="font-body text-gray-700 leading-relaxed">{item}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Результаты */}
      <section className="py-20" style={{ background: "#F3F4F6" }}>
        <div className="container mx-auto px-5 max-w-5xl">
          <Fade>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">
                Что изменится
              </h2>
            </div>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <Fade key={r.title} delay={i * 0.1}>
                <div className="ic-card p-7 text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "linear-gradient(135deg, #1E40AF, #06B6D4)" }}
                  >
                    <Icon name={r.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 mb-2">{r.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #0F172A 0%, #1E3A8A 60%, #0C1F6B 100%)" }}
      >
        <div className="absolute inset-0 pixel-bg opacity-25" />
        <div className="container mx-auto px-5 max-w-2xl relative z-10 text-center">
          <Fade>
            <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
              Готовы к визуальному обновлению?
            </h2>
            <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              Закажите аудит визуала — покажем, что мешает вашим карточкам продавать.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-white px-10 py-4 text-base"
            >
              Заказать аудит визуала
            </button>
          </Fade>
        </div>
      </section>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTask="AI-дизайн"
      />
    </>
  );
}
