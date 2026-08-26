import React from 'react';
import {
  Phone,
  MessageCircle,
  CreditCard,
  Building2,
  Wallet,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/profileData';
import { CopyButton } from './CopyButton';
import { ContactItem } from '../types';

export const ContactSection: React.FC = () => {
  const getIconForType = (type: ContactItem['type']) => {
    switch (type) {
      case 'call':
        return <Phone className="w-6 h-6 text-emerald-400" />;
      case 'whatsapp':
        return <MessageCircle className="w-6 h-6 text-green-400" />;
      case 'bkash-personal':
        return <Wallet className="w-6 h-6 text-pink-400" />;
      case 'nagad-personal':
        return <CreditCard className="w-6 h-6 text-orange-400" />;
      case 'bkash-agent':
        return <Building2 className="w-6 h-6 text-rose-400" />;
      default:
        return <Phone className="w-6 h-6 text-slate-400" />;
    }
  };

  const getBorderColor = (type: ContactItem['type']) => {
    switch (type) {
      case 'call':
        return 'hover:border-emerald-500/50 group-hover:shadow-emerald-500/10';
      case 'whatsapp':
        return 'hover:border-green-500/50 group-hover:shadow-green-500/10';
      case 'bkash-personal':
        return 'hover:border-pink-500/50 group-hover:shadow-pink-500/10';
      case 'nagad-personal':
        return 'hover:border-orange-500/50 group-hover:shadow-orange-500/10';
      case 'bkash-agent':
        return 'hover:border-rose-500/50 group-hover:shadow-rose-500/10';
      default:
        return 'hover:border-slate-500/50';
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2
          id="contact-section-title"
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
        >
          Contact Me
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-bengali mt-1">
          যোগাযোগ ও লেনদেনের জন্য প্রয়োজনীয় নম্বরসমূহ
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mt-3" />
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {PROFILE_DATA.contacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            id={contact.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className={`group relative bg-[#0b101c]/80 backdrop-blur-md border border-white/10 ${getBorderColor(
              contact.type
            )} rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-[#0e1424] shadow-lg flex flex-col justify-between`}
          >
            {/* Top row: Icon & Label & Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 group-hover:scale-105 transition-transform">
                  {getIconForType(contact.type)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-100 text-lg">
                      {contact.label}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 font-bengali">
                    {contact.sublabel}
                  </p>
                </div>
              </div>

              {contact.badge && (
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.07] text-slate-300 border border-white/10">
                  {contact.badge}
                </span>
              )}
            </div>

            {/* Middle row: Phone Number Display */}
            <div className="my-3 py-2 px-3.5 rounded-xl bg-[#06080e]/70 border border-white/5 flex items-center justify-between">
              <span className="font-mono text-lg sm:text-xl font-bold tracking-wider text-white select-all">
                {contact.number}
              </span>
              <span className="text-xs font-mono text-slate-400 font-medium">
                BD (+88)
              </span>
            </div>

            {/* Bottom row: Interactive Action (Call / WhatsApp / Copy) */}
            <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
              {contact.actionType === 'call' && (
                <a
                  id={`btn-call-${contact.number}`}
                  href={contact.actionUrl}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>{contact.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4 ml-auto" />
                </a>
              )}

              {contact.actionType === 'whatsapp' && (
                <a
                  id={`btn-whatsapp-${contact.number}`}
                  href={contact.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm transition-all shadow-md shadow-[#25D366]/20 active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>{contact.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4 ml-auto" />
                </a>
              )}

              {contact.actionType === 'copy' && (
                <div className="w-full flex items-center justify-end">
                  <CopyButton
                    id={`btn-copy-${contact.type}`}
                    textToCopy={contact.rawNumber}
                    label={contact.buttonText}
                    copiedLabel="Copied!"
                    className="w-full"
                    variant="secondary"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
