import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };
    // initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
        >
          <a
            id="floating-whatsapp-btn"
            href={PROFILE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat with Md Rubel Mia"
            className="group flex items-center gap-2.5 bg-green-600 hover:bg-green-500 text-white px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-full shadow-2xl shadow-green-600/40 hover:shadow-green-600/60 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-slate-950"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            <MessageCircle className="w-5 h-5 fill-white text-green-600" />
            <span className="font-bold text-sm tracking-tight hidden xs:inline text-white">
              WhatsApp
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
