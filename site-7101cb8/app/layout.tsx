import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import { Syne, Space_Mono } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Prasanna Yadav - Full Stack Developer",
  description: "Portfolio showcasing projects, skills, and experience for Prasanna Yadav.",
  keywords: "Developer, Full Stack, React, Next.js, TypeScript, Web Development, Data Science, Node.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prasanna-portfolio.vercel.app",
    siteName: "Prasanna Yadav",
    title: "Prasanna Yadav - Full Stack Developer",
    description: "Portfolio showcasing full-stack projects, skills, and experience.",
    images: [{
      url: "https://prasanna-portfolio.vercel.app/og-image.png",
      width: 1200,
      height: 630,
      alt: "Prasanna Yadav Portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanna Yadav - Full Stack Developer",
    description: "Portfolio with live projects.",
    creator: "@prasannayadav",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0d1b2a" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <Script
          id="init-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.style.colorScheme = 'dark';
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
