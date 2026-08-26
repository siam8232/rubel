import React, { useState } from 'react';
import { User, Code2 } from 'lucide-react';

interface AvatarProps {
  src: string;
  alt: string;
  initials: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
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
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-base',
    lg: 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-xl sm:text-2xl',
    xl: 'w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 text-3xl sm:text-4xl',
  };

  return (
    <div
      className={`relative rounded-full overflow-hidden flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}
    >
      {!imgError && (
        <img
          src={src}
          alt={alt}
          loading="eager"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      )}

      {(!imgLoaded || imgError) && (
        <div
          className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${
            isDeveloper
              ? 'from-indigo-900/80 via-slate-900 to-purple-950/80 text-indigo-200'
              : 'from-emerald-950/90 via-slate-900 to-teal-950/80 text-emerald-300'
          }`}
        >
          {isDeveloper ? (
            <Code2 className="w-1/3 h-1/3 mb-1 opacity-60" />
          ) : (
            <User className="w-1/3 h-1/3 mb-1 opacity-60" />
          )}
          <span className="font-bold tracking-wider font-mono">{initials}</span>
        </div>
      )}
    </div>
  );
};
