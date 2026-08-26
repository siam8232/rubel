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
  variant = 'secondary',
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

      if (navigator.vibrate) {
        navigator.vibrate(50);
      }

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 select-none cursor-pointer disabled:opacity-50';

  const variantStyles = {
    primary: copied
      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 border border-emerald-500'
      : 'bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold shadow-md shadow-orange-500/20 active:scale-95 border border-orange-400/40',
    secondary: copied
      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30'
      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 border border-slate-300/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/90 dark:text-slate-200 dark:border-slate-700/80 active:scale-95 shadow-xs',
    compact: copied
      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 px-3 py-1.5 text-xs'
      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-300 dark:border-slate-700 px-3 py-1.5 text-xs active:scale-95',
    pill: copied
      ? 'bg-emerald-600 text-white rounded-full'
      : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full active:scale-95',
  };

  return (
    <button
      id={id || `copy-btn-${textToCopy.replace(/\D/g, '')}`}
      type="button"
      onClick={handleCopy}
      aria-label={`${copied ? copiedLabel : label} ${textToCopy}`}
      className={`${baseStyles} ${variantStyles[variant]} px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-300 font-bold"
          >
            <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
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
            <Copy className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
            <span className="whitespace-nowrap">{label}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
