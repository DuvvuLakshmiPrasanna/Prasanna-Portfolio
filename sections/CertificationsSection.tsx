"use client";

import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import { CERTIFICATIONS } from "@/lib/constants";
import { BadgeCheck, ArrowUpRight } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-14 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-25" />
        <div className="absolute left-14 bottom-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl md:mb-16">
          <h2 className="mb-4 text-4xl font-bold font-space-grotesk text-foreground md:text-5xl">
            Certifications
          </h2>
          <p className="mb-4 text-sm md:text-base font-medium text-foreground/85">
            Verified learning across web, systems, data, and programming.
          </p>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {CERTIFICATIONS.map((group) => (
            <GlassCard key={group.title} className="flex h-full flex-col gap-5 p-6 sm:p-7">
              <div className="flex items-center gap-3 pb-2">
                <BadgeCheck size={20} className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                {group.items.map((item) =>
                  item.href ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/45 px-4 py-2 text-sm text-foreground/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-glow"
                    >
                      {item.label}
                      <ArrowUpRight size={14} />
                    </Link>
                  ) : (
                    <span
                      key={item.label}
                      className="inline-flex items-center rounded-full border border-border/70 bg-background/45 px-4 py-2 text-sm text-foreground/95"
                    >
                      {item.label}
                    </span>
                  )
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
