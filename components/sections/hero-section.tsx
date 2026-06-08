"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { socialLinks } from "@/data/portfolio-data";

const iconMap = {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
};

const metrics = [
  { label: "REST APIs", value: "Spring Boot" },
  { label: "Backend", value: "Java 11/17" },
  { label: "Database", value: "PostgreSQL" },
  { label: "DevOps", value: "Docker" },
  { label: "Frontend", value: "Vue.js / Nuxt" },
  { label: "Mobile", value: "Flutter" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-balance"
          >
            <span className="text-slate-50">
              Full-Stack Developer focado em
            </span>
            <br />
            <span className="text-emerald-400">backend escalavel</span>
            <span className="text-slate-50"> e </span>
            <span className="text-emerald-400">frontend moderno</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Construo aplicacoes full-stack com Java, Spring Boot e Vue.js. Foco
            em APIs RESTful, arquitetura limpa e experiencias de usuario
            performaticas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium px-8 h-12"
              asChild
            >
              <a href="#contact">
                Entrar em contato
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-slate-50 hover:border-slate-700 px-8 h-12"
              asChild
            >
              <a href="#projects">Ver Projetos</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label={social.name}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-800/50"
              >
                <div className="text-xs text-slate-500 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm font-medium text-slate-300">
                  {metric.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
