import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/NexSAG_New_Logo_Dark.png';
import homeBgVideo from '../assets/home background video.mp4';

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.09-1.11l-.29-.17-3.05.8 1.1-2.97-.19-.3a8.19 8.19 0 0 1-1.25-4.49c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29z"/>
  </svg>
);

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative text-white overflow-hidden transition-colors ${
        isHomePage
          ? 'bg-transparent'
          : 'bg-[#080B10] border-t border-white/10'
      }`}
    >
      {/* Background Video (shown on non-home pages so other pages also have the theme) */}
      {!isHomePage && (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={homeBgVideo} type="video/mp4" />
          </video>
          {/* Cinematic dark ambient gradient overlay for crystal clear text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/90 via-[#080B10]/80 to-[#080B10]/95" />
        </div>
      )}

      {/* Subtle top bronze glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C95A22]/50 to-transparent z-10"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isHomePage
            ? 'pt-4 sm:pt-6 pb-8 sm:pb-10'
            : 'pt-14 sm:pt-16 pb-12'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between lg:items-start gap-8 lg:gap-6 xl:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Description */}
          <div className="lg:max-w-[280px] space-y-4 shrink-0">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="NexSAG Technology Logo"
                className="h-9 sm:h-11 w-auto object-contain brightness-110 drop-shadow-md"
              />
            </Link>
            <p className="text-sm font-semibold text-[#D97736] tracking-wide">
              Next Generation IT Solutions
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We provide innovative digital solutions and industry-focused technology training to help businesses, institutions and individuals grow.
            </p>
            <div className="pt-1 space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
                <a href="tel:+919342642796" className="hover:text-white transition-colors">+91 93426 42796</a>
                <span className="text-gray-500">/</span>
                <a href="tel:+919789597416" className="hover:text-white transition-colors">+91 97895 97416</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D97736] shrink-0" />
                <a href="mailto:info@nexsag.com" className="hover:text-white transition-colors">info@nexsag.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="shrink-0">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#D97736] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D97736] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/academic" className="hover:text-[#D97736] transition-colors">
                  Academic
                </Link>
              </li>
              <li>
                <Link to="/success" className="hover:text-[#D97736] transition-colors">
                  Our Success
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D97736] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D97736] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="shrink-0">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link to="/services" className="flex items-center gap-2 hover:text-[#D97736] transition-colors group">
                  <span className="text-[#C95A22] text-xs leading-none shrink-0">•</span>
                  <span className="whitespace-nowrap">Website Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 hover:text-[#D97736] transition-colors group">
                  <span className="text-[#C95A22] text-xs leading-none shrink-0">•</span>
                  <span className="whitespace-nowrap">SaaS Product Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 hover:text-[#D97736] transition-colors group">
                  <span className="text-[#C95A22] text-xs leading-none shrink-0">•</span>
                  <span className="whitespace-nowrap">Application Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 hover:text-[#D97736] transition-colors group">
                  <span className="text-[#C95A22] text-xs leading-none shrink-0">•</span>
                  <span className="whitespace-nowrap">AI Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 hover:text-[#D97736] transition-colors group">
                  <span className="text-[#C95A22] text-xs leading-none shrink-0">•</span>
                  <span className="whitespace-nowrap">Cybersecurity</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 hover:text-[#D97736] transition-colors group">
                  <span className="text-[#C95A22] text-xs leading-none shrink-0">•</span>
                  <span className="whitespace-nowrap">Digital Marketing & SEO</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 hover:text-[#D97736] transition-colors group">
                  <span className="text-[#C95A22] text-xs leading-none shrink-0">•</span>
                  <span className="whitespace-nowrap">Final Year Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 hover:text-[#D97736] transition-colors group">
                  <span className="text-[#C95A22] text-xs leading-none shrink-0">•</span>
                  <span className="whitespace-nowrap">Courses & Placement Training</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Us */}
          <div className="shrink-0">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/nexsag.technology/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#C95A22] hover:border-[#C95A22] transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61595298850008"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#C95A22] hover:border-[#C95A22] transition-all"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://wa.me/919342642796"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#C95A22] hover:border-[#C95A22] transition-all"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>

          {/* Col 5: Newsletter */}
          <div className="w-full sm:w-auto lg:w-56 xl:w-60 shrink-0">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-2">
              Newsletter
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Subscribe to get the latest updates
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-white text-gray-900 placeholder-gray-400 text-xs rounded-full py-2.5 pl-4 pr-11 focus:outline-none focus:ring-2 focus:ring-[#C95A22]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#C95A22] hover:bg-[#D97736] text-white flex items-center justify-center transition-colors shadow-md"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar with Back-To-Top button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative">
          <p>© 2026 NexSAG Technology. All Rights Reserved.</p>
          <div className="flex items-center gap-4 sm:mr-14">
          </div>

          {/* Floating Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="sm:absolute right-0 bottom-0 w-10 h-10 rounded-full bg-[#C95A22] hover:bg-[#D97736] text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 active:translate-y-0"
          >
            <svg
              className="w-5 h-5 stroke-current stroke-2 fill-none"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
