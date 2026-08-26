import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="mt-8 border-t border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/80 backdrop-blur-md py-6 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
            © {new Date().getFullYear()} {PROFILE_DATA.name} ({PROFILE_DATA.banglaName})
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bengali">
            {PROFILE_DATA.identity} • হলদিবাড়ি, কাউনিয়া, রংপুর
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full font-medium">
            <span>Website by</span>
            <a
              href={`tel:${PROFILE_DATA.developer.phoneRaw}`}
              className="text-orange-600 dark:text-orange-400 font-bold hover:underline"
            >
              {PROFILE_DATA.developer.name}
            </a>
          </span>

          <button
            id="footer-back-to-top"
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer active:scale-95"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
