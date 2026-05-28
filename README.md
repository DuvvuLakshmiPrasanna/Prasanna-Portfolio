# Prasanna Portfolio

A polished personal portfolio built with Next.js, TypeScript, and Tailwind CSS. The site highlights projects, skills, experience, certifications, and contact details with a premium animated presentation.

## Overview

This portfolio is designed to feel fast, modern, and recruiter-friendly. It uses a client-side contact form, responsive layouts, smooth scrolling, animated section reveals, and a custom network background for visual depth.

## Live Demo

- GitHub Pages: add your published URL here after deployment
- Vercel preview: https://prasanna-portfolio-18.vercel.app/

## Key Features

- Glassmorphism-inspired UI with layered gradients and soft depth
- Animated hero, section reveals, and motion-led interactions
- Fully responsive layout for mobile, tablet, and desktop
- Smooth navigation with scroll progress and sticky header behavior
- Structured project cards with equal-height layouts and external links
- Client-side contact form using EmailJS for direct inbox delivery
- GitHub Pages-ready static export configuration

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP
- Framer Motion
- Lenis
- Lucide React
- EmailJS

## Local Development

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Production build

```bash
npm run build
```

The project is configured to export a static site, which is what GitHub Pages uses.

## GitHub Pages Deployment

This repository now includes GitHub Pages support through static export and GitHub Actions.

### What is included

- `next.config.ts` is configured for static export
- The site writes static output to `out/`
- GitHub Actions publishes `out/` to GitHub Pages
- The workflow adds `.nojekyll` so the `_next` assets are served correctly

### Deployment steps

1. Push the repository to GitHub.
2. In your repository, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch or run the **Deploy to GitHub Pages** workflow manually.
5. Wait for the workflow to finish, then open the Pages URL shown by GitHub.

### Important note

This deployment uses a static export, so it is perfect for the portfolio UI and contact form as currently implemented with EmailJS. If you later depend on server-only APIs, they will not run on GitHub Pages.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build and export the static site
- `npm run start` - Preview the exported site locally from the `out/` folder
- `npm run lint` - Run ESLint

## Project Structure

- `app/` - App Router pages, layout, and routing
- `components/` - Shared UI components
- `sections/` - Main portfolio sections
- `hooks/` - Custom hooks for scroll and animation behavior
- `lib/` - Portfolio constants and utilities
- `public/` - Static assets

## Contact

The contact section sends messages directly through EmailJS. If you want to change the recipient or template, update the contact section configuration in `sections/ContactSection.tsx`.

## License

Personal portfolio project. All rights reserved.
