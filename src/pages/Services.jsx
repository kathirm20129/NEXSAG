import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import {
  servicesData,
  workingProcessData,
  servicesDetailData,
  servicesFaqData
} from '../data/services';
import heroAiImg from '../assets/hero_ai_clean_glow.png';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState('03'); // '03' is highlighted by default in Figma
  const [openFaq, setOpenFaq] = useState(null);
  const lenisRef = useRef(null);
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth;
      const cardWidth = containerWidth / (window.innerWidth >= 1024 ? 6 : window.innerWidth >= 640 ? 3 : 2);
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      gestureDirection: "vertical",
      smoothTouch: true,
      touchMultiplier: 2
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Set z-index for images
    document.querySelectorAll(".arch__right .img-wrapper").forEach((element) => {
      const order = element.getAttribute("data-index");
      if (order !== null) {
        element.style.zIndex = order;
      }
    });

    // Mobile layout handler (only handle order)
    function handleMobileLayout() {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const leftItems = gsap.utils.toArray(".arch__left .arch__info");
      const rightItems = gsap.utils.toArray(".arch__right .img-wrapper");

      if (isMobile) {
        // Interleave items using order
        leftItems.forEach((item, i) => {
          item.style.order = i * 2;
        });
        rightItems.forEach((item, i) => {
          item.style.order = i * 2 + 1;
        });
      } else {
        // Clear order for desktop
        leftItems.forEach((item) => {
          item.style.order = "";
        });
        rightItems.forEach((item) => {
          item.style.order = "";
        });
      }
    }

    // Debounce resize for performance
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleMobileLayout, 100);
    };
    window.addEventListener("resize", onResize);

    // Run on initial load
    handleMobileLayout();

    const imgs = gsap.utils.toArray(".img-wrapper img");
    const bgColors = [
      "#EDF9FF",
      "#FFECF2",
      "#FFE8DB",
      "#EDF3FD",
      "#EBF7F2",
      "#FFF9F2",
      "#F0FDF4",
      "#FFF7ED"
    ];

    // GSAP Animation with Media Query (compatible with GSAP 3.12+)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".arch",
          start: "top top",
          end: "bottom bottom",
          pin: ".arch__right",
          scrub: true
        }
      });

      gsap.set(imgs, {
        clipPath: "inset(0)",
        objectPosition: "0px 0%"
      });

      imgs.forEach((_, index) => {
        const currentImage = imgs[index];
        const nextImage = imgs[index + 1] ? imgs[index + 1] : null;

        const sectionTimeline = gsap.timeline();

        if (nextImage) {
          sectionTimeline
            .to(
              ["body", ".services-page-root"],
              {
                backgroundColor: bgColors[index % bgColors.length],
                duration: 1.5,
                ease: "power2.inOut"
              },
              0
            )
            .to(
              currentImage,
              {
                clipPath: "inset(0px 0px 100%)",
                objectPosition: "0px 60%",
                duration: 1.5,
                ease: "none"
              },
              0
            )
            .to(
              nextImage,
              {
                objectPosition: "0px 40%",
                duration: 1.5,
                ease: "none"
              },
              0
            );
        }

        mainTimeline.add(sectionTimeline);
      });
    });

    mm.add("(max-width: 768px)", () => {
      const mbTimeline = gsap.timeline();
      gsap.set(imgs, {
        objectPosition: "0px 60%"
      });

      imgs.forEach((image, index) => {
        const innerTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top-=70% top+=50%",
            end: "bottom+=200% bottom",
            scrub: true
          }
        });

        innerTimeline
          .to(image, {
            objectPosition: "0px 30%",
            duration: 5,
            ease: "none"
          })
          .to(
            ["body", ".services-page-root"],
            {
              backgroundColor: bgColors[index % bgColors.length],
              duration: 1.5,
              ease: "power2.inOut"
            }
          );

        mbTimeline.add(innerTimeline);
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", onResize);
      mm.revert();
      lenis.destroy();
      lenisRef.current = null;
      document.body.style.backgroundColor = "";
    };
  }, []);

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const scrollToDetail = (detailId) => {
    const el = document.getElementById(detailId);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -40, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="services-page-root min-h-screen text-[#101820] overflow-x-clip transition-colors duration-500">
      {/* =========================================================================
          1. HERO SECTION & TOP 6 SERVICES
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        {/* Glowing atmospheric flares at bottom-left and bottom-right edges */}
        <div className="absolute bottom-0 left-0 w-80 h-48 bg-gradient-to-tr from-[#EA4317]/20 via-[#EA4317]/10 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-48 bg-gradient-to-tl from-[#EA4317]/20 via-[#EA4317]/10 to-transparent blur-3xl pointer-events-none"></div>

        {/* Futuristic AI Background Graphic */}
        <div className="absolute -top-4 sm:-top-8 right-0 sm:right-2 lg:right-6 w-[360px] sm:w-[460px] lg:w-[540px] h-[360px] sm:h-[460px] lg:h-[540px] pointer-events-none opacity-90 select-none overflow-hidden z-0">
          <img
            src={heroAiImg}
            alt="AI Technology Background"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Row: Title on Left, Subtext on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 sm:mb-10">
            <div className="lg:col-span-7">
              {/* Badge matching Figma: Diamond icon + OUR SERVICES */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FCEEE3] text-[#101820] border border-[#F7D8C5] shadow-xs">
                <span className="w-2 h-2 rounded-[2px] rotate-45 bg-[#EA4317]"></span>
                <span>OUR SERVICES</span>
              </div>

              <h1 className="mt-3.5 text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black text-[#101820] tracking-tight leading-[1.06]">
                End-to-End <br />
                IT Solutions <br />
                for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4317] to-[#FA631F]">
                  Your Growth
                </span>
              </h1>
            </div>

            <div className="lg:col-span-5 pb-1 flex flex-col justify-between items-start lg:items-end gap-3">
              <p className="text-base sm:text-lg text-[#525F70] leading-relaxed max-w-lg">
                From strategy to execution, we provide comprehensive digital solutions to help businesses and individuals achieve their goals.
              </p>

              {/* Navigation Arrows for the single-row cards */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollSlider('left')}
                  aria-label="Previous services"
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#EA4317] text-[#101820] hover:text-white border border-gray-200/90 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlider('right')}
                  aria-label="Next services"
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#EA4317] text-[#101820] hover:text-white border border-gray-200/90 shadow-sm flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

          {/* Single-Row Horizontal Cards Track matching Screenshot */}
          <div className="relative mb-7 sm:mb-8">
            <div
              ref={sliderRef}
              className="flex gap-3.5 sm:gap-4 overflow-x-auto scroll-smooth no-scrollbar py-2 px-0.5 items-stretch"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {servicesData.map((service, idx) => (
                <div
                  key={service.id}
                  className="shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(16.666%-14px)] min-w-[170px] sm:min-w-[190px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <ServiceCard
                    service={service}
                    index={idx}
                    onSelect={() => {
                      const detailTarget = servicesDetailData[idx]?.id;
                      if (detailTarget) scrollToDetail(detailTarget);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FIRST BANNER CTA: Let's Build Something Great Together
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8 sm:mb-10">
        <div className="relative rounded-[24px] sm:rounded-[28px] bg-[#0A0D14] px-6 sm:px-10 py-5 sm:py-6.5 overflow-hidden border border-white/10 shadow-2xl">
          {/* Top & Bottom Fiery Horizon Glowing Edges */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>

          {/* Warm ember atmospheric flares */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#EA4317]/25 rounded-full blur-[70px] pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#EA4317]/25 rounded-full blur-[70px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-white tracking-tight leading-tight">
                Let's Build Something Great Together
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-300">
                Transform your ideas into powerful digital solutions.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FA631F] to-[#E53916] hover:from-[#E53916] hover:to-[#FA631F] text-[#101820] font-black text-sm sm:text-base shadow-lg shadow-orange-950/40 hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR WORKING PROCESS
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 sm:mb-12 relative">
        {/* Left-Aligned Header matching Figma */}
        <div className="text-left mb-6 sm:mb-7">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#101820] tracking-tight">
            Our Working Process
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#525F70]">
            A simple and transparent process to deliver the best results.
          </p>
        </div>

        {/* 5 Step Process Horizontal Progression with orange connector arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-4 items-stretch">
          {workingProcessData.map((step, idx) => {
            const isLast = idx === workingProcessData.length - 1;
            return (
              <div key={step.step} className="relative flex flex-col">
                <div className="bg-white rounded-[24px] sm:rounded-[26px] p-5 sm:p-5.5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between text-left group hover:-translate-y-1">
                  <div>
                    {/* Top Row: Orange Number with subtle gray chevron next to it */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="text-xl sm:text-2xl font-black text-[#EA4317] leading-none tracking-tight">
                        {step.step}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-300 stroke-[2] mt-0.5" />
                    </div>

                    <h3 className="text-base sm:text-[17px] font-bold text-[#101820] mb-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#525F70] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Solid Orange Connector Arrow between cards for desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#EA4317] drop-shadow-xs pointer-events-none">
                    <ChevronRight className="w-5 h-5 stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          4. OUR SERVICES IN DETAIL (Arch Scroll Pinned Effect)
          ========================================================================= */}
      <section className="arch-section px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FCEEE3] text-[#101820] border border-[#F7D8C5] shadow-xs mb-3">
            <span className="w-2 h-2 rounded-[2px] rotate-45 bg-[#EA4317]"></span>
            <span>EXPERTISE BREAKDOWN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#101820] tracking-tight">
            Our Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4317] to-[#FA631F]">Detail</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#525F70]">
            We provide a wide range of digital solutions tailored to your business needs.
          </p>
        </div>

        {/* The Arch Split Pinning Container */}
        <div className="arch">
          {/* Left Column: Scrollable Service Detail Cards */}
          <div className="arch__left">
            {servicesDetailData.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="arch__info"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 border border-gray-100/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300">
                  {/* Number Badge & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#EA4317] to-[#FA631F] text-white font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {item.number}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-black text-[#101820] tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[13.5px] text-[#525F70] leading-relaxed mb-5 max-w-xl">
                    {item.description}
                  </p>

                  {/* 2-Column Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 mb-6">
                    <div className="space-y-2.5">
                      {item.featuresCol1.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#EA4317]/15 text-[#EA4317] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-semibold text-[#101820]">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2.5">
                      {item.featuresCol2.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#EA4317]/15 text-[#EA4317] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-[13px] font-semibold text-[#101820]">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link & Service Indicators */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#FA631F] to-[#E53916] hover:from-[#E53916] hover:to-[#FA631F] text-white font-bold text-xs sm:text-[13px] transition-all duration-300 shadow-sm hover:scale-105 group/btn"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>

                    <span className="text-xs font-bold text-[#8E98A8] tracking-wider uppercase">
                      0{parseInt(item.number, 10)} OF 08
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Pinned Stack of Images */}
          <div className="arch__right">
            {servicesDetailData.map((item, idx) => (
              <div
                key={item.id}
                data-index={servicesDetailData.length - idx}
                className="img-wrapper"
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SECOND BANNER CTA: Have a Project in Mind?
          ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8 sm:mb-10">
        <div className="relative rounded-[24px] sm:rounded-[28px] bg-[#0A0D14] px-6 sm:px-10 py-5 sm:py-6.5 overflow-hidden border border-white/10 shadow-2xl">
          {/* Top & Bottom Fiery Horizon Glowing Edges */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EA4317] to-transparent shadow-[0_0_20px_#EA4317]"></div>

          {/* Warm ember atmospheric flares */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#EA4317]/25 rounded-full blur-[70px] pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#EA4317]/25 rounded-full blur-[70px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black text-white tracking-tight leading-tight">
                Have a <span className="text-[#EA6E2A]">Project</span> in Mind?
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-300">
                Let's discuss how we can help you achieve your goals with the right technology solutions.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FA631F] to-[#E53916] hover:from-[#E53916] hover:to-[#FA631F] text-[#101820] font-black text-sm sm:text-base shadow-lg shadow-orange-950/40 hover:scale-105 transition-all duration-300"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FAQ SECTION: Frequently Asked Questions
          ========================================================================= */}
      <section className="pt-2 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-0">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#101820] tracking-tight">
            Frequently <span className="text-[#EA6E2A]">Asked Questions</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#525F70]">
            Here are some common questions about our services.
          </p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-start">
          {/* Column 1 */}
          <div className="space-y-3">
            {servicesFaqData.col1.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-[16px] border border-gray-100 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-semibold text-xs sm:text-sm text-[#101820] leading-snug">
                      {faq.question}
                    </span>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-gray-400 hover:text-[#EA6E2A]">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            {servicesFaqData.col2.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-[16px] border border-gray-100 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-semibold text-xs sm:text-sm text-[#101820] leading-snug">
                      {faq.question}
                    </span>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-gray-400 hover:text-[#EA6E2A]">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-gray-100">
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
      </section>
    </div>
  );
}
