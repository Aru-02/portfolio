# S. Arumugam - Premium Developer Portfolio

A modern, responsive, high-performance portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed for **S. Arumugam** (Full Stack Developer & Java Developer) to showcase software engineering skills, practical SaaS platforms (like **ShippingAI**), REST API architectures, and academic credentials to recruiters and engineering managers worldwide.

---

## ✨ Features

- **Dark Navy Theme with Gradient Accents**: Tailored for developer portfolios with blue/purple/cyan ambient lighting.
- **Light & Dark Mode**: Persistent toggle built using `next-themes` and Tailwind CSS `class` strategy.
- **Single Source of Truth**: All personal details, projects, skills, education, and links are managed centrally in `src/data/portfolio.ts`.
- **Verified Fresher Profile**: Honest representation of practical project development, university capstones, and architectural achievements without fake employment titles.
- **Interactive Projects Showcase**:
  - **ShippingAI** (E-commerce shipping automation SaaS platform with multi-courier integrations, NDR, COD reconciliation).
  - **E-commerce Shipping Management** (Backend REST API, label generation, carrier dispatching).
  - **Java Spring Boot Enterprise REST Service** (Enterprise microservice architecture, Spring Security, Hibernate ORM).
- **Working Contact Form**: Interactive input validation (Name, Email, Subject, Message) with real-time feedback and celebration effects (`canvas-confetti`).
- **Real PDF Resume Download**: Includes a valid, formatted PDF resume ready at `/resume.pdf`.
- **Smooth Navigation & ScrollSpy**: Interactive navbar with active section indicators and mobile navigation drawer.
- **Fully Accessible & SEO Optimized**: Meta tags, OpenGraph previews, semantic HTML5, and responsive layouts across mobile, tablet, and desktop.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📁 Project Architecture

```
src/
├── app/
│   ├── globals.css         # Custom animations, ambient glow mesh, theme colors
│   ├── layout.tsx          # Root layout, font loader, SEO metadata, ThemeProvider
│   └── page.tsx            # Main portfolio page composing all sections
├── components/
│   ├── About.tsx           # Academic & engineering story, highlights
│   ├── Contact.tsx         # Validated contact form, direct mail, copy-to-clipboard
│   ├── Education.tsx       # B.E. CSE qualifications (Jayaraj Annapackiam CSI College)
│   ├── Experience.tsx      # Transparent practical & capstone project experience
│   ├── Footer.tsx          # Dynamic copyright, social links, back-to-top
│   ├── Hero.tsx            # Headline, CTA buttons, status indicator, code snapshot
│   ├── Navbar.tsx          # Sticky blur header, mobile drawer, resume link
│   ├── Projects.tsx        # Project showcase, stylized UI mockups, modal details
│   ├── Skills.tsx          # Categorized skills (Frontend, Backend, DB, Tools)
│   ├── ThemeProvider.tsx   # next-themes wrapper
│   └── ThemeToggle.tsx     # Animated Sun/Moon switcher
├── data/
│   └── portfolio.ts        # Central configuration for all data & links
├── lib/
│   └── utils.ts            # Class merging utility (clsx + twMerge)
└── types/
    └── portfolio.ts        # TypeScript interface definitions
public/
└── resume.pdf              # Real downloadable PDF resume file
scripts/
└── generate-resume.js      # Utility script to regenerate resume PDF
```

---

## 🛠️ How to Run Locally

### Prerequisites

Ensure you have **Node.js 18+** installed:
```bash
node -v
npm -v
```

### 1. Clone & Enter Directory
```bash
cd e:/porttfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000) to view the website.

---

## 🧪 Building for Production

Test that there are zero TypeScript or Next.js build errors:

```bash
npm run build
```

Then start the production preview:

```bash
npm run start
```

---

## ☁️ How to Deploy to Vercel (Step-by-Step)

Deploying this portfolio to [Vercel](https://vercel.com/) is straightforward and takes less than 2 minutes:

### Option A: Via GitHub & Vercel Dashboard (Recommended)

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: S. Arumugam developer portfolio"
   ```

2. **Push to GitHub**:
   Create a new repository on your GitHub account (`arumugam-dev` or personal account):
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
   - Click **"Add New..."** &rarr; **"Project"**.
   - Select your GitHub repository.
   - Framework Preset will automatically detect **Next.js**.
   - Click **"Deploy"**.

### Option B: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the interactive prompts to deploy directly from your terminal.

---

## ⚙️ Customization Guide

To update your contact details, resume, links, or projects:

1. **Personal Details & Social Links**:
   Edit `src/data/portfolio.ts` to update your email, GitHub profile, LinkedIn profile, or bio.

2. **Resume PDF**:
   Replace `public/resume.pdf` with your updated resume, or edit `scripts/generate-resume.js` and run:
   ```bash
   node scripts/generate-resume.js
   ```

3. **Project Repositories & Demos**:
   Update `githubUrl` and `liveUrl` inside `src/data/portfolio.ts` for each project.
