import React from "react";

export function FeatureComparisonTable() {
  return (
    <>
      {/* Основные характеристики */}
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 mb-12">
        <h2 className="text-xl text-center md:text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
          Основные характеристики
        </h2>
        <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 bg-white dark:bg-slate-900">
          <table className="min-w-full text-sm md:text-base text-left border-separate border-spacing-y-1">
            <thead>
              <tr className="">
                <th className="py-3 px-4 font-bold text-gray-900 dark:text-white">
                  Тариф
                </th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">
                  Free
                </th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">
                  Professional
                </th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">
                  Business
                </th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {/* ...existing rows for Основные характеристики... */}
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Социальные аккаунты</td>
                <td className="py-2 px-4 text-center">3</td>
                <td className="py-2 px-4 text-center">12</td>
                <td className="py-2 px-4 text-center">25+</td>
                <td className="py-2 px-4 text-center">Индивидуально</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">
                  Запланированные посты на аккаунт
                </td>
                <td className="py-2 px-4 text-center">10</td>
                <td className="py-2 px-4 text-center">100</td>
                <td className="py-2 px-4 text-center">Без ограничений</td>
                <td className="py-2 px-4 text-center">Без ограничений</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">История постов</td>
                <td className="py-2 px-4 text-center">24 часа</td>
                <td className="py-2 px-4 text-center">Без ограничений</td>
                <td className="py-2 px-4 text-center">Без ограничений</td>
                <td className="py-2 px-4 text-center">Без ограничений</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Пользователи</td>
                <td className="py-2 px-4 text-center">1</td>
                <td className="py-2 px-4 text-center">До 5</td>
                <td className="py-2 px-4 text-center">До 15</td>
                <td className="py-2 px-4 text-center">Индивидуально</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Планирование по времени</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Планирование по календарю</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Расширенная аналитика</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Водяные знаки и подписи</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Массовая загрузка</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Импорт из RSS</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Совместная работа в команде</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Управление ролями</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Автоматизация и шаблоны</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Брендирование и логотип</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Приоритетная поддержка</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Дополнительные функции */}
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 mb-16">
        <h2 className="text-xl text-center md:text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
          Дополнительные функции
        </h2>
        <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 bg-white dark:bg-slate-900">
          <table className="min-w-full text-sm md:text-base text-left border-separate border-spacing-y-1">
            <thead>
              <tr className="">
                <th className="py-3 px-4 font-bold text-gray-900 dark:text-white max-w-[430px] w-[430px]">
                  Тариф
                </th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">
                  Free
                </th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">
                  Professional
                </th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">
                  Business
                </th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {/* ...existing rows for Дополнительные функции... */}
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Мобильное приложение</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Браузерное расширение</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Интеграция с Canva</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Встроенный фоторедактор</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Импорт из облачных хранилищ</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Сокращение ссылок</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Двухфакторная аутентификация</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">AI Assist</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Поддержка различных соцсетей</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
                <td className="py-2 px-4 text-center">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Таблица сравнения платных функций */}
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 mb-16">
        <h2 className="text-xl text-center md:text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
          Платные функции
        </h2>
        <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 bg-white dark:bg-slate-900">
          <table className="min-w-full text-sm md:text-base text-left border-separate border-spacing-y-1">
            <thead>
              <tr>
                <th className="py-3 px-4 font-bold text-gray-900 dark:text-white max-w-[430px] w-[430px]">
                    Тариф
                </th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">Free</th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">Professional</th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">Business</th>
                <th className="py-3 px-4 font-bold text-blue-700 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Интеграция с Twitter / X</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Неограниченные рабочие пространства</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Рабочие процессы утверждения</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Массовое планирование (CSV и другое)</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Медиатека</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Ссылки в био (без брендинга)</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Трендовые посты в соцсетях</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Трендовые новости отрасли</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Автоматическая публикация из RSS</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Водяные знаки на фотографиях</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Автоматические подписи</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Запланированные комментарии и ветки</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Авто-репост и авто-удаление</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Вечная история постов (без ограничений)</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Детальная аналитика</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Лучшее время для публикаций</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Анализ хэштегов</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Анализ конкурентов</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Отчеты аналитики в PDF и CSV</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Безлимитные AI-запросы</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Рекомендации хэштегов</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Рециклинг постов (повторное использование)</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Повторяющиеся публикации</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Поддержка Spintax</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
              <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
                <td className="py-2 px-4 font-medium">Видеодизайн (через Canva)</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">❌</td>
                <td className="py-2 px-4 text-center">✔️</td>
                <td className="py-2 px-4 text-center">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
