import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section id="features-planet" className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 sm:py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 sm:pb-12 text-center md:pb-20" 
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="100"
            data-aos-once="true">
            <h2 className="text-lg sm:text-xl font-bold text-gray-200 md:text-4xl px-4 relative
              before:absolute before:inset-0 before:origin-left before:bg-gradient-to-r before:from-blue-500/20 before:to-transparent before:scale-x-0
              before:transition-transform before:duration-1200 hover:before:scale-x-100
              animate-fadeIn">
              Ваш персональный AI-ассистент: автоматизируйте контент, управляйте аудиторией, масштабируйтесь.
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-8 sm:pb-12 md:pb-20" data-aos="zoom-y-out" data-aos-duration="1500">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[1] before:animate-[pulse_4.5s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900 w-[280px] sm:w-[320px] md:w-[400px] h-auto"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                  priority
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-32 sm:-right-48 md:-right-64 -top-10 sm:-top-16 md:-top-20 z-10 max-w-none hidden sm:block"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div className="hidden sm:block">
                      <Image
                        className="absolute -left-16 sm:-left-20 md:-left-28 top-8 sm:top-12 md:top-16 z-10 animate-[float_4.5s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-1000 w-[160px] sm:w-[200px] md:w-[253px]"
                        src={PlanetTagImg01}
                        width={253}
                        height={56}
                        alt="Tag 01"
                      />
                      <Image
                        className="absolute left-32 sm:left-44 md:left-56 top-4 sm:top-6 md:top-7 z-10 animate-[float_4.5s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-1000 w-[140px] sm:w-[180px] md:w-[241px]"
                        src={PlanetTagImg02}
                        width={241}
                        height={56}
                        alt="Tag 02"
                      />
                      <Image
                        className="absolute -left-12 sm:-left-16 md:-left-20 bottom-16 sm:bottom-20 md:bottom-24 z-10 animate-[float_4.5s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-1000 w-[140px] sm:w-[180px] md:w-[243px]"
                        src={PlanetTagImg03}
                        width={243}
                        height={56}
                        alt="Tag 03"
                      />
                      <Image
                        className="absolute bottom-20 sm:bottom-24 md:bottom-32 left-36 sm:left-48 md:left-64 z-10 animate-[float_4.5s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-1000 w-[150px] sm:w-[190px] md:w-[251px]"
                        src={PlanetTagImg04}
                        width={251}
                        height={56}
                        alt="Tag 04"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
            <article className="group bg-gray-800/5 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-gray-800/10 transition-all duration-1000 relative 
              before:absolute before:inset-0 before:rounded-lg before:border before:border-gray-700 before:transition-all before:duration-1000
              hover:before:border-blue-500/50 hover:before:scale-105 hover:transform hover:scale-[1.02]
              hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.1)]" 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="0">
              <h3 className="mb-3 flex items-center gap-2 font-medium text-gray-200 text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300">
                <svg
                  className="fill-blue-500 transform group-hover:scale-110 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Экономьте время</span>
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Забудьте про выгорание, дедлайны и пустые экраны—типичные проблемы при работе с контентом. Один инструмент, который полностью автоматизирует вашу рутину.</p>
            </article>
            <article className="group bg-gray-800/5 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-gray-800/10 transition-all duration-1000 relative 
              before:absolute before:inset-0 before:rounded-lg before:border before:border-gray-700 before:transition-all before:duration-1000
              hover:before:border-blue-500/50 hover:before:scale-105 hover:transform hover:scale-[1.02]
              hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.1)]" 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="100">
              <h3 className="mb-3 flex items-center gap-2 font-medium text-gray-200 text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300">
                <svg
                  className="fill-blue-500 transform group-hover:scale-110 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>AI пишет за вас</span>
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Создавайте публикации под ваши темы, стиль и бренд автоматически. Больше никаких черновиков—нейросеть сделает всю работу, а вам останется только поставить финальные штрихи.
              </p>
            </article>
            <article className="group bg-gray-800/5 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-gray-800/10 transition-all duration-1000 relative 
              before:absolute before:inset-0 before:rounded-lg before:border before:border-gray-700 before:transition-all before:duration-1000
              hover:before:border-blue-500/50 hover:before:scale-105 hover:transform hover:scale-[1.02]
              hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.1)]" 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="200">
              <h3 className="mb-3 flex items-center gap-2 font-medium text-gray-200 text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300">
                <svg
                  className="fill-blue-500 transform group-hover:scale-110 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg>
                <span>Умный календарь публикаций</span>
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Планируйте контент заранее или публикуйте мгновенно. Публикации автоматически появятся в Telegram и Twitter, даже когда вы офлайн.
              </p>
            </article>
            <article className="group bg-gray-800/5 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-gray-800/10 transition-all duration-1000 relative 
              before:absolute before:inset-0 before:rounded-lg before:border before:border-gray-700 before:transition-all before:duration-1000
              hover:before:border-blue-500/50 hover:before:scale-105 hover:transform hover:scale-[1.02]
              hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.1)]" 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="300">
              <h3 className="mb-3 flex items-center gap-2 font-medium text-gray-200 text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300">
                <svg
                  className="fill-blue-500 transform group-hover:scale-110 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                </svg>
                <span>Ежедневные тренды и идеи</span>
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Что сейчас обсуждают ваши конкуренты? Какие темы на волне? Система сама подскажет, о чём и когда писать, чтобы всегда быть в тренде.
              </p>
            </article>
            <article className="group bg-gray-800/5 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-gray-800/10 transition-all duration-1000 relative 
              before:absolute before:inset-0 before:rounded-lg before:border before:border-gray-700 before:transition-all before:duration-1000
              hover:before:border-blue-500/50 hover:before:scale-105 hover:transform hover:scale-[1.02]
              hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.1)]" 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="400">
              <h3 className="mb-3 flex items-center gap-2 font-medium text-gray-200 text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300">
                <svg
                  className="fill-blue-500 transform group-hover:scale-110 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
                </svg>
                <span>Один интерфейс для всего</span>
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Единый инструмент для управления всеми соцсетями. Забудьте о множестве вкладок—публикуйте контент, контролируйте работу команды и анализируйте эффективность в одном месте.
              </p>
            </article>
            <article className="group bg-gray-800/5 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-gray-800/10 transition-all duration-1000 relative 
              before:absolute before:inset-0 before:rounded-lg before:border before:border-gray-700 before:transition-all before:duration-1000
              hover:before:border-blue-500/50 hover:before:scale-105 hover:transform hover:scale-[1.02]
              hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.1)]" 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="500">
              <h3 className="mb-3 flex items-center gap-2 font-medium text-gray-200 text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300">
                <svg
                  className="fill-blue-500 transform group-hover:scale-110 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}   
                > 
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <span>Интеграция и сценарии с n8n</span>
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Автоматизируйте работу с другими сервисами: CRM, Google Sheets, Google Analytics. Настраивайте сценарии и адаптируйте инструмент под ваши задачи.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
