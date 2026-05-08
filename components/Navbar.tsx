"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Menu,
  MoonStar,
  SunMedium,
  X,
} from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { useTheme } from "@/app/ThemeProvider";
import { cn } from "@/lib/utils";

function BrandMark() {
  return (
    <svg viewBox="0 0 92 40" className="h-10 w-auto" aria-hidden="true">
      <defs>
        <linearGradient id="py-mark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--secondary)" />
        </linearGradient>
      </defs>
      <text x="0" y="31" fill="url(#py-mark)" fontFamily="var(--font-syne, sans-serif)" fontSize="30" fontWeight="800" letterSpacing="-4">
        P
      </text>
      <text x="24" y="31" fill="url(#py-mark)" fontFamily="var(--font-syne, sans-serif)" fontSize="30" fontWeight="800" letterSpacing="-4">
        Y
      </text>
      <path d="M5 35H69" stroke="url(#py-mark)" strokeLinecap="round" strokeWidth="2.5" opacity="0.85" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");
          if (!id) return;

          const matched = NAVIGATION_ITEMS.find((item) => item.id === id);
          if (matched) setActiveSection(matched.id);
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.15 }
    );

    NAVIGATION_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.replace("#", "");
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinkClasses = (itemId: string) =>
    cn(
      "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
      activeSection === itemId ? "text-foreground" : "text-foreground/95 hover:text-foreground"
    );

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/70 bg-surface/80 px-4 py-3 shadow-luxury backdrop-blur-2xl lg:px-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-[0.25em] text-foreground">
          <BrandMark />
          <span className="sr-only">Prasanna Yadav</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/60 p-1 lg:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.id} href={item.href} onClick={() => handleNavClick(item.href)} className={navLinkClasses(item.id)}>
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/18 to-secondary/18 shadow-glow"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className="hidden items-center gap-2 rounded-full border border-border/70 bg-gradient-to-r from-primary/15 to-secondary/15 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow lg:inline-flex"
          >
            <Download size={16} />
            Resume
            <ArrowUpRight size={14} />
          </Link>

          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-foreground shadow-luxury transition-colors duration-300 hover:border-primary/30 hover:shadow-glow"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -40, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 40, scale: 0.7 }}
                transition={{ duration: 0.28 }}
                className="flex items-center justify-center"
              >
                {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-foreground shadow-luxury transition-all duration-300 hover:border-primary/30 hover:shadow-glow lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.25 }} className="flex items-center justify-center">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-border/70 bg-surface/95 p-4 shadow-luxury backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300",
                    activeSection === item.id
                      ? "bg-primary/15 text-foreground"
                      : "text-foreground/95 hover:bg-card/80 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Link
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/70 bg-gradient-to-r from-primary/15 to-secondary/15 px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:shadow-glow"
              >
                <Download size={16} />
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
