import React from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface TerminalProps {
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ className = "" }) => {
  return (
    <div className={`terminal-box ${className}`} role="region" aria-label="Developer Terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-400">
          <TerminalIcon size={13} className="text-[#E50914]" />
          <span>dinesh@portfolio:~</span>
        </div>
        <span className="text-[10px] text-neutral-500 font-mono">bash 5.2</span>
      </div>
      <div className="terminal-body font-mono text-[13px]">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">whoami</span>
        </div>
        <div className="terminal-output highlight text-white">
          Dinesh Bala KS
        </div>

        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">education</span>
        </div>
        <div className="terminal-output text-neutral-300">
          B.Tech — Artificial Intelligence &amp; Data Science
        </div>

        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">graduation</span>
        </div>
        <div className="terminal-output text-neutral-300">
          2027
        </div>

        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">focus</span>
        </div>
        <div className="terminal-output highlight text-neutral-100">
          <span className="text-[#E50914] font-semibold">AI</span> +{" "}
          <span className="text-[#E50914] font-semibold">Data</span> +{" "}
          <span className="text-white font-semibold">Software</span>
        </div>

        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">status</span>
        </div>
        <div className="terminal-output text-neutral-300 flex items-center">
          <span>Building something new...</span>
          <span className="terminal-cursor" />
        </div>
      </div>
    </div>
  );
};
