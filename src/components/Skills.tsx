"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import {
  Sparkles,
  Code2,
  Server,
  Database,
  Wrench,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Frontend Development":
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case "Backend Development":
        return <Server className="w-5 h-5 text-indigo-500" />;
      case "Databases & Caching":
        return <Database className="w-5 h-5 text-purple-500" />;
      case "Tools & DevOps":
        return <Wrench className="w-5 h-5 text-cyan-500" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Technologies &amp; Tooling
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical competencies utilized in developing production-grade web systems, RESTful microservices, and databases.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Tags List */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center space-x-2 px-3 py-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/5 hover:border-blue-500/40 hover:bg-white dark:hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest Competency Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
            * All listed technologies reflect hands-on project implementations, academic coursework, and practical coding experience.
          </p>
        </div>
      </div>
    </section>
  );
}
