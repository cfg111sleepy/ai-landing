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
			"1 аккаунт",
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
		name: "Basic",
		details: "До 3 каналов. Расширенные функции. Поддержка email. Для малого бизнеса.",
		price: "499₽/мес",
		points: [
			"1 аккаунт",
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
		name: "Pro",
		details: "До 10 каналов. Все функции. Приоритетная поддержка. Для агентств и команд.",
		price: "1990₽/мес",
		points: [
			"до 5 аккаунтов",
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
		name: "Farm",
		details: "Неограниченно каналов. API-доступ. Персональный менеджер.",
		price: "4990₽/мес",
		points: [
			"10+ аккаунтов (до 100)",
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
		{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
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
			className={`slick-arrow slick-arrow-${direction} !z-10 !flex !items-center !justify-center !bg-white hover:!bg-gray-100 !border !border-blue-600 !rounded-full !w-10 !h-10 !shadow-lg !absolute !top-1/2 !-translate-y-1/2 ${direction === 'next' ? '!right-0 md:!-right-6 !mr-2 md:!mr-4' : '!left-0 md:!-left-6 !ml-2 md:!ml-4'}`}
			style={{ position: 'absolute' }}
			aria-label={direction === 'next' ? 'Следующий' : 'Предыдущий'}
		>
			{direction === 'next' ? (
				<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/></svg>
			) : (
				<svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6"/></svg>
			)}
		</button>
	);
}

const filterOptions = ["Monthly", "6 Months", "Yearly"] as const;
type FilterOption = typeof filterOptions[number];

const priceMapping: Record<FilterOption, string[]> = {
	Monthly: ["0₽", "499₽/мес", "1990₽/мес", "4990₽/мес"],
	"6 Months": ["0₽", "2994₽", "11940₽", "29940₽"],
	Yearly: ["0₽", "4990₽", "19900₽", "49900₽"],
};

export default function VersionSelector() {
	const [selectedFilter, setSelectedFilter] = useState<FilterOption>("Monthly");
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [visible, setVisible] = useState<boolean[]>(() => versions.map(() => false));

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

	return (
		<section 
			id="version-selector"
			className="my-8"
			// data-aos="fade-down"
            // data-aos-duration="1500"
            // data-aos-delay="100"
		>
			<h3 className="text-center text-2xl font-bold mb-4">Выберите версию:</h3>
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
			<div className="max-w-6xl mx-auto">
				<Slider {...settings}>
					{versions.map((v, index) => (
						<div
							key={v.name}
							ref={el => (cardRefs.current[index] = el)}
							className="px-4 py-6 h-full"
						>
							<div
								className={`
									rounded-xl shadow-lg bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8 text-center h-full flex flex-col border border-blue-200 min-h-[560px] max-h-[560px] w-full transition-all duration-700
									${visible[index]
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
									}
									hover:shadow-lg hover:scale-105
								`}
								style={{
									transitionProperty: "opacity, transform",
									transitionDelay: visible[index] ? `${index * 150}ms` : "0ms",
								}}
							>
								<div className="flex flex-col items-center flex-1 w-full">
									<div className="text-xl font-extrabold mb-2 text-blue-700 uppercase tracking-wide">{v.name}</div>
									<div className="mb-3 text-gray-700 min-h-[48px] text-base font-medium">{v.details}</div>
									<ul className="text-left mt-2 mb-2 space-y-1 text-sm w-full max-w-md mx-auto">
										{v.points && v.points.map((point, idx) => (
											<li key={idx} className="flex items-center gap-2 py-1 px-2 rounded-md bg-blue-50 w-full">
												{point.includes("✅") ? (
													<span className="text-green-500 font-bold">✔</span>
												) : point.includes("❌") ? (
													<span className="text-red-400 font-bold">✖</span>
												) : null}
												<span className="text-gray-800 break-words">{point.replace("✅", "").replace("❌", "")}</span>
											</li>
										))}
									</ul>
								</div>
								<div className="flex items-center justify-center w-full mt-6 mb-0 pt-2 border-t border-blue-200">
									<span className="inline-block bg-blue-600 text-white text-2xl font-extrabold rounded-lg px-8 py-3 shadow-md border border-blue-600">
										{priceMapping[selectedFilter][index]}
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
