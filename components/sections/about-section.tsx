"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    title: "Problema antes do código",
    description:
      "Entendimento da necessidade do negócio antes da implementação técnica.",
  },

  {
    title: "Arquitetura limpa",
    description:
      "Separação de responsabilidades com foco em código escalável e sustentável.",
  },

  {
    title: "APIs estruturadas",
    description: "Desenvolvimento de APIs RESTful documentadas e organizadas.",
  },

  {
    title: "Performance",
    description:
      "Otimização de carregamento, cache e gerenciamento eficiente de dados.",
  },

  {
    title: "Colaboração ágil",
    description: "Experiência com Scrum, code review e trabalho colaborativo.",
  },

  {
    title: "Escalabilidade",
    description:
      "Aplicações preparadas para evolução contínua e crescimento sustentável.",
  },
];

const stats = [
  {
    value: "+2 anos",
    label: "Experiência prática",
  },

  {
    value: "Java + Vue",
    label: "Stack principal",
  },

  {
    value: "Scrum",
    label: "Metodologias ágeis",
  },
];

export function AboutSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Section Label */}
            <span className="text-emerald-400 text-3xl font-bold mb-4">
              Sobre mim
            </span>

            {/* Description */}
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400 text-left md:text-justify">
              <p>
                Sou desenvolvedor Full-Stack com experiência prática na
                construção de aplicações web modernas utilizando Java e Spring
                Boot no backend, além de Vue.js, Nuxt.js e TypeScript no
                frontend.
              </p>

              <p>
                Meu foco está em compreender o problema antes da implementação.
                Acredito que arquitetura limpa, organização de código e boas
                práticas são fundamentais para aplicações escaláveis,
                performáticas e de fácil manutenção.
              </p>

              <p>
                Tenho experiência com aplicações de grande volume de dados,
                otimização de performance, integração de APIs RESTful e
                desenvolvimento orientado a entregas contínuas em ambientes
                ágeis.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800/60 bg-slate-900/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/10 hover:bg-slate-900/50"
                >
                  <div className="text-xl font-bold tracking-tight text-emerald-400">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-sm leading-relaxed text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.35 + index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-slate-900/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-2 text-base font-semibold text-slate-100 transition-colors duration-300 group-hover:text-emerald-300">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
