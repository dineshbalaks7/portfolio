import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`site-header transition-all duration-300 ${
        scrolled ? "bg-[#050505]/90 shadow-lg border-b border-[#222222]" : "bg-[#050505]/70 border-b border-[#1A1A1A]"
      }`}
    >
      {/* Brand */}
      <a
        href="#home"
        onClick={(e) => handleLinkClick(e, "home")}
        className="brand"
        aria-label="Dinesh Bala KS - Home"
      >
        <span className="brand-mark">DB</span>
        <span className="brand-name">
          Dinesh Bala <em>KS</em>
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <nav
        className={`desktop-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Main Navigation"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={isActive ? "active" : ""}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      {/* Actions */}
      <div className="header-actions">
        <button
          className="button button-primary button-compact"
          onClick={(e) => handleLinkClick(e, "contact")}
        >
          Let's Connect
          <ArrowUpRight size={14} />
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
};
