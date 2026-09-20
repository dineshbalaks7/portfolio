import React from "react";
import { ArrowDownRight, ArrowUpRight, FileDown } from "lucide-react";
import { toast } from "sonner";
import { Terminal } from "../components/Terminal";
import { HeroVisual } from "../components/HeroVisual";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const handleResumeDownload = () => {
    // Check if resume.pdf exists or inform recruiter
    toast.info("Resume document ready — download placeholder configured at /resume.pdf");
  };

  return (
    <section id="home" className="hero section-pad" aria-label="Introduction">
      <div className="container hero-grid">
        {/* Left Column: Hero Copy */}
        <div className="flex flex-col justify-center">
          {/* Status Badge */}
          <div className="status-line" role="status">
            <img
              src="/dinesh-bala.jpg"
              alt="Dinesh Bala KS"
              className="w-5 h-5 rounded-full object-cover object-top border border-[#E50914]"
            />
            <span className="status-dot" />
            <span>Open to Opportunities</span>
          </div>

          {/* Small Label */}
          <span className="eyebrow">
            ARTIFICIAL INTELLIGENCE &amp; DATA SCIENCE
          </span>

          {/* Main Heading */}
          <h1>
            Building Intelligent<br />
            Solutions with <span className="text-red">AI &amp; Data</span>.
          </h1>

          {/* Supporting Text */}
          <p className="hero-intro">
            I'm <strong>Dinesh Bala KS</strong>, a B.Tech Artificial Intelligence &amp; Data Science student passionate about building practical AI solutions, data-driven applications, and modern software systems.
          </p>

          {/* Actions */}
          <div className="hero-actions">
            <button
              className="button button-primary"
              onClick={() => onNavigate("projects")}
            >
              View My Projects
              <ArrowDownRight size={16} />
            </button>

            <button
              className="button button-secondary"
              onClick={handleResumeDownload}
            >
              <FileDown size={16} className="text-[#E50914]" />
              Download Resume
            </button>
          </div>

          {/* Secondary Link */}
          <div>
            <button
              className="text-link"
              onClick={() => onNavigate("contact")}
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* Right Column: Hero Visual & Terminal */}
        <div className="flex flex-col gap-5">
          <HeroVisual />
          <Terminal />
        </div>
      </div>
    </section>
  );
};
