"use client";

import { useState, useRef, useEffect } from "react";

const FAQS = [
	{
		q: "Насколько безопасно использовать AI-ассистент?",
		a: "Все данные обрабатываются локально или через защищённые каналы. Мы не храним ваши пароли и не собираем историю ваших сообщений. Безопасность и приватность — наш приоритет.",
	},
	{
		q: "Нужно ли постоянно держать компьютер включённым?",
		a: "Нет, сервис работает в облаке. Ваши сценарии выполняются даже если вы офлайн.",
	},
	{
		q: "Можно ли подключить сразу несколько социальных сетей?",
		a: "Да, поддерживается одновременное подключение Twitter, Telegram, Discord, Reddit и других платформ.",
	},
    {
	    q: "Какие задачи можно автоматизировать с помощью сервиса?",
	    a: "Сервис позволяет автоматизировать публикации, управление контентом, планирование постов, ответы на комментарии и сообщения, а также сбор статистики по вашим социальным сетям. Вы экономите время и получаете полный контроль над своей онлайн-активностью.",
    },
	{
		q: "Подходит ли сервис новичкам?",
		a: "Конечно! Мы подготовили подробные инструкции, а интерфейс прост и интуитивен. При возникновении вопросов — поддержка всегда на связи.",
	},
];

export default function FaqSection() {
	const [open, setOpen] = useState<number | null>(null);
	const sectionRef = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const handler = () => {
			if (!sectionRef.current) return;
			const rect = sectionRef.current.getBoundingClientRect();
			if (rect.top < window.innerHeight - 80) setInView(true);
		};
		window.addEventListener("scroll", handler, { passive: true });
		handler();
		return () => window.removeEventListener("scroll", handler);
	}, []);

	return (
		<section
			ref={sectionRef}
			className={`mt-12 relative z-10 py-16 px-4 sm:px-6 max-w-3xl mx-auto transition-all duration-1000 fade-up
        bg-white dark:bg-slate-900 rounded-2xl mb-12
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
			aria-labelledby="faq-title"
		>
			<h2
				id="faq-title"
				className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
			>
				Часто задаваемые вопросы
			</h2>
			<ul className="divide-y divide-gray-200 dark:divide-slate-700">
				{FAQS.map((item, idx) => (
					<li key={idx}>
						<button
							className={`w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors
								${open === idx ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-gray-200"}`}
							aria-expanded={open === idx}
							aria-controls={`faq-panel-${idx}`}
							id={`faq-header-${idx}`}
							tabIndex={0}
							onClick={() => setOpen(open === idx ? null : idx)}
							onKeyDown={e => {
								if (e.key === "Enter" || e.key === " ") setOpen(open === idx ? null : idx);
								if (e.key === "ArrowDown") setOpen((open === null || open === FAQS.length - 1) ? 0 : (open + 1));
								if (e.key === "ArrowUp") setOpen((open === null || open === 0) ? FAQS.length - 1 : (open - 1));
							}}
						>
							<span className="font-medium text-lg flex-1 text-left">
								{item.q}
							</span>
							<svg
								className={`ml-4 h-6 w-6 transform transition-transform duration-300 ${open === idx ? "rotate-180 text-blue-600 dark:text-blue-400" : "rotate-0 text-gray-400 dark:text-gray-500"}`}
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						<div
							id={`faq-panel-${idx}`}
							role="region"
							aria-labelledby={`faq-header-${idx}`}
							className={`overflow-hidden transition-all duration-500 ${open === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
						>
							<div className="pb-5 pr-2 text-gray-700 dark:text-slate-300">
								{item.a}
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
