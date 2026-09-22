import React, { useState, FormEvent } from "react";
import { Send, Linkedin, Github, Mail, Check, Copy, ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_ACCESS_KEY = "eba0bcdd-6e19-4e88-88d2-6b9e796aeb84";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", WEB3FORMS_ACCESS_KEY);
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("subject", formData.subject || `Portfolio Message from ${formData.name}`);
      formPayload.append("message", formData.message);
      formPayload.append("from_name", `${formData.name} (via Portfolio)`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("sent");
        toast.success("Message sent! Dinesh will receive it in his Gmail inbox.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission failed, falling back to mail client:", error);
      const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Dinesh,\n\n${formData.message}\n\n---\nSender Name: ${formData.name}\nSender Email: ${formData.email}`
      );
      window.location.href = `mailto:dineshbalaks@gmail.com?subject=${subject}&body=${body}`;
      toast.info("Opened your email client to send message.");
      setFormStatus("idle");
    }
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
                  name="name"
                  autoComplete="name"
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
                  name="email"
                  autoComplete="email"
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
                name="subject"
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
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role, project, or collaboration..."
                className="form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                type="submit"
                disabled={formStatus === "sending" || formStatus === "sent"}
                className="button button-primary self-start"
              >
                {formStatus === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending Message...
                  </>
                ) : formStatus === "sent" ? (
                  <>
                    <Check size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>

              <span className="text-xs text-neutral-400">
                Delivers directly to <strong className="text-neutral-200">dineshbalaks@gmail.com</strong>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
