import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  FileText,
  MessageSquare,
  ArrowRight,
  Briefcase,
  Users,
  Settings,
  Trophy,
  HelpCircle,
  GraduationCap,
  Handshake,
  Plus,
  Minus
} from 'lucide-react';

import contactHeroOfficeImg from '../assets/contact_hero_office.jpg';
import contactReceptionImg from '../assets/contact_reception.jpg';
import contactMeetingImg from '../assets/contact_meeting.jpg';
import contactWorkspaceImg from '../assets/contact_workspace.jpg';
import contactMapImg from '../assets/contact_map_coimbatore.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState(-1);

  const contactDetails = [
    {
      title: 'Our Location',
      icon: MapPin,
      lines: [
        { text: 'Coimbatore, Tamil Nadu, India' }
      ]
    },
    {
      title: 'Email Us',
      icon: Mail,
      lines: [
        { text: 'nexsagtechnology@gmail.com', href: 'mailto:nexsagtechnology@gmail.com' },
        { text: 'info@nexsag.com', href: 'mailto:info@nexsag.com' },
        { text: 'hr@nexsag.com', href: 'mailto:hr@nexsag.com' }
      ]
    },
    {
      title: 'Call Us',
      icon: Phone,
      lines: [
        { text: '+91 93426 42796', href: 'tel:+919342642796' },
        { text: '+91 97895 97416', href: 'tel:+919789597416' }
      ]
    },
    {
      title: 'Business Hours',
      icon: Clock,
      lines: [
        { text: 'Mon - Sat | 9:00 AM - 6:00 PM' }
      ]
    }
  ];

  const stats = [
    {
      icon: Briefcase,
      number: '100+',
      label: 'Students Guided'
    },
    {
      icon: Users,
      number: '20+',
      label: 'Courses & Trainings'
    },
    {
      icon: Settings,
      number: '85%',
      label: 'Success Rate'
    },
    {
      icon: Trophy,
      number: '30+',
      label: 'Live Industry Projects'
    }
  ];

  const officePhotos = [
    {
      title: 'Reception Area',
      img: contactReceptionImg
    },
    {
      title: 'Meeting Room',
      img: contactMeetingImg
    },
    {
      title: 'Our Workspace',
      img: contactWorkspaceImg
    }
  ];

  const connectWays = [
    {
      icon: HelpCircle,
      title: 'General Enquiries',
      email: 'info@nexsag.com',
      desc: 'For general questions and information'
    },
    {
      icon: Briefcase,
      title: 'Project Discussion',
      email: 'nexsagtechnology@gmail.com',
      desc: 'Discuss your project ideas and requirements'
    },
    {
      icon: Users,
      title: 'Careers & HR',
      email: 'hr@nexsag.com',
      desc: 'Job openings, internships & HR queries'
    },
    {
      icon: Phone,
      title: 'Direct Call Support',
      phonePrimary: '+91 93426 42796',
      phoneSecondary: '+91 97895 97416',
      desc: 'Speak directly with our team for immediate assistance'
    }
  ];

  const faqs = [
    {
      question: 'How can I get a quote for my project?',
      answer:
        'You can request a free project quote by filling out our contact form above or emailing nexsagtechnology@gmail.com / info@nexsag.com. Our solutions team will review your specifications, conduct a brief discovery discussion, and provide a transparent project breakdown with milestone deliverables within 24 to 48 hours.'
    },
    {
      question: 'Do you provide online training programs?',
      answer:
        'Yes, NexSAG Academy provides industry-accredited online, in-person, and hybrid training programs. Each track incorporates live instructor-led masterclasses, real-world industry capstone projects, personalized mentor feedback, and dedicated placement assistance.'
    },
    {
      question: 'What industries do you work with?',
      answer:
        'We engineer cutting-edge digital products across multiple sectors including Healthcare, E-Commerce, Hospitality, Education, FinTech, Logistics, and Smart Manufacturing.'
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on architectural complexity and feature scope. Rapid MVPs and custom web portals typically take 4 to 8 weeks, whereas comprehensive enterprise ecosystems and custom AI integrations typically span 2 to 4 months with continuous sprint demonstrations.'
    },
    {
      question: 'Do you offer post-launch support?',
      answer:
        'Yes, we provide 24/7 dedicated post-launch support, SLA-backed maintenance, cloud performance optimization, security monitoring, and progressive feature enhancements to keep your solution running seamlessly at all times.'
    }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please write your message.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION: Let's Build Something Great Together
          ========================================================================= */}
      <section className="relative pt-8 pb-8 lg:pt-12 lg:pb-10 overflow-hidden">
        {/* World Map Faint Watermark & Glowing Hotspots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
          <svg
            className="absolute top-2 left-1/4 w-[750px] lg:w-[980px] h-auto text-slate-200"
            viewBox="0 0 1000 500"
            fill="none"
            stroke="currentColor"
          >
            {/* World continents outline sketch */}
            <path
              d="M150 120 Q 200 90 260 110 T 320 180 T 260 270 T 200 230 Z M 210 280 Q 250 310 270 380 T 220 440 T 190 350 Z M 520 90 Q 600 60 700 80 T 820 140 T 780 240 T 650 220 T 560 160 Z M 520 200 Q 580 230 620 310 T 580 420 T 510 330 Z M 750 310 Q 820 300 860 360 T 780 430 Z"
              fill="rgba(226, 232, 240, 0.45)"
              stroke="none"
            />
            {/* Network Connections */}
            <path
              d="M 230 140 Q 420 100 580 140 T 780 220"
              stroke="#EA4317"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.35"
            />
            <path
              d="M 240 340 Q 450 300 600 220 T 760 340"
              stroke="#EA4317"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.3"
            />
          </svg>

          {/* Map Pin 1 */}
          <div className="absolute top-16 left-[46%] -translate-x-1/2 flex flex-col items-center">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA4317] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EA4317]"></span>
            </span>
            <div className="w-5 h-5 rounded-full border border-[#EA4317]/40 -mt-4 animate-pulse"></div>
          </div>

          {/* Map Pin 2 */}
          <div className="absolute top-28 left-[54%] -translate-x-1/2 flex flex-col items-center">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA4317] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#EA4317]"></span>
            </span>
            <div className="w-6 h-6 rounded-full border border-[#EA4317]/40 -mt-5 animate-pulse"></div>
          </div>

          {/* Map Pin 3 */}
          <div className="absolute top-12 left-[60%] -translate-x-1/2 flex flex-col items-center">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA4317] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EA4317]"></span>
            </span>
          </div>
        </div>

        {/* Top-Right Office Background Visual extending seamlessly */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%] xl:w-[64%] h-full overflow-hidden pointer-events-none z-0">
          <img
            src={contactHeroOfficeImg}
            alt="NexSAG Technology Office"
            className="w-full h-full object-cover object-[78%_center]"
          />
          {/* Feathered dissolve on left and smooth fade on bottom */}
          <div className="absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Left Column: Title & Contact Details */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-7">
              <div>
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF2EB] text-[#EA4317] border border-[#FFDDD0]">
                  <span className="w-2 h-2 rounded-full bg-[#EA4317]" />
                  <span>CONTACT US</span>
                </div>

                {/* Main Heading */}
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#111827] leading-[1.12] tracking-tight">
                  Let’s Build <br />
                  Something Great <br />
                  <span className="text-[#EA4317]">Together</span>
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-lg leading-relaxed">
                  Have a question, project idea, or training enquiry? <br className="hidden sm:block" />
                  We’re here to help you.
                </p>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4 pt-2 max-w-md">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#EA4317] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#EA4317]/30 transition-transform duration-200 group-hover:scale-105 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#111827] leading-snug">
                          {item.title}
                        </h4>
                        <div className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mt-1 space-y-1">
                          {item.lines.map((line, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 flex-wrap">
                              {line.prefix && (
                                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                  {line.prefix}
                                </span>
                              )}
                              {line.href ? (
                                <a
                                  href={line.href}
                                  className="text-gray-600 hover:text-[#EA4317] hover:underline transition-colors font-medium"
                                >
                                  {line.text}
                                </a>
                              ) : (
                                <span className="text-gray-500">{line.text}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Send Us a Message Card (Transparent Glassmorphic) */}
            <div className="lg:col-span-6 xl:col-span-5 relative lg:pt-6">
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.12)] border border-white/80 relative z-20">
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight mb-5">
                  Send Us a Message
                </h3>

                <AnimatePresence>
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 text-center bg-white/80 backdrop-blur-md rounded-2xl border border-[#EA4317]/30 space-y-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#EA4317]/10 text-[#EA4317] mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-[#111827]">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
                        Thank you for reaching out to NexSAG Technology. Our team will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#EA4317] text-white shadow-md hover:bg-[#D43810] transition-colors"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <div className="relative">
                          <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none bg-white/70 backdrop-blur-sm ${errors.name
                                ? 'border-red-500 bg-red-50/30'
                                : 'border-gray-200/90 focus:border-[#EA4317] focus:bg-white/95 focus:ring-1 focus:ring-[#EA4317]'
                              }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none bg-white/70 backdrop-blur-sm ${errors.email
                                ? 'border-red-500 bg-red-50/30'
                                : 'border-gray-200/90 focus:border-[#EA4317] focus:bg-white/95 focus:ring-1 focus:ring-[#EA4317]'
                              }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Subject Field */}
                      <div>
                        <div className="relative">
                          <FileText className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none bg-white/70 backdrop-blur-sm ${errors.subject
                                ? 'border-red-500 bg-red-50/30'
                                : 'border-gray-200/90 focus:border-[#EA4317] focus:bg-white/95 focus:ring-1 focus:ring-[#EA4317]'
                              }`}
                          />
                        </div>
                        {errors.subject && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <div className="relative">
                          <MessageSquare className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5 pointer-events-none" />
                          <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none resize-none bg-white/70 backdrop-blur-sm ${errors.message
                                ? 'border-red-500 bg-red-50/30'
                                : 'border-gray-200/90 focus:border-[#EA4317] focus:bg-white/95 focus:ring-1 focus:ring-[#EA4317]'
                              }`}
                          ></textarea>
                        </div>
                        {errors.message && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EA4317] to-[#F15A24] text-white font-bold text-sm shadow-md shadow-[#EA4317]/30 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-75"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STATS BAR SECTION: Full-Width with Curved Top-Left & Top-Right Edges
          ========================================================================= */}
      <section className="relative z-10 w-full bg-[#080B11] rounded-t-[5px] sm:rounded-t-[15px] lg:rounded-t-[25px] rounded-b-none border-t border-white/[0.08] shadow-2xl overflow-hidden py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Stat 1: 500+ Projects Completed */}
            <div className="flex items-center gap-4 sm:gap-5 justify-start lg:justify-center py-3 sm:py-1 sm:px-4 lg:px-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#2D160D] via-[#241108] to-[#150A04] border border-[#EA4317]/30 flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8">
                  <path d="M12 9V7C12 5.89543 12.8954 5 14 5H18C19.1046 5 20 5.89543 20 7V9" stroke="#EA4317" strokeWidth="2" strokeLinecap="round" />
                  <rect x="5" y="9" width="22" height="17" rx="3.5" stroke="#EA4317" strokeWidth="2" fill="#241108" />
                  <path d="M5 15H27" stroke="#FF7A45" strokeWidth="2" />
                  <rect x="13.5" y="13.5" width="5" height="5" rx="1" fill="#EA4317" stroke="#FFB088" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#FF4D15] tracking-tight leading-none">
                  100+
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-normal mt-1.5 leading-snug whitespace-nowrap">
                  Students Guided
                </p>
              </div>
            </div>

            {/* Stat 2: 200+ Happy Clients */}
            <div className="flex items-center gap-4 sm:gap-5 justify-start lg:justify-center py-3 sm:py-1 sm:px-4 lg:px-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#2D160D] via-[#241108] to-[#150A04] border border-[#EA4317]/30 flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8">
                  <circle cx="9.5" cy="12" r="2.8" fill="#FFFFFF" />
                  <path d="M5 22C5 18.5 7.5 16.5 10.5 16.5C11.1 16.5 11.6 16.6 12.2 16.8C11.1 18.1 10.5 19.8 10.5 22H5Z" fill="#FFFFFF" opacity="0.9" />
                  <circle cx="22.5" cy="12" r="2.8" fill="#FFFFFF" />
                  <path d="M27 22C27 18.5 24.5 16.5 21.5 16.5C20.9 16.5 20.4 16.6 19.8 16.8C20.9 18.1 21.5 19.8 21.5 22H27Z" fill="#FFFFFF" opacity="0.9" />
                  <circle cx="16" cy="10.8" r="3.4" fill="#FFFFFF" />
                  <path d="M9.8 23C9.8 19 12.5 16.8 16 16.8C19.5 16.8 22.2 19 22.2 23H9.8Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#FF4D15] tracking-tight leading-none">
                  20+
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-normal mt-1.5 leading-snug whitespace-nowrap">
                  Courses & Trainings
                </p>
              </div>
            </div>

            {/* Stat 3: 50+ Expert Team */}
            <div className="flex items-center gap-4 sm:gap-5 justify-start lg:justify-center py-3 sm:py-1 sm:px-4 lg:px-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#2D160D] via-[#241108] to-[#150A04] border border-[#EA4317]/30 flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8">
                  <path
                    d="M14.2 4.5H17.8L18.4 7.2C19.1 7.5 19.8 7.9 20.4 8.4L23 7.3L25.5 9.8L24.4 12.4C24.9 13 25.3 13.7 25.6 14.4L28.3 15V18.6L25.6 19.2C25.3 19.9 24.9 20.6 24.4 21.2L25.5 23.8L23 26.3L20.4 25.2C19.8 25.7 19.1 26.1 18.4 26.4L17.8 29.1H14.2L13.6 26.4C12.9 26.1 12.2 25.7 11.6 25.2L9 26.3L6.5 23.8L7.6 21.2C7.1 20.6 6.7 19.9 6.4 19.2L3.7 18.6V15L6.4 14.4C6.7 13.7 7.1 13 7.6 12.4L6.5 9.8L9 7.3L11.6 8.4C12.2 7.9 12.9 7.5 13.6 7.2L14.2 4.5Z"
                    stroke="#EA4317"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    fill="#2A140A"
                  />
                  <circle cx="16" cy="16.8" r="4.2" stroke="#FF7A45" strokeWidth="2" fill="#1C0D06" />
                  <circle cx="16" cy="16.8" r="1.8" fill="#EA4317" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#FF4D15] tracking-tight leading-none">
                  85%
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-normal mt-1.5 leading-snug whitespace-nowrap">
                  Success Rate
                </p>
              </div>
            </div>

            {/* Stat 4: 5+ Years Experience */}
            <div className="flex items-center gap-4 sm:gap-5 justify-start lg:justify-center py-3 sm:py-1 sm:px-4 lg:px-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#2D160D] via-[#241108] to-[#150A04] border border-[#EA4317]/30 flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8">
                  <path d="M9 7H23V14C23 17.866 19.866 21 16 21C12.134 21 9 17.866 9 14V7Z" stroke="#EA4317" strokeWidth="2" fill="#241108" />
                  <path d="M9 9H6C4.89543 9 4 9.89543 4 11V12C4 14.2091 5.79086 16 8 16H9" stroke="#FF7A45" strokeWidth="2" strokeLinecap="round" />
                  <path d="M23 9H26C27.1046 9 28 9.89543 28 11V12C28 14.2091 26.2091 16 24 16H23" stroke="#FF7A45" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 21V25" stroke="#EA4317" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M11 26H21" stroke="#FF7A45" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#FF4D15] tracking-tight leading-none">
                  30+
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-normal mt-1.5 leading-snug whitespace-nowrap">
                  Live Industry Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. VISIT OUR OFFICE & COIMBATORE MAP SECTION (Exact Figma Screen)
          ========================================================================= */}
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Office Info & Photo Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF2EB] text-[#EA4317] border border-[#FFDDD0]">
                  <span className="w-2 h-2 rounded-full bg-[#EA4317]" />
                  <span>OUR LOCATION</span>
                </div>

                <h2 className="mt-3.5 text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                  Visit Our <span className="text-[#EA4317]">Office</span>
                </h2>

                <p className="mt-2.5 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md">
                  You’re always welcome to meet us in person. <br />
                  Come and discuss your ideas with our team.
                </p>

                {/* Clickable Location Card linking to exact Google Maps */}
                <a
                  href="https://maps.app.goo.gl/b8xBDvZNbAC4MEQS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#EA4317]/50 hover:shadow-xl transition-all duration-300 flex items-center justify-between group cursor-pointer block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#EA4317] via-[#FF5E1E] to-[#FF8A50] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#EA4317]/30 group-hover:scale-105 transition-transform">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#EA4317] transition-colors leading-snug">
                        NexSAG Technology
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium leading-snug mt-0.5">
                        Coimbatore, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#EA4317] group-hover:translate-x-1.5 transition-transform shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </a>
              </div>

              {/* 3 Office Photos in Row */}
              <div className="pt-2">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {officePhotos.map((photo, idx) => (
                    <div key={idx} className="group">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                        <img
                          src={photo.img}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-xs font-semibold text-gray-700 mt-2 text-center leading-tight">
                        {photo.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: High-Resolution Map of Coimbatore with Interactive Callout Pin */}
            <div className="lg:col-span-7">
              <a
                href="https://maps.app.goo.gl/b8xBDvZNbAC4MEQS8"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl overflow-hidden border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative h-full min-h-[380px] sm:min-h-[440px] bg-[#FAF8F5] group cursor-pointer"
              >
                <img
                  src={contactMapImg}
                  alt="NexSAG Technology Office Location on Coimbatore Map"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating Map Callout Speech-Bubble Card matching Figma */}
                <div className="absolute top-[28%] right-[12%] sm:right-[18%] -translate-y-1/2 z-20">
                  <div className="relative bg-white/98 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EA4317] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#EA4317]/30">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                        NexSAG Technology
                      </h5>
                      <p className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight mt-0.5">
                        Coimbatore, Tamil Nadu, India
                      </p>
                    </div>

                    {/* Speech bubble pointer triangle */}
                    <div className="absolute -bottom-1.5 left-8 w-3.5 h-3.5 bg-white rotate-45 border-r border-b border-gray-100 shadow-xs" />
                  </div>

                  {/* Pulsing Target Dot beneath callout tip */}
                  <div className="absolute -bottom-4 left-9 -translate-x-1/2 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#EA4317] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EA4317]"></span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CHOOSE THE RIGHT WAY TO CONNECT SECTION (Exact Figma Screen)
          ========================================================================= */}
      <section className="pt-14 sm:pt-20 pb-6 sm:pb-8 bg-[#FFF9F6] border-t border-orange-100/50 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-gradient-to-b from-[#FFEFE6]/70 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFEADB] text-[#111827] border border-[#FFD5BF]">
              <span className="w-2 h-2 rounded-full bg-[#EA4317]" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] tracking-tight leading-tight">
              Choose the Right Way to <span className="text-[#EA4317]">Connect</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
              We’re here to help you with your queries, project requirements,{' '}
              <strong className="font-semibold text-gray-800">training programs</strong>, or partnership opportunities.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: General Enquiries */}
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-gray-100/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#EA4317] via-[#FF5722] to-[#FF7043] flex items-center justify-center shrink-0 shadow-md shadow-[#EA4317]/25 group-hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#FFFFFF" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3.5" fill="#FFFFFF" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug mt-5">
                  General Enquiries
                </h3>

                <a
                  href="mailto:info@nexsag.com"
                  className="inline-block mt-1 text-sm font-medium text-gray-700 hover:text-[#EA4317] transition-colors"
                >
                  info@nexsag.com
                </a>

                <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                  For general questions and corporate information
                </p>
              </div>
            </div>

            {/* Card 2: Project Discussion */}
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-gray-100/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#EA4317] via-[#FF5722] to-[#FF7043] flex items-center justify-center shrink-0 shadow-md shadow-[#EA4317]/25 group-hover:scale-105 transition-transform duration-300">
                  <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug mt-5">
                  Project Discussion
                </h3>

                <a
                  href="mailto:nexsagtechnology@gmail.com"
                  className="inline-block mt-1 text-xs sm:text-[13px] font-medium text-gray-700 hover:text-[#EA4317] transition-colors break-all"
                >
                  nexsagtechnology@gmail.com
                </a>

                <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                  Discuss your project ideas and requirements
                </p>
              </div>
            </div>

            {/* Card 3: Careers & HR */}
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-gray-100/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#EA4317] via-[#FF5722] to-[#FF7043] flex items-center justify-center shrink-0 shadow-md shadow-[#EA4317]/25 group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug mt-5">
                  Careers & HR
                </h3>

                <a
                  href="mailto:hr@nexsag.com"
                  className="inline-block mt-1 text-sm font-medium text-gray-700 hover:text-[#EA4317] transition-colors"
                >
                  hr@nexsag.com
                </a>

                <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                  Explore job openings, internships & HR queries
                </p>
              </div>
            </div>

            {/* Card 4: Direct Call Support */}
            <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-gray-100/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#EA4317] via-[#FF5722] to-[#FF7043] flex items-center justify-center shrink-0 shadow-md shadow-[#EA4317]/25 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug mt-5">
                  Direct Call
                </h3>

                <div className="mt-1 space-y-0.5 text-xs sm:text-[13px] font-medium">
                  <div>
                    <a
                      href="tel:+919342642796"
                      className="text-gray-700 hover:text-[#EA4317] transition-colors"
                    >
                      +91 93426 42796
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+919789597416"
                      className="text-gray-700 hover:text-[#EA4317] transition-colors"
                    >
                      +91 97895 97416
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                  Speak directly with our team for quick support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FREQUENTLY ASKED QUESTIONS SECTION (Exact Figma Screen)
          ========================================================================= */}
      <section className="pt-2 sm:pt-4 pb-16 sm:pb-24 bg-[#FFF9F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle & Gradient Pill Button */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFEADB] text-[#111827] border border-[#FFD5BF]">
                <span className="w-2 h-2 rounded-full bg-[#EA4317] shrink-0" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                Got Questions? <br />
                We’ve <span className="text-[#EA4317]">Got Answers</span>
              </h2>

              <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed max-w-sm sm:max-w-md">
                Here are some common questions from our clients and students. If you need more information, feel free to contact us.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF5722] via-[#EA4317] to-[#D83607] text-white font-semibold text-sm sm:text-base shadow-[0_8px_25px_rgba(234,67,23,0.35)] hover:shadow-[0_12px_30px_rgba(234,67,23,0.45)] hover:brightness-105 active:scale-95 transition-all group"
                >
                  <span>More FAQs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Column: Unified White FAQ Card */}
            <div className="lg:col-span-7 bg-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 shadow-[0_12px_45px_rgba(0,0,0,0.04)] border border-gray-100/90 divide-y divide-gray-100">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="py-4.5 sm:py-5 first:pt-1 last:pb-1">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        {/* Teardrop / Map-Pin Bullet */}
                        <svg
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-3.5 h-3.5 text-black shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 1a5 5 0 0 0-5 5c0 3.8 5 9 5 9s5-5.2 5-9a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm sm:text-base font-semibold text-[#111827] group-hover:text-[#EA4317] transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div className="text-gray-900 shrink-0 pl-2">
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2]" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3.5 pb-1 pl-7 sm:pl-8 text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
