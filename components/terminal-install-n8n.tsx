"use client";
import React from "react";
import Avatar04 from "@/public/images/face.png";
import Image from "next/image";

export default function TerminalInstallN8N() {
  return (
    <div>
      {/* New content block for install/start instructions */}
      <div className="mx-auto mb-8 max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-semibold text-gray-900 dark:text-white">
          Установка и запуск — проще не бывает
        </h2>
        <p className="mb-4 text-center text-gray-700 dark:text-gray-300">
          Работает в терминале, браузере и как десктопное приложение. Выбирайте
          удобный способ.
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
              className="inline-flex shrink-0 cursor-zoom-in transition-transform duration-200 hover:scale-105"
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
            if (e.target === e.currentTarget) e.currentTarget.style.display = 'none';
          }}
        >
          <div className="relative">
            <Image
              src={Avatar04}
              alt="AI-ассистент увеличено"
              className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl"
              priority
            />
            <button
              type="button"
              className="absolute right-2 top-2 rounded-full bg-white/80 p-2 text-gray-800 hover:bg-white"
              onClick={() => {
                const modal = document.getElementById('zoom-modal');
                if (modal) modal.style.display = 'none';
              }}
              aria-label="Закрыть увеличенное изображение"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <ul className="mb-4 list-disc pl-5 text-gray-700 dark:text-gray-300">
          <li className="mb-2">
            <span className="font-semibold">🎯 Гибкий старт для всех:</span> Неважно,
            новичок вы или профи — наш AI-ассистент готов к запуску в 1 клик.
            Хотите — управляйте через визуальный интерфейс. Нужно больше контроля —
            запускайте в терминале.
          </li>
          <li className="mb-2">
            <span className="font-semibold">🖥 Работает после запуска:</span> После
            старта вы получаете:
            <ul className="list-disc pl-5 mt-1">
              <li>Личный AI-помощник с дашбордом</li>
              <li>Доступ к визуальному редактору сценариев</li>
              <li>Возможность подключать соцсети, CRM, источники данных</li>
              <li>Автоматическую генерацию и публикацию контента</li>
            </ul>
          </li>
        </ul>
        <div className="mb-2">
          <span className="font-semibold">💻 Скачать для Windows:</span>
          <div className="mt-1 flex flex-col gap-2">
            <button className="w-fit rounded bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition">
              Скачать n8n.exe
            </button>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Установите, откройте и начните автоматизировать за 5 минут.
            </span>
          </div>
        </div>
      </div>
      {/* Terminal block remains unchanged */}
      <h2 className="m-8 text-center text-2xl">
        Запуск n8n в Терминале Linux или OSX
      </h2>
      <div
        className="mx-auto max-w-3xl"
        data-aos="zoom-y-out"
        data-aos-delay={600}
      >
        <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
          <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
            <span className="text-[13px] font-medium text-white">
              Terminal
            </span>
          </div>
          <div className="font-mono text-gray-500 [&_span]:opacity-0">
            <span className="animate-[code-1_10s_infinite] text-gray-200">
              git clone https://github.com/n8n-io/n8n.git:
            </span>{" "}
            <span className="animate-[code-1_10s_infinite]">
              Cloning into 'n8n'...
            </span>
            <br />
            <span className="animate-[code-3_10s_infinite] text-gray-200">
              npx n8n:
            </span>{" "}
            <span className="animate-[code-3_10s_infinite]">
              Need to install the following packages:
              n8n@1.94.0
              Ok to proceed? (y) y
            </span>
            <br />
            <span className="animate-[code-5_10s_infinite]">
              [license SDK] Skipping renewal on init because renewal is not due yet or cert is not initialized
              Version: 1.94.0
              Successfully start.
            </span>
            <br />
            <br />
            <span className="animate-[code-5_10s_infinite] text-gray-200">
              Editor is now accessible via:
              http://localhost:5678
            </span>
            <br />
            <span className="animate-[code-6_10s_infinite]">
              Press "o" to open in Browser.
            </span>
          </div>
        </div>
      </div>
      {/* Bottom subtitle image */}
      
    </div>
  );
}
