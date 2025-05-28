import React from "react";

export default function TerminalInstallN8N() {
  return (
    <div>
      <h2 className="m-8 text-center text-2xl">
        Запуск n8n в Терминале Linux или OSX
      </h2>
      <div
        className="mx-auto max-w-3xl"
        data-aos="zoom-y-out"
        data-aos-delay={600}
      >
        <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
          <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
            <span className="text-[13px] font-medium text-white">
              Terminal
            </span>
          </div>
          <div className="font-mono text-gray-500 [&_span]:opacity-0">
            <span className="animate-[code-1_10s_infinite] text-gray-200">
              git clone https://github.com/n8n-io/n8n.git:
            </span>{" "}
            <span className="animate-[code-1_10s_infinite]">
              Cloning into 'n8n'...
            </span>
            <br />
            <span className="animate-[code-3_10s_infinite] text-gray-200">
              npx n8n:
            </span>{" "}
            <span className="animate-[code-3_10s_infinite]">
              Need to install the following packages:
              n8n@1.94.0
              Ok to proceed? (y) y
            </span>
            <br />
            <span className="animate-[code-5_10s_infinite]">
              [license SDK] Skipping renewal on init because renewal is not due yet or cert is not initialized
              Version: 1.94.0
              Successfully start.
            </span>
            <br />
            <br />
            <span className="animate-[code-5_10s_infinite] text-gray-200">
              Editor is now accessible via:
              http://localhost:5678
            </span>
            <br />
            <span className="animate-[code-6_10s_infinite]">
              Press "o" to open in Browser.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
