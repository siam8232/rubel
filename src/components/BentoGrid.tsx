import React from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Download,
  CreditCard,
  Building2,
  Wallet,
  Sparkles,
  ArrowUpRight,
  Navigation,
  User,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { AvatarWithFallback } from './AvatarWithFallback';
import { CopyButton } from './CopyButton';
import { downloadVCard } from '../utils/vcard';

export const BentoGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      {/* Bento Grid System */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 auto-rows-fr">
        {/* ========================================================
            CARD 1: Owner Profile & Identity (Hero Bento Card)
            Desktop: col-span-5 / md: col-span-2 / row-span-auto
        ======================================================== */}
        <motion.div
          id="home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl group flex flex-col justify-end min-h-[380px] sm:min-h-[440px]"
        >
          {/* Cover Photo / Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={PROFILE_DATA.image}
              alt={PROFILE_DATA.name}
              loading="eager"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                // Fallback gradient if image isn't loaded yet
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Fallback Graphic Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 -z-10 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-4xl">
                RM
              </div>
            </div>
            {/* Dark Vignette and Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent" />
            <div className="absolute inset-0 bg-radial-at-t from-transparent via-slate-950/40 to-slate-950" />
          </div>

          {/* Status Badge Top Left */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-semibold text-orange-400 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span>Verified Identity</span>
            </span>
          </div>

          {/* vCard Save Contact Button Top Right */}
          <div className="absolute top-4 right-4 z-10">
            <button
              id="bento-vcard-btn"
              type="button"
              onClick={downloadVCard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-all shadow-lg active:scale-95 cursor-pointer"
              title="Download Contact Card (vCard)"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              <span>Save Contact</span>
            </button>
          </div>

          {/* Bottom Content Area */}
          <div className="relative z-10 p-6 sm:p-8">
            <h1
              id="bento-owner-name"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
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
              className="text-xs sm:text-sm text-slate-300 font-medium mt-1"
            >
              {PROFILE_DATA.identity}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-bengali">
              <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span className="truncate">{PROFILE_DATA.location}</span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            RIGHT COLUMN CONTAINER (7 COLS on desktop)
        ======================================================== */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* ========================================================
              CARD 2: Personal Introduction / Identity Card (Full Width in column)
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="sm:col-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-slate-700/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-center shadow-xl relative overflow-hidden"
          >
            {/* Ambient decorative blur */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Personal Identity
                </h2>
                <p className="text-xs text-slate-400 font-bengali">
                  ব্যক্তিগত পরিচিতি ও বিবরণ
                </p>
              </div>
            </div>

            <p
              id="bento-intro-text"
              className="text-slate-300 text-sm sm:text-base font-bengali leading-relaxed bg-slate-950/40 border border-slate-800/60 rounded-2xl p-4"
            >
              {PROFILE_DATA.intro}
            </p>
          </motion.div>

          {/* ========================================================
              CARD 3: Voice Call (Interactive Call Bento Card)
          ======================================================== */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-blue-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl group transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/60">
                Voice Call
              </span>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1">Direct Phone</div>
              <div className="text-xl font-mono font-bold text-blue-400 mb-3 select-all">
                {PROFILE_DATA.callNumber}
              </div>
              <a
                id="bento-btn-call"
                href={`tel:${PROFILE_DATA.callNumberRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Me</span>
                <ArrowUpRight className="w-4 h-4 ml-auto" />
              </a>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 4: WhatsApp (Interactive WhatsApp Bento Card)
          ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-green-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl group transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/60">
                Direct Message
              </span>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1">WhatsApp Chat</div>
              <div className="text-xl font-mono font-bold text-green-400 mb-3 select-all">
                {PROFILE_DATA.whatsappNumber}
              </div>
              <a
                id="bento-btn-whatsapp"
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-green-600/20 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Me</span>
                <ArrowUpRight className="w-4 h-4 ml-auto" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            ROW 2: DIGITAL WALLETS (Bkash Personal, Nagad Personal, Bkash Agent)
            3 columns on desktop (col-span-4 each)
        ======================================================== */}

        {/* CARD 5: Bkash Personal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-4 bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-pink-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl group transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-11 h-11 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Wallet className="w-5 h-5 text-pink-400" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/60">
              Personal
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span className="font-semibold text-slate-200">Bkash Personal</span>
              <span className="font-bengali">বিকাশ পার্সোনাল</span>
            </div>
            <div className="text-lg sm:text-xl font-mono font-bold text-pink-400 mb-3 select-all">
              01930313640
            </div>
            <CopyButton
              id="bento-copy-bkash-personal"
              textToCopy="01930313640"
              label="Copy Number"
              copiedLabel="Copied!"
              className="w-full"
              variant="secondary"
            />
          </div>
        </motion.div>

        {/* CARD 6: Nagad Personal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="lg:col-span-4 bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-amber-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl group transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
              <CreditCard className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/60">
              Personal
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span className="font-semibold text-slate-200">Nagad Personal</span>
              <span className="font-bengali">নগদ পার্সোনাল</span>
            </div>
            <div className="text-lg sm:text-xl font-mono font-bold text-amber-400 mb-3 select-all">
              01930313640
            </div>
            <CopyButton
              id="bento-copy-nagad-personal"
              textToCopy="01930313640"
              label="Copy Number"
              copiedLabel="Copied!"
              className="w-full"
              variant="secondary"
            />
          </div>
        </motion.div>

        {/* CARD 7: Bkash Agent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="lg:col-span-4 bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-rose-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xl group transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 text-rose-400" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/60">
              Agent
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span className="font-semibold text-slate-200">Bkash Agent</span>
              <span className="font-bengali">বিকাশ এজেন্ট</span>
            </div>
            <div className="text-lg sm:text-xl font-mono font-bold text-rose-400 mb-3 select-all">
              01310499958
            </div>
            <CopyButton
              id="bento-copy-bkash-agent"
              textToCopy="01310499958"
              label="Copy Number"
              copiedLabel="Copied!"
              className="w-full"
              variant="secondary"
            />
          </div>
        </motion.div>

        {/* ========================================================
            ROW 3: LOCATION & SOCIAL CONNECTIONS
            Location (col-span-7) + Social Links (col-span-5)
        ======================================================== */}

        {/* CARD 8: Location Bento Card */}
        <motion.div
          id="location"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-7 bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-red-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Physical Location</h3>
                <p className="text-xs text-slate-400 font-bengali">স্থায়ী ঠিকানা ও অবস্থান</p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/60">
              Address
            </span>
          </div>

          <div className="my-2">
            <p
              id="bento-location-address"
              className="text-base sm:text-lg font-bold text-slate-100 font-bengali leading-snug"
            >
              {PROFILE_DATA.location}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Haldibari, Kaunia, Rangpur, Bangladesh
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <a
              id="bento-btn-open-maps"
              href={PROFILE_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-sm transition-all active:scale-95 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-red-400" />
              <span>Open Location on Google Maps</span>
              <ArrowUpRight className="w-4 h-4 ml-auto text-slate-400" />
            </a>
          </div>
        </motion.div>

        {/* CARD 9: Social Connections (Find Me Online) */}
        <motion.div
          id="social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="lg:col-span-5 bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-slate-700/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Find Me Online</h3>
              <p className="text-xs text-slate-400 font-bengali">সোশ্যাল মিডিয়া প্রোফাইল</p>
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/60">
              Socials
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {/* Facebook */}
            <a
              id="bento-social-facebook"
              href={PROFILE_DATA.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-200 group-hover:text-blue-300 transition-colors">
                    Facebook
                  </div>
                  <div className="text-[11px] text-slate-400 font-bengali">অফিসিয়াল আইডি</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* WhatsApp */}
            <a
              id="bento-social-whatsapp"
              href={PROFILE_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-green-500/40 hover:bg-slate-800/60 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-600/20 text-green-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-200 group-hover:text-green-300 transition-colors">
                    WhatsApp Chat
                  </div>
                  <div className="text-[11px] text-slate-400 font-bengali">মেসেজ পাঠান</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-green-400 transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* ========================================================
            ROW 4: DEVELOPER INFO (Full Width Bento Card)
        ======================================================== */}
        <motion.div
          id="developer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-12 bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-orange-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Developer Identity Details */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="relative">
              <AvatarWithFallback
                src={PROFILE_DATA.developer.image}
                alt={`${PROFILE_DATA.developer.name} — ${PROFILE_DATA.developer.title}`}
                initials="HJ"
                size="md"
                isDeveloper={true}
                className="ring-2 ring-orange-500/30"
              />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20">
                  Website Developer
                </span>
              </div>
              <h4 id="bento-developer-name" className="text-xl font-bold text-white mt-1">
                {PROFILE_DATA.developer.name}
              </h4>
              <p className="text-xs text-orange-400/90 font-mono font-medium">
                {PROFILE_DATA.developer.title}
              </p>
              <p
                id="bento-developer-text"
                className="text-xs sm:text-sm text-slate-400 font-bengali mt-2 max-w-lg"
              >
                “{PROFILE_DATA.developer.text}”
              </p>
            </div>
          </div>

          {/* Contact Developer Call Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <a
              id="bento-btn-contact-developer"
              href={`tel:${PROFILE_DATA.developer.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl bg-slate-800 hover:bg-orange-500 text-slate-100 hover:text-slate-950 border border-slate-700 hover:border-orange-500 font-bold text-sm transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Contact Developer ({PROFILE_DATA.developer.phone})</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
