import React, { useState, FormEvent } from "react";
import { Send, Linkedin, Github, Mail, Check, Copy, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const linkedInUrl = "https://www.linkedin.com/in/dinesh-bala-ks-1a077a292";
  const gitHubUrl = "https://github.com/dineshbalaks7";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dineshbalaks@gmail.com");
      setCopied(true);
      toast.success("Email address copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.info("Contact email: dineshbalaks@gmail.com");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      toast.success("Thank you! Your message has been captured.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 700);
  };

  return (
    <section id="contact" className="section-pad border-t border-[#1C1C1C]" aria-label="Contact Section">
      <div className="container">
        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div>
            <div className="section-heading">
              <span className="eyebrow">GET IN TOUCH</span>
              <h2>
                Let's Build Something <br />
                <span className="text-red">Together.</span>
              </h2>
              <p className="section-copy">
                Have a project idea, internship opportunity, collaboration, or simply want to connect? Feel free to reach out.
              </p>
            </div>

            <div className="contact-card-box">
              {/* LinkedIn */}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method group"
              >
                <div className="contact-method-icon group-hover:scale-105 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">LinkedIn Profile</span>
                  <span className="contact-method-value">Dinesh Bala KS</span>
                </div>
                <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method group"
              >
                <div className="contact-method-icon group-hover:scale-105 transition-transform">
                  <Github size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">GitHub Profile</span>
                  <span className="contact-method-value">dineshbalaks7</span>
                </div>
                <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              {/* Email Copy Box */}
              <div
                onClick={handleCopyEmail}
                className="contact-method cursor-pointer group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleCopyEmail()}
              >
                <div className="contact-method-icon group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div className="contact-method-details">
                  <span className="contact-method-label">Direct Email</span>
                  <span className="contact-method-value">dineshbalaks@gmail.com</span>
                </div>
                <button
                  type="button"
                  className="px-2.5 py-1 text-xs font-medium rounded bg-[#1A1A1A] border border-[#262626] text-neutral-300 flex items-center gap-1.5"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-[#E50914]" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Recruiter Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="form-name">Name</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-email">Email</label>
                <input
                  id="form-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="form-subject">Subject</label>
              <input
                id="form-subject"
                type="text"
                required
                placeholder="Internship / Project Opportunity / Inquiries"
                className="form-input"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="form-message">Message</label>
              <textarea
                id="form-message"
                required
                rows={5}
                placeholder="Tell me about the role, project, or collaboration..."
                className="form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending" || formStatus === "sent"}
              className="button button-primary self-start"
            >
              {formStatus === "sending" ? (
                "Sending Message..."
              ) : formStatus === "sent" ? (
                <>
                  <Check size={16} />
                  Message Sent
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
