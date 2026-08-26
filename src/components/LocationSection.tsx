import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-8 sm:py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2
          id="location-section-title"
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
        >
          Location
        </h2>
        <p className="text-sm text-slate-400 font-bengali mt-1">
          স্থায়ী ঠিকানা ও গুগল ম্যাপ লোকেশন
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mx-auto mt-3" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="relative overflow-hidden bg-[#0b101c]/80 backdrop-blur-md border border-white/10 hover:border-rose-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl"
      >
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 shrink-0">
              <MapPin className="w-7 h-7" />
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono">
                Address & Coordinates
              </span>
              <h3
                id="location-address-text"
                className="text-lg sm:text-xl font-bold text-white font-bengali leading-snug"
              >
                {PROFILE_DATA.location}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Haldibari, Kaunia, Rangpur, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              id="btn-open-location"
              href={PROFILE_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-bold text-sm shadow-lg shadow-rose-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Open Location</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
