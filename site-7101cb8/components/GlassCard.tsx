import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/70 bg-card/95 p-6 text-foreground shadow-luxury backdrop-blur-2xl transition-all duration-500",
        hoverEffect && "hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow-lg",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-70 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-[0.08] pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
