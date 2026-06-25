"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { sectionBackgrounds } from "@/styles/sections-backgrounds";

const certificates = [
  {
    title: "Java & Spring Boot AI Developer Bootcamp",
    issuer: "DIO + Globant",
    date: "2026",
    description:
      "Bootcamp completo focado em Java, Spring Boot, APIs REST, Clean Code, SOLID e Design Patterns, com projetos práticos e desafios de código.",
    image: "/certificado-1.jpeg",
    credential:
      "https://www.dio.me/certificate/PUMIIVN3/share?utm_source=engagement&utm_medium=email&utm_campaign=globant_java_spring_boot_ai_developer&utm_term=bootcamp-users&utm_content=graduation-certificate-link",
    technology: [
      "Java",
      "Spring Boot",
      "Design Patterns",
      "Solid",
      "Clean Code",
    ],
    border: "hover:border-red-400/30",
    accent: "text-red-400",
    badge: "bg-red-400/10 text-red-300 border-red-400/20",
  },
  {
    title: "Java & Spring Boot Professional",
    issuer: "Alura + DIO (Almaviva Solutions Bootcamp)",
    date: "2026",
    description:
      "Formação em Java e Spring Boot com foco em APIs REST, testes automatizados (JUnit), QA, segurança com Spring Security e integração com bancos de dados relacionais, incluindo práticas de BDD, Git e boas práticas de desenvolvimento.",
    image: "/certificado-2.jpeg",
    credential:
      "https://www.dio.me/certificate/SBHNZFLZ/share?utm_source=engagement&utm_medium=email&utm_campaign=almaviva-back-end-com-java-qa&utm_term=bootcamp-users&utm_content=graduation-certificate-link",
    technology: ["Java", "Spring Boot", "JUnit", "SQL", "Maven", "Gradle"],
    border: "hover:border-emerald-400/30",
    accent: "text-emerald-400",
    badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  },
  {
    title: "APIs com Spring Boot: do início à produção",
    issuer: "Udemy",
    date: "2024",
    description:
      "Desenvolvimento de APIs REST completas com Spring Boot, aplicando boas práticas de arquitetura, testes automatizados, autenticação com Spring Security, versionamento com Git e deploy em ambiente de nuvem.",
    image: "/certificado-3.jpeg",
    credential:
      "https://www.udemy.com/certificate/UC-018c6742-937f-473d-9628-38e268dee8a3/#",
    technology: [
      "Java",
      "Spring Boot",
      "Testes Unitários",
      "Integração Contínua",
      "Spring Security",
    ],
    border: "hover:border-blue-400/30",
    accent: "text-blue-400",
    badge: "bg-blue-400/10 text-blue-300 border-blue-400/20",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    date: "2024",
    description:
      "Introdução aos fundamentos de análise de dados, incluindo pensamento analítico, ecossistemas de dados, ética, visualização e ferramentas como planilhas e linguagens de consulta. Foco no papel do analista de dados e tomada de decisão orientada a dados.",
    image: "/certificado-4.jpeg",
    credential:
      "https://www.coursera.org/account/accomplishments/verify/LXKEPQEK5MQA",
    technology: [
      "Data Analytics",
      "Data Visualization",
      "Data Ethics",
      "Spreadsheet Software",
      "Analytical Thinking",
    ],
    border: "hover:border-yellow-400/30",
    accent: "text-yellow-400",
    badge: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  },

  {
    title: "Primeiros Passos em Tecnologia",
    issuer: "DIO",
    date: "2024",
    description:
      "Introdução ao universo da tecnologia e desenvolvimento de software, explorando fundamentos do mercado de TI, mentalidade de aprendizado contínuo e principais áreas de atuação em empresas de tecnologia.",
    image: "/certificado-7.png",
    credential: "https://www.dio.me/certificate/JKB3YZXK/share",
    technology: ["HTML", "CSS", "JavaScript"],
    border: "hover:border-violet-400/30",
    accent: "text-violet-400",
    badge: "bg-violet-400/10 text-violet-300 border-violet-400/20",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "2024",
    description:
      "Introdução aos fundamentos de computação em nuvem com AWS, incluindo arquitetura cloud, serviços essenciais da AWS, modelos de precificação, suporte e boas práticas de uso da nuvem.",
    image: "/certificado-8.png",
    credential:
      "https://www.credly.com/badges/cd155660-dfc9-4cb5-9767-9c94dc3d7f32/public_url",
    technology: [
      "AWS Cloud",
      "Cloud Computing",
      "AWS Architecture",
      "AWS Core Services",
      "Cloud Fundamentals",
    ],
    border: "hover:border-orange-400/30",
    accent: "text-orange-400",
    badge: "bg-orange-400/10 text-orange-300 border-orange-400/20",
  },
  {
    title: "Introdução à Programação Orientada a Objetos (POO)",
    issuer: "Fundação Bradesco | Escola Virtual",
    date: "2023",
    description:
      "Introdução aos conceitos de Programação Orientada a Objetos, incluindo os quatro pilares (abstração, encapsulamento, herança e polimorfismo), além da comparação entre programação estruturada e orientada a objetos e exemplos em linguagens como Java, C++ e C#.",
    image: "/certificado-5.jpeg",

    technology: [
      "OOP",
      "Abstração",
      "Encapsulamento",
      "Herança",
      "Polimorfismo",
      "Java",
    ],
    border: "hover:border-purple-400/30",
    accent: "text-purple-400",
    badge: "bg-purple-400/10 text-purple-300 border-purple-400/20",
  },
  {
    title: "Crie um site simples com HTML, CSS e JavaScript",
    issuer: "Fundação Bradesco | Escola Virtual",
    date: "2023",
    description:
      "Introdução ao desenvolvimento web utilizando HTML, CSS e JavaScript, abordando estrutura de páginas, estilização e interatividade, além de conceitos fundamentais para criação de aplicações web no navegador.",
    image: "/certificado-6.jpeg",

    technology: ["HTML", "CSS", "JavaScript"],
    border: "hover:border-orange-400/30",
    accent: "text-orange-400",
    badge: "bg-orange-400/10 text-orange-300 border-orange-400/20",
  },
];

const GAP = 20;

export function CertificatesSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const controls = useAnimation();
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const total = certificates.length;
  const [cols, setCols] = useState(3);

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return;
      const visibleCols =
        window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setCols(visibleCols);
      const containerW = trackRef.current.offsetWidth;
      setCardWidth((containerW - GAP * (visibleCols - 1)) / visibleCols);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = total - cols;

  useEffect(() => {
    if (!cardWidth) return;
    controls.start({
      x: -(current * (cardWidth + GAP)),
      transition: { type: "spring", stiffness: 300, damping: 35, mass: 0.8 },
    });
  }, [current, cardWidth, controls]);

  function prev() {
    setCurrent((c) => Math.max(c - 1, 0));
  }

  function next() {
    setCurrent((c) => Math.min(c + 1, maxIndex));
  }

  return (
    <section
      id="certificates"
      className={`relative py-24 md:py-32 transition-colors duration-700 ${sectionBackgrounds.stack}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mt-4 mb-4 tracking-tight">
            Certificados
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative flex items-center gap-4"
        >
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior"
            className="
              flex-shrink-0 z-10 w-10 h-10 rounded-full
              border border-slate-800
              bg-slate-900/60 backdrop-blur-sm
              text-slate-400 hover:text-emerald-400
              hover:border-emerald-400/30
              transition-all duration-200
              flex items-center justify-center
              hover:shadow-[0_0_16px_rgba(74,222,128,0.12)]
              active:scale-95
              disabled:opacity-25 disabled:cursor-not-allowed
              disabled:hover:text-slate-400 disabled:hover:border-slate-800
              disabled:hover:shadow-none
            "
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex-1 overflow-hidden" ref={trackRef}>
            <motion.div
              animate={controls}
              initial={{ x: 0 }}
              className="flex"
              style={{ gap: GAP }}
            >
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  style={{
                    minWidth: cardWidth || "calc(33.333% - 14px)",
                    maxWidth: cardWidth || "calc(33.333% - 14px)",
                  }}
                  className={`
                    group relative rounded-2xl border border-slate-800/60
                    bg-slate-900/40 backdrop-blur-sm
                    p-6
                    transition-[border-color,box-shadow,transform] duration-300
                    ${cert.border}
          
                    hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]
                    flex flex-col gap-4
                  `}
                >
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 flex items-center justify-center p-1">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector(".fallback-icon")) {
                          const fallback = document.createElement("div");
                          fallback.className =
                            "fallback-icon w-full h-full flex items-center justify-center";
                          fallback.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='text-slate-600'><rect x='3' y='3' width='18' height='18' rx='2'/><path d='M3 9h18M9 21V9'/></svg>`;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.technology.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 text-xs rounded-md border ${cert.badge}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex-1 flex flex-col gap-1.5">
                    <h3 className="text-slate-50 font-semibold text-base leading-snug tracking-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${cert.accent}`}>
                        {cert.issuer}
                      </span>
                      <span className="text-slate-700">·</span>
                      <span className="text-xs text-slate-500 uppercase tracking-[0.15em]">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mt-1">
                      {cert.description}
                    </p>
                  </div>

                  {cert.credential && (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-medium ${cert.accent} opacity-70 hover:opacity-100 transition-opacity duration-200 self-start`}
                    >
                      Ver credencial
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Próximo"
            className="
              flex-shrink-0 z-10 w-10 h-10 rounded-full
              border border-slate-800
              bg-slate-900/60 backdrop-blur-sm
              text-slate-400 hover:text-emerald-400
              hover:border-emerald-400/30
              transition-all duration-200
              flex items-center justify-center
              hover:shadow-[0_0_16px_rgba(74,222,128,0.12)]
              active:scale-95
              disabled:opacity-25 disabled:cursor-not-allowed
              disabled:hover:text-slate-400 disabled:hover:border-slate-800
              disabled:hover:shadow-none
            "
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-2 mt-8"
        >
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para certificado ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-emerald-400"
                  : "w-1.5 bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
