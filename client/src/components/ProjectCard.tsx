import React from "react";
import { ArrowUpRight, CheckCircle2, Sparkles, TerminalSquare, ShieldCheck, Globe, Database, Activity, ExternalLink } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isFeatured = project.featured;

  // Custom visual icon/graphics based on project category
  const renderVisual = () => {
    switch (project.id) {
      case "codenxt":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#1c0809] to-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E50914_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-[#E50914]/15 border border-[#E50914] flex items-center justify-center text-[#E50914] shadow-[0_0_25px_rgba(229,9,20,0.4)]">
                <TerminalSquare size={32} />
              </div>
              <div className="font-mono text-xs text-neutral-300">
                <span className="text-[#E50914] font-bold">AI_MOCK_ENGINE</span> :: READY
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded bg-black/60 border border-[#222222] text-[10px] text-neutral-400 font-mono">Realtime Evaluation</span>
                <span className="px-2 py-0.5 rounded bg-black/60 border border-[#222222] text-[10px] text-neutral-400 font-mono">Adaptive MCQs</span>
              </div>
            </div>
          </div>
        );
      case "tvs-beedi":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-[#141414] to-[#0A0A0A]">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-200">
                <Database size={24} className="text-[#E50914]" />
              </div>
              <span className="font-mono text-[11px] text-neutral-400">INTERNAL MANAGEMENT &amp; ANALYTICS</span>
              <span className="text-[10px] font-mono text-neutral-500">TENKASI, TAMIL NADU</span>
            </div>
          </div>
        );
      case "sand-mining":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-[#120B0D] to-[#0A0A0A]">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-200">
                <Globe size={24} className="text-[#E50914]" />
              </div>
              <span className="font-mono text-[11px] text-neutral-400">SENTINEL-2 SPECTRAL ANALYSIS</span>
            </div>
          </div>
        );
      case "campus-pulse":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-[#131011] to-[#0A0A0A]">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-200">
                <Activity size={24} className="text-[#E50914]" />
              </div>
              <span className="font-mono text-[11px] text-neutral-400">PATTERN &amp; TREND ANALYTICS</span>
            </div>
          </div>
        );
      case "ganapathi-murugan":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-[#141011] to-[#0A0A0A]">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-neutral-200">
                <ShieldCheck size={24} className="text-[#E50914]" />
              </div>
              <span className="font-mono text-[11px] text-neutral-400">API INTEGRATION &amp; WHATSAPP AUTOMATION</span>
              <span className="text-[10px] font-mono text-neutral-500">TENKASI, TAMIL NADU</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isFeatured) {
    return (
      <article className="project-card-featured group" aria-label={`Featured Project: ${project.title}`}>
        <div className="featured-content">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="featured-badge">
              <Sparkles size={13} className="text-[#E50914]" />
              {project.badge || "Featured Project"}
            </span>
            <span className="text-xs font-semibold text-neutral-400">
              Role: <span className="text-white">{project.role}</span>
            </span>
          </div>

          <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-white mb-2">
            {project.title}
          </h3>

          <div className="text-xs font-mono text-[#E50914] uppercase tracking-wider mb-4">
            {project.category}
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed mb-4">
            "{project.description}"
          </p>

          {project.highlight && (
            <div className="p-3.5 mb-6 rounded-lg bg-[#0A0A0A] border-l-2 border-[#E50914] text-xs text-neutral-300">
              <strong className="text-white block mb-0.5">Project Scope:</strong>
              {project.highlight}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2 flex-wrap">
            <button
              className="button button-primary"
              onClick={() => onSelect(project)}
            >
              View Project Details
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={15} className="text-[#E50914]" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="featured-visual min-h-[280px]">
          {renderVisual()}
        </div>
      </article>
    );
  }

  return (
    <article className="project-card group" aria-label={`Project: ${project.title}`}>
      <div className="project-card-visual">
        {renderVisual()}
      </div>

      <div className="project-card-body">
        <div className="project-category-row">
          <span className="project-cat">{project.category}</span>
          <span className="project-role">{project.role}</span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-[#FFFFFF]">
          {project.title}
        </h3>

        <p className="project-desc">
          {project.description}
        </p>

        <div className="project-tech-row">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions flex items-center justify-between gap-3 flex-wrap">
          <button
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E50914] hover:text-[#ff3842] transition-colors"
            onClick={() => onSelect(project)}
          >
            View Project Details
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#181818] hover:bg-[#E50914] text-neutral-200 hover:text-white border border-[#2B2B2B] hover:border-[#E50914] text-xs font-semibold transition-all shadow-sm group/btn"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} className="text-[#E50914] group-hover/btn:text-white transition-colors" />
              <span>Live Website</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
