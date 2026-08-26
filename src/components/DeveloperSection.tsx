import React from 'react';
import { Phone, Code2, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { AvatarWithFallback } from './AvatarWithFallback';

export const DeveloperSection: React.FC = () => {
  const { developer } = PROFILE_DATA;

  return (
    <section id="developer" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Developer Info</span>
        </div>
        <h2
          id="developer-section-title"
          className="text-xl sm:text-2xl font-bold text-white tracking-tight"
        >
          Website Developed By
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="relative overflow-hidden bg-gradient-to-b from-[#0e1324] to-[#0a0d18] border border-indigo-500/20 hover:border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all"
      >
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Developer Avatar */}
          <div className="relative shrink-0">
            <div className="p-1 rounded-full bg-slate-900 ring-2 ring-indigo-500/40">
              <AvatarWithFallback
                src={developer.image}
                alt={`${developer.name} — ${developer.title}`}
                initials="HJ"
                size="lg"
                isDeveloper={true}
                className="shadow-xl"
              />
            </div>
            <div
              className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-indigo-600 text-white shadow-md border-2 border-slate-900"
              title="Verified Developer"
            >
              <Code2 className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Developer Details & Call CTA */}
          <div className="flex-1 text-center sm:text-left space-y-3">
            <div>
              <h3
                id="developer-name"
                className="text-xl sm:text-2xl font-extrabold text-white tracking-tight"
              >
                {developer.name}
              </h3>
              <p
                id="developer-title"
                className="text-sm font-semibold text-indigo-400 font-mono mt-0.5"
              >
                {developer.title}
              </p>
            </div>

            <p
              id="developer-cta-text"
              className="text-slate-300 text-sm sm:text-base font-bengali leading-relaxed max-w-xl"
            >
              “{developer.text}”
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                id="btn-contact-developer"
                href={`tel:${developer.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Contact Developer ({developer.phone})</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
