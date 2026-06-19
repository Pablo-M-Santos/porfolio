"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.replace("#", ""));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      {/* floating container */}
      <div
        className={`w-full max-w-5xl mx-4 transition-all duration-300 rounded-2xl px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? "bg-slate-950/70 backdrop-blur-xl border border-slate-800/60 shadow-lg shadow-black/30"
            : "bg-slate-950/30 backdrop-blur-md border border-slate-800/30"
        }`}
      >
        <nav className="flex items-center justify-between h-16">
          {/* BRAND */}
          <a
            href="#home"
            className="text-sm sm:text-base font-semibold tracking-tight"
          >
            <span className="text-slate-50">{`< pablo`}</span>
            <span className="text-emerald-400">.dev</span>
            <span className="text-slate-50"> {`/>`}</span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm transition-colors"
                >
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive
                        ? "text-slate-50"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* ACTIVE PILL */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium h-9"
              asChild
            >
              <a href="#contact">Contato</a>
            </Button>
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-slate-50 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 w-full max-w-5xl mx-4 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-slate-800/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "text-slate-50 bg-emerald-500/10"
                        : "text-slate-400 hover:text-slate-50 hover:bg-slate-800/30"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-4">
                <Button
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Contato
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
