"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import { PORTFOLIO_DATA, SOCIAL_LINKS } from "@/lib/constants";
import { ArrowRight, Mail, MapPin, Code, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  Github: <Code size={24} />,
  Linkedin: <User size={24} />,
  Mail: <Mail size={24} />,
};

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll("[data-contact-element]");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
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
    <section id="contact" ref={containerRef} className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-40 top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl opacity-40" />
        <div className="absolute bottom-40 left-40 h-96 w-96 rounded-full bg-secondary/15 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16" data-contact-element>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/75">Contact</p>
          <h2 className="mb-4 text-4xl font-bold font-space-grotesk text-foreground md:text-5xl">
            Let’s build something premium and memorable.
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/95">
            Have a project in mind or want to collaborate? The fastest way to reach me is by email or LinkedIn. I’m open to high-quality frontend, product, and motion-focused work.
          </p>
        </div>

        <GlassCard className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="rounded-[1.6rem] border border-border/70 bg-background/45 p-6 shadow-luxury">
                <p className="text-sm uppercase tracking-[0.3em] text-foreground/75">Direct line</p>
                <h3 className="mt-3 text-3xl font-semibold text-foreground">
                  Ready for product launches, portfolio builds, and motion-led interfaces.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/95">
                  If you need a polished landing page, a recruiter-friendly portfolio, or a UI refresh that feels expensive instead of generic, send a message.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <MagneticButton
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-luxury transition-all duration-300 hover:shadow-glow-lg"
                    onClick={() => {
                      window.location.href = `mailto:${PORTFOLIO_DATA.email}`;
                    }}
                  >
                    <Mail size={16} />
                    Email me
                  </MagneticButton>
                  <Link
                    href={PORTFOLIO_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-card/70 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-glow"
                  >
                    <User size={16} />
                    LinkedIn
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/15 p-3">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-foreground/75">Email</p>
                      <Link href={`mailto:${PORTFOLIO_DATA.email}`} className="mt-2 block text-sm text-foreground/95 transition-colors hover:text-primary">
                        {PORTFOLIO_DATA.email}
                      </Link>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-secondary/15 p-3">
                      <MapPin className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-foreground/75">Location</p>
                      <p className="mt-2 text-sm text-foreground/95">{PORTFOLIO_DATA.location}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/75">Social</p>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-3 text-sm font-medium text-foreground/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground"
                      aria-label={link.name}
                    >
                      {iconMap[link.icon]}
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-border/70 bg-[linear-gradient(160deg,rgba(139,92,246,0.16),rgba(6,182,212,0.08),rgba(255,255,255,0.03))] p-6 shadow-luxury">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/75">Availability</p>
                  <h3 className="mt-3 text-3xl font-semibold text-foreground">Open for selective collaborations.</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/95">
                    I’m especially interested in landing pages, portfolio experiences, AI startup interfaces, and frontend systems that need a luxury finish.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "Premium frontend systems",
                    "Motion-first landing pages",
                    "Recruiter-ready portfolios",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-border/70 bg-background/45 px-4 py-3 text-sm text-foreground/95">
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="#hero"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Back to top
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
