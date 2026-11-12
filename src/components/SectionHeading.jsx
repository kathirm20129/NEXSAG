import React from 'react';

export default function SectionHeading({
  badge,
  title,
  highlight,
  titleAfter = '',
  description,
  align = 'left', // 'left', 'center', 'right'
  dark = false,
  className = '',
  size = 'hero' // 'hero', 'section', 'compact'
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  const titleSizes = {
    hero: 'text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight font-extrabold',
    section: 'text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight font-extrabold',
    compact: 'text-2xl sm:text-3xl md:text-4xl leading-tight font-bold'
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} max-w-3xl ${className}`}>
      {badge && (
        <div className="mb-4">
          {badge}
        </div>
      )}

      <h1 className={`${titleSizes[size]} ${dark ? 'text-white' : 'text-[#101820]'}`}>
        {title}{' '}
        {highlight && (
          <span
            className={`text-transparent bg-clip-text ${
              dark
                ? 'bg-gradient-to-r from-[#d55023] to-[#F39C6B]'
                : 'bg-gradient-to-r from-[#351402] to-[#d55023]'
            }`}
          >
            {highlight}
          </span>
        )}{' '}
        {titleAfter}
      </h1>

      {description && (
        <p
          className={`mt-5 text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
            dark ? 'text-gray-300' : 'text-[#667085]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
