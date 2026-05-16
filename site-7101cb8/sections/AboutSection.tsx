"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Main content animation
    gsap.fromTo(
      content.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  const highlights = [
    "Full Stack Development",
    "UI/UX Design",
    "Performance Optimization",
    "Cloud Architecture",
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-30" />
        <div className="absolute bottom-16 right-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef}>
          <div className="mb-12 md:mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/75">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 text-foreground">
              Designing premium digital products with clarity and motion.
            </h2>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="space-y-6 text-foreground/95">
              <p className="text-lg leading-8">
                {PORTFOLIO_DATA.longBio}
              </p>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/70 px-4 py-3 shadow-luxury backdrop-blur-xl"
                  >
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground/95">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="flex h-40 flex-col items-center justify-center text-center">
                <p className="mb-2 text-4xl font-bold md:text-5xl text-primary">
                  5+
                </p>
                <p className="text-sm text-foreground/90">Years Experience</p>
              </GlassCard>

              <GlassCard className="flex h-40 flex-col items-center justify-center text-center">
                <p className="mb-2 text-4xl font-bold md:text-5xl text-secondary">
                  50+
                </p>
                <p className="text-sm text-foreground/90">Projects Completed</p>
              </GlassCard>

              <GlassCard className="flex h-40 flex-col items-center justify-center text-center">
                <p className="mb-2 text-4xl font-bold md:text-5xl text-primary">
                  98%
                </p>
                <p className="text-sm text-foreground/90">Client Satisfaction</p>
              </GlassCard>

              <GlassCard className="flex h-40 flex-col items-center justify-center text-center">
                <p className="mb-2 text-4xl font-bold md:text-5xl text-secondary">
                  15+
                </p>
                <p className="text-sm text-foreground/90">Team Members Mentored</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
