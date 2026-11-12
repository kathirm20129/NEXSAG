import React from 'react';

export default function SectionBadge({
  children,
  dark = false,
  className = ''
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
        dark
          ? 'bg-[#C95A22]/20 text-[#D97736] border border-[#C95A22]/35'
          : 'bg-[#C95A22]/10 text-[#C95A22] border border-[#C95A22]/25'
      } ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#C95A22] animate-pulse"></span>
      <span>{children}</span>
    </div>
  );
}
