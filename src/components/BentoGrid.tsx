import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Download,
  CreditCard,
  Building2,
  Wallet,
  ArrowUpRight,
  Navigation,
  User,
  ShieldCheck,
  Store,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { AvatarWithFallback } from './AvatarWithFallback';
import { CopyButton } from './CopyButton';
import { downloadVCard } from '../utils/vcard';

export const BentoGrid: React.FC = () => {
  const [heroImgError, setHeroImgError] = useState(false);
  const [heroImgLoaded, setHeroImgLoaded] = useState(false);

  // Auto-try .jpg and .png for Rubel Mia's image
  const heroImageCandidates = [
    '/images/rubel-mia.jpg',
    '/images/rubel-mia.png',
    '/images/rubel-mia.jpeg',
    '/images/rubel-mia.webp',
  ];
  const [heroCandidateIdx, setHeroCandidateIdx] = useState(0);

  const handleHeroImgError = () => {
    if (heroCandidateIdx + 1 < heroImageCandidates.length) {
      setHeroCandidateIdx((prev) => prev + 1);
    } else {
      setHeroImgError(true);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12">
      {/* Bento Grid System */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4.5">
        
        {/* ========================================================
            CARD 1: Owner Profile & Identity (Hero Bento Card)
            Desktop: col-span-5 / min-h-auto / balanced mobile
        ======================================================== */}
        <motion.div
          id="home"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-5 relative bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm dark:shadow-2xl group flex flex-col justify-end min-h-[320px] sm:min-h-[380px]"
        >
          {/* Cover Photo / Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {!heroImgError ? (
              <img
                key={heroImageCandidates[heroCandidateIdx]}
                src={heroImageCandidates[heroCandidateIdx]}
                alt={PROFILE_DATA.name}
                loading="eager"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 ${
                  heroImgLoaded ? 'opacity-90 dark:opacity-85' : 'opacity-0'
                }`}
                onLoad={() => setHeroImgLoaded(true)}
                onError={handleHeroImgError}
              />
            ) : null}

            {/* Fallback Graphic Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 -z-10 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-extrabold text-3xl">
                RM
              </div>
            </div>

            {/* Light / Dark Gradient Overlays for high text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent dark:from-slate-950 dark:via-slate-950/75 dark:to-transparent" />
          </div>

          {/* Status Badge Top Left */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/15 text-[11px] font-bold text-orange-300 shadow-md">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span>Verified Profile</span>
            </span>
          </div>

          {/* vCard Save Contact Button Top Right */}
          <div className="absolute top-3.5 right-3.5 z-10">
            <button
              id="bento-vcard-btn"
              type="button"
              onClick={downloadVCard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md border border-white/20 text-xs font-semibold text-white transition-all shadow-md active:scale-95 cursor-pointer hover:border-orange-400"
              title="Save Contact to Phone (vCard)"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              <span>Save Contact</span>
            </button>
          </div>

          {/* Bottom Content Area */}
          <div className="relative z-10 p-5 sm:p-6 text-white">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-300 border border-orange-400/30 text-[11px] font-semibold mb-1">
              <Store className="w-3 h-3" />
              <span>Proprietor</span>
            </div>
            <h1
              id="bento-owner-name"
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight"
            >
              {PROFILE_DATA.name}
            </h1>
            <p
              id="bento-owner-bangla-name"
              className="text-base sm:text-lg font-bold text-orange-400 font-bengali mt-0.5"
            >
              {PROFILE_DATA.banglaName}
            </p>
            <p
              id="bento-owner-identity"
              className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5 opacity-90"
            >
              {PROFILE_DATA.identity}
            </p>

            <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center gap-1.5 text-xs text-slate-300 font-bengali">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span className="truncate">{PROFILE_DATA.location}</span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            RIGHT COLUMN CONTAINER (7 COLS on desktop)
        ======================================================== */}
        <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4.5 justify-between">
          {/* ========================================================
              CARD 2: Personal Introduction / Business Overview
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm dark:shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    ব্যক্তিগত পরিচিতি ও বিবরণ
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Business Profile & Introduction
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                About
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-3.5 sm:p-4">
              <p
                id="bento-intro-text"
                className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bengali leading-relaxed"
              >
                {PROFILE_DATA.intro}
              </p>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 3 & 4: Quick Contact (Voice Call & WhatsApp)
              2 columns inside the right container
          ======================================================== */}
          <div id="contact" className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4.5">
            {/* CARD 3: Voice Call */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 rounded-3xl p-4.5 sm:p-5 flex flex-col justify-between shadow-sm dark:shadow-xl group transition-all"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  Voice Call
                </span>
              </div>

              <div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Direct Phone</div>
                <div className="text-lg font-mono font-bold text-blue-600 dark:text-blue-400 my-1 select-all">
                  {PROFILE_DATA.callNumber}
                </div>
                <a
                  id="bento-btn-call"
                  href={`tel:${PROFILE_DATA.callNumberRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer mt-2"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Call Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-80" />
                </a>
              </div>
            </motion.div>

            {/* CARD 4: WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 hover:border-green-500/40 rounded-3xl p-4.5 sm:p-5 flex flex-col justify-between shadow-sm dark:shadow-xl group transition-all"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-green-600 dark:text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                  WhatsApp
                </span>
              </div>

              <div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">WhatsApp Chat</div>
                <div className="text-lg font-mono font-bold text-green-600 dark:text-green-400 my-1 select-all">
                  {PROFILE_DATA.whatsappNumber}
                </div>
                <a
                  id="bento-btn-whatsapp"
                  href={PROFILE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-green-600/20 active:scale-95 cursor-pointer mt-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-80" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================================
            ROW 2: DIGITAL WALLETS (Bkash Personal, Nagad Personal, Bkash Agent)
            3 columns on desktop / compact balanced padding
        ======================================================== */}
        <div id="wallets" className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
          
          {/* CARD 5: Bkash Personal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 hover:border-pink-500/40 rounded-3xl p-4.5 sm:p-5 flex flex-col justify-between shadow-sm dark:shadow-xl group transition-all"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Wallet className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    Bkash Personal
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bengali">
                    বিকাশ পার্সোনাল
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-600 dark:text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
                Personal
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-3">
              <div className="text-base sm:text-lg font-mono font-bold text-pink-600 dark:text-pink-400 mb-2 select-all text-center">
                01930313640
              </div>
              <CopyButton
                id="bento-copy-bkash-personal"
                textToCopy="01930313640"
                label="Copy Bkash"
                copiedLabel="Copied!"
                className="w-full"
                variant="secondary"
              />
            </div>
          </motion.div>

          {/* CARD 6: Nagad Personal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 hover:border-amber-500/40 rounded-3xl p-4.5 sm:p-5 flex flex-col justify-between shadow-sm dark:shadow-xl group transition-all"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <CreditCard className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    Nagad Personal
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bengali">
                    নগদ পার্সোনাল
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                Personal
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-3">
              <div className="text-base sm:text-lg font-mono font-bold text-amber-600 dark:text-amber-400 mb-2 select-all text-center">
                01930313640
              </div>
              <CopyButton
                id="bento-copy-nagad-personal"
                textToCopy="01930313640"
                label="Copy Nagad"
                copiedLabel="Copied!"
                className="w-full"
                variant="secondary"
              />
            </div>
          </motion.div>

          {/* CARD 7: Bkash Agent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="sm:col-span-2 lg:col-span-1 bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 hover:border-rose-500/40 rounded-3xl p-4.5 sm:p-5 flex flex-col justify-between shadow-sm dark:shadow-xl group transition-all"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Building2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    Bkash Agent
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bengali">
                    বিকাশ এজেন্ট নম্বর
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                Agent
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-3">
              <div className="text-base sm:text-lg font-mono font-bold text-rose-600 dark:text-rose-400 mb-2 select-all text-center">
                01310499958
              </div>
              <CopyButton
                id="bento-copy-bkash-agent"
                textToCopy="01310499958"
                label="Copy Agent"
                copiedLabel="Copied!"
                className="w-full"
                variant="secondary"
              />
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            ROW 3: LOCATION & SOCIAL PROFILES
            Location (col-span-7) + Social Links (col-span-5)
        ======================================================== */}

        {/* CARD 8: Physical Location Bento Card */}
        <motion.div
          id="location"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-7 bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 hover:border-rose-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm dark:shadow-xl relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  স্থায়ী ঠিকানা ও অবস্থান
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Physical Location</p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
              Address
            </span>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-3.5 my-2">
            <p
              id="bento-location-address"
              className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 font-bengali leading-snug"
            >
              {PROFILE_DATA.location}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Haldibari, Kaunia, Rangpur, Bangladesh
            </p>
          </div>

          <div className="mt-2">
            <a
              id="bento-btn-open-maps"
              href={PROFILE_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-rose-500" />
              <span>Google Maps-এ অবস্থান দেখুন</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400" />
            </a>
          </div>
        </motion.div>

        {/* CARD 9: Social Connections (Find Me Online) */}
        <motion.div
          id="social"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="lg:col-span-5 bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm dark:shadow-xl"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                সোশ্যাল মিডিয়া প্রোফাইল
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Find Me Online</p>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
              Socials
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Facebook */}
            <a
              id="bento-social-facebook"
              href={PROFILE_DATA.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-600/15 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Facebook Profile
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bengali">
                    অফিসিয়াল ফেসবুক আইডি
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </a>

            {/* WhatsApp */}
            <a
              id="bento-social-whatsapp"
              href={PROFILE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 hover:border-green-500/40 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-green-600/15 text-green-600 dark:text-green-400 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    WhatsApp Chat
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bengali">
                    সরাসরি হোয়াটসঅ্যাপ বার্তা
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-green-500 transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* ========================================================
            ROW 4: DEVELOPER INFO (Full Width Bento Card)
            Features HM JIHAD photo, title, bio, call & whatsapp CTA
        ======================================================== */}
        <motion.div
          id="developer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-12 bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/40 rounded-3xl p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm dark:shadow-xl relative overflow-hidden group"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Developer Identity Details */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="relative shrink-0">
              <AvatarWithFallback
                src={PROFILE_DATA.developer.image}
                alt={`${PROFILE_DATA.developer.name} — ${PROFILE_DATA.developer.title}`}
                initials="HJ"
                size="lg"
                isDeveloper={true}
                className="ring-2 ring-indigo-500/30 shadow-md"
              />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                  Website Developer
                </span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  • Verified
                </span>
              </div>
              <h4 id="bento-developer-name" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                {PROFILE_DATA.developer.name}
              </h4>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono font-semibold">
                {PROFILE_DATA.developer.title}
              </p>
              <p
                id="bento-developer-text"
                className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-bengali mt-1.5 max-w-lg"
              >
                “{PROFILE_DATA.developer.text}”
              </p>
            </div>
          </div>

          {/* Contact Developer Call & Action Button */}
          <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row gap-2">
            <a
              id="bento-btn-contact-developer"
              href={`tel:${PROFILE_DATA.developer.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-indigo-600/20 active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Contact Developer ({PROFILE_DATA.developer.phone})</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-80" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
