"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import {
  GraduationCap,
  Server,
  Layout,
  Database,
  Globe2,
  Sparkles,
  Cpu,
  CheckCircle,
} from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Server className="w-5 h-5 text-blue-500" />,
      title: "Java & Backend Architecture",
      description:
        "Building scalable enterprise services, RESTful microservices, and secure APIs using Java, Spring Boot, Hibernate, and Node.js.",
    },
    {
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      title: "Modern Full Stack Web",
      description:
        "Crafting responsive, high-performance web applications with React, Next.js, TypeScript, and Tailwind CSS.",
    },
    {
      icon: <Database className="w-5 h-5 text-purple-500" />,
      title: "Database & System Design",
      description:
        "Designing relational schemas (PostgreSQL, MySQL) and caching architectures (Redis) ensuring data integrity and query efficiency.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-500" />,
      title: "Scalable Solutions",
      description:
        "Passionate about logistics automation, API integrations, third-party services, and writing maintainable, testable code.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Scalable Software &amp; Modern Web Systems
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A passionate Computer Science Engineer combining strong academic fundamentals with practical full-stack project execution.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story / Intro */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <span>Who I Am</span>
              </h3>

              <p>
                {personalInfo.summary}
              </p>

              <p>
                My journey in computer science has been driven by hands-on engineering. Rather than just understanding theoretical concepts, I have engineered practical SaaS solutions like <strong className="text-slate-900 dark:text-white font-semibold">ShippingAI</strong>—an e-commerce shipping automation system integrating courier APIs, order dispatching, webhooks, and Redis caching.
              </p>

              <p>
                I thrive in environments that challenge me to solve complex architectural problems, optimize database queries, and deliver intuitive frontend experiences. I am actively seeking software developer, Java developer, and full-stack engineering roles locally and internationally.
              </p>

              {/* Quick Details Bar */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Education</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      B.E. CSE (2025) &bull; CGPA 7.4
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Languages</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {personalInfo.languages.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-200 dark:border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
