"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/data/portfolio";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Database,
  Layers,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "mail":
        return <Mail className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 dark:border-blue-400/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities & Relocation</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
            {personalInfo.role}
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {personalInfo.tagline} Focused on Java, Spring Boot, React, Next.js and enterprise database architectures with a passion for clean code and scalable solutions.
          </p>

          {/* Meta Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>BE CSE &bull; Class of 2025</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="S_Arumugam_Resume.pdf"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-blue-500" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center space-x-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mr-2">
              Connect:
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/80 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all duration-200 hover:scale-110"
                aria-label={social.label}
                title={social.label}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual Developer Card & Profile Placeholder */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            {/* Glowing Backdrop Border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-40 blur-lg group-hover:opacity-80 transition duration-1000"></div>

            {/* Main Interactive Card */}
            <div className="relative rounded-2xl glass-card p-6 shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" />
                  <span>developer.ts</span>
                </div>
              </div>

              {/* Profile Avatar / Hero Visual */}
              <div className="my-6 flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-2xl p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-xl">
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex flex-col items-center justify-center text-white overflow-hidden relative">
                    {/* Visual Stylized Avatar Placeholder */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold tracking-tight shadow-inner">
                      SA
                    </div>
                    <span className="text-[11px] font-mono mt-1 text-slate-300">S. Arumugam</span>
                  </div>

                  {/* Tech Floating Badges */}
                  <div className="absolute -top-2 -right-2 p-1.5 rounded-lg bg-[#0c1228] border border-blue-500/40 shadow-lg text-blue-400 animate-bounce">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 p-1.5 rounded-lg bg-[#0c1228] border border-purple-500/40 shadow-lg text-purple-400">
                    <Database className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    S. Arumugam
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                    Software Engineer &bull; Fresher 2025
                  </p>
                </div>
              </div>

              {/* Code Snippet Window */}
              <div className="rounded-xl bg-slate-950/80 dark:bg-black/50 p-3.5 font-mono text-xs text-slate-300 border border-slate-800">
                <div className="text-slate-500">// Technical Competency Snapshot</div>
                <div className="mt-1">
                  <span className="text-purple-400">const</span> developer = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">primaryLanguage</span>:{" "}
                  <span className="text-emerald-300">&quot;Java &amp; TypeScript&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">backend</span>:{" "}
                  <span className="text-emerald-300">&quot;Spring Boot, Node.js&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">frontend</span>:{" "}
                  <span className="text-emerald-300">&quot;React, Next.js, Tailwind&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">databases</span>:{" "}
                  <span className="text-emerald-300">&quot;PostgreSQL, MySQL, Redis&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">openForOpportunities</span>:{" "}
                  <span className="text-amber-400">true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Feature Pills */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs font-medium">
                <div className="p-2 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 text-blue-600 dark:text-blue-300 flex items-center justify-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Full-Stack Ready</span>
                </div>
                <div className="p-2 rounded-lg bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 text-purple-600 dark:text-purple-300 flex items-center justify-center space-x-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>REST &amp; DB Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
