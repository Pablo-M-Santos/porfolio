import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Pablo Santos | Full-Stack Developer',
  description: 'Full-Stack Developer specialized in Java + Spring Boot backend and modern frontend applications with Vue.js and React. Building scalable, production-ready applications.',
  keywords: ['Full-Stack Developer', 'Java', 'Spring Boot', 'Vue.js', 'React', 'TypeScript', 'Backend Developer', 'Software Engineer'],
  authors: [{ name: 'Pablo Santos' }],
  openGraph: {
    title: 'Pablo Santos | Full-Stack Developer',
    description: 'Full-Stack Developer specialized in Java + Spring Boot backend and modern frontend applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-[#020617]">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#020617] text-slate-50`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
