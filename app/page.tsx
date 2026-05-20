"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
// CursorGlow removed to eliminate floating badge overlay
import ScrollProgress from "@/components/ScrollProgress";
import NetworkCanvas from "@/components/NetworkCanvas";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProgrammingAchievementsSection from "../sections/ProgrammingAchievementsSection";
import EducationSection from "../sections/EducationSection";
import CertificationsSection from "../sections/CertificationsSection";
import ContactSection from "@/sections/ContactSection";
import { useLenis } from "@/hooks/useLenis";
import { ChevronDown } from "lucide-react";

export default function Home() {
  useLenis();
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    // Prevent scroll on initial load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setShowScrollHint(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative isolate min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <NetworkCanvas />
      <Navbar />

      <div
        className={`fixed bottom-8 left-1/2 z-[80] flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/82 transition-all duration-300 ${
          showScrollHint ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        <span className="font-space-mono text-[0.72rem] uppercase tracking-[0.4em] sm:text-xs">Scroll to explore</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ProgrammingAchievementsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
