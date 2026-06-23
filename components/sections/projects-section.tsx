"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { sectionBackgrounds } from "@/styles/sections-backgrounds";

const projects = [
  {
    title: "Sistema de Gerenciamento de Livros",

    problem:
      "Sistema de gerenciamento de biblioteca para controle de livros, locações e usuários, com foco em organização, automação de processos e experiência de uso.",

    architecture:
      "Aplicação full stack com backend em Java + Spring Boot e frontend em Vue.js. Implementa autenticação JWT, controle de permissões e um dashboard operacional com indicadores por período.",

    tags: {
      backend: ["Java 21", "Spring Boot", "Spring Security", "JPA"],
      database: ["PostgreSQL"],
      frontend: ["Vue 3", "Quasar", "Chart.js"],
      infra: ["Docker", "Nginx"],
    },

    github: "https://github.com/Pablo-M-Santos/gerenciamento-livros",

    preview: "https://gerenciamentolivros.netlify.app/#/",
  },
  {
    title: "Sistema de Gerenciamento de Oficina Mecânica",

    problem:
      "Sistema web para gerenciamento de oficina mecânica, com foco no controle de clientes, veículos, serviços, peças e ordens de serviço.",

    architecture:
      "Aplicação frontend desenvolvida em React com TypeScript, utilizando Material UI para interface e JSON Server para simulação de API REST. Organização focada em fluxo operacional e experiência do usuário.",

    tags: {
      backend: ["JSON"],
      database: ["JSON"],
      frontend: ["React", "TypeScript", "Material UI", "Vite"],
      infra: ["Deploy no Netlify"],
    },

    github: "https://github.com/Pablo-M-Santos/oficina-mecanica",

    preview: "https://oficina-mecanic.netlify.app/",
  },
  {
    title: "Sistema de Agendamento de Coleta Reciclável",

    problem:
      "Sistema web para agendamento de coleta de materiais recicláveis, permitindo solicitação pública sem login e uma área administrativa protegida para gestão dos agendamentos.",

    architecture:
      "API backend desenvolvida em Java com Spring Boot, utilizando autenticação JWT e controle de permissões. O sistema separa fluxo público de agendamento e área administrativa com gestão de status, materiais e filtros operacionais.",

    tags: {
      backend: [
        "Java 17",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "JPA/Hibernate",
      ],
      database: ["PostgreSQL"],
      infra: ["Maven"],
      frontend: [],
    },

    github: "https://github.com/Pablo-M-Santos/coleta-reciclaveis",

    preview: null,
  },
  {
    title: "Sistema de Agendamento de Serviços",

    problem:
      "Sistema web de agendamento criado para organizar horários e serviços de forma simples, com foco em uso diário, rapidez e experiência mobile-first.",

    architecture:
      "Aplicação desenvolvida com Nuxt 4 e Vue 3, utilizando Firebase para autenticação e persistência de dados. O sistema foi projetado com foco mobile-first e fluxo otimizado para uso rápido no dia a dia.",

    tags: {
      frontend: ["Nuxt 4", "Vue 3", "TypeScript", "Tailwind CSS", "Nuxt UI"],
      backend: ["Firebase Auth", "Firestore"],
      infra: ["Vercel"],
      tools: ["date-fns"],
      database: [],
    },

    github: "https://github.com/Pablo-M-Santos/agendamento",

    preview: "https://agendamento-servico.vercel.app/",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="projects"
      className={`relative py-24 md:py-32 transition-colors duration-700 ${sectionBackgrounds.projects}`}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            Projetos em Destaque
          </span>

          <h2 className="mt-4 mb-4 text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
            Projetos
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
            Alguns projetos que desenvolvi praticando arquitetura, performance e
            criação de interfaces para web.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-slate-900/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)] md:p-8"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-50 transition-colors group-hover:text-emerald-400">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-fit border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-emerald-400/20 hover:bg-slate-800 hover:text-white"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1.5 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>

                    {project.preview && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-fit border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200"
                        asChild
                      >
                        <a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Preview
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Problem & Architecture */}
                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                      Desafio
                    </span>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                      Solução Técnica
                    </span>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-400/80">
                      Backend
                    </span>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.backend.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300 transition-colors duration-300 hover:border-emerald-400/30 hover:text-emerald-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-400/80">
                      Database
                    </span>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.database.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300 transition-colors duration-300 hover:border-blue-400/30 hover:text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-400/80">
                      Frontend
                    </span>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.frontend.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300 transition-colors duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-amber-400/80">
                      Infra
                    </span>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.infra.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300 transition-colors duration-300 hover:border-amber-400/30 hover:text-amber-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#020617] pointer-events-none" />
    </section>
  );
}
