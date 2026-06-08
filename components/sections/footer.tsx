import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="text-slate-50 font-medium">pablo</span>
            <span className="text-emerald-400 font-medium">santos</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/pablooliveiraweb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/pablosantosofc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:pablooliveiraweb@gmail.com"
              className="p-2 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Pablo Santos
          </p>
        </div>
      </div>
    </footer>
  )
}
