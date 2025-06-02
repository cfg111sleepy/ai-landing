import Link from "next/link";
import Logo from "./logo";
import { useRef, useEffect, useState } from "react";

export default function Footer({ border = false }: { border?: boolean }) {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer>
      <div
        ref={footerRef}
        className={`mt-10 mb-10 mx-auto max-w-6xl w-full px-4 sm:px-6 transition-all duration-700 ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{ transitionProperty: "opacity, transform" }}
      >
        {/* Top area: Blocks */}
        <div
          className={`flex flex-col md:flex-row w-full justify-between items-stretch md:items-start gap-8 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="flex flex-col h-full justify-end min-w-[180px] max-w-[240px] flex-1 mb-8 md:mb-0">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600 mt-2">
              &copy; Cruip.com — Все права защищены.
            </div>
          </div>

          {/* 2nd block */}
          <div className="flex flex-col h-full justify-end min-w-[180px] max-w-[240px] flex-1 mb-8 md:mb-0">
            <h3 className="text-sm font-medium mb-2">Продукт</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  href="#features-planet"
                >
                  Возможности
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  href="#hero-home"
                >
                  Интеграции
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  href="#version-selector"
                >
                  Тарифы и планы
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  href="#testimonials"
                >
                  Наш подход
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block (Resources) */}
          <div className="flex flex-col h-full justify-end min-w-[180px] max-w-[240px] flex-1 mb-8 md:mb-0">
            <h3 className="text-sm font-medium mb-2">Ресурсы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  href="https://n8n.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  N8n - Официальный сайт
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.n8n.io/?_gl=1*sr5jhd*_gcl_au*MTg3Nzg5MDI5NC4xNzQzNjA0OTY2*_ga*MTUzMjAwODcwNi4xNzQzNjA0OTY3*_ga_0SC4FF2FH9*czE3NDg1MjEyOTMkbzE5JGcwJHQxNzQ4NTIxMjkzJGo2MCRsMCRoMA.."
                >
                  N8n - Документация 
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  href="https://n8n.io/support/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  N8n - Поддержка
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block (Social) */}
          <div className="flex flex-col h-full justify-end min-w-[180px] max-w-[240px] flex-1">
            <h3 className="text-sm font-medium mb-2">Социальные сети</h3>
            <ul className="flex gap-3 md:gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600 hover:underline underline-offset-4"
                  href="https://x.com/n8n_io"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600 hover:underline underline-offset-4"
                  href="https://medium.com/data-and-beyond/part-1-introduction-to-n8n-what-it-is-and-how-it-works-74c214de769e"
                  aria-label="Medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600 hover:underline underline-offset-4"
                  href="https://github.com/n8n-io/n8n"
                  aria-label="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          footer .flex-col.md\\:flex-row {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          footer .flex-1 {
            min-width: 0 !important;
            max-width: 100% !important;
          }
          footer ul.flex {
            justify-content: flex-start !important;
            gap: 1.5rem !important;
          }
          footer h3 {
            margin-bottom: 0.5rem !important;
          }
          footer .mb-8 {
            margin-bottom: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
