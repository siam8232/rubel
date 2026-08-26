import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Contact', href: '#contact' },
    { name: 'Location', href: '#location' },
    { name: 'Developer', href: '#developer' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a12]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#home"
          id="nav-brand-link"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-slate-950 font-extrabold text-sm shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            RM
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-base sm:text-lg bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              {PROFILE_DATA.name}
            </span>
            <span className="text-[11px] text-slate-400 -mt-1 font-bengali hidden xs:inline">
              {PROFILE_DATA.banglaName}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 border border-slate-800 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              onClick={() => handleLinkClick(link.href)}
              className="px-3.5 py-1 text-sm font-medium text-slate-400 hover:text-orange-400 rounded-full hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Quick Direct Call Button */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            id="nav-quick-call"
            href={`tel:${PROFILE_DATA.callNumberRaw}`}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-all hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{PROFILE_DATA.callNumber}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 py-4 mt-2"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-orange-400 hover:bg-slate-900 rounded-xl transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-800 mt-1 flex flex-col gap-2">
                <a
                  href={`tel:${PROFILE_DATA.callNumberRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-sm shadow-md shadow-orange-500/20"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call: {PROFILE_DATA.callNumber}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
