"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import { SKILLS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const categoryNodes = container.querySelectorAll("[data-skill-category]");

    categoryNodes.forEach((category) => {
      const items = category.querySelectorAll("[data-skill-chip]");

      gsap.fromTo(
        items,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: {
            trigger: category,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger && container.contains(trigger.trigger as Node)) {
          trigger.kill();
        }
      });
    };
  }, []);

  const scrollCards = (direction: "left" | "right") => {
    const element = scrollerRef.current;
    if (!element) return;

    const distance = Math.max(320, Math.floor(element.clientWidth * 0.78));
    element.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <section id="skills" ref={containerRef} className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl opacity-30" />
        <div className="absolute bottom-40 right-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-4xl md:text-5xl font-bold font-space-grotesk text-foreground">
              Skills
            </h2>
            <p className="mb-4 text-sm md:text-base font-medium text-foreground/85">
              Technologies I use to ship production software.
            </p>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollCards("left")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-foreground/90 transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
              aria-label="Scroll skills left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollCards("right")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-foreground/90 transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
              aria-label="Scroll skills right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-5 pr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SKILLS.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} data-skill-category className="min-w-[18rem] snap-start sm:min-w-[20rem] lg:min-w-[22rem] [scroll-snap-stop:always]">
              <GlassCard className="flex h-full flex-col gap-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/65">{category.items.length} focused tools and concepts</p>
                  </div>
                  <div className="rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-medium text-foreground/65">
                    {categoryIndex + 1}/{SKILLS.categories.length}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      data-skill-chip
                      className="skill-chip-glassy inline-flex rounded-full border border-border/70 bg-background/35 px-3 py-2 font-space-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground/82 transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:text-primary hover:shadow-glow hover:bg-background/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
