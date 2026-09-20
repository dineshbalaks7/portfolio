import React from "react";
import { Cpu, Database, Network, ShieldCheck } from "lucide-react";

export const HeroVisual: React.FC = () => {
  return (
    <div className="hero-visual-card relative" aria-hidden="true">
      {/* Visual Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#222222] bg-[#0A0A0A] text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
          <span className="text-white font-medium">NEURAL_NET_MATRIX</span>
        </div>
        <span className="text-[11px] text-neutral-500">v3.4 / AI-CORE</span>
      </div>

      {/* SVG Interactive Neural Network Map */}
      <div className="relative w-full h-[220px] bg-[#080808] overflow-hidden flex items-center justify-center">
        {/* Subtle coordinate grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(#E50914 1px, transparent 1px), radial-gradient(#ffffff 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px, 12px 12px",
          }}
        />

        <svg className="w-full h-full" viewBox="0 0 500 220" fill="none">
          {/* Connection Lines */}
          <line x1="60" y1="110" x2="160" y2="50" stroke="#333333" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="60" y1="110" x2="160" y2="110" stroke="#E50914" strokeWidth="1.5" opacity="0.6" />
          <line x1="60" y1="110" x2="160" y2="170" stroke="#333333" strokeWidth="1.2" strokeDasharray="3 3" />

          <line x1="160" y1="50" x2="280" y2="70" stroke="#333333" strokeWidth="1.2" />
          <line x1="160" y1="110" x2="280" y2="70" stroke="#E50914" strokeWidth="1.8" opacity="0.8" />
          <line x1="160" y1="110" x2="280" y2="150" stroke="#E50914" strokeWidth="1.5" opacity="0.7" />
          <line x1="160" y1="170" x2="280" y2="150" stroke="#333333" strokeWidth="1.2" strokeDasharray="3 3" />

          <line x1="280" y1="70" x2="420" y2="110" stroke="#E50914" strokeWidth="2" opacity="0.9" />
          <line x1="280" y1="150" x2="420" y2="110" stroke="#E50914" strokeWidth="1.6" opacity="0.8" />

          {/* Central geometric pulse rings */}
          <circle cx="280" cy="70" r="32" stroke="#E50914" strokeWidth="0.8" opacity="0.25" />
          <circle cx="280" cy="70" r="44" stroke="#E50914" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />

          {/* Nodes - Input Layer */}
          <g>
            <circle cx="60" cy="110" r="14" fill="#141414" stroke="#E50914" strokeWidth="1.5" />
            <circle cx="60" cy="110" r="5" fill="#E50914" />
            <text x="60" y="140" fill="#A1A1A1" fontSize="10" fontFamily="monospace" textAnchor="middle">DATA_IN</text>
          </g>

          {/* Hidden Layer 1 */}
          <g>
            <circle cx="160" cy="50" r="10" fill="#141414" stroke="#333333" strokeWidth="1" />
            <circle cx="160" cy="50" r="3" fill="#A1A1A1" />

            <circle cx="160" cy="110" r="12" fill="#1A0D0E" stroke="#E50914" strokeWidth="1.5" />
            <circle cx="160" cy="110" r="4" fill="#E50914" />

            <circle cx="160" cy="170" r="10" fill="#141414" stroke="#333333" strokeWidth="1" />
            <circle cx="160" cy="170" r="3" fill="#A1A1A1" />
          </g>

          {/* Hidden Layer 2 */}
          <g>
            <circle cx="280" cy="70" r="15" fill="#1F080A" stroke="#E50914" strokeWidth="2" />
            <circle cx="280" cy="70" r="5" fill="#E50914" />
            <text x="280" y="42" fill="#FFFFFF" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">AI_MODEL</text>

            <circle cx="280" cy="150" r="11" fill="#141414" stroke="#E50914" strokeWidth="1.2" />
            <circle cx="280" cy="150" r="4" fill="#E50914" />
          </g>

          {/* Output Node */}
          <g>
            <circle cx="420" cy="110" r="18" fill="#2A0A0D" stroke="#E50914" strokeWidth="2" />
            <circle cx="420" cy="110" r="7" fill="#E50914" />
            <circle cx="420" cy="110" r="26" stroke="#E50914" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
            <text x="420" y="150" fill="#FFFFFF" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DECISION</text>
          </g>
        </svg>

        {/* Status Overlay Badge */}
        <div className="absolute bottom-3 left-4 flex items-center gap-2 px-3 py-1 bg-[#111111]/90 border border-[#222222] rounded text-[10px] font-mono text-neutral-300">
          <Network size={12} className="text-[#E50914]" />
          <span>INFERENCE: ACTIVE</span>
        </div>

        <div className="absolute top-3 right-4 flex items-center gap-2 px-3 py-1 bg-[#111111]/90 border border-[#222222] rounded text-[10px] font-mono text-neutral-300">
          <Cpu size={12} className="text-[#E50914]" />
          <span>LOSS: 0.0142</span>
        </div>
      </div>

      {/* Visual Footer telemetry */}
      <div className="grid grid-cols-3 border-t border-[#222222] bg-[#0A0A0A] divide-x divide-[#222222] text-center py-2.5">
        <div>
          <span className="block text-[9px] text-neutral-500 uppercase tracking-wider">Architecture</span>
          <span className="text-xs font-mono font-medium text-neutral-200">Neural / GNN</span>
        </div>
        <div>
          <span className="block text-[9px] text-neutral-500 uppercase tracking-wider">Precision</span>
          <span className="text-xs font-mono font-medium text-[#E50914]">FP16 / PyTorch</span>
        </div>
        <div>
          <span className="block text-[9px] text-neutral-500 uppercase tracking-wider">Pipelines</span>
          <span className="text-xs font-mono font-medium text-neutral-200">Production</span>
        </div>
      </div>
    </div>
  );
};
