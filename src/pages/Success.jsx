import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Play,
  UserCheck,
  ExternalLink,
  Globe,
  Sparkles,
  ZoomIn,
  X
} from 'lucide-react';

import successHeroImg from '../assets/success_hero_celebrate.jpg';
import ctaSilhouetteImg from '../assets/success_cta_silhouette.jpg';
import testimonialsBgImg from '../assets/testimonials_students_bg.jpg';

import {
  heroStatsData,
  journeyPillarsData,
  clientTestimonialsData,
  allProjectsData,
  galleryImagesData
} from '../data/successPageData';

const galleryCategories = [
  { id: 'all', label: 'All Photos' },
  { id: 'certifications', label: 'Certifications', match: ['Certifications', 'Credentials'] },
  { id: 'training', label: 'Training & Workshops', match: ['Training', 'Workshops', 'Planning'] },
  { id: 'mentorship', label: 'Mentorship & Seminars', match: ['Mentorship', 'Guidance', 'Masterclass', 'Teamwork', 'Seminar'] }
];

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-dev', label: 'Web Development' },
  { id: 'saas', label: 'SaaS Platforms' },
  { id: 'digital-marketing', label: 'Digital Marketing & SEO' },
  { id: 'academic', label: 'Academic & AI Projects' }
];

// Custom Solid Orange Vector SVGs for Hero Stats
function StatBriefcaseIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
      <rect x="4" y="11" width="28" height="19" rx="3.5" fill="#EA4317" />
      <path d="M12 11V8C12 6.9 12.9 6 14 6H22C23.1 6 24 6.9 24 8V11" stroke="#EA4317" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="15" y="15" width="6" height="4" rx="1.5" fill="white" />
      <line x1="4" y1="17" x2="32" y2="17" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

function StatStudentsIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
      <circle cx="18" cy="11" r="4.5" fill="#EA4317" />
      <path d="M11 27C11 22 14.2 19 18 19C21.8 19 25 22 25 27H11Z" fill="#EA4317" />
      <circle cx="8" cy="14" r="3.5" fill="#EA4317" />
      <path d="M2 28C2 24.5 4.5 22 8 22C9.5 22 10.8 22.6 11.8 23.5C10.8 24.8 10.2 26.3 10.2 28H2Z" fill="#EA4317" />
      <circle cx="28" cy="14" r="3.5" fill="#EA4317" />
      <path d="M34 28C34 24.5 31.5 22 28 22C26.5 22 25.2 22.6 24.2 23.5C25.2 24.8 25.8 26.3 25.8 28H34Z" fill="#EA4317" />
    </svg>
  );
}

function StatPlacementIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
      <rect x="5" y="20" width="6.5" height="11" rx="1.5" fill="#EA4317" />
      <rect x="15" y="12" width="6.5" height="19" rx="1.5" fill="#EA4317" />
      <rect x="25" y="5" width="6.5" height="26" rx="1.5" fill="#EA4317" />
    </svg>
  );
}

function StatSmileIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
      <circle cx="18" cy="18" r="14" fill="#EA4317" />
      <circle cx="13" cy="15" r="2" fill="white" />
      <circle cx="23" cy="15" r="2" fill="white" />
      <path d="M11 21C12.5 25 15 26.5 18 26.5C21 26.5 23.5 25 25 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const statIconMap = {
  briefcase: StatBriefcaseIcon,
  users: StatStudentsIcon,
  chart: StatPlacementIcon,
  smile: StatSmileIcon
};

// Custom Solid Orange Vector SVGs for Journey Pillars
function JourneyInnovationIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
      <circle cx="18" cy="18" r="14" stroke="#EA4317" strokeWidth="2.5" />
      <circle cx="18" cy="18" r="9" stroke="#EA4317" strokeWidth="2" />
      <circle cx="18" cy="18" r="4" fill="#EA4317" />
      <path d="M26 10L18 18" stroke="#EA4317" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function JourneyPeopleIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
      <circle cx="18" cy="11" r="4.5" fill="#EA4317" />
      <path d="M11 27C11 22 14.2 19 18 19C21.8 19 25 22 25 27H11Z" fill="#EA4317" />
      <circle cx="8" cy="14" r="3.5" fill="#EA4317" />
      <path d="M2 28C2 24.5 4.5 22 8 22C9.5 22 10.8 22.6 11.8 23.5C10.8 24.8 10.2 26.3 10.2 28H2Z" fill="#EA4317" />
      <circle cx="28" cy="14" r="3.5" fill="#EA4317" />
      <path d="M34 28C34 24.5 31.5 22 28 22C26.5 22 25.2 22.6 24.2 23.5C25.2 24.8 25.8 26.3 25.8 28H34Z" fill="#EA4317" />
    </svg>
  );
}

function JourneyQualityIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
      <path d="M9 7H27V15C27 20 23 23.5 18 23.5C13 23.5 9 20 9 15V7Z" fill="#EA4317" />
      <path d="M9 10H5C3.9 10 3 10.9 3 12C3 15 5.5 17 8 17H9" stroke="#EA4317" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M27 10H31C32.1 10 33 10.9 33 12C33 15 30.5 17 28 17H27" stroke="#EA4317" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="16" y="23.5" width="4" height="5" fill="#EA4317" />
      <rect x="11" y="28.5" width="14" height="3" rx="1.5" fill="#EA4317" />
    </svg>
  );
}

function JourneyGrowthIcon() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-9 sm:h-9" fill="none">
      <rect x="5" y="22" width="5.5" height="9" rx="1.5" fill="#EA4317" />
      <rect x="13.5" y="16" width="5.5" height="15" rx="1.5" fill="#EA4317" />
      <rect x="22" y="10" width="5.5" height="21" rx="1.5" fill="#EA4317" />
      <path d="M6 16L15 8L22 13L30 5" stroke="#EA4317" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 5H30V10" stroke="#EA4317" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const journeyIconMap = {
  target: JourneyInnovationIcon,
  users: JourneyPeopleIcon,
  trophy: JourneyQualityIcon,
  growth: JourneyGrowthIcon
};

// Exact Custom Solid Orange Double Quotes for Testimonial Cards
function SolidOrangeQuotes() {
  return (
    <svg viewBox="0 0 24 20" className="w-5 h-4 sm:w-6 sm:h-5 shrink-0" fill="#EA4317">
      <path d="M10 0C4.5 3 1 8.5 1 14C1 17.5 3.5 20 7 20C10.5 20 13 17.5 13 14C13 10.5 10.5 8 8 8C7.5 8 7 8.2 6.5 8.4C7 5.5 9.5 2.5 12.5 1L10 0ZM21 0C15.5 3 12 8.5 12 14C12 17.5 14.5 20 18 20C21.5 20 24 17.5 24 14C24 10.5 21.5 8 19 8C18.5 8 18 8.2 17.5 8.4C18 5.5 20.5 2.5 23.5 1L21 0Z" />
    </svg>
  );
}

export default function Success() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('all');
  const [visibleProjectCount, setVisibleProjectCount] = useState(6);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const prevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? clientTestimonialsData.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === clientTestimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    e?.stopPropagation();
    setActiveLightboxIndex((prev) => (prev + 1) % galleryImagesData.length);
  };

  const prevLightbox = (e) => {
    e?.stopPropagation();
    setActiveLightboxIndex((prev) =>
      prev === 0 ? galleryImagesData.length - 1 : prev - 1
    );
  };

  const filteredGallery =
    selectedGalleryCategory === 'all'
      ? galleryImagesData
      : galleryImagesData.filter((item) => {
          const cat = galleryCategories.find((c) => c.id === selectedGalleryCategory);
          return cat && cat.match.includes(item.category);
        });

  const filteredProjects =
    selectedProjectCategory === 'all'
      ? allProjectsData
      : allProjectsData.filter((p) => p.categoryKey === selectedProjectCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjectCount);

  const handleCategoryChange = (catId) => {
    setSelectedProjectCategory(catId);
    setVisibleProjectCount(6);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#101820] overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION (Full-Bleed Blended Image)
          ========================================================================= */}
      <section className="relative bg-[#FFF9F2] pt-8 sm:pt-12 pb-16 sm:pb-20 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-bleed background graduates celebration photo on right seamlessly fading into cream background */}
        <div className="absolute top-0 right-0 w-full md:w-3/5 lg:w-[58%] h-full pointer-events-none overflow-hidden">
          <img
            src={successHeroImg}
            alt="NexSAG Graduates Celebrating Success"
            className="w-full h-full object-cover object-[center_right] opacity-85 md:opacity-95"
          />
          {/* Seamless gradient feathering to light cream background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F2] via-[#FFF9F2]/70 md:via-[#FFF9F2]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF9F2] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[340px] sm:min-h-[380px]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 space-y-4"
            >
              {/* Pill: OUR SUCCESS matching Figma */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FDEEE6] border border-[#FAD8C3] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#EA4317]"></span>
                <span className="text-[#101820]">OUR SUCCESS</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight text-[#101820] leading-[1.05]">
                Real People <br />
                Real <span className="text-[#EA4317]">Achievements</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-[#525F70] leading-relaxed max-w-lg">
                We take pride in the success stories of our clients and students who have grown with NexSAG Technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          1B. 4 FLOATING STATS OVERLAPPING CARD (with Vertical Dividers)
          ========================================================================= */}
      <section className="relative z-20 -mt-10 sm:-mt-12 lg:-mt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-14">
        <div className="bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 lg:p-7 border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/80 items-center">
            {heroStatsData.map((stat) => {
              const Icon = statIconMap[stat.icon] || StatBriefcaseIcon;
              return (
                <div
                  key={stat.id}
                  className="flex items-center justify-start gap-4 px-3 sm:px-6 py-3.5 sm:py-2"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#EA4317] leading-none">
                      {stat.value}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#525F70] font-medium mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. OUR JOURNEY: Growing Together Creating Success
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FDEEE6] border border-[#FAD8C3] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#EA4317]"></span>
              <span className="text-[#101820]">Our Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#101820] tracking-tight leading-tight">
              Growing Together <br />
              Creating <span className="text-[#EA4317]">Success</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#525F70] leading-relaxed max-w-md">
              From businesses achieving digital growth to students building successful careers, our journey is defined by the trust and success of our clients and learners.
            </p>
          </div>

          {/* Right 4 Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {journeyPillarsData.map((pillar) => {
              const Icon = journeyIconMap[pillar.icon] || JourneyInnovationIcon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-[22px] sm:rounded-[24px] p-5 sm:p-5.5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group"
                >
                  <div className="mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#101820] mb-0.5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#525F70] leading-tight">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. TESTIMONIALS: What Our Clients Say (with Nav Arrows)
          ========================================================================= */}
      {/* =========================================================================
          3. TESTIMONIALS: What Our Clients Say (with Nav Arrows)
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-14">
        <div className="relative text-center mb-8 sm:mb-10">
          {/* Centered Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FDEEE6] border border-[#FAD8C3] mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#EA4317]"></span>
            <span className="text-[#101820]">TESTIMONIALS</span>
          </div>

          {/* Centered Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#101820] tracking-tight leading-tight">
            What Our <span className="text-[#EA4317]">Clients Say</span>
          </h2>

          {/* Centered Subtitle */}
          <p className="mt-2 text-xs sm:text-sm text-[#525F70] max-w-xl mx-auto leading-relaxed">
            Hear from businesses and individuals who have experienced growth with NexSAG.
          </p>

          {/* Right Navigation Arrow Buttons matching Figma */}
          <div className="hidden sm:flex absolute right-0 bottom-1 items-center gap-2.5">
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full bg-white border border-[#FAD8C3] hover:bg-[#EA4317] hover:text-white text-[#EA4317] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full bg-white border border-[#FAD8C3] hover:bg-[#EA4317] hover:text-white text-[#EA4317] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 3 White Testimonial Cards matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {clientTestimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[24px] sm:rounded-[26px] p-6 sm:p-7 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
            >
              {/* Top: Solid Orange Quotes + Quote Text */}
              <div className="flex items-start gap-3.5 mb-6">
                <SolidOrangeQuotes />
                <p className="text-xs sm:text-[13px] md:text-sm text-[#263238] font-medium leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Bottom: Circular Avatar + Name, Role, 5 Orange Stars */}
              <div className="flex items-center gap-3.5 pt-2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover shrink-0 border border-gray-100 shadow-xs"
                />
                <div>
                  <h4 className="text-sm sm:text-base font-black text-[#101820] leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#525F70] leading-tight mt-0.5 font-medium">
                    {t.role}
                  </p>
                  <div className="flex items-center gap-1 text-[#EA4317] mt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#EA4317] text-[#EA4317]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          5. CLIENT SUCCESS STORIES: Businesses That Grew with NexSAG
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-14 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FDEEE6] border border-[#FAD8C3] mb-2.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#EA4317]"></span>
              <span className="text-[#101820]">Client Success Stories & Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#101820] tracking-tight">
              Businesses That Grew with <span className="text-[#EA4317]">NexSAG</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#525F70]">
              Explore live commercial platforms, scalable enterprise SaaS, high-growth SEO campaigns, and industry-standard projects delivered by our team.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#EA4317] hover:text-[#C93810] transition-colors"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 sm:mb-8 scrollbar-none">
          {projectCategories.map((cat) => {
            const count =
              cat.id === 'all'
                ? allProjectsData.length
                : allProjectsData.filter((p) => p.categoryKey === cat.id).length;
            const isActive = selectedProjectCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#EA4317] text-white shadow-md shadow-[#EA4317]/25'
                    : 'bg-white text-[#525F70] hover:text-[#101820] hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-white/25 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {displayedProjects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-[24px] sm:rounded-[26px] overflow-hidden border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Top Image with Badges */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-900">
                  <img
                    src={p.bannerImage}
                    alt={p.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = p.fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-black/75 backdrop-blur-xs shadow-xs">
                    {p.category}
                  </div>

                  {/* Status Badge */}
                  {p.liveUrl ? (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-800 bg-white/95 backdrop-blur-xs border border-emerald-300 shadow-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Client Website</span>
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#EA4317] bg-white/95 backdrop-blur-xs border border-[#FAD8C3] shadow-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA4317]" />
                      <span>Verified Project</span>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-5.5">
                  <h3 className="text-base sm:text-[17px] font-black text-[#101820] leading-snug group-hover:text-[#EA4317] transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#525F70] leading-relaxed mb-3 line-clamp-3">
                    {p.description}
                  </p>

                  {/* Key metric / Stat pill */}
                  {p.stats && (
                    <div className="mb-3.5 px-3 py-1 rounded-lg bg-[#FFF7F3] border border-[#FDEEE6] text-[11px] font-bold text-[#EA4317] inline-flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#EA4317] shrink-0" />
                      <span>{p.stats}</span>
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {p.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-gray-100/90 text-gray-700 text-[10px] sm:text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-5 sm:p-5.5 pt-0">
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#101820] hover:bg-[#EA4317] text-white text-xs font-bold transition-all shadow-xs group/btn"
                  >
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Visit Live Website</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                ) : p.youtubeUrl ? (
                  <a
                    href={p.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#EA4317] hover:bg-[#C93810] text-white text-xs font-bold transition-all shadow-xs group/btn"
                  >
                    <span className="flex items-center gap-1.5">
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Watch Demo Video</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[#101820] hover:bg-[#EA4317] hover:text-white hover:border-[#EA4317] text-xs font-bold transition-all shadow-xs group/btn"
                  >
                    <span>Inquire About Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayedProjects.length < filteredProjects.length && (
          <div className="mt-8 sm:mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleProjectCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101820] hover:bg-[#EA4317] text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-300 cursor-pointer"
            >
              <span>Load More Projects</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/20">
                +{filteredProjects.length - displayedProjects.length} more
              </span>
            </button>
          </div>
        )}
      </section>

      {/* =========================================================================
          6. REAL SUCCESS & CAMPUS GALLERY: Moments That Matter (Dark Glowing Banner)
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-14">
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-[#0A0D14] px-6 sm:px-10 py-8 sm:py-10 lg:py-12 overflow-hidden border border-white/10 shadow-2xl">
          {/* Top & Bottom Fiery Horizon Glowing Edges */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>

          {/* Right side glowing sunset celebration background seamlessly blended */}
          <div className="absolute top-0 right-0 w-full md:w-3/5 lg:w-[56%] h-full pointer-events-none overflow-hidden">
            <img
              src={testimonialsBgImg}
              alt="Sunset Success Horizon"
              className="w-full h-full object-cover object-[center_right] opacity-75 md:opacity-90"
            />
            {/* Seamless gradient fade into dark obsidian background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/70 md:via-[#0A0D14]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-black/20" />
          </div>

          {/* Warm ember flares */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#EA4317]/25 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#EA4317]/25 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7 sm:mb-9 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221611]/90 text-white border border-[#EA4317]/50 mb-3 shadow-sm backdrop-blur-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#EA4317] to-[#FFA726] shadow-[0_0_8px_#EA4317]"></span>
                <span className="tracking-widest">CAMPUS & SUCCESS GALLERY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-white tracking-tight leading-tight">
                Moments of Learning & <span className="text-[#EA4317]">Real Success</span>
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm md:text-[15px] text-gray-300 max-w-2xl">
                Real glimpses into our certificate award ceremonies, live interactive workshops, and mentorship sessions at NexSAG Technology.
              </p>
            </div>

            {/* Gallery Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              {galleryCategories.map((cat) => {
                const isActive = selectedGalleryCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? galleryImagesData.length
                    : galleryImagesData.filter((item) => cat.match.includes(item.category)).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedGalleryCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#EA4317] text-white shadow-md shadow-[#EA4317]/30 border border-[#EA4317]'
                        : 'bg-white/10 hover:bg-white/15 text-gray-300 border border-white/10'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {filteredGallery.map((item) => {
              const fullIndex = galleryImagesData.findIndex((g) => g.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(fullIndex)}
                  className="relative rounded-[22px] overflow-hidden group aspect-[4/3.3] sm:aspect-[4/3.4] bg-black border border-white/10 shadow-lg cursor-pointer flex flex-col justify-between p-4 hover:border-[#EA4317]/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Photo */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />

                  {/* Top Bar: Category badge & Zoom trigger */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-[#EA4317]/90 text-white shadow-xs backdrop-blur-xs">
                      {item.tag}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md text-white/80 group-hover:text-white group-hover:bg-[#EA4317] flex items-center justify-center transition-all shadow-sm">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom: Title & Subtitle */}
                  <div className="relative z-10 text-left">
                    <span className="text-[11px] font-medium text-[#FFA726] uppercase tracking-wider block mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="text-xs sm:text-[13px] font-bold text-white leading-snug group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-300 mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full View */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 sm:right-2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-10"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Arrow */}
            <button
              type="button"
              onClick={prevLightbox}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#EA4317] border border-white/20 transition-all cursor-pointer z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={nextLightbox}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#EA4317] border border-white/20 transition-all cursor-pointer z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-black border border-white/15 max-h-[72vh] flex items-center justify-center shadow-2xl">
              <img
                src={galleryImagesData[activeLightboxIndex].image}
                alt={galleryImagesData[activeLightboxIndex].title}
                className="max-h-[72vh] w-auto object-contain rounded-2xl"
              />
            </div>

            {/* Caption & Counter */}
            <div className="mt-4 text-center text-white max-w-xl">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#EA4317] bg-[#EA4317]/15 px-2.5 py-0.5 rounded-full border border-[#EA4317]/30">
                  {galleryImagesData[activeLightboxIndex].category}
                </span>
                <span className="text-xs text-gray-400">
                  {activeLightboxIndex + 1} of {galleryImagesData.length}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold">
                {galleryImagesData[activeLightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                {galleryImagesData[activeLightboxIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          7. BE OUR NEXT SUCCESS STORY (Dark Banner with Golden Sunset Silhouette)
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-12">
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-[#0A0D14] p-7 sm:p-10 lg:p-12 overflow-hidden border border-white/10 shadow-2xl">
          {/* Top & Bottom Glowing Edges */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>

          {/* Right side sunset victory silhouette photograph */}
          <div className="absolute top-0 right-0 w-full md:w-3/5 h-full pointer-events-none overflow-hidden opacity-60 md:opacity-80">
            <img
              src={ctaSilhouetteImg}
              alt="Success Celebration Silhouette"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/75 md:via-[#0A0D14]/35 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#221611] text-[#E58A4E] border border-[#EA4317]/40 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA4317]"></span>
              <span className="tracking-widest">LET'S GROW TOGETHER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight">
              Be Our Next <span className="text-[#EA4317]">Success Story</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              Whether you are a business looking to grow or a student aiming for a successful career, NexSAG is here to support you.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#FA631F] to-[#E53916] hover:from-[#E53916] hover:to-[#FA631F] text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-950/40 hover:scale-105 transition-all duration-300"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all duration-300"
              >
                <UserCheck className="w-4 h-4 text-[#EA4317]" />
                <span>Talk to an Expert</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
