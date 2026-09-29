import React, { useState, useEffect } from 'react';
import { Landmark, Phone, Mail, Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { contactInfo, navLinks } from '../data/loanData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800/80 hidden sm:block relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-medium text-[11px] border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" /> 0% Customer Fees
            </span>
            <span className="text-slate-400 hidden md:inline">Over ₹10,000 Cr+ Institutional Network Facilitation</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${contactInfo.phoneClean}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Helpline: {contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-royal-400" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-xl py-3 border-b border-navy-800'
            : 'bg-navy-950/80 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group text-left"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Siyaram Loans & Finance"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-heading">
                    SIYARAM
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Est. 2012
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs tracking-wider font-semibold text-amber-400 uppercase">
                  Loans & Finance
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-royal-700/40 shadow-inner'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-amber-400 to-royal-400 rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Consultation CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all duration-300 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-glow-gold hover:shadow-lg hover:scale-[1.02] active:scale-95 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-400 text-navy-950"
              >
                Free Consult
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950/98 border-b border-navy-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="px-2 py-1 text-xs text-amber-400 font-semibold tracking-wider uppercase">
              Menu Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${
                    isActive
                      ? 'bg-royal-600/30 text-white border-l-4 border-amber-400'
                      : 'text-slate-300 hover:text-white hover:bg-navy-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              );
            })}

            <div className="pt-4 border-t border-navy-800 space-y-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-navy-950 font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-sm shadow-md"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${contactInfo.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-slate-200 font-medium bg-navy-900 border border-navy-700 text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Helpline: {contactInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
