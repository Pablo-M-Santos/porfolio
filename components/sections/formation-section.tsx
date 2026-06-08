"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { certificates } from '@/data/portfolio-data'
import { Button } from '@/components/ui/button'

export function FormationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  return (
    <section id="formacao" className="py-20 md:py-32 relative overflow-hidden">
      {/* Floating tech icons decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {['☕', 'A', 'N', 'TS'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 rounded-lg glass flex items-center justify-center text-sm opacity-40"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-neon">Formação</span>
            </h2>
            <div className="w-20 h-1 bg-neon mx-auto rounded-full" />
          </motion.div>

          {/* Certificates Carousel */}
          <motion.div variants={itemVariants} className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 glass hover:bg-neon/20 text-foreground"
              onClick={prevSlide}
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 glass hover:bg-neon/20 text-foreground"
              onClick={nextSlide}
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </Button>

            {/* Cards Container */}
            <div className="grid md:grid-cols-3 gap-6 px-4 md:px-0">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentIndex ? 'ring-2 ring-neon/50 glow-neon-sm' : ''
                  }`}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Certificate Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-card to-secondary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-neon/20 flex items-center justify-center">
                          <span className="text-2xl">🎓</span>
                        </div>
                        <p className="text-sm font-medium text-neon">{cert.institution}</p>
                        <p className="text-xs text-muted-foreground mt-1">Certificado</p>
                      </div>
                    </div>
                    {/* Top decoration */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon/50 via-neon to-neon/50" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
