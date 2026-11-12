import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* 1. Website Development: Desktop Monitor with code brackets */
function WebDevIcon() {
  return (
    <svg viewBox="0 0 44 44" className="w-10 h-10 sm:w-11 sm:h-11" fill="none">
      {/* Screen Frame */}
      <rect x="5" y="8" width="34" height="23" rx="4" fill="#EA4317" />
      {/* Screen Inner */}
      <rect x="8" y="11" width="28" height="15" rx="1.5" fill="white" opacity="0.95" />
      {/* Code brackets / layout on screen */}
      <path d="M14 16L11.5 18.5L14 21" stroke="#EA4317" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 16L22.5 18.5L20 21" stroke="#EA4317" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 15L16 22" stroke="#EA4317" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="25" y="15" width="8" height="2" rx="1" fill="#EA4317" />
      <rect x="25" y="19" width="5" height="2" rx="1" fill="#EA4317" />
      {/* Stand Base */}
      <path d="M19 31H25V34H19V31Z" fill="#EA4317" />
      <path d="M15 34H29C29.6 34 30 34.4 30 35C30 35.6 29.6 36 29 36H15C14.4 36 14 35.6 14 35C14 34.4 14.4 34 15 34Z" fill="#EA4317" />
    </svg>
  );
}

/* 2. SaaS Product Development: Cloud with tech sync arrow */
function SaasIcon() {
  return (
    <svg viewBox="0 0 44 44" className="w-10 h-10 sm:w-11 sm:h-11" fill="none">
      <path
        d="M13 32C9.7 32 7 29.3 7 26C7 23 9.2 20.5 12.1 20.1C13.2 14.4 18.1 10 24 10C30.6 10 36 15.4 36 22C36 22.3 36 22.7 35.9 23C38.3 23.8 40 26.2 40 29C40 32.3 37.3 35 34 35H13"
        fill="#EA4317"
      />
      <path d="M19 23L24 18L29 23" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 19V28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* 3. Application Development: Smartphone with App UI */
function AppDevIcon() {
  return (
    <svg viewBox="0 0 44 44" className="w-10 h-10 sm:w-11 sm:h-11" fill="none">
      {/* Phone Body */}
      <rect x="12" y="5" width="20" height="34" rx="5" fill="#EA4317" />
      {/* Screen */}
      <rect x="14.5" y="9" width="15" height="23" rx="2.5" fill="white" opacity="0.95" />
      {/* App Grid on Screen */}
      <rect x="16.5" y="11.5" width="4.5" height="4.5" rx="1.2" fill="#EA4317" />
      <rect x="23" y="11.5" width="4.5" height="4.5" rx="1.2" fill="#F45A27" />
      <rect x="16.5" y="18" width="4.5" height="4.5" rx="1.2" fill="#F45A27" />
      <rect x="23" y="18" width="4.5" height="4.5" rx="1.2" fill="#EA4317" />
      <rect x="16.5" y="24.5" width="11" height="2.5" rx="1.2" fill="#EA4317" />
      {/* Speaker & Home bar */}
      <circle cx="22" cy="7" r="0.8" fill="white" opacity="0.8" />
      <rect x="19" y="34.5" width="6" height="1.8" rx="0.9" fill="white" opacity="0.9" />
    </svg>
  );
}

/* 4. AI Solutions: AI Processor chip with pins on all 4 sides and 'AI' text */
function AiIcon() {
  return (
    <svg viewBox="0 0 44 44" className="w-10 h-10 sm:w-11 sm:h-11" fill="none">
      {/* Top Pins */}
      <rect x="14" y="3" width="2.5" height="4" rx="1" fill="#EA4317" />
      <rect x="20.75" y="3" width="2.5" height="4" rx="1" fill="#EA4317" />
      <rect x="27.5" y="3" width="2.5" height="4" rx="1" fill="#EA4317" />
      {/* Bottom Pins */}
      <rect x="14" y="37" width="2.5" height="4" rx="1" fill="#EA4317" />
      <rect x="20.75" y="37" width="2.5" height="4" rx="1" fill="#EA4317" />
      <rect x="27.5" y="37" width="2.5" height="4" rx="1" fill="#EA4317" />
      {/* Left Pins */}
      <rect x="3" y="14" width="4" height="2.5" rx="1" fill="#EA4317" />
      <rect x="3" y="20.75" width="4" height="2.5" rx="1" fill="#EA4317" />
      <rect x="3" y="27.5" width="4" height="2.5" rx="1" fill="#EA4317" />
      {/* Right Pins */}
      <rect x="37" y="14" width="4" height="2.5" rx="1" fill="#EA4317" />
      <rect x="37" y="20.75" width="4" height="2.5" rx="1" fill="#EA4317" />
      <rect x="37" y="27.5" width="4" height="2.5" rx="1" fill="#EA4317" />
      {/* Chip Body */}
      <rect x="7" y="7" width="30" height="30" rx="7" fill="#EA4317" />
      <rect x="9.5" y="9.5" width="25" height="25" rx="5" stroke="#F56D3F" strokeWidth="1.2" fill="none" />
      {/* AI Text */}
      <text
        x="22"
        y="27"
        textAnchor="middle"
        fill="white"
        fontSize="13"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="0.5"
      >
        AI
      </text>
    </svg>
  );
}

/* 5. Cybersecurity & VAPT: Shield with security checkmark */
function SecurityIcon() {
  return (
    <svg viewBox="0 0 44 44" className="w-10 h-10 sm:w-11 sm:h-11" fill="none">
      <path
        d="M22 5L36 10.5V20C36 29 29.8 37 22 39.5C14.2 37 8 29 8 20V10.5L22 5Z"
        fill="#EA4317"
      />
      <path
        d="M16 21.5L20 25.5L28 17.5"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* 6. Digital Marketing & SEO: Solid orange Megaphone / Bullhorn */
function MarketingIcon() {
  return (
    <svg viewBox="0 0 44 44" className="w-10 h-10 sm:w-11 sm:h-11" fill="none">
      <path d="M28 13L13 18V25L28 30V13Z" fill="#EA4317" />
      <path d="M28 13C29.66 13 31 16.8 31 21.5C31 26.2 29.66 30 28 30V13Z" fill="#F45A27" />
      <rect x="8" y="18" width="5.5" height="7" rx="1.5" fill="#EA4317" />
      <path d="M15 25L17 34H20L18 25H15Z" fill="#EA4317" />
      <path d="M33 17C34.5 18.3 35.5 19.8 35.5 21.5C35.5 23.2 34.5 24.7 33 26" stroke="#EA4317" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 14C38.5 16.2 40 18.7 40 21.5C40 24.3 38.5 26.8 36 29" stroke="#EA4317" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* 7. Final Year Projects: Graduation Cap */
function ProjectsIcon() {
  return (
    <svg viewBox="0 0 44 44" className="w-10 h-10 sm:w-11 sm:h-11" fill="none">
      <path d="M22 8L40 16L22 24L4 16L22 8Z" fill="#EA4317" />
      <path d="M11 20V27C11 31.5 16 35 22 35C28 35 33 31.5 33 27V20L22 25L11 20Z" fill="#F45A27" />
      <path d="M36 17.5V28C36 29 34.5 30 34.5 30" stroke="#EA4317" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="34.5" cy="30.5" r="1.5" fill="#EA4317" />
      <path d="M10 16L22 21.5L34 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  );
}

/* 8. Courses & Placement Training: Career Briefcase with rising growth arrow */
function TrainingIcon() {
  return (
    <svg viewBox="0 0 44 44" className="w-10 h-10 sm:w-11 sm:h-11" fill="none">
      <rect x="7" y="15" width="30" height="21" rx="4" fill="#EA4317" />
      <path d="M16 15V11C16 9.89 16.89 9 18 9H26C27.11 9 28 9.89 28 11V15" stroke="#EA4317" strokeWidth="3" strokeLinecap="round" />
      <rect x="7" y="21" width="30" height="3" fill="#F45A27" />
      <rect x="19.5" y="19" width="5" height="7" rx="1.5" fill="white" />
      <circle cx="22" cy="22.5" r="1" fill="#EA4317" />
      <path d="M12 30L17 25L21 28L31 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 18H31V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const customIconMap = {
  '01': WebDevIcon,
  '02': SaasIcon,
  '03': AppDevIcon,
  '04': AiIcon,
  '05': SecurityIcon,
  '06': MarketingIcon,
  '07': ProjectsIcon,
  '08': TrainingIcon
};

export default function ServiceCard({
  service,
  index = 0,
  onSelect
}) {
  const IconComponent = customIconMap[service.number] || WebDevIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -8 }}
      onClick={onSelect}
      className="relative group rounded-[28px] sm:rounded-[30px] p-5 sm:p-5.5 text-center flex flex-col justify-between cursor-pointer transition-all duration-300 min-h-[300px] sm:min-h-[320px] bg-white hover:bg-[#0B0D13] text-[#101820] hover:text-white border border-gray-100 hover:border-[#EA4317]/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(234,67,23,0.32)] hover:z-20"
    >
      <div>
        {/* Top Number: Orange by default, White on hover */}
        <div className="text-sm sm:text-base font-extrabold mb-3.5 tracking-tight text-[#EA4317] group-hover:text-white transition-colors duration-300">
          {service.number}
        </div>

        {/* Custom Exact SVG Icon */}
        <div className="flex items-center justify-center my-3.5 transition-transform duration-300 group-hover:scale-110">
          <IconComponent />
        </div>

        {/* Title: Dark by default, White on hover */}
        <h3 className="text-sm sm:text-[15px] font-extrabold mb-2 leading-tight text-[#101820] group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>

        {/* Short Description: Gray by default, Light gray on hover */}
        <p className="text-[11.5px] sm:text-xs leading-relaxed px-1 text-[#667085] group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>
      </div>

      {/* Round Orange Arrow Button at bottom */}
      <div className="pt-4">
        <div className="w-8 h-8 rounded-full bg-[#EA4317] text-white flex items-center justify-center mx-auto shadow-md group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(234,67,23,0.6)] transition-all duration-300">
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      </div>
    </motion.div>
  );
}
