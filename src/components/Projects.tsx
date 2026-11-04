"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";
import {
  Sparkles,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  Terminal,
  Activity,
  Box,
  Truck,
  ShieldCheck,
  ChevronRight,
  X,
} from "lucide-react";

export function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Render stylized visual dashboard preview for projects
  const renderProjectVisual = (project: ProjectItem) => {
    if (project.id === "shipping-ai") {
      return (
        <div className="relative w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 via-[#0a1128] to-[#111936] p-4 flex flex-col justify-between overflow-hidden border-b border-white/10 group-hover:border-blue-500/30 transition-colors">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-1.5 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white font-semibold">ShippingAI Platform</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono">
              SaaS Engine
            </span>
          </div>

          {/* Metric Cards Mockup */}
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Orders</div>
              <div className="text-sm sm:text-base font-bold text-white">12,480+</div>
              <div className="text-[9px] text-emerald-400 mt-0.5 font-mono">+18% sync</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Couriers</div>
              <div className="text-sm sm:text-base font-bold text-blue-400">Multi-API</div>
              <div className="text-[9px] text-slate-400 mt-0.5 font-mono">Automated</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">COD Recon</div>
              <div className="text-sm sm:text-base font-bold text-purple-400">99.4%</div>
              <div className="text-[9px] text-purple-300 mt-0.5 font-mono">Verified</div>
            </div>
          </div>

          {/* Bottom Live Tracking Status Bar */}
          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/40 border border-white/5 text-[11px] text-slate-300">
            <div className="flex items-center space-x-2">
              <Truck className="w-3.5 h-3.5 text-blue-400" />
              <span>Realtime NDR &amp; Tracking Webhooks</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">200 OK</span>
          </div>
        </div>
      );
    }

    if (project.id === "ecommerce-shipping-management") {
      return (
        <div className="relative w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 via-[#0d1627] to-[#162238] p-4 flex flex-col justify-between overflow-hidden border-b border-white/10">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="text-slate-200">POST /api/v1/shipments/book</span>
            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px]">
              REST Pipeline
            </span>
          </div>

          <div className="my-auto space-y-2 font-mono text-[11px] text-slate-300 bg-black/40 p-3 rounded-xl border border-white/5">
            <div className="flex items-center justify-between text-slate-400">
              <span>Carrier Booking:</span>
              <span className="text-emerald-400 font-semibold">Allocated</span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>Label Generation:</span>
              <span className="text-blue-400 font-semibold">PDF Stream Ready</span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>PostgreSQL Transactions:</span>
              <span className="text-purple-400 font-semibold">ACID Safe</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Delivery status synchronization &amp; webhook events</span>
          </div>
        </div>
      );
    }

    // Default / Project 3 (Java Spring Boot Enterprise REST Service)
    return (
      <div className="relative w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 via-[#101429] to-[#1c1836] p-4 flex flex-col justify-between overflow-hidden border-b border-white/10">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="text-amber-300 font-semibold">Spring Boot &bull; Hibernate</span>
          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
            Enterprise Arch
          </span>
        </div>

        <div className="my-auto space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px]">
          <div className="text-indigo-400">@RestController @RequestMapping(&quot;/api/v1&quot;)</div>
          <div className="text-slate-300 pl-2">&#123; security: &quot;JWT + Spring Security&quot;, &#125;</div>
          <div className="text-slate-300 pl-2">&#123; orm: &quot;Hibernate JPA Entity Layer&quot;, &#125;</div>
          <div className="text-slate-300 pl-2">&#123; database: &quot;MySQL with Indexing&quot; &#125;</div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="text-amber-400 font-mono">Maven Clean Install</span>
          <span className="text-slate-400 font-mono">Postman Tested</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Software &amp; Full-Stack Projects
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real-world systems, SaaS architecture, and backend services built with modern engineering standards.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header / Mockup */}
                {renderProjectVisual(project)}

                {/* Card Body */}
                <div className="p-6">
                  {/* Category Badge & Title */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md text-xs font-mono text-slate-400 bg-slate-100 dark:bg-white/5">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Highlights preview */}
                  <div className="mt-5 space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-4">
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0">
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-200 dark:border-white/10">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
                      title="Source Code (Placeholder)"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
                      title="Live Demo (Placeholder)"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on links */}
        <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
          💡 Project repository &amp; live demo URLs are configured with editable placeholders in{" "}
          <code className="text-blue-500 font-mono">src/data/portfolio.ts</code> ready to link to your exact GitHub repos.
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl bg-white dark:bg-[#0b1024]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-100 bg-slate-100 dark:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                  {activeModalProject.category} Project
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                  {activeModalProject.subtitle}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Overview
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeModalProject.longDescription || activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Full Feature Architecture
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {activeModalProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2 p-2 rounded-lg bg-slate-50 dark:bg-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-3">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                )}
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
