import React, { useState, useEffect } from 'react';
import { User, Code2 } from 'lucide-react';

interface AvatarProps {
  src: string | string[];
  alt: string;
  initials: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  isDeveloper?: boolean;
  className?: string;
}

export const AvatarWithFallback: React.FC<AvatarProps> = ({
  src,
  alt,
  initials,
  size = 'lg',
  isDeveloper = false,
  className = '',
}) => {
  // Generate candidate URLs if given a base name or single url
  const candidateUrls: string[] = React.useMemo(() => {
    if (Array.isArray(src)) return src;
    if (!src) return [];
    
    // If src is something like /images/hm-jihad.jpg or /images/rubel-mia.jpg
    const baseWithoutExt = src.replace(/\.(jpg|jpeg|png|webp|svg)$/i, '');
    const currentExt = src.match(/\.(jpg|jpeg|png|webp|svg)$/i)?.[0] || '';
    
    // Put developer favorite png first if isDeveloper
    const preferredOrder = isDeveloper
      ? ['.png', '.jpg', '.jpeg', '.webp']
      : ['.jpg', '.png', '.jpeg', '.webp'];

    const set = new Set<string>();
    if (src) set.add(src);
    preferredOrder.forEach((ext) => set.add(`${baseWithoutExt}${ext}`));
    
    return Array.from(set);
  }, [src, isDeveloper]);

  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  useEffect(() => {
    setCandidateIndex(0);
    setImgLoaded(false);
    setAllFailed(false);
  }, [src]);

  const handleImgError = () => {
    if (candidateIndex + 1 < candidateUrls.length) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  const currentSrc = candidateUrls[candidateIndex];

  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-20 h-20 sm:w-24 sm:h-24 text-lg sm:text-xl',
    xl: 'w-28 h-28 sm:w-32 sm:h-32 text-2xl',
    '2xl': 'w-36 h-36 sm:w-40 sm:h-40 text-3xl',
    hero: 'w-full h-full',
  };

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center select-none ${
        size === 'hero' ? 'w-full h-full rounded-none' : 'rounded-full'
      } ${sizeClasses[size]} ${className}`}
    >
      {!allFailed && currentSrc && (
        <img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          loading="eager"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
          onLoad={() => setImgLoaded(true)}
          onError={handleImgError}
        />
      )}

      {(!imgLoaded || allFailed) && (
        <div
          className={`w-full h-full flex flex-col items-center justify-center ${
            isDeveloper
              ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 text-white dark:from-indigo-900/90 dark:via-slate-900 dark:to-purple-950/90 dark:text-indigo-200'
              : 'bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700 text-white dark:from-orange-950/90 dark:via-slate-900 dark:to-amber-950/80 dark:text-orange-300'
          }`}
        >
          {isDeveloper ? (
            <Code2 className="w-1/3 h-1/3 mb-1 opacity-80" />
          ) : (
            <User className="w-1/3 h-1/3 mb-1 opacity-80" />
          )}
          <span className="font-extrabold tracking-wider font-mono text-xs sm:text-sm">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
};
