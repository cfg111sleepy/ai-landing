"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/test5.jpeg";
import Avatar02 from "@/public/images/123.png";
import Avatar03 from "@/public/images/n8n.png";
import Avatar04 from "@/public/images/111.png";
import Avatar05 from "@/public/images/222.png";
import Avatar06 from "@/public/images/333.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef, useEffect } from "react";
import { FaSearchPlus } from "react-icons/fa";

export default function HeroHome() {
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const avatars = [
    { src: Avatar01, alt: "Workflow 1" },
    { src: Avatar02, alt: "Workflow 2" },
    { src: Avatar03, alt: "Workflow 3" },
    { src: Avatar04, alt: "Workflow 1" },
    { src: Avatar05, alt: "Workflow 2" },
    { src: Avatar06, alt: "Workflow 3" },
  ];
  return (
    <section id="hero-home" className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div
          ref={sectionRef}
          className="pt-32 md:pt-40"
        >
          {/* Section header */}
          <div
            className={`pb-12 text-center md:pb-16 transition-all duration-1000 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <h1
              className="mb-6 border-y font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-4xl"
            >
              TrendPilot.AI — автономная система управления соцсетями с помощью ИИ
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-6 text-lg text-gray-700"
              >
                Оптимизирует ведение аккаунтов в X, Telegram и других соцсетях: контент, активность, анализ трендов. Подходит для личных брендов, маркетологов и фарм-аккаунтов.
              </p>
              <div
                className={`mx-auto max-w-2xl mb-8 transition-all duration-1000 ${
                  inView
                    ? "opacity-100 translate-y-0 delay-300"
                    : "opacity-0 translate-y-8 delay-0"
                }`}
                style={{
                  transitionProperty: "opacity, transform",
                  transitionDelay: inView ? "300ms" : "0ms",
                }}
              >
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  arrows={false}
                  className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
                >
                  {avatars.map((avatar, idx) => (
                    <div key={idx} className="relative">
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        className="w-full h-80 object-fill"
                      />
                      <button
                        className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
                        onClick={() => setEnlargedIndex(idx)}
                        aria-label="Enlarge image"
                        type="button"
                      >
                        <FaSearchPlus className="text-xl text-gray-700" />
                      </button>
                    </div>
                  ))}
                </Slider>
                {/* Modal for enlarged image */}
                {enlargedIndex !== null && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
                    <button
                      className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition z-50"
                      onClick={() => setEnlargedIndex(null)}
                      aria-label="Close enlarged image"
                      type="button"
                    >
                      <span className="text-2xl">&times;</span>
                    </button>
                    <div className="flex items-center justify-center w-full h-full">
                      <Image
                        src={avatars[enlargedIndex].src}
                        alt={avatars[enlargedIndex].alt}
                        className="object-contain"
                        style={{ zIndex: '20', width: '75vw', height: '75vh', maxWidth: '75vw', maxHeight: '75vh' }}
                        priority
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Попробовать бесплатно{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-6 flex flex-col items-center justify-center">
            <h2 className="md:text-2xl font-bold text-black-700 mb-5 text-center">
                Основа архитектуры — 
                <a
                  href="https://n8n.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >  
                  {" "} n8n
                </a>
                : гибкость, надёжность, контроль.
              </h2>
            <div className="w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gEL0fFCdAJQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
