import Image from "next/image";
import Avatar04 from "@/public/images/face.png";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "./spotlight";

export default function InstallBlock() {
  return (
    <>
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto mb-8 max-w-3xl before:bg-gray-900">
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
            if (e.target === e.currentTarget) (e.currentTarget as HTMLElement).style.display = 'none';
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
        </div>``
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
    </section>
    </>
  );
}
