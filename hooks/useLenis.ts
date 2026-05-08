"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function useLenis(): void {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    lenisRef.current = lenis;

    // Create GSAP ticker for smooth animation
    const onFrame = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onFrame);

    return () => {
      gsap.ticker.remove(onFrame);
      lenis.destroy();
    };
  }, []);
}

export function useScrollTrigger() {
  useEffect(() => {
    // ScrollTrigger is already registered globally
    return () => {
      // Cleanup on unmount
    };
  }, []);

  return { ScrollTrigger };
}
