import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// ...existing imports

const Header = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const { t } = useTranslation("common");

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ru" : "en";
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* ...existing code for logo/links... */}
        <div className="flex items-center space-x-4">
          {/* Example for nav items: */}
          <a href="/" className="...">
            {t("nav.home")}
          </a>
          <a href="/about" className="...">
            {t("nav.about")}
          </a>
          {/* ...existing code... */}
          <button
            onClick={toggleLocale}
            className="bg-transparent px-3 py-2 rounded text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Switch language"
          >
            {locale === "en" ? "EN | RU" : "RU | EN"}
          </button>
          <button
            aria-label={t("themeToggle")}
            // ...existing code...
          >
            {/* ...existing code... */}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;