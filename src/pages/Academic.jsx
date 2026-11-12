import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Award,
  Laptop,
  BookOpen,
  Briefcase,
  GraduationCap,
  Monitor,
  BarChart3,
  Brain,
  Shield,
  Megaphone,
  Users,
  Cloud,
  UserCheck,
  UserPlus,
  Headphones,
  Star,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import heroStudentImg from '../assets/academic_hero_student.jpg';
import gradFutureImg from '../assets/academic_grad_future.jpg';
import whyLearnBgImg from '../assets/why_learn_growth_bg.jpg';
import testimonialsBgImg from '../assets/testimonials_students_bg.jpg';
import {
  academicHeroFeatures,
  popularProgramsData,
  whyLearnFeatures,
  programCategoriesData,
  learningProcessSteps,
  studentTestimonialsData
} from '../data/courses';

const categoryIconMap = {
  Monitor,
  BarChart3,
  Brain,
  Shield,
  Megaphone,
  Users,
  Cloud,
  UserCheck
};

// 4 Exact Custom Solid Orange SVGs for the Hero Feature Cards
function CertifiedCoursesIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-12 sm:h-12" fill="none">
      <path d="M24 6L43 15.5L24 25L5 15.5L24 6Z" fill="#EA4317" />
      <path d="M11 20V27.5C11 27.5 16 33 24 33C32 33 37 27.5 37 27.5V20L24 26.5L11 20Z" fill="#FA631F" />
      <path d="M15 34.5L24 40L33 34.5L24 30.5L15 34.5Z" fill="#EA4317" />
      <circle cx="43" cy="22" r="2" fill="#FA631F" />
      <path d="M43 15.5V22" stroke="#FA631F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HandsOnTrainingIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-12 sm:h-12" fill="none">
      <rect x="7" y="6" width="34" height="36" rx="8" fill="#EA4317" />
      <rect x="9.5" y="8.5" width="29" height="31" rx="6" fill="#FA631F" />
      <g fill="white">
        <circle cx="24" cy="24" r="6.5" />
        <rect x="22" y="14.5" width="4" height="4" rx="1" />
        <rect x="22" y="29.5" width="4" height="4" rx="1" />
        <rect x="14.5" y="22" width="4" height="4" rx="1" />
        <rect x="29.5" y="22" width="4" height="4" rx="1" />
        <rect x="18" y="18" width="4" height="4" rx="1" transform="rotate(45 20 20)" />
        <rect x="26.5" y="26.5" width="4" height="4" rx="1" transform="rotate(45 28.5 28.5)" />
        <rect x="26.5" y="18" width="4" height="4" rx="1" transform="rotate(-45 28.5 20)" />
        <rect x="18" y="26.5" width="4" height="4" rx="1" transform="rotate(-45 20 28.5)" />
        <circle cx="24" cy="24" r="3.2" fill="#FA631F" />
      </g>
    </svg>
  );
}

function UpdatedCurriculumIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-12 sm:h-12" fill="none">
      <rect x="8" y="8" width="32" height="36" rx="7" fill="#FA631F" />
      <rect x="9" y="9" width="30" height="34" rx="6" fill="#EA4317" />
      <rect x="17" y="4" width="14" height="7" rx="2.5" fill="#C93810" />
      <rect x="19.5" y="6" width="9" height="2.5" rx="1.2" fill="white" />
      <rect x="14" y="18" width="20" height="3" rx="1.5" fill="white" />
      <rect x="14" y="25" width="20" height="3" rx="1.5" fill="white" />
      <rect x="14" y="32" width="13" height="3" rx="1.5" fill="white" />
    </svg>
  );
}

function PlacementSupportIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-11 h-11 sm:w-12 sm:h-12" fill="none">
      <circle cx="24" cy="15" r="5.5" fill="#FA631F" />
      <path d="M15 31C15 26 19 22.5 24 22.5C29 22.5 33 26 33 31H15Z" fill="#FA631F" />
      <circle cx="12.5" cy="19" r="4.2" fill="#EA4317" />
      <path d="M6 33C6 29 9 26.5 12.5 26.5C14.2 26.5 15.8 27.2 17 28.5C15.8 29.8 15.2 31.5 15.2 33H6Z" fill="#EA4317" />
      <circle cx="35.5" cy="19" r="4.2" fill="#EA4317" />
      <path d="M42 33C42 29 39 26.5 35.5 26.5C33.8 26.5 32.2 27.2 31 28.5C32.2 29.8 32.8 31.5 32.8 33H42Z" fill="#EA4317" />
    </svg>
  );
}

// Custom Solid Orange SVGs for Program Categories
function CategoryFinalYearProjectIcon() {
  return (
    <svg viewBox="0 0 38 38" className="w-9 h-9 sm:w-10 sm:h-10" fill="none">
      <path d="M19 5L34 12.5L19 20L4 12.5L19 5Z" fill="#EA4317" />
      <path d="M9.5 16V22.5C9.5 22.5 13.5 27 19 27C24.5 27 28.5 22.5 28.5 22.5V16L19 21L9.5 16Z" fill="#FA631F" />
      <path d="M13 28L19 32.5L25 28L19 25L13 28Z" fill="#EA4317" />
      <circle cx="34" cy="18" r="1.5" fill="#FA631F" />
      <path d="M34 12.5V18" stroke="#FA631F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CategoryPlacementTrainingIcon() {
  return (
    <svg viewBox="0 0 38 38" className="w-9 h-9 sm:w-10 sm:h-10" fill="none">
      <rect x="6" y="11" width="26" height="19" rx="4" fill="#EA4317" />
      <path d="M13 11V8C13 6.89543 13.8954 6 15 6H23C24.1046 6 25 6.89543 25 8V11" stroke="#EA4317" strokeWidth="2.5" />
      <path d="M6 18H32" stroke="white" strokeWidth="2" />
      <circle cx="19" cy="20.5" r="2.5" fill="white" />
    </svg>
  );
}

function CategoryCoursesIcon() {
  return (
    <svg viewBox="0 0 38 38" className="w-9 h-9 sm:w-10 sm:h-10" fill="none">
      <rect x="4" y="6" width="30" height="20" rx="3.5" fill="#EA4317" />
      <rect x="7" y="9" width="24" height="14" rx="1.5" fill="white" />
      <rect x="17" y="26" width="4" height="4" fill="#EA4317" />
      <rect x="12" y="30" width="14" height="2.5" rx="1.25" fill="#EA4317" />
      <path d="M10 13H18M10 16H24M10 19H16" stroke="#EA4317" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CategoryConsultingIcon() {
  return (
    <svg viewBox="0 0 38 38" className="w-9 h-9 sm:w-10 sm:h-10" fill="none">
      <circle cx="19" cy="12.5" r="4.2" fill="#EA4317" />
      <path d="M12 27C12 22.5 15.2 19.5 19 19.5C22.8 19.5 26 22.5 26 27H12Z" fill="#EA4317" />
      <circle cx="9.5" cy="15.5" r="3.2" fill="#EA4317" />
      <path d="M4 28C4 24.8 6.5 22.5 9.5 22.5C11 22.5 12.2 23.2 13 24C12.2 25.2 11.8 26.5 11.8 28H4Z" fill="#EA4317" />
      <circle cx="28.5" cy="15.5" r="3.2" fill="#EA4317" />
      <path d="M34 28C34 24.8 31.5 22.5 28.5 22.5C27 22.5 25.8 23.2 25 24C25.8 25.2 26.2 26.5 26.2 28H34Z" fill="#EA4317" />
    </svg>
  );
}

const categoryCustomIconMap = {
  'final-year-project': CategoryFinalYearProjectIcon,
  'placement-training': CategoryPlacementTrainingIcon,
  courses: CategoryCoursesIcon,
  'it-consulting': CategoryConsultingIcon
};

const heroIconMap = {
  cert: CertifiedCoursesIcon,
  'hands-on': HandsOnTrainingIcon,
  curriculum: UpdatedCurriculumIcon,
  placement: PlacementSupportIcon
};

const whyLearnIconMap = {
  GraduationCap,
  BookOpen,
  Award,
  Briefcase
};

// 5 Exact Custom Solid Orange SVGs for the Learning Process Cylinders
function ProcessEnrollIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
      <circle cx="16" cy="10" r="4.5" fill="#EA4317" />
      <path d="M8 23C8 19 11.5 16 16 16C20.5 16 24 19 24 23H8Z" fill="#EA4317" />
      <rect x="18" y="18" width="8" height="6" rx="1.5" fill="#FA631F" />
      <circle cx="20.5" cy="20.5" r="1" fill="white" />
      <line x1="22.5" y1="20.5" x2="24.5" y2="20.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="19.5" y1="22.5" x2="24.5" y2="22.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function ProcessLearnIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
      <path d="M16 9C12.5 7.2 8 7.5 5 9.2V23C8 21.2 12.5 21 16 22.8C19.5 21 24 21.2 27 23V9.2C24 7.5 19.5 7.2 16 9Z" fill="#EA4317" />
      <line x1="16" y1="9" x2="16" y2="22.8" stroke="white" strokeWidth="1.8" />
      <line x1="8" y1="13" x2="13" y2="13" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="8" y1="16" x2="13" y2="16" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="19" y1="13" x2="24" y2="13" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <line x1="19" y1="16" x2="24" y2="16" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function ProcessPracticeIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
      <rect x="6" y="8" width="20" height="13" rx="2.5" fill="#EA4317" />
      <rect x="8" y="10" width="16" height="9" rx="1" fill="white" />
      <path d="M11 14.5L12.5 13M11 14.5L12.5 16" stroke="#EA4317" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M21 14.5L19.5 13M21 14.5L19.5 16" stroke="#EA4317" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="16.5" y1="12.5" x2="15.5" y2="16.5" stroke="#EA4317" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M3 22C3 21.5 3.5 21 4 21H28C28.5 21 29 21.5 29 22V23.5H3V22Z" fill="#EA4317" />
    </svg>
  );
}

function ProcessCertifiedIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
      <rect x="7" y="6" width="18" height="17" rx="3" fill="#EA4317" />
      <rect x="9.5" y="8.5" width="13" height="12" rx="1.5" fill="white" />
      <circle cx="16" cy="14" r="3.5" fill="#EA4317" />
      <circle cx="16" cy="14" r="1.8" fill="white" />
      <path d="M14.5 19L13 25L16 23.5L19 25L17.5 19" fill="#FA631F" />
    </svg>
  );
}

function ProcessPlacedIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
      <rect x="5" y="10" width="22" height="15" rx="3" fill="#EA4317" />
      <rect x="7.5" y="12.5" width="17" height="10" rx="1.5" fill="white" />
      <path d="M12 10V7.5C12 6.7 12.7 6 13.5 6H18.5C19.3 6 20 6.7 20 7.5V10" stroke="#EA4317" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="16" cy="17" r="2.5" fill="#EA4317" />
      <line x1="7.5" y1="17" x2="24.5" y2="17" stroke="#EA4317" strokeWidth="1" />
    </svg>
  );
}

const processCustomIconMap = {
  '01': ProcessEnrollIcon,
  '02': ProcessLearnIcon,
  '03': ProcessPracticeIcon,
  '04': ProcessCertifiedIcon,
  '05': ProcessPlacedIcon
};

const processIconMap = {
  UserPlus,
  BookOpen,
  Laptop,
  Award,
  Briefcase
};

export default function Academic() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevSlide = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? popularProgramsData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCarouselIndex((prev) =>
      prev === popularProgramsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#101820] overflow-hidden">
      {/* =========================================================================
          1. DARK CINEMATIC HERO SECTION
          ========================================================================= */}
      <section className="relative bg-[#080B10] text-white pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-bleed background student photo on right seamlessly fading into dark hero */}
        <div className="absolute top-0 right-0 w-full md:w-3/5 lg:w-[56%] h-full pointer-events-none overflow-hidden">
          <img
            src={heroStudentImg}
            alt="Student learning"
            className="w-full h-full object-cover object-center opacity-70 md:opacity-90"
          />
          {/* Subtle gradient feathering */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B10] via-[#080B10]/70 md:via-[#080B10]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-black/25" />
        </div>

        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#EA4317]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EA4317]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[380px] sm:min-h-[420px]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4"
            >
              {/* Badge matching Figma: Diamond icon + ACADEMIC PROGRAMS */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221611]/90 text-white border border-[#EA4317]/50 shadow-sm backdrop-blur-xs">
                <span className="w-2 h-2 rounded-[2px] rotate-45 bg-[#EA4317]"></span>
                <span className="tracking-widest">ACADEMIC PROGRAMS</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-black tracking-tight text-white leading-[1.04]">
                Learn Today <br />
                Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4317] via-[#FA631F] to-[#FF7A29]">
                  Tomorrow
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-lg">
                Industry-relevant training programs designed to help you gain practical skills and real-world experience.
              </p>
            </motion.div>

            {/* Right: Flowing White Cursive Handwriting Overlay */}
            <div className="lg:col-span-5 relative flex justify-end items-start h-full pt-2">
              <div className="text-right pointer-events-none select-none pr-2 sm:pr-6">
                <p className="font-script text-white text-3xl sm:text-4xl lg:text-[46px] leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] -rotate-3 opacity-95">
                  Skills <br />
                  Knowledge <br />
                  Better Future
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          1B. 4 FEATURE CARDS (OVERLAPPING HERO BASE)
          ========================================================================= */}
      <section className="relative z-20 -mt-10 sm:-mt-12 lg:-mt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {academicHeroFeatures.map((feat, idx) => {
            const Icon = heroIconMap[feat.id] || CertifiedCoursesIcon;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-[24px] sm:rounded-[26px] p-5 sm:p-6 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] text-center flex flex-col justify-between items-center hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Custom Solid Orange Icon */}
                <div className="flex items-center justify-center mb-3">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#101820] mb-0.5 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#525F70] leading-tight">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          2. CHOOSE THE RIGHT PROGRAM FOR YOUR CAREER (4 Cards Carousel)
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-7">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FCEEE3] text-[#101820] border border-[#F7D8C5] mb-2 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-[1px] rotate-45 bg-[#EA4317]"></span>
              <span>OUR POPULAR PROGRAMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-black text-[#101820] tracking-tight">
              Choose the Right Program for <span className="text-[#EA4317]">Your Career</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#525F70]">
              Explore our industry-focused training programs and build the skills that matter.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#EA4317] hover:text-[#C93810] transition-colors"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* 3 Programs Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {popularProgramsData.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-[22px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Program Top Image */}
                <div className="relative h-[180px] sm:h-[195px] overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Bottom Details */}
                <div className="p-4.5 sm:p-5 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#101820] leading-snug group-hover:text-[#EA4317] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-[#525F70] mt-0.5">
                      {prog.tech}
                    </p>
                  </div>

                  {/* Circular Orange Arrow Button */}
                  <Link
                    to="/contact"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EA4317] group-hover:bg-[#D4370F] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. DARK GLOWING BANNER: Your Career Growth is Our Priority
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-12">
        <div className="relative rounded-[26px] sm:rounded-[30px] bg-[#0A0D14] px-6 sm:px-10 py-6 sm:py-8 overflow-hidden border border-white/10 shadow-2xl">
          {/* Top & Bottom Fiery Horizon Glowing Edges */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>

          {/* Background Image seamlessly blended */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              src={whyLearnBgImg}
              alt="Career Growth and Tech Training"
              className="w-full h-full object-cover object-center opacity-30 md:opacity-35 mix-blend-luminosity filter contrast-125"
            />
            {/* Subtle dark gradient overlay for optimal legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/85 to-[#0A0D14]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14]/60" />
          </div>

          {/* Warm ember atmospheric flares */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#EA4317]/25 rounded-full blur-[70px] pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#EA4317]/25 rounded-full blur-[70px] pointer-events-none"></div>

          {/* Top Banner Row */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221611] text-[#E58A4E] border border-[#EA4317]/40 mb-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-[1px] rotate-45 bg-[#EA4317]"></span>
                <span>WHY LEARN WITH NEXSAG?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-white tracking-tight leading-tight">
                Your Career Growth is <span className="text-[#EA4317]">Our Priority</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-300 max-w-2xl">
                We provide industry-relevant training, hands-on experience and complete support to help you achieve your career goals.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FA631F] to-[#E53916] hover:from-[#E53916] hover:to-[#FA631F] text-[#101820] font-black text-xs sm:text-sm shadow-lg shadow-orange-950/40 hover:scale-105 transition-all duration-300"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Bottom 4 Feature Boxes inside Banner */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
            {whyLearnFeatures.map((item) => {
              const Icon = whyLearnIconMap[item.icon] || GraduationCap;
              return (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EA4317] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. EXPLORE PROGRAMS BY CATEGORY (8 Category Cards)
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-12">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-9">
          {/* Badge: OUR PROGRAM CATEGORIES matching Figma */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FDEEE6] border border-[#FAD8C3] mb-3 shadow-2xs">
            <span className="text-[#EA4317]">OUR</span>
            <span className="text-[#101820]">PROGRAM CATEGORIES</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black text-[#101820] tracking-tight leading-tight">
            Explore Programs <span className="text-[#EA4317]">by Category</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm md:text-[15px] text-[#525F70] max-w-2xl mx-auto">
            Choose from a wide range of courses designed for students, professionals and career switchers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {programCategoriesData.map((cat) => {
            const Icon = categoryCustomIconMap[cat.id] || CategoryFinalYearProjectIcon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-[24px] sm:rounded-[26px] p-6 sm:p-6.5 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Standalone Solid Orange Vector Icon matching Figma */}
                  <div className="mb-4 flex items-center group-hover:scale-105 transition-transform origin-left">
                    <Icon />
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#101820] mb-1.5 group-hover:text-[#EA4317] transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#525F70] leading-relaxed mb-5">
                    {cat.description}
                  </p>
                </div>

                <div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#EA4317] hover:text-[#C93810] transition-colors group/link"
                  >
                    <span>Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          5. A SIMPLE PATH TO YOUR SUCCESS (5 Steps Learning Process Flow)
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-12 relative">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Badge: OUR LEARNING PROCESS matching Figma */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FDEEE6] border border-[#FAD8C3] mb-3 shadow-2xs">
            <span className="text-[#EA4317]">OUR</span>
            <span className="text-[#101820]">LEARNING PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black text-[#101820] tracking-tight leading-tight">
            A Simple Path to <span className="text-[#EA4317]">Your Success</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-[15px] text-[#525F70] max-w-2xl mx-auto">
            We follow a structured approach to ensure you gain the right skills and experience.
          </p>
        </div>

        {/* 5-Step Process Flow matching Figma */}
        <div className="relative">
          {/* Continuous horizontal connecting line behind the top capsules */}
          <div className="hidden lg:block absolute top-[43px] left-[5%] right-[5%] h-[1.5px] bg-[#FAD8C3] z-0 pointer-events-none" />

          {/* 5 Process Columns Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 lg:gap-4 items-start relative z-10">
            {learningProcessSteps.map((step, idx) => {
              const Icon = processCustomIconMap[step.step] || ProcessEnrollIcon;
              const isLast = idx === learningProcessSteps.length - 1;

              return (
                <div key={step.step} className="relative flex flex-col items-center text-center group">
                  {/* Floating Chevron node on connector line for desktop (only between steps) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3.5 top-[30px] z-20 w-7 h-7 rounded-full bg-white border border-[#FAD8C3] shadow-[0_2px_8px_rgba(234,67,23,0.12)] items-center justify-center text-[#EA4317] pointer-events-none">
                      <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  )}

                  {/* Cylindrical / Pill Badge matching Figma */}
                  <div className="w-[66px] h-[90px] rounded-[22px] bg-white border-2 border-[#EA4317] shadow-[0_8px_20px_rgba(234,67,23,0.18)] flex flex-col overflow-hidden mb-4 group-hover:scale-105 group-hover:shadow-[0_12px_28px_rgba(234,67,23,0.28)] transition-all duration-300">
                    {/* Top Orange Dome / Cap with white step number */}
                    <div className="h-[38px] w-full bg-gradient-to-b from-[#FA631F] to-[#EA4317] text-white flex items-center justify-center font-black text-sm tracking-wide">
                      {step.step}
                    </div>

                    {/* Bottom White Chamber with custom solid orange icon */}
                    <div className="flex-1 w-full bg-white flex items-center justify-center p-2">
                      <Icon />
                    </div>
                  </div>

                  {/* Step Title & Orange Chevron in between */}
                  <div className="flex items-center justify-center gap-1.5 mb-1 relative w-full">
                    <h3 className="text-base sm:text-[17px] font-black text-[#101820] leading-snug group-hover:text-[#EA4317] transition-colors">
                      {step.title}
                    </h3>
                    {!isLast && (
                      <span className="hidden lg:block absolute -right-3 text-[#EA4317] font-black text-sm select-none">
                        ›
                      </span>
                    )}
                  </div>

                  {/* Step Description */}
                  <p className="text-xs sm:text-[13px] text-[#525F70] leading-snug max-w-[170px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT OUR STUDENTS SAY (3 Testimonial Cards on Dark Backdrop)
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-12">
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-[#0A0D14] px-6 sm:px-10 py-8 sm:py-10 lg:py-12 overflow-hidden border border-white/10 shadow-2xl">
          {/* Top & Bottom Glowing Edges */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>

          {/* Right side students sunset celebration photograph */}
          <div className="absolute top-0 right-0 w-full md:w-3/5 lg:w-[58%] h-full pointer-events-none overflow-hidden">
            <img
              src={testimonialsBgImg}
              alt="Student Success and Graduation"
              className="w-full h-full object-cover object-center opacity-70 md:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/75 md:via-[#0A0D14]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-black/30" />
          </div>

          {/* Warm ember flares */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#EA4317]/25 rounded-full blur-[70px] pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#EA4317]/25 rounded-full blur-[70px] pointer-events-none"></div>

          {/* Testimonial Header matching Figma (Left Aligned) */}
          <div className="relative z-10 text-left max-w-2xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221611]/90 text-white border border-[#EA4317]/50 mb-3 shadow-sm backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#EA4317]"></span>
              <span className="tracking-widest">STUDENT SUCCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black text-white tracking-tight leading-tight">
              What Our <span className="text-[#EA4317]">Students Say</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm md:text-[15px] text-gray-300">
              Real experiences from learners who have built successful careers with NexSAG.
            </p>
          </div>

          {/* 3 Verified Student Review Cards matching screenshot */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {studentTestimonialsData.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-[24px] sm:rounded-[26px] p-6 sm:p-7 border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left relative group"
              >
                {/* Top Row: 5 Stars + Verified Student Pill Badge + Decorative Quotes */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-0.5 text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]/60 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Verified Student</span>
                      </span>
                      <span className="text-3xl text-gray-200/90 font-serif font-black select-none leading-none -mt-1 hidden lg:inline">
                        ““
                      </span>
                    </div>
                  </div>

                  {/* Review Quote Text */}
                  <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed italic mb-6">
                    {t.quote}
                  </p>
                </div>

                {/* Bottom Row: Avatar + Name + Degree + College + Location Pill */}
                <div className="flex items-end justify-between gap-2 pt-3.5 border-t border-gray-100">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover shrink-0 border border-gray-200 shadow-2xs"
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-black text-[#101820] leading-tight truncate">
                        {t.name}
                      </div>
                      <div className="text-[11px] sm:text-xs text-[#525F70] leading-tight mt-0.5 truncate">
                        {t.role}
                      </div>
                      {t.college && (
                        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#64748B] mt-1 truncate max-w-[160px] sm:max-w-[180px]">
                          <GraduationCap className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                          <span className="truncate">{t.college}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* City Location Pill */}
                  {t.location && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#F1F5F9] text-[#475569] border border-gray-200 shrink-0">
                      <MapPin className="w-3 h-3 text-[#3B82F6]" />
                      <span>{t.location}</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. READY TO BUILD YOUR FUTURE? (Bottom CTA Banner with Graduation Photo)
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-12">
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-[#0A0D14] p-7 sm:p-10 lg:p-12 overflow-hidden border border-white/10 shadow-2xl">
          {/* Top & Bottom Glowing Edges */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>

          {/* Right side graduation photo silhouette with sunset blended into the card */}
          <div className="absolute top-0 right-0 w-full md:w-3/5 h-full pointer-events-none opacity-40 md:opacity-60 overflow-hidden">
            <img
              src={gradFutureImg}
              alt="Graduate building future"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221611] text-[#E58A4E] border border-[#EA4317]/40 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-[1px] rotate-45 bg-[#EA4317]"></span>
              <span>START YOUR LEARNING JOURNEY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-tight">
              Ready to Build <span className="text-[#EA4317]">Your Future?</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              Join our industry-focused programs and gain the skills you need to succeed in the digital world.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#FA631F] to-[#E53916] hover:from-[#E53916] hover:to-[#FA631F] text-[#101820] font-black text-xs sm:text-sm shadow-lg shadow-orange-950/40 hover:scale-105 transition-all duration-300"
              >
                <span>Join Our Programs</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all duration-300"
              >
                <Headphones className="w-4 h-4 text-[#EA4317]" />
                <span>Talk to an Advisor</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
