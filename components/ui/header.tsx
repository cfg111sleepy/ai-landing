import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding and name */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Cruip">
              <Logo />
              <span className="font-extrabold text-lg md:text-xl group-hover:underline">
                TrendPilot.AI
              </span>
            </Link>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-6">
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  href="#hero-home"
                >
                  Интеграции
                </Link>
              </li>
              <li>
                <span className="text-gray-300 select-none">|</span>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  href="#install-block"
                >
                  Установка
                </Link>
              </li>
              <li>
                <span className="text-gray-300 select-none">|</span>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900 hover:underline underline-offset-4"
                  href="/plans"
                >
                  Тарифы и планы
                </Link>
              </li>
            </ul>
          </div>
          {/* Burger menu button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Открыть меню"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Открыть меню</span>
            <svg
              className={`h-6 w-6 transition-transform ${
                mobileOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden absolute top-14 left-0 w-full bg-white rounded-b-2xl shadow-lg z-40 animate-fadeIn">
              <div className="flex flex-col items-center py-4 gap-2">
                <Link
                  className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:underline underline-offset-4"
                  href="#hero-home"
                  onClick={() => setMobileOpen(false)}
                >
                  Интеграции
                </Link>
                <Link
                  className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:underline underline-offset-4"
                  href="#install-block"
                  onClick={() => setMobileOpen(false)}
                >
                  Установка
                </Link>
                <Link
                  className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:underline underline-offset-4"
                  href="/plans"
                  onClick={() => setMobileOpen(false)}
                >
                  Тарифы и планы
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
