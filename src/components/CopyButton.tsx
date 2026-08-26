import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'compact' | 'pill';
  id?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = 'Copy Number',
  copiedLabel = 'Copied!',
  className = '',
  variant = 'primary',
  id,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for non-https or older browser environments
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      // Haptic vibration feedback if available on mobile
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 select-none cursor-pointer disabled:opacity-50';

  const variantStyles = {
    primary: copied
      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 border-emerald-500'
      : 'bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold shadow-lg shadow-orange-500/20 active:scale-95 border border-orange-400/40',
    secondary: copied
      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
      : 'bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/80 hover:border-slate-600 active:scale-95 shadow-sm',
    compact: copied
      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 px-3 py-1.5 text-xs'
      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 px-3 py-1.5 text-xs active:scale-95',
    pill: copied
      ? 'bg-emerald-500 text-white rounded-full'
      : 'bg-slate-800 text-slate-200 hover:bg-slate-700 rounded-full active:scale-95',
  };

  return (
    <button
      id={id || `copy-btn-${textToCopy.replace(/\D/g, '')}`}
      type="button"
      onClick={handleCopy}
      aria-label={`${copied ? copiedLabel : label} ${textToCopy}`}
      className={`${baseStyles} ${variantStyles[variant]} px-4 py-2.5 rounded-xl text-sm font-semibold ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5 text-emerald-300"
          >
            <Check className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            <span className="whitespace-nowrap">{copiedLabel}</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            <Copy className="w-4 h-4 stroke-[2]" aria-hidden="true" />
            <span className="whitespace-nowrap">{label}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
