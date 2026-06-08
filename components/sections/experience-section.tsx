"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    role: "Frontend Developer Jr",
    company: "SESATECH",
    period: "2025 - Presente",
    description:
      "Atuacao no desenvolvimento de aplicacoes web escalaveis utilizando Vue.js e Nuxt, com foco em performance, gerenciamento eficiente de estado e experiencia do usuario em sistemas com grande volume de dados.",

    achievements: [
      "Otimizacao de carregamento de dados com estrategias de cache e controle de requisicoes",
      "Desenvolvimento de interfaces responsivas e componentizadas com foco em UX",
      "Gerenciamento de estado complexo utilizando Pinia",
      "Integracao de APIs RESTful em aplicacoes de alta complexidade",
      "Colaboracao com times de backend e design em ambiente agil",
    ],

    technologies: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Pinia",
      "TailwindCSS",
      "REST APIs",
    ],
  },

  {
    role: "Full-Stack Developer Jr",
    company: "WDA Tecnologia & Inovacao",
    period: "2024 - 2025",
    description:
      "Desenvolvimento full-stack de aplicacoes web e mobile, atuando na construcao de APIs, interfaces responsivas e manutencao de sistemas utilizando Java, Spring Boot, Vue.js e Flutter.",

    achievements: [
      "Desenvolvimento e manutencao de APIs RESTful com Spring Boot",
      "Criacao de interfaces modernas utilizando Vue.js e Quasar",
      "Desenvolvimento mobile com Flutter/Dart",
      "Implementacao de testes unitarios e de integracao",
      "Documentacao tecnica de APIs com Swagger/OpenAPI",
      "Participacao ativa em cerimonias Scrum e entregas continuas",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Vue.js",
      "Quasar",
      "Flutter",
      "PostgreSQL",
      "Docker",
      "GitLab",
      "Swagger",
    ],
  },

  {
    role: "Full-Stack Developer Intern",
    company: "WDA Tecnologia & Inovacao",
    period: "2024",
    description:
      "Inicio da trajetoria profissional atuando no desenvolvimento e manutencao de aplicacoes web, contribuindo com backend, frontend, testes e documentacao tecnica.",

    achievements: [
      "Implementacao de APIs e funcionalidades backend com Spring Boot",
      "Desenvolvimento de interfaces responsivas utilizando Vue.js",
      "Criacao de testes unitarios e integracao",
      "Documentacao de APIs utilizando Swagger",
      "Utilizacao de Git/GitLab em fluxo colaborativo",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Vue.js",
      "Docker",
      "Swagger",
      "GitLab",
      "REST APIs",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-emerald-400 text-sm uppercase tracking-[0.2em] font-medium">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mt-4 mb-4 tracking-tight">
            Professional Experience
          </h2>

          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Trajetoria construida com foco em engenharia de software,
            desenvolvimento full-stack e criacao de experiencias digitais
            modernas e escalaveis.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
              }}
              className="relative pl-6 border-l-2 border-slate-800"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-emerald-400 -translate-x-[7px] ring-4 ring-slate-950 shadow-[0_0_12px_rgba(74,222,128,0.6)]" />

              <div
                className="
                  pb-2 rounded-2xl border border-slate-800/60
                  bg-slate-900/30 backdrop-blur-sm
                  p-6 md:p-8
                  transition-all duration-300
                  hover:border-emerald-400/20
                  hover:bg-slate-900/50
                  hover:-translate-y-1
                  hover:shadow-[0_0_40px_rgba(16,185,129,0.06)]
                "
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-slate-50 tracking-tight">
                    {exp.role}
                  </h3>

                  <span className="hidden sm:inline text-slate-600">·</span>

                  <span className="text-emerald-400 font-semibold tracking-wide">
                    {exp.company}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">
                  {exp.period}
                </span>

                <p className="mt-5 text-slate-400 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="mt-6 space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="text-emerald-400 mt-1">•</span>

                      <span className="leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1.5 text-xs rounded-lg
                        bg-slate-950/70
                        text-slate-300
                        border border-slate-800
                        transition-colors duration-300
                        hover:border-emerald-400/30
                        hover:text-emerald-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}