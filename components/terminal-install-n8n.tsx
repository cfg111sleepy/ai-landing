"use client";
import React, { useEffect, useRef, useState } from "react";

const preConnect = [
  "git clone https://github.com/n8n-io/n8n.git: Cloning into 'n8n'...",
  "npx n8n: Need to install the following packages: n8n@1.94.0 Ok to proceed? (y) y",
  "[license SDK] Skipping renewal on init because renewal is not due yet or cert is not initialized",
  "Version: 1.94.0 Successfully start.",
  "# Connecting to accounts database",
  "Connecting to accounts database... OK",
  "# Fetching available accounts",
];
const postConnect = [
  "- @user1 (Telegram)      - @page_admin (Facebook)",
  "- @socialboss (Instagram) - @main_channel (Discord)",
  "# Posting to Telegram as @user1...",
  "Post link: https://t.me/socialboss/212",
  "Editor is now accessible via: http://localhost:5678",
  'Press "o" to open in Browser.',
];

export default function TerminalInstallN8N() {
  const [step, setStep] = useState(0);
  const [showPost, setShowPost] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Запускати анімацію тільки коли блок зʼявиться у viewport
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Кроки анімації
  useEffect(() => {
    if (!hasStarted) return;
    if (!showPost) {
      if (step < preConnect.length) {
        const timeout = setTimeout(() => setStep(step + 1), 700);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setShowPost(true), 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (step < preConnect.length + postConnect.length) {
        const timeout = setTimeout(() => setStep(step + 1), 700);
        return () => clearTimeout(timeout);
      }
    }
  }, [step, showPost, hasStarted]);
  
  return (
    <div className="relative py-8 px-2 md:px-6 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden shadow-xl w-full">
      <div className="pointer-events-none absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <radialGradient
              id="bg1"
              cx="50%"
              cy="0%"
              r="100%"
              fx="50%"
              fy="0%"
              gradientTransform="rotate(45)"
            >
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="bg2"
              cx="80%"
              cy="100%"
              r="100%"
              fx="80%"
              fy="100%"
              gradientTransform="rotate(45)"
            >
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="560" fill="url(#bg1)" />
          <rect width="1440" height="560" fill="url(#bg2)" />
        </svg>
      </div>
      <div className="relative z-10 w-full">
        {/* Terminal block remains unchanged */}
        <h2 className="m-8 text-center text-2xl">
          Запуск n8n в Терминале Linux или OSX
        </h2>
        <div
          className="mx-auto max-w-3xl"
          data-aos="zoom-y-out"
          data-aos-delay={600}
        >
          <div className="relative rounded-2xl aspect-video bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
            <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
              <span className="text-[13px] font-medium text-white">
                Terminal
              </span>
            </div>
            <div ref={ref} className="font-mono text-gray-100 text-sm min-h-[380px] transition-all">
      {!showPost ? (
        preConnect.map((line, i) => (
          <div
            key={i}
            className={`transition-opacity duration-300 ${
              i <= step ? "opacity-100" : "opacity-0"
            }`}
          >
            {line}
          </div>
        ))
      ) : (
        postConnect.map((line, i) => (
          <div
            key={i}
            className={`transition-opacity duration-300 ${
              i + preConnect.length <= step ? "opacity-100" : "opacity-0"
            }`}
          >
            {line}
          </div>
        ))
      )}
    </div>


          </div>
        </div>
        {/* Bottom subtitle image */}
      </div>
    </div>
  );
}
