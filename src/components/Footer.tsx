import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="mt-8 border-t border-slate-800/80 bg-slate-950/80 py-8 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <p className="text-sm font-bold text-slate-200">
            © {new Date().getFullYear()} {PROFILE_DATA.name} ({PROFILE_DATA.banglaName})
          </p>
          <p className="text-xs text-slate-400 font-bengali">
            {PROFILE_DATA.identity} • হলদিবাড়ি, কাউনিয়া, রংপুর
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
            <span>Website by</span>
            <a
              href={`tel:${PROFILE_DATA.developer.phoneRaw}`}
              className="text-orange-400 font-semibold hover:underline"
            >
              {PROFILE_DATA.developer.name}
            </a>
          </span>

          <button
            id="footer-back-to-top"
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
