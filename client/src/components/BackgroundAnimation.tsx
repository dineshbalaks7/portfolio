import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isRed: boolean;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();

    const isMobile = width < 768;
    // Ensure sufficient node count on small screens (minimum 22 on mobile, up to 42 on large screens)
    const nodeCount = isMobile
      ? Math.min(Math.max(22, Math.floor((width * height) / 12000)), 32)
      : Math.min(Math.max(30, Math.floor((width * height) / 26000)), 48);

    const maxDist = isMobile ? 120 : 140;
    const speedScale = prefersReducedMotion ? 0.08 : isMobile ? 0.3 : 0.35;

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const isRed = Math.random() < 0.32;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedScale,
        vy: (Math.random() - 0.5) * speedScale,
        radius: isRed ? (isMobile ? 2.0 : 2.2) : isMobile ? 1.5 : 1.7,
        isRed,
        baseAlpha: isRed
          ? Math.random() * 0.35 + 0.55 // 0.55 - 0.90 for red
          : Math.random() * 0.3 + 0.4,  // 0.40 - 0.70 for white
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let pointerX = -1000;
    let pointerY = -1000;
    let isPointerActive = false;

    const handlePointerMove = (clientX: number, clientY: number) => {
      pointerX = clientX;
      pointerY = clientY;
      isPointerActive = true;
    };

    const handlePointerEnd = () => {
      isPointerActive = false;
      pointerX = -1000;
      pointerY = -1000;
    };

    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onResize = () => {
      updateCanvasSize();
      // Keep nodes bounded inside new dimensions
      for (const node of nodes) {
        if (node.x > width) node.x = width * Math.random();
        if (node.y > height) node.y = height * Math.random();
      }
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", handlePointerEnd, { passive: true });
    window.addEventListener("touchcancel", handlePointerEnd, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connection lines between nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const proximity = 1 - dist / maxDist;
            const isRedConnection = a.isRed || b.isRed;
            const lineAlpha = proximity * (isRedConnection ? 0.35 : 0.18);

            ctx.strokeStyle = isRedConnection
              ? `rgba(229, 9, 20, ${lineAlpha})`
              : `rgba(255, 255, 255, ${lineAlpha * 0.75})`;
            ctx.lineWidth = isMobile ? 0.85 : 0.75;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // 2. Draw connections to active pointer (touch or cursor)
      if (isPointerActive) {
        const touchMaxDist = isMobile ? 130 : 160;
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const dx = pointerX - node.x;
          const dy = pointerY - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < touchMaxDist) {
            const proximity = 1 - dist / touchMaxDist;
            ctx.strokeStyle = `rgba(229, 9, 20, ${proximity * 0.55})`;
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(pointerX, pointerY);
            ctx.stroke();

            // Subtle gentle pull towards touch
            node.x += dx * 0.012;
            node.y += dy * 0.012;
          }
        }
      }

      // 3. Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Motion update
        node.x += node.vx;
        node.y += node.vy;

        // Bounce gently at screen edges
        if (node.x < 0) {
          node.x = 0;
          node.vx *= -1;
        } else if (node.x > width) {
          node.x = width;
          node.vx *= -1;
        }
        if (node.y < 0) {
          node.y = 0;
          node.vy *= -1;
        } else if (node.y > height) {
          node.y = height;
          node.vy *= -1;
        }

        // Pulsing alpha
        node.pulsePhase += node.pulseSpeed;
        const pulse = Math.sin(node.pulsePhase) * 0.15;
        const currentAlpha = Math.max(0.1, Math.min(1, node.baseAlpha + pulse));

        if (node.isRed) {
          // Subtle glow aura around red nodes
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(229, 9, 20, ${currentAlpha * 0.25})`;
          ctx.fill();

          // Red node core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 60, 70, ${currentAlpha})`;
          ctx.fill();
        } else {
          // White neural node core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.75})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", handlePointerEnd);
      window.removeEventListener("touchcancel", handlePointerEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Animated Subtle Cyber Grid Lines - enhanced contrast on mobile screens */}
      <div className="absolute inset-0 bg-cyber-grid opacity-[0.14] md:opacity-[0.07]" />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
