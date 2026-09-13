import React, { useState, useEffect } from 'react';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  FileCheck,
  Sparkles,
  Info,
  X,
  Check,
  Copy,
} from 'lucide-react';
import { certificates as initialCertificates } from '../data/portfolioData';
import { Certificate } from '../types';

export const Certificates: React.FC = () => {
  const [certificateList, setCertificateList] = useState<Certificate[]>(initialCertificates);
  const [activePlaceholderModal, setActivePlaceholderModal] = useState<Certificate | null>(null);
  const [customLinkInput, setCustomLinkInput] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (!activePlaceholderModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePlaceholderModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePlaceholderModal]);

  const handleCertificateClick = (cert: Certificate, e: React.MouseEvent) => {
    const isRealUrl = cert.link.startsWith('http://') || cert.link.startsWith('https://');
    
    if (!isRealUrl) {
      e.preventDefault();
      setActivePlaceholderModal(cert);
      setCustomLinkInput('');
      setCopiedLink(false);
    }
    // If it is a real URL, native <a target="_blank" rel="noopener noreferrer"> handles it cleanly
  };

  const handleApplyCustomLink = () => {
    if (!activePlaceholderModal || !customLinkInput.trim()) return;
    const formattedUrl = customLinkInput.trim().startsWith('http')
      ? customLinkInput.trim()
      : `https://${customLinkInput.trim()}`;

    setCertificateList((prev) =>
      prev.map((c) =>
        c.number === activePlaceholderModal.number ? { ...c, link: formattedUrl } : c
      )
    );

    // Open immediately in new tab
    window.open(formattedUrl, '_blank', 'noopener,noreferrer');
    setActivePlaceholderModal(null);
  };

  return (
    <section id="certificates" className="py-20 sm:py-28 relative bg-[#040813]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1128] border border-[#C5A059]/30 text-xs font-mono text-[#F5E8BA] uppercase tracking-widest mb-3">
            <span>Verified Credentials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF6E8]">
            Certificates & Accreditations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Individual verified credentials. Each certificate links directly to its respective verified Google Drive document.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-4" />
        </div>

        {/* 10 Individual Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {certificateList.map((cert) => {
            const isRealUrl = cert.link.startsWith('http://') || cert.link.startsWith('https://');

            return (
              <div
                key={cert.number}
                id={`certificate-card-${cert.number}`}
                className="flex flex-col justify-between p-5 rounded-xl bg-[#0A1128] border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_28px_rgba(197,160,89,0.15)] group"
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#060B19] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:text-[#F5E8BA] group-hover:border-[#C5A059] transition-colors">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold text-[#D4AF37] bg-[#16244E]/80 border border-[#C5A059]/30">
                      #{cert.number}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-serif text-base font-bold text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuing Organization */}
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                </div>

                {/* View Certificate CTA Button opening in a new tab */}
                <div className="mt-5 pt-4 border-t border-[#16244E]/80">
                  <a
                    id={`view-certificate-btn-${cert.number}`}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleCertificateClick(cert, e)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#060B19] hover:bg-[#16244E] text-[#F5E8BA] border border-[#C5A059]/40 hover:border-[#C5A059] text-xs font-semibold tracking-wide transition-all group-hover:border-[#C5A059] shadow-sm hover:shadow-[0_2px_12px_rgba(197,160,89,0.2)] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Elegant Modal for Drive Link Placeholder Guidance */}
      {activePlaceholderModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActivePlaceholderModal(null);
            }
          }}
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0A1128] border border-[#C5A059] p-6 shadow-2xl">
            <button
              onClick={() => setActivePlaceholderModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#16244E]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#060B19] border border-[#C5A059] flex items-center justify-center text-[#D4AF37]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#FAF6E8]">
                  {activePlaceholderModal.title}
                </h3>
                <p className="text-xs font-mono text-[#C5A059]">
                  Issuer: {activePlaceholderModal.issuer} • Certificate #{activePlaceholderModal.number}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#060B19] border border-[#16244E] text-xs text-slate-300 space-y-2 mb-4">
              <p className="font-semibold text-[#F5E8BA] flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#C5A059]" />
                Google Drive Link Placeholder
              </p>
              <p>
                Currently configured identifier: <code className="px-1.5 py-0.5 rounded bg-[#16244E] text-[#D4AF37] font-mono">{activePlaceholderModal.link}</code>
              </p>
              <p className="text-slate-400">
                To link your individual certificate, you can paste your specific Google Drive sharing link here or edit <code className="text-slate-200">portfolioData.ts</code>.
              </p>
            </div>

            {/* Quick Link Input */}
            <div className="space-y-3 mb-5">
              <label htmlFor="drive-link-input" className="block text-xs font-medium text-slate-300">
                Paste Google Drive Link for Certificate #{activePlaceholderModal.number}:
              </label>
              <input
                id="drive-link-input"
                type="url"
                value={customLinkInput}
                onChange={(e) => setCustomLinkInput(e.target.value)}
                placeholder="https://drive.google.com/file/d/..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060B19] border border-[#C5A059]/40 focus:border-[#C5A059] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              />
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActivePlaceholderModal(null)}
                className="px-4 py-2 rounded-lg bg-[#060B19] text-slate-300 hover:text-white text-xs font-medium border border-slate-700"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleApplyCustomLink}
                disabled={!customLinkInput.trim()}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#D4AF37] disabled:opacity-50 text-[#060B19] text-xs font-bold shadow-md hover:brightness-110"
              >
                Open & Save Drive Link
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
