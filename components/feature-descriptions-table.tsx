import React, { useRef, useEffect, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export function FeatureDescriptionsTable() {
  const [ref, inView] = useInView();
  return (
    <section
      ref={ref}
      className={`w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6 mb-20 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-xl text-center md:text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
        Описание функций
      </h2>
      <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 bg-white dark:bg-slate-900">
        <table className="min-w-full text-sm md:text-base text-left border-separate border-spacing-y-1">
          <thead>
            <tr>
              <th className="py-3 px-4 font-bold text-gray-900 dark:text-white w-1/3">
                Функция
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Интеграция с Twitter / X
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Планируйте публикации, репосты, ветки и просматривайте аналитику
                  для всех ваших аккаунтов Twitter / X.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  AI Assist (OpenAI)
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Используйте возможности искусственного интеллекта для генерации
                  контента, мгновенного завершения текста, создания впечатляющих
                  изображений и профессионального ответа на комментарии.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Мобильное приложение
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Планируйте все свои публикации в социальных сетях прямо с телефона
                  и получайте напоминания / push-уведомления для запланированных
                  историй в Instagram.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Расширение для браузера
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Легко делитесь найденным в интернете контентом в Facebook,
                  Instagram, Twitter / X, Mastodon, Bluesky, LinkedIn и других
                  основных социальных сетях всего в несколько кликов, без
                  необходимости открывать Publer в новой вкладке.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Интеграция с Canva
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Используйте Canva прямо в Publer и планируйте свои новые дизайны
                  всего в несколько кликов.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Встроенный фоторедактор
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Обрезайте, изменяйте размер, добавляйте фильтры, текст или рисуйте
                  на своих фотографиях прямо в Publer.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Импорт из облачных хранилищ и Unsplash
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Импортируйте медиафайлы в Publer напрямую из Google Drive,
                  Dropbox, OneDrive, Unsplash или любого другого общедоступного URL.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Шорткоды
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Создавайте шорткоды для номеров телефонов, адресов, хэштегов или
                  любого другого часто используемого вами текста при публикации в
                  социальных сетях.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Сокращение ссылок
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Подключите Bitly, Rebrandly, PixelMe, Switchy, JotUrl, RocketLink
                  или RetargetKit к Publer, и все ссылки (включая те, что в
                  описаниях постов) будут автоматически сокращены, чтобы вы могли
                  отслеживать их эффективность.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Двухфакторная аутентификация
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Добавьте дополнительный уровень безопасности при управлении своими
                  социальными аккаунтами с помощью Publer, включив
                  двухфакторную аутентификацию для себя и своих участников.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Планирование публикаций
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Планируйте публикации в различных социальных сетях, и они будут
                  автоматически опубликованы в выбранное вами время. В ограниченном
                  бесплатном плане, после публикации или удаления запланированного
                  поста, вы можете запланировать следующий для этого социального
                  аккаунта. В платных планах доступно неограниченное планирование с
                  ежедневными ограничениями для предотвращения спама.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Сохранение идей и черновиков
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Сохраняйте незавершенные посты или шаблоны, которые можно использовать
                  или переиспользовать в любое время.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Добавление в очередь (автопланирование)
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Просто добавьте новые посты в свою очередь, и Publer автоматически
                  запланирует их для вас на основе расписания публикаций, которое вы
                  определите.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Кастомизация постов
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Настройте свой пост в зависимости от платформы, на которой вы
                  публикуете, например, больше фотографий для Facebook, более короткий
                  текст для Twitter / X или дополнительные хэштеги для Instagram.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Предварительный просмотр постов
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Предварительно просмотрите, как ваши посты будут выглядеть в
                  социальных сетях до их публикации. С точностью предварительного
                  просмотра 99% не будет неожиданных сюрпризов.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Календарный вид
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Отслеживайте как будущие, так и прошлые посты, фильтруйте и ищите
                  посты, планируйте новый контент прямо из календаря, перетаскивайте
                  для перепланирования и просматривайте праздничные хэштеги для
                  каждого дня.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Предварительный просмотр ленты Instagram
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Управляйте своей ссылкой в био в Instagram. Привлекайте внимание и
                  продвигайте продажи на своем сайте электронной коммерции, увеличивайте
                  вовлеченность в различных социальных сетях и повышайте посещаемость
                  блога.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Ссылка в био для Instagram
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Управляйте своей ссылкой в био в Instagram. Привлекайте внимание и
                  продвигайте продажи на своем сайте электронной коммерции, увеличивайте
                  вовлеченность в различных социальных сетях и повышайте посещаемость
                  блога.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Неограниченные рабочие пространства
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Создавайте несколько рабочих пространств, приглашайте других
                  участников и назначайте им различные роли и уровни доступа для каждого
                  управляемого вами социального аккаунта. Чем больше, тем веселее... и
                  проще.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Рабочие процессы утверждения
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Создавайте рабочие процессы утверждения с уведомлениями в реальном
                  времени и заметками, как внутри вашей команды, так и для ваших
                  внешних клиентов.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Массовое планирование (CSV и другие)
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  От использования CSV-файла до загрузки нескольких медиафайлов и
                  встроенного планировщика нескольких постов — все инструменты для
                  массового планирования в одном месте.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Медиатека (неограниченно)
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Храните и организуйте все свои медиафайлы. Легко загружайте новые
                  медиафайлы, помечайте их, оставляйте заметки, ищите медиафайлы,
                  которые вы использовали или не использовали, как в виде сетки, так и
                  в виде списка.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Ссылка в био для Instagram (без брендинга)
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Управляйте своей ссылкой в био в Instagram с помощью страницы без
                  брендинга, а если у вас есть бизнес-план, вы также можете отслеживать
                  количество кликов.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Трендовые посты в социальных сетях
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Изучайте трендовые посты в социальных сетях, чтобы вдохновиться для
                  создания следующего контента!
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Трендовые новости отрасли
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Откройте для себя трендовые новости, подобранные специально для вас.
                  Изучайте главные заголовки или ищите по интересам для получения
                  персонализированной ленты.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Автоматическая публикация из RSS
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Подключите неограниченное количество RSS-лент, и Publer будет
                  автоматически публиковать или планировать новые посты из этих лент
                  для вас.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Водяные знаки на фотографиях
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Автоматически добавляйте водяные знаки ко всем фотографиям, которые вы
                  публикуете в социальных сетях, с помощью вашего собственного логотипа.
                  Не требуются навыки редактирования.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Автоматические подписи
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Как и в электронных письмах, подписи — это просто текст, который будет
                  автоматически добавлен в конец ваших постов. Идеально, если вы хотите
                  включить свою контактную информацию или хэштеги.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Планирование комментариев и веток
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Планируйте комментарии, которые будут автоматически опубликованы через
                  определенное время, которое вы укажете. Это идеально для создания
                  веток в Twitter / X, планирования первого комментария для Instagram или
                  повторного взаимодействия с вашей аудиторией.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Автоматическое распространение и удаление
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  После публикации позвольте Publer автоматически поделиться постом в
                  других управляемых вами социальных аккаунтах или автоматически удалить
                  пост через определенное время.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Вечная история постов (автосинхронизация)
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Опубликованные посты, независимо от того, были ли они опубликованы с
                  помощью Publer или нет, будут навсегда храниться на наших серверах, чтобы
                  вы могли вернуться и использовать их в любое время, пока у вас есть
                  платный план.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Глубокая аналитика
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Выходите за рамки лайков и подписчиков. Publer Analytics предоставляет вам
                  глубокие аналитические данные о производительности, чтобы принимать более
                  обоснованные решения в социальных сетях.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Лучшее время для публикации
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Найдите лучшее время для публикации для каждой социальной сети на основе
                  вашей уникальной активности и аудитории.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Анализ хэштегов
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Получите четкое представление о том, как ваши хэштеги работают на
                  разных платформах и в постах.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Анализ конкурентов
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Отслеживайте ключевые метрики и получайте информацию о производительности
                  социальных сетей ваших конкурентов.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Отчеты аналитики в формате PDF и CSV
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Создавайте готовые к презентации отчеты в формате PDF или получайте
                  необработанные данные в полностью редактируемом формате CSV.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Неограниченное количество AI-запросов
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Генерируйте столько AI-контента, сколько вам нужно, как текстового, так
                  и графического, без дополнительных затрат.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Предложения хэштегов
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Получайте релевантные предложения хэштегов для ваших постов, чтобы вы
                  могли достичь своей аудитории раньше ваших конкурентов.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Повторное использование постов
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Автоматически повторно используйте ваш вечнозеленый контент (цитаты,
                  статьи), чтобы ваша очередь никогда не иссякала, даже если у вас нет
                  ничего нового для публикации.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Повторяющиеся посты
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Легко планируйте что-то для публикации каждые два дня, каждую неделю,
                  каждые три месяца и так далее. Идеально для повторяющихся событий.
                </span>
              </td>
            </tr>
            <tr className="even:bg-blue-50/40 dark:even:bg-slate-800/40">
              <td className="py-2 px-4 font-medium flex items-center gap-2 relative group">
                <span
                  className="cursor-pointer underline decoration-dotted"
                  tabIndex={0}
                >
                  Поддержка Spintax
                </span>
                <span className="absolute left-1/2 z-10 hidden group-hover:flex group-focus:flex -translate-x-1/2 top-full mt-2 w-72 p-3 rounded-lg bg-gray-900 text-white text-xs shadow-lg transition-all duration-200 pointer-events-none">
                  Переиспользуйте ваш вечнозеленый контент, публикуя разные варианты постов.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
