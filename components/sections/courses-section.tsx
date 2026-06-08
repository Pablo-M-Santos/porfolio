"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, GitFork, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { courses } from '@/data/portfolio-data'
import { Button } from '@/components/ui/button'

export function CoursesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const totalPages = Math.ceil(courses.length / itemsPerPage)
  const visibleCourses = courses.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section id="cursos" className="py-20 md:py-32 relative overflow-hidden">
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
              <span className="text-neon">Cursos</span>
            </h2>
            <div className="w-20 h-1 bg-neon mx-auto rounded-full" />
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              size="icon"
              className="glass hover:bg-neon/20 text-foreground"
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              aria-label="Página anterior"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentPage ? 'bg-neon w-6' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentPage(i)}
                  aria-label={`Página ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="glass hover:bg-neon/20 text-foreground"
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              aria-label="Próxima página"
            >
              <ChevronRight size={20} />
            </Button>
          </motion.div>

          {/* Course Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {visibleCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="glass rounded-xl p-6 group hover:border-neon/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Course Name */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-mono text-neon font-medium text-sm">
                    {course.name}
                  </h3>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-neon transition-colors"
                    whileHover={{ scale: 1.1 }}
                    aria-label="Ver mais"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500" />
                    <span>{course.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    <span>{course.forks}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Page Indicators */}
          <motion.div variants={itemVariants} className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages * 3 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  Math.floor(i / 3) === currentPage ? 'bg-neon' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
