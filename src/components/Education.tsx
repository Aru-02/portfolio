"use client";

import { motion } from "framer-motion";
import { educationData, personalInfo } from "@/data/portfolio";
import {
  GraduationCap,
  Sparkles,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  Languages,
} from "lucide-react";

export function Education() {
  const edu = educationData[0];

  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Software Engineering",
    "Computer Networks",
    "Web Technology & Cloud Concepts",
    "System Design Fundamentals",
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Strong foundational computer science degree coupled with persistent modern software skill acquisition.
          </p>
        </div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
        >
          {/* Top Decorative Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {edu.field}
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="inline-flex sm:flex-col items-center sm:items-end justify-between sm:justify-center p-3 rounded-xl bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10">
              <span className="text-[11px] uppercase font-mono text-slate-500 dark:text-slate-400">
                Cumulative CGPA
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                {edu.cgpa}
              </span>
            </div>
          </div>

          {/* College and Location Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-600 dark:text-slate-300">
            <div className="font-semibold text-slate-900 dark:text-white">
              {edu.institution}
            </div>
            <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>{edu.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>{edu.period} (Graduation: {edu.graduationYear})</span>
            </div>
          </div>

          {/* Coursework & Modules */}
          <div className="mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center space-x-2 mb-3">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span>Core Computer Science Disciplines</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {coursework.map((course) => (
                <div
                  key={course}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs font-medium text-slate-800 dark:text-slate-200"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Languages */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>Academic Focus &amp; Practical Application</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-2">
                <Languages className="w-4 h-4 text-purple-500" />
                <span>Communication &amp; Global Readiness</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Fluent in English (professional technical communication, writing, and documentation) and Tamil (native fluency). Eager to collaborate with distributed international engineering teams across global timezones.
              </p>
              <div className="flex gap-2">
                {personalInfo.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
