"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Desenvolvedor Front-end Jr",
    company: "SESATECH",
    period: "2026 - Presente (5 meses)",
    description:
      "Atuação no desenvolvimento e evolução de aplicações web escaláveis utilizando Vue.js e Nuxt.js. Foco em performance, arquitetura de componentes reutilizáveis e gerenciamento eficiente de dados em sistemas de alta complexidade com grande volume de requisições.",
    achievements: [
      "Otimização do carregamento de dados através de estratégias avançadas de cache e controle de requisições.",
      "Construção de interfaces modernas, responsivas e orientadas à experiência do usuário (UX/UI).",
      "Gerenciamento de estado complexo e fluxos de dados globais utilizando Pinia.",
      "Integração contínua com APIs RESTful e colaboração direta com times multidisciplinares em ambiente ágil (Scrum).",
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
    role: "Desenvolvedor Full-Stack Jr",
    company: "WDA Tecnologia & Inovação",
    period: "2024 - 2026 (1 ano e 3 meses)",
    description:
      "Desenvolvimento full-stack de soluções web e mobile, assumindo responsabilidades na construção de APIs robustas, interfaces responsivas e manutenção de sistemas legados e novos produtos.",
    achievements: [
      "Desenvolvimento mobile focado na criação de telas e integração com backend utilizando Flutter e Dart.",
      "Construção e manutenção de APIs RESTful utilizando Java e Spring Boot, garantindo a segurança e estabilidade dos serviços.",
      "Implementação de testes unitários e de integração para assegurar a qualidade do código e cobertura da aplicação.",
      "Desenvolvimento de interfaces de usuário (UI) dinâmicas e intuitivas utilizando Vue.js e Quasar Framework.",
      "Elaboração de documentações técnicas de APIs com Swagger/OpenAPI e prototipação de novas funcionalidades.",
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
    role: "Estagiário Full-Stack",
    company: "WDA Tecnologia & Inovação",
    period: "2024 (6 meses)",
    description:
      "Início da trajetória profissional atuando no ecossistema de desenvolvimento web, contribuindo ativamente tanto no backend quanto no frontend através de metodologias ágeis.",
    achievements: [
      "Implementação de novas funcionalidades e endpoints em APIs Spring Boot.",
      "Criação de componentes frontend responsivos e fluidos com Vue.js.",
      "Garantia de qualidade de software através da escrita de testes unitários e validações de rotas.",
      "Documentação de processos e APIs utilizando Swagger e versionamento de código estruturado via GitLab.",
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
  {
    role: "Técnico em Informática",
    company: "EEEP Profª Luiza de Teodoro Vieira",
    period: "2022 - 2024 (3 anos)",
    description:
      "Formação técnica com forte base prática em desenvolvimento de software, simulando ambientes reais de produção, entrega de projetos e controle de qualidade.",
    achievements: [
      "Desenvolvimento de aplicações web completas aplicando conceitos de HTML5, CSS3, JavaScript e Vue.js.",
      "Modelagem de bancos de dados relacionais (MySQL/PostgreSQL) e criação de backends estruturados com PHP (Laravel) e Java (Spring Boot).",
      "Domínio de versionamento de código com Git/GitHub, trabalhando com fluxos de branchs, commits e pull requests.",
      "Vivência com metodologias ágeis, organização de fluxos de trabalho e cumprimento de prazos em projetos de equipe.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PHP",
      "Laravel",
      "JavaScript",
      "Vue.js",
      "MySQL",
      "PostgreSQL",
      "Git",
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
