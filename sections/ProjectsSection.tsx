"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import { PROJECTS } from "@/lib/constants";
import { Code, ExternalLink, MoveUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isShowcase = project.variant === "showcase";

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = ((e.clientY - centerY) / rect.height) * -10;
      const rotateY = ((e.clientX - centerX) / rect.width) * 10;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.6,
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        perspective: "1000px",
      }}
      className="group h-full"
    >
      <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:shadow-glow-lg">
        {isShowcase ? (
          <div className="relative overflow-hidden border-b border-border/70 bg-surface">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in srgb,var(--primary) 12%,transparent),transparent_32%),linear-gradient(135deg,color-mix(in srgb,var(--card) 96%,transparent),color-mix(in srgb,var(--secondary) 66%,transparent))]" />
            <div className="absolute left-4 top-4 h-1.5 w-24 rounded-full bg-primary/60 shadow-[0_0_20px_rgba(99,102,241,0.28)]" />
            <div className="absolute left-6 top-8 z-10 text-[0.63rem] font-semibold uppercase tracking-[0.45em] text-white/75">
              CASE STUDY 4
            </div>
            <div className="absolute right-6 top-8 z-10 text-[0.63rem] font-semibold uppercase tracking-[0.45em] text-white/75">
              REACT
            </div>
            <div className="absolute left-8 top-20 h-28 w-28 rounded-full bg-primary/40 blur-3xl" />
            <div className="absolute right-8 top-24 h-24 w-20 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl" />
            <div className="absolute right-16 top-32 h-16 w-36 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl" />
            <div className="absolute inset-0 opacity-40" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute h-1 w-1 rounded-full bg-white/70"
                  style={{
                    left: `${10 + ((index * 19) % 78)}%`,
                    top: `${12 + ((index * 13) % 64)}%`,
                    opacity: 0.2 + (index % 4) * 0.18,
                  }}
                />
              ))}
            </div>
            <div className="relative flex min-h-[19rem] flex-col justify-end p-6 text-white sm:min-h-[20rem]">
              <h3 className="max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {project.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-300/40 bg-transparent px-4 py-2 text-xs font-medium text-white/90">
                  Motion-first
                </span>
                <span className="rounded-full border border-cyan-300/40 bg-transparent px-4 py-2 text-xs font-medium text-white/90">
                  Luxury UI
                </span>
              </div>
            </div>
          </div>
        ) : (
            <div className="relative overflow-hidden border-b border-border/70">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_30%),linear-gradient(135deg,color-mix(in srgb,var(--primary) 18%,transparent),color-mix(in srgb,var(--secondary) 12%,transparent))]" />
            <img
              src={project.image}
              alt={project.title}
              className={`h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${project.id === 3 ? 'project-image--colorize' : ''}`}
              loading={project.id === 1 ? "eager" : "lazy"}
            />
            <div className="project-image-overlay absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/35 to-transparent" />
            <div className="project-image-gloss absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.16)_50%,transparent_100%)] opacity-40" />
            <div className="absolute inset-0 flex h-56 flex-col justify-between p-6 text-white">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70">
                <span>Case study {project.id}</span>
                <span>{project.tags[0]}</span>
              </div>
              <div>
                <p className="text-sm text-white/70">Featured system</p>
                <h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-white">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Motion-first</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Luxury UI</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col gap-5 p-6">
          <p className="text-sm leading-7 text-foreground/95">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 bg-background/45 px-3 py-1 text-xs font-medium text-foreground/95"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-3 pt-4">
            <Link
              href={project.live || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={isShowcase ? "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border/60 bg-transparent px-4 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-white hover:shadow-glow-lg" : "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"}
            >
              <ExternalLink size={16} />
              Live Demo
            </Link>
            <Link
              href={project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={isShowcase ? "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow" : "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-glow"}
            >
              {isShowcase ? <MoveUpRight size={16} /> : <Code size={16} />}
              GitHub Repo
            </Link>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-project-card]");

    gsap.fromTo(
      cards,
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
        if (trigger.trigger && container.contains(trigger.trigger as Node)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-20 top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl opacity-30" />
        <div className="absolute bottom-40 left-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/75">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 text-foreground">
            Case studies presented like premium product launches.
          </h2>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
          <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/95">
            Each project card is treated like a startup launch page, with clearer hierarchy, richer surfaces, and a stronger premium presentation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} data-project-card>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-glow"
          >
            Have a project in mind?
          </Link>
        </div>
      </div>
    </section>
  );
}
