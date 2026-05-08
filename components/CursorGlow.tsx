"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let frame = 0;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 3;

    const updateGlow = () => {
      glow.style.transform = `translate3d(${lastX - 160}px, ${lastY - 160}px, 0)`;
      glow.style.opacity = "1";
      frame = 0;
    };

    const handleMove = (event: MouseEvent) => {
      lastX = event.clientX;
      lastY = event.clientY;

      if (frame) return;
      frame = window.requestAnimationFrame(updateGlow);
    };

    const handleLeave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),rgba(6,182,212,0.08),transparent_70%)] blur-3xl opacity-0 transition-opacity duration-300 lg:block"
    />
  );
}
