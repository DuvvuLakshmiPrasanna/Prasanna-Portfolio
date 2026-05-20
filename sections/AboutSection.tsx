"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GlassCard from "@/components/GlassCard";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { TrendingUp, Code2, Zap, Coins } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Role {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const roles: Role[] = [
  {
    title: "Data Science Aspirant",
    description: "Exploring ML and data-driven solutions",
    icon: <TrendingUp size={20} />,
  },
  {
    title: "Full Stack Developer",
    description: "Building complete, scalable applications",
    icon: <Code2 size={20} />,
  },
  {
    title: "Software Engineer",
    description: "Writing clean, maintainable code",
    icon: <Zap size={20} />,
  },
  {
    title: "Blockchain Enthusiast",
    description: "Interested in Web3 & decentralized systems",
    icon: <Coins size={20} />,
  },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Animate left column
    gsap.fromTo(
      content.querySelector(".about-left"),
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: container,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate right column cards
    gsap.fromTo(
      content.querySelectorAll(".about-role"),
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="about-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 leading-tight text-foreground">
                Full-stack Developer
              </h2>
              <p className="text-sm md:text-base leading-7 text-foreground/85 mb-8">
                I build production-ready web & mobile applications with clean architecture and scalable design. B.Tech CSE (Data Science) exploring where development meets machine learning and data science. Beyond coding, I'm passionate about problem-solving, continuous learning, and building solutions that create real impact.
              </p>
              <p className="text-sm md:text-base leading-7 text-foreground/85">
                Strong foundation in Data Structures, Algorithms, System Design, and OOP principles. Proficient in full-stack development, REST API design, and database optimization. I thrive in collaborative environments and believe in writing maintainable code that users love.
              </p>
            </div>

            {/* Right Column - Role Grid */}
            <div className="grid grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <GlassCard
                  key={index}
                  className="about-role flex h-full flex-col p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    {role.icon}
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-foreground mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm leading-5 text-foreground/75">
                    {role.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
