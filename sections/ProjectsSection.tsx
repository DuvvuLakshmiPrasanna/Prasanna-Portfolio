"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import { PROJECTS } from "@/lib/constants";
import { Atom, Braces, Code2, Database, ExternalLink, Flame, LayoutDashboard, Palette, Server, Sparkles, Workflow } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function tagIcon(tag: string) {
  switch (tag) {
    case "HTML":
      return <Braces size={12} />;
    case "CSS":
      return <Palette size={12} />;
    case "JavaScript":
      return <Code2 size={12} />;
    case "Node.js":
      return <Server size={12} />;
    case "REST API":
    case "Express":
      return <Workflow size={12} />;
    case "LLM":
      return <Sparkles size={12} />;
    case "Firebase":
      return <Flame size={12} />;
    case "React":
      return <Atom size={12} />;
    case "Redux":
      return <LayoutDashboard size={12} />;
    case "Zustand":
    case "Recoil":
      return <Database size={12} />;
    default:
      return <Sparkles size={12} />;
  }
}

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/45 px-3 py-1 text-xs font-medium text-foreground/95 transition-colors duration-300 hover:border-primary/30">
      {tagIcon(tag)}
      {tag}
    </span>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

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
      <GlassCard className="flex h-full flex-col p-6 transition-all duration-300 hover:shadow-glow-lg">
        <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-foreground/60">
          <span>Project {project.id}</span>
        </div>

        <h3 className="mb-4 text-2xl font-semibold leading-tight text-foreground sm:text-[1.7rem]">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-6 text-foreground/95 line-clamp-3 min-h-[4.5rem]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>

        <div className="flex gap-3 pt-6 mt-auto">
            <Link
              href={project.live || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
            >
              <ExternalLink size={16} />
              Live Demo
            </Link>
            <Link
              href={project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-card/70 px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <Code2 size={16} />
              GitHub Repo
            </Link>
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
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 text-foreground">
            Projects
          </h2>
          <p className="mb-4 text-sm md:text-base font-medium text-foreground/85">
            Case studies presented like premium product launches.
          </p>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
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
