import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial, index = 0, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`relative rounded-[26px] p-7 transition-all duration-300 flex flex-col justify-between ${
        dark
          ? 'bg-[#111820] text-white border border-white/10 hover:border-[#D97736]/50 shadow-lg'
          : 'bg-white text-[#101820] border border-[#E8E3DD] hover:border-[#C95A22]/40 shadow-sm hover:shadow-xl'
      }`}
    >
      <div>
        {/* Top: Stars and Quote icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#D97736] text-[#D97736]"
              />
            ))}
          </div>
          <Quote className="w-8 h-8 text-[#C95A22]/20" />
        </div>

        {/* Quote text */}
        <p
          className={`text-sm sm:text-base leading-relaxed italic mb-6 ${
            dark ? 'text-gray-200' : 'text-[#333E48]'
          }`}
        >
          "{testimonial.quote}"
        </p>
      </div>

      {/* User profile */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100/60 dark:border-white/10">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#C95A22]/30"
          loading="lazy"
        />
        <div>
          <h4
            className={`text-sm font-extrabold ${
              dark ? 'text-white' : 'text-[#101820]'
            }`}
          >
            {testimonial.name}
          </h4>
          <p
            className={`text-xs ${
              dark ? 'text-[#D97736]' : 'text-[#C95A22]'
            } font-semibold`}
          >
            {testimonial.role}
          </p>
          {testimonial.company && (
            <p className="text-[11px] text-[#667085]">{testimonial.company}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
