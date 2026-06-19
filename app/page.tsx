import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { StackSection } from "@/components/sections/stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TerminalSection } from "@/components/sections/terminal-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <TerminalSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
