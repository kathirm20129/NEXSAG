import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group bg-white rounded-[22px] overflow-hidden border border-[#E8E3DD] hover:border-[#C95A22] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        {course.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-[#C95A22] text-white shadow-md">
            {course.badge}
          </span>
        )}
        <span className="absolute bottom-3 left-3 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
          {course.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-[#101820] group-hover:text-[#C95A22] transition-colors mb-2">
            {course.title}
          </h3>
          <p className="text-xs font-semibold text-[#C95A22] mb-3">
            {course.technologies}
          </p>

          <div className="flex items-center gap-4 text-xs text-[#667085] pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C95A22]" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#C95A22]" />
              <span>{course.level}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 flex items-center justify-between border-t border-gray-100">
          <span className="text-xs font-bold text-gray-500">Live Mentorship</span>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#FFF9F2] text-[#C95A22] border border-[#C95A22]/30 group-hover:bg-[#C95A22] group-hover:text-white transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
