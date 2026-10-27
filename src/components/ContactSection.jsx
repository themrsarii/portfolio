import React, { useState } from 'react';
import {
  Mail, Copy, Check, Send,
  ArrowUpRight, MessageSquare, FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export const ContactSection = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const emailAddress = import.meta.env.VITE_CONTACT_EMAIL || "the.mrsarii@gmail.com";
  const githubUrl = import.meta.env.VITE_GITHUB_URL || "https://github.com/themrsarii";
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/themrsarii/?isSelfProfile=true";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366F1', '#8B5CF6', '#22C55E']
    });

    setFormSubmitted(true);

    // Open user's default mail client as reliable fallback
    const mailtoUri = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry: ' + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUri, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wide bg-[#11151C] text-emerald-400 border border-emerald-500/30 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            AVAILABLE FOR WORK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F7FA] tracking-tight">
            Let's build something useful.
          </h2>
          <p className="text-base sm:text-lg text-[#98A1AF] mt-3 leading-relaxed">
            Open to software engineering opportunities, internships, collaborations, and interesting product ideas at high-performing technology teams.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Contact Info & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0C0F14] border border-[#252B36] space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#F5F7FA]">Direct Communication</h3>
                <p className="text-xs text-[#98A1AF] mt-1">
                  Preferred channels for recruiter inquiries and engineering discussions.
                </p>
              </div>

              {/* Email One-Click Copy Card */}
              <div className="p-4 rounded-xl bg-[#11151C] border border-[#252B36] flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-[#0C0F14] border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-mono text-[#98A1AF]">Primary Email</span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#F5F7FA] truncate block">
                      {emailAddress}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#151B24] hover:bg-[#1F2736] border border-[#252B36] text-[#98A1AF] hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#11151C] border border-[#252B36] hover:border-indigo-500/40 text-xs font-semibold text-[#F5F7FA] transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-indigo-400" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#98A1AF] group-hover:text-white transition-colors" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#11151C] border border-[#252B36] hover:border-indigo-500/40 text-xs font-semibold text-[#F5F7FA] transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#98A1AF] group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Curriculum Vitae / Resume Trigger Card */}
              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#11151C] border border-[#252B36] hover:border-indigo-500/50 text-xs font-semibold text-[#F5F7FA] transition-all group hover:bg-[#151B24]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="block font-semibold leading-tight text-[#F5F7FA]">Resume</span>
                      <span className="block text-[11px] font-mono text-indigo-400">Preview PDF & Download</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#98A1AF] group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              )}

              {/* Response Time Indicator */}
              <div className="p-3 rounded-lg bg-[#090C10] border border-[#252B36] text-[11px] font-mono text-neutral-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0F14] border border-[#252B36]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#F5F7FA]">Send a Direct Message</h3>
                  <p className="text-xs text-[#98A1AF] mt-0.5">
                    Start a conversation regarding full-stack roles or projects.
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-indigo-400" />
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#11151C] border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-100">Message Dispatched!</h4>
                  <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                    Thank you for reaching out. Your default email client was opened with the message drafted, or you can write directly to {emailAddress}.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 text-xs font-mono text-indigo-400 bg-[#0C0F14] border border-[#252B36] rounded-lg mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#98A1AF] mb-1.5">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#11151C] border border-[#252B36] text-sm text-[#F5F7FA] placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#98A1AF] mb-1.5">
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#11151C] border border-[#252B36] text-sm text-[#F5F7FA] placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#98A1AF] mb-1.5">
                      Subject / Opportunity
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="MERN Stack Developer Role / Technical Project"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#11151C] border border-[#252B36] text-sm text-[#F5F7FA] placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#98A1AF] mb-1.5">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the team, role requirements, or project vision..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#11151C] border border-[#252B36] text-sm text-[#F5F7FA] placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
