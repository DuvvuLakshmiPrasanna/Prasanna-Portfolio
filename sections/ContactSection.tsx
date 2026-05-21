"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import GlassCard from "@/components/GlassCard";
import { PORTFOLIO_DATA, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, MapPin, Code, User, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "6tFOqZqud7to1YaLl";
const EMAILJS_SERVICE_ID = "service_lxq1ibn";
const EMAILJS_TEMPLATE_ID = "template_tnt0a6b";

emailjs.init(EMAILJS_PUBLIC_KEY);

const iconMap: Record<string, React.ReactNode> = {
  Github: <Code size={24} />,
  Linkedin: <User size={24} />,
  Mail: <Mail size={24} />,
};

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [messageData, setMessageData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sendFeedback, setSendFeedback] = useState<string | null>(null);

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
        scrollTrigger: { trigger: container, start: "top center+=100", toggleActions: "play none none reverse" },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger && container.contains(trigger.trigger as Node)) trigger.kill();
      });
    };
  }, []);

  const handleChange = (field: keyof typeof messageData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessageData((current) => ({ ...current, [field]: event.target.value }));
    if (sendFeedback) setSendFeedback(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!messageData.name.trim() || !messageData.email.trim() || !messageData.message.trim()) {
      setSendFeedback("Please fill in your name, email, and message.");
      return;
    }

    setIsSending(true);
    setSendFeedback("Sending message...");

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: messageData.name,
        from_email: messageData.email,
        message: messageData.message,
      });

      setSendFeedback("Message sent to my inbox. I'll get back to you soon! ✓");
      setMessageData({ name: "", email: "", message: "" });
    } catch (error) {
      setSendFeedback(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" ref={containerRef} className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-40 top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl opacity-40" />
        <div className="absolute bottom-40 left-40 h-96 w-96 rounded-full bg-secondary/15 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16" data-contact-element>
          <h2 className="mb-4 text-4xl font-bold font-space-grotesk text-foreground md:text-5xl">Contact</h2>
          <p className="mb-4 text-sm md:text-base font-medium text-foreground/85">Let's build something premium and memorable.</p>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-cyan-300" />
        </div>

        <GlassCard className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-foreground/75">Direct line</p>
                <h3 className="mt-3 text-3xl font-semibold text-foreground">Ready for product launches, portfolio builds, and motion-led interfaces.</h3>
                <p className="mt-4 text-sm leading-7 text-foreground/95">If you need a polished landing page, a recruiter-friendly portfolio, or a UI refresh that feels expensive instead of generic, send a message.</p>
                <p className="mt-4 font-semibold text-foreground/95">{PORTFOLIO_DATA.email}</p>
              </div>

              <div className="grid gap-3 grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/65">Email</p>
                  <Link href={`mailto:${PORTFOLIO_DATA.email}`} className="mt-2 block text-sm text-foreground/95 transition-colors hover:text-primary">{PORTFOLIO_DATA.email}</Link>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/65">Location</p>
                  <p className="mt-2 text-sm text-foreground/95">{PORTFOLIO_DATA.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium text-foreground/95 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-glow" aria-label={link.name}>
                    {iconMap[link.icon]}
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-border/70 bg-[linear-gradient(160deg,rgba(139,92,246,0.16),rgba(6,182,212,0.08),rgba(255,255,255,0.03))] p-6 shadow-luxury">
              <div className="flex h-full flex-col gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/75">Direct message</p>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground">Send a message straight to my inbox.</h3>
                  <p className="mt-3 text-sm text-foreground/90">Fill this form and your message will be sent directly to my inbox.</p>
                </div>

                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/75">Your name</span>
                      <input type="text" name="name" value={messageData.name} onChange={handleChange("name")} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/40" placeholder="Enter your name" required />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/75">Your email</span>
                      <input type="email" name="email" value={messageData.email} onChange={handleChange("email")} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/40" placeholder="Enter your email" required />
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/75">Message</span>
                    <textarea name="message" value={messageData.message} onChange={handleChange("message")} rows={8} className="rounded-2xl border border-border/70 bg-background/55 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/40" placeholder="Write your message here" required />
                  </label>

                  <button type="submit" disabled={isSending} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-70">
                    <Send size={16} />
                    {isSending ? "Sending..." : "Send message"}
                  </button>

                  {sendFeedback ? <p className="text-sm text-foreground/80">{sendFeedback}</p> : null}
                </form>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
