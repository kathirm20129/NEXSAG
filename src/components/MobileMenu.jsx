import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { X, ArrowRight, Phone, Mail } from 'lucide-react';
import Button from './Button';
import logoImg from '../assets/NexSAG_New_Logo_Dark.png';

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  ctaText = 'Get Started'
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#080B10]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto lg:hidden"
        >
          {/* Top Bar with Logo and Close */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <NavLink to="/" onClick={onClose}>
              <img
                src={logoImg}
                alt="NexSAG Technology"
                className="h-10 w-auto object-contain brightness-110"
              />
            </NavLink>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C95A22] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="py-8 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 text-xl font-bold transition-all border-b border-white/5 ${
                    isActive
                      ? 'text-[#D97736] pl-2 border-l-4 border-l-[#C95A22]'
                      : 'text-white/80 hover:text-white hover:pl-2'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <Button
              to="/contact"
              onClick={onClose}
              variant="primary"
              size="lg"
              className="w-full text-center"
            >
              {ctaText}
            </Button>

            <div className="text-center text-xs text-gray-400 space-y-1.5 pt-2">
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                <Phone className="w-3.5 h-3.5 text-[#C95A22] shrink-0" />
                <a href="tel:+919342642796" className="hover:text-white transition-colors">+91 93426 42796</a>
                <span>|</span>
                <a href="tel:+919789597416" className="hover:text-white transition-colors">+91 97895 97416</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C95A22] shrink-0" />
                <a href="mailto:info@nexsag.com" className="hover:text-white transition-colors">info@nexsag.com</a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
