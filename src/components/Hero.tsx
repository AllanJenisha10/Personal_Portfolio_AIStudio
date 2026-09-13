import React from 'react';
import {
  MapPin,
  GraduationCap,
  Award,
  ArrowRight,
  FileText,
  Mail,
  Github,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { getProfilePhoto } from '../utils/photoStorage';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const photoSrc = getProfilePhoto();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
    >
      {/* Subtle luxury ambient lighting in dark navy */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16244E]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-[#C5A059]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-1/4 w-[420px] h-[420px] bg-[#0A1128]/80 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content: 7 cols on large screens */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Academic badge / Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F1A3A] border border-[#C5A059]/40 shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#F5E8BA] uppercase">
                {personalInfo.university} • Batch {personalInfo.duration} • {personalInfo.currentStatus}
              </span>
            </div>

            {/* Name & Primary Title */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF6E8] leading-[1.15]">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-base sm:text-xl font-medium text-[#C5A059]">
                <span>{personalInfo.degree}</span>
              </div>
            </div>

            {/* Tagline */}
            <blockquote className="border-l-2 border-[#C5A059] pl-4 py-1 italic font-serif text-lg sm:text-xl text-slate-200">
              "{personalInfo.tagline}"
            </blockquote>

            {/* Location & Academic Metric */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-[#C5A059]" />
                <span>{personalInfo.college}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#16244E]/80 border border-[#C5A059]/40 text-[#F5E8BA] font-mono text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>CGPA: {personalInfo.cgpa}</span>
              </div>
            </div>

            {/* Focus Pills */}
            <div className="pt-1">
              <p className="text-xs uppercase tracking-widest font-mono text-slate-400 mb-2">Core Focus</p>
              <div className="flex flex-wrap gap-2">
                {['Information Science & Engineering', 'Full-Stack Development', 'Data Science', 'AI/ML'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-md bg-[#0A1128] border border-[#C5A059]/25 text-slate-200 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-view-resume-btn"
                type="button"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#E7CF82] hover:from-[#D4AF37] hover:to-[#F5E8BA] text-[#060B19] font-semibold text-sm tracking-wide transition-all shadow-[0_4px_20px_rgba(197,160,89,0.3)] hover:shadow-[0_6px_25px_rgba(197,160,89,0.45)] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2 focus:ring-offset-[#060B19]"
              >
                <FileText className="w-4 h-4 text-[#060B19]" />
                <span>View Resume</span>
              </button>

              <a
                id="hero-get-in-touch-btn"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0F1A3A] hover:bg-[#16244E] text-[#F5E8BA] border border-[#C5A059]/50 hover:border-[#C5A059] font-medium text-sm tracking-wide transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>Get In Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-lg bg-[#0A1128] hover:bg-[#16244E] text-slate-300 hover:text-[#F5E8BA] border border-slate-700/60 hover:border-[#C5A059]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Profile Image & Metric Card: 5 cols */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Gold rim accent glow backdrop */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-[#C5A059]/30 via-transparent to-[#16244E]/50 blur-lg" />

              {/* Main Container Card */}
              <div className="relative rounded-2xl bg-[#0A1128] border border-[#C5A059]/40 p-3.5 sm:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all">
                {/* Photo Frame */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#060B19] border border-[#C5A059]/20 shadow-2xl group">
                  <img
                    src={photoSrc}
                    alt="Allan Jenisha R. - Professional Executive Portrait"
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient bottom overlay for subtle depth */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060B19] via-[#060B19]/50 to-transparent pointer-events-none" />

                  {/* Floating Identity Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#060B19]/90 backdrop-blur-md border border-[#C5A059]/30 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-serif font-bold text-[#FAF6E8] tracking-wide">
                          {personalInfo.name}
                        </p>
                        <p className="text-[11px] text-[#C5A059] font-mono">
                          Puducherry Technological University
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#C5A059]/20 text-[#F5E8BA] border border-[#C5A059]/40">
                        <span>CGPA 9.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-card quick stats row */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-[#060B19]/80 border border-[#C5A059]/20">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Current Phase</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#F5E8BA] mt-0.5">Final Year (2023–27)</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#060B19]/80 border border-[#C5A059]/20">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Academic Standing</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] mt-0.5">9.00 CGPA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
