import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060E] border-t border-[#C5A059]/20 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#16244E]/60">
          
          {/* Identity & Degree */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0A1128] border border-[#C5A059]/40 flex items-center justify-center text-[#F5E8BA] font-serif font-bold text-base">
                AJ
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FAF6E8]">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-sm text-[#C5A059] font-medium">
              {personalInfo.degree}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              {personalInfo.university} | {personalInfo.duration}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                id="footer-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#0A1128] border border-[#16244E] hover:border-[#C5A059] flex items-center justify-center text-slate-300 hover:text-[#F5E8BA] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                id="footer-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#0A1128] border border-[#16244E] hover:border-[#C5A059] flex items-center justify-center text-slate-300 hover:text-[#F5E8BA] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                id="footer-email-link"
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-lg bg-[#0A1128] border border-[#16244E] hover:border-[#C5A059] flex items-center justify-center text-slate-300 hover:text-[#F5E8BA] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <button
                onClick={scrollToTop}
                type="button"
                className="w-10 h-10 rounded-lg bg-[#16244E] hover:bg-[#1C3068] border border-[#C5A059]/40 flex items-center justify-center text-[#F5E8BA] transition-colors shadow-sm ml-2"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs font-mono text-slate-400">
              “Curious by design, disciplined by engineering.”
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Allan Jenisha R. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#C5A059]">
            Puducherry Technological University (PTU) • B.Tech ISE
          </p>
        </div>
      </div>
    </footer>
  );
};
