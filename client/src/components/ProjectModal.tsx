import React, { useEffect, useState } from "react";
import {
  X,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Briefcase,
  Layers,
  MessageSquare,
  Calculator,
  Package,
  BarChart3,
  FileText,
  Sparkles,
  Check,
} from "lucide-react";
import { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "contributions">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      setActiveTab("overview");
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Single status badge logic to eliminate duplicates
  const statusBadge = project.statusNote || project.badge;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Modal Header */}
        <div className="modal-header">
          <div className="flex-1 pr-4 min-w-0">
            <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
              <span className="text-[11px] font-mono font-bold text-[#E50914] uppercase tracking-wider">
                {project.category}
              </span>
              {statusBadge && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full bg-[#E50914]/10 text-[#ff4d56] border border-[#E50914]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
                  {statusBadge}
                </span>
              )}
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            className="modal-close-btn flex-shrink-0"
            aria-label="Close project modal"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        {/* Fixed Project Metadata Strip: 3 balanced columns */}
        <div className="modal-meta-strip">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#E50914] font-bold block mb-1">
              ROLE
            </span>
            <span className="text-white font-medium text-xs sm:text-[13px] flex items-center gap-1.5">
              {project.role}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#E50914] font-bold block mb-1">
              LOCATION
            </span>
            <span className="text-neutral-200 text-xs sm:text-[13px] flex items-center gap-1.5">
              <MapPin size={13} className="text-neutral-400 flex-shrink-0" />
              {project.location || "Remote / India"}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#E50914] font-bold block mb-1">
              PROJECT TYPE
            </span>
            <span className="text-neutral-200 text-xs sm:text-[13px] flex items-center gap-1.5">
              <Briefcase size={13} className="text-neutral-400 flex-shrink-0" />
              {project.projectType || "Software Application"}
            </span>
          </div>
        </div>

        {/* Sticky Tab Navigation Bar */}
        <div className="modal-tabs-bar">
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview &amp; Architecture
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === "features" ? "active" : ""}`}
            onClick={() => setActiveTab("features")}
          >
            Capabilities &amp; Features
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === "contributions" ? "active" : ""}`}
            onClick={() => setActiveTab("contributions")}
          >
            My Contribution &amp; Tech
          </button>
        </div>

        {/* ONLY ONE Vertical Scrollbar: Modal Scroll Body */}
        <div className="modal-scroll-body">
          {/* TAB 1: OVERVIEW & ARCHITECTURE */}
          {activeTab === "overview" && (
            <div className="flex flex-col gap-6">
              {/* Overview */}
              {project.overview && (
                <div className="max-w-[880px]">
                  <span className="modal-section-eyebrow">OVERVIEW</span>
                  <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed space-y-2.5 mt-1.5">
                    {project.overview.split("\n\n").map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Problem & Solution Grid: 2 equal cards on desktop, stacked on mobile */}
              {(project.problem || project.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[880px]">
                  {project.problem && (
                    <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] border-t-2 border-t-[#E50914]/60 flex flex-col transition-colors hover:border-[#333333]">
                      <span className="modal-section-eyebrow">PROBLEM</span>
                      <div className="text-xs text-neutral-300 leading-relaxed space-y-2 mt-1.5 flex-1">
                        {project.problem.split("\n\n").map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.solution && (
                    <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] border-t-2 border-t-[#E50914] flex flex-col transition-colors hover:border-[#333333]">
                      <span className="modal-section-eyebrow">SOLUTION</span>
                      <div className="text-xs text-neutral-300 leading-relaxed space-y-2 mt-1.5 flex-1">
                        {project.solution.split("\n\n").map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Project Outcome */}
              {project.outcome && (
                <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] border-l-2 border-l-[#E50914] max-w-[880px]">
                  <span className="modal-section-eyebrow flex items-center gap-1.5">
                    <Sparkles size={13} className="text-[#E50914]" />
                    PROJECT OUTCOME
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-1">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CAPABILITIES & FEATURES */}
          {activeTab === "features" && (
            <div className="flex flex-col gap-6 max-w-[880px]">
              {/* WhatsApp Automation (for Ganapathi Murugan) */}
              {project.whatsappAutomation && (
                <div className="p-4 rounded-lg bg-[#111111] border border-[#E50914]/40 shadow-[0_0_20px_rgba(229,9,20,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare size={16} className="text-[#E50914]" />
                    <h4 className="text-sm font-bold text-white">WhatsApp Automation</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#E50914] text-white font-bold ml-auto">
                      Key Capability
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                    {project.whatsappAutomation.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.whatsappAutomation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#0A0A0A] border border-[#E50914]/35 text-[#ff8087] text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Logic (for TVS) */}
              {project.businessLogic && (
                <div className="p-4 rounded-lg bg-[#111111] border border-[#222222]">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator size={16} className="text-[#E50914]" />
                    <h4 className="text-sm font-bold text-white">Business Logic</h4>
                  </div>
                  <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
                    {project.businessLogic.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mb-2.5">
                    {project.businessLogic.rules.map((rule) => (
                      <div
                        key={rule.label}
                        className="p-2.5 rounded bg-[#0A0A0A] border border-[#222222] flex flex-col justify-between"
                      >
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#E50914] font-semibold">
                          {rule.label}
                        </span>
                        <span className="text-xs font-semibold text-white mt-1">
                          {rule.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  {project.businessLogic.disclaimer && (
                    <p className="text-[11px] font-mono text-neutral-500 italic mt-2">
                      {project.businessLogic.disclaimer}
                    </p>
                  )}
                </div>
              )}

              {/* Inventory Management (for TVS) */}
              {project.inventory && (
                <div className="p-4 rounded-lg bg-[#111111] border border-[#222222]">
                  <div className="flex items-center gap-2 mb-2">
                    <Package size={16} className="text-[#E50914]" />
                    <h4 className="text-sm font-bold text-white">Inventory Management</h4>
                  </div>
                  <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
                    {project.inventory.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.inventory.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded bg-[#0A0A0A] border border-[#2B2B2B] text-neutral-300 text-xs font-medium"
                      >
                        • {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Analytics Dashboard (for TVS) */}
              {project.analytics && (
                <div className="p-4 rounded-lg bg-[#111111] border border-[#222222]">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 size={16} className="text-[#E50914]" />
                    <h4 className="text-sm font-bold text-white">Business Analytics Dashboard</h4>
                  </div>
                  <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
                    {project.analytics.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-mono text-neutral-400">Time Filters:</span>
                    {project.analytics.filters.map((filter) => (
                      <span
                        key={filter}
                        className="px-2 py-0.5 rounded bg-[#E50914]/10 border border-[#E50914]/40 text-[#ff666e] text-xs font-semibold font-mono"
                      >
                        {filter}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Reporting & Export (for TVS) */}
              {project.reporting && (
                <div className="p-4 rounded-lg bg-[#111111] border border-[#222222]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FileText size={16} className="text-[#E50914]" />
                    <h4 className="text-sm font-bold text-white">Reporting &amp; Export</h4>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.reporting.description}
                  </p>
                </div>
              )}

              {/* All Key Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <span className="modal-section-eyebrow">KEY FEATURES &amp; CAPABILITIES</span>
                  <ul className="modal-features-list mt-2">
                    {project.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-neutral-200">
                        <CheckCircle2 size={14} className="text-[#E50914] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: MY CONTRIBUTION & TECH STACK */}
          {activeTab === "contributions" && (
            <div className="flex flex-col gap-6 max-w-[880px]">
              {/* My Contribution List */}
              {project.myContributions && project.myContributions.length > 0 && (
                <div>
                  <span className="modal-section-eyebrow">MY CONTRIBUTION</span>
                  <div className="p-4 rounded-lg bg-[#111111] border border-[#222222] mt-1.5">
                    <ul className="space-y-2">
                      {project.myContributions.map((contrib, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                          <span className="w-4 h-4 rounded-full bg-[#E50914]/15 border border-[#E50914] text-[#E50914] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          <span className="leading-relaxed">{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Technology Stack / Technical Focus */}
              <div>
                <span className="modal-section-eyebrow">
                  {project.id === "ganapathi-murugan" ? "TECHNICAL FOCUS" : "TECHNOLOGY STACK"}
                </span>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded bg-[#161616] border border-[#262626] text-xs font-medium text-neutral-200 hover:border-[#E50914]/60 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Live Website Action Link */}
          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary inline-flex items-center gap-2 text-xs font-semibold"
              >
                <span>Visit Live Website</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}

          {/* Verification / Access note */}
          <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between text-xs text-neutral-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
              Verified Portfolio Entry
            </span>
            <span className="font-mono text-[11px] text-neutral-500">
              Dinesh Bala KS — AI &amp; DS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


