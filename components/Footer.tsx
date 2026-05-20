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
    <footer className="border-t border-border/60 bg-surface/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 md:py-6">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.85fr_0.85fr] lg:items-start lg:gap-12">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-foreground/55">Portfolio</p>
            <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-[1.35rem]">
              Designing polished, reliable experiences with strong technical depth.
            </h3>
            <p className="max-w-xl text-sm leading-6 text-foreground/65">
              A compact closing section for clear navigation, direct contact, and a clean professional finish.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/72">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-center">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/55">Navigate</h4>
            <nav className="mt-3 grid gap-2 text-sm">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Achievements", "#achievements"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="group inline-flex items-center gap-2 text-foreground/74 transition-colors hover:text-foreground">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:justify-self-end">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/55">Get In Touch</h4>
            <div className="mt-3 space-y-2 text-sm text-foreground/74">
              <Link href={`mailto:${PORTFOLIO_DATA.email}`} className="block transition-colors hover:text-foreground">
                {PORTFOLIO_DATA.email}
              </Link>
              <p className="text-foreground/66">{PORTFOLIO_DATA.location}</p>
              <Link href="#contact" className="inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-foreground/85">
                Start a project
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mt-4 flex flex-col gap-1.5 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {PORTFOLIO_DATA.name}. All rights reserved.</p>
          <p className="max-w-xl text-foreground/50">
            Built for clarity, speed, and a refined professional finish.
          </p>
        </div>
      </div>
    </footer>
  );
}

