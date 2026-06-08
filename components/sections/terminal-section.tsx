"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type TerminalItem =
  | {
      type: "command";
      command: string;
      output: string;
    }
  | {
      type: "system";
      text: string;
    };

const terminalItems: TerminalItem[] = [
  {
    type: "system",
    text: "Inicializando ambiente de desenvolvimento...",
  },

  {
    type: "command",
    command: "whoami",
    output: "Pablo Oliveira • Desenvolvedor Full-Stack",
  },

  {
    type: "command",
    command: "cat stack.json",
    output: "Java • Spring Boot • Vue.js • Nuxt.js • TypeScript • Flutter",
  },

  {
    type: "command",
    command: "ls projetos/",
    output:
      "capex-platform • dashboard-analytics • mobile-app • internal-system",
  },

  {
    type: "command",
    command: "git status",
    output: "Sempre aprendendo e construindo soluções escaláveis.",
  },

  {
    type: "system",
    text: "Ambiente pronto.",
  },
];

export function TerminalSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [completedLines, setCompletedLines] = useState<number[]>([]);

  useEffect(() => {
    if (!isInView) return;

    const currentItem = terminalItems[currentLine];

    if (!currentItem) return;

    let fullText = "";

    if (currentItem.type === "command") {
      fullText = currentItem.command;
    } else {
      fullText = currentItem.text;
    }

    let charIndex = 0;

    const typeInterval = setInterval(
      () => {
        if (charIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);

          setTimeout(() => {
            setShowOutput(true);

            setTimeout(
              () => {
                setCompletedLines((prev) => [...prev, currentLine]);

                setShowOutput(false);
                setDisplayedText("");

                if (currentLine < terminalItems.length - 1) {
                  setCurrentLine((prev) => prev + 1);
                }
              },
              currentItem.type === "command" ? 1400 : 700,
            );
          }, 150);
        }
      },
      currentItem.type === "system" ? 18 : 35,
    );

    return () => clearInterval(typeInterval);
  }, [currentLine, isInView]);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
              Engineering Console
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ambiente de Desenvolvimento
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              Uma visão rápida sobre mentalidade técnica, arquitetura e foco
              atual em engenharia de software.
            </p>
          </div>

          {/* Terminal */}
          <div
            className="
              relative overflow-hidden rounded-3xl
              border border-slate-800/70
              bg-slate-950/90
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
            "
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-transparent" />

            {/* Noise */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

            {/* Header */}
            <div
              className="
                flex items-center justify-between
                border-b border-slate-800
                bg-slate-900/70
                px-5 py-4
              "
            >
              <div className="flex items-center gap-4">
                {/* Mac dots */}
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/90" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/90" />
                  <div className="h-3 w-3 rounded-full bg-green-500/90" />
                </div>

                <span className="text-sm font-medium text-slate-400">
                  pablo@engineering-console
                </span>
              </div>

              <div className="hidden items-center gap-2 font-mono text-xs text-slate-500 sm:flex">
                <span>bash</span>
                <span>•</span>
                <span>developer-mode</span>
              </div>
            </div>

            {/* Body */}
            <div className="min-h-[480px] space-y-5 p-6 font-mono text-sm md:p-8">
              {/* Completed */}
              {completedLines.map((lineIndex) => {
                const item = terminalItems[lineIndex];

                if (item.type === "command") {
                  return (
                    <div key={lineIndex} className="space-y-2">
                      {/* Command */}
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-400">$</span>

                        <span className="text-slate-200">{item.command}</span>
                      </div>

                      {/* Output */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pl-6 leading-relaxed text-slate-500"
                      >
                        {item.output}
                      </motion.div>
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="leading-relaxed text-slate-500"
                  >
                    {item.text}
                  </motion.div>
                );
              })}

              {/* Current line */}
              {currentLine < terminalItems.length &&
                !completedLines.includes(currentLine) && (
                  <div className="space-y-2">
                    {terminalItems[currentLine].type === "command" ? (
                      <>
                        <div className="flex items-center gap-3">
                          <span className="text-emerald-400">$</span>

                          <span className="text-slate-200">
                            {displayedText}
                          </span>

                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            className="h-5 w-2.5 rounded-sm bg-emerald-400"
                          />
                        </div>

                        {showOutput && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="pl-6 leading-relaxed text-slate-500"
                          >
                            {terminalItems[currentLine].output}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <div className="leading-relaxed text-slate-500">
                        {displayedText}

                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="ml-1 inline-block h-4 w-2 bg-emerald-400"
                        />
                      </div>
                    )}
                  </div>
                )}

              {/* Idle cursor */}
              {completedLines.length === terminalItems.length && (
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">$</span>

                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="h-5 w-2.5 rounded-sm bg-emerald-400"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
