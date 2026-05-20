"use client";

import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import { ACHIEVEMENTS } from "@/lib/constants";
import { ArrowUpRight, Trophy } from "lucide-react";

export default function ProgrammingAchievementsSection() {
  return (
    <section id="achievements" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-12 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl opacity-25" />
        <div className="absolute right-12 bottom-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl opacity-25" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl md:mb-16">
          <h2 className="mb-4 text-4xl font-bold font-space-grotesk text-foreground md:text-5xl">
            Programming Achievements
          </h2>
          <p className="mb-4 text-sm md:text-base font-medium text-foreground/85">
            Competitive programming and problem-solving milestones.
          </p>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {ACHIEVEMENTS.map((achievement) => (
            <GlassCard key={achievement.label} className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70">
                  <Trophy size={14} className="text-primary" />
                  {achievement.label}
                </div>
                <Link
                  href={achievement.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card/70 p-2 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-glow"
                  aria-label={`View ${achievement.label} profile`}
                >
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="mt-4">
                <p className="text-sm leading-7 text-foreground/90">{achievement.text}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
