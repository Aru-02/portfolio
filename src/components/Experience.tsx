"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolio";
import {
  Briefcase,
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  FolderGit2,
  ShieldCheck,
} from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Development History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Practical Engineering &amp; Project Experience
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Hands-on software development track record showcasing full-stack system architecture, API design, and practical execution.
          </p>
        </div>

        {/* Fresher Transparency Badge */}
        <div className="mb-10 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/20 flex items-start space-x-3.5">
          <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <strong className="font-semibold text-slate-900 dark:text-white">Fresher Profile Transparency:</strong>{" "}
            As an upcoming 2025 Computer Science Engineering graduate, this section highlights my verified practical project engineering experience, full-stack capstone deliveries, and real-world system implementations rather than simulated employment titles.
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-500/30 dark:border-blue-500/20 ml-4 sm:ml-8 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-[#050814] shadow-md shadow-blue-500/50" />

              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                    {item.type}
                  </span>

                  <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Role and Organization */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h3>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                  {item.organization}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-4 space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
