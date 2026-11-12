import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Button from './Button';
import MobileMenu from './MobileMenu';
import logoDarkImg from '../assets/NexSAG_New_Logo_Dark.png';
import logoLightImg from '../assets/NexSAG_New_Logo_Light.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Determine if the current page has a dark hero (Home, Academic, and About Us)
  const isDarkPage =
    location.pathname === '/' ||
    location.pathname === '/academic' ||
    location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/academic', label: 'Academic' },
    { to: '/success', label: 'Our Success' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' }
  ];

  // Dynamic CTA button text per page as shown in reference design
  const getCtaText = () => {
    if (location.pathname === '/services') return 'Get a Quote';
    if (location.pathname === '/academic') return 'Join Our Programs';
    if (location.pathname === '/contact') return 'Get in Touch';
    return 'Get Started';
  };

  // Header background style depending on page theme and scroll state
  const getHeaderBg = () => {
    // 1. Home page: Full-page fixed video behind navbar
    if (location.pathname === '/') {
      return scrolled
        ? 'bg-[#080B10]/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
        : 'bg-transparent border-b border-white/10 py-3.5';
    }

    // 2. Academic page: Dark hero (#080B10)
    if (location.pathname === '/academic') {
      return scrolled
        ? 'bg-[#080B10]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
        : 'bg-[#080B10] border-b border-white/10 py-3.5';
    }

    // 3. About Us page: Dark hero (#05080E)
    if (location.pathname === '/about') {
      return scrolled
        ? 'bg-[#05080E]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
        : 'bg-[#05080E] border-b border-white/10 py-3.5';
    }

    // 4. Light-themed pages (Services, Our Success, Contact)
    return scrolled
      ? 'bg-white/95 backdrop-blur-md border-b border-[#E8E3DD] shadow-xs py-3'
      : 'bg-white/90 backdrop-blur-md border-b border-[#F0EAE2] py-3.5';
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${getHeaderBg()}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <img
                src={isDarkPage ? logoDarkImg : logoLightImg}
                alt="NexSAG Technology"
                className={`h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                  isDarkPage
                    ? 'drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
                    : ''
                }`}
              />
            </Link>

            {/* Desktop Center Nav Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-semibold transition-colors duration-200 ${
                      isDarkPage
                        ? isActive
                          ? 'text-white font-bold'
                          : 'text-white/85 hover:text-[#EA4317]'
                        : isActive
                          ? 'text-[#101820] font-bold'
                          : 'text-[#101820]/80 hover:text-[#EA4317]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#EA4317] rounded-full"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button to="/contact" size="md" variant="primary">
                {getCtaText()}
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded-xl transition-colors ${
                  isDarkPage
                    ? 'text-white hover:bg-white/10'
                    : 'text-[#101820] hover:bg-black/5'
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        ctaText={getCtaText()}
      />
    </>
  );
}
