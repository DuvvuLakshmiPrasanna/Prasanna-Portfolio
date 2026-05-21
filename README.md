# Prasanna Portfolio

A modern, animated portfolio built with Next.js and TypeScript to showcase projects, skills, experience, certifications, and contact details in a polished, recruiter-friendly format.

## Live Demo

- **Website:** https://prasanna-portfolio.vercel.app

## Highlights

- **Premium UI:** glassmorphism styling, subtle gradients, and smooth motion.
- **Animated Experience:** GSAP-powered section reveals and interactive project cards.
- **Responsive Layout:** optimized for mobile, tablet, and desktop viewing.
- **Smart Navigation:** sticky navbar, scroll progress bar, and smooth scrolling.
- **Projects Showcase:** equal-height cards with aligned action buttons and external links.
- **Contact Flow:** integrated contact form with email delivery support.

## Tech Stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4, custom design tokens, responsive utility classes
- **Animation:** GSAP, Framer Motion, Lenis
- **Icons:** Lucide React, Font Awesome
- **Email:** EmailJS, Nodemailer

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev
```
Start the development server.

```bash
npm run build
```
Create a production build.

```bash
npm run start
```
Serve the production build locally.

```bash
npm run lint
```
Run ESLint checks.

## Contact Form

The contact section is wired for email delivery and can use SMTP fallback through the API route at `/api/contact`.

If you want to configure custom SMTP credentials, add a `.env.local` file with the required mail settings used by the API route.

## Project Structure

- `app/` — App Router pages, layout, and API routes
- `components/` — Shared UI components
- `sections/` — Main portfolio sections
- `hooks/` — Custom hooks for scrolling and animation
- `lib/` — Portfolio data and utility helpers
- `public/` — Static assets and project images

## Deployment

This project is ready for Vercel deployment.

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Deploy using the default Next.js settings.

## License

Personal portfolio project. All rights reserved.