"use client";

import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import Avatar04 from "@/public/images/face.png";
import { useEffect, useState } from "react";

export default function Workflows() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <section className={`relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 transition-opacity duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-1000" style={{ transitionProperty: 'opacity, transform' }}>
        <div className={`pb-12 md:pb-20 pt-12 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionProperty: 'opacity, transform' }}>
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Установка и запуск — проще не бывает
            </h2>
            <p className="text-mg text-indigo-200/65">
              Работает в терминале, браузере и как десктопное приложение. Выбирайте удобный способ.
            </p>
            <div className="m-10 flex justify-center">
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => {
              const modal = document.getElementById('zoom-modal');
              if (modal) modal.style.display = 'flex';
            }}
            aria-label="Увеличить изображение"
          >
            <Image
              className="inline-flex shrink-0 cursor-zoom-in transition-transform duration-200 hover:scale-105 rounded-[12px]"
              src={Avatar04}
              alt="AI-ассистент"
            />
          </button>
        </div>
        {/* Modal for zoomed image */}
        <div
          id="zoom-modal"
          style={{ display: 'none' }}
          className="fixed inset-0 z-50 hidden items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={e => {
            if (e.target === e.currentTarget) (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        >
          <div className="relative">
            <Image
              src={Avatar04}
              alt="AI-ассистент увеличено"
              className="max-h-[80vh] max-w-[90vw] rounded-[12px] shadow-2xl"
              priority
            />
            <button
              type="button"
              className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-white"
              onClick={e => {
                const modal = document.getElementById('zoom-modal');
                if (modal) modal.style.display = 'none';
                e.stopPropagation();
              }}
              aria-label="Закрыть увеличенное изображение"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-mg text-indigo-200/65">
             Гибкий старт для всех: Неважно, новичок вы или профи — наш AI-ассистент готов к запуску в 1 клик. Хотите — управляйте через визуальный интерфейс. Нужно больше контроля — запускайте в терминале.
        </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-stretch gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1: Windows Installer */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                {/* Image */}
                {/* <Image className="inline-flex" src={WorflowImg01} width={350} height={288} alt="Windows Installer" /> */}
                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-3 text-center">
                    <span className="block font-bold text-xl text-white mb-1">Установщик</span>
                  </div>
                  <p className="text-indigo-200/65 mb-2">Быстрый старт AI-ассистента для ведения аккаунтов<br/>Установочный файл включает всё необходимое для мгновенного запуска AI-автоматизации. Рекомендуется для пользователей Windows, желающих быстро приступить к работе без лишних настроек.</p>
                  <div className="mt-4 mb-2">
                    <div className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 text-center text-white font-mono text-base mb-1">AIAssistant_Setup.exe</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Скачать EXE
                    </span>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2: Full Package */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                {/* Image */}
                {/* <Image className="inline-flex" src={WorflowImg02} width={350} height={288} alt="Full Package" /> */}
                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-3 text-center">
                    <span className="block font-bold text-xl text-white mb-1">Полный архив</span>
                  </div>
                  <p className="text-indigo-200/65 mb-2">AI-ассистент на базе n8n + конфигурации<br/>Рекомендуемый пакет. Включает саму систему автоматизации n8n, предварительно настроенные рабочие процессы для ведения аккаунтов и инструкцию по запуску на всех популярных ОС: Windows, macOS, Linux.</p>
                  <div className="mt-4 mb-2">
                    <div className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 text-center text-white font-mono text-base mb-1">AIAssistant_Full_Package.zip</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Скачать ZIP
                    </span>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3: PDF Guide */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Arrow */}
                {/* Image */}
                {/* <Image className="inline-flex" src={WorflowImg03} width={350} height={288} alt="PDF Guide" /> */}
                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-3 text-center">
                    <span className="block font-bold text-xl text-white mb-1">PDF Инструкция</span>
                  </div>
                  <p className="text-indigo-200/65 mb-2">Пошаговое руководство по установке и запуску<br/>Официальное руководство поможет вам развернуть AI-систему под любые задачи: от создания контента до сбора аналитики. Содержит примеры, схемы и советы по оптимизации.</p>
                  <div className="mt-4 mb-2">
                    <div className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 text-center text-white font-mono text-base mb-1">AIAssistant_Guide.pdf</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Скачать PDF
                    </span>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
