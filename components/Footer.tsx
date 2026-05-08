"use client";

import Link from "next/link";
import { SOCIAL_LINKS, PORTFOLIO_DATA } from "@/lib/constants";
import {
  Code,
  User,
  Mail,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Code size={20} />,
  Linkedin: <User size={20} />,
  Mail: <Mail size={20} />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-surface/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div className="space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-black text-white shadow-glow-lg">
              LP
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Building luxurious, high-performance digital experiences.
            </h3>
            <p className="max-w-xl text-sm leading-7 text-foreground/95">
              Designed for clarity in light mode, depth in dark mode, and strong presentation across recruiter screens, portfolios, and product showcases.
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-foreground/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/75">Navigation</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="#home" className="group inline-flex items-center gap-2 text-foreground/95 transition-colors hover:text-foreground">
                Home <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="#about" className="group inline-flex items-center gap-2 text-foreground/95 transition-colors hover:text-foreground">
                About <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="#projects" className="group inline-flex items-center gap-2 text-foreground/95 transition-colors hover:text-foreground">
                Projects <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="#contact" className="group inline-flex items-center gap-2 text-foreground/95 transition-colors hover:text-foreground">
                Contact <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/75">Get In Touch</h4>
            <div className="space-y-3 text-sm text-foreground/95">
              <Link href={`mailto:${PORTFOLIO_DATA.email}`} className="block transition-colors hover:text-primary">
                {PORTFOLIO_DATA.email}
              </Link>
              <p>{PORTFOLIO_DATA.location}</p>
              <Link href="#contact" className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-semibold text-primary transition-all duration-300 hover:bg-primary/15 hover:shadow-glow">
                Start a project
              </Link>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="flex flex-col gap-3 text-sm text-foreground/85 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {PORTFOLIO_DATA.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

