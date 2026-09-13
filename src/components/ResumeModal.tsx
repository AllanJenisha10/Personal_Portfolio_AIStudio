import React, { useState, useEffect } from 'react';
import {
  X,
  FileText,
  Printer,
  Download,
  ExternalLink,
  MapPin,
  Mail,
  Github,
  Award,
  Calendar,
  CheckCircle2,
  Info,
  Link,
} from 'lucide-react';
import { personalInfo, aboutContent, projects, experiences, educationList, skillCategories } from '../data/portfolioData';
import { getProfilePhoto } from '../utils/photoStorage';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [customResumeUrl, setCustomResumeUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [photoSrc, setPhotoSrc] = useState<string>(getProfilePhoto());

  useEffect(() => {
    const handlePhotoChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoSrc(customEvent.detail);
      }
    };
    window.addEventListener('profile-photo-changed', handlePhotoChange);
    return () => window.removeEventListener('profile-photo-changed', handlePhotoChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#060B19] border border-[#C5A059]/60 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] my-8 overflow-hidden">
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A1128] border-b border-[#C5A059]/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#060B19] border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="font-serif text-base font-bold text-[#FAF6E8]">
                Curriculum Vitae • Allan Jenisha R.
              </h3>
              <p className="text-[11px] font-mono text-[#C5A059]">
                B.Tech Information Science & Engineering (PTU)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#16244E] hover:bg-[#1C3068] text-[#F5E8BA] text-xs font-medium border border-[#C5A059]/30 transition-colors"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#16244E] transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice for placeholder */}
        <div className="bg-[#16244E]/40 border-b border-[#C5A059]/20 px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Info className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              <strong>Placeholder Notice:</strong> Interactive verified digital resume preview. Direct file link will be attached when final PDF URL is configured.
            </span>
          </div>
          <button
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="text-[11px] font-mono text-[#F5E8BA] underline hover:text-white"
          >
            {showUrlInput ? 'Hide link config' : 'Configure resume link'}
          </button>
        </div>

        {/* Optional Custom Link Input */}
        {showUrlInput && (
          <div className="bg-[#0A1128] border-b border-[#C5A059]/20 p-4">
            <label className="block text-xs font-mono text-[#F5E8BA] mb-1.5">
              Set Official Google Drive / PDF Resume URL:
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={customResumeUrl}
                onChange={(e) => setCustomResumeUrl(e.target.value)}
                placeholder="https://drive.google.com/file/d/.../view"
                className="flex-1 px-3 py-1.5 rounded bg-[#060B19] border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A059]"
              />
              <button
                type="button"
                onClick={() => {
                  if (customResumeUrl.trim()) {
                    window.open(customResumeUrl.trim(), '_blank', 'noopener,noreferrer');
                  }
                }}
                disabled={!customResumeUrl.trim()}
                className="px-3 py-1.5 rounded bg-[#C5A059] text-[#060B19] font-bold text-xs disabled:opacity-50"
              >
                Open Link
              </button>
            </div>
          </div>
        )}

        {/* Printable Executive CV Sheet */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8 bg-[#050B17] text-slate-200 text-sm">
          
          {/* CV Header */}
          <div className="border-b border-[#C5A059]/30 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border border-[#C5A059]/50 shrink-0 bg-[#0A1128] shadow-md">
                  <img
                    src={photoSrc}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-[center_18%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF6E8] tracking-wide">
                    {personalInfo.name}
                  </h1>
                  <p className="text-[#C5A059] font-serif text-sm sm:text-base mt-0.5">
                    {personalInfo.degree}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    {personalInfo.college} • {personalInfo.universityFullName} ({personalInfo.university})
                  </p>
                </div>
              </div>
              <div className="space-y-1 text-xs text-slate-300 font-mono sm:text-right">
                <p className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{personalInfo.location}</span>
                </p>
                <p className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{personalInfo.email}</span>
                </p>
                <p className="flex sm:justify-end items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>github.com/AllanJenisha10</span>
                </p>
                <p className="flex sm:justify-end items-center gap-1.5 text-[#F5E8BA] font-bold">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>CGPA: {personalInfo.cgpa} (Final Year)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-serif text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-2 border-b border-[#16244E] pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {aboutContent.summary}
            </p>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="font-serif text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-3 border-b border-[#16244E] pb-1">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-2.5 rounded bg-[#0A1128] border border-[#16244E]">
                  <strong className="text-[#F5E8BA] block mb-1">{cat.title}:</strong>
                  <span className="text-slate-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-serif text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-3 border-b border-[#16244E] pb-1">
              Internship Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-start font-medium">
                    <span className="text-[#FAF6E8] font-bold">{exp.role}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{exp.duration}</span>
                  </div>
                  <p className="text-[#C5A059] font-medium">{exp.company}</p>
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                  <p className="text-[11px] text-slate-400">
                    <span className="text-[#F5E8BA]">Keywords:</span> {exp.skillsGained.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="font-serif text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-3 border-b border-[#16244E] pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[#FAF6E8] font-bold">{proj.title}</span>
                    <span className="text-[#D4AF37] font-mono text-[11px]">{proj.category}</span>
                  </div>
                  <p className="text-slate-300">{proj.description}</p>
                  <p className="text-[11px] text-slate-400">
                    <span className="text-[#F5E8BA]">Features:</span> {proj.features.join(' • ')}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    GitHub: {proj.githubUrl}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-serif text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-3 border-b border-[#16244E] pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start text-xs">
                  <div>
                    <span className="text-[#FAF6E8] font-bold">{edu.degree}</span>
                    <p className="text-slate-300">{edu.institution} {edu.university ? `(${edu.university})` : ''}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[#D4AF37] font-bold">{edu.scoreLabel}: {edu.score}</span>
                    <p className="text-[11px] font-mono text-slate-400">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0A1128] border-t border-[#C5A059]/30 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Official candidate credentials verified for Allan Jenisha R.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-[#060B19] text-xs font-bold hover:brightness-110"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
