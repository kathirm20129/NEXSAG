import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Users, Briefcase, Award, TrendingUp, Sparkles, Building2, BookOpen } from 'lucide-react';

const iconMap = {
  check: CheckCircle2,
  users: Users,
  briefcase: Briefcase,
  award: Award,
  trending: TrendingUp,
  sparkles: Sparkles,
  building: Building2,
  book: BookOpen
};

function Counter({ endValue, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // extract pure number
  const numericValue = parseInt(endValue.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 1800; // ms

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function StatCard({
  value,
  label,
  icon = 'check',
  dark = false,
  className = ''
}) {
  const IconComponent = iconMap[icon] || CheckCircle2;
  const suffix = value.includes('%') ? '%' : value.includes('+') ? '+' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
        dark
          ? 'bg-[#111820]/90 border border-white/10 hover:border-[#D97736]/40 shadow-lg'
          : 'bg-white border border-[#E8E3DD] hover:border-[#C95A22]/40 shadow-sm hover:shadow-md'
      } ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C95A22]/15 to-[#D97736]/20 flex items-center justify-center text-[#C95A22] shrink-0 border border-[#C95A22]/20">
        <IconComponent className="w-6 h-6 stroke-[2]" />
      </div>
      <div>
        <div
          className={`text-2xl sm:text-3xl font-extrabold ${
            dark ? 'text-white' : 'text-[#101820]'
          }`}
        >
          <Counter endValue={value} suffix={suffix} />
        </div>
        <div
          className={`text-xs sm:text-sm font-medium leading-snug mt-0.5 ${
            dark ? 'text-gray-300' : 'text-[#667085]'
          }`}
        >
          {label}
        </div>
      </div>
    </motion.div>
  );
}
