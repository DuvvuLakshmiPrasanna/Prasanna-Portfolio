"use client";

import GlassCard from "@/components/GlassCard";
import { EDUCATION } from "@/lib/constants";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl opacity-25" />
        <div className="absolute right-10 bottom-16 h-80 w-80 rounded-full bg-secondary/10 blur-3xl opacity-25" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl md:mb-16">
          <h2 className="mb-4 text-4xl font-bold font-space-grotesk text-foreground md:text-5xl">
            Education
          </h2>
          <p className="mb-4 text-sm md:text-base font-medium text-foreground/85">
            Formal study paired with continuous technical practice.
          </p>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
        </div>

        <div className="space-y-5">
          {EDUCATION.map((item) => (
            <GlassCard key={item.title} className="relative flex flex-col gap-4 p-6 md:p-7">
              <div className="absolute right-4 top-4 rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-foreground/90 shadow-sm">
                {item.duration}
              </div>

              <div className="flex items-start gap-4 pr-24">
                <div className="rounded-2xl bg-primary/15 p-3">
                  <GraduationCap size={22} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-primary">{item.institution}</p>
                  <p className="text-sm leading-7 text-foreground/85">{item.detail}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
