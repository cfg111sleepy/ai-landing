"use client";

import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import Avatar04 from "@/public/images/face.png";
import React, { useEffect, useState } from "react";

export default function Workflows() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <section
      id="install-block"
      className={`relative py-16 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden ${show ? 'animate-fadeIn' : 'opacity-0 translate-y-8'}`}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="bg1" cx="50%" cy="0%" r="100%" fx="50%" fy="0%" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bg2" cx="80%" cy="100%" r="100%" fx="80%" fy="100%" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="560" fill="url(#bg1)" />
          <rect width="1440" height="560" fill="url(#bg2)" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl pb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Как начать пользоваться <p>AI-ассистентом ?</p>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Всего 3 шага — и автоматизация ваших соцсетей готова к работе!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center fade-up-step" style={{animationDelay: '0ms'}}>
            <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 dark:from-blue-900 dark:via-blue-700 dark:to-blue-500 shadow-lg border-4 border-white dark:border-gray-800">
              <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Скачайте и установите</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Загрузите программу для вашей ОС. Следуйте инструкциям установщика или руководству.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center fade-up-step" style={{animationDelay: '150ms'}}>
            <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 dark:from-blue-900 dark:via-blue-700 dark:to-blue-500 shadow-lg border-4 border-white dark:border-gray-800">
              <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0zm2 4v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Настройте интеграции</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Добавьте соцсети и настройте сценарии автоматизации при первом запуске.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center fade-up-step" style={{animationDelay: '300ms'}}>
            <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 dark:from-blue-900 dark:via-blue-700 dark:to-blue-500 shadow-lg border-4 border-white dark:border-gray-800">
              <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Начните автоматизацию!</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Планируйте публикации, отслеживайте аналитику, получайте результат без рутины.</p>
          </div>
        </div>
        {/* Bonus/Tip Area */}
        <div className="bg-blue-50 dark:bg-blue-900/40 rounded-xl p-6 mb-8 text-sm text-gray-700 dark:text-gray-200 text-center">
          <div className="mb-2 font-semibold text-blue-700 dark:text-blue-300">Дополнительно:</div>
          <div className="mb-1">Для опытных пользователей — запуск из терминала.</div>
          <div className="mb-1">Все данные — только на вашем устройстве или по защищённым каналам.</div>
          <div>Возникли вопросы? PDF-инструкция и поддержка всегда доступны.</div>
        </div>
        {/* Download Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-2">
          <a href="#0" className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition">Скачать EXE</a>
          <a href="#0" className="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white font-bold shadow hover:bg-blue-600 transition">Скачать ZIP</a>
          <a href="#0" className="inline-block px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition">PDF-инструкция</a>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        .fade-up-step {
          opacity: 0;
          transform: translateY(32px);
          animation: fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .fade-up-step:nth-child(1) { animation-delay: 0ms; }
        .fade-up-step:nth-child(2) { animation-delay: 150ms; }
        .fade-up-step:nth-child(3) { animation-delay: 300ms; }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
