import React from 'react';
import { Phone, MessageCircle, MapPin, Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { AvatarWithFallback } from './AvatarWithFallback';
import { downloadVCard } from '../utils/vcard';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Identity Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full flex flex-col items-center"
      >
        {/* Profile Image with glowing ambient frame */}
        <div className="relative group mb-6 sm:mb-8">
          {/* Animated pulsing glow backdrop */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />

          {/* Inner ring & frame */}
          <div className="relative p-1.5 rounded-full bg-[#070a12] ring-2 ring-emerald-500/40">
            <AvatarWithFallback
              src={PROFILE_DATA.image}
              alt={PROFILE_DATA.name}
              initials="RM"
              size="xl"
              className="shadow-2xl"
            />
          </div>

          {/* Verified / Online Status Badge */}
          <div
            id="status-badge"
            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-[#070a12] border-2 border-emerald-400 p-1 rounded-full text-emerald-400 shadow-lg"
            title="Active & Available"
          >
            <CheckCircle2 className="w-5 h-5 fill-emerald-500 text-[#070a12]" />
          </div>
        </div>

        {/* Name in English & Bengali */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-1 sm:space-y-2 mb-4"
        >
          <h1
            id="hero-name"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            {PROFILE_DATA.name}
          </h1>
          <p
            id="hero-bangla-name"
            className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 font-bengali tracking-wide"
          >
            {PROFILE_DATA.banglaName}
          </p>
        </motion.div>

        {/* Professional Identity Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-200 text-sm sm:text-base font-medium shadow-sm mb-4 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-white">{PROFILE_DATA.identity}</span>
        </motion.div>

        {/* Location Badge with Map link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-300 font-bengali mb-6"
        >
          <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{PROFILE_DATA.location}</span>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="max-w-xl text-slate-300 text-sm sm:text-base font-bengali leading-relaxed bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 mb-8 backdrop-blur-sm shadow-inner text-center"
        >
          <p id="hero-intro-text">
            {PROFILE_DATA.intro}
          </p>
        </motion.div>

        {/* Primary Call-To-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 w-full max-w-lg"
        >
          {/* Main Call Button */}
          <a
            id="hero-call-cta"
            href={`tel:${PROFILE_DATA.callNumberRaw}`}
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Phone className="w-5 h-5 fill-slate-950" />
            <span>Call Me</span>
          </a>

          {/* Main WhatsApp Button */}
          <a
            id="hero-whatsapp-cta"
            href={PROFILE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-base shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>WhatsApp Me</span>
          </a>

          {/* Quick Save Contact Button */}
          <button
            id="hero-save-contact-btn"
            type="button"
            onClick={downloadVCard}
            className="col-span-full sm:col-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 hover:border-white/30 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            title="Download vCard to save contacts to mobile phone"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Save Contact</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
