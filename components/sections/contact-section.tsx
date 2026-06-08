"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4 text-balance">
            Vamos construir algo juntos?
          </h2>

          <p className="text-slate-400 text-lg mb-10">
            Estou disponivel para novos projetos e oportunidades.
            Entre em contato para conversarmos sobre como posso ajudar.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium px-8 h-12"
              asChild
            >
              <a href="mailto:pablooliveiraweb@gmail.com">
                Enviar email
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/pablooliveiraweb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/pablosantosofc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:pablooliveiraweb@gmail.com"
              className="p-3 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
