"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Terminal, Layers, RefreshCw } from 'lucide-react'
import { skills } from '@/data/portfolio-data'

const iconMap = {
  Code2: Code2,
  Database: Database,
  Terminal: Terminal,
  Layers: Layers,
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const skillCategories = Object.entries(skills)

  return (
    <section id="habilidades" className="py-20 md:py-32 relative overflow-hidden">
      {/* Refresh icon decoration */}
      <motion.div
        className="absolute top-20 right-10 text-neon/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <RefreshCw size={80} />
      </motion.div>

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
              <span className="text-neon">Habilidades</span>
            </h2>
            <div className="w-20 h-1 bg-neon mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map(([key, category]) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Code2

              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 group hover:border-neon/50 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 rounded-xl border border-neon/30" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 relative">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center text-neon">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {category.items.length} items
                    </span>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-2 relative">
                    {category.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neon/60" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          {/* Patterns Card - Full Width */}
          <motion.div
            variants={itemVariants}
            className="mt-6 max-w-5xl mx-auto"
          >
            <div className="glass rounded-xl p-6 group hover:border-neon/50 transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center text-neon">
                    <Layers size={20} />
                  </div>
                  <h3 className="font-semibold text-lg">{skills.patterns.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {skills.patterns.items.length} items
                </span>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {skills.patterns.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon/60" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
