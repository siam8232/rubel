import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    { name: 'Wallets', href: '#wallets' },
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
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-black/20 py-2.5 sm:py-3'
          : 'bg-transparent py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#home"
          id="nav-brand-link"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-slate-950 font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            RM
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
              {PROFILE_DATA.name}
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 -mt-0.5 font-bengali">
              {PROFILE_DATA.banglaName}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1 backdrop-blur-md shadow-xs">
          {navLinks.map((link) => (
            <button
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              onClick={() => handleLinkClick(link.href)}
              className="px-3 py-1 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Quick Call */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/40 transition-all cursor-pointer shadow-xs active:scale-95"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 stroke-[2.2]" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 stroke-[2.2]" />
            )}
          </button>

          {/* Quick Direct Call Button (Desktop) */}
          <a
            id="nav-quick-call"
            href={`tel:${PROFILE_DATA.callNumberRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-slate-950 shadow-md shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 fill-slate-950" />
            <span>{PROFILE_DATA.callNumber}</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 md:hidden rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 py-4 mt-2 shadow-lg"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full text-left px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 mt-1 flex flex-col gap-2">
                <a
                  href={`tel:${PROFILE_DATA.callNumberRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-sm shadow-md shadow-orange-500/20 active:scale-95"
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
