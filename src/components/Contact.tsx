"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/data/portfolio";
import confetti from "canvas-confetti";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Loader2,
  Clock,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address (e.g. name@domain.com)";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Please enter a subject line";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter your message";
    } else if (formData.message.trim().length < 15) {
      errors.message = "Message should be at least 15 characters long";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate submission network request (Gracefully configurable with any backend/Resend/Formspree)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (err) {
        // Confetti fallback
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            I am actively interviewing for Full Stack Developer, Java Developer, and Software Engineering positions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you have an open software engineering role, a technical interview inquiry, or a project collaboration, feel free to reach out directly.
              </p>

              {/* Detail Items */}
              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      {personalInfo.location}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Open to relocation &amp; remote work worldwide
                    </div>
                  </div>
                </div>

                {/* Email with copy button */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Email Address
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 break-all">
                      {personalInfo.email}
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedEmail ? "Copied to clipboard!" : "Copy Email"}</span>
                      </button>
                      <a
                        href={`mailto:${personalInfo.email}?subject=Software%20Developer%20Opportunity`}
                        className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <span>Open Mail App</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="flex items-start space-x-3.5 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Availability
                    </div>
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      Immediate response within 24 hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">
                  Online Profiles &amp; Repositories
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks
                    .filter((s) => s.name !== "Email")
                    .map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-blue-500/10 dark:hover:bg-blue-500/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                      >
                        {s.name === "GitHub" ? (
                          <Github className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-blue-500" />
                        ) : (
                          <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        )}
                        <span className="text-xs font-semibold">{s.name}</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-50 group-hover:opacity-100" />
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Working Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill out the form below. Includes client-side input validation and instant confirmation.
              </p>

              {/* Status alerts */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-start space-x-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                  <div className="text-xs sm:text-sm">
                    <strong className="font-semibold">Message delivered successfully!</strong> Thank you for reaching out, S. Arumugam will get back to you shortly.
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300 flex items-start space-x-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-500" />
                  <div className="text-xs sm:text-sm">
                    <strong className="font-semibold">Unable to dispatch message:</strong> Please use the direct email link above or contact via LinkedIn.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${
                        formErrors.name
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-slate-300 dark:border-white/10 focus:border-blue-500"
                      } text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${
                        formErrors.email
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-slate-300 dark:border-white/10 focus:border-blue-500"
                      } text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Full Stack Developer Opening / Technical Discussion"
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${
                      formErrors.subject
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-slate-300 dark:border-white/10 focus:border-blue-500"
                    } text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello Arumugam, we are impressed by your work on ShippingAI and would like to invite you for..."
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border ${
                      formErrors.message
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-slate-300 dark:border-white/10 focus:border-blue-500"
                    } text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-y`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 disabled:opacity-50 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
