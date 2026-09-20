import React, { useState, useMemo } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects, Project } from "../data/projects";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = ["All", "AI / ML", "Analytics & Enterprise", "Testing & Remote Sensing"];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "AI / ML") {
      return projects.filter((p) => p.category.includes("AI"));
    }
    if (activeFilter === "Analytics & Enterprise") {
      return projects.filter(
        (p) => p.category.includes("Business") || p.category.includes("Analytics")
      );
    }
    if (activeFilter === "Testing & Remote Sensing") {
      return projects.filter(
        (p) => p.category.includes("Testing") || p.category.includes("Remote Sensing")
      );
    }
    return projects;
  }, [activeFilter]);

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured || activeFilter !== "All");

  return (
    <section id="projects" className="section-pad border-t border-[#1C1C1C]" aria-label="Featured Projects">
      <div className="container">
        {/* Header with Title and Filters */}
        <div className="projects-header">
          <div className="section-heading mb-0">
            <span className="eyebrow">PORTFOLIO BUILDS</span>
            <h2>
              Featured <span className="text-red">Projects</span>
            </h2>
            <p className="section-copy">
              Building practical solutions for real-world problems — from full-stack AI platforms to enterprise management and geospatial analysis.
            </p>
          </div>

          <div className="project-filter-tabs" role="tablist" aria-label="Project filter">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={activeFilter === filter}
                className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid mt-10">
          {/* Always show CodeNXT at the top if All is selected */}
          {activeFilter === "All" && featuredProject && (
            <ProjectCard project={featuredProject} onSelect={onSelectProject} />
          )}

          {/* Standard Project Cards */}
          {(activeFilter === "All" ? projects.filter((p) => !p.featured) : filteredProjects).map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
          ))}
        </div>
      </div>
    </section>
  );
};
