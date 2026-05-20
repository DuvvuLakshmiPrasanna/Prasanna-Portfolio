"use client";

import { useEffect } from "react";
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
import ContactSection from "@/sections/ContactSection";
import { useLenis } from "@/hooks/useLenis";

export default function Home() {
  useLenis();

  useEffect(() => {
    // Prevent scroll on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative isolate min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <NetworkCanvas />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
