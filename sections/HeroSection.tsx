"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PORTFOLIO_DATA } from "@/lib/constants";

const HERO_ROLES = [
  "Full Stack Developer",
  "React.js • Node.js • Python",
  "B.Tech CSE (Data Science)",
];

export default function HeroSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const chipsRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % HERO_ROLES.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from([eyebrowRef.current, nameRef.current], {
        y: 26,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
      })
        .from(chipsRef.current?.children || [], { y: 18, opacity: 0, stagger: 0.08, duration: 0.55 }, "-=0.35")
        .from(descriptionRef.current, { y: 26, opacity: 0, duration: 0.75 }, "-=0.35")
        .from(ctaRef.current?.children || [], { y: 18, opacity: 0, stagger: 0.12, duration: 0.5 }, "-=0.25");

      return () => tl.kill();
    }, rootRef);

    return () => ctx.revert();
  }, []);


  return (
    <section id="hero" ref={rootRef} className="relative flex min-h-[100dvh] items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(142,168,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(107,224,242,0.12),transparent_24%)] opacity-80" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.1]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.1]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <p ref={eyebrowRef} className="font-space-mono text-[0.82rem] uppercase tracking-[0.42em] text-foreground/62 sm:text-sm">
            Introducing
          </p>

          <h1 ref={nameRef} className="mt-4 whitespace-nowrap text-[clamp(1.35rem,4.8vw,4.25rem)] font-semibold leading-none tracking-[-0.09em] text-foreground">
            Duvvu Lakshmi Prasanna
          </h1>

          <div ref={chipsRef} className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-primary/25 bg-primary/12 px-4 py-2 text-sm font-semibold text-primary shadow-glow">
              {HERO_ROLES[roleIndex]}
            </span>
            <span className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/92 backdrop-blur-xl">
              {PORTFOLIO_DATA.degree}
            </span>
          </div>

          <p ref={descriptionRef} className="mt-8 max-w-3xl text-[1.1rem] leading-8 text-foreground/90 sm:text-[1.2rem]">
            {PORTFOLIO_DATA.longBio}
          </p>

          <div className="mt-6 flex items-center gap-6">
            <a
              href={PORTFOLIO_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-card/75 px-5 py-4 text-base font-semibold text-foreground shadow-luxury backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <i className="fa-brands fa-github text-foreground" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-card/75 px-5 py-4 text-base font-semibold text-foreground shadow-luxury backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <i className="fa-brands fa-linkedin text-foreground" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-card/75 px-5 py-4 text-base font-semibold text-foreground shadow-luxury backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <i className="fa-solid fa-envelope text-foreground" aria-hidden="true" />
              Mail
            </a>
          </div>

          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-3">
          </div>
        </div>

      </div>
    </section>
  );
}
