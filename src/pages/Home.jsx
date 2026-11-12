import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  HeartHandshake,
  Trophy,
  Headphones,
  ArrowRight,
  ArrowUpRight,
  Search,
  FileText,
  Cpu,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Heart,
  HeartPulse,
  ShoppingCart,
  Building,
  Landmark,
  Plane,
  Rocket,
  Star,
  Users,
  Briefcase,
  Sparkles,
  Timer,
  Monitor,
  Settings,
  User,
  BarChart3,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import Button from '../components/Button';
import homeBgVideo from '../assets/home background video.mp4';
import networkMeetingImg from '../assets/Network Meeting.png';
import celebrationBannerImg from '../assets/Celebration Banner.png';
import earthImg from '../assets/Earth.png';
import logoThulir from '../assets/Thulir.png';
import logoShrinovatech from '../assets/shrinovatech.png';
import logoZerosight from '../assets/zerosight_logo.png';
import successHeroImg from '../assets/success_hero.jpg';
import avatarRamesh from '../assets/avatar_ramesh.jpg';
import avatarPriya from '../assets/avatar_priya.jpg';
import avatarArun from '../assets/avatar_arun.jpg';
import avatarSneha from '../assets/avatar_sneha.jpg';
import programFullstack from '../assets/program_fullstack.jpg';
import programData from '../assets/program_data.jpg';
import programAi from '../assets/program_ai.jpg';
import programCyber from '../assets/program_cyber.jpg';

export default function Home() {
  // 6 Services with high-resolution tech visuals matching reference
  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Modern websites and scalable web applications.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80',
      link: '/services'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'SEO, social media, Google Ads and growth strategies.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80',
      link: '/services'
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'AI automation, intelligent applications and AI-powered workflows.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=80',
      link: '/services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your systems, data and digital assets.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80',
      link: '/services'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Technology strategy and digital transformation guidance.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80',
      link: '/services'
    },
    {
      id: 'tech-training',
      title: 'Technology Training',
      description: 'Industry-focused courses with practical learning.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
      link: '/academic'
    }
  ];

  // Custom Figma Icons for Approach
  const LaunchShieldIcon = ({ className = "w-5.5 h-5.5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 7.5c1.4 1.7 1.8 3 1.2 4.4-.5 1-1.5 1.5-1.2 2.5.3.8 1.2.8 1.2.8s-1.6 1-2.2 0c-.5-.9-.1-2 .4-2.6.5-.7.6-1.5-.4-2.5-1-.9-.4-2.4 1-2.6z" fill="#C95A22" stroke="none" />
    </svg>
  );

  const GrowChartIcon = ({ className = "w-5.5 h-5.5" }) => (
    <svg viewBox="0 0 24 24" fill="#C95A22" className={className}>
      <circle cx="5" cy="11.5" r="1.8" />
      <path d="M3.2 18.5c0-1.3 1-2.2 2-2.2s2 .9 2 2.2v1.5H3.2v-1.5z" />
      <rect x="10" y="13" width="3" height="7" rx="0.8" />
      <rect x="14.5" y="8" width="3" height="12" rx="0.8" />
      <rect x="19" y="3.5" width="3" height="16.5" rx="0.8" />
    </svg>
  );

  // 5 Step Process
  const approachSteps = [
    {
      step: '01',
      title: 'Discover',
      description: 'Understand your requirements and goals.',
      icon: Search
    },
    {
      step: '02',
      title: 'Plan',
      description: 'Create the right technology strategy.',
      icon: FileText
    },
    {
      step: '03',
      title: 'Build',
      description: 'Design, develop and implement the solution.',
      icon: Settings
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Deploy your solution and ensure everything works smoothly.',
      icon: LaunchShieldIcon
    },
    {
      step: '05',
      title: 'Grow',
      description: 'Provide continuous support and help you scale.',
      icon: GrowChartIcon
    }
  ];


  // 3 Verified Student Testimonials matching reference screenshot
  const testimonials = [
    {
      name: 'Shafiq M',
      role: 'B-Tech - IT',
      college: 'Velalar College of Engineering and Technology',
      location: 'Erode',
      quote:
        '"Honestly, I was struggling before I reached out here. But the way you guys explained every step and adjusted all my requirements was just amazing. Project came out perfect and I didn\'t even stress much. Huge thanks!!"',
      avatar: avatarArun
    },
    {
      name: 'Chaitra S',
      role: 'Computer Science Graduate',
      college: 'Vidyavahini First Grade College',
      location: 'Bengaluru',
      quote:
        '"Nice. Within a day you guys gave a project by adding all my requirements and gave complete explanation. It was excellent!"',
      avatar: avatarPriya
    },
    {
      name: 'Harini G',
      role: 'Artificial Intelligence and Machine Learning',
      college: 'Rajalakshmi Engineering College',
      location: 'Chennai',
      quote:
        '"Can\'t thank you enough. I was totally clueless before, but your help gave me so much confidence. Submitted the project proudly. Thank you thank you thank you!!"',
      avatar: avatarSneha
    }
  ];


  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans text-white">
      {/* =========================================================================
          FIXED STATIC BACKGROUND VIDEO (Across entire Home page)
          ========================================================================= */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src={homeBgVideo} type="video/mp4" />
        </video>
        {/* Cinematic ambient dark gradient overlay for optimal contrast and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B10]/85 via-[#080B10]/65 to-[#080B10]/90" />
      </div>

      {/* =========================================================================
          1. HERO SECTION (Centered Content)
          ========================================================================= */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7 flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#FF7A45] border border-white/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#EA4317] animate-pulse"></span>
              <span>INNOVATIVE SOLUTIONS</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-black tracking-tight text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-md">
              Innovative Technology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A45] via-[#EA4317] to-[#FFA07A]">
                for a Brighter Tomorrow
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200/90 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-sm">
              We provide modern digital solutions, technology consulting, and industry-focused training to help businesses, institutions and individuals grow in the digital world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              <Button to="/services" variant="primary" size="lg">
                Our Services
              </Button>
              <Button to="/contact" variant="dark-glass" size="lg" icon={false}>
                Contact Us
              </Button>
            </div>

            {/* Sub-features matching Figma: Technology | Innovation | Education | Growth */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold text-gray-300">
              <div className="flex items-center gap-1.5 text-white/90">
                <Monitor className="w-4 h-4 text-[#FF7A45]" />
                <span>Technology</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-1.5 text-white/90">
                <Lightbulb className="w-4 h-4 text-[#FF7A45]" />
                <span>Innovation</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-1.5 text-white/90">
                <GraduationCap className="w-4 h-4 text-[#FF7A45]" />
                <span>Education</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-1.5 text-white/90">
                <TrendingUp className="w-4 h-4 text-[#FF7A45]" />
                <span>Growth</span>
              </div>
            </div>
          </motion.div>

          {/* =========================================================================
              2. STATISTICS CARD (Seamlessly Positioned on Dark Canvas)
              ========================================================================= */}
          <div className="mt-8 sm:mt-10 lg:mt-12 relative z-30">
            <div className="bg-white rounded-[15px] sm:rounded-[15px] p-5 sm:p-7 lg:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-gray-100/90 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 gap-y-4 lg:gap-y-0">
              {/* Stat 1 */}
              <div className="flex items-center gap-3.5 sm:gap-4.5 justify-center sm:justify-start px-2 sm:px-4 lg:px-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF0E6] border border-[#E8CEBC] flex items-center justify-center text-[#C95A22] shrink-0 shadow-sm">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#C95A22] leading-none tracking-tight">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#101820] mt-1.5 whitespace-nowrap">
                    Students Guided
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3.5 sm:gap-4.5 justify-center sm:justify-start px-2 sm:px-4 lg:px-6 pt-3 lg:pt-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF0E6] border border-[#E8CEBC] flex items-center justify-center text-[#C95A22] shrink-0 shadow-sm">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#C95A22] leading-none tracking-tight">
                    20+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#101820] mt-1.5 whitespace-nowrap">
                    Courses & Trainings
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3.5 sm:gap-4.5 justify-center sm:justify-start px-2 sm:px-4 lg:px-6 pt-3 lg:pt-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF0E6] border border-[#E8CEBC] flex items-center justify-center text-[#C95A22] shrink-0 shadow-sm">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#C95A22] leading-none tracking-tight">
                    85%
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#101820] mt-1.5 whitespace-nowrap">
                    Success Rate
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3.5 sm:gap-4.5 justify-center sm:justify-start px-2 sm:px-4 lg:px-6 pt-3 lg:pt-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF0E6] border border-[#E8CEBC] flex items-center justify-center text-[#C95A22] shrink-0 shadow-sm">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#C95A22] leading-none tracking-tight">
                    30+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#101820] mt-1.5 whitespace-nowrap">
                    Live Industry Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. TRUSTED BY BUSINESSES & INSTITUTIONS (DARK SECTION - Seamlessly Joined)
          ========================================================================= */}
      <section className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        {/* Subtle orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C95A22]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Trusted by Businesses & Institutions
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mb-10">
            Delivering technology solutions that create measurable business impact.
          </p>

          {/* Partner & Client Brand Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto px-4">
            {/* 1. Thulir Infotech Solutions */}
            <div className="flex items-center justify-center transition-all duration-300 hover:scale-105">
              <img
                src={logoThulir}
                alt="Thulir Infotech Solutions"
                className="h-14 sm:h-16 lg:h-18 w-auto object-contain filter drop-shadow-[0_0_2px_rgba(255,255,255,0.7)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
              />
            </div>

            <div className="hidden sm:block w-px h-10 sm:h-12 bg-white/10" />

            {/* 2. ZeroSight360 */}
            <a
              href="https://zerosight360.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              title="ZeroSight360 - VAPT, API & Cloud Security"
            >
              <img
                src={logoZerosight}
                alt="ZeroSight360"
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain filter drop-shadow-[0_0_2px_rgba(11,164,160,0.8)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:brightness-110 transition-all"
              />
            </a>

            <div className="hidden sm:block w-px h-10 sm:h-12 bg-white/10" />

            {/* 3. Shrinovatech */}
            <div className="flex items-center justify-center transition-all duration-300 hover:scale-105">
              <img
                src={logoShrinovatech}
                alt="Shrinovatech"
                className="h-11 sm:h-12 lg:h-13 w-auto object-contain filter drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE NEXSAG?
          ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header (Left-aligned matching Figma) */}
          <div className="mb-10 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose NexSAG?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              Technology solutions designed around your goals, challenges, and long-term growth.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 01 */}
            <div className="bg-white rounded-[22px] p-6 sm:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FAF0E6] border border-[#E8CEBC] flex items-center justify-center text-[#C95A22] shrink-0">
                  <Lightbulb className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-[#C95A22] block">01</span>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#101820] leading-snug">
                    Innovative Solutions
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-[13px] text-[#667085] leading-relaxed">
                We use modern technologies and practical strategies to create solutions that move your business forward.
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-white rounded-[22px] p-6 sm:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FAF0E6] border border-[#E8CEBC] flex items-center justify-center text-[#C95A22] shrink-0">
                  <Users className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-[#C95A22] block">02</span>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#101820] leading-snug">
                    Client Focused
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-[13px] text-[#667085] leading-relaxed">
                We understand your requirements and build solutions around your specific business needs.
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-white rounded-[22px] p-6 sm:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FAF0E6] border border-[#E8CEBC] flex items-center justify-center text-[#C95A22] shrink-0">
                  <Settings className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-[#C95A22] block">03</span>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#101820] leading-snug">
                    Quality & Reliability
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-[13px] text-[#667085] leading-relaxed">
                From planning to deployment, we focus on performance, security, scalability and quality.
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-white rounded-[22px] p-6 sm:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FAF0E6] border border-[#E8CEBC] flex items-center justify-center text-[#C95A22] shrink-0">
                  <User className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-[#C95A22] block">04</span>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#101820] leading-snug">
                    End-to-End Support
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-[13px] text-[#667085] leading-relaxed">
                Get continuous technical guidance and support throughout your digital journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. TECHNOLOGY SOLUTIONS BUILT FOR GROWTH
          ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Top header row with title and Explore button */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Technology Solutions{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A45] via-[#EA4317] to-[#FFA07A]">
                  Built for Growth
                </span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-3xl">
                From building your digital presence to implementing advanced technology, NexSAG provides end-to-end solutions under one roof.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C95A22] text-[#C95A22] bg-white hover:bg-[#C95A22] hover:text-white font-semibold text-sm transition-all duration-300 shadow-sm"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 6 Services Grid (Single Row on Desktop: lg:grid-cols-6 matching Figma) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="h-32 sm:h-36 w-full overflow-hidden bg-gray-100 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-start justify-between gap-1 mb-1.5">
                      <h3 className="text-xs sm:text-[13px] font-bold text-[#101820] leading-snug group-hover:text-[#C95A22] transition-colors">
                        {service.title}
                      </h3>
                      <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 shrink-0 mt-0.5 group-hover:border-[#C95A22] group-hover:text-[#C95A22] transition-colors">
                        <ArrowRight className="w-2.5 h-2.5 -rotate-45" />
                      </div>
                    </div>
                    <p className="text-[11px] text-[#667085] leading-tight">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom-right orange circle button */}
                  <div className="mt-4 flex justify-end">
                    <Link
                      to={service.link}
                      aria-label={`Learn more about ${service.title}`}
                      className="w-7 h-7 rounded-full bg-[#C95A22] group-hover:bg-[#D97736] flex items-center justify-center text-white transition-all shadow-sm hover:scale-110"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OUR APPROACH: FROM IDEA TO IMPACT (With Network Meeting Background)
          ========================================================================= */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(201,90,34,0.06)] border border-[#E8CEBC]/70 p-6 sm:p-9 lg:p-11 min-h-[420px] flex flex-col justify-between bg-[#FFF9F2]">
          {/* Background: Network Meeting Image with Smooth Left Fade Effect matching Figma */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={networkMeetingImg}
              alt="NexSAG Approach Collaboration"
              className="w-full h-full object-cover object-[center_right] sm:object-center select-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.06) 10%, rgba(0, 0, 0, 0.35) 22%, rgba(0, 0, 0, 0.8) 38%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.06) 10%, rgba(0, 0, 0, 0.35) 22%, rgba(0, 0, 0, 0.8) 38%, black 55%)'
              }}
            />
            {/* Deterministic smooth left-to-right fade overlay into the container's warm cream background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #FFF9F2 0%, rgba(255, 249, 242, 0.9) 15%, rgba(255, 249, 242, 0.5) 32%, rgba(255, 249, 242, 0.1) 48%, transparent 60%)'
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Header (Left-aligned matching Figma) */}
            <div className="max-w-2xl mb-8 sm:mb-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#F5E5D8] text-[#1E293B] border border-[#E8CEBC] mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C95A22]"></span>
                <span>OUR APPROACH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#101820] tracking-tight leading-tight">
                From Idea{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#351402] to-[#d55023]">
                  to Impact
                </span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#475569] leading-relaxed">
                A simple and transparent approach designed to turn your ideas into successful digital solutions.
              </p>
            </div>

            {/* 5 Connected Step Cards in single horizontal flex row */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5 sm:gap-3.5">
              {approachSteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.step}>
                    <div className="flex-1 bg-white rounded-[20px] p-4 sm:p-4.5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-gray-100/80 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
                      <div>
                        {/* Header: Left circular icon badge, right stacked step + title */}
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-[#FAF0E6] border border-[#E8CEBC] flex items-center justify-center text-[#C95A22] shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                            <Icon className="w-5.5 h-5.5" />
                          </div>
                          <div>
                            <span className="text-xs font-extrabold text-[#C95A22] leading-none block">
                              {item.step}
                            </span>
                            <h3 className="text-sm sm:text-[15px] font-bold text-[#101820] leading-snug mt-1">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-[11px] sm:text-[11.5px] text-[#64748B] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Connecting Arrow between cards (hidden on last card and small screens) */}
                    {idx < approachSteps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center shrink-0 text-[#C95A22] drop-shadow-sm px-0.5">
                        <ArrowRight className="w-4 h-4 stroke-[2.8]" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          8. OUR SUCCESS: REAL PEOPLE. REAL ACHIEVEMENTS.
          ========================================================================= */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(201,90,34,0.06)] border border-[#E8CEBC]/70 p-6 sm:p-9 lg:p-11 bg-[#FFF9F2]">
          {/* Background: Celebration Banner with Smooth Left Fade Effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={celebrationBannerImg}
              alt="NexSAG Student Celebration"
              className="w-full h-full object-cover object-[center_right] select-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.06) 12%, rgba(0, 0, 0, 0.35) 24%, rgba(0, 0, 0, 0.8) 40%, black 58%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.06) 12%, rgba(0, 0, 0, 0.35) 24%, rgba(0, 0, 0, 0.8) 40%, black 58%)'
              }}
            />
            {/* Deterministic smooth left-to-right fade overlay into the container's warm cream background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #FFF9F2 0%, rgba(255, 249, 242, 0.92) 16%, rgba(255, 249, 242, 0.5) 32%, rgba(255, 249, 242, 0.1) 48%, transparent 62%)'
              }}
            />
          </div>

          {/* Foreground Content: Header, Stats bar, and Full-Width Testimonials matching design */}
          <div className="relative z-10 flex flex-col gap-8 sm:gap-10">
            {/* Header Row: Title on Left, View Our Success Button on Right */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#F5E5D8] text-[#1E293B] border border-[#E8CEBC] mb-3 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#C95A22]"></span>
                  <span>OUR SUCCESS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#101820] tracking-tight leading-tight">
                  Real People. <br className="hidden sm:inline" />
                  Real{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#351402] to-[#d55023]">
                    Achievements.
                  </span>
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-[#64748B] max-w-xl leading-relaxed">
                  Our work is measured by the success we create for our clients, students, and partners.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/success"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C95A22] to-[#D97736] text-white font-bold text-sm shadow-md shadow-amber-800/25 hover:shadow-amber-800/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>View Our Success</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* 4 Stats in horizontal line with dividers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x divide-gray-200/90 py-5 px-6 rounded-2xl bg-white/70 backdrop-blur-md border border-[#E8CEBC]/70 shadow-xs">
              <div className="md:pr-6 text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#C95A22] leading-none">
                  100+
                </div>
                <div className="text-xs font-semibold text-[#64748B] mt-1.5 leading-snug">
                  Students Guided
                </div>
              </div>

              <div className="md:px-6 text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#C95A22] leading-none">
                  20+
                </div>
                <div className="text-xs font-semibold text-[#64748B] mt-1.5 leading-snug">
                  Courses & Trainings
                </div>
              </div>

              <div className="md:px-6 text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#C95A22] leading-none">
                  85%
                </div>
                <div className="text-xs font-semibold text-[#64748B] mt-1.5 leading-snug">
                  Success Rate
                </div>
              </div>

              <div className="md:pl-6 text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#C95A22] leading-none">
                  30+
                </div>
                <div className="text-xs font-semibold text-[#64748B] mt-1.5 leading-snug">
                  Live Industry Projects
                </div>
              </div>
            </div>

            {/* 3 Verified Student Review Cards spanning full width (Matching reference image) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {testimonials.map((testi) => (
                <div
                  key={testi.name}
                  className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative text-left group overflow-hidden"
                >
                  {/* Decorative Quotation Mark in top-right */}
                  <span className="text-4xl text-[#E0F2FE]/70 font-serif font-black select-none pointer-events-none leading-none absolute top-5 right-6">
                    ““
                  </span>

                  {/* Top Row: 5 Stars + Verified Student Pill */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                      <div className="flex items-center gap-0.5 text-[#F59E0B]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]/70 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Verified Student</span>
                      </span>
                    </div>

                    {/* Review Quote Text */}
                    <p className="text-[13px] sm:text-sm text-[#334155] leading-relaxed italic mb-6">
                      {testi.quote}
                    </p>
                  </div>

                  {/* Bottom Row: Avatar + Name + Degree + College + Location Pill */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100/90">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={testi.avatar}
                        alt={testi.name}
                        className="w-11 h-11 rounded-full object-cover shrink-0 border border-gray-200 shadow-2xs"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#101820] leading-snug">
                          {testi.name}
                        </div>
                        <div className="text-xs text-[#64748B] leading-snug mt-0.5">
                          {testi.role}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] mt-1 min-w-0">
                          <GraduationCap className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                          <span className="truncate max-w-[160px] sm:max-w-[190px]">{testi.college}</span>
                        </div>
                      </div>
                    </div>

                    {/* City Location Pill */}
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE] shrink-0 self-center">
                      <MapPin className="w-3 h-3 text-[#2563EB]" />
                      <span>{testi.location}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          10. LET'S WORK TOGETHER (CTA SECTION WITH EARTH BACKGROUND)
          ========================================================================= */}
      <section className="pt-8 sm:pt-12 pb-3 sm:pb-4 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden relative border border-white/15 bg-[#05080E] p-6 sm:p-10 lg:p-12 shadow-2xl min-h-[250px] flex flex-col justify-center">
          {/* Background: Earth.png with illuminated globe and network lines */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={earthImg}
              alt="NexSAG Global Technology Solutions"
              className="w-full h-full object-cover object-[center_right] select-none"
            />
            {/* Smooth left-to-right contrast fade to ensure high text contrast */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(5, 8, 14, 0.95) 0%, rgba(5, 8, 14, 0.85) 32%, rgba(5, 8, 14, 0.35) 65%, transparent 85%)'
              }}
            />
          </div>

          {/* Foreground Content: Left Text & Right Buttons matching Figma */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#221611]/90 text-[#E58A4E] border border-[#C95A22]/40 mb-3.5 shadow-sm">
                <span className="w-2 h-2 rounded-xs rotate-45 bg-[#C95A22]"></span>
                <span>LET'S WORK TOGETHER</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
                Let's Build Something Great Together
              </h2>

              <p className="mt-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg">
                Have an idea, business challenge, or technology requirement? <br className="hidden sm:inline" />
                Let's turn it into a powerful digital solution.
              </p>
            </div>

            {/* Right Buttons: Start Your Project & Talk to Our Team */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#C95A22] to-[#D97736] text-[#101820] hover:text-white font-bold text-sm shadow-lg shadow-amber-800/30 hover:shadow-amber-800/50 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/40 hover:border-white text-white bg-white/5 hover:bg-white/10 backdrop-blur-md font-semibold text-sm hover:scale-105 active:scale-95 transition-all"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
