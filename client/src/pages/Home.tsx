import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { ProjectModal } from "../components/ProjectModal";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { SkillsSection } from "../sections/SkillsSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { CertificationsSection } from "../sections/CertificationsSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../sections/Footer";
import { BackgroundAnimation } from "../components/BackgroundAnimation";
import { CursorFlow } from "../components/CursorFlow";
import { Project } from "../data/projects";

const sectionIds = ["home", "about", "skills", "projects", "certifications", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Set up intersection observer for active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="portfolio-shell">
      {/* Interactive Cursor Flow Animation */}
      <CursorFlow />

      {/* Interactive Neural & Cyber Grid Background Animation */}
      <BackgroundAnimation />

      {/* Strategic red ambient glows */}
      <div className="ambient ambient-hero" aria-hidden="true" />
      <div className="ambient ambient-crimson" aria-hidden="true" />
      <div className="ambient ambient-projects" aria-hidden="true" />
      <div className="ambient ambient-contact" aria-hidden="true" />

      {/* Sticky Navigation Header */}
      <Navbar activeSection={activeSection} onNavigate={scrollToId} />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection onNavigate={scrollToId} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToId} />

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
