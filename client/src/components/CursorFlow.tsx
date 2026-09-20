import React, { useEffect, useRef, useState } from "react";

export const CursorFlow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check if device is desktop with mouse pointer and screen width > 768px
    const checkIsDesktop = () => {
      if (typeof window === "undefined") return false;
      const isFinePointer = window.matchMedia("(pointer: fine)").matches;
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth > 768;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      // If mobile width or touch-primary device without fine pointer, disable
      if (!isLargeScreen || !isFinePointer || prefersReducedMotion) {
        return false;
      }
      return true;
    };

    const updateState = () => {
      const active = checkIsDesktop();
      setIsEnabled(active);
      if (!active) {
        setIsVisible(false);
      }
    };

    // Run initial detection
    updateState();

    const handleResize = () => {
      updateState();
    };

    const handleTouchStart = () => {
      // Immediate kill-switch if touch interaction detected
      setIsEnabled(false);
      setIsVisible(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!checkIsDesktop() || window.innerWidth <= 768) {
        setIsVisible(false);
        setIsEnabled(false);
        return;
      }

      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable/interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("button, a, input, textarea, [role='button'], .project-card, .skill-card, .cert-card, .contact-method")
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
      if (checkIsDesktop()) setIsVisible(true);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth animation loop for fluid trailing flow
    const render = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.18;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%) ${
          isClicking ? "scale(0.85)" : isHovered ? "scale(1.75)" : "scale(1)"
        }`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible, isHovered, isClicking]);

  if (!isEnabled || !isVisible) return null;

  return (
    <div
      className="cursor-flow-container pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      {/* Outer Fluid Follower Ring */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-[#E50914]/70 bg-[#E50914]/10 transition-[opacity,border-color,background-color] duration-200 ease-out will-change-transform ${
          isHovered
            ? "border-[#E50914] bg-[#E50914]/20 shadow-[0_0_24px_rgba(229,9,20,0.5)]"
            : "shadow-[0_0_12px_rgba(229,9,20,0.25)]"
        }`}
      />

      {/* Center Precision Pinpoint */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914] will-change-transform ${
          isHovered ? "opacity-40" : "opacity-100"
        }`}
      />
    </div>
  );
};
