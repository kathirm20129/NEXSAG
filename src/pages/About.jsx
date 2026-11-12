import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import heroBuildingImg from '../assets/about_hero_tech_hq.jpg';
import aboutOfficeMeetingImg from '../assets/about_office_meeting.jpg';
import aboutHikerSunsetImg from '../assets/about_hiker_sunset.jpg';
import teamCelebrationImg from '../assets/Celebration Banner.png';
import aboutTeamDedicatedImg from '../assets/about_team_dedicated.png';
import aboutCtaHandNetworkImg from '../assets/about_cta_hand_network.jpg';

import {
  aboutHeroStats,
  aboutHeroPillars,
  whoWeArePills,
  coreValuesData
} from '../data/aboutPageData';

// Custom Solid Orange Vector SVGs for Hero 4 Pillars matching Figma Screenshot
function PillarMissionIcon() {
  return (
    <div className="w-12 h-12 rounded-[18px] bg-gradient-to-tr from-[#EA4317] to-[#FA631F] text-white flex items-center justify-center shrink-0 shadow-md">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    </div>
  );
}

function PillarVisionIcon() {
  return (
    <div className="w-12 h-12 rounded-[18px] bg-gradient-to-tr from-[#EA4317] to-[#FA631F] text-white flex items-center justify-center shrink-0 shadow-md">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    </div>
  );
}

function PillarValuesIcon() {
  return (
    <div className="w-12 h-12 rounded-[18px] bg-gradient-to-tr from-[#EA4317] to-[#FA631F] text-white flex items-center justify-center shrink-0 shadow-md">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white text-white">
        <path d="M12 3C12 3 13.5 7 15.5 8.5C17.5 10 20 10.5 20 13C20 17.4 16.4 21 12 21C7.6 21 4 17.4 4 13C4 10.5 6.5 10 8.5 8.5C10.5 7 12 3 12 3Z" />
        <path d="M12 9C12 9 10 11.5 10 13.5C10 15 11 16 12 16C13 16 14 15 14 13.5C14 11.5 12 9 12 9Z" fill="#EA4317" />
      </svg>
    </div>
  );
}

function PillarTeamIcon() {
  return (
    <div className="w-12 h-12 rounded-[18px] bg-gradient-to-tr from-[#EA4317] to-[#FA631F] text-white flex items-center justify-center shrink-0 shadow-md">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white text-white">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        <path d="M4 12c1.66 0 3-1.34 3-3S5.66 6 4 6 1 7.34 1 9s1.34 3 3 3zm0 2c-1.33 0-4 .67-4 2v2h4v-2c0-.73.27-1.4.73-2H4z" opacity="0.8" />
        <path d="M20 12c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-.73 0-1.4.27-2 .73v1.27h4v-2c0-1.33-2.67-2-2-2z" opacity="0.8" />
      </svg>
    </div>
  );
}

const pillarIconMap = {
  mission: PillarMissionIcon,
  vision: PillarVisionIcon,
  values: PillarValuesIcon,
  team: PillarTeamIcon
};

// Custom SVGs for Who We Are 4 Pills
function PillUsersIcon({ className = "w-4 h-4 sm:w-5 sm:h-5 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function PillLightbulbIcon({ className = "w-4 h-4 sm:w-5 sm:h-5 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
    </svg>
  );
}

function PillTargetIcon({ className = "w-4 h-4 sm:w-5 sm:h-5 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function PillHandshakeIcon({ className = "w-4 h-4 sm:w-5 sm:h-5 text-current" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2" />
      <path d="m2 14 6 6" />
      <path d="m13 7 3-3a1 1 0 0 1 1.4 0l4.3 4.3a1 1 0 0 1 0 1.4l-3 3" />
      <path d="m7 13 4-4" />
      <path d="M17 11 9 19" />
    </svg>
  );
}

const whoWeAreIconMap = {
  users: PillUsersIcon,
  lightbulb: PillLightbulbIcon,
  target: PillTargetIcon,
  handshake: PillHandshakeIcon
};

// Custom SVGs for Core Values 4 White Cards matching Figma Screenshot exactly
function ValueShieldIcon() {
  return (
    <div className="relative mb-5 flex items-center justify-center">
      {/* Soft warm ambient glow behind the icon */}
      <div className="absolute w-12 h-12 bg-[#EA4317]/25 rounded-full blur-md pointer-events-none" />
      <svg viewBox="0 0 48 54" className="w-12 h-13 relative z-10 drop-shadow-[0_4px_12px_rgba(234,67,23,0.35)] group-hover:scale-110 transition-transform duration-300" fill="none">
        <defs>
          <linearGradient id="shieldGrad" x1="4" y1="2" x2="44" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FA631F" />
            <stop offset="1" stopColor="#EA4317" />
          </linearGradient>
        </defs>
        {/* Shield shape */}
        <path
          d="M24 2 C34 2, 44 6, 44 14 C44 32, 33 46, 24 52 C15 46, 4 32, 4 14 C4 6, 14 2, 24 2 Z"
          fill="url(#shieldGrad)"
        />
        {/* Inner white outline / emblem */}
        <path
          d="M24 18 C21.5 14.5, 16 15, 15 19.5 C14 24, 20 29.5, 24 33.5 C28 29.5, 34 24, 33 19.5 C32 15, 26.5 14.5, 24 18 Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="23" r="2.2" fill="white" />
      </svg>
    </div>
  );
}

function ValueLightbulbIcon() {
  return (
    <div className="relative mb-5 flex items-center justify-center">
      {/* Soft warm ambient glow behind the icon */}
      <div className="absolute w-12 h-12 bg-[#EA4317]/25 rounded-full blur-md pointer-events-none" />
      <svg viewBox="0 0 48 54" className="w-12 h-13 relative z-10 drop-shadow-[0_4px_12px_rgba(234,67,23,0.35)] group-hover:scale-110 transition-transform duration-300" fill="none">
        <defs>
          <linearGradient id="bulbGrad" x1="11" y1="10" x2="37" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FA631F" />
            <stop offset="1" stopColor="#EA4317" />
          </linearGradient>
        </defs>
        {/* Radiant rays */}
        <line x1="24" y1="2" x2="24" y2="7" stroke="#FA631F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="8" y1="10" x2="12" y2="14" stroke="#FA631F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="40" y1="10" x2="36" y2="14" stroke="#FA631F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="3" y1="24" x2="8" y2="24" stroke="#FA631F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="45" y1="24" x2="40" y2="24" stroke="#FA631F" strokeWidth="2.5" strokeLinecap="round" />
        {/* Bulb body */}
        <path
          d="M24 10 C16.5 10, 11 15.5, 11 23 C11 28, 14 32, 17 35 L17 39 C17 40.5, 18.5 41.5, 20 41.5 L28 41.5 C29.5 41.5, 31 40.5, 31 39 L31 35 C34 32, 37 28, 37 23 C37 15.5, 31.5 10, 24 10 Z"
          fill="url(#bulbGrad)"
        />
        {/* Base thread */}
        <path d="M19 44 H29 M21 47 H27" stroke="#EA4317" strokeWidth="2.5" strokeLinecap="round" />
        {/* White inner filament */}
        <path
          d="M20.5 25 C20.5 21.5, 27.5 21.5, 27.5 25 C27.5 27, 25 29, 24 31.5"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function ValueStarIcon() {
  return (
    <div className="relative mb-5 flex items-center justify-center">
      {/* Soft warm ambient glow behind the icon */}
      <div className="absolute w-12 h-12 bg-[#EA4317]/25 rounded-full blur-md pointer-events-none" />
      <svg viewBox="0 0 48 54" className="w-12 h-13 relative z-10 drop-shadow-[0_4px_12px_rgba(234,67,23,0.35)] group-hover:scale-110 transition-transform duration-300" fill="none">
        <defs>
          <linearGradient id="starGrad" x1="4" y1="4" x2="44" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FA631F" />
            <stop offset="1" stopColor="#EA4317" />
          </linearGradient>
        </defs>
        <path
          d="M24 4 L29.8 17.5 L44 19.1 L33.4 28.8 L36.3 43 L24 35.8 L11.7 43 L14.6 28.8 L4 19.1 L18.2 17.5 Z"
          fill="url(#starGrad)"
          stroke="#EA4317"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Inner highlight facet */}
        <path
          d="M24 9 L28 18.5 L37 19.5 L30 26.5 L32 36 L24 31 Z"
          fill="white"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

function ValueUsersIcon() {
  return (
    <div className="relative mb-5 flex items-center justify-center">
      {/* Soft warm ambient glow behind the icon */}
      <div className="absolute w-12 h-12 bg-[#EA4317]/25 rounded-full blur-md pointer-events-none" />
      <svg viewBox="0 0 48 54" className="w-12 h-13 relative z-10 drop-shadow-[0_4px_12px_rgba(234,67,23,0.35)] group-hover:scale-110 transition-transform duration-300" fill="none">
        <defs>
          <linearGradient id="usersGrad" x1="5" y1="12" x2="43" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FA631F" />
            <stop offset="1" stopColor="#EA4317" />
          </linearGradient>
        </defs>
        {/* Center Leader Figure */}
        <circle cx="24" cy="18" r="6" fill="url(#usersGrad)" />
        <path
          d="M14 40 C14 32.5, 18.5 29, 24 29 C29.5 29, 34 32.5, 34 40 Z"
          fill="url(#usersGrad)"
        />
        {/* Left Teammate Figure */}
        <circle cx="12.5" cy="22" r="4.5" fill="url(#usersGrad)" opacity="0.9" />
        <path
          d="M5 40 C5 34.5, 8.5 32, 13.5 32 C15 32, 16.5 32.5, 17.8 33.2 C16 35, 15.2 37.5, 15 40 Z"
          fill="url(#usersGrad)"
          opacity="0.9"
        />
        {/* Right Teammate Figure */}
        <circle cx="35.5" cy="22" r="4.5" fill="url(#usersGrad)" opacity="0.9" />
        <path
          d="M43 40 C43 34.5, 39.5 32, 34.5 32 C33 32, 31.5 32.5, 30.2 33.2 C32 35, 32.8 37.5, 33 40 Z"
          fill="url(#usersGrad)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

const coreValueIconMap = {
  shield: ValueShieldIcon,
  lightbulb: ValueLightbulbIcon,
  star: ValueStarIcon,
  users: ValueUsersIcon
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#101820] overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION (Dark HQ Building at Dusk with NexSAG Signage)
          ========================================================================= */}
      <section className="relative bg-[#05080E] pt-10 sm:pt-14 pb-8 lg:pt-16 lg:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
        {/* Full-bleed HQ Building photograph seamlessly blended into dark background */}
        <div className="absolute top-0 right-0 w-full md:w-3/5 lg:w-[62%] h-full pointer-events-none overflow-hidden">
          <img
            src={heroBuildingImg}
            alt="NexSAG Technology Headquarters"
            className="w-full h-full object-cover object-[center_right] opacity-90 md:opacity-95"
          />
          {/* Gradients feathering image into dark obsidian background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080E] via-[#05080E]/75 md:via-[#05080E]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080E] via-transparent to-transparent" />
        </div>

        {/* Warm ember atmospheric glows */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#EA4317]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px] sm:min-h-[420px]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-4 sm:space-y-5"
            >
              {/* Pill: ABOUT US matching Figma */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#221611]/90 text-white border border-[#EA4317]/50 shadow-sm backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-[#EA4317]"></span>
                <span className="tracking-widest">ABOUT US</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-white leading-[1.08]">
                Building <br />
                Technology for <br />
                a <span className="text-[#EA4317]">Better Tomorrow</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-lg">
                We are a team of passionate professionals dedicated to delivering innovative IT solutions and quality education programs for businesses, institutions and individuals.
              </p>

              {/* Know More Button (Solid orange with dark text matching Figma) */}
              <div className="pt-1 sm:pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#EA4317] to-[#FA631F] hover:from-[#FA631F] hover:to-[#EA4317] text-[#101820] font-black text-xs sm:text-sm shadow-lg shadow-orange-950/40 hover:scale-105 transition-all duration-300"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Floating Stats Glass Box in single 4-column row matching Figma */}
            <div className="lg:col-span-6 flex justify-end items-end h-full pt-8 lg:pt-28">
              <div className="w-full bg-[#0B1017]/85 backdrop-blur-md rounded-[22px] p-4 sm:p-5 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-4 divide-x divide-white/10 items-center text-center">
                  {aboutHeroStats.map((stat) => (
                    <div key={stat.id} className="py-1 px-1.5 sm:px-2.5">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#EA4317] leading-none mb-1">
                        {stat.value}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-300 font-medium leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          1B. 4 MISSION, VISION, VALUES & TEAM CARDS (Dark Cards Row)
          ========================================================================= */}
      <section className="bg-[#05080E] px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-16 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {aboutHeroPillars.map((pillar) => {
            const Icon = pillarIconMap[pillar.icon] || PillarMissionIcon;
            return (
              <div
                key={pillar.id}
                className="bg-[#0B1017]/90 rounded-[22px] p-5 border border-white/10 shadow-xl flex items-center gap-3.5 hover:border-[#EA4317]/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <Icon />
                <div>
                  <h3 className="text-sm sm:text-base font-black text-white leading-tight mb-1 group-hover:text-[#EA4317] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-snug">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. WHO WE ARE: Empowering People Through Technology (Redesigned)
          ========================================================================= */}
      <section className="relative w-full bg-white text-[#101820] overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 lg:pb-8">
        {/* Ambient Warm Gradient Backdrops */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-orange-100/50 via-orange-50/20 to-transparent rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
        <div className="absolute bottom-10 left-0 w-[420px] h-[420px] bg-gradient-to-tr from-orange-100/40 via-amber-50/20 to-transparent rounded-full blur-2xl pointer-events-none -ml-28" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-4 sm:space-y-5"
            >
              {/* Badge: WHO WE ARE */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[#FFF0E8] text-[#EA4317] border border-[#FAD8C3] shadow-xs">
                <span className="w-2 h-2 rounded-xs rotate-45 bg-[#EA4317]"></span>
                <span>WHO WE ARE</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#101820] tracking-tight leading-[1.12]">
                Empowering People <br />
                Through <span className="text-[#EA4317]">Technology</span>
              </h2>

              {/* Paragraph */}
              <p className="text-sm sm:text-base lg:text-[16px] text-[#525F70] leading-relaxed">
                NexSAG Technology is a forward-thinking IT solutions and training company committed to helping businesses, institutions and individuals achieve their goals through technology, education and innovation.
              </p>
            </motion.div>

            {/* Right Visual Column: Modern Boardroom Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-orange-100 group">
                <img
                  src={aboutOfficeMeetingImg}
                  alt="NexSAG Team Empowering People Through Technology"
                  className="w-full h-[260px] sm:h-[340px] lg:h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle warm lighting vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                
                {/* Decorative glowing accent ring */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-orange-200/80 text-[11px] font-bold text-[#EA4317] shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4317] animate-ping" />
                  <span>Innovation Hub</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRANSITION: Seamless Glowing Wave Divider with Centered 4-Pill Feature Card
          ========================================================================= */}
      <div className="relative w-full bg-white z-20">
        {/* Glowing Orange Wave Line SVG */}
        <div className="relative w-full overflow-hidden leading-none -mb-[1px]">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-20 sm:h-24 lg:h-28 block"
            preserveAspectRatio="none"
          >
            {/* Dark Obsidian Fill beneath */}
            <path
              d="M0 50 C 380 90, 780 10, 1440 50 L 1440 100 L 0 100 Z"
              fill="#05080E"
            />
            {/* Glowing Orange Wave Line */}
            <path
              d="M0 48 C 380 88, 780 8, 1440 48"
              stroke="#EA4317"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Centered Floating 4-Feature Card on the Wave */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-[840px] bg-white rounded-2xl sm:rounded-full shadow-[0_16px_45px_rgba(0,0,0,0.12),0_4px_16px_rgba(234,67,23,0.06)] border border-gray-100/90 px-4 sm:px-8 py-3.5 sm:py-4.5 lg:py-5"
          >
            <div className="grid grid-cols-4 divide-x divide-gray-100/80 items-center">
              {whoWeArePills.map((pill) => {
                const Icon = whoWeAreIconMap[pill.icon] || PillUsersIcon;
                return (
                  <div
                    key={pill.id}
                    className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-center sm:text-left px-1 sm:px-3 lg:px-4 group cursor-default"
                  >
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFF0E8] border border-[#FAD8C3] flex items-center justify-center text-[#EA4317] shrink-0 group-hover:scale-110 group-hover:bg-[#EA4317] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-current" />
                    </div>
                    <span className="text-[10px] sm:text-xs lg:text-[13px] font-bold text-[#101820] leading-tight group-hover:text-[#EA4317] transition-colors">
                      {pill.line1 || pill.label.split(' ')[0]} <br className="hidden sm:inline" />
                      {pill.line2 || pill.label.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          4. OUR STORY: From a Vision to a Growing Reality (Redesigned)
          ========================================================================= */}
      <section className="relative w-full bg-[#05080E] text-white overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-32">
        {/* Ambient Orange Horizon Glow */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-l from-orange-600/15 via-orange-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-orange-950/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-5 sm:space-y-6"
            >
              {/* Badge: OUR STORY */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[#1B110C] text-[#EA4317] border border-[#EA4317]/40 shadow-sm">
                <span className="w-2 h-2 rounded-xs rotate-45 bg-[#EA4317]"></span>
                <span>OUR STORY</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-[1.12]">
                From a Vision <br />
                to a <span className="text-[#EA4317]">Growing Reality</span>
              </h2>

              {/* Paragraph */}
              <p className="text-sm sm:text-base lg:text-[16px] text-gray-300 leading-relaxed">
                NexSAG was founded with a simple vision — to make technology and education accessible, practical and impactful. What started as a small team with big dreams has now grown into a trusted partner for hundreds of businesses and learners across industries.
              </p>

              {/* Button: Contact Us */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA4317] to-[#FA631F] hover:from-[#FA631F] hover:to-[#EA4317] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-950/50 hover:shadow-orange-600/30 hover:scale-105 transition-all duration-300 group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Column: Mountain Summit Hiker Overlooking Skyline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={aboutHikerSunsetImg}
                  alt="NexSAG Journey From a Vision to a Growing Reality"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080E]/80 via-transparent to-transparent pointer-events-none" />

                {/* Slogan Badge: Driven by Purpose / Powered by People */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#0B1017]/90 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-white/15 shadow-2xl text-right">
                  <h4 className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide">
                    Driven by Purpose
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-[#EA4317] tracking-wide">
                    Powered by People
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR CORE VALUES: The Principles That Drive Us (Figma Match)
          ========================================================================= */}
      <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Soft Ambient Radial Warmth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-orange-100/30 via-orange-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Centered Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            {/* Badge: OUR CORE VALUES */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider bg-[#FFF0E8] text-[#EA4317] border border-[#FAD8C3] mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-xs rotate-45 bg-[#EA4317]"></span>
              <span className="text-[#101820]">OUR CORE VALUES</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#101820] tracking-tight leading-tight">
              The Principles That Drive Us
            </h2>

            {/* Center Orange Bar */}
            <div className="w-10 h-1 bg-[#EA4317] rounded-full mx-auto mt-2.5" />
          </div>

          {/* 4 White Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {coreValuesData.map((val) => {
              const Icon = coreValueIconMap[val.icon] || ValueShieldIcon;
              return (
                <div
                  key={val.id}
                  className="bg-white rounded-2xl sm:rounded-3xl pt-8 pb-7 px-5 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(234,67,23,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
                >
                  <Icon />
                  <h3 className="text-lg font-black text-[#101820] mb-2 leading-tight group-hover:text-[#EA4317] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#525F70] leading-relaxed max-w-[240px]">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OUR TEAM: A Dedicated Team Behind Your Success (Exact Figma Panoramic Banner)
          ========================================================================= */}
      <section className="relative w-full bg-white overflow-hidden py-10 sm:py-14 lg:py-0 min-h-[400px] lg:min-h-[460px] flex items-center">
        {/* Subtle Tech Dot Matrix Grid matching Figma */}
        <div className="absolute left-[38%] lg:left-[41%] top-1/2 -translate-y-1/2 w-28 sm:w-36 h-44 pointer-events-none hidden md:block opacity-40">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="teamFigmaDotsGrid" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.3" fill="#EA4317" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#teamFigmaDotsGrid)" />
          </svg>
        </div>

        {/* Bottom Left Corner Wave Swoosh matching Figma */}
        <div className="absolute bottom-0 left-0 w-44 sm:w-60 lg:w-72 h-16 sm:h-20 lg:h-24 pointer-events-none z-10 overflow-hidden">
          <svg viewBox="0 0 200 70" fill="none" className="w-full h-full" preserveAspectRatio="none">
            {/* Dark charcoal corner */}
            <path d="M 0 46 Q 50 58 130 70 L 0 70 Z" fill="#241E1A" />
            {/* Vibrant orange swoosh band */}
            <path d="M 0 32 Q 55 52 155 70 L 130 70 Q 50 58 0 46 Z" fill="#EA4317" />
          </svg>
        </div>

        {/* Right Panoramic Photo with Seamless Feathered Gradient Fade into White */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[56%] xl:w-[58%] pointer-events-none overflow-hidden">
          <img
            src={aboutTeamDedicatedImg}
            alt="NexSAG Dedicated Professional Team Behind Your Success"
            className="w-full h-full object-cover object-[center_32%]"
          />
          {/* Seamless feathered dissolve into the white canvas */}
          <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        {/* Responsive Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text & Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 xl:col-span-5 space-y-4 sm:space-y-5 py-4 sm:py-8"
            >
              {/* Badge: OUR TEAM */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-[#FFE9DC] text-[#EA4317]">
                <span className="w-1.5 h-1.5 rounded-xs rotate-45 bg-[#EA4317]" />
                <span>OUR TEAM</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#111827] tracking-tight leading-[1.12]">
                A Dedicated Team <br />
                Behind <span className="text-[#EA4317]">Your Success</span>
              </h2>

              {/* Paragraph */}
              <p className="text-sm sm:text-base lg:text-[16px] text-[#4B5563] leading-relaxed max-w-xl">
                Our team of experienced professionals, industry experts and passionate educators work together to deliver the best solutions and learning experiences.
              </p>

              {/* CTA Button: Meet Our Team */}
              <div className="pt-2 sm:pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FF5E19] to-[#FA4A0C] hover:brightness-105 text-[#18110D] font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 hover:scale-105 transition-all duration-300 group"
                >
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-4 h-4 text-[#18110D] stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Mobile / Tablet Photo View (< lg screens) */}
            <div className="block lg:hidden relative mt-4">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-orange-100/70 bg-white">
                <img
                  src={aboutTeamDedicatedImg}
                  alt="NexSAG Dedicated Professional Team Behind Your Success"
                  className="w-full h-[260px] sm:h-[340px] object-cover object-[center_32%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          9. CTA BANNER: Partner with NexSAG for a Brighter Tomorrow (Exact Figma Full-Bleed)
          ========================================================================= */}
      <section className="relative w-full bg-[#05080E] overflow-hidden py-12 sm:py-16 lg:py-20 flex items-center">
        {/* Top & Bottom Glowing Edges */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_15px_#EA4317]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_15px_#EA4317]" />

        {/* Right side futuristic hand & neural network visual matching Figma */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-[65%] lg:w-[60%] pointer-events-none overflow-hidden">
          <img
            src={aboutCtaHandNetworkImg}
            alt="Partner with NexSAG for a Brighter Tomorrow"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Seamless gradient fade into dark background */}
          <div className="absolute inset-y-0 left-0 w-36 sm:w-60 bg-gradient-to-r from-[#05080E] via-[#05080E]/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080E]/30 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Responsive Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-xl space-y-4 text-left">
            {/* Badge: LET'S BUILD TOGETHER */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#381B0E] to-[#241007] text-white border border-[#EA4317]/40 mb-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#EA4317]"></span>
              <span className="tracking-widest">LET'S BUILD TOGETHER</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-white tracking-tight leading-[1.12]">
              Partner with <span className="text-[#EA4317]">NexSAG</span> <br />
              for a <span className="text-[#EA4317]">Brighter Tomorrow</span>
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-[#A0AEC0] leading-relaxed max-w-lg font-normal">
              Be part of our journey. Let's create innovative solutions and success stories together.
            </p>

            {/* Buttons matching Figma */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 sm:pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FF5E19] to-[#FA4A0C] hover:brightness-105 text-[#18110D] font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 hover:scale-105 transition-all duration-300 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#18110D] stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-black/40 hover:bg-white/10 text-white border border-white/25 hover:border-white/50 font-bold text-xs sm:text-sm transition-all duration-300 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
