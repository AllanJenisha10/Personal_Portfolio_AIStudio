import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { getProfilePhoto } from '../utils/photoStorage';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [credentialsDropdownOpen, setCredentialsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [photoSrc, setPhotoSrc] = useState<string>(getProfilePhoto());
  const [navPhotoLoaded, setNavPhotoLoaded] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePhotoChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoSrc(customEvent.detail);
        setNavPhotoLoaded(true);
      }
    };
    window.addEventListener('profile-photo-changed', handlePhotoChange);
    return () => window.removeEventListener('profile-photo-changed', handlePhotoChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'certificates', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCredentialsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCredentialsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const primaryNavLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
  ];

  const credentialLinks = [
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Training', href: '#achievements', id: 'achievements' },
  ];

  const isCredentialsActive = ['certificates', 'education', 'achievements'].includes(activeSection);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060B19]/90 backdrop-blur-md border-b border-[#C5A059]/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            id="nav-logo-link"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded-md px-1"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-[#16244E] to-[#0A1128] border border-[#C5A059]/40 flex items-center justify-center text-[#F5E8BA] font-serif font-bold text-lg tracking-wider shadow-[0_0_15px_rgba(197,160,89,0.15)] group-hover:border-[#C5A059] transition-all relative">
              {navPhotoLoaded ? (
                <img
                  src={photoSrc}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_18%]"
                  onError={() => setNavPhotoLoaded(false)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span>AJ</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059]">
                PTU • B.Tech ISE
              </span>
            </div>
          </a>

          {/* Desktop Navigation: Visible on viewports 1024px and up */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {primaryNavLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all tracking-wide ${
                  activeSection === link.id
                    ? 'text-[#F5E8BA] bg-[#16244E]/60 border border-[#C5A059]/30 shadow-sm'
                    : 'text-slate-300 hover:text-[#F5E8BA] hover:bg-[#0F1A3A]/50'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Streamlined Credentials Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setCredentialsDropdownOpen(true)}
              onMouseLeave={() => setCredentialsDropdownOpen(false)}
            >
              <button
                id="nav-credentials-dropdown-btn"
                type="button"
                onClick={() => setCredentialsDropdownOpen(!credentialsDropdownOpen)}
                aria-expanded={credentialsDropdownOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all tracking-wide ${
                  isCredentialsActive || credentialsDropdownOpen
                    ? 'text-[#F5E8BA] bg-[#16244E]/60 border border-[#C5A059]/30 shadow-sm'
                    : 'text-slate-300 hover:text-[#F5E8BA] hover:bg-[#0F1A3A]/50'
                }`}
              >
                <span>Credentials</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    credentialsDropdownOpen ? 'rotate-180 text-[#C5A059]' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {credentialsDropdownOpen && (
                <div
                  id="nav-credentials-menu"
                  className="absolute top-full left-0 mt-1.5 w-44 rounded-xl bg-[#0A1128] border border-[#C5A059]/40 shadow-[0_12px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl p-1.5 z-50 transition-all animate-fade-in"
                >
                  {credentialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      id={`nav-dropdown-${link.id}`}
                      onClick={() => setCredentialsDropdownOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors ${
                        activeSection === link.id
                          ? 'text-[#F5E8BA] bg-[#16244E] font-semibold'
                          : 'text-slate-300 hover:text-[#F5E8BA] hover:bg-[#16244E]/60'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <a
              href="#contact"
              id="nav-link-contact"
              className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all tracking-wide ${
                activeSection === 'contact'
                  ? 'text-[#F5E8BA] bg-[#16244E]/60 border border-[#C5A059]/30 shadow-sm'
                  : 'text-slate-300 hover:text-[#F5E8BA] hover:bg-[#0F1A3A]/50'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Resume Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#F5E8BA] text-[#060B19] font-medium text-xs sm:text-sm tracking-wide transition-all shadow-[0_2px_12px_rgba(197,160,89,0.25)] hover:shadow-[0_4px_18px_rgba(197,160,89,0.35)] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2 focus:ring-offset-[#060B19]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile menu trigger: Visible on viewports under 1024px */}
            <button
              id="mobile-menu-trigger"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-300 hover:text-[#F5E8BA] hover:bg-[#16244E]/50 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer: Collapses cleanly under 1024px width */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#060B19]/98 border-b border-[#C5A059]/30 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-1.5">
            {primaryNavLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={`mobile-link-${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-[#F5E8BA] bg-[#16244E]/80 border-l-2 border-[#C5A059]'
                    : 'text-slate-300 hover:text-[#F5E8BA] hover:bg-[#0F1A3A]'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Streamlined Mobile Credentials Group */}
            <div className="pt-2 pb-1">
              <span className="px-3 text-[11px] font-mono uppercase tracking-widest text-[#C5A059]">
                Credentials
              </span>
              <div className="mt-1 space-y-1 pl-2 border-l border-[#C5A059]/30 ml-3">
                {credentialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    id={`mobile-link-${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? 'text-[#F5E8BA] bg-[#16244E]/80 font-semibold'
                        : 'text-slate-300 hover:text-[#F5E8BA] hover:bg-[#0F1A3A]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              id="mobile-link-contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeSection === 'contact'
                  ? 'text-[#F5E8BA] bg-[#16244E]/80 border-l-2 border-[#C5A059]'
                  : 'text-slate-300 hover:text-[#F5E8BA] hover:bg-[#0F1A3A]'
              }`}
            >
              Contact
            </a>

            <div className="pt-3 border-t border-[#C5A059]/20">
              <button
                type="button"
                id="mobile-resume-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-[#060B19] font-semibold text-sm tracking-wide shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
