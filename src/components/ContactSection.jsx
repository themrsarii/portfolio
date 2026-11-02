import React, { useState } from 'react';
import {
  Mail, Copy, Check, Send,
  ArrowUpRight, FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

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

    setFormSubmitted(true);

    const mailtoUri = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry: ' + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUri, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F7F7F5] dark:bg-[#0E0F13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E8E8] dark:border-[#222429] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A1A1AA]">
                Contact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
              Get In Touch
            </h2>
            <p className="text-base text-[#666666] dark:text-[#A1A1AA] mt-2 max-w-xl leading-relaxed">
              Feel free to reach out for project inquiries, engineering roles, or just to say hi.
            </p>
          </div>

          <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-white dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429] px-3 py-1.5 rounded-md flex items-center gap-2 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Available for Work</span>
          </div>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Contact Info & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#171717] dark:text-[#EDEDED]">Contact Information</h3>
                <p className="text-xs text-[#666666] dark:text-[#A1A1AA] mt-1 leading-relaxed">
                  Reach out directly by email or connect on LinkedIn and GitHub.
                </p>
              </div>

              {/* Email One-Click Copy Card */}
              <div className="p-4 rounded-xl bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-md bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] flex items-center justify-center text-[#171717] dark:text-[#EDEDED] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-mono text-[#595959] dark:text-[#A1A1AA]">Primary Email</span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#EDEDED] truncate block">
                      {emailAddress}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-md bg-white dark:bg-[#111216] hover:bg-[#EAEAEA] dark:hover:bg-[#202228] border border-[#E8E8E8] dark:border-[#222429] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-2 pt-2">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-white dark:bg-[#141418] border border-[#E8E8E8] dark:border-[#222429] hover:border-[#D4D4D4] dark:hover:border-[#323640] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <div>
                      <span className="text-xs font-bold text-[#171717] dark:text-[#EDEDED] block">LinkedIn</span>
                      <span className="text-[11px] font-mono text-[#595959] dark:text-[#A1A1AA]">Professional Network</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#595959] dark:text-[#A1A1AA] group-hover:text-[#171717] dark:group-hover:text-white transition-colors" />
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-white dark:bg-[#141418] border border-[#E8E8E8] dark:border-[#222429] hover:border-[#D4D4D4] dark:hover:border-[#323640] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[#171717] dark:text-[#EDEDED]" />
                    <div>
                      <span className="text-xs font-bold text-[#171717] dark:text-[#EDEDED] block">GitHub</span>
                      <span className="text-[11px] font-mono text-[#595959] dark:text-[#A1A1AA]">@themrsarii</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#595959] dark:text-[#A1A1AA] group-hover:text-[#171717] dark:group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Quick Resume Link */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-between p-3.5 rounded-lg bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-xs font-medium text-[#171717] dark:text-[#EDEDED] hover:bg-[#EAEAEA] dark:hover:bg-[#202228] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#666666] dark:text-[#A1A1AA]" />
                    <span>View & Download Resume (CV)</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#595959] dark:text-[#A1A1AA]">PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] shadow-sm">
              <h3 className="text-lg font-bold text-[#171717] dark:text-[#EDEDED]">Send a Message</h3>
              <p className="text-xs text-[#666666] dark:text-[#A1A1AA] mt-1 mb-6">
                Send a message below and I will get back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#171717] dark:text-[#EDEDED]">Email Ready</h4>
                  <p className="text-xs text-[#666666] dark:text-[#A1A1AA] max-w-sm mx-auto leading-relaxed">
                    Your email client has been opened with your message. If it didn't open automatically, feel free to email me directly at <strong className="text-[#171717] dark:text-[#EDEDED]">{emailAddress}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline pt-2 inline-block"
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#666666] dark:text-[#A1A1AA] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-xs text-[#171717] dark:text-[#EDEDED] placeholder-[#929292] focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#666666] dark:text-[#A1A1AA] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-xs text-[#171717] dark:text-[#EDEDED] placeholder-[#929292] focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#666666] dark:text-[#A1A1AA] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineer Opportunity / Contract Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-xs text-[#171717] dark:text-[#EDEDED] placeholder-[#929292] focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#666666] dark:text-[#A1A1AA] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project, team role, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-xs text-[#171717] dark:text-[#EDEDED] placeholder-[#929292] focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-xs font-medium text-white bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white transition-colors"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
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

export default ContactSection;
