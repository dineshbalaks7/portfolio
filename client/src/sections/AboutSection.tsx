import React from "react";
import { GraduationCap, Calendar, Target, Sparkles, UserCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-pad border-t border-[#1C1C1C]" aria-label="About Me">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Portrait Card */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl border border-[#262626] bg-[#0A0A0A] shadow-[0_20px_60px_rgba(0,0,0,0.7)] group-hover:border-[#E50914]/60 group-hover:shadow-[0_0_30px_rgba(229,9,20,0.25)] transition-all duration-300">
              {/* Photo */}
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src="/dinesh-bala.jpg"
                  alt="Dinesh Bala KS — AI & Data Science Developer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Bottom Telemetry Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#070707]/90 backdrop-blur-md border border-[#222222] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm tracking-tight">Dinesh Bala KS</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/40">
                      2027
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 block mt-0.5">
                    AI &amp; Data Science Developer
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] shadow-[0_0_10px_#E50914] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E50914]/20 to-transparent -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Right Column: Heading, Narrative & Information Card */}
          <div className="flex flex-col gap-6">
            <div className="section-heading mb-0">
              <span className="eyebrow">ABOUT ME</span>
              <h2>
                Turning ideas into <br />
                <span className="text-red">practical technology</span>.
              </h2>
            </div>

            <div className="about-content">
              <p>
                I'm a B.Tech Artificial Intelligence &amp; Data Science student with a strong interest in artificial intelligence, machine learning, data analytics, databases, and software development.
              </p>
              <p>
                I enjoy transforming real-world problems into practical digital solutions by combining AI, data, programming, and modern technologies.
              </p>
            </div>

            {/* Information Card */}
            <div className="about-info-card mt-2">
              {/* Education */}
              <div className="info-item">
                <span className="info-label flex items-center gap-1.5">
                  <GraduationCap size={15} />
                  Education
                </span>
                <div className="info-value">
                  B.Tech — Artificial Intelligence &amp; Data Science
                </div>
              </div>

              {/* Graduation */}
              <div className="info-item">
                <span className="info-label flex items-center gap-1.5">
                  <Calendar size={15} />
                  Graduation
                </span>
                <div className="info-value font-mono text-xl text-[#E50914]">
                  2027
                </div>
              </div>

              {/* Focus Areas */}
              <div className="info-item">
                <span className="info-label flex items-center gap-1.5">
                  <Target size={15} />
                  Focus Areas
                </span>
                <div className="focus-tags">
                  <span className="focus-tag">AI / ML</span>
                  <span className="focus-tag">Data Science</span>
                  <span className="focus-tag">Data Analytics</span>
                  <span className="focus-tag">Software Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
