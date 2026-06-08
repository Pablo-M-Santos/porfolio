"use client"

import { motion } from 'framer-motion'

const icons = [
  { name: 'Vue', color: '#42b883', path: 'M2 3l8 14 8-14h-6l-2 4-2-4H2zm4 0l6 10.5L18 3' },
  { name: 'React', color: '#61dafb', isReact: true },
  { name: 'TypeScript', color: '#3178c6', text: 'TS' },
  { name: 'Java', color: '#f89820', text: '☕' },
  { name: 'Docker', color: '#2496ed', isDocker: true },
  { name: 'Angular', color: '#dd0031', text: 'A' },
  { name: 'Node', color: '#68a063', text: 'N' },
  { name: 'Git', color: '#f05032', text: 'G' },
]

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, index) => {
        const randomX = 10 + (index * 12) % 80
        const randomY = 15 + (index * 17) % 70
        const delay = index * 0.3
        const duration = 15 + (index % 5) * 2

        return (
          <motion.div
            key={icon.name}
            className="absolute w-10 h-10 md:w-12 md:h-12 rounded-lg glass flex items-center justify-center text-xl font-bold opacity-60"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              color: icon.color,
              borderColor: `${icon.color}40`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: 1,
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          >
            {icon.isReact ? (
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <circle cx="12" cy="12" r="2.5" />
                <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
                <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
              </svg>
            ) : icon.isDocker ? (
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M13 3v2h2V3h-2zm4 0v2h2V3h-2zm-8 2v2h2V5H9zm4 0v2h2V5h-2zm4 0v2h2V5h-2zm-8 2v2h2V7H9zm4 0v2h2V7h-2zm-8 2v2h2V9H5zm4 0v2h2V9H9zm4 0v2h2V9h-2zm4 0v2h2V9h-2zm4.5 1c-.5 0-1.5.2-2 .5-.3-1.5-1.5-2.2-3-2.5l-.5 1c1 .3 2 1 2 2v.5H3c-.3 1.5-.3 3 0 4 .5 2 2 3.5 4 4 2.5.5 5.5.5 8.5 0 2-.5 4-2 5-4 1-1 1-2.5 1-4h1c.5 0 1-.5 1-1s-.5-1-1.5-1z" />
              </svg>
            ) : (
              <span className="text-sm font-mono">{icon.text}</span>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
