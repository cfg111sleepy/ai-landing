"use client";

import { useState, useRef, useEffect } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";
import ClientImg04 from "@/public/images/client-logo-04.svg";
import ClientImg05 from "@/public/images/client-logo-05.svg";
import ClientImg06 from "@/public/images/client-logo-06.svg";
import ClientImg07 from "@/public/images/client-logo-07.svg";
import ClientImg08 from "@/public/images/client-logo-08.svg";
import ClientImg09 from "@/public/images/client-logo-09.svg";

const testimonials = [
  {
    img: TestimonialImg01,
    clientImg: ClientImg01,
    name: "Максим П.",
    company: "TrafficLab",
    content:
      "Мы используем TrendPilot.AI для управления сетью Telegram-каналов. Система позволяет автоматизировать публикации, комментирование и подписки, что значительно сократило затраты на ручной труд. Впечатляет гибкость сценариев и точность подбора контента под аудиторию.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Андрей К.",
    company: "SMM Studio",
    content:
      "TrendPilot.AI оказался именно тем решением, которое мы искали для работы с Twitter-аккаунтами клиентов. Бот ведёт себя как живой человек: публикует по трендам, комментирует вовремя и даже меняет аватарку. Это умный и стратегически полезный инструмент.",
    categories: [1, 2, 4],
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Людмила Д.",
    company: "MediaCore",
    content:
      "Наше агентство занимается продвижением стартапов, и TrendPilot.AI стал незаменимым помощником. Он берёт на себя рутинные задачи, такие как постинг и мониторинг трендов. Особенно полезна интеграция с n8n, которая позволяет гибко масштабировать процессы.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg04,
    clientImg: ClientImg04,
    name: "Павел М.",
    company: "BotNet Group",
    content:
      "Качество автоматизации в TrendPilot.AI выше, чем у других решений, которые мы тестировали. Сервис позволяет настроить десятки аккаунтов с разным поведением, что критически важно для нас как для управляющей фермы. Поддержка на высоком уровне.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg05,
    clientImg: ClientImg05,
    name: "Мария Е.",
    company: "TargetPush",
    content:
      "TrendPilot.AI значительно улучшил нашу эффективность в управлении клиентскими Telegram-каналами. Внедрение заняло менее дня, и с этого момента мы увидели рост вовлечённости. Особенно ценим адаптивный анализ и авто-комментинг в нишевых темах.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg06,
    clientImg: ClientImg06,
    name: "Елена В.",
    company: "PromoAI",
    content:
      "Мы протестировали TrendPilot.AI на 5 аккаунтах Twitter и остались довольны результатами. Алгоритм адаптируется под стиль и формат контента, имитируя органическую активность. Прекрасное решение для брендов и маркетологов.",
    categories: [1, 3],
  },
  {
    img: TestimonialImg07,
    clientImg: ClientImg07,
    name: "Пьер-Жиль Л.",
    company: "DigitalOps",
    content:
      "Автоматизация через TrendPilot.AI помогла нам запустить 30 аккаунтов одновременно без найма дополнительной команды. Мы особенно оценили модули смены поведенческого шаблона и поддержки нескольких платформ одновременно. Это технологически зрелое решение.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg08,
    clientImg: ClientImg08,
    name: "Даниэла К.",
    company: "AutoScale Media",
    content:
      "TrendPilot.AI обеспечивает простую и надёжную автоматизацию публикаций. Интерфейс и интеграция с n8n делают его доступным как для технических специалистов, так и для маркетологов. Мы настроили систему за пару часов и уже получили первые результаты.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg09,
    clientImg: ClientImg09,
    name: "Мария П.",
    company: "BotWave",
    content:
      "TrendPilot.AI — это решение, которое можно внедрить даже без технической подготовки. Мы подключили шаблон под Telegram и через сутки получили прирост органических подписчиков. Отличный продукт, особенно для малого бизнеса и начинающих команд.",
    categories: [1, 2],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  // Animation: track visibility of each testimonial
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => testimonials.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    testimonials.forEach((_, idx) => {
      const ref = cardRefs.current[idx];
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          setVisible(v => {
            const copy = [...v];
            copy[idx] = entry.isIntersecting;
            return copy;
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // SSR-safe window width detection for filter visibility
  const [showFilters, setShowFilters] = useState(true);
  useEffect(() => {
    const checkWidth = () => setShowFilters(window.innerWidth > 922);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section id="testimonials" className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-title-fade animate-title-glow bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Не нужно верить нам на слово
            </h2>
            <p className="text-lg text-indigo-200/65 animate-subtitle-fade">
              Мы создаём инструменты, которые помогают командам системно и эффективно выстраивать присутствие в Twitter и Telegram — вне зависимости от масштаба бизнеса и географии. Решения для тех, кто ценит стабильность, автоматизацию и результат.
            </p>
          </div>

          <div>
            {/* Buttons */}
            {showFilters && (
              <div className="flex justify-center pb-12">
                <div className="relative inline-flex flex-wrap justify-center rounded-full bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-blue-900/60 shadow-lg p-1 border border-blue-700/40 backdrop-blur-md">
                  {/* Button #1 */}
                  <button
                    className={`flex h-10 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60
                      ${
                        category === 1
                          ? "relative bg-gradient-to-b from-blue-800 via-blue-700/60 to-blue-900 text-blue-200 shadow-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-blue-500/30 before:[background:linear-gradient(to_bottom,rgba(59,130,246,0.1),rgba(59,130,246,0.3))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                          : "opacity-60 transition-opacity hover:opacity-90 text-blue-100"
                      }`}
                    aria-pressed={category === 1}
                    onClick={() => setCategory(1)}
                  >
                    <svg
                      className={`fill-current ${
                        category === 1 ? "text-blue-400" : "text-blue-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height={18}
                    >
                      <path d="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />
                    </svg>
                    <span>Все отзывы</span>
                  </button>
                  {/* Button #2 */}
                  <button
                    className={`flex h-10 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60
                      ${
                        category === 2
                          ? "relative bg-gradient-to-b from-blue-800 via-blue-700/60 to-blue-900 text-blue-200 shadow-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-blue-500/30 before:[background:linear-gradient(to_bottom,rgba(59,130,246,0.1),rgba(59,130,246,0.3))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                          : "opacity-60 transition-opacity hover:opacity-90 text-blue-100"
                      }`}
                    aria-pressed={category === 2}
                    onClick={() => setCategory(2)}
                  >
                    <svg
                      className={`fill-current ${
                        category === 2 ? "text-blue-400" : "text-blue-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height={18}
                    >
                      <path d="M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855Zm2.303 4.74c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11A1.497 1.497 0 0 1 5 12.5 1.5 1.5 0 1 1 3.5 11Z" />
                    </svg>
                    <span>Агентства и команды</span>
                  </button>
                  {/* Button #3 */}
                  <button
                    className={`flex h-10 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60
                      ${
                        category === 3
                          ? "relative bg-gradient-to-b from-blue-800 via-blue-700/60 to-blue-900 text-blue-200 shadow-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-blue-500/30 before:[background:linear-gradient(to_bottom,rgba(59,130,246,0.1),rgba(59,130,246,0.3))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                          : "opacity-60 transition-opacity hover:opacity-90 text-blue-100"
                      }`}
                    aria-pressed={category === 3}
                    onClick={() => setCategory(3)}
                  >
                    <svg
                      className={`fill-current ${
                        category === 3 ? "text-blue-400" : "text-blue-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height={18}
                    >
                      <path d="M2.428 10c.665-1.815 1.98-3.604 3.44-4.802-.6-1.807-1.443-3.079-2.29-3.18-1.91-.227-2.246 2.04-.174 2.962a1 1 0 1 1-.813 1.827C-1.407 5.028-.589-.491 3.815.032c1.605.191 2.925 1.811 3.79 4.07.979-.427 1.937-.51 2.735-.092.818.429 1.143 1.123 1.294 2.148.015.1.022.149.043.32.542-.537 1.003-.797 1.693-.622.64.162.894.493 1.195 1.147l.018.04a1 1 0 0 1 1.133 1.61c-.46.47-1.12.574-1.744.398a1.661 1.661 0 0 1-.87-.592 2.127 2.127 0 0 1-.224-.349 3.225 3.225 0 0 1-.55.477c-.377.253-.8.368-1.259.267-.993-.218-1.21-.779-1.367-2.05-.027-.22-.033-.262-.046-.353-.067-.452-.144-.617-.244-.67-.225-.118-.665-.013-1.206.278.297 1.243.475 2.587.516 3.941H15a1 1 0 0 1 0 2H8.68l-.025.285c-.173 1.918-.906 3.381-2.654 3.668-1.5.246-3.013-.47-3.677-1.858-.29-.637-.39-1.35-.342-2.095H1a1 1 0 0 1 0-2h1.428Zm2.11 0h2.175a18.602 18.602 0 0 0-.284-2.577c-.205.202-.408.42-.606.654A9.596 9.596 0 0 0 4.537 10Zm2.135 2H3.942c-.032.465.03.888.194 1.25.258.538.89.836 1.54.73.546-.09.888-.772.988-1.875L6.673 12Z" />
                    </svg>
                    <span>Telegram-каналы</span>
                  </button>
                  {/* Button #4 */}
                  <button
                    className={`flex h-10 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60
                      ${
                        category === 4
                          ? "relative bg-gradient-to-b from-blue-800 via-blue-700/60 to-blue-900 text-blue-200 shadow-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-blue-500/30 before:[background:linear-gradient(to_bottom,rgba(59,130,246,0.1),rgba(59,130,246,0.3))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                          : "opacity-60 transition-opacity hover:opacity-90 text-blue-100"
                      }`}
                    aria-pressed={category === 4}
                    onClick={() => setCategory(4)}
                  >
                    <svg
                      className={`fill-current ${
                        category === 4 ? "text-blue-400" : "text-blue-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height={18}
                    >
                      <path d="M3.757 3.758a6 6 0 0 1 8.485 8.485 5.992 5.992 0 0 1-5.301 1.664 1 1 0 1 0-.351 1.969 8 8 0 1 0-4.247-2.218 1 1 0 0 0 1.415-.001L9.12 8.294v1.827a1 1 0 1 0 2 0v-4.2a.997.997 0 0 0-1-1.042H5.879a1 1 0 1 0 0 2h1.829l-4.599 4.598a6 6 0 0 1 .648-7.719Z" />
                    </svg>
                    <span>Маркетинг и аналитика</span>
                  </button>
                </div>
              </div>
            )}

            {/* Cards */}
            <div
              className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
              ref={masonryContainer}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  ref={el => {
                    cardRefs.current[index] = el as HTMLDivElement | null;
                  }}
                  className={`
                    group transition-all duration-700
                    ${visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  `}
                  style={{
                    transitionProperty: "opacity, transform",
                    transitionDelay: visible[index] ? `${index * 120}ms` : "0ms",
                  }}
                >
                  <Testimonial testimonial={testimonial} category={category}>
                    {testimonial.content}
                  </Testimonial>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        #testimonials .group:hover article {
          box-shadow: 0 6px 32px 0 rgba(59,130,246,0.10), 0 1.5px 8px 0 rgba(59,130,246,0.10);
          border-color: #3b82f6;
          background: linear-gradient(90deg,rgba(59,130,246,0.08),rgba(59,130,246,0.03));
        }
        #testimonials .group:hover article {
          filter: brightness(1.08);
        }
      `}</style>
    </section>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    clientImg: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${
        !testimonial.categories.includes(category) ? "opacity-30" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200 flex flex-row justify-around items-center gap-2">
            <span>{testimonial.name}</span>
            <span className="text-xs flex items-center gap-1 mt-0.5">
              <span
                className={
                  // Assign a unique background color for each company logo
                  testimonial.company === "TrafficLab"
                    ? "bg-blue-600"
                    : testimonial.company === "SMM Studio"
                    ? "bg-pink-600"
                    : testimonial.company === "MediaCore"
                    ? "bg-green-600"
                    : testimonial.company === "BotNet Group"
                    ? "bg-yellow-500"
                    : testimonial.company === "TargetPush"
                    ? "bg-purple-600"
                    : testimonial.company === "PromoAI"
                    ? "bg-indigo-600"
                    : testimonial.company === "DigitalOps"
                    ? "bg-red-600"
                    : testimonial.company === "AutoScale Media"
                    ? "bg-teal-600"
                    : testimonial.company === "BotWave"
                    ? "bg-orange-500"
                    : "bg-gray-400"
                }
                style={{ borderRadius: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, minWidth: 22, minHeight: 22 }}
              >
                <Image
                  src={testimonial.clientImg}
                  alt={testimonial.company}
                  width={16}
                  height={16}
                  className="inline-block align-middle"
                  style={{ filter: 'brightness(0) invert(1)', width: 16, height: 'auto' }}
                />
              </span>
              <span className="ml-1 text-gray-400">{testimonial.company}</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
