import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#060B19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1128] border border-[#C5A059]/30 text-xs font-mono text-[#F5E8BA] uppercase tracking-widest mb-3">
            <span>Direct Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF6E8]">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Available for graduate technical roles, engineering internships, and full-stack software development opportunities.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Contact Details & Social Links: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1128] border border-[#C5A059]/25 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <h3 className="font-serif text-xl font-bold text-[#FAF6E8] mb-2">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Feel free to send a message using the contact form, reach out through email, or review my technical repositories on GitHub.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4">
                
                {/* Email item with copy button */}
                <div className="p-3.5 rounded-xl bg-[#060B19] border border-[#16244E] flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-[#0A1128] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Email Address</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium text-[#FAF6E8] hover:text-[#F5E8BA] truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-2 rounded-lg bg-[#16244E]/50 hover:bg-[#16244E] text-slate-300 hover:text-[#F5E8BA] text-xs font-mono transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub link */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#060B19] border border-[#16244E] hover:border-[#C5A059]/50 flex items-center justify-between gap-3 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0A1128] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:text-[#F5E8BA] group-hover:border-[#C5A059] shrink-0 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">GitHub Repository</p>
                      <span className="text-xs sm:text-sm font-medium text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors">
                        AllanJenisha10
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#C5A059] transition-colors" />
                </a>

                {/* LinkedIn Placeholder */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#060B19] border border-[#16244E] hover:border-[#C5A059]/50 flex items-center justify-between gap-3 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0A1128] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:text-[#F5E8BA] group-hover:border-[#C5A059] shrink-0 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Professional Network</p>
                      <span className="text-xs sm:text-sm font-medium text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors">
                        Allan Jenisha R. (LinkedIn)
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#16244E] text-[#C5A059] border border-[#C5A059]/20">
                    Profile
                  </span>
                </a>

                {/* Location Badge */}
                <div className="p-3.5 rounded-xl bg-[#060B19] border border-[#16244E] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1128] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Location Base</p>
                    <span className="text-xs sm:text-sm font-medium text-[#FAF6E8]">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form: 7 cols */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A1128] border border-[#C5A059]/25 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <h3 className="font-serif text-xl font-bold text-[#FAF6E8] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                All fields are required. Inquiries will receive a response within 24–48 hours.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-[#060B19] border border-[#C5A059] text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#16244E] border border-[#C5A059] flex items-center justify-center text-[#D4AF37] mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#FAF6E8]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. Allan Jenisha R. has received your inquiry and will review it promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-[#16244E] text-[#F5E8BA] text-xs font-semibold hover:bg-[#1C3068]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Recruiters / Engineering Manager"
                        className="w-full px-4 py-3 rounded-lg bg-[#060B19] border border-[#16244E] focus:border-[#C5A059] text-sm text-[#FAF6E8] placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#060B19] border border-[#16244E] focus:border-[#C5A059] text-sm text-[#FAF6E8] placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Technical Role Inquiry / Engineering Opportunity"
                      className="w-full px-4 py-3 rounded-lg bg-[#060B19] border border-[#16244E] focus:border-[#C5A059] text-sm text-[#FAF6E8] placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your team, project requirements, or role specifications..."
                      className="w-full px-4 py-3 rounded-lg bg-[#060B19] border border-[#16244E] focus:border-[#C5A059] text-sm text-[#FAF6E8] placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#E7CF82] hover:from-[#D4AF37] hover:to-[#F5E8BA] text-[#060B19] font-bold text-sm tracking-wide transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
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
