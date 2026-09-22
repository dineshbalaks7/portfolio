import React from "react";
import { Linkedin, Github, ArrowUp, FileDown } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const linkedInUrl = "https://www.linkedin.com/in/dinesh-bala-ks-1a077a292";
  const gitHubUrl = "https://github.com/dineshbalaks7";

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top bar */}
        <div className="footer-top">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="brand-mark">DB</span>
              <span className="text-lg font-bold text-white tracking-tight">
                Dinesh Bala <em className="text-[#E50914] not-italic">KS</em>
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-medium">
              B.Tech Artificial Intelligence &amp; Data Science
            </p>
          </div>

          <div className="footer-links">
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>About</a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>Skills</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "projects")}>Projects</a>
            <a href="#certifications" onClick={(e) => handleLinkClick(e, "certifications")}>Certifications</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>Contact</a>
            <a
              href="/resume.pdf"
              download="Dinesh_Bala_KS_Resume.pdf"
              className="flex items-center gap-1.5 text-[#A1A1A1] hover:text-white transition-colors"
            >
              <FileDown size={13} className="text-[#E50914]" />
              <span>Resume</span>
            </a>
            <a
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#A1A1A1] hover:text-white transition-colors"
            >
              <Github size={13} className="text-[#E50914]" />
              <span>GitHub</span>
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#A1A1A1] hover:text-white transition-colors"
            >
              <Linkedin size={13} className="text-[#E50914]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>
            © 2026 Dinesh Bala KS. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-500">Built with curiosity &amp; code.</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#161616] border border-[#222222] text-neutral-400 hover:text-white hover:border-[#E50914] flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
