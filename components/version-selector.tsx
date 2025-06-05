"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef, useEffect } from "react";

const versions = [
	{
		name: "Free",
		details: "Базовые функции. Ограниченная поддержка. Для личного пользования. Доступ 3 часа.",
		price: "0₽",
		points: [
			"Постинг по трендам ❌",
			"Автокомментинг ❌",
			"Поддержка в Telegram ❌",
			"Настройка частоты Ограничено",
			"Контроль через n8n ✅",
			"Приоритетная поддержка ❌",
			"Стратегии для ферм ❌"
		]
	},
	{
		name: "Professional",
		details: "До 3 каналов. Расширенные функции. Поддержка email. Для малого бизнеса.",
		price: "499₽/мес",
		points: [
			"Постинг по трендам ✅",
			"Автокомментинг ✅",
			"Поддержка в Telegram ✅",
			"Настройка частоты ✅",
			"Контроль через n8n ✅",
			"Приоритетная поддержка ❌",
			"Стратегии для ферм ❌"
		]
	},
	{
		name: "Business",
		details: "До 10 каналов. Все функции. Приоритетная поддержка. Для агентств и команд.",
		price: "1990₽/мес",
		points: [
			"Постинг по трендам ✅",
			"Автокомментинг ✅",
			"Поддержка в Telegram ✅",
			"Настройка частоты ✅",
			"Контроль через n8n ✅",
			"Приоритетная поддержка ✅",
			"Стратегии для ферм ❌"
		]
	},
	{
		name: "Enterprise",
		details: "Неограниченно каналов. API-доступ. Персональный менеджер.",
		price: "4990₽/мес",
		points: [
			"Постинг по трендам ✅",
			"Автокомментинг ✅",
			"Поддержка в Telegram ✅",
			"Настройка частоты ✅",
			"Контроль через n8n ✅",
			"Приоритетная поддержка ✅",
			"Стратегии для ферм ✅ (дополнительно)"
		]
	}
];

const settings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	responsive: [
		{ breakpoint: 1150, settings: { slidesToShow: 2, slidesToScroll: 1 } },
		{ breakpoint: 810, settings: { slidesToShow: 1, slidesToScroll: 1 } },
		{ breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
	],
	nextArrow: <CustomArrow direction="next" />,
	prevArrow: <CustomArrow direction="prev" />,
};

function CustomArrow({ direction, currentSlide, slideCount, ...props }: { direction: 'next' | 'prev'; currentSlide?: number; slideCount?: number; [key: string]: any }) {
	return (
		<button
			{...props}
			type="button"
			className={`slick-arrow slick-arrow-${direction} z-999 flex items-center justify-center bg-white border-2 border-blue-500 rounded-full w-14 h-14 shadow-xl absolute top-1/2 -translate-y-1/2 transition-all duration-200 hover:bg-blue-600 group focus:outline-none focus:ring-2 focus:ring-blue-400
				${direction === 'next' ? 'right-0 md:-right-8 mr-2 md:mr-4' : 'left-0 md:-left-8 ml-2 md:ml-4'}`}
			style={{ position: 'absolute' }}
			aria-label={direction === 'next' ? 'Следующий' : 'Предыдущий'}
		>
			{direction === 'next' ? (
				<svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="transition-colors duration-200 group-hover:stroke-white stroke-blue-600" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 24l8-8-8-8"/></svg>
			) : (
				<svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="transition-colors duration-200 group-hover:stroke-white stroke-blue-600" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M20 8l-8 8 8 8"/></svg>
			)}
		</button>
	);
}

const filterOptions = ["Ежемесячно", "6 Mесяцев", "Ежегодно"] as const;
type FilterOption = typeof filterOptions[number];

const priceMapping: Record<FilterOption, string[]> = {
	"Ежемесячно": ["0₽", "499₽/мес", "1990₽/мес", "4990₽/мес"],
	"6 Mесяцев": ["0₽", "2994₽", "11940₽", "29940₽"],
	"Ежегодно": ["0₽", "4990₽", "19900₽", "49900₽"],
};

export default function VersionSelector() {
	const [selectedFilter, setSelectedFilter] = useState<FilterOption>("Ежемесячно");
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [visible, setVisible] = useState<boolean[]>(() => versions.map(() => false));

	// New: State for filters
	const [socialAccounts, setSocialAccounts] = useState(4);
	const [additionalMembers, setAdditionalMembers] = useState(7);

	useEffect(() => {
		const observers: IntersectionObserver[] = [];
		versions.forEach((_, idx) => {
			const ref = cardRefs.current[idx];
			if (!ref) return;
			const observer = new window.IntersectionObserver(
				([entry]) => {
					setVisible(v => {
						const copy = [...v];
						copy[idx] = entry.isIntersecting;
						return copy;
					});
				},
				{ threshold: 0.3 }
			);
			observer.observe(ref);
			observers.push(observer);
		});
		return () => observers.forEach(o => o.disconnect());
	}, []);

	// New: Price calculation logic
	const getPrice = (plan: string, index: number) => {
		if (plan === "Farm") return "Custom";
		// Example: price increases by 100₽ per social account and 50₽ per member for demonstration
		const basePrice = priceMapping[selectedFilter][index];
		if (plan === "Free") return basePrice;
		let priceNum = 0;
		if (basePrice.includes("₽")) {
			priceNum = parseInt(basePrice.replace(/[^\d]/g, ""));
		}
		const extra = (socialAccounts - 4) * 100 + (additionalMembers - 7) * 50;
		const final = Math.max(priceNum + extra, 0);
		return basePrice.includes("/мес") ? `${final}₽/мес` : `${final}₽`;
	};

	return (
		<section 
			id="version-selector"
			className="my-8"
		>

			<div className="flex justify-center mb-6">
				{filterOptions.map((option) => (
					<button
						key={option}
						onClick={() => setSelectedFilter(option)}
						className={`px-4 py-2 mx-2 rounded-full border transition-all duration-300 ${
							selectedFilter === option
								? "bg-blue-600 text-white border-blue-600"
								: "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
						}`}
					>
						{option}
					</button>
				))}
			</div>

			<div className="flex justify-center gap-8 mb-6">
				<div className="flex flex-col items-center">
					<span className="font-semibold mb-1 flex items-center gap-1">
						Социальные сети
						<span className="relative group">
							<button
								type="button"
								tabIndex={0}
								aria-label="Информация о социальных сетях"
								className="ml-1 text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
							>
								<svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block align-middle">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<text x="12" y="16" textAnchor="middle" fontSize="13" fill="currentColor" fontWeight="bold">i</text>
								</svg>
							</button>
							<span className="pointer-events-none absolute left-1/2 z-50 mt-2 w-72 -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-3 text-xs text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 shadow-xl whitespace-pre-line text-left">
								Пример: 2 страницы Facebook и 2 аккаунта Instagram считаются как 4 социальных аккаунта.
								<br />
								<br />
								За каждые 9 социальных аккаунтов — 10-й бесплатно.
							</span>
						</span>
					</span>
					<div className="flex items-center border rounded-lg px-3 py-2 bg-white">
						<button onClick={() => setSocialAccounts(v => Math.max(1, v - 1))} className="w-7 h-7 flex items-center justify-center text-lg font-bold text-blue-600 border rounded bg-gray-50 hover:bg-gray-100">-</button>
						<span className="mx-4 w-6 text-center font-bold">{socialAccounts}</span>
						<button onClick={() => setSocialAccounts(v => Math.min(100, v + 1))} className="w-7 h-7 flex items-center justify-center text-lg font-bold text-blue-600 border rounded bg-gray-50 hover:bg-gray-100">+</button>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<span className="font-semibold mb-1 flex items-center gap-1">
						Дополнительные участники
						<span className="relative group">
							<button
								type="button"
								tabIndex={0}
								aria-label="Информация о дополнительных участниках"
								className="ml-1 text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
							>
								<svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block align-middle">
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
									<text x="12" y="16" textAnchor="middle" fontSize="13" fill="currentColor" fontWeight="bold">i</text>
								</svg>
							</button>
							<span className="pointer-events-none absolute left-1/2 z-50 mt-2 w-80 -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-3 text-xs text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 shadow-xl whitespace-pre-line text-left">
								Выберите количество дополнительных участников, если вы управляете социальными аккаунтами как команда и хотите использовать совместную работу и процессы утверждения.
								<br />
								<br />
								Как владелец плана, вы уже включены в стоимость и не учитываетесь в этом лимите.
								<br />
								<br />
								За каждых 9 дополнительных участников — 10-й бесплатно
							</span>
						</span>
					</span>
					<div className="flex items-center border rounded-lg px-3 py-2 bg-white">
						<button onClick={() => setAdditionalMembers(v => Math.max(1, v - 1))} className="w-7 h-7 flex items-center justify-center text-lg font-bold text-blue-600 border rounded bg-gray-50 hover:bg-gray-100">-</button>
						<span className="mx-4 w-6 text-center font-bold">{additionalMembers}</span>
						<button onClick={() => setAdditionalMembers(v => Math.min(100, v + 1))} className="w-7 h-7 flex items-center justify-center text-lg font-bold text-blue-600 border rounded bg-gray-50 hover:bg-gray-100">+</button>
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto overflow-x-hidden">
				<Slider {...settings}>
					{versions.map((v, index) => (
						<div
							key={v.name}
							ref={el => {
								cardRefs.current[index] = el as HTMLDivElement | null;
							}}
							className="px-2 md:px-4 h-full flex justify-center items-stretch"
							style={{ minWidth: 0 }}
						>
							<div
								className={`
									w-[360px] h-[560px] rounded-xl shadow-lg bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8 text-center flex flex-col border border-blue-200 transition-all duration-700 mx-auto
									${visible[index]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
									}
									hover:shadow-lg hover:scale-105
								`}
								style={{
									transitionProperty: "opacity, transform",
									transitionDelay: visible[index] ? `${index * 150}ms` : "0ms",
									minWidth: 0
								}}
							>
								<div className="flex flex-col justify-between items-center flex-1 w-full h-full">
									<div className="text-xl font-extrabold mb-2 text-blue-700 uppercase tracking-wide">{v.name}</div>
									<div className="mb-3 text-gray-700 min-h-[48px] text-base font-medium">{v.details}</div>
									<ul className="text-left mt-2 mb-2 space-y-1 text-sm w-full max-w-md mx-auto">
										{v.points && v.points.map((point, idx) => (
											<li key={idx} className="flex items-center gap-2 py-1 px-2 rounded-md bg-blue-50 w-full overflow-hidden text-ellipsis">
												{point.includes("✅") ? (
													<span className="text-green-500 font-bold">✔</span>
												) : point.includes("❌") ? (
													<span className="text-red-400 font-bold">✖</span>
												) : null}
												<span className="text-gray-800 break-words whitespace-pre-line">{point.replace("✅", "").replace("❌", "")}</span>
											</li>
										))}
									</ul>
								</div>
								<div className="flex items-center justify-center w-full mt-6 mb-0 pt-2 border-t border-blue-200">
									<span className="inline-block bg-blue-600 text-white text-2xl font-extrabold rounded-lg px-8 py-3 shadow-md border border-blue-600 leading-tight whitespace-nowrap">
										{String(getPrice(v.name, index)).replace(/([\d,.]+)(₽)(\/мес)?/, (_m, price, rub, per) => `${price}\u00A0${rub}${per ? per : ''}`)}
									</span>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
			
			{/* Add animation keyframes */}
			<style jsx global>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fadeIn {
					animation: fadeIn 1s ease-out forwards;
				}

				/* Add stagger effect for cards */
				.slick-slide:nth-child(1) .animate-fadeIn {
					animation-delay: 0s;
				}
				.slick-slide:nth-child(2) .animate-fadeIn {
					animation-delay: 0.2s;
				}
				.slick-slide:nth-child(3) .animate-fadeIn {
					animation-delay: 0.4s;
				}
				.slick-slide:nth-child(4) .animate-fadeIn {
					animation-delay: 0.6s;
				}

				/* Add hover animation */
				.slick-slide {
					perspective: 1000px;
				}
				
				.slick-slide > div {
					transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
				}

				/* Smooth price change animation */
				.bg-blue-600 {
					transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
				}
			`}</style>
		</section>
	);
}
