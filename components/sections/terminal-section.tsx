"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type TerminalItem =
  | { type: "command"; command: string; output: string | string[] }
  | { type: "system"; text: string };

const terminalItems: TerminalItem[] = [
  {
    type: "system",
    text: "Inicializando ambiente de desenvolvimento...",
  },
  {
    type: "command",
    command: "whoami",
    output: "Pablo Moreira Santos  •  Full-Stack Júnior  •  Fortaleza, CE",
  },
  {
    type: "command",
    command: "cat experiencia.json",
    output: [
      "SesaTech        →  2026 – atual   (Full-Stack Júnior)",
      "WDA Tecnologia  →  2024 – 2026 ( 1 ano e 8 meses )   (Full-Stack Júnior)",
      "EEEP Luiza      →  2022 – 2024 ( 3 anos )  (Desenvolvedor)",
    ],
  },
  {
    type: "command",
    command: "cat stack.json",
    output: [
      "backend:   Java  •  Spring Boot  •  REST APIs  •  Docker",
      "frontend:  Vue.js  •  React.js  •  TypeScript  •  Nuxt.js",
      "dados:     PostgreSQL  •  MySQL  •  Oracle  •  SQL",
      "infra:     AWS  •  CI/CD  •  Kafka  •  RabbitMQ  (estudos)",
    ],
  },
  {
    type: "command",
    command: "git log --oneline -3",
    output: [
      "a3f91c2  perf: otimização SQL → -40% tempo de resposta",
      "b17e084  feat: lazy loading + cache local no front-end",
      "c09d3a1  docs: documentação técnica com Swagger/OpenAPI",
    ],
  },
  {
    type: "command",
    command: "cat aprendendo.txt",
    output: "Aprofundando em arquitetura de mensageria e cloud (AWS) ☁️",
  },
  {
    type: "system",
    text: "Ambiente pronto. Bora construir.",
  },
];

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time}</span>;
}

function OutputLines({ output }: { output: string | string[] }) {
  const lines = Array.isArray(output) ? output : [output];
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="pl-6 space-y-0.5"
    >
      {lines.map((line, i) => (
        <div
          key={i}
          className="leading-relaxed text-slate-500 font-mono text-sm"
        >
          {line}
        </div>
      ))}
    </motion.div>
  );
}

export function TerminalSection() {
  const ref = useRef(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [completedLines, setCompletedLines] = useState<number[]>([]);
  const [idle, setIdle] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const reset = useCallback(() => {
    setCurrentLine(0);
    setDisplayedText("");
    setShowOutput(false);
    setCompletedLines([]);
    setIdle(false);
    setReplayKey((k) => k + 1);
  }, []);

  // Scroll interno do terminal — não afeta a página
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [completedLines, showOutput]);

  useEffect(() => {
    if (!isInView) return;

    const currentItem = terminalItems[currentLine];
    if (!currentItem) return;

    const fullText =
      currentItem.type === "command" ? currentItem.command : currentItem.text;

    let charIndex = 0;

    const baseDelay = currentItem.type === "system" ? 15 : 32;

    const typeInterval = setInterval(
      () => {
        if (charIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);

          setTimeout(() => {
            setShowOutput(true);

            const outputPause =
              currentItem.type === "command"
                ? Array.isArray(currentItem.output)
                  ? 1600
                  : 1200
                : 600;

            setTimeout(() => {
              setCompletedLines((prev) => [...prev, currentLine]);
              setShowOutput(false);
              setDisplayedText("");

              if (currentLine < terminalItems.length - 1) {
                setCurrentLine((prev) => prev + 1);
              } else {
                setIdle(true);
                // Auto-restart after 5s
                setTimeout(() => reset(), 10000);
              }
            }, outputPause);
          }, 150);
        }
      },
      baseDelay + Math.random() * (currentItem.type === "system" ? 8 : 18),
    );

    return () => clearInterval(typeInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLine, isInView, replayKey]);

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
              Uma visão rápida sobre trajetória, stack técnica e foco atual em
              engenharia de software.
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

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/70 px-5 py-4">
              <div className="flex items-center gap-4">
                {/* Mac dots */}
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/90" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/90" />
                  <div className="h-3 w-3 rounded-full bg-green-500/90" />
                </div>
                <span className="text-sm font-mono font-medium text-slate-400">
                  pablo@dev-console ~ zsh
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Live clock */}
                <span className="hidden font-mono text-xs text-slate-500 sm:block">
                  <LiveClock />
                </span>
              </div>
            </div>

            {/* Body */}
            <div
              ref={bodyRef}
              className="min-h-[520px] max-h-[560px] overflow-y-auto space-y-4 p-6 font-mono text-sm md:p-8 scrollbar-none"
            >
              <AnimatePresence>
                {/* Completed lines */}
                {completedLines.map((lineIndex) => {
                  const item = terminalItems[lineIndex];

                  if (item.type === "command") {
                    return (
                      <motion.div
                        key={`done-${replayKey}-${lineIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-1.5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="select-none text-emerald-400">
                            ❯
                          </span>
                          <span className="text-slate-200">{item.command}</span>
                        </div>
                        <OutputLines output={item.output} />
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={`done-${replayKey}-${lineIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="leading-relaxed text-slate-600 italic"
                    >
                      # {item.text}
                    </motion.div>
                  );
                })}

                {/* Current line being typed */}
                {!idle && currentLine < terminalItems.length && (
                  <motion.div
                    key={`current-${replayKey}-${currentLine}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-1.5"
                  >
                    {terminalItems[currentLine].type === "command" ? (
                      <>
                        <div className="flex items-center gap-3">
                          <span className="select-none text-emerald-400">
                            ❯
                          </span>
                          <span className="text-slate-200">
                            {displayedText}
                          </span>
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{
                              duration: 0.55,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            className="h-[1.1em] w-[0.55ch] rounded-[2px] bg-emerald-400"
                          />
                        </div>
                        {showOutput && (
                          <OutputLines
                            output={
                              (
                                terminalItems[currentLine] as Extract<
                                  TerminalItem,
                                  { type: "command" }
                                >
                              ).output
                            }
                          />
                        )}
                      </>
                    ) : (
                      <div className="leading-relaxed text-slate-600 italic">
                        # {displayedText}
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.55,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="ml-0.5 inline-block h-[0.9em] w-[0.45ch] bg-slate-500"
                        />
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Idle cursor */}
                {idle && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="select-none text-emerald-400">❯</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.55,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="h-[1.1em] w-[0.55ch] rounded-[2px] bg-emerald-400"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
