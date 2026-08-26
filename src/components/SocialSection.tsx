import React from 'react';
import { MessageCircle, ArrowUpRight, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';

export const SocialSection: React.FC = () => {
  return (
    <section id="social" className="py-8 sm:py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2
          id="social-section-title"
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
        >
          Find Me Online
        </h2>
        <p className="text-sm text-slate-400 font-bengali mt-1">
          অনলাইন ও সোশ্যাল প্ল্যাটফর্মে যুক্ত হোন
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full mx-auto mt-3" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Facebook Link Card */}
        <motion.a
          id="social-card-facebook"
          href={PROFILE_DATA.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="group relative bg-[#0b101c]/80 backdrop-blur-md border border-white/10 hover:border-blue-500/50 rounded-2xl p-5 transition-all duration-300 hover:bg-[#0e1424] shadow-lg flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 group-hover:scale-105 transition-transform">
              {/* Clean SVG Facebook Icon */}
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-lg group-hover:text-blue-300 transition-colors">
                Facebook
              </h3>
              <p className="text-xs text-slate-400 font-bengali">
                অফিসিয়াল প্রোফাইল
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all">
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </motion.a>

        {/* WhatsApp Direct Link Card */}
        <motion.a
          id="social-card-whatsapp"
          href={PROFILE_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="group relative bg-[#0b101c]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/50 rounded-2xl p-5 transition-all duration-300 hover:bg-[#0e1424] shadow-lg flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-lg group-hover:text-emerald-300 transition-colors">
                WhatsApp
              </h3>
              <p className="text-xs text-slate-400 font-bengali">
                সরাসরি মেসেজ পাঠান
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
            <span>Chat</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};
