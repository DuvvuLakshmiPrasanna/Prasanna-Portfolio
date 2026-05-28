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

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://prasanna-portfolio.vercel.app").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Duvvu Lakshmi Prasanna - Full Stack Developer",
  description: "Portfolio showcasing projects, skills, and experience for Duvvu Lakshmi Prasanna.",
  keywords: "Developer, Full Stack, React, Next.js, TypeScript, Web Development, Data Science, Node.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Duvvu Lakshmi Prasanna",
    title: "Duvvu Lakshmi Prasanna - Full Stack Developer",
    description: "Portfolio showcasing full-stack projects, skills, and experience.",
    images: [{
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "Duvvu Lakshmi Prasanna Portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duvvu Lakshmi Prasanna - Full Stack Developer",
    description: "Portfolio with live projects.",
    creator: "@duvvulakshmiprasanna",
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <Script
          id="init-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.style.colorScheme = theme;
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
