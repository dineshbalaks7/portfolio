import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { certifications } from "../data/certifications";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section-pad border-t border-[#1C1C1C]" aria-label="Certifications">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">CREDENTIALS &amp; LEARNING</span>
          <h2>
            Verified <span className="text-red">Certifications</span>
          </h2>
          <p className="section-copy">
            Continuous specialization across data analytics, cloud architecture, relational databases, and modern generative AI models.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-badge-icon">
                <Award size={22} />
              </div>
              <div className="cert-info">
                <span className="cert-domain">{cert.domain}</span>
                <h3 className="text-white font-bold">{cert.title}</h3>
                <p className="cert-issuer">Issued by {cert.issuer}</p>
              </div>
              <div className="text-neutral-500 font-mono text-xs hidden sm:block">
                #{cert.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
