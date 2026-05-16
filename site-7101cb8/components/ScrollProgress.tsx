"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-[3px] rounded-r-full bg-gradient-to-r from-primary via-secondary to-cyan-300 shadow-[0_0_24px_rgba(139,92,246,0.65)] transition-[width] duration-200 ease-out"
      style={{ width: `${progress}%` }}
    />
  );
}
