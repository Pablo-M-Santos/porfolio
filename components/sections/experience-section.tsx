"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Desenvolvedor Front-end Jr",
    company: "SESATECH",
    period: "2026 - Atualmente",
    description:
      "Atuação no desenvolvimento e evolução de aplicações web utilizando Vue.js e Nuxt.js, com foco na construção de interfaces escaláveis, arquitetura frontend, otimização de performance e experiência do usuário em sistemas com grande volume de dados.",

    achievements: [
      "Desenvolvimento de funcionalidades utilizando Vue.js, Nuxt.js e TypeScript, seguindo boas práticas de componentização, reutilização de código e organização da arquitetura frontend.",
      "Gerenciamento global de estado com Pinia, implementação de validações e controle eficiente do fluxo de dados da aplicação.",
      "Otimização do carregamento de dados por meio de estratégias de cache, redução de requisições e melhoria da performance em aplicações com grande volume de informações.",
      "Construção de interfaces modernas, responsivas e orientadas à experiência do usuário, colaborando na definição de fluxos e na evolução contínua da aplicação.",
      "Integração com APIs REST e utilização do Azure DevOps para versionamento, gerenciamento de tarefas e colaboração em ambiente ágil (Scrum).",
    ],

    technologies: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Pinia",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "Azure DevOps",
      "Scrum",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack Jr",
    company: "WDA Tecnologia & Inovação",
    period: "2024 - 2026 (1 ano e 3 meses)",
    description:
      "Promoção para Desenvolvedor Full-Stack Jr, assumindo maior responsabilidade no desenvolvimento de aplicações web e mobile. Atuação no backend com Java e Spring Boot, frontend com Vue.js e Quasar, além do desenvolvimento mobile utilizando Flutter, participando da evolução contínua de produtos em ambiente ágil.",

    achievements: [
      "Desenvolvimento e manutenção de APIs REST utilizando Java 11, Java 17 e Spring Boot, integradas ao PostgreSQL, aplicando boas práticas de arquitetura, migrations e versionamento de banco de dados.",
      "Desenvolvimento de aplicações mobile Android utilizando Flutter e Dart, implementando novas telas, integrações com APIs e manutenção contínua do aplicativo.",
      "Construção e evolução de interfaces web utilizando Vue.js, TypeScript e Quasar Framework, priorizando componentização, responsividade e experiência do usuário.",
      "Implementação de testes unitários e testes de integração, contribuindo para a qualidade, estabilidade e confiabilidade das aplicações.",
      "Documentação técnica de APIs utilizando Swagger/OpenAPI, utilização de Postman para validações e Git/GitLab para controle de versão, code review e colaboração entre equipes.",
      "Participação ativa em cerimônias Scrum, colaborando no planejamento, refinamento e entrega contínua de funcionalidades.",
    ],

    technologies: [
      "Java 11",
      "Java 17",
      "Spring Boot",
      "Flutter",
      "Dart",
      "Vue.js",
      "TypeScript",
      "Quasar",
      "PostgreSQL",
      "REST APIs",

      "Git",
      "GitLab",

      "Swagger",
      "Docker",
    ],
  },
  {
    role: "Estagiário Full-Stack",
    company: "WDA Tecnologia & Inovação",
    period: "2024 (6 meses)",
    description:
      "Atuação em projetos full-stack utilizando Java e Vue.js, participando do desenvolvimento, manutenção e evolução de aplicações web em ambiente ágil, contribuindo tanto no backend quanto no frontend.",

    achievements: [
      "Desenvolvimento e manutenção de APIs REST utilizando Java 11, Java 17 e Spring Boot, aplicando boas práticas de arquitetura, migrations e integração com PostgreSQL.",
      "Implementação de testes unitários e testes de integração para garantir a qualidade, estabilidade e confiabilidade das aplicações.",
      "Desenvolvimento de interfaces modernas utilizando Vue.js, TypeScript e Quasar Framework, seguindo padrões de componentização, reutilização de código e responsividade.",
      "Documentação de APIs com Swagger e utilização de Git/GitLab para versionamento, revisão de código e colaboração em equipe.",
      "Participação ativa em cerimônias Scrum, colaborando na definição de tarefas, planejamento de sprints e entregas contínuas.",
    ],

    technologies: [
      "Java 11",
      "Java 17",
      "Spring Boot",
      "Vue.js",
      "TypeScript",
      "Quasar",
      "PostgreSQL",
      "REST APIs",
      "Flyway",
      "Git",
      "GitLab",
      "Docker",
      "Swagger",
      "JUnit",
      "Integration Tests",
      "Scrum",
    ],
  },
  {
    role: "Ensino Médio Integrado ao Técnico em Informática",
    company: "EEEP Profª Luiza de Teodoro Vieira",
    period: "2022 - 2024 (3 anos)",
    description:
      "Formação técnica com foco em desenvolvimento de software, participando de projetos práticos que simularam ambientes reais de desenvolvimento, utilizando boas práticas de programação, versionamento e metodologias ágeis.",

    achievements: [
      "Desenvolvimento de aplicações web utilizando HTML5, CSS3, JavaScript e Vue.js, com foco em responsividade, componentização e boas práticas de UX/UI.",
      "Implementação de aplicações backend com PHP (Laravel) e Java (Spring Boot), integrando APIs REST, bancos de dados relacionais (MySQL e PostgreSQL) e migrations.",
      "Utilização de Git e GitHub para controle de versão, trabalhando com branches, commits e pull requests durante o desenvolvimento dos projetos.",
      "Criação de documentação técnica, testes de APIs com Postman e utilização do Swagger para documentação de serviços.",
      "Vivência com metodologias ágeis, trabalho em equipe, organização de tarefas e cumprimento de prazos em projetos colaborativos.",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vue.js",
      "Java",
      "Spring Boot",
      "PHP",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
    ],
  },
];
export function ExperienceSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mt-4 mb-4 tracking-tight">
            Experiência Profissional
          </h2>
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

                      <span className="leading-relaxed">{achievement}</span>
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
  );
}
