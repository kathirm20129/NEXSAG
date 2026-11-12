import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'dark-glass', 'outline-orange'
  size = 'md', // 'sm', 'md', 'lg'
  icon = true,
  className = '',
  disabled = false,
  type = 'button'
}) {
  const sizeClasses = {
    sm: 'px-5 py-2 text-xs font-semibold gap-1.5',
    md: 'px-7 py-3 text-sm font-semibold gap-2',
    lg: 'px-9 py-4 text-base font-bold gap-2.5'
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#C95A22] via-[#D97736] to-[#C95A22] bg-[length:200%_auto] hover:bg-right text-white shadow-md bronze-glow hover:bronze-glow-lg border border-transparent transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white text-[#101820] hover:text-[#C95A22] border border-[#E8E3DD] hover:border-[#C95A22] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0',
    'dark-glass':
      'bg-[#111820]/80 backdrop-blur-md text-white border border-white/15 hover:border-[#D97736] hover:text-[#D97736] shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0',
    'outline-orange':
      'bg-transparent text-[#C95A22] border-2 border-[#C95A22] hover:bg-[#C95A22] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0',
    'outline-bronze':
      'bg-transparent text-[#C95A22] border-2 border-[#C95A22] hover:bg-[#C95A22] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0'
  };

  const baseClasses = `group inline-flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer select-none font-sans ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
}
