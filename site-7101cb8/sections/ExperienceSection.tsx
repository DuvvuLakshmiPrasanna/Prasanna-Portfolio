"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import { EXPERIENCE } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(
      "[data-experience-item]"
    );

    gsap.fromTo(
      items,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
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
        if (trigger.trigger && container.contains(trigger.trigger as Node)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/75">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 text-foreground">
            Shipping polished product work across the stack.
          </h2>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} data-experience-item className="relative">
              {index < EXPERIENCE.length - 1 && (
                <div className="absolute left-4 top-16 bottom-0 w-px bg-gradient-to-b from-primary/60 to-transparent md:left-12" />
              )}

              <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background md:left-4 md:h-9 md:w-9">
                <div className="h-3 w-3 rounded-full bg-primary md:h-4 md:w-4" />
              </div>

              <div className="ml-16 md:ml-28">
                <GlassCard>
                  <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-foreground">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-semibold text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <div className="inline-block whitespace-nowrap rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-foreground/95">
                      {exp.duration}
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-7 text-foreground/95">
                    {exp.description}
                  </p>

                  <div className="space-y-2 border-t border-border/70 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/75">
                      Key Achievements
                    </p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-foreground/95"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 flex-shrink-0 text-secondary"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
