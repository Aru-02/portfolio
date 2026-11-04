"use client";

import Link from "next/link";
import { personalInfo, navLinks, socialLinks } from "@/data/portfolio";
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-[#040711] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/10">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="#home"
              className="group flex items-center space-x-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-extrabold tracking-wider">
                ARUMUGAM<span className="text-blue-500">.DEV</span>
              </span>
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Full Stack Developer &bull; Java Developer &bull; Building modern scalable web applications and REST APIs.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                aria-label={social.label}
              >
                {social.name === "GitHub" && <Github className="w-4 h-4" />}
                {social.name === "LinkedIn" && <Linkedin className="w-4 h-4" />}
                {social.name === "Email" && <Mail className="w-4 h-4" />}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4 text-center">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Engineered with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
