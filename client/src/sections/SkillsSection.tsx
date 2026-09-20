import React from "react";
import { Code2, Brain, BarChart3, Globe, Cloud } from "lucide-react";
import { skillCategories } from "../data/skills";

const categoryIcons: Record<string, React.ElementType> = {
  "programming-databases": Code2,
  "ai-machine-learning": Brain,
  "data-science-analytics": BarChart3,
  "web-development": Globe,
  "cloud-tools": Cloud,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-pad border-t border-[#1C1C1C]" aria-label="Technical Skills">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">TECHNICAL TOOLKIT</span>
          <h2>
            Skills &amp; <span className="text-red">Technologies</span>
          </h2>
          <p className="section-copy">
            A comprehensive foundation spanning AI systems, data pipelines, database architectures, and production development tools.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code2;
            return (
              <div key={cat.id} className="skill-card">
                <div className="skill-card-top">
                  <div className="w-9 h-9 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-[#E50914]">
                    <Icon size={18} />
                  </div>
                  <span className="skill-number">CAT / {cat.categoryNumber}</span>
                </div>

                <h3>{cat.title}</h3>
                <p className="skill-card-desc">{cat.description}</p>

                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
