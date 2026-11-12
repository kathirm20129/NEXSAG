import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function CTASection({
  title = "Let's Build Something Great Together",
  subtitle = "Transform your ideas into powerful digital solutions with NexSAG Technology.",
  buttonText = "Start Your Project →",
  buttonLink = "/contact",
  className = ""
}) {
  return (
    <section className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#080B10] via-[#111820] to-[#080B10] p-8 sm:p-12 lg:p-16 overflow-hidden border border-white/10 shadow-2xl text-white"
        >
          {/* Subtle bronze circular blur backdrops */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#C95A22]/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#D97736]/15 blur-[100px] pointer-events-none" />

          {/* Decorative curved glowing ribbon line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#D97736]/60 to-transparent"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-gray-300 font-normal">
                {subtitle}
              </p>
            </div>

            <div className="shrink-0">
              <Button to={buttonLink} size="lg" variant="primary">
                {buttonText.replace('→', '').trim()}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
