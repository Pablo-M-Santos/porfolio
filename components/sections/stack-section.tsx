"use client";

import { sectionBackgrounds } from "@/styles/sections-backgrounds";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const backendStack = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "JPA/Hibernate",
  "JUnit",
  "Mockito",
  "Flyway",
  "Swagger/OpenAPI",
  "REST APIs",
  "PostgreSQL",
  "Oracle",
  "MySQL",
  "Maven",
  "Docker",
];

const frontendStack = [
  "Vue.js",
  "Nuxt.js",
  "TypeScript",
  "JavaScript",
  "Pinia",
  "Vue Router",
  "Quasar",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

const mobileStack = ["Flutter", "Dart"];

const toolsStack = [
  "Git",
  "GitHub",
  "GitLab",
  "Azure DevOps",
  "Postman",
  "IntelliJ IDEA",
  "VS Code",
  "Linux",
  "Figma",
  "Scrum",
  "Kanban",
];

export function StackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="stack"
      className={`relative py-24 md:py-32 transition-colors duration-700 ${sectionBackgrounds.stack}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-50 mb-4">Tech Stack</h2>
          <p className="text-slate-400 max-w-xl text-lg">
            Tecnologias com as quais tenho experiencia profissional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-slate-400">
                Backend
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-md bg-slate-900/50 text-slate-300 border border-slate-800/50 hover:border-slate-700/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-sm font-medium text-slate-400">
                Frontend
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-md bg-slate-900/50 text-slate-300 border border-slate-800/50 hover:border-slate-700/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-sm font-medium text-slate-400">Mobile</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {mobileStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-md bg-slate-900/50 text-slate-300 border border-slate-800/50 hover:border-slate-700/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-sm font-medium text-slate-400">
                Tools & Metodologias
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {toolsStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-md bg-slate-900/50 text-slate-300 border border-slate-800/50 hover:border-slate-700/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#020617] pointer-events-none" />
    </section>
  );
}
